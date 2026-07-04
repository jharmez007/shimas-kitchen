"use client";

import { motion } from "framer-motion";

import { Section } from "@/components/common/Section";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";

import FoodCard from "../food/FoodCard";

import { featuredMeals } from "@/data/featuredMeals";

export default function FeaturedMeals() {
  return (
    <Section
      id="featured"
      className="bg-white"
    >
      <Container>
        <SectionHeader
          badge="Featured Meals"
          title="Meals You'll Keep Coming Back For"
          subtitle="Freshly prepared with premium ingredients and crafted with love."
        />

        <div className="mt-16 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {featuredMeals.map((meal, index) => (
            <motion.div
              key={meal.id}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: .5,
                delay: index * .12,
              }}
            >
              <FoodCard meal={meal} />
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="/menu"
            className="rounded-full border border-[#D4AF37] px-8 py-4 font-semibold transition hover:bg-[#D4AF37]"
          >
            View Full Menu →
          </a>
        </div>
      </Container>
    </Section>
  );
}