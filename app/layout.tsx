import type { Metadata } from "next";
import { Manrope, Playfair_Display, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

import { Navbar } from "@/components/layout/Navbar";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shimas Kitchen",
  description: "Fresh. Delicious. Affordable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className={`${manrope.variable} ${playfair.variable} antialiased`}>
        <Navbar />

        <main>{children}</main>
      </body>
    </html>
  );
}