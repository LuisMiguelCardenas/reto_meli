import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home, ProductDatailPage } from "../pages";
import { NavBar } from "../ui";

export const AppRouter = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="item/:id" element={<ProductDatailPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};
