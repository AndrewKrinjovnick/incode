import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ID, ITransaction } from "../../types";

type FilterBy = string;

export interface ITransactionState {
  allTransactions: ITransaction[];
  filteredTransactions: ITransaction[];
}

export interface IUpdateAction {
  nameBefore: string;
  nameAfter: string;
}

const initialState: ITransactionState = {
  allTransactions: [],
  filteredTransactions: [],
};

const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addTransaction(state, action: PayloadAction<ITransaction>) {
      state.allTransactions.push(action.payload);
      state.filteredTransactions = state.allTransactions;
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
      state.filteredTransactions = state.allTransactions;
    },
    addToArchive(state, action: PayloadAction<ID>) {
      state.filteredTransactions = state.filteredTransactions.map(
        (transaction) => {
          if (transaction.id === action.payload) {
            transaction.archived = !transaction.archived;
          }
          return transaction;
        }
      );
      state.allTransactions = state.allTransactions.map((transaction) => {
        if (transaction.id === action.payload) {
          transaction.archived = !transaction.archived;
        }
        return transaction;
      });
    },
    transactionFiltering(state, action: PayloadAction<FilterBy>) {
      if (state.allTransactions[0].hasOwnProperty(action.payload)) {
        state.filteredTransactions = state.filteredTransactions.filter(
          (transaction) => {
            return transaction[action.payload];
          }
        );
        return;
      }
      state.filteredTransactions = state.allTransactions;
    },
  },
});

export const {
  addTransaction,
  updateTransactions,
  addToArchive,
  transactionFiltering,
} = transactionSlice.actions;

export const transactionReducer = transactionSlice.reducer;
