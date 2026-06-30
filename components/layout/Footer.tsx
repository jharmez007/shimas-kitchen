"use client";

import Link from "next/link";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";

import {Container} from "@/components/common/Container";

export default function Footer() {
  return (
    <footer className="bg-[#111111] py-16 text-white">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <img
              src="/logo/logo.jpeg"
              alt="Shimas Kitchen logo"
              className="h-16 w-auto rounded-lg object-contain"
            />

            <p className="mt-4 text-neutral-400">
              Fresh. Delicious. Affordable.
            </p>
          </div>

          <div>
            <h4 className="mb-5 font-semibold">Quick Links</h4>

            <div className="space-y-3 text-neutral-400">
              <Link href="#about">About</Link>
              <br />
              <Link href="#featured">Featured Meals</Link>
              <br />
              <Link href="#contact">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="mb-5 font-semibold">Contact</h4>

            <div className="space-y-3 text-neutral-400">
              <p>+234 708 053 7185</p>
              <p>hello@shimaskitchen.com</p>
              <p>Abuja, Nigeria</p>
            </div>
          </div>

          <div>
            <h4 className="mb-5 font-semibold">Follow Us</h4>

            <div className="flex gap-4">
              <a href="#">
                <FaInstagram />
              </a>

              <a href="#">
                <FaFacebookF />
              </a>

              <a href="https://wa.me/2347080537185" >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-neutral-500">
          © {new Date().getFullYear()} Shimas Kitchen. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}