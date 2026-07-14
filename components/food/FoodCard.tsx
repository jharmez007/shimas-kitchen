"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Food } from "@/types/food";

interface Props {
  meal: Food;
  onOrder: () => void;
}

export default function FoodCard({ meal, onOrder }: Props) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-[28px] border border-neutral-200 bg-white shadow-sm transition-all hover:shadow-2xl"
    >
      <div className="relative overflow-hidden">
        <Image
          src={meal.image}
          alt={meal.name}
          width={600}
          height={500}
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
        />

        {meal.badge && (
          <span className="absolute left-5 top-5 rounded-full bg-[#D4AF37] px-4 py-2 text-sm font-semibold text-black">
            {meal.badge}
          </span>
        )}
      </div>

      <div className="space-y-4 p-6">
        <h3 className="font-[family:var(--font-playfair)] text-2xl font-bold">
          {meal.name}
        </h3>

        <p className="text-neutral-600">{meal.description}</p>

        <div className="flex items-center justify-between">
          <h4 className="text-2xl font-bold text-[#D4AF37]">
            ₦{meal.price.toLocaleString()}
          </h4>

          <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={onOrder}
            className="flex items-center gap-2 rounded-full bg-black px-5 py-3 text-white transition hover:bg-[#D4AF37] hover:text-black"
          >
            Order

            <ArrowRight size={18} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}