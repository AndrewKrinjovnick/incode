import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { AppRouter, ErrorBoundary, MainHeader } from "./components";
import "normalize.css";
import { store } from "./store";

function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <BrowserRouter>
          <MainHeader />
          <AppRouter />
        </BrowserRouter>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
