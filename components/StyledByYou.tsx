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
    <section className="py-20 md:py-28 lg:py-36 px-6 lg:px-8 bg-cream">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="label-editorial mb-4">Community</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-charcoal mb-5">
            Styled By You
          </h2>
          <p className="text-sm text-stone font-sans max-w-md mx-auto">
            Share how you wear MAAH — tag @maahbynilmah for a chance to be featured.
          </p>
        </motion.div>

        {/* Grid — 3x2 */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-12">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
            >
              <a
                href="https://instagram.com/maahbynilmah"
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative aspect-square overflow-hidden"
              >
                <div className="absolute inset-0 transition-transform duration-700 ease-out-expo group-hover:scale-[1.06]">
                  <Image
                    src={post.image}
                    alt={post.label}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/35 transition-all duration-500" />

                {/* Icon + label */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-cream/15 backdrop-blur-sm border border-cream/25">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-cream">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="5" />
                      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                    </svg>
                  </div>
                  <p className="text-cream text-[10px] tracking-[0.2em] uppercase">{post.label}</p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://instagram.com/maahbynilmah"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-3"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
            </svg>
            Follow @maahbynilmah
          </a>
        </div>
      </div>
    </section>
  );
}
