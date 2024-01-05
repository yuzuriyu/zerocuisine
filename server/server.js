const express = require("express");
const cors = require("cors");

const app = express();

const zerocuisineapi = {
  restaurant: {
    id: 1,
    name: "Zero Cuisine",
    menu: [
      {
        id: 1,
        name: "Deep Sea Snow White Cod Fillet",
        price: 20,
      },
      {
        id: 2,
        name: "Steak with Rosemary Butter",
        price: 30,
      },
      {
        id: 3,
        name: "Cucumber Salad",
        price: 40,
      },
      {
        id: 4,
        name: "Natural Wine",
        price: 90,
      },
    ],
    starters: [
      {
        id: 1,
        name: "Grilled Okra and Tomatoes",
      },
      {
        id: 2,
        name: "Cucumber Salad",
      },
      {
        id: 3,
        name: "Basil Pancakes",
      },
    ],
    testimonials: [
      {
        id: 1,
        name: "Yukihira Soma",
        photoURL:
          "https://i.pinimg.com/564x/94/f8/51/94f8516cfe4b4791cf8712a37f132bbe.jpg",
        statement: `"Tasting a dish isn't just about flavors; it's about experiencing a journey. Every bite tells a story, and as a chef, I want to create tales that linger on the taste buds and resonate with the heart."`,
        job: "Student",
      },
      {
        id: 2,
        name: "Tadaroko Megumi",
        photoURL:
          "https://i.pinimg.com/564x/f6/3a/dd/f63add6ef3284dcc9d99db69b364253b.jpg",
        statement: `"I believe that the warmth and love you pour into your cooking is just as important as the ingredients themselves. Food is a way to connect, to share joy, and to make someone's day a little brighter."`,
        job: "Student",
      },
      {
        id: 3,
        name: "Nakiri Erina",
        photoURL:
          "https://i.pinimg.com/564x/2a/96/78/2a96789b7b5e15ee046aa77ce93ec273.jpg",
        statement: `"The true essence of cooking lies in perfection. Only by achieving perfection can one create a dish that transcends the ordinary and leaves an indelible mark on the palate."`,
        job: "Student",
      },
    ],
  },
};

app.use(cors());

app.get("/zerocuisineapi", (req, res) => {
  res.json(zerocuisineapi);
});

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
