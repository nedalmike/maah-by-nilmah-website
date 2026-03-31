"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const collections = [
  { name: "Abayas", image: "/images/collection-abayas.png" },
  { name: "Dresses", image: "/images/collection-dresses.png" },
  { name: "Hijabs", image: "/images/collection-hijabs.png" },
  { name: "Modest Sets", image: "/images/collection-sets.png" },
];

export default function CollectionHighlights() {
  return (
    <section id="collections" className="py-24 px-6 lg:px-8 bg-cream">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">
            The Collection
          </h2>
          <div className="w-16 h-px bg-gold mx-auto" />
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {collections.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <a href="#" className="group block relative aspect-[3/4] overflow-hidden cursor-pointer">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-charcoal/10 group-hover:from-charcoal/80 transition-all duration-500" />
                <div className="absolute inset-0 flex flex-col items-center justify-end p-6 pb-10">
                  <span className="font-serif text-2xl md:text-3xl text-cream tracking-[0.15em] transition-transform duration-500 group-hover:-translate-y-2">
                    {item.name}
                  </span>
                  <span className="mt-2 text-xs tracking-[0.2em] uppercase text-cream/0 group-hover:text-cream/60 transition-all duration-500">
                    Explore
                  </span>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
