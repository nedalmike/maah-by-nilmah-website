"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function BrandStory() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={sectionRef} id="about" className="bg-cream overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-[80vh]">
        {/* Image with scroll parallax */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[3/4] lg:aspect-auto overflow-hidden"
        >
          <motion.div
            style={{ y: imageY }}
            className="absolute inset-[-10%] will-change-transform"
          >
            <Image
              src="/images/brand-story.png"
              alt="MAAH by Nilmah — Our Story"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
          <div className="absolute inset-0 grain pointer-events-none opacity-25" />
        </motion.div>

        {/* Text content */}
        <div className="bg-oat/50 flex flex-col justify-center px-8 md:px-14 lg:px-20 py-16 md:py-24 lg:py-32">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="label-editorial mb-6"
          >
            Our Heritage
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-charcoal leading-[1.1] mb-8"
          >
            Our Story
          </motion.h2>

          <motion.span
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="accent-line origin-left mb-8"
          />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-5 text-charcoal/70 leading-relaxed text-[15px]"
          >
            <p>
              Born from the belief that modesty and modernity are not opposites
              but partners. MAAH by Nilmah creates pieces for the woman who
              refuses to choose between elegance and expression.
            </p>
            <p>Every stitch carries intention. Every silhouette tells a story.</p>
            <p>
              From the warmth of Dubai to women across the world, our
              collections are designed with purpose — to honour tradition while
              embracing the beauty of contemporary design.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex items-center gap-5"
          >
            <span className="accent-line" />
            <span className="font-serif text-lg text-charcoal/50 italic">Nilmah, Founder</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
