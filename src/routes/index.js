import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Login, Main } from "../pages";
const RoutesLink = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/v1" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesLink;
