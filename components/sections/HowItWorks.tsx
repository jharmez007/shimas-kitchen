"use client";

import { motion } from "framer-motion";
import { Search, UtensilsCrossed, MessageCircle } from "lucide-react";

import {Container} from "@/components/common/Container";
import {Section} from "@/components/common/Section";
import {SectionHeader} from "@/components/common/SectionHeader";

const steps = [
  {
    title: "Browse the Menu",
    description:
      "Explore our delicious meals and discover your next favorite dish.",
    icon: Search,
  },
  {
    title: "Choose Your Meal",
    description:
      "Select your preferred meal, quantity and any custom preferences.",
    icon: UtensilsCrossed,
  },
  {
    title: "Order on WhatsApp",
    description:
      "Your order is sent instantly to our WhatsApp for confirmation.",
    icon: MessageCircle,
  },
];

export default function HowItWorks() {
  return (
    <Section
      id="how-it-works"
      className="bg-[#FFFDF8]"
    >
      <Container>
        <SectionHeader
          badge="How It Works"
          title="Ordering Is Simple"
          subtitle="Get your favorite meals in just three easy steps."
        />

        <div className="relative mt-20 grid gap-10 lg:grid-cols-3">
          <div className="absolute left-1/2 top-10 hidden h-[2px] w-[70%] -translate-x-1/2 bg-gradient-to-r from-[#D4AF37]/10 via-[#D4AF37] to-[#D4AF37]/10 lg:block" />

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                className="relative rounded-[30px] bg-white p-10 text-center shadow-lg"
              >
                <div className="absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-[#D4AF37] font-bold text-black">
                  {index + 1}
                </div>

                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#D4AF37]/10">
                  <Icon
                    size={36}
                    className="text-[#D4AF37]"
                  />
                </div>

                <h3 className="mt-8 font-[family:var(--font-playfair)] text-2xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-neutral-600">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}