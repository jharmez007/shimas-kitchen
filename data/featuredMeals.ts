import { Food } from "@/types/food";

export const featuredMeals: Food[] = [
  {
    id: 1,
    name: "Chicken Pizza",
    description: "Stone baked pizza with juicy chicken and mozzarella cheese.",
    image: "/images/foods/pizza.jpg",
    price: 16000,
    badge: "Best Seller",
    featured: true,
  },
  {
    id: 2,
    name: "Egusi Soup",
    description: "Rich homemade egusi soup served with premium assorted meat.",
    image: "/images/foods/egusi.jpg",
    price: 14000,
    badge: "Popular",
    featured: true,
  },
  {
    id: 3,
    name: "Chocolate Cake",
    description: "Moist layered chocolate cake baked fresh to order.",
    image: "/images/foods/cake.jpg",
    price: 17000,
    badge: "Fresh",
    featured: true,
  },
  {
    id: 4,
    name: "Small Chops",
    description: "Perfectly fried assorted small chops for every occasion.",
    image: "/images/foods/chops.jpg",
    price: 3000,
    badge: "Hot",
    featured: true,
  },
];