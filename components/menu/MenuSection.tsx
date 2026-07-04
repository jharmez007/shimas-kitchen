"use client";

import { useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";

import {Container} from "@/components/common/Container";
import {Section} from "@/components/common/Section";
import {SectionHeader} from "@/components/common/SectionHeader";

import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import MenuGrid from "./MenuGrid";
import FoodModal from "./FoodModal";

import { menu } from "@/data/menu";
import { MenuCategory, MenuItem } from "@/types/menu";

const categories: ("All" | MenuCategory)[] = [
  "All",
  "Pizza",
  "Cakes",
  "Meat Pies",
  "Small Chops",
  "Soups",
  "Stews",
];

export default function MenuSection() {
  const [search, setSearch] = useState("");
  const [category, setCategory] =
    useState<"All" | MenuCategory>("All");

  const [selectedFood, setSelectedFood] =
    useState<MenuItem | null>(null);

  const filteredMenu = useMemo(() => {
    return menu.filter((food) => {
      const matchesCategory =
        category === "All" || food.category === category;

      const matchesSearch =
        food.name.toLowerCase().includes(search.toLowerCase()) ||
        food.description
          .toLowerCase()
          .includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  return (
    <Section
      id="menu"
      className="bg-[#FFFDF9]"
    >
      <Container>
        <SectionHeader
          badge="Our Menu"
          title="Freshly Made, Beautifully Served"
          subtitle="Browse our complete collection of freshly prepared meals, pastries and homemade specials."
        />

        <div className="mt-12 space-y-8">
          <SearchBar
            value={search}
            onChange={setSearch}
          />

          <CategoryFilter
            categories={categories}
            active={category}
            onChange={setCategory}
          />
        </div>

        <MenuGrid
          foods={filteredMenu}
          onSelect={setSelectedFood}
        />

        <AnimatePresence>
          {selectedFood && (
            <FoodModal
              food={selectedFood}
              onClose={() => setSelectedFood(null)}
            />
          )}
        </AnimatePresence>
      </Container>
    </Section>
  );
}