"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { Section } from "@/components/common/Section";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import FoodCard from "../food/FoodCard";
import FoodModal from "@/components/menu/FoodModal";

import { featuredMeals } from "@/data/featuredMeals";
import { Food } from "@/types/food";
import { MenuCategory, MenuItem } from "@/types/menu";

function mapFeaturedMealToMenuItem(meal: Food): MenuItem {
  const category: MenuCategory =
    meal.name.toLowerCase().includes("pizza")
      ? "Pizza"
      : meal.name.toLowerCase().includes("soup")
        ? "Soups"
        : meal.name.toLowerCase().includes("cake")
          ? "Cakes"
          : meal.name.toLowerCase().includes("chops")
            ? "Small Chops"
            : "Cakes";

  return {
    id: `featured-${meal.id}`,
    category,
    name: meal.name,
    description: meal.description,
    image: meal.image,
    featured: meal.featured,
    options: [{ label: "Standard", price: meal.price }],
  };
}

export default function FeaturedMeals() {
  const [selectedMeal, setSelectedMeal] = useState<MenuItem | null>(null);

  const handleOpenOrder = (meal: Food) => {
    setSelectedMeal(mapFeaturedMealToMenuItem(meal));
  };

  const handleCloseModal = () => {
    setSelectedMeal(null);
  };
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
              <FoodCard
                meal={meal}
                onOrder={() => handleOpenOrder(meal)}
              />
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

        {selectedMeal && (
          <FoodModal
            food={selectedMeal}
            onClose={handleCloseModal}
          />
        )}
      </Container>
    </Section>
  );
}