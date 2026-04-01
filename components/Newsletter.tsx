"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden bg-charcoal">
          {/* Grain */}
          <div className="absolute inset-0 grain pointer-events-none opacity-40" />

          <div className="relative px-8 md:px-16 lg:px-24 py-20 md:py-28 lg:py-36">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-2xl mx-auto text-center"
            >
              <p className="text-sand/40 tracking-[0.3em] uppercase text-[10px] font-sans font-medium mb-8">
                Stay Connected
              </p>

              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-cream/95 leading-[1.1] mb-6">
                Join the MAAH Family
              </h2>

              <p className="text-sm text-sand/50 font-sans font-light mb-12 leading-relaxed max-w-md mx-auto">
                Be the first to discover new collections, exclusive offers,
                and stories from our world.
              </p>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-6"
                  >
                    <p className="text-cream font-serif text-xl">Welcome to the family.</p>
                    <p className="text-sand/40 text-xs mt-2">We&apos;ll be in touch soon.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="max-w-md mx-auto"
                  >
                    <div className="flex gap-0 border border-sand/20 transition-colors focus-within:border-sand/40">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email address"
                        required
                        className="flex-1 bg-transparent px-5 py-4 text-sm text-cream placeholder:text-sand/25 font-sans tracking-wider focus:outline-none"
                      />
                      <button
                        type="submit"
                        className="px-6 py-4 bg-cream text-charcoal font-sans font-medium tracking-[0.15em] uppercase text-xs transition-all duration-500 hover:bg-white flex items-center gap-2 whitespace-nowrap"
                      >
                        Subscribe
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>

              <p className="text-sand/20 text-[10px] mt-6 tracking-wider">
                No spam. Unsubscribe anytime.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
