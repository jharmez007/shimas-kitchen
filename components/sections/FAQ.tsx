"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

import {Container} from "@/components/common/Container";
import {Section} from "@/components/common/Section";
import {SectionHeader} from "@/components/common/SectionHeader";

const faqs = [
  {
    question: "How do I place an order?",
    answer:
      "Simply browse our menu, choose your meal and click the Order on WhatsApp button.",
  },
  {
    question: "Do you offer delivery?",
    answer:
      "Yes, we deliver within our service locations. Delivery charges may apply depending on your location.",
  },
  {
    question: "Can I customize my order?",
    answer:
      "Absolutely. You can specify your preferences before sending your WhatsApp order.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "Payments are confirmed after you contact us on WhatsApp.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  return (
    <Section id="faq" className="bg-[#FFFDF8]">
      <Container>
        <SectionHeader
          badge="FAQ"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know before placing your order."
        />

        <div className="mx-auto mt-16 max-w-4xl space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="overflow-hidden rounded-3xl border border-neutral-200 bg-white"
            >
              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold">
                  {faq.question}
                </span>

                <motion.div
                  animate={{
                    rotate: active === index ? 180 : 0,
                  }}
                >
                  <ChevronDown />
                </motion.div>
              </button>

              <AnimatePresence>
                {active === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                  >
                    <p className="px-6 pb-6 leading-8 text-neutral-600">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}