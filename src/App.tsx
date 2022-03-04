import { CssBaseline } from "@mui/material";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { AppRouter, ErrorBoundary, MainHeader } from "./components";
import { store } from "./store";

function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <BrowserRouter>
          <CssBaseline />
          <MainHeader />
          <AppRouter />
        </BrowserRouter>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
