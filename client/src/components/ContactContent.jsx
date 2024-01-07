import React from "react";
import image20 from "../assets/image-20.png";
import image21 from "../assets/image-21.png";

export default function ContactContent() {
  return (
    <div className="w-11/12 m-auto py-20 md:w-10/12">
      <div className="flex gap-10 md:gap-20 items-end flex-col md:flex-row">
        <div>
          <img src={image20} alt="" className="h-[400px] object-cover" />
        </div>
        <div>
          <p className="lg:w-2/3">
            We can be contacted via email
            <span className="text-green-600"> info@zerocuisine.com</span> or
            telephone on <span className="text-green-600">+86 852 346 000</span>
          </p>
        </div>
      </div>
      <div className="flex gap-10 md:gap-20 items-end flex-col md:flex-row pt-20 justify-end">
        <div>
          <p>We are located in 1959 Sepulveda Blvd. Culver City, CA, 90230</p>
          <button className="px-6 py-2 border border-black mt-6 block ml-auto">
            View in maps
          </button>
        </div>
        <div>
          <img src={image21} alt="" className="h-[400px] object-cover" />
        </div>
      </div>
    </div>
  );
}
