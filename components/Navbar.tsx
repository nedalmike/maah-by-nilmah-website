"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Collections", href: "#collections" },
  { label: "New Arrivals", href: "#new-arrivals" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-charcoal/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#home" className="flex items-baseline gap-1.5 group">
              <span className="font-serif text-2xl tracking-[0.2em] text-cream">
                MAAH
              </span>
              <span
                className={`text-xs tracking-[0.15em] uppercase transition-colors duration-300 ${
                  scrolled ? "text-sand" : "text-sand/80"
                }`}
              >
                by Nilmah
              </span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-sm tracking-[0.1em] uppercase transition-all duration-300 hover:text-gold ${
                    scrolled ? "text-cream/80" : "text-cream/70"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-5">
              <button
                aria-label="Search"
                className={`transition-colors duration-300 hover:text-gold ${
                  scrolled ? "text-cream/80" : "text-cream/70"
                }`}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" />
                </svg>
              </button>

              <span
                className={`hidden sm:block text-xs tracking-wider transition-colors duration-300 ${
                  scrolled ? "text-sand" : "text-sand/70"
                }`}
              >
                AED
              </span>

              <button
                aria-label="Shopping bag"
                className={`relative transition-colors duration-300 hover:text-gold ${
                  scrolled ? "text-cream/80" : "text-cream/70"
                }`}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                <span className="absolute -top-1 -right-1.5 w-4 h-4 bg-gold text-charcoal text-[10px] font-bold rounded-full flex items-center justify-center">
                  0
                </span>
              </button>

              <button
                aria-label="Menu"
                className="md:hidden text-cream/80 hover:text-gold transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  {mobileOpen ? (
                    <path d="M18 6 6 18M6 6l12 12" />
                  ) : (
                    <>
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <line x1="3" y1="12" x2="21" y2="12" />
                      <line x1="3" y1="18" x2="21" y2="18" />
                    </>
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-40 md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed right-0 top-0 bottom-0 w-80 bg-charcoal z-50 md:hidden flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-cream/10">
                <span className="font-serif text-xl text-cream tracking-[0.2em]">MAAH</span>
                <button onClick={() => setMobileOpen(false)} className="text-cream/60 hover:text-cream">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <nav className="flex flex-col p-6 gap-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    onClick={() => setMobileOpen(false)}
                    className="text-cream/70 hover:text-gold text-lg tracking-[0.1em] uppercase py-3 border-b border-cream/5 transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
              <div className="mt-auto p-6 border-t border-cream/10">
                <p className="text-cream/40 text-xs tracking-wider">Currency: AED</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
