'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Building2 } from 'lucide-react';
import { NAV_LINKS, WHATSAPP_URL } from '@/lib/data';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed inset-x-0 top-0 z-[80] transition-all duration-500',
          scrolled ? 'glass py-2 shadow-[0_8px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent py-4'
        )}
      >
        <nav className="container-lux flex items-center justify-between px-4 md:px-8">
          <Link href="/" className="group flex items-center gap-3" aria-label="Aalekhya Constructions home">
            <span className="relative flex h-10 w-10 items-center justify-center rounded-md border border-gold/40 bg-charcoal">
              <Building2 className="h-5 w-5 text-gold transition-transform group-hover:scale-110" />
              <span className="absolute -inset-0.5 rounded-md border border-gold/20 opacity-0 transition-opacity group-hover:opacity-100" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="font-heading text-lg font-semibold tracking-wide text-white">Aalekhya</span>
              <span className="font-body text-[0.6rem] tracking-[0.3em] text-gold">CONSTRUCTIONS</span>
            </span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      'relative px-4 py-2 text-sm font-medium transition-colors',
                      active ? 'text-gold' : 'text-white/80 hover:text-white'
                    )}
                  >
                    {link.label}
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-x-3 -bottom-0.5 h-px bg-gradient-gold"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:block">
            <Link
              href="/consultation"
              className="inline-flex items-center rounded-full border border-gold/50 bg-gold/10 px-5 py-2 text-sm font-medium text-gold transition-all hover:bg-gold hover:text-ink gold-glow"
            >
              Get Free Consultation
            </Link>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-charcoal/60 text-white lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[95] lg:hidden"
          >
            <div className="absolute inset-0 bg-ink/80 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 32 }}
              className="absolute right-0 top-0 flex h-full w-80 max-w-[85vw] flex-col bg-charcoal p-6 shadow-2xl"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="font-heading text-lg text-white">Menu</span>
                <button
                  onClick={() => setOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-white"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => {
                  const active = pathname === link.href;
                  return (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.06 }}
                    >
                      <Link
                        href={link.href}
                        className={cn(
                          'block rounded-md px-4 py-3 text-base font-medium transition-colors',
                          active ? 'bg-gold/10 text-gold' : 'text-white/80 hover:bg-white/5 hover:text-white'
                        )}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
              <div className="mt-auto flex flex-col gap-3 pt-6">
                <Link
                  href="/consultation"
                  className="rounded-full bg-gradient-gold px-5 py-3 text-center text-sm font-semibold text-ink"
                >
                  Get Free Consultation
                </Link>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-gold/40 px-5 py-3 text-center text-sm font-medium text-gold"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
