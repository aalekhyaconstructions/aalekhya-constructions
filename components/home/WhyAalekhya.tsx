'use client';

import { motion } from 'framer-motion';
import { WHY_AALEKHYA } from '@/lib/data';
import { SectionHeading, FadeIn } from '@/components/Section';

export default function WhyAalekhya() {
  return (
    <section className="section-pad relative bg-gradient-to-b from-ink to-charcoal/30">
      <div className="container-lux">
        <SectionHeading
          eyebrow="Why Aalekhya"
          title={<>The Aalekhya <span className="text-gradient-gold">Advantage</span></>}
          subtitle="Six pillars that define how we work — and why clients trust us with their most important investments."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_AALEKHYA.map((item, i) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.4 }}
                  className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-charcoal/60 p-7 backdrop-blur-sm transition-colors hover:border-gold/30"
                >
                  <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 translate-y-[-50%] rounded-full bg-gold/10 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/15 to-transparent text-gold transition-all duration-500 group-hover:scale-110 group-hover:gold-glow">
                      <Icon className="h-7 w-7" />
                    </span>
                    <h3 className="mt-5 font-heading text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-grey">{item.description}</p>
                  </div>
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-gold transition-all duration-500 group-hover:w-full" />
                </motion.div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
