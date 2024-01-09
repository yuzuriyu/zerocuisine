import React, { useEffect, useState } from "react";

export default function Reservation(props) {
  const [hours, setHours] = useState([]);
  const reservationNum = [1, 2, 3, 4, 5, 6];

  useEffect(() => {
    const populateTimeArray = () => {
      const timeArray = [];
      for (let hour = 1; hour <= 12; hour++) {
        timeArray.push({ value: `${hour}:00 AM` });
        timeArray.push({ value: `${hour}:00 PM` });
      }

      timeArray.sort((a, b) => {
        const timeA = new Date(`2022-01-01 ${a.value}`);
        const timeB = new Date(`2022-01-01 ${b.value}`);
        return timeA - timeB;
      });

      setHours(timeArray);
    };
    populateTimeArray();
  }, []);

  return (
    <div className="w-11/12 m-auto py-20 md:w-10/12" ref={props.reservationRef}>
      <h1 className="text-5xl font-playfair mb-2 text-center">
        Make a Reservation
      </h1>
      <p className="text-gray-500 mb-10 text-center">
        Get in touch with the restaurant
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 py-10 w-full gap-4">
        <input
          type="text"
          className="flex-1 border py-2 px-4"
          placeholder="Date"
        />
        <select className="py-2 border text-gray-500 px-4">
          <option value="" disabled defaultValue="">
            Select Reservation Time
          </option>
          {hours.map((time) => (
            <option key={time.value} value={time.value}>
              {time.value}
            </option>
          ))}
        </select>

        <select className="text-gray-500 border py-2 px-4">
          <option value="" disabled defaultValue="">
            Select Reservation Quantity
          </option>
          {reservationNum.map((qty) => (
            <option key={qty} value={qty}>
              {qty}
            </option>
          ))}
        </select>
      </div>
      <button className="bg-yellow-600 py-2 my-10 w-1/2 md:w-1/3 lg:w-1/5 m-auto block text-white hover:bg-yellow-700">
        Book Now
      </button>
    </div>
  );
}
