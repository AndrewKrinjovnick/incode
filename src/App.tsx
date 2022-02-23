import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRouter, ErrorBoundary, MainHeader } from "./components";
import "normalize.css";

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <MainHeader />
        <AppRouter />
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
