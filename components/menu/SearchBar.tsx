"use client";

import { Search, X } from "lucide-react";
import { motion } from "framer-motion";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="relative"
    >
      <Search
        className="absolute left-6 top-1/2 -translate-y-1/2 text-neutral-400"
        size={20}
      />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search pizza, cakes, soups, stews..."
        className="
          h-16
          w-full
          rounded-2xl
          border
          border-neutral-200
          bg-white
          pl-14
          pr-14
          text-base
          outline-none
          transition-all
          duration-300
          placeholder:text-neutral-400
          focus:border-[#D4AF37]
          focus:ring-4
          focus:ring-[#D4AF37]/15
          shadow-sm
        "
      />

      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute right-5 top-1/2 -translate-y-1/2 rounded-full p-1 transition hover:bg-neutral-100"
        >
          <X size={18} />
        </button>
      )}
    </motion.div>
  );
}