"use client";

import { motion } from "framer-motion";
import { MenuCategory } from "@/types/menu";

interface CategoryFilterProps {
  categories: ("All" | MenuCategory)[];
  active: "All" | MenuCategory;
  onChange: (category: "All" | MenuCategory) => void;
}

export default function CategoryFilter({
  categories,
  active,
  onChange,
}: CategoryFilterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide"
    >
      {categories.map((category) => {
        const isActive = active === category;

        return (
          <button
            key={category}
            onClick={() => onChange(category)}
            className="relative shrink-0"
          >
            <motion.div
              layout
              whileTap={{ scale: 0.95 }}
              className={`
                rounded-full
                px-6
                py-3
                text-sm
                font-semibold
                transition-all
                duration-300
                ${
                  isActive
                    ? "bg-[#D4AF37] text-black shadow-lg"
                    : "border border-neutral-200 bg-white text-neutral-700 hover:border-[#D4AF37] hover:text-[#B8860B]"
                }
              `}
            >
              {category}

              {isActive && (
                <motion.div
                  layoutId="active-category"
                  className="absolute inset-0 -z-10 rounded-full bg-[#D4AF37]"
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30,
                  }}
                />
              )}
            </motion.div>
          </button>
        );
      })}
    </motion.div>
  );
}