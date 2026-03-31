"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  { name: "Pomegranate Maxi Wrap Dress", price: 550, oldPrice: null, image: "/images/product-pomegranate-wrap.png" },
  { name: "Saffron Shirt Dress", price: 625, oldPrice: null, image: "/images/product-saffron-shirt.png" },
  { name: "Fig Flowing Maxi", price: 475, oldPrice: 675, image: "/images/product-fig-maxi.png" },
  { name: "Nightbloom Abaya Coat", price: 1200, oldPrice: null, image: "/images/product-nightbloom-abaya.png" },
  { name: "Cedar Longline Blazer", price: 850, oldPrice: null, image: "/images/product-cedar-blazer.png" },
  { name: "Pomegranate Modal Hijab", price: 275, oldPrice: null, image: "/images/product-pomegranate-hijab.png" },
  { name: "Dusty Rose Tencel Co-ord Set", price: 700, oldPrice: null, image: "/images/product-dusty-rose-coord.png" },
  { name: "Cedar Wide-Leg Trousers", price: 520, oldPrice: null, image: "/images/product-cedar-trousers.png" },
];

export default function NewArrivals() {
  return (
    <section
      id="new-arrivals"
      className="py-24 px-6 lg:px-8"
      style={{ background: "linear-gradient(180deg, #F5F0EB 0%, #E8DFD0 100%)" }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-3">Just Landed</p>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">New Arrivals</h2>
          <div className="w-16 h-px bg-gold mx-auto" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-oat">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                {product.oldPrice && (
                  <div className="absolute top-3 left-3 bg-burgundy text-cream text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 z-10">
                    Sale
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-400 z-10">
                  <button className="w-full bg-charcoal/90 backdrop-blur-sm text-cream text-xs tracking-[0.2em] uppercase py-3.5 hover:bg-charcoal transition-colors">
                    Add to Bag
                  </button>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-sm text-charcoal/80 mb-1.5 leading-snug">{product.name}</h3>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm font-medium text-charcoal">AED {product.price}</span>
                  {product.oldPrice && (
                    <span className="text-xs text-stone line-through">AED {product.oldPrice}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-14"
        >
          <a
            href="#"
            className="inline-block px-10 py-4 border border-charcoal text-charcoal text-xs tracking-[0.2em] uppercase hover:bg-charcoal hover:text-cream transition-all duration-500"
          >
            View All
          </a>
        </motion.div>
      </div>
    </section>
  );
}
