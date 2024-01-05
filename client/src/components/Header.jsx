import React from "react";
import logoDark from "../assets/logo--dark.png";
import logo2Dark from "../assets/logo-2--dark.png";
import menuDark from "../assets/menu--dark.png";

export default function Header() {
  return (
    <div className="w-full flex py-4 absolute top-0 bg-white z-50">
      <div className="w-11/12 m-auto flex items-center justify-between">
        <div className="flex items-center justify-between w-11/12 m-auto">
          <img src={logo2Dark} alt="" className="mr-4 w-[125px]" />
          <img src={menuDark} alt="" className="w-5 md:hidden" />
        </div>
        <div className="hidden md:block">
          <ul className="flex text-sm">
            <li className="mr-4 relative group">
              Home
              <div className="w-0 left-0 bottom-0 absolute transition-all ease-in-out duration-300 border-b border-black group-hover:w-full"></div>
            </li>
            <li className="mr-4 relative group">
              Menu
              <div className="w-0 absolute transition-all ease-in-out duration-300 border-b border-black group-hover:w-full"></div>
            </li>
            <li className="mr-4 relative group">
              About
              <div className="w-0 absolute transition-all ease-in-out duration-300 border-b border-black group-hover:w-full"></div>
            </li>
            <li className="mr-4 relative group">
              Contact
              <div className="w-0 absolute transition-all ease-in-out duration-300 border-b border-black group-hover:w-full"></div>
            </li>
            <li className="relative group">
              Blog
              <div className="w-0 absolute transition-all ease-in-out duration-300 border-b border-black group-hover:w-full"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
