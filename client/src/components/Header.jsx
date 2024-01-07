import React from "react";
import logo2Light from "../assets/logo-2--light.png";
import menuLight from "../assets/menu--light.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="w-full flex py-4 absolute top-0 z-50">
      <div className="w-11/12 m-auto flex items-center justify-between md:w-10/12">
        <div className="flex items-center justify-between w-11/12 m-auto">
          <Link to={"/"}>
            <img src={logo2Light} alt="" className="mr-4 w-[125px]" />
          </Link>
          <img src={menuLight} alt="" className="w-5 md:hidden" />
        </div>
        <div className="hidden md:block">
          <ul className="flex text-sm">
            <Link to={"/"}>
              <li className="mr-4 relative group text-white">
                Home
                <div className="w-0 left-0 bottom-0 absolute transition-all ease-in-out duration-300 border-b border-white group-hover:w-full"></div>
              </li>
            </Link>
            <Link to={"/menu"}>
              <li className="mr-4 relative group text-white">
                Menu
                <div className="w-0 absolute transition-all ease-in-out duration-300 border-b border-white group-hover:w-full"></div>
              </li>
            </Link>
            <Link to={"/about"}>
              <li className="mr-4 relative group text-white">
                About
                <div className="w-0 absolute transition-all ease-in-out duration-300 border-b border-white group-hover:w-full"></div>
              </li>
            </Link>
            <Link to={"/contact"}>
              <li className="mr-4 relative group text-white">
                Contact
                <div className="w-0 absolute transition-all ease-in-out duration-300 border-b border-white group-hover:w-full"></div>
              </li>
            </Link>
            <Link to={"/blog"}>
              <li className="mr-4 relative group text-white">
                Blog
                <div className="w-0 absolute transition-all ease-in-out duration-300 border-b border-white group-hover:w-full"></div>
              </li>
            </Link>
            <Link to={"/portfolio"}>
              <li className="relative group text-white">
                Portfolio
                <div className="w-0 absolute transition-all ease-in-out duration-300 border-b border-white group-hover:w-full"></div>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
