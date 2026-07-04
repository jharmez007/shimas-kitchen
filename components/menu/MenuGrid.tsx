"use client";

import { motion } from "framer-motion";

import FoodCard from "./FoodCard";

import { MenuItem } from "@/types/menu";

interface MenuGridProps {
  foods: MenuItem[];
  onSelect: (food: MenuItem) => void;
}

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
    },
  },
};

export default function MenuGrid({
  foods,
  onSelect,
}: MenuGridProps) {
  if (!foods.length) {
    return (
      <div className="py-28 text-center">
        <h3 className="text-2xl font-semibold">
          No meals found
        </h3>

        <p className="mt-3 text-neutral-500">
          Try searching another meal or choose another category.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
    >
      {foods.map((food) => (
        <motion.div
          key={food.id}
          variants={item}
        >
          <FoodCard
            food={food}
            onClick={() => onSelect(food)}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}