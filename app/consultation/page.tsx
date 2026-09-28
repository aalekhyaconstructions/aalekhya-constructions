'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Send, User, Phone, Mail, MapPin, Building2, Wallet, FileText, Loader2 } from 'lucide-react';
import { ESTIMATOR_PROJECT_TYPES } from '@/lib/data';
import { FadeIn } from '@/components/Section';

type Status = 'idle' | 'submitting' | 'success';

export default function ConsultationPage() {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    projectType: '',
    budget: '',
    description: '',
  });

  const handle = (key: keyof typeof form, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Structured for easy replacement with Formspree / Cloudflare Forms.
    // Replace the setTimeout below with a fetch to your form endpoint.
    await new Promise((r) => setTimeout(r, 1400));
    setStatus('success');
  };

  const reset = () => {
    setForm({ name: '', phone: '', email: '', location: '', projectType: '', budget: '', description: '' });
    setStatus('idle');
  };

  return (
    <>
      <section className="relative flex min-h-[55vh] items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/8482821/pexels-photo-8482821.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920"
            alt="Architects reviewing plans"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/75 to-ink" />
        </div>
        <div className="container-lux relative z-10 px-4 text-center md:px-8">
          <FadeIn>
            <span className="font-body text-xs uppercase tracking-[0.4em] text-gold">Book Free Consultation</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="mx-auto mt-5 max-w-3xl font-heading text-4xl font-semibold leading-tight text-white md:text-6xl">
              Start Your Project <span className="text-gradient-gold">With a Free Consultation</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
              No obligation, just expert guidance. Tell us about your vision and we'll help you plan the path forward.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-lux">
          <div className="mx-auto max-w-2xl">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden rounded-3xl border border-gold/30 bg-charcoal p-10 text-center"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -20 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 12, delay: 0.1 }}
                    className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-gold bg-gold/10 text-gold gold-glow-strong"
                  >
                    <Check className="h-10 w-10" />
                  </motion.div>
                  <h2 className="mt-6 font-heading text-3xl font-semibold text-white">Thank You, {form.name || 'Valued Client'}!</h2>
                  <p className="mx-auto mt-3 max-w-md text-grey">
                    Your consultation request has been received. Our team will reach out within 24 hours to schedule your free site visit.
                  </p>
                  <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    <button onClick={reset} className="rounded-full border border-gold/40 px-6 py-3 text-sm font-medium text-gold transition-all hover:bg-gold hover:text-ink">
                      Submit Another Request
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="overflow-hidden rounded-3xl border border-gold/20 bg-charcoal/60 backdrop-blur-sm"
                >
                  <form onSubmit={handleSubmit} className="p-6 md:p-8">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <FormField icon={User} label="Full Name" value={form.name} onChange={(v) => handle('name', v)} placeholder="Your name" required />
                      <FormField icon={Phone} label="Phone Number" value={form.phone} onChange={(v) => handle('phone', v)} placeholder="+91 ..." type="tel" required />
                      <FormField icon={Mail} label="Email" value={form.email} onChange={(v) => handle('email', v)} placeholder="you@email.com" type="email" required />
                      <FormField icon={MapPin} label="Location" value={form.location} onChange={(v) => handle('location', v)} placeholder="City, State" required />
                      <div>
                        <label className="mb-2 flex items-center gap-2 text-sm font-medium text-white">
                          <Building2 className="h-4 w-4 text-gold" /> Project Type
                        </label>
                        <select
                          value={form.projectType}
                          onChange={(e) => handle('projectType', e.target.value)}
                          required
                          className="w-full rounded-xl border border-white/10 bg-ink px-4 py-3 text-sm text-white outline-none transition-colors focus:border-gold"
                        >
                          <option value="">Select project type</option>
                          {ESTIMATOR_PROJECT_TYPES.map((t) => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                      </div>
                      <FormField icon={Wallet} label="Budget (INR)" value={form.budget} onChange={(v) => handle('budget', v)} placeholder="e.g. 1500000" type="number" />
                    </div>
                    <div className="mt-5">
                      <label className="mb-2 flex items-center gap-2 text-sm font-medium text-white">
                        <FileText className="h-4 w-4 text-gold" /> Project Description
                      </label>
                      <textarea
                        value={form.description}
                        onChange={(e) => handle('description', e.target.value)}
                        rows={4}
                        placeholder="Tell us about your project vision, requirements, timeline..."
                        className="w-full rounded-xl border border-white/10 bg-ink px-4 py-3 text-sm text-white placeholder-grey outline-none transition-colors focus:border-gold"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={status === 'submitting'}
                      className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-gold px-6 py-4 text-sm font-semibold text-ink transition-all hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(201,162,39,0.5)] disabled:opacity-60"
                    >
                      {status === 'submitting' ? (
                        <><Loader2 className="h-4 w-4 animate-spin" /> Sending...</>
                      ) : (
                        <><Send className="h-4 w-4" /> Submit Consultation Request</>
                      )}
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
}

function FormField({
  icon: Icon,
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  required = false,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 flex items-center gap-2 text-sm font-medium text-white">
        <Icon className="h-4 w-4 text-gold" /> {label}{required && <span className="text-gold">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-white/10 bg-ink px-4 py-3 text-sm text-white placeholder-grey outline-none transition-colors focus:border-gold"
      />
    </div>
  );
}
