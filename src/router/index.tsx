import React from "react";
import { Graph, Home } from "../pages";

export const publicRoute = [
  { path: "/", element: <Home /> },
  { path: "/graph", element: <Graph /> },
];
