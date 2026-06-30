"use client";

import { ArrowRight, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroButtons() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="mt-10 flex flex-col gap-4 sm:flex-row"
    >
      <motion.a
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        href="https://wa.me/2347080537185"
        className="inline-flex items-center justify-center gap-3 rounded-full bg-[#D4AF37] px-8 py-4 font-semibold text-black shadow-xl transition hover:bg-[#C59B1A]"
      >
        Order on WhatsApp

        <ArrowRight size={18} />
      </motion.a>

      <motion.a
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        href="#menu"
        className="inline-flex items-center justify-center gap-3 rounded-full border border-neutral-300 bg-white px-8 py-4 font-semibold shadow-sm transition hover:border-[#D4AF37]"
      >
        Browse Menu

        <BookOpen size={18} />
      </motion.a>
    </motion.div>
  );
}