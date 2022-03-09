import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ID, ITransaction } from "../../types";

export interface ITransactionState {
  allTransactions: ITransaction[];
  transactionArchive: ITransaction[];
  transactionsArchiveByID: { [id: string]: ITransaction };
}

export interface IUpdateAction {
  nameBefore: string;
  nameAfter: string;
}

const initialState: ITransactionState = {
  allTransactions: [],
  transactionArchive: [],
  transactionsArchiveByID: {},
};

const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addTransaction(state, action: PayloadAction<ITransaction>) {
      state.allTransactions.push(action.payload);
    },
    addToArchive(state, action: PayloadAction<ID>) {
      const transaction = state.allTransactions.find(
        (transaction) => transaction.id === action.payload
      );
      if (transaction) {
        state.transactionArchive.push(transaction);
        state.transactionsArchiveByID[action.payload] = transaction;
      }
    },
  },
});

export const { addTransaction, addToArchive } = transactionSlice.actions;

export const transactionReducer = transactionSlice.reducer;
