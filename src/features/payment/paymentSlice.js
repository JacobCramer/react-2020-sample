import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'payment',
  initialState: {
    amount: '',
    allocation: 'PRIORITY_FIRST',
    prioritization: 'HIGHEST_APR',
  },
  reducers: {

    // Changes the amount the user plans to pay per month
    changeAmount: (state, action) => {
      state.amount = action.payload
    },
  
    // Changes the method the user will use to allocate extra funds
    changeAllocation: (state, action) => {
      state.allocation = action.payload
    },
    
    // Changes which debts the user will attempt to pay off first
    changePrioritization: (state, action) => {
      state.prioritization = action.payload
    }
  },
});

export const { changeAmount, changeAllocation, changePrioritization } = slice.actions;

export const selectPayment = state => state.payment;

export default slice.reducer;
