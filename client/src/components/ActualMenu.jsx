import { useContext } from "react";
import image15 from "../assets/image-15.png";
import { FoodContext } from "../context/FoodContext";
import image16 from "../assets/image-16.png";
import image17 from "../assets/image-17.png";
import image18 from "../assets/image-18.png";

export default function ActualMenu() {
  const { dinner, starters, drinks } = useContext(FoodContext);

  const filteredStarters = starters.slice(0, 4);

  const filteredDinner = dinner.slice(0, 4);

  const filteredDrinks = drinks.slice(0, 4);

  return (
    <>
      <div className="h-[60vh] w-full relative">
        <img src={image15} alt="" className="h-full w-full object-cover" />
        <div className="absolute top-1/2 -translate-y-1/2 w-11/12 -translate-x-1/2 left-1/2 md:w-10/12">
          <h1 className="text-5xl mb-5 text-white font-playfair">
            View Our <br /> New Menu
          </h1>
          <p className="text-white">
            The freshest ingredients for you everyday
          </p>
        </div>
      </div>
      <div className="w-11/12 m-auto pt-20 md:w-10/12">
        <div className="mb-10">
          <h1 className="text-3xl font-playfair mb-2 text-center">Starters</h1>
          <p className="text-xs text-gray-500 text-center">
            Epicurean delights, where taste transcends expectations.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="flex gap-10 flex-col md:flex-row">
            <img src={image16} alt="" className="h-[500px]" />
          </div>
          <div className="grid grid-cols-1 gap-4 md:gap-8">
            {filteredStarters.map((data, index) => (
              <div>
                <p className="border-b border-dotted border-black text-right">
                  ${data.price}
                </p>
                <p className="text-xl mt-2 font-playfair">{data.name}</p>
                <p className="text-xs text-gray-500 mt-2">{data.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-11/12 m-auto py-20 md:w-10/12">
        <div className="mb-10">
          <h1 className="text-3xl font-playfair mb-2 text-center">Dinner</h1>
          <p className="text-xs text-gray-500 text-center">
            Savor exquisite dinner creations for a delightful experience.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-10 items-start justify-end">
          <div className="grid grid-cols-1 gap-4 md:gap-8">
            {filteredDinner.map((data, index) => (
              <div>
                <p className="border-b border-dotted border-black text-right">
                  ${data.price}
                </p>
                <p className="text-xl mt-2 font-playfair">{data.name}</p>
                <p className="text-xs text-gray-500 mt-2">{data.description}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-10 flex-col md:flex-row">
            <img src={image17} alt="" className="h-[500px]" />
          </div>
        </div>
      </div>
      <div className="w-11/12 m-auto pb-20 md:w-10/12">
        <div className="mb-10">
          <h1 className="text-3xl font-playfair mb-2 text-center">Drinks</h1>
          <p className="text-xs text-gray-500 text-center">
            Refreshing drinks to elevate your dining experience.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="grid grid-cols-1 gap-4 md:gap-8">
            {filteredDrinks.map((data, index) => (
              <div>
                <p className="border-b border-dotted border-black text-right">
                  ${data.price}
                </p>
                <p className="text-xl mt-2 font-playfair">{data.name}</p>
                <p className="text-xs text-gray-500 mt-2">{data.description}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-10 flex-col md:flex-row">
            <img src={image18} alt="" className="h-[500px]" />
          </div>
        </div>
      </div>
    </>
  );
}
