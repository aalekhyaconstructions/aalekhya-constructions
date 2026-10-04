'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MapPin, IndianRupee, Tag } from 'lucide-react';
import { type CMSProject, PROJECT_FILTERS, type ProjectFilter } from '@/lib/project-types';
import { FadeIn, SectionHeading, InquiryCTA } from '@/components/Section';

export default function ProjectsGallery({ projects }: { projects: CMSProject[] }) {
  const [filter, setFilter] = useState<ProjectFilter>('All');
  const [selected, setSelected] = useState<CMSProject | null>(null);

  const filtered = useMemo(() => {
    if (filter === 'All') return projects;
    return projects.filter((p) => p.projectType === filter);
  }, [filter, projects]);

  return (
    <>
      <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/14603131/pexels-photo-14603131.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920"
            alt="Luxury mansion"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/70 to-ink" />
        </div>
        <div className="container-lux relative z-10 px-4 text-center md:px-8">
          <FadeIn>
            <span className="font-body text-xs uppercase tracking-[0.4em] text-gold">Our Projects</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="mx-auto mt-5 max-w-3xl font-heading text-4xl font-semibold leading-tight text-white md:text-6xl">
              A Portfolio of <span className="text-gradient-gold">Landmarks</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
              Explore our delivered and ongoing projects across residential, commercial, landscaping, resort and park categories.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-lux">
          <FadeIn>
            <div className="flex flex-wrap justify-center gap-3">
              {PROJECT_FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                    filter === f
                      ? 'bg-gradient-gold text-ink gold-glow'
                      : 'border border-white/15 text-white/70 hover:border-gold/40 hover:text-gold'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </FadeIn>

          <motion.div layout className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3">
            <AnimatePresence>
              {filtered.map((project) => (
                <motion.button
                  layout
                  key={project.slug}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setSelected(project)}
                  className="group relative mb-5 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-white/10 text-left transition-all hover:border-gold/30"
                >
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <span className="mb-3 inline-block rounded-full bg-gold/20 px-3 py-1 text-xs font-medium text-gold backdrop-blur-sm">
                      {project.projectType}
                    </span>
                    <h3 className="font-heading text-xl font-semibold text-white">{project.title}</h3>
                    <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-grey">
                      <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-gold" /> {project.location}{project.state ? `, ${project.state}` : ''}</span>
                      <span className="flex items-center gap-1.5"><IndianRupee className="h-3.5 w-3.5 text-gold" /> {project.budget}</span>
                    </div>
                  </div>
                  <span className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 bg-ink/70 text-gold opacity-0 backdrop-blur-sm transition-all group-hover:opacity-100">
                    <Tag className="h-4 w-4" />
                  </span>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[96] flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <div className="absolute inset-0 bg-ink/85 backdrop-blur-md" />
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 grid max-h-[90vh] w-full max-w-4xl overflow-hidden overflow-y-auto rounded-3xl border border-gold/30 bg-charcoal"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-ink/70 text-white backdrop-blur-sm transition-all hover:border-gold hover:text-gold"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="aspect-[16/10] w-full overflow-hidden">
                <img src={selected.coverImage} alt={selected.title} className="h-full w-full object-cover" />
              </div>
              <div className="p-6 md:p-8">
                <span className="inline-block rounded-full bg-gold/15 px-3 py-1 text-xs font-medium text-gold">{selected.projectType}</span>
                <h2 className="mt-4 font-heading text-3xl font-semibold text-white">{selected.title}</h2>
                <p className="mt-3 text-base leading-relaxed text-grey">{selected.description}</p>
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-xl border border-white/10 bg-ink/50 p-4">
                    <span className="flex items-center gap-2 text-xs uppercase tracking-wider text-gold"><MapPin className="h-3.5 w-3.5" /> Location</span>
                    <p className="mt-2 text-sm font-medium text-white">{selected.location}{selected.state ? `, ${selected.state}` : ''}</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-ink/50 p-4">
                    <span className="flex items-center gap-2 text-xs uppercase tracking-wider text-gold"><IndianRupee className="h-3.5 w-3.5" /> Value</span>
                    <p className="mt-2 text-sm font-medium text-white">{selected.budget}</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-ink/50 p-4">
                    <span className="flex items-center gap-2 text-xs uppercase tracking-wider text-gold"><Tag className="h-3.5 w-3.5" /> Category</span>
                    <p className="mt-2 text-sm font-medium text-white">{selected.projectType}</p>
                  </div>
                </div>
                {selected.keyFeatures.length > 0 && (
                  <div className="mt-6">
                    <h4 className="font-heading text-sm uppercase tracking-wider text-gold">Key Features</h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {selected.keyFeatures.map((feature) => (
                        <span key={feature} className="rounded-full border border-white/15 bg-ink/50 px-4 py-2 text-xs text-white/80">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {selected.galleryImages.length > 1 && (
                  <div className="mt-6">
                    <h4 className="font-heading text-sm uppercase tracking-wider text-gold">Gallery</h4>
                    <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3">
                      {selected.galleryImages.map((img, i) => (
                        <div key={i} className="aspect-[4/3] overflow-hidden rounded-lg border border-white/10">
                          <img src={img} alt={`${selected.title} gallery ${i + 1}`} className="h-full w-full object-cover" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <InquiryCTA />
    </>
  );
}
