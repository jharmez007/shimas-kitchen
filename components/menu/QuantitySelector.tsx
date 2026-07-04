"use client";

import { motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";

interface QuantitySelectorProps {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
}

export default function QuantitySelector({
  quantity,
  setQuantity,
}: QuantitySelectorProps) {
  const decrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const increase = () => {
    setQuantity((prev) => prev + 1);
  };

  return (
    <div className="space-y-3">
      <h3 className="font-semibold text-lg">
        Quantity
      </h3>

      <div className="inline-flex items-center rounded-2xl border border-neutral-200 bg-white shadow-sm">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={decrease}
          className="flex h-14 w-14 items-center justify-center transition hover:bg-neutral-100"
        >
          <Minus size={18} />
        </motion.button>

        <div className="flex h-14 min-w-[80px] items-center justify-center border-x border-neutral-200 text-xl font-bold">
          {quantity}
        </div>

        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={increase}
          className="flex h-14 w-14 items-center justify-center transition hover:bg-[#D4AF37] hover:text-black"
        >
          <Plus size={18} />
        </motion.button>
      </div>
    </div>
  );
}