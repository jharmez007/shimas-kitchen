"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import { Section } from "@/components/common/Section";
import { Container } from "@/components/common/Container";
import { SectionHeader } from "@/components/common/SectionHeader";

const features = [
  "Fresh ingredients sourced daily",
  "Prepared with love and care",
  "Fast & reliable delivery",
  "Affordable premium meals",
];

export default function About() {
  return (
    <Section
      id="about"
      className="bg-[#FFFDF8]"
    >
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
            className="relative"
          >
            <div className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-[#D4AF37]/15 blur-3xl" />

            <Image
              src="/images/about/about.jpg"
              loading="eager"
              alt="Shimas Kitchen"
              width={700}
              height={700}
              className="relative rounded-[32px] object-cover shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: .6 }}
          >
            <SectionHeader
              badge="About Us"
              title="Every Meal Tells A Story"
              subtitle="At Shimas Kitchen, we believe great food brings people together. Every meal is freshly prepared using quality ingredients to give you an unforgettable experience."
            />

            <div className="mt-8 space-y-5">
              {features.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4"
                >
                  <div className="rounded-full bg-[#D4AF37]/10 p-2">
                    <CheckCircle2
                      size={18}
                      className="text-[#D4AF37]"
                    />
                  </div>

                  <p className="text-neutral-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-10">
              <div>
                <h3 className="text-4xl font-bold text-[#D4AF37]">
                  500+
                </h3>
                <p className="text-neutral-500">
                  Happy Customers
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-[#D4AF37]">
                  50+
                </h3>
                <p className="text-neutral-500">
                  Delicious Meals
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-bold text-[#D4AF37]">
                  4.9★
                </h3>
                <p className="text-neutral-500">
                  Customer Rating
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}