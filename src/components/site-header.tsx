"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Who we help", href: "#who-we-help" },
];

function Brand() {
  return (
    <a href="#top" className="inline-flex items-center no-underline" aria-label="CareOps home">
      <img src="/images/careops-logo.png" alt="" width="1334" height="294" className="brand-logo" decoding="async" />
    </a>
  );
}

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#CDEFFF]/90 bg-[#F3FBFF]/90 backdrop-blur-md">
      <div className="container-wide flex h-19 items-center justify-between">
        <Brand />
        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-[12px] font-semibold text-[#405861] no-underline transition-colors hover:text-[#0E6284]">
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="hidden items-center gap-2 rounded-sm bg-[#14384a] px-5 py-3 text-[11px] font-bold tracking-wide text-[#fffef8] no-underline transition hover:bg-[#0c2d40] md:inline-flex">
          Book a discovery call <ArrowUpRight size={14} />
        </a>
        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-md border border-[#CDEFFF] text-[#1b3a49] md:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
          data-testid="button-mobile-menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {menuOpen && (
        <nav aria-label="Mobile navigation" className="mobile-menu border-t border-[#CDEFFF] bg-[#F3FBFF] px-4.5 py-4 md:hidden">
          <div className="mx-auto flex max-w-180 flex-col gap-1">
            {navLinks.map((link) => (
              <a key={link.href} onClick={closeMenu} href={link.href} className="rounded px-3 py-3 text-sm font-semibold text-[#405861] no-underline hover:bg-[#CDEFFF]">
                {link.label}
              </a>
            ))}
            <a onClick={closeMenu} href="#contact" className="mt-2 flex items-center justify-center gap-2 rounded-sm bg-[#14384a] px-5 py-3 text-sm font-bold text-white no-underline">
              Book a discovery call <ArrowUpRight size={15} />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
