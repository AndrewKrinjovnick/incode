import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { ICategory, ID } from "../../types";

export interface ICategoriesByID {
  [id: ID]: ICategory;
}

export interface ITransactionState {
  allCategories: ICategory[];
  categoriesByID: ICategoriesByID;
}

const initCategoies = ["Other", "Salary", "Gifts"];

const categoriesByID: ICategoriesByID = {};

const initialState: ITransactionState = {
  allCategories: initCategoies.map((category) => {
    const ID = uuidv4();
    const newCategory = {
      id: ID,
      label: category,
    };
    categoriesByID[ID] = newCategory;
    return newCategory;
  }),
  categoriesByID,
};

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addCategory(state, action: PayloadAction<ICategory>) {
      state.allCategories.push(action.payload);
      state.categoriesByID[action.payload.id] = action.payload;
    },
    removeCategory(state, action: PayloadAction<ID>) {
      state.allCategories = state.allCategories.filter(
        (category) => category.id !== action.payload
      );
    },
    updateCategory(state, action: PayloadAction<ICategory>) {
      state.allCategories = state.allCategories.map((category) => {
        if (category.id === action.payload.id) {
          return action.payload;
        }
        return category;
      });
      state.categoriesByID[action.payload.id] = action.payload;
    },
  },
});

export const { addCategory, removeCategory, updateCategory } =
  categorySlice.actions;

export const categoryReducer = categorySlice.reducer;
