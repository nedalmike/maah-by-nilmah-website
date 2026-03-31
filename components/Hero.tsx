"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <Image
        src="/images/hero-campaign.png"
        alt="MAAH by Nilmah campaign"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/80" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: "radial-gradient(ellipse at 30% 50%, #6B2D3E 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="font-serif text-7xl sm:text-8xl md:text-9xl text-cream tracking-[0.3em] mb-2">
            MAAH
          </h1>
          <p className="text-sand/60 text-sm sm:text-base tracking-[0.3em] uppercase mb-12">
            by Nilmah
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-xl sm:text-2xl md:text-3xl text-cream/90 italic mb-14 max-w-xl mx-auto"
        >
          Where Modesty Meets Modernity
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#new-arrivals"
            className="px-10 py-4 border border-gold text-gold text-sm tracking-[0.2em] uppercase transition-all duration-500 hover:bg-gold hover:text-charcoal backdrop-blur-sm"
          >
            Shop Collection
          </a>
          <a
            href="#about"
            className="text-cream/60 text-sm tracking-[0.15em] uppercase hover:text-cream transition-colors duration-300 flex items-center gap-2"
          >
            Our Story
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="translate-y-px">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-cream/40">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </motion.div>
    </section>
  );
}
