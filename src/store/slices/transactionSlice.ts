import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITransaction } from "../../types";

export interface ITransactionState {
  allTransactions: ITransaction[];
}

export interface IUpdateAction {
  nameBefore: string;
  nameAfter: string;
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
    updateTransactions(state, action: PayloadAction<IUpdateAction>) {
      state.allTransactions = state.allTransactions.map((transaction) => {
        if (transaction.category === action.payload.nameBefore) {
          return {
            ...transaction,
            category: action.payload.nameAfter,
          };
        }
        return transaction;
      });
    },
  },
});

export const { addTransaction, updateTransactions } = transactionSlice.actions;

export const transactionReducer = transactionSlice.reducer;
