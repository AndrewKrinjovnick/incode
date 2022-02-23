import React from "react";
import { GraphPage, HomePage } from "../pages";

export const publicRoute = [
  { path: "/", element: <HomePage /> },
  { path: "/graph", element: <GraphPage /> },
];
