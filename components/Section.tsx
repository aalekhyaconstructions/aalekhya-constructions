'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export function FadeIn({ children, className, delay = 0, y = 30 }: Props) {
  const ref = useRef(null);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && (
        <FadeIn>
          <span className="mb-3 inline-block font-body text-xs uppercase tracking-[0.35em] text-gold">
            {eyebrow}
          </span>
        </FadeIn>
      )}
      <FadeIn delay={0.1}>
        <h2 className="font-heading text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl">
          {title}
        </h2>
      </FadeIn>
      {subtitle && (
        <FadeIn delay={0.2}>
          <p className="mt-4 text-base leading-relaxed text-grey md:text-lg">{subtitle}</p>
        </FadeIn>
      )}
      {center && (
        <FadeIn delay={0.25}>
          <div className="mx-auto mt-6 h-px w-20 bg-gradient-gold" />
        </FadeIn>
      )}
    </div>
  );
}

export function CTAButton({
  href,
  children,
  variant = 'primary',
  className = '',
}: {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'outline';
  className?: string;
}) {
  const base =
    'inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300';
  const styles =
    variant === 'primary'
      ? 'bg-gradient-gold text-ink hover:shadow-[0_0_30px_rgba(201,162,39,0.5)] hover:scale-[1.03]'
      : 'border border-gold/50 bg-transparent text-gold hover:bg-gold hover:text-ink';
  return (
    <a href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </a>
  );
}

export function InquiryCTA({
  title = 'Ready to build your landmark?',
  subtitle = 'Get a free consultation with our team. No obligation, just expert guidance.',
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="section-pad">
      <div className="container-lux">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl border border-gold/20 bg-charcoal px-6 py-14 text-center md:px-12 md:py-20">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-gold/5 blur-3xl" />
            <div className="relative">
              <h2 className="font-heading text-3xl font-semibold text-white md:text-4xl">{title}</h2>
              <p className="mx-auto mt-4 max-w-xl text-grey">{subtitle}</p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <CTAButton href="/consultation">Get Free Consultation</CTAButton>
                <CTAButton href="/estimator" variant="outline">Try Free Estimator</CTAButton>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
