import React from "react";
import { Link } from "react-router-dom";
import closeLight from "../assets/close--light.png";

export default function ToggleMenu(props) {
  return (
    <div className="w-full h-screen z-50 relative">
      <img
        src={closeLight}
        alt=""
        className="absolute top-4 right-4 z-50 w-7"
        onClick={() => props.handleToggleMenu()}
      />
      <img
        src="https://r4.wallpaperflare.com/wallpaper/964/695/655/holiday-hd-fine-dining-set-wallpaper-15eff3e0b8e92742f53f0f6e6cd0e81e.jpg"
        alt=""
        className="w-full h-full object-cover brightness-50"
      />
      <ul className="absolute left-4 bottom-10">
        <Link to={`/`}>
          <li className="text-5xl font-playfair text-white mb-4">Home</li>
        </Link>
        <Link to={`/menu`}>
          <li className="text-5xl font-playfair text-white mb-4">Menu</li>
        </Link>
        <Link to={`/about`}>
          <li className="text-5xl font-playfair text-white mb-4">About</li>
        </Link>
        <Link to={`/contact`}>
          <li className="text-5xl font-playfair text-white mb-4">Contact</li>
        </Link>
        <Link to={`/blog`}>
          <li className="text-5xl font-playfair text-white mb-4">Blog</li>
        </Link>
        <Link to={`/portfolio`}>
          <li className="text-5xl font-playfair text-white mb-4">Portfolio</li>
        </Link>
      </ul>
    </div>
  );
}
