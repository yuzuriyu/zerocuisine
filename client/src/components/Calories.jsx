import React from "react";
import image7 from "../assets/image-7.png";
import image8 from "../assets/image-8.png";
import image9 from "../assets/image-9.png";

export default function Calories() {
  return (
    <div className="w-11/12 m-auto md:w-10/12 pt-20">
      <h1 className="font-playfair text-5xl mb-2 text-center">
        Calories Energy Balance
      </h1>
      <p className="text-gray-500 text-xs text-center">
        hanggang kelan ba ako ganto
      </p>

      <div className="grid grid-cols-2 my-10 gap-4 md:gap-8 md:grid-cols-3">
        <div className="relative">
          <div className="flex justify-between absolute top-4 w-10/12 left-1/2 -translate-x-1/2">
            <p className="text-lg">Starters</p>
            <p className="text-lg">→</p>
          </div>
          <img src={image7} alt="" className="object-cover" />
        </div>
        <div className="relative">
          <div className="flex justify-between absolute top-4 w-10/12 left-1/2 -translate-x-1/2">
            <p className="text-lg">Mains</p>
            <p className="text-lg">→</p>
          </div>
          <img src={image8} alt="" className="object-cover" />
        </div>
        <div className="relative">
          <div className="flex justify-between absolute top-4 w-10/12 left-1/2 -translate-x-1/2">
            <p className="text-lg">Soups</p>
            <p className="text-lg">→</p>
          </div>
          <img src={image9} alt="" className="object-cover" />
        </div>
      </div>
    </div>
  );
}
