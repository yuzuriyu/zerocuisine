import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import Gallery from "../components/Gallery";
import Calories from "../components/Calories";
import Testimonial from "../components/Testimonial";
import Reservation from "../components/Reservation";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div>
      <Header />
      <Hero />
      <Menu />
      <Gallery />
      <Calories />
      <Testimonial />
      <Reservation />
      <Footer />
    </div>
  );
}
