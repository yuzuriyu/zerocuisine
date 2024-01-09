import React, { useContext, useState, useEffect } from "react";
import { FoodContext } from "../context/FoodContext";
import quotationMark from "../assets/quotationMark.png";

export default function Testimonial() {
  const { testimonials } = useContext(FoodContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Check if testimonials is defined and not an empty array
    if (testimonials && testimonials.length > 0) {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 10000); // Set the duration here (in milliseconds)

      return () => clearInterval(intervalId); // Clear interval on component unmount
    }
  }, [testimonials]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (!testimonials || testimonials.length === 0) {
    return null; // or handle the case where testimonials is not available or empty
  }

  return (
    <div className="w-11/12 m-auto py-20 md:w-10/12">
      <div className="testimonial-carousel">
        <div className="md:w-[80%] relative">
          <p className=" text-2xl font-playfair my-10">
            {testimonials[currentIndex].statement}
          </p>
          <img
            src={quotationMark}
            alt=""
            className="absolute right-0 -top-10 w-36 -z-10"
          />
        </div>
        <div className="flex justify-between w-full items-center">
          <div className="flex">
            <div>
              <img
                src={testimonials[currentIndex].photoURL}
                alt=""
                className="w-16 mr-4 rounded-full"
              />
            </div>
            <div>
              <h1>{testimonials[currentIndex].name}</h1>
              <p className="text-xs">{testimonials[currentIndex].job}</p>
            </div>
          </div>
          <div className="flex items-center">
            <p className="text-lg cursor-pointer" onClick={handlePrev}>
              ←
            </p>
            <p className="mx-2 text-sm">{currentIndex + 1}</p>
            <p className="text-lg cursor-pointer" onClick={handleNext}>
              →
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
