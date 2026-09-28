'use client';

import { motion } from 'framer-motion';
import { Palmtree, Waves, UtensilsCrossed, Trees, ArrowRight } from 'lucide-react';
import { FadeIn, CTAButton } from '@/components/Section';

const HIGHLIGHTS = [
  { icon: Palmtree, label: 'Resort Architecture' },
  { icon: Waves, label: 'Pool & Water Features' },
  { icon: UtensilsCrossed, label: 'Dining & Cafeterias' },
  { icon: Trees, label: 'Landscape Integration' },
];

export default function ResortShowcase() {
  return (
    <section className="section-pad relative overflow-hidden bg-gradient-to-b from-ink via-charcoal/20 to-ink">
      <div className="container-lux">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <FadeIn>
            <div className="relative">
              <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-gold/20">
                <img
                  src="https://images.pexels.com/photos/28118422/pexels-photo-28118422.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400"
                  alt="Aerial view of luxury tropical resort with pool at sunset"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-4 hidden overflow-hidden rounded-2xl border border-gold/30 bg-charcoal p-4 shadow-xl md:block">
                <img
                  src="https://images.pexels.com/photos/19051279/pexels-photo-19051279.jpeg?auto=compress&cs=tinysrgb&h=300&w=400"
                  alt="Elegant curved poolside"
                  className="h-24 w-36 rounded-lg object-cover"
                />
              </div>
              <div className="absolute -left-4 -top-4 hidden rounded-2xl border border-gold/30 bg-charcoal/80 px-4 py-3 backdrop-blur-md md:block">
                <p className="font-heading text-2xl font-bold text-gradient-gold">All-In-One</p>
                <p className="text-xs text-grey">Resort Development</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div>
              <span className="font-body text-xs uppercase tracking-[0.35em] text-gold">Resorts &amp; Tourism</span>
              <h2 className="mt-4 font-heading text-3xl font-semibold text-white md:text-4xl lg:text-5xl">
                Complete Resort <span className="text-gradient-gold">Destinations</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-grey">
                From concept to handover, we design and build all-in-one resort properties that blend architecture, landscaping, pools, dining and guest experiences into a single immersive destination.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {HIGHLIGHTS.map((h) => {
                  const Icon = h.icon;
                  return (
                    <div key={h.label} className="flex items-center gap-3 rounded-xl border border-white/10 bg-charcoal/60 p-4 transition-colors hover:border-gold/30">
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-gold">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="text-sm font-medium text-white">{h.label}</span>
                    </div>
                  );
                })}
              </div>
              <div className="mt-8">
                <CTAButton href="/services" className="gap-2">
                  Explore Resort Services <ArrowRight className="h-4 w-4" />
                </CTAButton>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
