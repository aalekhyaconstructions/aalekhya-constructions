'use client';

import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '@/lib/data';
import { SectionHeading, FadeIn } from '@/components/Section';

export default function Process() {
  return (
    <section className="section-pad relative bg-gradient-to-b from-charcoal/30 to-ink">
      <div className="container-lux">
        <SectionHeading
          eyebrow="Our Process"
          title={<>From Vision to <span className="text-gradient-gold">Handover</span></>}
          subtitle="A structured seven-step process that keeps every project transparent, accountable and on schedule."
        />

        <div className="relative mt-16">
          <div className="pointer-events-none absolute left-4 top-0 h-full w-px bg-gradient-to-b from-gold/40 via-gold/20 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10">
            {PROCESS_STEPS.map((step, i) => (
              <FadeIn key={step.step} delay={i * 0.05}>
                <div className={`relative flex items-start gap-6 md:w-1/2 ${i % 2 === 0 ? 'md:ml-auto md:flex-row md:pl-12' : 'md:flex-row-reverse md:pr-12 md:text-right'}`}>
                  <div className="absolute left-0 top-1 z-10 flex h-8 w-8 -translate-x-[7px] items-center justify-center rounded-full border-2 border-gold bg-ink md:left-auto md:right-auto md:-translate-x-1/2" style={i % 2 === 0 ? { right: '-6px', left: 'auto', transform: 'translateX(50%)' } : { left: '-6px', transform: 'translateX(-50%)' }}>
                    <span className="h-2 w-2 rounded-full bg-gold" />
                  </div>
                  <div className="ml-12 flex-1 rounded-2xl border border-white/10 bg-charcoal/60 p-6 backdrop-blur-sm transition-all hover:border-gold/30 md:ml-0">
                    <span className="font-heading text-3xl font-bold text-gradient-gold">{step.step}</span>
                    <h3 className="mt-2 font-heading text-xl font-semibold text-white">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-grey">{step.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
