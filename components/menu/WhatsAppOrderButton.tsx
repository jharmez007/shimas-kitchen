"use client";

import { FaWhatsapp } from "react-icons/fa";

import { motion } from "framer-motion";

import { MenuItem, MenuOption } from "@/types/menu";

interface WhatsAppOrderButtonProps {
  food: MenuItem;
  option: MenuOption;
  quantity: number;
  note?: string;
  total: number;
}

const WHATSAPP_NUMBER = "2347080537185"; // Replace with Shimas Kitchen number

export default function WhatsAppOrderButton({
  food,
  option,
  quantity,
  note,
  total,
}: WhatsAppOrderButtonProps) {
  const handleOrder = () => {
    const message = `🍽️ *NEW ORDER - SHIMAS KITCHEN*

Hello 👋,

I'd like to place an order.

━━━━━━━━━━━━━━

🍕 *Meal*
${food.name}

📦 *Option*
${option.label}

${
  option.items?.length
    ? `*Package contents*\n${option.items.map((item) => `• ${item}`).join("\n")}\n`
    : ""
}🔢 *Quantity*
${quantity}

💰 *Unit Price*
₦${option.price.toLocaleString()}

💵 *Total*
₦${total.toLocaleString()}

${
  note?.trim()
    ? `📝 *Special Instructions*
${note}

`
    : ""
}━━━━━━━━━━━━━━

Thank you 😊`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <motion.button
      whileHover={{
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.98,
      }}
      onClick={handleOrder}
      className="
        flex
        w-full
        items-center
        justify-center
        gap-3
        rounded-2xl
        bg-[#25D366]
        px-6
        py-5
        text-lg
        font-semibold
        text-white
        shadow-xl
        transition-all
        hover:shadow-2xl
      "
    >
      <FaWhatsapp size={24} />

      Order on WhatsApp
    </motion.button>
  );
}
