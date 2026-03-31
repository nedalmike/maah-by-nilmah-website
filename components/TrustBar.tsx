"use client";

import { motion } from "framer-motion";

const trustItems = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Secure Checkout",
    desc: "SSL encrypted payments",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="1" y="6" width="22" height="12" rx="2" />
        <path d="M1 10h22" />
      </svg>
    ),
    title: "Free Shipping",
    desc: "Over 500 AED",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
        <path d="M12 8v4l2 2" />
      </svg>
    ),
    title: "14-Day Returns",
    desc: "Hassle-free exchanges",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M20.38 3.46 16 2 12 3.46 8 2 3.62 3.46a2 2 0 0 0-1.34 1.89v13.3a2 2 0 0 0 1.34 1.89L8 22l4-1.46L16 22l4.38-1.46a2 2 0 0 0 1.34-1.89V5.35a2 2 0 0 0-1.34-1.89z" />
        <line x1="12" y1="22" x2="12" y2="3.46" />
      </svg>
    ),
    title: "Premium Fabrics",
    desc: "Ethically sourced materials",
  },
];

export default function TrustBar() {
  return (
    <section className="py-16 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center gap-3"
            >
              <div className="text-gold">{item.icon}</div>
              <div>
                <p className="text-cream text-sm tracking-[0.1em] font-medium mb-1">{item.title}</p>
                <p className="text-cream/40 text-xs tracking-wider">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
