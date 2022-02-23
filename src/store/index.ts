import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "./reducers/transactionReducer";

export type AppDispatch = typeof store.dispatch;
export type IRootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    transactions: transactionReducer,
  },
});
