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
      await fetch("https://perfect-pinafore-goat.cyclic.app/zerocuisineapi")
        .then((response) => response.json())
        .then((data) => {
          setApiData(data.restaurant);
          setTestimonials(data.restaurant.testimonials);
          setStarters(data.restaurant.starters);
          setOpenTime(data.restaurant.openTime);
          setBlog(data.restaurant.blog);
          setLunch(data.restaurant.lunch);
          setDinner(data.restaurant.dinner);
          setDrinks(data.restaurant.drinks);
          setSweets(data.restaurant.sweets);
          setFruits(data.restaurant.fruits);
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

  return <FoodContext.Provider value={value}>{children}</FoodContext.Provider>;
};

export { FoodContext, FoodContextProvider };

export default FoodContextProvider;
