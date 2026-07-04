"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Eye,
  Flame,
  Sparkles,
} from "lucide-react";

import { MenuItem } from "@/types/menu";

interface FoodCardProps {
  food: MenuItem;
  onClick: () => void;
}

export default function FoodCard({
  food,
  onClick,
}: FoodCardProps) {
  const lowestPrice = Math.min(
    ...food.options.map((o) => o.price)
  );

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-[32px] border border-neutral-200 bg-white shadow-sm transition-all hover:border-[#D4AF37]/30 hover:shadow-2xl"
    >
      {/* IMAGE */}

      <div className="relative overflow-hidden">
        <Image
          src={food.image}
          alt={food.name}
          width={700}
          height={700}
          className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {food.featured && (
          <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-[#D4AF37] px-4 py-2 text-sm font-semibold text-black shadow-lg">
            <Sparkles size={16} />

            Featured
          </div>
        )}

        <div className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold backdrop-blur-xl">
          From ₦{lowestPrice.toLocaleString()}
        </div>
      </div>

      {/* BODY */}

      <div className="space-y-6 p-7">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-[family:var(--font-playfair)] text-2xl font-bold">
              {food.name}
            </h3>

            <Flame
              className="text-[#D4AF37]"
              size={20}
            />
          </div>

          <p className="line-clamp-2 leading-7 text-neutral-600">
            {food.description}
          </p>
        </div>

        {/* OPTIONS */}

        <div className="space-y-2">
          {food.options.slice(0, 3).map((option) => (
            <div
              key={option.label}
              className="flex items-center justify-between rounded-xl bg-neutral-50 px-4 py-3"
            >
              <span className="text-sm text-neutral-600">
                {option.label}
              </span>

              <span className="font-semibold">
                ₦{option.price.toLocaleString()}
              </span>
            </div>
          ))}

          {food.options.length > 3 && (
            <p className="pt-1 text-sm font-medium text-[#B8860B]">
              +{food.options.length - 3} more options
            </p>
          )}
        </div>

        {/* ACTIONS */}

        <div className="flex gap-3">
          <motion.button
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.02 }}
            onClick={onClick}
            className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-neutral-200 py-3 font-semibold transition hover:border-[#D4AF37]"
          >
            <Eye size={18} />

            View
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.02 }}
            onClick={onClick}
            className="flex flex-[1.3] items-center justify-center gap-2 rounded-2xl bg-[#D4AF37] py-3 font-semibold text-black shadow-lg transition hover:bg-[#c59d1b]"
          >
            Order

            <ArrowRight size={18} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}