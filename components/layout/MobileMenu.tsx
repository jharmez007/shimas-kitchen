"use client";

import { Menu } from "lucide-react";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

import { NAV_LINKS } from "@/constants/navigation";
import { Button } from "@/components/ui/button";
import { useNavigation } from "@/hooks/useNavigation";

export default function MobileMenu() {
  const { navigateToSection } = useNavigation();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size="icon"
          variant="ghost"
          className="lg:hidden"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-[320px]">
        <SheetHeader>
          <SheetTitle className="font-[family:var(--font-playfair)] text-2xl">
            Shimas Kitchen
          </SheetTitle>
        </SheetHeader>

        <div className="mt-10 flex flex-col gap-2">
          {NAV_LINKS.map((item) => (
            <SheetClose asChild key={item.href}>
              <button
                onClick={() => navigateToSection(item.href)}
                className="rounded-xl px-4 py-3 text-left text-lg transition hover:bg-neutral-100"
              >
                {item.label}
              </button>
            </SheetClose>
          ))}
        </div>

        <div className="mt-10">
          <SheetClose asChild>
            <Button asChild className="w-full rounded-full">
              <Link
                href="https://wa.me/2347080537185"
                target="_blank"
                rel="noopener noreferrer"
              >
                Order on WhatsApp
              </Link>
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}