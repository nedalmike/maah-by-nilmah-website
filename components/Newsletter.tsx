"use client";

import { useState } from "react";
import { motion } from "framer-motion";

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
    <section
      className="py-24 px-6 lg:px-8"
      style={{ background: "linear-gradient(135deg, #E8DFD0 0%, #D4C5A9 50%, #E8DFD0 100%)" }}
    >
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-4">
            Join the MAAH Family
          </h2>
          <p className="text-charcoal/60 mb-10 max-w-md mx-auto leading-relaxed">
            Be the first to discover new arrivals, exclusive offers, and the
            stories behind our collections.
          </p>

          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="py-6">
              <p className="text-charcoal font-serif text-xl">Welcome to the family.</p>
              <p className="text-charcoal/50 text-sm mt-2">We&apos;ll be in touch soon.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="flex-1 bg-cream/80 border border-stone/20 px-5 py-4 text-sm text-charcoal placeholder:text-stone/60 tracking-wider focus:outline-none focus:border-gold transition-colors"
              />
              <button
                type="submit"
                className="bg-charcoal text-cream text-xs tracking-[0.2em] uppercase px-8 py-4 hover:bg-gold hover:text-charcoal transition-all duration-500"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="text-charcoal/30 text-xs mt-6 tracking-wider">No spam. Unsubscribe anytime.</p>
        </motion.div>
      </div>
    </section>
  );
}
