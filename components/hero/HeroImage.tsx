"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function HeroImage() {
  return (
    <div className="relative mx-auto h-[580px] w-full max-w-[560px]">

      {/* Outer ambient glow */}
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(212,175,55,0.18) 0%, rgba(212,175,55,0.04) 60%, transparent 80%)",
        }}
      />

      {/* Slowly rotating dashed ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ border: "1.5px dashed rgba(212,175,55,0.28)" }}
      >
        {/* Dot on the ring */}
        <span className="absolute -top-[3.5px] left-1/2 h-[7px] w-[7px] -translate-x-1/2 rounded-full bg-[#D4AF37] opacity-70" />
      </motion.div>

      {/* Main Dish */}
      <FloatingFood
        src="/foods/hero-main.png"
        className="absolute bottom-0 left-1/2 z-30 w-[320px] -translate-x-1/2"
        delay={0}
        floatDistance={12}
      />

      {/* Pizza */}
      <FloatingFood
        src="/foods/pizza.png"
        className="absolute right-1 top-7 z-20 w-[190px] rotate-6"
        delay={0.4}
        floatDistance={10}
      />

      {/* Cake */}
      <FloatingFood
        src="/foods/cake.png"
        className="absolute left-2.5 top-1 z-10 w-40 -rotate-12"
        delay={0.8}
        floatDistance={8}
      />

      {/* Small Chops */}
      <FloatingFood
        src="/foods/chops.png"
        className="absolute bottom-[120px] left-0 z-20 w-[165px]"
        delay={1.2}
        floatDistance={9}
      />

      {/* Meat Pie */}
      <FloatingFood
        src="/foods/pie.png"
        className="absolute bottom-7 right-3 z-10 w-[148px]"
        delay={1.6}
        floatDistance={7}
      />

      {/* Badge — Rating */}
      <FloatingBadge
        className="absolute bottom-[160px] right-0 z-40"
        delay={0.9}
        icon="⭐"
        iconBg="rgba(212,175,55,0.18)"
        label="4.9 rating"
        sub="2.4k reviews"
      />

      {/* Badge — Order status */}
      <FloatingBadge
        className="absolute left-0 top-[120px] z-40"
        delay={1.3}
        icon="🛵"
        iconBg="rgba(34,197,94,0.15)"
        label="Order placed"
        sub="Est. 22 mins"
      />

      {/* Badge — Trending */}
      <FloatingBadge
        className="absolute right-2 top-[200px] z-40"
        delay={1.7}
        icon="🔥"
        iconBg="rgba(239,68,68,0.12)"
        label="Trending today"
      />
    </div>
  );
}

/* ─── FloatingFood ─────────────────────────────────────────────── */

interface FloatingFoodProps {
  src: string;
  className: string;
  delay?: number;
  floatDistance?: number;
}

function FloatingFood({
  src,
  className,
  delay = 0,
  floatDistance = 10,
}: FloatingFoodProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.78, y: 16 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -floatDistance, 0],
      }}
      transition={{
        opacity: { duration: 0.5, delay },
        scale: { duration: 0.5, delay },
        y: {
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        },
      }}
      className={className}
    >
      <Image
        src={src}
        alt=""
        width={500}
        height={500}
        className="drop-shadow-[0_28px_48px_rgba(0,0,0,.22)]"
        priority
      />
    </motion.div>
  );
}

/* ─── FloatingBadge ────────────────────────────────────────────── */

interface BadgeProps {
  className: string;
  delay?: number;
  icon: string;
  iconBg: string;
  label: string;
  sub?: string;
}

function FloatingBadge({ className, delay = 0, icon, iconBg, label, sub }: BadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.88 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.45, delay, ease: "easeOut" }}
      className={`${className} flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-white/90 px-3 py-1.5 shadow-md backdrop-blur-sm`}
    >
      <span
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm"
        style={{ background: iconBg }}
      >
        {icon}
      </span>
      <div className="flex flex-col leading-tight">
        <span className="text-[13px] font-medium text-gray-900">{label}</span>
        {sub && <span className="text-[11px] text-gray-400">{sub}</span>}
      </div>
    </motion.div>
  );
}