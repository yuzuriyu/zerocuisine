import { useContext } from "react";
import { FoodContext } from "../context/FoodContext";

export default function Menu() {
  const { apiData, menu } = useContext(FoodContext);
  return (
    <div className="w-11/12 m-auto py-20 md:w-10/12">
      <div className="mb-10">
        <h1 className="text-3xl font-playfair">Our Menu</h1>
        <p className="text-xs text-gray-500">
          Epicurean delights, where taste transcends expectations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {menu.map((data, index) => (
          <div>
            <p className="border-b border-dotted border-black text-right">
              ${data.price}
            </p>
            <p className="text-xl mt-2 font-playfair">{data.name}</p>
            <p className="text-xs text-gray-500 mt-2">
              ayaw ko magreply hahahahahahah
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
