'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, MapPin, IndianRupee, Tag } from 'lucide-react';
import { PROJECTS } from '@/lib/data';
import { SectionHeading, FadeIn, CTAButton } from '@/components/Section';

export default function FeaturedProjects() {
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const featured = PROJECTS.slice(0, 5);
  const next = () => setIndex((i) => (i + 1) % featured.length);
  const prev = () => setIndex((i) => (i - 1 + featured.length) % featured.length);

  return (
    <section className="section-pad relative overflow-hidden">
      <div className="container-lux">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            center={false}
            eyebrow="Featured Work"
            title={<>Landmarks We've <span className="text-gradient-gold">Delivered</span></>}
            subtitle="A selection of our signature projects across residential, commercial and landscape categories."
          />
          <div className="hidden gap-3 md:flex">
            <button onClick={prev} aria-label="Previous project" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-all hover:border-gold hover:text-gold">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={next} aria-label="Next project" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-all hover:border-gold hover:text-gold">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-14 overflow-hidden">
        <motion.div
          ref={trackRef}
          className="flex"
          animate={{ x: `-${index * 100}%` }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {featured.map((project) => (
            <div key={project.id} className="w-full shrink-0 px-4 md:px-8">
              <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:items-center">
                <FadeIn>
                  <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                    <span className="absolute left-5 top-5 rounded-full bg-ink/70 px-4 py-1.5 text-xs font-medium text-gold backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                </FadeIn>

                <FadeIn delay={0.15}>
                  <div>
                    <h3 className="font-heading text-3xl font-semibold text-white md:text-4xl">{project.title}</h3>
                    <p className="mt-4 text-base leading-relaxed text-grey">{project.description}</p>
                    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                      <div className="rounded-xl border border-white/10 bg-charcoal/60 p-4">
                        <span className="flex items-center gap-2 text-xs uppercase tracking-wider text-gold">
                          <MapPin className="h-3.5 w-3.5" /> Location
                        </span>
                        <p className="mt-2 text-sm font-medium text-white">{project.location}</p>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-charcoal/60 p-4">
                        <span className="flex items-center gap-2 text-xs uppercase tracking-wider text-gold">
                          <IndianRupee className="h-3.5 w-3.5" /> Value
                        </span>
                        <p className="mt-2 text-sm font-medium text-white">{project.value}</p>
                      </div>
                      <div className="rounded-xl border border-white/10 bg-charcoal/60 p-4">
                        <span className="flex items-center gap-2 text-xs uppercase tracking-wider text-gold">
                          <Tag className="h-3.5 w-3.5" /> Category
                        </span>
                        <p className="mt-2 text-sm font-medium text-white">{project.category}</p>
                      </div>
                    </div>
                    <div className="mt-8">
                      <CTAButton href="/projects" className="gap-2">View All Projects</CTAButton>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="container-lux mt-10 flex justify-center gap-2 md:hidden">
        <button onClick={prev} aria-label="Previous" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button onClick={next} aria-label="Next" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="container-lux mt-8 flex justify-center gap-2">
        {featured.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to project ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${i === index ? 'w-8 bg-gold' : 'w-2 bg-white/20'}`}
          />
        ))}
      </div>
    </section>
  );
}
