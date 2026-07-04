"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";

import HeroImage from "./HeroImage";
import HeroButtons from "./HeroButtons";
import HeroBackground from "./HeroBackground";

export default function Hero() {
  return (
    <Section
      id="home"
      className="relative overflow-hidden pt-28 md:pt-36 lg:pt-32"
    >
      <HeroBackground />

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Left */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10"
          >
            <span className="inline-flex items-center rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-2 text-sm font-medium text-[#B8860B]">
              🍽️ Fresh • Homemade • Premium
            </span>

            <h1 className="mt-6 font-[family:var(--font-playfair)] text-5xl font-bold leading-tight text-neutral-900 md:text-6xl lg:text-7xl">
              Homemade Meals
              <br />
              Crafted
              <span className="text-[#D4AF37]"> With Love.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-600">
              Experience freshly prepared cakes, pizzas, soups, stews,
              small chops and more — made with premium ingredients and
              delivered with care.
            </p>

            <HeroButtons />
          </motion.div>

          {/* Right */}

          <HeroImage />
        </div>
      </Container>
    </Section>
  );
}