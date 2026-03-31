"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function BrandStory() {
  return (
    <section id="about" className="py-24 px-6 lg:px-8 bg-oat">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">Our Heritage</p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-8 leading-tight">
              Our Story
            </h2>
            <div className="space-y-6 text-charcoal/70 leading-relaxed">
              <p>
                Born from the belief that modesty and modernity are not opposites
                but partners. MAAH by Nilmah creates pieces for the woman who
                refuses to choose between elegance and expression.
              </p>
              <p>Every stitch carries intention. Every silhouette tells a story.</p>
              <p>
                From the warmth of Dubai to women across the world, our
                collections are designed with purpose — to honour tradition while
                embracing the beauty of contemporary design. We source premium
                fabrics, craft considered silhouettes, and obsess over the
                details that make you feel extraordinary.
              </p>
            </div>
            <div className="mt-10 flex items-center gap-6">
              <div className="w-12 h-px bg-gold" />
              <span className="font-serif text-lg text-charcoal/60 italic">Nilmah, Founder</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] lg:aspect-[3/4] relative overflow-hidden">
              <Image
                src="/images/brand-story.png"
                alt="MAAH by Nilmah - Our Story"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/20 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
