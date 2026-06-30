"use client";

import { motion } from "framer-motion";
import {
  ChefHat,
  Truck,
  BadgeCheck,
  HandPlatter,
} from "lucide-react";

import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";
import { SectionHeader } from "@/components/common/SectionHeader";

const reasons = [
  {
    title: "Fresh Ingredients",
    description:
      "Every meal is prepared with carefully selected fresh ingredients.",
    icon: ChefHat,
  },
  {
    title: "Fast Delivery",
    description:
      "Quick and reliable delivery so your food arrives fresh and hot.",
    icon: Truck,
  },
  {
    title: "Quality Guaranteed",
    description:
      "Premium recipes, hygienic preparation and consistent quality.",
    icon: BadgeCheck,
  },
  {
    title: "Delicious Meals",
    description:
      "From cakes to soups and grills, every bite is unforgettable.",
    icon: HandPlatter,
  },
];

export default function WhyChooseUs() {
  return (
    <Section
      id="why-us"
      className="bg-white"
    >
      <Container>
        <SectionHeader
          badge="Why Choose Us"
          title="More Than Just Great Food"
          subtitle="Everything we do is centered around quality, freshness and customer satisfaction."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {reasons.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: .5,
                  delay: index * .15,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group rounded-[30px] border border-neutral-200 bg-white p-8 shadow-sm transition-all hover:border-[#D4AF37]/30 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4AF37]/10 transition group-hover:bg-[#D4AF37]">
                  <Icon
                    size={30}
                    className="text-[#D4AF37] transition group-hover:text-black"
                  />
                </div>

                <h3 className="mt-8 font-[family:var(--font-playfair)] text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-neutral-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}