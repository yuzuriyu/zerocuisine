import { createContext, useState, useEffect } from "react";

const FoodContext = createContext();

const FoodContextProvider = ({ children }) => {
  const [starters, setStarters] = useState([]);
  const [testimonials, setTestimonials] = useState();
  const [openTime, setOpenTime] = useState([]);
  const [blog, setBlog] = useState([]);
  const [lunch, setLunch] = useState([]);
  const [dinner, setDinner] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [sweets, setSweets] = useState([]);
  const [fruits, setFruits] = useState([]);
  const [apiData, setApiData] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null);

  const selectFood = (foodID) => {
    setSelectedFood(foodID);
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://zerocuisine-server.vercel.app/api/hello")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setApiData(data.zerocuisineapi.restaurant);
          setTestimonials(data.zerocuisineapi.restaurant.testimonials);
          setStarters(data.zerocuisineapi.restaurant.starters);
          setOpenTime(data.zerocuisineapi.restaurant.openTime);
          setBlog(data.zerocuisineapi.restaurant.blog);
          setLunch(data.zerocuisineapi.restaurant.lunch);
          setDinner(data.zerocuisineapi.restaurant.dinner);
          setDrinks(data.zerocuisineapi.restaurant.drinks);
          setSweets(data.zerocuisineapi.restaurant.sweets);
          setFruits(data.zerocuisineapi.restaurant.fruits);
        });
    };
    fetchData();
  }, []);

  const value = {
    testimonials,
    starters,
    drinks,
    sweets,
    openTime,
    dinner,
    fruits,
    lunch,
    blog,
    selectedFood,
    selectFood,
    setSelectedFood,
  };
  console.log(apiData);
  return <FoodContext.Provider value={value}>{children}</FoodContext.Provider>;
};

export { FoodContext, FoodContextProvider };

export default FoodContextProvider;
