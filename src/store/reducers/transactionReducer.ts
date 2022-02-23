import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { ITransaction, ICategory } from "../../types";

export interface ITransactionState {
  allTransactions: ITransaction[];
  allCategories: ICategory[];
}

const initCategoies = ["Other", "Salary", "Gifts"];

const initialState: ITransactionState = {
  allTransactions: [],
  allCategories: initCategoies.map((category) => ({
    id: uuidv4(),
    label: category,
  })),
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addTransaction(state, action: PayloadAction<ITransaction>) {
      state.allTransactions.push(action.payload);
    },
    addCategory(state, action: PayloadAction<ICategory>) {
      state.allCategories.push(action.payload);
    },
    removeCategory(state, action: PayloadAction<string>) {
      state.allCategories = state.allCategories.filter(
        (category) => category.id !== action.payload
      );
    },
  },
});

export const { addTransaction, addCategory, removeCategory } =
  transactionsSlice.actions;

export default transactionsSlice.reducer;
