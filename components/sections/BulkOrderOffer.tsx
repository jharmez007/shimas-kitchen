import {
  ArrowUpRight,
  BadgePercent,
  Building2,
  CalendarHeart,
  Check,
  MessageCircle,
  Users,
} from "lucide-react";

import { Container } from "@/components/common/Container";
import { Section } from "@/components/common/Section";

const occasions = [
  { label: "Office lunches", icon: Building2 },
  { label: "Parties & events", icon: CalendarHeart },
  { label: "Group orders", icon: Users },
];

const benefits = [
  "Better value on larger quantities",
  "Menu tailored to your budget",
  "Freshly prepared for your date",
];

const bulkOrderMessage = encodeURIComponent(
  "Hello Shima's Kitchen! I'd like a quote for a bulk order. Please share your available packages and pricing.",
);

export default function BulkOrderOffer() {
  return (
    <Section className="bg-white py-8 md:py-12 lg:py-14">
      <Container>
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-neutral-950 px-6 py-8 text-white shadow-[0_30px_80px_-35px_rgba(0,0,0,0.55)] sm:px-10 sm:py-10 lg:px-14 lg:py-12">
          <div
            aria-hidden="true"
            className="absolute -right-24 -top-32 -z-10 h-80 w-80 rounded-full bg-[#D4AF37]/25 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-40 left-1/3 -z-10 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl"
          />

          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-2 text-sm font-semibold text-[#F3D978]">
                <BadgePercent size={17} aria-hidden="true" />
                Bulk order savings
              </div>

              <h2 className="mt-6 max-w-2xl font-[family:var(--font-playfair)] text-4xl font-bold leading-tight sm:text-5xl">
                Feeding a crowd?
                <span className="text-[#D4AF37]"> Let&apos;s make it rewarding.</span>
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-neutral-300 sm:text-lg">
                The more you order, the better the value. Tell us your guest
                count and budget, and we&apos;ll create a fresh, delicious
                package that fits.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                {occasions.map(({ label, icon: Icon }) => (
                  <div
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-neutral-200"
                  >
                    <Icon size={16} className="text-[#D4AF37]" aria-hidden="true" />
                    {label}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white p-6 text-neutral-900 shadow-2xl sm:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#9A7410]">
                Made around your needs
              </p>

              <ul className="mt-5 space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#D4AF37]/15">
                      <Check
                        size={15}
                        strokeWidth={3}
                        className="text-[#9A7410]"
                        aria-hidden="true"
                      />
                    </span>
                    <span className="font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/2347080537185?text=${bulkOrderMessage}`}
                target="_blank"
                rel="noreferrer"
                className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-[#D4AF37] px-6 py-4 font-bold text-black transition hover:bg-[#C59B1A] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4AF37]"
              >
                <MessageCircle size={19} aria-hidden="true" />
                Get a bulk order quote
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>

              <p className="mt-3 text-center text-xs leading-5 text-neutral-500">
                No commitment — we&apos;ll confirm pricing and availability on
                WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
