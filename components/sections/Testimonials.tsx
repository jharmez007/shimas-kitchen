"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

import {Container} from "@/components/common/Container";
import {Section} from "@/components/common/Section";
import {SectionHeader} from "@/components/common/SectionHeader";

const testimonials = [
  {
    name: "Amina Yusuf",
    role: "Regular Customer",
    review:
      "Absolutely the best homemade meals I've had. Fresh, delicious and always delivered on time.",
  },
  {
    name: "David Johnson",
    role: "Food Lover",
    review:
      "The pizza was incredible and the customer service was excellent. Highly recommended.",
  },
  {
    name: "Sarah Ibrahim",
    role: "Verified Customer",
    review:
      "I've ordered multiple times and the quality has never dropped. Everything tastes amazing.",
  },
];

export default function Testimonials() {
  return (
    <Section id="testimonials" className="bg-white">
      <Container>
        <SectionHeader
          badge="Testimonials"
          title="What Our Customers Say"
          subtitle="Real feedback from happy customers."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{ y: -8 }}
              className="rounded-[30px] border border-neutral-200 bg-white p-8 shadow-sm transition hover:shadow-2xl"
            >
              <div className="mb-6 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-[#D4AF37] text-[#D4AF37]"
                  />
                ))}
              </div>

              <p className="leading-8 text-neutral-600">
                "{item.review}"
              </p>

              <div className="mt-8">
                <h4 className="font-semibold text-lg">{item.name}</h4>
                <p className="text-sm text-neutral-500">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}