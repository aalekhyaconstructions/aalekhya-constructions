import { FadeIn, SectionHeading, InquiryCTA } from '@/components/Section';
import { WHY_AALEKHYA } from '@/lib/data';
import AnimatedCounter from '@/components/AnimatedCounter';
import { STATS } from '@/lib/data';
import { Target, Eye, Compass } from 'lucide-react';

export const metadata = {
  title: 'About Us',
  description: 'Aalekhya Constructions — building landmarks that create long-term value through thoughtful planning, premium quality, and transparent execution across Assam and Northeast India.',
};

export default function AboutPage() {
  return (
    <>
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/8482551/pexels-photo-8482551.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920"
            alt="Architect reviewing plans"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/70 to-ink" />
        </div>
        <div className="container-lux relative z-10 px-4 text-center md:px-8">
          <FadeIn>
            <span className="font-body text-xs uppercase tracking-[0.4em] text-gold">About Us</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="mx-auto mt-5 max-w-3xl font-heading text-4xl font-semibold leading-tight text-white md:text-6xl">
              Building Trust, <span className="text-gradient-gold">One Landmark at a Time</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
              A premium construction company rooted in Assam, serving clients across Northeast India with a commitment to quality, transparency and timeless design.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-lux">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <FadeIn>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10">
                <img
                  src="https://images.pexels.com/photos/8961146/pexels-photo-8961146.jpeg?auto=compress&cs=tinysrgb&h=900&w=1400"
                  alt="Engineers at construction site"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div>
                <span className="font-body text-xs uppercase tracking-[0.35em] text-gold">Our Story</span>
                <h2 className="mt-4 font-heading text-3xl font-semibold text-white md:text-4xl">
                  A New Standard for Construction in Northeast India
                </h2>
                <div className="mt-5 space-y-4 text-base leading-relaxed text-grey">
                  <p>
                    Aalekhya Constructions was founded with a singular vision: to bring premium, world-class construction standards to Assam and the wider Northeast India region — without compromising on transparency or value.
                  </p>
                  <p>
                    From bespoke luxury homes to commercial complexes, resorts, parks and infrastructure, every project we take on is driven by detailed planning, skilled craftsmanship, and honest communication at every stage.
                  </p>
                  <p>
                    We believe a building is more than structure — it is a legacy. That belief shapes every decision, from material selection to final handover.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-pad bg-gradient-to-b from-ink to-charcoal/30">
        <div className="container-lux">
          <div className="grid gap-8 md:grid-cols-2">
            <FadeIn>
              <div className="relative h-full overflow-hidden rounded-3xl border border-gold/20 bg-charcoal/60 p-8 backdrop-blur-sm md:p-10">
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold/10 blur-3xl" />
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10 text-gold">
                  <Target className="h-7 w-7" />
                </span>
                <h3 className="mt-6 font-heading text-2xl font-semibold text-white md:text-3xl">Our Mission</h3>
                <p className="mt-4 text-base leading-relaxed text-grey">
                  Build landmarks that create long-term value through thoughtful planning, premium quality, and transparent execution.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.12}>
              <div className="relative h-full overflow-hidden rounded-3xl border border-gold/20 bg-charcoal/60 p-8 backdrop-blur-sm md:p-10">
                <div className="pointer-events-none absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-gold/10 blur-3xl" />
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10 text-gold">
                  <Eye className="h-7 w-7" />
                </span>
                <h3 className="mt-6 font-heading text-2xl font-semibold text-white md:text-3xl">Our Vision</h3>
                <p className="mt-4 text-base leading-relaxed text-grey">
                  Become one of Northeast India&rsquo;s most trusted premium construction brands.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-lux">
          <SectionHeading
            eyebrow="Our Values"
            title={<>What Drives <span className="text-gradient-gold">Every Project</span></>}
            subtitle="The principles that guide our team from the first consultation to final delivery."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_AALEKHYA.map((item, i) => {
              const Icon = item.icon;
              return (
                <FadeIn key={item.title} delay={i * 0.08}>
                  <div className="group h-full rounded-2xl border border-white/10 bg-charcoal/60 p-7 transition-all hover:border-gold/30 hover:-translate-y-1 duration-300">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/5 text-gold transition-all group-hover:bg-gold group-hover:text-ink">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="mt-5 font-heading text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-grey">{item.description}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-gradient-to-b from-charcoal/30 to-ink">
        <div className="container-lux">
          <SectionHeading
            eyebrow="Our Impact"
            title={<>Numbers That <span className="text-gradient-gold">Speak</span></>}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1}>
                <div className="rounded-2xl border border-white/10 bg-charcoal/60 p-8 text-center">
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

      <section className="section-pad">
        <div className="container-lux">
          <FadeIn>
            <div className="relative overflow-hidden rounded-3xl border border-gold/20 bg-charcoal p-8 text-center md:p-14">
              <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
              <Compass className="mx-auto h-10 w-10 animate-spin-slow text-gold" />
              <h2 className="mt-6 font-heading text-3xl font-semibold text-white md:text-4xl">
                Rooted in Assam. Building Across the Northeast.
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-grey">
                From Dhemaji to Itanagar, we bring premium construction standards to communities that deserve world-class infrastructure and design.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <InquiryCTA />
    </>
  );
}
