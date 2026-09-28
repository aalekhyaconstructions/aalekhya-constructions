'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';
import { FAQS } from '@/lib/data';
import { SectionHeading, FadeIn } from '@/components/Section';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-pad">
      <div className="container-lux">
        <SectionHeading
          eyebrow="FAQ"
          title={<>Questions, <span className="text-gradient-gold">Answered</span></>}
          subtitle="Everything you need to know before starting your project with us."
        />

        <div className="mx-auto mt-14 max-w-3xl space-y-4">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <FadeIn key={i} delay={i * 0.05}>
                <div className="overflow-hidden rounded-xl border border-white/10 bg-charcoal/60 backdrop-blur-sm transition-colors hover:border-gold/20">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading text-base font-medium text-white md:text-lg">{faq.q}</span>
                    <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all ${isOpen ? 'border-gold bg-gold text-ink' : 'border-white/20 text-gold'}`}>
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="px-6 pb-5 text-sm leading-relaxed text-grey">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
