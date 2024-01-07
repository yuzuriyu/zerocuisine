import Header from "../components/Header";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import Gallery from "../components/Gallery";
import Calories from "../components/Calories";
import Testimonial from "../components/Testimonial";
import Reservation from "../components/Reservation";
import Footer from "../components/Footer";
import { useRef } from "react";

export default function HomePage() {
  const reservationRef = useRef();

  const scrollIntoView = () => {
    reservationRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <Header />
      <Hero scrollIntoView={scrollIntoView} />
      <Menu />
      <Gallery />
      <Calories />
      <Testimonial />
      <Reservation reservationRef={reservationRef} />
      <Footer />
    </div>
  );
}
