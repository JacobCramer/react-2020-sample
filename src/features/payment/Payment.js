import React from 'react'
import { useSelector, useDispatch } from 'react-redux';

import {
  changeAmount,
  changeAllocation,
  changePrioritization,
  selectPayment,
} from './paymentSlice';

export function Payment() {
  const payment = useSelector(selectPayment)
  const dispatch = useDispatch();

  const handleChangeAllocation = event =>
    dispatch(changeAllocation(event.target.value))

  const handleChangePrioritization = event =>
    dispatch(changePrioritization(event.target.value))

  const handleChangeAmount = event =>
    dispatch(changeAmount(event.target.value))

  return (
    <div>
      <div className={`surplus-settings ${payment.allocation == 'PRIORITY_FIRST' ? 'uses-priority' : ''}`}  >
        <div className="allocation">
          <p>{'Allocation'}</p>
          <select onChange={handleChangeAllocation} value={payment.allocation}>
            <option value="PRIORITY_FIRST">{'Priority first'}</option>
            <option value="EVEN_SPLIT">{'Even split'}</option>
            <option value="PROPORTIONAL_SPLIT">{'Proportional split'}</option>
          </select>
        </div>

        <div className="prioritization">
          <p>{'Prioritization'}</p>
          <select onChange={handleChangePrioritization} value={payment.prioritization}>
            <option value="HIGHEST_APR">{'Highest APR'}</option>
            <option value="LOWEST_OWED">{'Lowest owed'}</option>
            <option value="AS_ENTERED">{'As listed'}</option>
          </select>
        </div>
      </div>
      <div className="payment">
        <p>{'Monthly Payments'}</p>
        <input
          type="number"
          placeholder="Enter Here"
          onChange={handleChangeAmount}
          value={payment.amount}
        />
      </div>
    </div>
  )
}
