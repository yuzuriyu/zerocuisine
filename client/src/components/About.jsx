import React, { useContext } from "react";
import image22 from "../assets/image-22.png";
import { FoodContext } from "../context/FoodContext";

export default function About() {
  const { openTime } = useContext(FoodContext);
  return (
    <>
      <div className="h-[60vh] w-full relative">
        <img src={image22} alt="" className="h-full w-full object-cover" />
        <div className="absolute top-1/2 -translate-y-1/2 w-11/12 -translate-x-1/2 left-1/2 md:w-10/12">
          <h1 className="text-5xl mb-5 text-white font-playfair text-right">
            Who We Are
          </h1>
          <p className="text-white text-right">
            The most important thing for us is to give you the comfortable
            dining experience
          </p>
        </div>
      </div>
      <div className="w-11/12 m-auto md:w-10/12">
        <div className="flex gap-10 md:gap-20 flex-col md:flex-row pt-20 justify-end items-center">
          <div className="md:w-1/2">
            <p className="font-playfair text-5xl mb-4">Our Story</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
              iusto voluptatibus nobis, iure quisquam nihil totam dolorum vitae
              sunt esse reiciendis excepturi, odit accusantium placeat molestiae
              exercitationem. At, similique reiciendis?
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images5.alphacoders.com/648/648257.png"
              alt=""
              className="h-[400px] object-cover"
            />
          </div>
        </div>
        <div className="flex gap-10 md:gap-20 flex-col md:flex-row items-start py-20">
          <div className="md:w-1/2">
            <h1 className="text-3xl font-playfair mb-2 text-center">
              Restaurant Manager
            </h1>
            <p className="text-sm mb-4 text-center">Nakiri Erina</p>

            <img
              src="https://img.wattpad.com/c2e8cb59530b4373b452716c9fce292f4232d23f/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f356c6c6455593963585369696f513d3d2d3739343030363030372e313563643166326538653566333064363534333136333931373334392e676966"
              alt=""
              className="h-[400px] object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <p className="mt-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus possimus fugiat facere illo facilis rem sunt totam
              debitis eaque blanditiis iusto sed, nesciunt nihil. Tempore nisi
              totam earum ab quidem.
            </p>
          </div>
        </div>
        <div className="flex gap-10 md:gap-20 flex-col md:flex-row justify-end items-end pb-20">
          <div className="md:w-1/2">
            <p className="text-right">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
              iusto voluptatibus nobis, iure quisquam nihil totam dolorum vitae
              sunt esse reiciendis excepturi, odit accusantium placeat molestiae
              exercitationem. At, similique reiciendis?
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <h1 className="text-3xl font-playfair mb-2 text-center">
              Executive Chef
            </h1>
            <p className="text-sm mb-4 text-center">Tadokoro Megumi</p>
            <img
              src="https://wallpapercave.com/wp/wp7120924.jpg"
              alt=""
              className="h-[400px] object-cover w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
}
