import React from "react";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Reservation from "../components/Reservation";
import Footer from "../components/Footer";
import ContactContent from "../components/ContactContent";

export default function ContactPage() {
  return (
    <div>
      <Header />
      <Contact />
      <ContactContent />
      <Reservation />
      <Footer />
    </div>
  );
}
