import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

// Helper function to create a new debt object
function getNewDebt() {
  return {
    'uid'    : uuidv4(),
    'owed'   : ``,
    'apr'    : ``,
    'monthly': ``,
  }
}

export const slice = createSlice({
  name: 'debts',
  initialState: [
    getNewDebt(),
  ],
  reducers: {

    // Adds a new debt
    addDebt: state => {
      state.push(getNewDebt())
    },
  
    // Deletes a debt
    // uid: id of the debt to delete
    deleteDebt: (state, action) => {
      state.splice(state.findIndex(debt => debt.uid === action.payload.uid), 1)
    },
  
    // Changes a value on a given debt
    // uid: id of the debt to change
    // key: key of the debt to change (e.g. 'apr')
    // value: new value to assign to the key
    changeDebt: (state, action) => {
      state[state.findIndex(debt => debt.uid === action.payload.uid)][action.payload.key] = action.payload.value
    },

    // Moves a debt from one index to another
    // source: starting index of debt to move
    // destination: index for debt to move to
    moveDebt: (state, action) => {
      state.splice(action.payload.destination, 0, state.splice(action.payload.source, 1)[0])
    }
  },
});

export const { addDebt, deleteDebt, changeDebt, moveDebt } = slice.actions;

export const selectDebts = state => state.debts;

export default slice.reducer;
