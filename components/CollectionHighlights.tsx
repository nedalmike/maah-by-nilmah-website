"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const collections = [
  {
    name: "Abayas",
    image: "/images/collection-abayas.png",
    tagline: "Timeless silhouettes, reimagined",
    span: "col-span-1 md:col-span-2 md:row-span-2",
    aspect: "aspect-[3/4]",
  },
  {
    name: "Dresses",
    image: "/images/collection-dresses.png",
    tagline: "Elevated for every moment",
    span: "col-span-1",
    aspect: "aspect-[3/4]",
  },
  {
    name: "Hijabs",
    image: "/images/collection-hijabs.png",
    tagline: "Statement pieces, subtle allure",
    span: "col-span-1",
    aspect: "aspect-[3/4]",
  },
  {
    name: "Modest Sets",
    image: "/images/collection-sets.png",
    tagline: "Curated sets with effortless polish",
    span: "col-span-2",
    aspect: "aspect-[4/3] md:aspect-[16/9]",
  },
];

export default function CollectionHighlights() {
  return (
    <section id="collections" className="py-20 md:py-28 lg:py-36 px-6 lg:px-8 bg-cream">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-16"
        >
          <p className="label-editorial mb-4">Collections</p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-charcoal">
            Shop by Category
          </h2>
        </motion.div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {collections.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={item.span}
            >
              <a href="#" className="group block relative overflow-hidden h-full">
                <div className={`relative ${item.aspect} h-full`}>
                  <div className="absolute inset-0 transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </div>

                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-charcoal/10 to-transparent transition-all duration-500 group-hover:from-charcoal/60" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-7">
                    <div className="flex items-end justify-between">
                      <div>
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-serif font-light text-cream leading-tight mb-1">
                          {item.name}
                        </h3>
                        <p className="text-[10px] md:text-xs font-sans text-cream/50 tracking-wider hidden sm:block">
                          {item.tagline}
                        </p>
                      </div>

                      {/* Arrow reveal */}
                      <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-cream/10 backdrop-blur-sm border border-cream/20 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-cream">
                          <path d="M7 17L17 7M17 7H7M17 7v10" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
