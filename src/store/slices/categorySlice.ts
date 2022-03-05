import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { ICategory, ID } from "../../types";

export interface ITransactionState {
  allCategories: ICategory[];
}

const initCategoies = ["Other", "Salary", "Gifts"];

const initialState: ITransactionState = {
  allCategories: initCategoies.map((category) => ({
    id: uuidv4(),
    label: category,
  })),
};

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addCategory(state, action: PayloadAction<ICategory>) {
      state.allCategories.push(action.payload);
    },
    removeCategory(state, action: PayloadAction<ID>) {
      state.allCategories = state.allCategories.filter(
        (category) => category.id !== action.payload
      );
    },
    updateCategory(state, action: PayloadAction<ICategory>) {
      state.allCategories = state.allCategories.map((category) => {
        if (category.id === action.payload.id) {
          return {
            ...category,
            label: action.payload.label,
          };
        }
        return category;
      });
    },
  },
});

export const { addCategory, removeCategory, updateCategory } =
  categorySlice.actions;

export const categoryReducer = categorySlice.reducer;
