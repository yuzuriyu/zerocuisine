import React from "react";
import HomePage from "./pages/HomePage";
import FoodContextProvider from "./context/FoodContext";
import MenuPage from "./pages/MenuPage";
import ContactPage from "./pages/ContactPage";
import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import BlogPage from "./pages/BlogPage";
import SelectedFoodPage from "./pages/SelectedFoodPage";
import ErrorPage from "./pages/ErrorPage";

export default function App() {
  return (
    <FoodContextProvider>
      <div className="font-poppins">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/food/:id" element={<SelectedFoodPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
        </Routes>
      </div>
    </FoodContextProvider>
  );
}
