import React, { useContext } from "react";
import image19 from "../assets/image-19.png";
import { FoodContext } from "../context/FoodContext";

export default function Contact() {
  const { openTime } = useContext(FoodContext);
  return (
    <>
      <div className="h-[60vh] w-full relative">
        <img src={image19} alt="" className="h-full w-full object-cover" />
        <div className="absolute top-1/2 -translate-y-1/2 w-11/12 -translate-x-1/2 left-1/2 md:w-10/12">
          <div className="md:w-1/2">
            <h1 className="text-5xl mb-5 text-white font-playfair">
              Get in Touch
            </h1>
            <p className="text-white">
              The freshest ingredients for you everyday
            </p>
          </div>
        </div>
        {openTime && (
          <div className="pt-14 md:w-1/2 lg:w-1/3 ml-auto absolute right-20 bottom-10 ">
            <div className="flex justify-between border-b border-dotted pb-4">
              <h1 className="text-white text-lg font-playfair">Open Time</h1>
              <p className="text-white">{openTime.day}</p>
            </div>
            <div className="my-4 grid grid-cols-3">
              <div>
                <p className="text-white">Brunch</p>
                <p className="text-white">{openTime.brunch}</p>
              </div>
              <div>
                <p className="text-white">Lunch</p>
                <p className="text-white">{openTime.lunch}</p>
              </div>
              <div>
                <p className="text-white">Dinner</p>
                <p className="text-white">{openTime.dinner}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
