'use client';

import { STATS } from '@/lib/data';
import { SectionHeading, FadeIn } from '@/components/Section';
import AnimatedCounter from '@/components/AnimatedCounter';

export default function Stats() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink via-charcoal/20 to-ink" />
      <div className="container-lux relative">
        <SectionHeading
          eyebrow="By the Numbers"
          title={<>A Growing <span className="text-gradient-gold">Portfolio</span></>}
          subtitle="Truthful figures based on the projects we have delivered and are currently executing."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.1}>
              <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-charcoal/60 p-8 text-center backdrop-blur-sm transition-all hover:border-gold/30">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="font-heading text-4xl font-bold text-white md:text-5xl">
                  <AnimatedCounter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.value % 1 !== 0 ? 1 : 0}
                  />
                </div>
                <p className="mt-3 font-heading text-base font-medium text-gold">{stat.label}</p>
                <p className="mt-2 text-xs text-grey">{stat.sub}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
