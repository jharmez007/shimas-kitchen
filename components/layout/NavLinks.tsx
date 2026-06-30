"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { NAV_LINKS } from "@/constants/navigation";

export default function NavLinks() {
  return (
    <nav className="hidden items-center gap-10 xl:gap-12 lg:flex">
      {NAV_LINKS.map((link) => (
        <motion.div
          key={link.href}
          whileHover={{ y: -2 }}
        >
          <Link
            href={link.href}
            className="group relative font-semibold text-neutral-800 transition-colors duration-300 hover:text-[#D4AF37]"
          >
            {link.label}

            <span
              className="
                absolute
                -bottom-2
                left-0
                h-[2px]
                w-0
                rounded-full
                bg-[#D4AF37]
                transition-all
                duration-300
                group-hover:w-full
              "
            />
          </Link>
        </motion.div>
      ))}
    </nav>
  );
}