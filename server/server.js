const express = require("express");
const cors = require("cors");

const app = express();

const zerocuisineapi = {
  restaurant: {
    name: "Zero Cuisine",
    openTime: {
      day: "Sunday - Friday",
      brunch: "11:00 - 12:00",
      lunch: "13:00 - 17:00",
      dinner: "18:00 - 20:00",
    },
    dinner: [
      {
        id: 1,
        name: "Grilled Salmon with Lemon Dill Sauce",
        imageUrl:
          "https://assets.epicurious.com/photos/57b4c389df05218810c5213b/master/pass/lemon-dill-sauce.jpg",
        price: 45,
        description:
          "Enjoy the perfect blend of flavors with grilled salmon drizzled in a zesty lemon dill sauce.",
      },
      {
        id: 2,
        name: "Mushroom Risotto with Truffle Oil",
        imageUrl:
          "https://assets.surlatable.com/m/65616a277912cb33/72_dpi_webp-REC-344007_Wild-Mushroom-Risotto-with-Truffle-Oil.jpg",
        price: 30,
        description:
          "Indulge in the rich and creamy goodness of mushroom risotto infused with truffle oil.",
      },
      {
        id: 3,
        name: "Chicken Alfredo Pasta",
        imageUrl:
          "https://eatinginaninstant.com/wp-content/uploads/2022/08/IP-Chicken-Alfredo-8-1200.jpg",
        price: 25,
        description:
          "Savor the classic comfort of chicken Alfredo pasta with a creamy and savory Alfredo sauce.",
      },
      {
        id: 4,
        name: "Filet Mignon with Garlic Herb Butter",
        imageUrl:
          "https://res.cloudinary.com/hksqkdlah/image/upload/ar_1:1,c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_344/SFS_filet_mignons_w_asparagus_014_tgivj1",
        price: 50,
        description:
          "Treat yourself to a tender filet mignon topped with a flavorful garlic herb butter.",
      },
      {
        id: 5,
        name: "Grilled Vegetable Platter",
        imageUrl:
          "https://i0.wp.com/www.besosalina.com/wp-content/uploads/2018/11/IMG_2134-scaled.jpg?ssl=1",
        price: 18,
        description:
          "Delight in a medley of perfectly grilled vegetables served on a platter.",
      },
      {
        id: 6,
        name: "Shrimp Scampi",
        imageUrl:
          "https://thecozycook.com/wp-content/uploads/2023/06/Shrimp-Scampi-f.jpg",
        price: 35,
        description:
          "Delight in the flavors of shrimp scampi, featuring succulent shrimp in a garlic-infused sauce.",
      },
    ],

    starters: [
      {
        id: 7,
        name: "Crispy Calamari with Spicy Mayo",
        imageUrl:
          "https://www.italianfoodforever.com/wp-content/uploads/2008/07/friedcalamari.jpg",
        price: 12,
        description:
          "Delight your taste buds with crispy calamari served with a kick of spicy mayo.",
      },
      {
        id: 8,
        name: "Caprese Salad with Fresh Mozzarella",
        imageUrl:
          "https://www.modernhoney.com/wp-content/uploads/2021/07/Caprese-Salad-1-scaled.jpg",
        price: 10,
        description:
          "A classic Caprese salad featuring fresh mozzarella, tomatoes, and basil.",
      },
      {
        id: 9,
        name: "Garlic Parmesan Chicken Wings",
        imageUrl:
          "https://tastythin.com/wp-content/uploads/2022/02/air-fryer-garlic-parmesan-wings1.jpg",
        price: 15,
        description:
          "Indulge in the savory goodness of garlic parmesan chicken wings.",
      },
      {
        id: 10,
        name: "Bruschetta with Tomato and Basil",
        imageUrl:
          "https://www.jessicagavin.com/wp-content/uploads/2020/07/bruschetta-17-1200.jpg",
        price: 8,
        description:
          "Savor the flavors of bruschetta topped with ripe tomatoes and fresh basil.",
      },
      {
        id: 11,
        name: "Spinach and Artichoke Dip",
        imageUrl:
          "https://www.thespruceeats.com/thmb/IzI21XI-Gg07LQnFEu57xYVnA7w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/spinach-and-artichoke-dip-4157518-07-8685813570f34ac89c090084c042266d.jpg",
        price: 14,
        description:
          "A creamy blend of spinach and artichokes, perfect for dipping.",
      },
      {
        id: 12,
        name: "Stuffed Mushrooms with Creamy Filling",
        imageUrl:
          "https://thegrillingguide.com/wp-content/uploads/2020/06/Stuffed-Mushrooms-1.jpg",
        price: 16,
        description:
          "Enjoy stuffed mushrooms filled with a delightful creamy mixture.",
      },
    ],
    lunch: [
      {
        id: 13,
        name: "Premium Deep Sea Snow White Cod Fillet",
        imageUrl: "https://i.imgur.com/BnKfXSC.png",
        price: 50,
        description:
          "Savor the premium deep-sea snow white cod fillet prepared to perfection.",
      },
      {
        id: 14,
        name: "Orange Wine",
        imageUrl:
          "https://www.totalwine.com/site/binaries/t1648485268844/content/gallery/data-axle/0094-orange-wine/orange-wine-hero.png",
        price: 25,
        description:
          "Indulge in the unique and refreshing taste of orange wine to complement your meal.",
      },
      {
        id: 15,
        name: "Best pumpkin for pumpkin soup",
        imageUrl: "https://i.imgur.com/mIjE7hq.png",
        price: 15,
        description:
          "Experience the rich and comforting flavor of the best pumpkin used for pumpkin soup.",
      },
      {
        id: 16,
        name: "Strip Steak with Rosemary Butter",
        imageUrl: "https://i.imgur.com/KCc5h1E.png",
        price: 35,
        description:
          "Delight in a strip steak served with rosemary-infused butter for a burst of flavor.",
      },
      {
        id: 17,
        name: "Braised Slice Abalone Fish Maw with Premium Sea Food",
        imageUrl: "https://i.imgur.com/KhtKird.png",
        price: 40,
        description:
          "Savor the exquisite flavors of braised slice abalone fish maw with premium sea food.",
      },
      {
        id: 18,
        name: "Pan Fried Live Prawn with Superior Soy Sauce",
        imageUrl: "https://i.imgur.com/6GndiQP.png",
        price: 30,
        description:
          "Enjoy the succulence of pan-fried live prawns drizzled with superior soy sauce.",
      },
    ],
    drinks: [
      {
        id: 19,
        name: "Classic Mojito",
        imageUrl:
          "https://cdn.loveandlemons.com/wp-content/uploads/2020/07/mojito.jpg",
        price: 8,
        description:
          "A refreshing blend of muddled mint, lime, and simple syrup, topped with soda water.",
      },
      {
        id: 20,
        name: "Strawberry Margarita",
        imageUrl:
          "https://www.tastyaz.com/wp-content/uploads/2022/03/Frozen-Strawberry-Margarita-2.jpg",
        price: 10,
        description:
          "Indulge in the sweet and tangy flavors of fresh strawberries combined with tequila, triple sec, and lime juice.",
      },
      {
        id: 21,
        name: "Espresso Martini",
        imageUrl:
          "https://dish.co.nz/assets/media/2019/12/17/dish-recipes-88-espresso-martini__FillWzg1MCwxMTc0XQ.png",
        price: 12,
        description:
          "Experience the perfect marriage of coffee and vodka in this classic cocktail.",
      },
      {
        id: 22,
        name: "Virgin Pina Colada",
        imageUrl:
          "https://platedcravings.com/wp-content/uploads/2022/06/Virgin-Pina-Colada-Plated-Cravings-9.jpg",
        price: 6,
        description:
          "Escape to a tropical paradise with this non-alcoholic twist on the classic Pina Colada.",
      },
      {
        id: 23,
        name: "Sparkling Peach Sangria",
        imageUrl:
          "https://i1.wp.com/apaigeofpositivity.com/wp-content/uploads/2022/07/Sparkling-Peach-White-Wine-Sangria-13.jpg",
        price: 9,
        description:
          "Sip on the effervescent blend of white wine, sparkling water, and ripe peaches in this delightful sangria.",
      },
      {
        id: 24,
        name: "Iced Caramel Macchiato",
        imageUrl:
          "https://www.thespruceeats.com/thmb/hyoTTk_472U5IpzxiQ7HQ3aOFlM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/iced-caramel-macchiato-5080057-06-bae5494a83494912bab06da8f88d166c.jpg",
        price: 5,
        description:
          "Indulge in the perfect combination of espresso, milk, and sweet caramel syrup over ice.",
      },
    ],
    sweets: [
      {
        id: 25,
        name: "Chocolate Lava Cake",
        imageUrl:
          "https://bromabakery.com/wp-content/uploads/2023/01/Molten-Lava-Cakes.jpg",
        price: 8,
        description:
          "Indulge in the rich and gooey goodness of our decadent chocolate lava cake.",
      },
      {
        id: 26,
        name: "New York Cheesecake",
        imageUrl:
          "https://www.curlyscooking.co.uk/wp-content/uploads/2023/10/New-York-Cheesecake-21-scaled.jpg",
        price: 10,
        description:
          "Experience the creamy delight of our classic New York-style cheesecake.",
      },
      {
        id: 27,
        name: "Red Velvet Cupcakes",
        imageUrl:
          "https://www.boskitchen.com/wp-content/uploads/2022/12/redvelvetcupcakes-6.jpg",
        price: 5,
        description:
          "Enjoy the perfect blend of moist red velvet and creamy frosting in our delightful cupcakes.",
      },
      {
        id: 28,
        name: "Tiramisu",
        imageUrl:
          "https://www.craftycookingmama.com/wp-content/uploads/2015/11/060.jpg",
        price: 7,
        description:
          "Savor the layers of coffee-soaked ladyfingers and mascarpone cheese in our classic tiramisu.",
      },
      {
        id: 29,
        name: "Macarons Assortment",
        imageUrl:
          "https://ebakeshop.smartegicsystems.com/wp-content/uploads/sites/11/2020/05/French-Macarons2.jpg",
        price: 12,
        description:
          "Delight your taste buds with our colorful assortment of French macarons, each with its own unique flavor.",
      },
      {
        id: 30,
        name: "Fruit Tart",
        imageUrl:
          "https://www.modernhoney.com/wp-content/uploads/2017/04/Fruit-Tart-Recipe-8-500x375.jpg",
        price: 9,
        description:
          "Indulge in a medley of fresh fruits atop a buttery tart crust, creating a perfect balance of sweetness and tartness.",
      },
    ],

    fruits: [
      {
        id: 31,
        name: "Fresh Strawberries",
        imageUrl:
          "https://www.realsimple.com/thmb/C0Z2Xy0Y7d7HiQFbFHHUVaoJoD8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/StoreStrawberriesInternal1GettyImages-4563c209811d4be782fb6f12140d087c.jpg",
        price: 3,
        description:
          "Enjoy the vibrant sweetness of handpicked fresh strawberries, bursting with flavor and goodness.",
      },
      {
        id: 32,
        name: "Juicy Watermelon Slices",
        imageUrl:
          "https://storage.googleapis.com/images-sof-prd-9fa6b8b.sof.prd.v8.commerce.mi9cloud.com/product-images/detail/8208.jpg",
        price: 4,
        description:
          "Quench your thirst with our juicy watermelon slices, a perfect refreshing treat for any occasion.",
      },
      {
        id: 33,
        name: "Sweet Mango Cubes",
        imageUrl:
          "https://cdn.healthybazar.com/images/product/large/healthybazar_16691900520.png",
        price: 5,
        description:
          "Indulge in the tropical sweetness of ripe mango cubes, offering a delightful burst of natural goodness.",
      },
      {
        id: 34,
        name: "Crisp Apple Slices",
        imageUrl:
          "https://belleofthekitchen.com/wp-content/uploads/2019/10/best-apple-crisp-8.jpg",
        price: 2,
        description:
          "Savor the crisp and refreshing taste of our apple slices, a perfect healthy snack option.",
      },
      {
        id: 35,
        name: "Exotic Dragon Fruit",
        imageUrl:
          "https://flowerseeds.co.nz/image/cache/catalog/pitaya-kokkini-frouto-tou-drakou_600x477-630x552.jpg",
        price: 6,
        description:
          "Experience the unique and exotic flavor of dragon fruit, with its vibrant pink skin and subtly sweet taste.",
      },
      {
        id: 36,
        name: "Tangy Pineapple Chunks",
        imageUrl:
          "https://cdn11.bigcommerce.com/s-sqhh638jdm/images/stencil/1000x1000/products/1091/1908/p1__90059.1559324315.jpg?c=2",
        price: 4.5,
        description:
          "Delight your taste buds with the tropical goodness of tangy pineapple chunks, a perfect blend of sweetness and tanginess.",
      },
    ],
    testimonials: [
      {
        id: 37,
        name: "Yukihira Soma",
        photoURL:
          "https://i.pinimg.com/564x/94/f8/51/94f8516cfe4b4791cf8712a37f132bbe.jpg",
        statement: `"Tasting a dish isn't just about flavors; it's about experiencing a journey. Every bite tells a story, and as a chef, I want to create tales that linger on the taste buds and resonate with the heart."`,
        job: "Student",
      },
      {
        id: 38,
        name: "Tadaroko Megumi",
        photoURL:
          "https://i.pinimg.com/564x/f6/3a/dd/f63add6ef3284dcc9d99db69b364253b.jpg",
        statement: `"I believe that the warmth and love you pour into your cooking is just as important as the ingredients themselves. Food is a way to connect, to share joy, and to make someone's day a little brighter."`,
        job: "Executive Chef",
      },
      {
        id: 39,
        name: "Nakiri Erina",
        photoURL:
          "https://i.pinimg.com/564x/2a/96/78/2a96789b7b5e15ee046aa77ce93ec273.jpg",
        statement: `"The true essence of cooking lies in perfection. Only by achieving perfection can one create a dish that transcends the ordinary and leaves an indelible mark on the palate."`,
        job: "Restaurant Manager",
      },
    ],
    blog: [
      {
        id: 40,
        profile:
          "https://i.pinimg.com/736x/4d/bc/b3/4dbcb31be5d66f3a933f5af0c2dac37b.jpg",
        author: "Yukihira Soma",
        photoUrl: "https://i.imgur.com/7s0OOzi.png",
        date: "October 17, 2023",
        time: "3:33 pm",
        comments: 2,
        title: "Fruit and vegetables and protection against diseases",
        content:
          "Eating a diet rich in fruits and vegetables has been linked to numerous health benefits. These nutrient-packed foods provide essential vitamins, minerals, and antioxidants that play a crucial role in protecting the body against various diseases. Incorporating a colorful array of fruits and vegetables into your daily meals is a delicious way to support your overall well-being.",
      },
      {
        id: 41,
        profile:
          "https://i.pinimg.com/564x/01/74/c1/0174c14c391480b2b1680e6cc734b0e2.jpg",
        photoUrl: "https://i.imgur.com/rXGEGq3.png",
        author: "Kobayashi Rindou",
        date: "November 5, 2023",
        time: "10:15 am",
        comments: 5,
        title: "The Art of Cooking: A Culinary Journey",
        content:
          "Embark on a culinary journey as we explore the art of cooking. From mastering basic techniques to experimenting with exotic ingredients, our culinary experts share their insights to elevate your cooking skills. Unleash your creativity in the kitchen and discover the joy of preparing delicious and memorable meals for yourself and your loved ones.",
      },
      {
        id: 42,
        profile:
          "https://i.pinimg.com/564x/03/3c/3e/033c3ef94d703fc3c6a0f361465866f7.jpg",
        author: "Satoshi Isshiki",
        photoUrl: "https://i.imgur.com/xveZnpd.png",
        date: "December 12, 2023",
        time: "2:45 pm",
        comments: 8,
        title: "Exploring Exotic Spices for Flavorful Dishes",
        content:
          "Spices have the power to transform ordinary dishes into extraordinary culinary delights. Join us on a journey of flavor exploration as we delve into the world of exotic spices. Learn about the unique tastes and aromas that different spices bring to your dishes, and discover creative ways to incorporate them into your cooking.",
      },
      {
        id: 43,
        profile:
          "https://i.pinimg.com/564x/5f/e5/0a/5fe50ab4edd2a87f320f31d70b83c92b.jpg",
        author: "Terunori Kuga",
        photoUrl: "https://i.imgur.com/xOgZhYt.png",
        date: "January 8, 2024",
        time: "4:20 pm",
        comments: 3,
        title: "The Joy of Baking: Sweet Treats for Every Occasion",
        content:
          "Indulge your sweet tooth with our delightful baking recipes. From decadent cakes to mouthwatering cookies, we share the joy of creating delicious treats for every occasion. Join us in the kitchen as we explore the art and science of baking, and elevate your dessert game to new heights.",
      },
      {
        id: 44,
        profile:
          "https://i.pinimg.com/564x/b8/fb/d0/b8fbd0f6aa4c0de5f1d26f30833ca5f4.jpg",
        author: "Tsukasa Eishi",
        photoUrl: "https://i.imgur.com/kD7s1IG.png",
        date: "February 22, 2024",
        time: "1:55 pm",
        comments: 6,
        title: "Mindful Eating: A Holistic Approach to Food Consumption",
        content:
          "Discover the benefits of mindful eating and its positive impact on your overall well-being. In this article, we explore the principles of mindful eating, offering practical tips to cultivate a healthier relationship with food. Embrace the present moment and savor the flavors of each meal for a more fulfilling dining experience.",
      },
      {
        id: 45,
        profile:
          "https://i.pinimg.com/564x/89/df/34/89df340b8b595fe81ba2e93391eeefe8.jpg",
        author: "Nakiri Erina",
        photoUrl: "https://i.imgur.com/P75OWjN.png",
        date: "March 14, 2024",
        time: "12:10 pm",
        comments: 4,
        title: "Gourmet Delights: Elevating Home Cooking",
        content:
          "Transform your home cooking into a gourmet experience with our expert tips and recipes. Whether you're a novice or seasoned chef, we provide insights into creating restaurant-quality dishes in the comfort of your own kitchen. Elevate your culinary skills and treat yourself to gourmet delights at every meal.",
      },
      {
        id: 46,
        profile:
          "https://i.pinimg.com/564x/ba/fc/31/bafc31d5df000f3f143d03895aed2c76.jpg",
        author: "Yoshino Yuki",
        photoUrl:
          "https://volene.com/wp-content/uploads/2018/02/Food2_01_Studio-Session-086_Volen_Evtimov.jpg",
        date: "April 5, 2024",
        time: "5:45 pm",
        comments: 7,
        title: "The Perfect Cup: Exploring Artisanal Coffee Brewing",
        content:
          "Dive into the world of artisanal coffee brewing and elevate your coffee experience. From choosing the perfect beans to mastering brewing techniques, we guide you through the nuances of crafting the perfect cup of coffee. Discover the art and science behind artisanal coffee and savor the rich flavors with each sip.",
      },
      {
        id: 47,
        profile:
          "https://i.pinimg.com/564x/58/bc/5c/58bc5c92902994ab610daf30ec9ddbb1.jpg",
        author: "Hayama Akira",
        photoUrl:
          "https://volene.com/wp-content/uploads/2018/02/Food2_02_Studio-Session-043_Volen_Evtimov.jpg",
        date: "May 20, 2024",
        time: "9:30 am",
        comments: 2,
        title: "Balancing Flavors: Creating Harmony in Your Dishes",
        content:
          "Achieve culinary perfection by mastering the art of balancing flavors in your dishes. Join us as we explore the key elements of taste and provide practical tips on achieving harmony in every bite. Enhance your cooking skills and create dishes that leave a lasting impression on your taste buds.",
      },
      {
        id: 48,
        profile:
          "https://i.pinimg.com/564x/28/a2/79/28a279c21692443b7e306b0089871ad4.jpg",
        author: "Takumi Aldini",
        photoUrl:
          "https://volene.com/wp-content/uploads/2018/02/Food2_03_Studio-Session-050_Volen_Evtimov.jpg",
        date: "June 8, 2024",
        time: "3:00 pm",
        comments: 5,
        title: "Sustainable Eating: Nourishing Your Body and the Planet",
        content:
          "Embrace sustainable eating practices for a healthier you and a healthier planet. In this article, we explore the impact of food choices on the environment and provide tips for adopting a more sustainable and eco-friendly approach to eating. Nourish your body while making positive contributions to the world around you.",
      },
      {
        id: 49,
        profile:
          "https://i.pinimg.com/564x/50/34/bb/5034bb7c432a0effd03aa80df49212cf.jpg",
        author: "Shinomiya Kojiro",
        photoUrl:
          "https://i.pinimg.com/564x/bb/04/e8/bb04e8f8cb9149a3df21ac53752c721b.jpg",
        date: "July 15, 2024",
        time: "6:20 pm",
        comments: 3,
        title: "From Garden to Plate: Growing and Cooking Your Own Produce",
        content:
          "Experience the satisfaction of growing your own produce and transforming it into delightful dishes. In this article, we delve into the joys of gardening and share tips on cultivating a variety of fruits, vegetables, and herbs. Discover the connection between the garden and the plate as we explore the farm-to-table experience and celebrate the freshness of homegrown ingredients.",
      },
    ],
  },
};

const port = process.env.PORT || 9000;

app.use(cors());

app.get("/zerocuisineapi", (req, res) => {
  res.json(zerocuisineapi);
});

app.listen(port, () => {
  console.log("server is running on port 5000");
});
