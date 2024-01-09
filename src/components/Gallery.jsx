import React from "react";
import image6 from "../assets/image-6.jpg";
import image10 from "../assets/image-10.jpg";
import image11 from "../assets/image-11.jpg";
import image12 from "../assets/image-12.jpg";
import image13 from "../assets/image-13.jpg";
import image14 from "../assets/image-14.jpg";
import lemon from "../assets/lemon.png";
import fish from "../assets/fish.png";
import carrot from "../assets/carrot.png";

export default function Gallery() {
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 w-full">
        <img src={image6} alt="" className="h-full object-cover" />
        <img src={image10} alt="" className="h-full object-cover" />
        <img src={image11} alt="" className="h-full object-cover" />
        <img src={image12} alt="" className="h-full object-cover" />
        <img src={image13} alt="" className="h-full object-cover" />
        <img src={image14} alt="" className="h-full object-cover" />
      </div>
      <div className="grid grid-cols-2 my-20 md:grid-cols-3 gap-4 md:gap-8">
        <div>
          <img src={lemon} alt="lemon" className="w-20 m-auto" />
          <p className="text-lg font-playfair text-center font-bold mb-2">
            Fresh Fruit
          </p>
          <p className="text-gray-500 text-xs text-center">
            Juicy, ripe fruits bursting with flavor.
          </p>
        </div>
        <div>
          <img src={fish} alt="fish" className="w-20 m-auto" />
          <p className="text-lg font-playfair text-center font-bold mb-2">
            Premium Quality
          </p>
          <p className="text-gray-500 text-xs text-center">
            Exceptional quality, premium culinary experience.
          </p>
        </div>
        <div>
          <img src={carrot} alt="carrot" className="w-20 m-auto" />
          <p className="text-lg font-playfair text-center font-bold mb-2">
            Seasonal Vegetables
          </p>
          <p className="text-gray-500 text-xs text-center">
            Fresh, seasonal veggies for delightful dining.
          </p>
        </div>
      </div>
    </div>
  );
}
