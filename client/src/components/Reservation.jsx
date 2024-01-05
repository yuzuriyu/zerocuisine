import React from "react";

export default function Reservation() {
  return (
    <div className="w-11/12 m-auto py-20 md:w-10/12">
      <h1 className="text-5xl font-playfair mb-2 text-center">
        Make a Reservation
      </h1>
      <p className="text-gray-500 mb-10 text-center">
        Get in touch with restaurant
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 py-10 w-full gap-4">
        <input
          type="text"
          className="flex-1 border py-2 px-4"
          placeholder="Date"
        />
        <input
          type="text"
          className="flex-1 border py-2 px-4"
          placeholder="Time"
        />
        <input
          type="text"
          className="flex-1 border py-2 px-4"
          placeholder="Number of People"
        />
      </div>
      <button className="bg-yellow-600 py-2 my-10 w-1/2 md:w-1/3 lg:w-1/5 m-auto block text-white">
        Book Now
      </button>
    </div>
  );
}
