import { configureStore } from '@reduxjs/toolkit';
import debtsReducer from '../features/debts/debtsSlice';
import paymentReducer from '../features/payment/paymentSlice';

export default configureStore({
  reducer: {
    debts: debtsReducer,
    payment: paymentReducer,
  },
});
