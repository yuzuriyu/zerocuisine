import React from "react";
import image7 from "../assets/image-7.png";
import { Link } from "react-router-dom";

export default function Calories() {
  return (
    <div className="w-11/12 m-auto md:w-10/12 pt-20">
      <h1 className="font-playfair text-5xl mb-2 text-center">
        Calories Energy Balance
      </h1>
      <p className="text-gray-500 text-xs text-center">
        Nutrient-rich, fresh fruit for a healthy indulgence.
      </p>

      <div className="grid grid-cols-2 my-10 gap-4 md:gap-8 md:grid-cols-3">
        <Link
          to={"/portfolio"}
          className="relative hover:opacity-75 cursor-pointer"
        >
          <div className="flex justify-between absolute top-4 w-10/12 left-1/2 -translate-x-1/2 z-10">
            <p className="text-lg text-white">Starters</p>
            <p className="text-lg text-white">→</p>
          </div>
          <img
            src={image7}
            alt=""
            className="object-cover brightness-75 h-full"
          />
        </Link>
        <Link
          to={"/portfolio"}
          className="relative hover:opacity-75 cursor-pointer"
        >
          <div className="flex justify-between absolute top-4 w-10/12 left-1/2 -translate-x-1/2 z-10">
            <p className="text-lg text-white">Sweets</p>
            <p className="text-lg text-white">→</p>
          </div>
          <img
            src="https://i0.hippopx.com/photos/368/48/882/the-cake-dessert-eating-bun-thumb.jpg"
            alt=""
            className="object-cover brightness-75 h-full"
          />
        </Link>
        <Link
          to={"/portfolio"}
          className="relative hover:opacity-75 cursor-pointer"
        >
          <div className="flex justify-between absolute top-4 w-10/12 left-1/2 -translate-x-1/2 z-10">
            <p className="text-lg text-white">Fruits</p>
            <p className="text-lg text-white">→</p>
          </div>
          <img
            src="https://insanelygoodrecipes.com/wp-content/uploads/2021/07/Cranberry-Canape-with-Fruits-and-Cream-Cheese.jpg"
            alt=""
            className="object-cover brightness-75 h-full"
          />
        </Link>
      </div>
    </div>
  );
}
