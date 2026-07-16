"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import { MenuItem } from "@/types/menu";
import QuantitySelector from "./QuantitySelector";
import WhatsAppOrderButton from "./WhatsAppOrderButton";

interface FoodModalProps {
  food: MenuItem;
  onClose: () => void;
}

export default function FoodModal({
  food,
  onClose,
}: FoodModalProps) {
  const [selectedOption, setSelectedOption] = useState(food.options[0]);

  const [quantity, setQuantity] = useState(1);

  const [note, setNote] = useState("");

  const total = useMemo(() => {
    return selectedOption.price * quantity;
  }, [selectedOption, quantity]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
            scale: .96,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 40,
            scale: .96,
          }}
          transition={{
            duration: .3,
          }}
          className="relative max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-[32px] bg-white shadow-2xl"
        >
          <button
            onClick={onClose}
            className="absolute right-6 top-6 z-50 rounded-full bg-white p-3 shadow-lg transition hover:rotate-90"
          >
            <X />
          </button>

          <div className="grid max-h-[92vh] overflow-y-auto lg:grid-cols-2">
            {/* LEFT */}

            <div className="relative h-[350px] lg:h-auto">
              <Image
                src={food.image}
                alt={food.name}
                fill
                className="object-cover"
              />
            </div>

            {/* RIGHT */}

            <div className="space-y-8 p-8 lg:p-10">
              <div>
                <span className="rounded-full bg-[#D4AF37]/10 px-4 py-2 text-sm font-semibold text-[#B8860B]">
                  {food.category}
                </span>

                <h2 className="mt-5 font-[family:var(--font-playfair)] text-4xl font-bold">
                  {food.name}
                </h2>

                <p className="mt-4 leading-8 text-neutral-600">
                  {food.description}
                </p>
              </div>

              {/* OPTIONS */}

              <div>
                <h3 className="mb-4 font-semibold">
                  Select Option
                </h3>

                <div className="grid gap-3">
                  {food.options.map((option) => {
                    const active =
                      option.label === selectedOption.label;

                    return (
                      <button
                        key={option.label}
                        onClick={() =>
                          setSelectedOption(option)
                        }
                        className={`rounded-2xl border p-4 text-left transition ${
                          active
                            ? "border-[#D4AF37] bg-[#D4AF37]/10"
                            : "border-neutral-200 hover:border-[#D4AF37]"
                        }`}
                      >
                        <span className="flex items-center justify-between gap-4">
                          <span className="font-semibold">{option.label}</span>

                          <span className="font-bold">
                            ₦{option.price.toLocaleString()}
                          </span>
                        </span>

                        {option.items && (
                          <span className="mt-3 grid gap-1 border-t border-neutral-200/80 pt-3 text-sm text-neutral-600 sm:grid-cols-2">
                            {option.items.map((item) => (
                              <span key={item}>• {item}</span>
                            ))}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              <QuantitySelector
                quantity={quantity}
                setQuantity={setQuantity}
              />

              <div>
                <label className="mb-2 block font-semibold">
                  Special Instructions
                </label>

                <textarea
                  rows={4}
                  value={note}
                  onChange={(e) =>
                    setNote(e.target.value)
                  }
                  placeholder="Extra pepper, no onions..."
                  className="w-full rounded-2xl border border-neutral-200 p-4 outline-none transition focus:border-[#D4AF37]"
                />
              </div>

              <div className="rounded-2xl bg-neutral-50 p-6">
                <div className="flex items-center justify-between">
                  <span>Total</span>

                  <h3 className="text-3xl font-bold text-[#D4AF37]">
                    ₦{total.toLocaleString()}
                  </h3>
                </div>
              </div>

              <WhatsAppOrderButton
                food={food}
                option={selectedOption}
                quantity={quantity}
                note={note}
                total={total}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
