import { createContext, useState, useEffect } from "react";

const FoodContext = createContext();

const FoodContextProvider = ({ children }) => {
  const [apiData, setApiData] = useState([]);
  const [menu, setMenu] = useState([]);
  const [testimonials, setTestimonials] = useState();
  console.log(testimonials);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("http://localhost:5000/zerocuisineapi")
        .then((response) => response.json())
        .then((data) => {
          setApiData(data);
          setMenu(data.restaurant.menu);
          setTestimonials(data.restaurant.testimonials);
        });
    };
    fetchData();
  }, []);

  const value = {
    apiData,
    menu,
    testimonials,
  };

  return <FoodContext.Provider value={value}>{children}</FoodContext.Provider>;
};

export { FoodContext, FoodContextProvider };

export default FoodContextProvider;
