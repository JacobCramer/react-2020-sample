// Helper function for rounding off our payments
function roundToTwoDecimals(num) {
  return Math.round(num * 100) / 100
}

function getMinimumPayment(debts) {
  return debts.reduce((total, debt) => total + Number(debt.monthly), 0)
}

function getSortFunc(payment) {
  switch (payment.prioritization) {
    case 'HIGHEST_APR':
      // b - a results in highest first sorting
      return (a, b) => b.apr - a.apr

    case 'LOWEST_OWED':
      // a - b results in lowest first sorting
      return (a, b) => a.owed - b.owed

    case 'AS_ENTERED':
    default:
      // Maintain the original order
      return () => -1
  }
}

function filterUnpaidDebt(debts) {
  // Avoid creating a new array if we don't have to
  if (debts.every(debt => debt.owed > 0))
    return debts

  // Remove debts that are paid
  return debts.filter(debt => debt.owed > 0)
}

function addMonthlyInterest(debt) {
  // Calculate our monthly interest rate
  const interest = (debt.apr / 12.0) / 100.0

  // Increase our amount owed as appropriate
  debt.owed = debt.owed + (debt.owed * interest)
  debt.owed = roundToTwoDecimals(debt.owed)
}

function getMonthsToPay(debts, payment) {
  const monthlyPayment = Number(payment.amount)
  const minimumPayment = getMinimumPayment(debts)

  // Don't even bother calculating if we're not paying
  if (monthlyPayment === 0)
    return 0

  // We're not even covering the monthly minimum! It would take forever
  if (monthlyPayment < minimumPayment)
    return Infinity

  // Prepare our debt
  let unpaidDebt = debts
    // Convert string data into numbers
    .map(debt => ({
      'owed'   : Number(debt.owed),
      'apr'    : Number(debt.apr),
      'monthly': Number(debt.monthly),
    }))
    // Remove any debt the user doesn't owe anything on
    .filter(debt => debt.owed > 0)
    // Sort based on the user's selected prioritization
    .sort(getSortFunc(payment))

  // Set up our counter
  let monthsToPay = 0

  while (unpaidDebt.length && monthsToPay <= 1200) {
    // Update our counter
    monthsToPay++

    // Add our interest for this month
    unpaidDebt.forEach(addMonthlyInterest)

    // Determine surplus available over the monthly minimum, if any
    let surplus = monthlyPayment - getMinimumPayment(unpaidDebt)

    // Handle minimum monthly payments first
    unpaidDebt.forEach(debt => {

      // Add to the surplus if we owe less than the minimum payment
      if (debt.owed < debt.monthly)
        surplus += (debt.monthly - debt.owed)

      // Reduce the amount owed by the minimum required payment
      debt.owed = Math.max(debt.owed - debt.monthly, 0.0)
    })

    // Remove any debt that's been fully paid, if any
    unpaidDebt = filterUnpaidDebt(unpaidDebt)

    // Use the surplus to pay off remaining debts as appropriate
    unpaidDebt = applySurplus(unpaidDebt, surplus, payment.allocation)
  }

  // Return our counter
  return monthsToPay
}

function applySurplus(debts, surplus, allocation) {
  switch(allocation) {
    case 'EVEN_SPLIT':
      return allocateEvenSplit(debts, surplus)
  
    case 'PRIORITY_FIRST':
      return allocatePriorityFirst(debts, surplus)
  
    case 'PROPORTIONAL_SPLIT':
      return allocateProportionalSplit(debts, surplus)
  }
}

function allocateEvenSplit(debts, surplus) {
  while (surplus > 0.0 && debts.length) {

    // Split our surplus up evenly between all debts
    const payment = roundToTwoDecimals(surplus / debts.length)
    surplus = 0.0

    // Main payment loop
    debts.forEach(debt => {

      // If the payment is more than owed, add the extra to surplus
      surplus += Math.max(payment - debt.owed, 0.0)

      // Pay the debt
      debt.owed = Math.max(debt.owed - payment, 0.0)
    })

    // Remove debts that are fully paid
    debts = filterUnpaidDebt(debts)
  }

  return debts
}

function allocatePriorityFirst(debts, surplus) {
  while (surplus > 0.0 && debts.length) {
    // Main payment loop
    debts.forEach(debt => {

      // Use as much of the surplus as possible
      const payment = surplus
      surplus = 0.0

      // If the payment is more than owed, add the extra to surplus
      surplus += Math.max(payment - debt.owed, 0.0)

      // Pay the debt
      debt.owed = Math.max(debt.owed - payment, 0.0)
    })

    // Remove debts that are fully paid
    debts = filterUnpaidDebt(debts)
  }

  return debts
}

function allocateProportionalSplit(debts, surplus) {
  while (surplus > 0.0 && debts.length) {

    // Track our surplus so we know how much to give to each debt
    const originalFunds = surplus
    let remainingFunds = surplus
    surplus = 0.0

    // Figure out how much we owe between all debts
    const totalOwed = debts.reduce((total, debt) => total + debt.owed, 0)

    // Main payment loop
    debts.forEach(debt => {

      // Allocate funds proportional to the size of the amount owed
      let payment = originalFunds * (debt.owed / totalOwed)

      // Force payment to two decimals
      payment = roundToTwoDecimals(payment)

      // Ensure we aren't trying to pay more than we have
      payment = Math.min(payment, remainingFunds)

      // Remove this payment from our available funds
      remainingFunds -= payment

      // If the payment is more than owed, add the extra to surplus
      surplus += Math.max(payment - debt.owed, 0.0)

      // Pay the debt
      debt.owed = Math.max(debt.owed - payment, 0.0)
    })

    // Remove debts that are fully paid
    debts = filterUnpaidDebt(debts)
  }

  return debts
}

export function getProjectionMessage(debts, payment) {

  // Skip showing a message if the user hasn't input anything
  if (payment.amount === '')
    return ''

  // Inform user if their payment is below the minimum required
  const minimumPayment = getMinimumPayment(debts)
  if (Number(payment.amount) < minimumPayment)
    return `Be sure to enter an amount at least as high as the total
    minimum monthly payment of ${minimumPayment.toFixed(2)}.`

  // Calculate months required to pay off debts
  const monthsToPay = getMonthsToPay(debts, payment)
  
  // Make sure the user has actually input amounts owed
  if (monthsToPay === 0)
    return 'Be sure to enter amounts owed for your debts.'

  // Special case to avoid completely ridiculous outputs
  if (monthsToPay > (12 * 100) )
    return `By paying $${payment.amount} every month, it will take over
    100 years to pay off all of your debts!`

  // Create an array to store our message
  const message = []

  // Split into years and months
  const years = Math.floor(monthsToPay / 12)
  const months = monthsToPay % 12

  // Put together the message
  message.push(`By paying $${payment.amount} every month, it will take
    roughly `)

  if (years > 0)
    message.push(`${years} year${years > 1 ? 's' : ''} `)

  if (years > 0 && months > 0)
    message.push('and ')

  if (months > 0)
    message.push(`${months} month${months > 1 ? 's' : ''} `)

  message.push('to pay off all of your debts.')

  // Join message into a string and return
  return message.join('')
}