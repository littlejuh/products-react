import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListPage from "./pages/ProductListPage";
import ProductFormPage from "./pages/ProductFormPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/new" element={<ProductFormPage />} />
        <Route path="/edit/:id" element={<ProductFormPage />} />
      </Routes>
    </Router>
  );
}
