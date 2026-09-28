'use client';

import Link from 'next/link';
import { Building2, Mail, MessageCircle, Phone, Facebook, Instagram, Linkedin, MapPin } from 'lucide-react';
import { CONTACT, NAV_LINKS, SERVICES, WHATSAPP_URL, MAILTO_URL } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-ink pt-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="container-lux px-4 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-md border border-gold/40 bg-charcoal">
                <Building2 className="h-5 w-5 text-gold" />
              </span>
              <div className="flex flex-col leading-none">
                <span className="font-heading text-xl text-white">Aalekhya</span>
                <span className="font-body text-[0.6rem] tracking-[0.3em] text-gold">CONSTRUCTIONS</span>
              </div>
            </div>
            <p className="mt-5 font-heading text-lg italic text-white/70">
              Building Landmarks. Creating Legacies.
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-grey">
              Premium construction, luxury homes, resorts, commercial developments, landscaping and infrastructure solutions across Assam.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={['Facebook', 'Instagram', 'LinkedIn'][i]}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-charcoal text-white/60 transition-all hover:border-gold/50 hover:text-gold"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm uppercase tracking-[0.2em] text-gold">Quick Links</h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-grey transition-colors hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm uppercase tracking-[0.2em] text-gold">Services</h3>
            <ul className="mt-5 space-y-3">
              {SERVICES.slice(0, 7).map((s) => (
                <li key={s.slug}>
                  <Link href="/services" className="text-sm text-grey transition-colors hover:text-gold">
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-sm text-gold/80 transition-colors hover:text-gold">
                  View all services →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm uppercase tracking-[0.2em] text-gold">Contact</h3>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3 text-sm text-grey">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>Assam &amp; Northeast India</span>
              </li>
              <li>
                <a href={MAILTO_URL} className="flex items-center gap-3 text-sm text-grey transition-colors hover:text-gold">
                  <Mail className="h-4 w-4 shrink-0 text-gold" />
                  <span className="break-all">{CONTACT.email}</span>
                </a>
              </li>
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-grey transition-colors hover:text-gold">
                  <Phone className="h-4 w-4 shrink-0 text-gold" />
                  <span>{CONTACT.whatsappDisplay}</span>
                </a>
              </li>
            </ul>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={MAILTO_URL}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gold/40 px-4 py-2.5 text-sm font-medium text-gold transition-all hover:bg-gold hover:text-ink"
              >
                <Mail className="h-4 w-4" /> Email Us
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105"
              >
                <MessageCircle className="h-4 w-4" fill="currentColor" stroke="none" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 sm:flex-row">
          <p className="text-xs text-grey">
            © {new Date().getFullYear()} Aalekhya Constructions. All rights reserved.
          </p>
          <p className="text-xs text-grey">
            Building Landmarks. Creating Legacies.
          </p>
        </div>
      </div>
    </footer>
  );
}
