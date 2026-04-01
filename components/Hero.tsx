"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 200]);
  const imageScale = useTransform(scrollY, [0, 800], [1, 1.12]);
  const overlayOpacity = useTransform(scrollY, [0, 600], [0.25, 0.55]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative h-[100svh] overflow-hidden"
    >
      {/* Parallax + zoom image */}
      <motion.div
        style={{ y, scale: imageScale }}
        className="absolute inset-0 will-change-transform"
      >
        <Image
          src="/images/hero-campaign.png"
          alt="MAAH by Nilmah — Spring 2026 Collection"
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* Lighter gradient — bottom-up, lets image breathe */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"
      />

      {/* Grain */}
      <div className="absolute inset-0 grain pointer-events-none" />

      {/* Content — bottom-left editorial */}
      <div className="absolute inset-0 flex flex-col justify-end">
        <div className="px-6 md:px-12 lg:px-20 pb-20 md:pb-28 lg:pb-36 max-w-4xl">
          {/* Season label */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-cream/40 tracking-[0.3em] uppercase text-[10px] font-sans font-medium mb-6 md:mb-8"
          >
            Spring / Summer 2026
          </motion.p>

          {/* Heading — cinematic line-by-line reveal */}
          <div className="overflow-hidden mb-2 md:mb-3">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2.5rem,7.5vw,6rem)] font-serif font-light text-cream leading-[0.95] tracking-tight"
            >
              Where Modesty
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8 md:mb-10">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2.5rem,7.5vw,6rem)] font-serif font-light text-cream leading-[0.95] tracking-tight"
            >
              Meets Modernity
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[15px] md:text-lg text-cream/60 max-w-md font-sans font-light leading-relaxed mb-10 md:mb-14"
          >
            Curated pieces for the woman who moves with intention.
            Effortlessly elegant, endlessly wearable.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#new-arrivals"
              className="px-10 py-4 bg-cream text-charcoal font-sans font-medium tracking-[0.18em] uppercase text-xs transition-all duration-500 hover:bg-white hover:shadow-[0_8px_40px_rgba(255,255,255,0.12)] hover:-translate-y-px"
            >
              Shop Collection
            </a>
            <a
              href="#collections"
              className="px-10 py-4 border border-cream/30 text-cream font-sans font-medium tracking-[0.18em] uppercase text-xs transition-all duration-500 hover:bg-cream/10 hover:border-cream/60 backdrop-blur-sm"
            >
              Explore Lookbook
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator — minimal animated line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 right-8 md:right-12 flex flex-col items-center gap-3"
      >
        <span className="text-cream/25 text-[9px] tracking-[0.3em] uppercase font-sans [writing-mode:vertical-lr]">
          Scroll
        </span>
        <div className="w-px h-12 bg-cream/15 relative overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-full h-1/2 bg-cream/40"
          />
        </div>
      </motion.div>
    </section>
  );
}
