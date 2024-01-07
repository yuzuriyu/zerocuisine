import React from "react";
import Header from "../components/Header";
import SelectedFood from "../components/SelectedFood";
import Reservation from "../components/Reservation";
import Footer from "../components/Footer";

export default function SelectedFoodPage() {
  return (
    <div>
      <Header />
      <SelectedFood />
      <Reservation />
      <Footer />
    </div>
  );
}
