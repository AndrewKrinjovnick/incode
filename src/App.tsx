import { CssBaseline } from "@mui/material";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./layouts/AppRouter/AppRouter";
import { ErrorBoundary } from "./layouts/ErrorBoundary/ErrorBoundary";
import { MainHeader } from "./components/MainHeader/MainHeader";
import store, { persist } from "./store";

function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persist}>
          <BrowserRouter>
            <CssBaseline />
            <MainHeader />
            <AppRouter />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
