import React from "react";
import { GraphPage } from "../pages/GraphPage/GraphPage";
import { HomePage } from "../pages/HomePage/HomePage";

export const publicRoute = [
  { path: "/", element: <HomePage /> },
  { path: "/graph", element: <GraphPage /> },
];
