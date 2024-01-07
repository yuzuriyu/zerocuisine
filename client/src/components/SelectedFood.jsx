import React from "react";
import { useContext } from "react";
import { FoodContext } from "../context/FoodContext";
import image32 from "../assets/image-32.png";

export default function SelectedFood() {
  const { selectedFood } = useContext(FoodContext);
  return (
    <div>
      {selectedFood && (
        <div className="w-full h-[60vh] relative">
          <img src={image32} alt="" className="h-full w-full object-cover" />
          <div className="absolute top-1/2 -translate-y-1/2 w-11/12 -translate-x-1/2 left-1/2 md:w-10/12">
            <h1 className="text-7xl mb-5 text-white font-playfair text-center">
              {selectedFood.name}
            </h1>
          </div>
        </div>
      )}
      <div className="w-11/12 m-auto md:w-10/12 py-20">
        {selectedFood && (
          <div className="flex items-center gap-10 md:flex-row flex-col">
            <div className="md:w-1/2">
              <img
                src={selectedFood.imageUrl}
                alt=""
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <p className="font-playfair text-3xl mb-4">{selectedFood.name}</p>
              <p className="mb-8">{selectedFood.description}</p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
                laudantium quo quas qui dolorum. Sunt architecto iure eaque
                laudantium error veniam quasi! Animi reprehenderit, porro
                sapiente totam quasi impedit similique.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
