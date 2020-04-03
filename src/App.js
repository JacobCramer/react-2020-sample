import React from 'react';
import { Debts } from './features/debts/Debts';
import { Payment } from './features/payment/Payment';
import { Projection } from './features/projection/Projection';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="information-header">
        {'Heads up!'}
      </header>
      <p className="information">
        {`The following is a quick sample of code that was quickly put together over
        the course of about two days, as most of my larger projects are stuck behind
        unspoken NDAs.`}
      </p>
      <header className="app-header">
        {'Debt Repayment Calculator'}
      </header>
      <p className="instructions">
        {'Enter the amount owed, APR, and minimum monthly payment for each debt.'}
      </p>

      <Debts />
      <Payment />
      <Projection />

      <p className="disclaimer">
        {`Disclaimer: Every loan is different. While this tool provides a
          reasonable estimation, it can not account for all fees, charges,
          policies, and other possibilities. For a full debt repayment
          analysis, consult a financial planner.`}
      </p>
      <p className="credit">
        Icons made by <a href="https://www.flaticon.com/authors/google" title="Google">Google</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
      </p>
    </div>
  );
}

export default App;
