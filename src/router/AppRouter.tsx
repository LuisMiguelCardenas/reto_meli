import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home, ProductDatailPage, SearchPage } from "../pages";
import { NavBar } from "../ui";

export const AppRouter = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="item/:id" element={<ProductDatailPage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};
