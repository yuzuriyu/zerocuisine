import React from "react";
import HomePage from "./pages/HomePage";
import FoodContextProvider from "./context/FoodContext";

export default function App() {
  return (
    <FoodContextProvider>
      <div className="font-poppins">
        <HomePage />
      </div>
    </FoodContextProvider>
  );
}
