"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const posts = [
  { image: "/images/styled-1.png", label: "Saffron Hijab" },
  { image: "/images/styled-2.png", label: "Burgundy Edit" },
  { image: "/images/styled-3.png", label: "Cedar Tones" },
  { image: "/images/styled-4.png", label: "Olive Layers" },
  { image: "/images/styled-5.png", label: "Nightbloom" },
  { image: "/images/styled-6.png", label: "Oat & Sand" },
];

export default function StyledByYou() {
  return (
    <section className="py-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">Community</p>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">Styled By You</h2>
          <div className="w-16 h-px bg-gold mx-auto" />
        </motion.div>
      </div>

      <div className="flex gap-4 px-6 overflow-x-auto pb-4 snap-x snap-mandatory">
        {posts.map((post, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex-shrink-0 snap-center"
          >
            <div className="w-56 h-56 md:w-72 md:h-72 relative group cursor-pointer overflow-hidden">
              <Image
                src={post.image}
                alt={post.label}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                sizes="288px"
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-colors duration-300 flex flex-col items-center justify-center gap-2">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-cream opacity-0 group-hover:opacity-90 transition-opacity duration-300">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                </svg>
                <p className="text-cream text-xs tracking-[0.2em] uppercase opacity-0 group-hover:opacity-80 transition-opacity duration-300">
                  {post.label}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-10">
        <a href="#" className="text-charcoal/60 text-sm tracking-[0.15em] hover:text-gold transition-colors duration-300">
          Follow <span className="font-medium text-charcoal">@maahbynilmah</span>
        </a>
      </div>
    </section>
  );
}
