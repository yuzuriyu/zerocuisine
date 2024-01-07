import React from "react";
import { Link } from "react-router-dom";

export default function ToggleMenu() {
  return (
    <div className="w-full h-screen">
      <img src="https://images7.alphacoders.com/423/423089.jpg" alt="" />
      <ul>
        <Link to={`/`}>
          <li>Home</li>
        </Link>
      </ul>
    </div>
  );
}
