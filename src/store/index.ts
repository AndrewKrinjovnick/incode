import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { categoryReducer } from "./slices/categorySlice";
import { transactionReducer } from "./slices/transactionSlice";

export type AppDispatch = typeof store.dispatch;
export type IRootState = ReturnType<typeof store.getState>;

const rootReducer = combineReducers({
  transactions: transactionReducer,
  categories: categoryReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export default store;
