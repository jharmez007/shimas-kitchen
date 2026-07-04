import { MenuItem } from "@/types/menu";

export const menu: MenuItem[] = [
  // ======================
  // PIZZA
  // ======================

  {
    id: "beef-pizza",
    category: "Pizza",
    name: "Beef Pizza",
    description: "Stone baked pizza with premium beef toppings.",
    image: "/foods/beef-pizza.jpg",
    featured: true,
    options: [
      { label: "Medium", price: 13000 },
      { label: "Large", price: 16000 },
    ],
  },

  {
    id: "chicken-pizza",
    category: "Pizza",
    name: "Chicken Pizza",
    description: "Stone baked pizza loaded with juicy chicken.",
    image: "/foods/chicken-pizza.jpg",
    options: [
      { label: "Medium", price: 16000 },
      { label: "Large", price: 19000 },
    ],
  },

  {
    id: "chicken-suya-pizza",
    category: "Pizza",
    name: "Chicken Suya Pizza",
    description: "Spicy suya chicken on freshly baked pizza.",
    image: "/foods/chicken-suya-pizza.jpeg",
    options: [
      { label: "Medium", price: 16000 },
      { label: "Large", price: 20000 },
    ],
  },

  {
    id: "beef-suya-pizza",
    category: "Pizza",
    name: "Beef Suya Pizza",
    description: "Tender beef suya on a crispy pizza base.",
    image: "/foods/beef-suya-pizza.png",
    options: [
      { label: "Medium", price: 15000 },
      { label: "Large", price: 17000 },
    ],
  },

  {
    id: "half-half-pizza",
    category: "Pizza",
    name: "Half Chicken & Half Beef",
    description: "The best of both worlds.",
    image: "/foods/half-half-pizza.jpeg",
    featured: true,
    options: [
      { label: "Medium", price: 18000 },
      { label: "Large", price: 20000 },
    ],
  },

  // ======================
  // CUPCAKES
  // ======================

  {
    id: "cupcakes",
    category: "Cakes",
    name: "Cupcakes",
    description: "Freshly baked cupcakes.",
    image: "/foods/cupcake.jpeg",
    featured: true,
    options: [{ label: "Box of 6", price: 12000 }],
  },

  // ======================
  // CAKES
  // ======================

  {
    id: "cakes",
    category: "Cakes",
    name: "Custom Celebration Cakes",
    description: "Freshly baked premium celebration cakes.",
    image: "/foods/custom-cake.jpeg",
    featured: true,
    options: [
      { label: "6 Inches • 1 Layer", price: 17000 },
      { label: "6 Inches • 2 Layers", price: 34000 },
      { label: "6 Inches • 3 Layers", price: 50000 },
      { label: "6 Inches • 4 Layers", price: 65000 },

      { label: "7 Inches • 1 Layer", price: 25000 },
      { label: "7 Inches • 2 Layers", price: 45000 },
      { label: "7 Inches • 3 Layers", price: 65000 },
      { label: "7 Inches • 4 Layers", price: 85000 },

      { label: "8 Inches • 1 Layer", price: 30000 },
      { label: "8 Inches • 2 Layers", price: 55000 },
      { label: "8 Inches • 3 Layers", price: 80000 },
      { label: "8 Inches • 4 Layers", price: 100000 },

      { label: "9 Inches • 1 Layer", price: 35000 },
      { label: "9 Inches • 2 Layers", price: 65000 },
      { label: "9 Inches • 3 Layers", price: 95000 },
      { label: "9 Inches • 4 Layers", price: 125000 },

      { label: "10 Inches • 1 Layer", price: 40000 },
      { label: "10 Inches • 2 Layers", price: 75000 },
      { label: "10 Inches • 3 Layers", price: 110000 },
      { label: "10 Inches • 4 Layers", price: 150000 },

      { label: "12 Inches • 1 Layer", price: 45000 },
      { label: "12 Inches • 2 Layers", price: 85000 },
      { label: "12 Inches • 3 Layers", price: 125000 },
      { label: "12 Inches • 4 Layers", price: 160000 },
    ],
  },

  // ======================
  // SMALL CHOPS
  // ======================

  {
    id: "small-chops",
    category: "Small Chops",
    name: "Small Chops Packages",
    description: "Perfect for parties and celebrations.",
    image: "/foods/small-chops.jpg",
    featured: true,
    options: [
      { label: "Package One", price: 3000 },
      { label: "Package Two", price: 5000 },
      { label: "Package Three", price: 8500 },
      { label: "Package Four", price: 14000 },
      { label: "Package Five", price: 20000 },
      { label: "Package Six", price: 30000 },
    ],
  },

  // ======================
  // MEAT PIES
  // ======================

  {
    id: "meat-pies",
    category: "Meat Pies",
    name: "Meat Pies",
    description: "Golden flaky homemade meat pies.",
    image: "/foods/meatpie.jpeg",
    featured: true,
    options: [
      { label: "3 Big", price: 6000 },
      { label: "3 Medium", price: 4000 },
      { label: "5 Big", price: 10000 },
      { label: "5 Medium", price: 6000 },
      { label: "10 Big", price: 18000 },
      { label: "10 Medium", price: 13000 },
      { label: "20 Big", price: 36000 },
      { label: "20 Medium", price: 26000 },
    ],
  },

  // ======================
  // SOUPS
  // ======================

  {
    id: "egusi",
    category: "Soups",
    name: "Egusi Soup",
    description: "Fresh homemade egusi soup.",
    image: "/foods/egusi.jpg",
    options: [
      { label: "2L Goat", price: 22000 },
      { label: "2L Beef", price: 18000 },
      { label: "2L Chicken", price: 20000 },
      { label: "1L Goat", price: 18000 },
      { label: "1L Beef", price: 14000 },
      { label: "1L Chicken", price: 15000 },
    ],
  },

  {
    id: "afang",
    category: "Soups",
    name: "Afang Soup",
    description: "Rich Afang soup.",
    image: "/foods/afang.jpeg",
    options: [
      { label: "2L Goat", price: 25000 },
      { label: "2L Beef", price: 20000 },
      { label: "2L Chicken", price: 25000 },
      { label: "1L Goat", price: 20000 },
      { label: "1L Beef", price: 15000 },
      { label: "1L Chicken", price: 20000 },
    ],
  },

  // ======================
  // STEWS
  // ======================

  {
    id: "beef-stew",
    category: "Stews",
    name: "Beef Stew",
    description: "Rich homemade beef stew.",
    image: "/foods/beef-stew.jpg",
    options: [
      { label: "2 Litres", price: 35000 },
      { label: "3 Litres", price: 45000 },
      { label: "4 Litres", price: 55000 },
    ],
  },

  {
    id: "chicken-stew",
    category: "Stews",
    name: "Chicken Stew",
    description: "Fresh homemade chicken stew.",
    image: "/foods/chicken-stew.jpg",
    options: [
      { label: "2 Litres", price: 38000 },
      { label: "3 Litres", price: 48000 },
      { label: "4 Litres", price: 55000 },
    ],
  },

  {
    id: "turkey-stew",
    category: "Stews",
    name: "Turkey Stew",
    description: "Rich turkey stew.",
    image: "/foods/turkey-stew.jpeg",
    options: [
      { label: "2 Litres", price: 40000 },
      { label: "3 Litres", price: 55000 },
      { label: "4 Litres", price: 65000 },
    ],
  },

  {
    id: "fish-stew",
    category: "Stews",
    name: "Fresh Fish Stew",
    description: "Fresh fish stew.",
    image: "/foods/fish-stew.jpeg",
    options: [
      { label: "2 Litres", price: 35000 },
      { label: "3 Litres", price: 45000 },
      { label: "4 Litres", price: 55000 },
    ],
  },
];