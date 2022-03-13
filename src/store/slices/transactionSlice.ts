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
      state.allTransactions = state.allTransactions.filter((transaction) => {
        if (transaction.id === action.payload) {
          state.transactionArchive.push(transaction);
          state.transactionsArchiveByID[action.payload] = transaction;
          return null;
        }
        return transaction;
      });
    },
    returnFromArchive(state, action: PayloadAction<ID>) {
      state.transactionArchive = state.transactionArchive.filter(
        (transaction) => {
          if (transaction.id === action.payload) {
            state.allTransactions.push(transaction);
            delete state.transactionsArchiveByID[action.payload];
            return null;
          }
          return transaction;
        }
      );
    },
  },
});

export const { addTransaction, addToArchive, returnFromArchive } =
  transactionSlice.actions;

export const transactionReducer = transactionSlice.reducer;
