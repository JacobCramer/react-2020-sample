import React from 'react'
import { useSelector } from 'react-redux';

import { getProjectionMessage } from './projectionCalc'

import { selectDebts } from '../debts/debtsSlice';
import { selectPayment } from '../payment/paymentSlice';

export function Projection() {
  const debt = useSelector(selectDebts)
  const payment = useSelector(selectPayment)

  return (
    <p className="projection">{getProjectionMessage(debt, payment)}</p>
  )
}
