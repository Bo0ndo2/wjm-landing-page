"use client";
import { useEffect, useState } from "react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Catalog", href: "#catalog" },
  { label: "SLAs", href: "#slas" },
  { label: "Tech Stack", href: "#stack" },
  { label: "Process", href: "#process" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0b0614]/85 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <span className="relative">
            <span className="absolute -inset-3 rounded-full bg-white/10 blur-xl opacity-60" />
            <img
              src="/logo%20with%20word.png"
              alt="WJM logo"
              className="relative h-10 w-auto drop-shadow-[0_8px_18px_rgba(0,0,0,0.35)]"
              loading="eager"
            />
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-white transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center justify-center rounded-xl bg-white text-[#2272a3] px-5 py-2 text-sm font-semibold shadow-lg"
        >
          Request Intake
        </a>

        <button className="md:hidden text-white/70" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#120a21] border-t border-white/10 px-5 py-4 flex flex-col gap-4 text-sm text-white/70">
          {links.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setOpen(false)} className="hover:text-white">
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="bg-white text-[#2272a3] px-4 py-2 rounded-lg text-center font-semibold"
          >
            Request Intake
          </a>
        </div>
      )}
    </nav>
  );
}
