import { Mail, MessageCircle, Phone, MapPin, Clock, Building2 } from 'lucide-react';
import { CONTACT, WHATSAPP_URL, MAILTO_URL } from '@/lib/data';
import { FadeIn, SectionHeading, InquiryCTA } from '@/components/Section';

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Aalekhya Constructions. Email us at aalekhyaconstructions@gmail.com or chat on WhatsApp at +91 84748 94473.',
};

export default function ContactPage() {
  return (
    <>
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/1313534/pexels-photo-1313534.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920"
            alt="Modern building facade"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/75 to-ink" />
        </div>
        <div className="container-lux relative z-10 px-4 text-center md:px-8">
          <FadeIn>
            <span className="font-body text-xs uppercase tracking-[0.4em] text-gold">Contact Us</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="mx-auto mt-5 max-w-3xl font-heading text-4xl font-semibold leading-tight text-white md:text-6xl">
              Let's Build Something <span className="text-gradient-gold">Extraordinary</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
              Reach out through any channel below. We respond within 24 hours.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-lux">
          <div className="grid gap-6 lg:grid-cols-3">
            <FadeIn>
              <div className="group h-full rounded-3xl border border-gold/20 bg-charcoal/60 p-8 backdrop-blur-sm transition-all hover:border-gold/40 hover:-translate-y-1 duration-300">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10 text-gold transition-all group-hover:bg-gold group-hover:text-ink">
                  <Mail className="h-7 w-7" />
                </span>
                <h3 className="mt-5 font-heading text-xl font-semibold text-white">Email Us</h3>
                <p className="mt-2 text-sm text-grey">For project enquiries and detailed discussions.</p>
                <a href={MAILTO_URL} className="mt-4 block break-all text-sm text-gold transition-colors hover:text-gold-light">
                  {CONTACT.email}
                </a>
                <a href={MAILTO_URL} className="mt-5 inline-flex items-center gap-2 rounded-full border border-gold/40 px-5 py-2.5 text-sm font-medium text-gold transition-all hover:bg-gold hover:text-ink">
                  <Mail className="h-4 w-4" /> Email Us
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="group h-full rounded-3xl border border-gold/20 bg-charcoal/60 p-8 backdrop-blur-sm transition-all hover:border-gold/40 hover:-translate-y-1 duration-300">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#25D366]/30 bg-[#25D366]/10 text-[#25D366] transition-all group-hover:bg-[#25D366] group-hover:text-white">
                  <MessageCircle className="h-7 w-7" fill="currentColor" stroke="none" />
                </span>
                <h3 className="mt-5 font-heading text-xl font-semibold text-white">Chat on WhatsApp</h3>
                <p className="mt-2 text-sm text-grey">Quick questions? Message us anytime.</p>
                <p className="mt-4 text-sm text-gold">{CONTACT.whatsappDisplay}</p>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105">
                  <MessageCircle className="h-4 w-4" fill="currentColor" stroke="none" /> Chat on WhatsApp
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="group h-full rounded-3xl border border-gold/20 bg-charcoal/60 p-8 backdrop-blur-sm transition-all hover:border-gold/40 hover:-translate-y-1 duration-300">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10 text-gold transition-all group-hover:bg-gold group-hover:text-ink">
                  <MapPin className="h-7 w-7" />
                </span>
                <h3 className="mt-5 font-heading text-xl font-semibold text-white">Service Area</h3>
                <p className="mt-2 text-sm text-grey">Assam &amp; Northeast India</p>
                <p className="mt-4 text-sm text-white/80">From Dhemaji to Itanagar — we serve clients across the region.</p>
                <div className="mt-5 flex items-center gap-2 text-sm text-grey">
                  <Clock className="h-4 w-4 text-gold" /> Mon–Sat: 9 AM – 7 PM
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="container-lux">
          <div className="grid gap-6 lg:grid-cols-2">
            <FadeIn>
              <div className="relative h-full overflow-hidden rounded-3xl border border-gold/20 bg-charcoal/60 p-8 backdrop-blur-sm md:p-10">
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold/10 blur-3xl" />
                <span className="font-body text-xs uppercase tracking-[0.35em] text-gold">Get In Touch</span>
                <h2 className="mt-4 font-heading text-3xl font-semibold text-white">Reach Our Team Directly</h2>
                <p className="mt-3 text-base leading-relaxed text-grey">
                  Whether you have a detailed brief or just an early idea, we're here to help. Use any of the channels below — we respond within 24 hours.
                </p>
                <div className="mt-8 space-y-4">
                  <a href={MAILTO_URL} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-ink/40 p-4 transition-all hover:border-gold/30">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
                      <Mail className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-grey">Email</p>
                      <p className="text-sm font-medium text-white break-all">{CONTACT.email}</p>
                    </div>
                  </a>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl border border-white/10 bg-ink/40 p-4 transition-all hover:border-gold/30">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
                      <Phone className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-grey">WhatsApp / Phone</p>
                      <p className="text-sm font-medium text-white">{CONTACT.whatsappDisplay}</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-ink/40 p-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
                      <Building2 className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-grey">Region</p>
                      <p className="text-sm font-medium text-white">Assam &amp; Northeast India</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="h-full min-h-[400px] overflow-hidden rounded-3xl border border-gold/20">
                <iframe
                  title="Aalekhya Constructions service area map"
                  src="https://www.google.com/maps?q=Dhemaji,Assam,India&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px' }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <InquiryCTA
        title="Prefer to talk to us directly?"
        subtitle="Book a free consultation and we'll schedule a site visit at your convenience."
      />
    </>
  );
}
