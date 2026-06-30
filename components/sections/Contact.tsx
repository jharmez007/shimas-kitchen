"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";

import {Container} from "@/components/common/Container";
import {Section} from "@/components/common/Section";
import {SectionHeader} from "@/components/common/SectionHeader";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+234 708 053 7185",
  },
  {
    icon: Mail,
    title: "Email",
    value: "hello@shimaskitchen.com",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Abuja, Nigeria",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon - Sat • 8AM - 8PM",
  },
];

export default function Contact() {
  return (
    <Section
      id="contact"
      className="bg-white"
    >
      <Container>
        <SectionHeader
          badge="Contact"
          title="Let's Prepare Your Next Meal"
          subtitle="Reach out anytime. We're always ready to serve you."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex items-center gap-5 rounded-3xl border border-neutral-200 p-6"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#D4AF37]/10">
                    <Icon className="text-[#D4AF37]" />
                  </div>

                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-neutral-600">{item.value}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[32px] bg-[#1F1F1F] p-10 text-white"
          >
            <h3 className="font-[family:var(--font-playfair)] text-4xl font-bold">
              Ready to Order?
            </h3>

            <p className="mt-5 leading-8 text-neutral-300">
              Click the button below and we'll continue your order instantly on
              WhatsApp.
            </p>

            <a
              href="https://wa.me/2347080537185"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#D4AF37] px-8 py-4 font-semibold text-black transition hover:scale-105"
            >
              <FaWhatsapp />
              Order on WhatsApp
            </a>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}