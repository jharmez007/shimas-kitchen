"use client";

import { Modal } from "@/components/ui/Modal";
import type { FoodItem } from "@/types/food";

interface FoodModalProps {
  item: FoodItem;
  open: boolean;
  onClose: () => void;
}

export function FoodModal({ item, open, onClose }: FoodModalProps) {
  return (
    <Modal title={item.name} open={open} onClose={onClose}>
      <div className="space-y-4 text-sm text-slate-700">
        <p>{item.description}</p>
        <p className="font-semibold">Category: {item.category}</p>
        <p className="font-semibold">Price: ${item.price}</p>
      </div>
    </Modal>
  );
}
