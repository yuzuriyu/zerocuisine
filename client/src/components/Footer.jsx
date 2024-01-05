import React from "react";
import logo from "../assets/logo--light.png";
import facebook from "../assets/facebook.png";
import youtube from "../assets/youtube.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";

export default function Footer() {
  return (
    <div className="w-full bg-yellow-700 pt-20">
      <div className="grid gric-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:w-10/12 w-11/12 m-auto pb-20">
        <div>
          <img src={logo} alt="" className="w-[200px]" />
        </div>
        <div>
          <h1 className="text-white mb-8 text-lg font-playfair">Contact</h1>
          <p className=" text-sm text-gray-200">+1+86 852 346 000</p>
          <p className=" text-sm mb-4 text-gray-200">info@foodzero.com</p>
          <p className=" text-sm text-gray-200">1959 Sepulveda Blvd.</p>
          <p className="text-sm text-gray-200">
            1959 Sepulveda Blvd. Culver City, CA, 90230
          </p>
        </div>
        <div>
          <h1 className="text-white text-lg mb-4 font-playfair">
            Never Miss a Recipe
          </h1>
          <div className="flex ">
            <input
              type="text"
              placeholder="Email Address"
              className="mr-4 py-2 px-4 border bg-transparent placeholder:text-white flex-1"
            />
            <button className="bg-yellow-500 text-white py-2 px-4">
              Subscribe
            </button>
          </div>
          <p className="text-white text-xs mt-2">
            Join our subscribers and get best recipe delivered each week!
          </p>
        </div>
      </div>
      <div className="border-t border-dotted w-full py-8">
        <div className="flex justify-between md:w-10/12 w-11/12 m-auto">
          <p className="text-xs text-white">
            © 2020 Zero Inc. All rights Reserved
          </p>
          <div className="flex items-center">
            <img src={facebook} alt="" className="w-5 mr-4" />
            <img src={youtube} alt="" className="w-5 mr-4" />
            <img src={twitter} alt="" className="w-5 mr-4" />
            <img src={instagram} alt="" className="w-5" />
          </div>
        </div>
      </div>
    </div>
  );
}
