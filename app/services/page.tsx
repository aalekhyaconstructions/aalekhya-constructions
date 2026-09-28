import { FadeIn, SectionHeading, InquiryCTA } from '@/components/Section';
import { SERVICES, WHY_CHOOSE } from '@/lib/data';
import { Check } from 'lucide-react';

export const metadata = {
  title: 'Our Services',
  description: 'Luxury homes, villas, resorts, cafeterias, commercial buildings, marriage halls, swimming pools, parks, landscaping, gates, compound walls, renovation and infrastructure solutions by Aalekhya Constructions.',
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/8082243/pexels-photo-8082243.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920"
            alt="Modern interior"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/70 to-ink" />
        </div>
        <div className="container-lux relative z-10 px-4 text-center md:px-8">
          <FadeIn>
            <span className="font-body text-xs uppercase tracking-[0.4em] text-gold">Our Services</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="mx-auto mt-5 max-w-3xl font-heading text-4xl font-semibold leading-tight text-white md:text-6xl">
              Premium Construction <span className="text-gradient-gold">Across Every Category</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
              From bespoke residences to commercial landmarks and immersive landscapes — explore the full range of what we build.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-lux space-y-20">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            const reversed = i % 2 === 1;
            return (
              <FadeIn key={service.slug}>
                <div className={`grid gap-10 lg:grid-cols-2 lg:items-center ${reversed ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                  <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
                    <span className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-xl border border-gold/40 bg-ink/70 text-gold backdrop-blur-sm">
                      <Icon className="h-6 w-6" />
                    </span>
                  </div>
                  <div>
                    <span className="font-body text-xs uppercase tracking-[0.35em] text-gold">
                      {String(i + 1).padStart(2, '0')} — Service
                    </span>
                    <h2 className="mt-3 font-heading text-3xl font-semibold text-white md:text-4xl">{service.title}</h2>
                    <p className="mt-4 text-base leading-relaxed text-grey">{service.description}</p>
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3 text-sm text-white/80">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                            <Check className="h-3 w-3" />
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      <section className="section-pad bg-gradient-to-b from-ink to-charcoal/30">
        <div className="container-lux">
          <SectionHeading
            eyebrow="Why Choose Aalekhya"
            title={<>The Difference Is In <span className="text-gradient-gold">The Details</span></>}
            subtitle="Six commitments that define how we work — and why clients trust us with their most important investments."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_CHOOSE.map((item, i) => {
              const Icon = item.icon;
              return (
                <FadeIn key={item.title} delay={i * 0.08}>
                  <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-charcoal/60 p-7 backdrop-blur-sm transition-all hover:border-gold/30 hover:-translate-y-1 duration-300">
                    <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/5 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
                    <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10 text-gold transition-all duration-500 group-hover:scale-110 group-hover:bg-gold group-hover:text-ink">
                      <Icon className="h-7 w-7" />
                    </span>
                    <h3 className="mt-5 font-heading text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-grey">{item.description}</p>
                    <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-gold transition-all duration-500 group-hover:w-full" />
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <InquiryCTA
        title="Have a project in mind?"
        subtitle="Tell us what you want to build. We'll guide you through every step — from concept to handover."
      />
    </>
  );
}
