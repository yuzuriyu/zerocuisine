import React from "react";
import image30 from "../assets/image-30.jpg";
import logo from "../assets/logo-2--light.png";
import facebook from "../assets/facebook.png";
import youtube from "../assets/youtube.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="w-full h-screen">
      <Link to={"/"}>
        <img
          src={logo}
          alt=""
          className="absolute z-30 w-[200px] top-10 left-10"
        />
      </Link>

      <img
        src="https://c0.wallpaperflare.com/path/490/601/252/cuisine-dieting-food-food-photography-b70ce8dbffadd1c409545071ca67ca8f.jpg"
        alt=""
        className="object-cover h-full w-full brightness-50"
      />
      <div className="absolute bottom-10 flex items-center right-10">
        <img src={facebook} alt="" className="w-5 mr-4" />
        <img src={youtube} alt="" className="w-5 mr-4" />
        <img src={twitter} alt="" className="w-5 mr-4" />
        <img src={instagram} alt="" className="w-5" />
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
        <h1 className="text-white text-9xl text-center">404</h1>
        <p className="text-white text-xl mb-4 text-center">
          Whooops...Chef not Found !!!
        </p>
        <Link to={"/"}>
          <button className="border border-white text-white py-2 px-8 block m-auto">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
}
