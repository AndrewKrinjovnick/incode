import React, { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { publicRoute } from "../../router";

const AppRouter: FC = () => {
  return (
    <Routes>
      {publicRoute.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRouter;