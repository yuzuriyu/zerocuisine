import image31 from "../assets/image-31.png";
import { FoodContext } from "../context/FoodContext";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

export default function Portfolio() {
  const {
    lunch,
    starters,
    dinner,
    drinks,
    sweets,
    fruits,
    selectFood,
    setSelectedFood,
    selectedFood,
  } = useContext(FoodContext);

  const [activeCategory, setCategory] = useState("all");

  const selectCategory = (selectedCategory) => {
    selectCategory(selectedCategory);
  };
  return (
    <div>
      <div className="w-full h-[60vh] relative">
        <img src={image31} alt="" className="h-full w-full object-cover" />
        <div className="absolute top-1/2 -translate-y-1/2 w-11/12 -translate-x-1/2 left-1/2 md:w-10/12">
          <h1 className="text-7xl mb-5 text-white font-playfair text-center">
            Portfolio - Grids
          </h1>
        </div>
      </div>
      <div className="flex justify-center w-11/12 m-auto md:w-10/12 flex-col gap-4 md:gap-0 pb-8 pt-20 md:flex-row">
        <div className="flex justify-center md:justify-normal">
          <div
            className={`mr-4 relative group ${
              activeCategory === "all" ? "border-b border-black" : ""
            }`}
            onClick={() => setCategory("all")}
          >
            All
            <div className="w-0 absolute transition-all ease-in-out duration-300 border-b border-black group-hover:w-full"></div>
          </div>
          <div
            className={`mr-4 relative group ${
              activeCategory === "starters" ? "border-b border-black" : ""
            }`}
            onClick={() => setCategory("starters")}
          >
            Starters
            <div className="w-0 group-hover:w-full absolute border-b border-black transition-all ease-out duration-300"></div>
          </div>
          <div
            className={`mr-4 relative group ${
              activeCategory === "lunch" ? "border-b border-black" : ""
            }`}
            onClick={() => setCategory("lunch")}
          >
            Lunch
            <div className="w-0 group-hover:w-full absolute border-b border-black transition-all ease-out duration-300"></div>
          </div>
          <div
            className={`mr-4 relative group ${
              activeCategory === "dinner" ? "border-b border-black" : ""
            }`}
            onClick={() => setCategory("dinner")}
          >
            Dinner
            <div className="w-0 group-hover:w-full absolute border-b border-black transition-all ease-out duration-300"></div>
          </div>
        </div>
        <div className="flex justify-center md:justify-normal ">
          <div
            className={`mr-4 relative group ${
              activeCategory === "drinks" ? "border-b border-black" : ""
            }`}
            onClick={() => setCategory("drinks")}
          >
            Drinks
            <div className="w-0 group-hover:w-full absolute border-b border-black transition-all ease-out duration-300"></div>
          </div>
          <div
            className={`mr-4 relative group ${
              activeCategory === "sweets" ? "border-b border-black" : ""
            }`}
            onClick={() => setCategory("sweets")}
          >
            Sweets
            <div className="w-0 group-hover:w-full absolute border-b border-black transition-all ease-out duration-300"></div>
          </div>
          <div
            className={`mr-4 relative group ${
              activeCategory === "fruits" ? "border-b border-black" : ""
            }`}
            onClick={() => setCategory("fruits")}
          >
            Fruits
            <div className="w-0 absolute transition-all ease-in-out duration-300 border-b border-black group-hover:w-full"></div>
          </div>
        </div>
      </div>
      <div className="w-11/12 m-auto grid grid-cols-1 pb-20 gap-10 md:w-10/12 md:grid-cols-2 lg:grid-cols-3">
        {(activeCategory === "lunch" || activeCategory === "all") &&
          lunch.map((data, index) => (
            <Link
              to={`/food/${data.id}`}
              className="relative"
              onClick={() => {
                selectFood(data);
              }}
              key={index}
            >
              <img
                src={data.imageUrl}
                alt=""
                className="h-[400px] w-full object-cover brightness-75"
              />
              <div className="flex items-center justify-between w-11/12 absolute bottom-4 left-1/2 -translate-x-1/2">
                <h1 className="text-2xl text-white font-playfair">
                  {data.name}
                </h1>
              </div>
            </Link>
          ))}

        {(activeCategory === "starters" || activeCategory === "all") &&
          starters.map((data, index) => (
            <Link
              to={`/food/${data.id}`}
              className="relative"
              key={index}
              onClick={() => {
                selectFood(data);
              }}
            >
              <img
                src={data.imageUrl}
                alt=""
                className="h-[400px] w-full object-cover brightness-75"
              />
              <div className="flex items-center justify-between w-11/12 absolute bottom-4 left-1/2 -translate-x-1/2">
                <h1 className="text-2xl text-white font-playfair">
                  {data.name}
                </h1>
              </div>
            </Link>
          ))}

        {(activeCategory === "dinner" || activeCategory === "all") &&
          dinner.map((data, index) => (
            <Link
              to={`/food/${data.id}`}
              className="relative"
              key={index}
              onClick={() => {
                selectFood(data);
              }}
            >
              <img
                src={data.imageUrl}
                alt=""
                className="h-[400px] w-full object-cover brightness-75"
              />
              <div className="flex items-center justify-between w-11/12 absolute bottom-4 left-1/2 -translate-x-1/2">
                <h1 className="text-2xl text-white font-playfair">
                  {data.name}
                </h1>
              </div>
            </Link>
          ))}

        {(activeCategory === "drinks" || activeCategory === "all") &&
          drinks.map((data, index) => (
            <Link
              to={`/food/${data.id}`}
              className="relative"
              key={index}
              onClick={() => {
                selectFood(data);
              }}
            >
              <img
                src={data.imageUrl}
                alt=""
                className="h-[400px] w-full object-cover brightness-75"
              />
              <div className="flex items-center justify-between w-11/12 absolute bottom-4 left-1/2 -translate-x-1/2">
                <h1 className="text-2xl text-white font-playfair">
                  {data.name}
                </h1>
              </div>
            </Link>
          ))}

        {(activeCategory === "sweets" || activeCategory === "all") &&
          sweets.map((data, index) => (
            <Link
              to={`/food/${data.id}`}
              className="relative"
              key={index}
              onClick={() => {
                selectFood(data);
              }}
            >
              <img
                src={data.imageUrl}
                alt=""
                className="h-[400px] w-full object-cover brightness-75"
              />
              <div className="flex items-center justify-between w-11/12 absolute bottom-4 left-1/2 -translate-x-1/2">
                <h1 className="text-2xl text-white font-playfair">
                  {data.name}
                </h1>
              </div>
            </Link>
          ))}

        {(activeCategory === "fruits" || activeCategory === "all") &&
          fruits.map((data, index) => (
            <Link
              to={`/food/${data.id}`}
              className="relative"
              key={index}
              onClick={() => {
                selectFood(data);
              }}
            >
              <img
                src={data.imageUrl}
                alt=""
                className="h-[400px] w-full object-cover brightness-75"
              />
              <div className="flex items-center justify-between w-11/12 absolute bottom-4 left-1/2 -translate-x-1/2">
                <h1 className="text-2xl text-white font-playfair">
                  {data.name}
                </h1>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
