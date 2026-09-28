'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Calendar, Compass } from 'lucide-react';
import { CTAButton } from '@/components/Section';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={ref} className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/24805054/pexels-photo-24805054.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920"
          alt="Modern luxury villa at dusk with illuminated swimming pool"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/60 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-ink/40" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="container-lux relative z-10 px-4 pt-28 text-center md:px-8"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="inline-block font-body text-xs uppercase tracking-[0.4em] text-gold md:text-sm"
        >
          Aalekhya Constructions
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-6 max-w-4xl font-heading text-4xl font-semibold leading-[1.1] text-white text-shadow-lux md:text-6xl lg:text-7xl"
        >
          Building Landmarks.
          <br />
          <span className="text-gradient-gold">Creating Legacies.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.7, duration: 0.8 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg"
        >
          Premium construction, luxury homes, resorts, commercial developments, landscaping and infrastructure solutions across Assam.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.9, duration: 0.8 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <CTAButton href="/consultation" className="gap-2">
            <Calendar className="h-4 w-4" /> Get Free Consultation
          </CTAButton>
          <CTAButton href="/projects" variant="outline" className="gap-2">
            Explore Projects <ArrowRight className="h-4 w-4" />
          </CTAButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.2, duration: 1 }}
          className="mt-16 flex items-center justify-center gap-2 text-white/50"
        >
          <Compass className="h-4 w-4 animate-spin-slow text-gold" />
          <span className="text-xs tracking-[0.3em] uppercase">Scroll to explore</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
