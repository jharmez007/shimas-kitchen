"use client";

import { motion } from "framer-motion";
import { NAV_LINKS } from "@/constants/navigation";
import { useNavigation } from "@/hooks/useNavigation";

export default function NavLinks() {
  const { navigateToSection } = useNavigation();

  return (
    <nav className="hidden items-center gap-10 xl:gap-12 lg:flex">
      {NAV_LINKS.map((link) => (
        <motion.div
          key={link.href}
          whileHover={{ y: -2 }}
        >
          <button
            onClick={() => navigateToSection(link.href)}
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
          </button>
        </motion.div>
      ))}
    </nav>
  );
}