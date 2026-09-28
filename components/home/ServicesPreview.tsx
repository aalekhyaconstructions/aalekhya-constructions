'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES } from '@/lib/data';
import { SectionHeading, FadeIn } from '@/components/Section';

export default function ServicesPreview() {
  return (
    <section className="section-pad relative">
      <div className="container-lux">
        <SectionHeading
          eyebrow="What We Build"
          title={<>Premium Construction, <span className="text-gradient-gold">Every Category</span></>}
          subtitle="From bespoke luxury homes to commercial landmarks and immersive landscapes — we deliver excellence across every construction discipline."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.slice(0, 10).map((service, i) => {
            const Icon = service.icon;
            return (
              <FadeIn key={service.slug} delay={i * 0.06}>
                <Link href="/services" className="group block h-full">
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="card-border-gold relative h-full overflow-hidden rounded-2xl border border-white/10 bg-charcoal p-6 transition-colors hover:border-gold/30"
                  >
                    <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/5 blur-2xl transition-opacity group-hover:opacity-100 opacity-0" />
                    <div className="relative flex items-start justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/5 text-gold transition-all duration-500 group-hover:bg-gold group-hover:text-ink">
                        <Icon className="h-6 w-6" />
                      </span>
                      <ArrowUpRight className="h-5 w-5 text-grey transition-all duration-500 group-hover:text-gold group-hover:rotate-45" />
                    </div>
                    <h3 className="mt-5 font-heading text-xl font-semibold text-white">{service.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-grey">{service.blurb}</p>
                  </motion.div>
                </Link>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-7 py-3.5 text-sm font-semibold text-gold transition-all hover:bg-gold hover:text-ink"
            >
              View All Services <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
