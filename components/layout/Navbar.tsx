"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChefHat } from "lucide-react";

import { Container } from "@/components/common/Container";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

import { useScroll } from "@/hooks/useScroll";
import { cn } from "@/lib/utils";

export function Navbar() {
  const isScrolled = useScroll();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{
        y: 0,
        scale: isScrolled ? 0.98 : 1,
      }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <Container>
        <div
          className={cn(
            "mt-4 rounded-[24px] border transition-all duration-500 lg:rounded-full",
            "px-5 md:px-8",
            isScrolled
              ? "border-white/30 bg-white/85 shadow-2xl backdrop-blur-2xl"
              : "border-white/20 bg-white/65 backdrop-blur-xl"
          )}
        >
          <div className="flex h-16 items-center justify-between md:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-4 select-none"
            >
              <Image
                src="/logo/logo.jpeg"
                alt="Shimas Kitchen"
                width={48}
                height={48}
                className="h-12 w-12 object-contain"
                priority
              />

              <div>
                <h2 className="font-[family:var(--font-playfair)] text-xl font-bold text-neutral-900 md:text-2xl">
                  Shima's
                </h2>

                <p className="-mt-1 text-[10px] tracking-[5px] text-neutral-500 md:text-xs">
                  KITCHEN
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <NavLinks />

            {/* Desktop CTA */}
            <motion.a
              whileHover={{
                scale: 1.04,
                y: -2,
              }}
              whileTap={{
                scale: 0.96,
              }}
              href="https://wa.me/2347080537185"
              className="
                hidden
                items-center
                gap-2
                rounded-full
                bg-gradient-to-r
                from-[#D4AF37]
                to-[#C59B1A]
                px-6
                py-3
                font-semibold
                text-black
                shadow-lg
                shadow-yellow-400/20
                transition-all
                duration-300
                hover:shadow-xl
                hover:shadow-yellow-400/30
                lg:flex
              "
            >
              <ChefHat size={18} />
              Order Now
            </motion.a>

            {/* Mobile Menu */}
            <div className="lg:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>
      </Container>
    </motion.header>
  );
}