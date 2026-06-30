"use client";

import { Star, Truck, Utensils } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingBadge() {
  return (
    <>
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute left-0 top-10 rounded-2xl bg-white p-4 shadow-xl"
      >
        <div className="flex items-center gap-3">
          <Star className="fill-yellow-400 text-yellow-400" size={18} />
          <div>
            <p className="font-semibold">4.9 Rating</p>
            <span className="text-xs text-neutral-500">
              Happy Customers
            </span>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="absolute bottom-12 right-0 rounded-2xl bg-white p-4 shadow-xl"
      >
        <div className="flex items-center gap-3">
          <Truck size={18} className="text-[#D4AF37]" />
          <div>
            <p className="font-semibold">Fast Delivery</p>
            <span className="text-xs text-neutral-500">
              Fresh Daily
            </span>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ rotate: [0, 6, -6, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute right-8 top-0 rounded-full bg-[#D4AF37] p-5 shadow-xl"
      >
        <Utensils className="text-black" />
      </motion.div>
    </>
  );
}