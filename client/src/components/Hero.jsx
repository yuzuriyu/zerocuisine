import React from "react";
import image1 from "../assets/image-1.png";
import image2 from "../assets/image-2.png";
import image3 from "../assets/image-3.jpg";
import image4 from "../assets/image-4.jpg";

export default function Hero() {
  return (
    <div className="w-full h-screen m-auto">
      <img
        src={image4}
        alt=""
        className="h-full w-full object-cover brightness-50"
      />
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-11/12 m-auto md:w-1/2">
        <h1 className="text-white font-playfair text-5xl my-10 text-center">
          Cuisine Elevated Here
        </h1>
        <p className="text-gray-300 text-center">
          Embark on a culinary journey at Zero Cuisine, where every dish is a
          masterpiece of flavor and innovation. Immerse yourself in the art of
          elevated cuisine, where zero compromises meet maximum taste. Welcome
          to a dining experience that transcends expectations.
        </p>
        <div className="flex text-center justify-center gap-4 my-10">
          <button className="text-white border border-white px-4 py-2">
            VIEW MENU
          </button>
          <button className="text-white bg-yellow-600 px-4 py-2">
            RESERVATION
          </button>
        </div>
      </div>
      <p className="text-xl text-white absolute bottom-4 left-1/2 -translate-x-1/2">
        ⇣
      </p>
    </div>
  );
}
