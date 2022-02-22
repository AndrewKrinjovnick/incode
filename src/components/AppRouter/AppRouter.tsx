import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { publicRoute } from "../../router";

const AppRouter = () => {
  return (
    <Routes>
      {publicRoute.map((route) => (
        <Route path={route.path} element={route.element} />
      ))}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRouter;
