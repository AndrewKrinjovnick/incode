import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITransaction } from "../../types";

export interface ITransactionState {
  allTransactions: ITransaction[];
}

const initialState: ITransactionState = {
  allTransactions: [],
};

const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addTransaction(state, action: PayloadAction<ITransaction>) {
      state.allTransactions.push(action.payload);
    },
  },
});

export const { addTransaction } = transactionSlice.actions;

export const transactionReducer = transactionSlice.reducer;
