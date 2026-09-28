'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ChevronRight, ChevronLeft, Sparkles, TrendingUp, Calendar, IndianRupee, MapPin, Ruler, Wallet } from 'lucide-react';
import { ESTIMATOR_PROJECT_TYPES, ESTIMATE_RATES } from '@/lib/data';
import { FadeIn, SectionHeading, CTAButton } from '@/components/Section';

type Estimate = {
  low: number;
  high: number;
  category: string;
  recommendation: string;
};

export default function EstimatorPage() {
  const [step, setStep] = useState(1);
  const [projectType, setProjectType] = useState('');
  const [form, setForm] = useState({
    location: '',
    plotSize: '',
    builtUpArea: '',
    budget: '',
    timeline: '',
  });
  const [estimate, setEstimate] = useState<Estimate | null>(null);

  const handleForm = (key: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const calculate = () => {
    const rate = ESTIMATE_RATES[projectType];
    if (!rate) return;
    const area = parseFloat(form.builtUpArea) || 0;
    const low = area * rate.low;
    const high = area * rate.high;
    const budgetNum = parseFloat(form.budget) || 0;
    const recommendation =
      budgetNum === 0
        ? 'We recommend scheduling a detailed consultation for an accurate budget assessment.'
        : budgetNum < low
        ? 'Your budget appears below the typical range for this category. Consider phased construction or adjusting the scope.'
        : budgetNum > high
        ? 'Your budget allows for premium finishes and additional amenities. Great scope for luxury detailing.'
        : 'Your budget aligns well with the expected range for this project type.';

    setEstimate({ low, high, category: rate.category, recommendation });
    setStep(3);
  };

  const formatINR = (n: number) => {
    if (n >= 10000000) return `₹${(n / 10000000).toFixed(2)} Crore`;
    if (n >= 100000) return `₹${(n / 100000).toFixed(2)} Lakhs`;
    return `₹${n.toLocaleString('en-IN')}`;
  };

  return (
    <>
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/7722168/pexels-photo-7722168.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920"
            alt="Modern interior"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/75 to-ink" />
        </div>
        <div className="container-lux relative z-10 px-4 text-center md:px-8">
          <FadeIn>
            <span className="font-body text-xs uppercase tracking-[0.4em] text-gold">Free Project Estimator</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="mx-auto mt-5 max-w-3xl font-heading text-4xl font-semibold leading-tight text-white md:text-6xl">
              Estimate Your <span className="text-gradient-gold">Project Budget</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
              An interactive planning tool to get an approximate budget range. Not an exact quotation — for a detailed estimate, book a free consultation.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-lux">
          <FadeIn>
            <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-gold/20 bg-charcoal/60 backdrop-blur-sm">
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-5 md:px-8">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex flex-1 items-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className={`flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-semibold transition-all ${
                        step >= s ? 'border-gold bg-gold text-ink' : 'border-white/20 text-grey'
                      }`}>
                        {step > s ? <Check className="h-5 w-5" /> : s}
                      </span>
                      <span className={`text-xs ${step >= s ? 'text-gold' : 'text-grey'}`}>
                        {s === 1 ? 'Project Type' : s === 2 ? 'Details' : 'Estimate'}
                      </span>
                    </div>
                    {s < 3 && <div className={`mx-3 h-0.5 flex-1 transition-all ${step > s ? 'bg-gold' : 'bg-white/15'}`} />}
                  </div>
                ))}
              </div>

              <div className="p-6 md:p-8">
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.4 }}
                    >
                      <h2 className="font-heading text-2xl font-semibold text-white">Select Project Type</h2>
                      <p className="mt-2 text-sm text-grey">Choose the category that best describes your project.</p>
                      <div className="mt-6 grid gap-3 sm:grid-cols-2">
                        {ESTIMATOR_PROJECT_TYPES.map((type) => (
                          <button
                            key={type}
                            onClick={() => { setProjectType(type); setStep(2); }}
                            className={`group flex items-center justify-between rounded-xl border px-5 py-4 text-left transition-all ${
                              projectType === type
                                ? 'border-gold bg-gold/10 text-gold'
                                : 'border-white/10 text-white/80 hover:border-gold/40 hover:text-gold'
                            }`}
                          >
                            <span className="font-medium">{type}</span>
                            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.4 }}
                    >
                      <h2 className="font-heading text-2xl font-semibold text-white">Project Details</h2>
                      <p className="mt-2 text-sm text-grey">Tell us about your {projectType.toLowerCase()} project.</p>
                      <div className="mt-6 grid gap-5 sm:grid-cols-2">
                        <Field icon={MapPin} label="Location" value={form.location} onChange={(v) => handleForm('location', v)} placeholder="e.g. Dhemaji, Assam" />
                        <Field icon={Ruler} label="Plot Size (sq ft)" value={form.plotSize} onChange={(v) => handleForm('plotSize', v)} placeholder="e.g. 3000" type="number" />
                        <Field icon={Ruler} label="Approx Built-up Area (sq ft)" value={form.builtUpArea} onChange={(v) => handleForm('builtUpArea', v)} placeholder="e.g. 2000" type="number" />
                        <Field icon={Wallet} label="Budget (INR)" value={form.budget} onChange={(v) => handleForm('budget', v)} placeholder="e.g. 1500000" type="number" />
                        <div className="sm:col-span-2">
                          <label className="mb-2 flex items-center gap-2 text-sm font-medium text-white">
                            <Calendar className="h-4 w-4 text-gold" /> Timeline
                          </label>
                          <select
                            value={form.timeline}
                            onChange={(e) => handleForm('timeline', e.target.value)}
                            className="w-full rounded-xl border border-white/10 bg-ink px-4 py-3 text-sm text-white outline-none transition-colors focus:border-gold"
                          >
                            <option value="">Select timeline</option>
                            <option value="3-6 months">3–6 months</option>
                            <option value="6-12 months">6–12 months</option>
                            <option value="12-18 months">12–18 months</option>
                            <option value="18+ months">18+ months</option>
                          </select>
                        </div>
                      </div>
                      <div className="mt-8 flex gap-3">
                        <button
                          onClick={() => setStep(1)}
                          className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white transition-all hover:border-gold/40"
                        >
                          <ChevronLeft className="h-4 w-4" /> Back
                        </button>
                        <button
                          onClick={calculate}
                          disabled={!form.builtUpArea}
                          className="inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3 text-sm font-semibold text-ink transition-all hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-40"
                        >
                          <Sparkles className="h-4 w-4" /> Calculate Estimate
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && estimate && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -30 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="text-center">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                          className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold bg-gold/10 text-gold"
                        >
                          <Check className="h-8 w-8" />
                        </motion.div>
                        <h2 className="mt-5 font-heading text-2xl font-semibold text-white">Your Estimate Summary</h2>
                        <p className="mt-2 text-sm text-grey">Based on {projectType} — {form.location || 'your location'}</p>
                      </div>

                      <div className="mt-8 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-2xl border border-gold/30 bg-gold/5 p-6 text-center">
                          <span className="flex items-center justify-center gap-2 text-xs uppercase tracking-wider text-gold">
                            <TrendingUp className="h-4 w-4" /> Suggested Budget Range
                          </span>
                          <p className="mt-3 font-heading text-2xl font-bold text-white md:text-3xl">
                            {formatINR(estimate.low)}
                          </p>
                          <p className="text-grey">to</p>
                          <p className="font-heading text-2xl font-bold text-gradient-gold md:text-3xl">
                            {formatINR(estimate.high)}
                          </p>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-ink/50 p-6">
                          <span className="text-xs uppercase tracking-wider text-gold">Recommended Category</span>
                          <p className="mt-3 font-heading text-lg font-semibold text-white">{estimate.category}</p>
                          <span className="mt-4 block text-xs uppercase tracking-wider text-gold">Planning Recommendation</span>
                          <p className="mt-2 text-sm leading-relaxed text-grey">{estimate.recommendation}</p>
                        </div>
                      </div>

                      {form.timeline && (
                        <div className="mt-4 rounded-2xl border border-white/10 bg-ink/50 p-5 text-center text-sm text-grey">
                          Indicative timeline: <span className="font-medium text-white">{form.timeline}</span>
                        </div>
                      )}

                      <p className="mt-6 rounded-xl border border-white/10 bg-ink/40 p-4 text-center text-xs text-grey">
                        This is an approximate planning tool, not an exact quotation. Actual costs vary based on design, materials, site conditions and scope.
                      </p>

                      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <CTAButton href="/consultation" className="gap-2">
                          Get a Detailed Professional Estimate
                        </CTAButton>
                        <button
                          onClick={() => { setStep(1); setEstimate(null); setForm({ location: '', plotSize: '', builtUpArea: '', budget: '', timeline: '' }); }}
                          className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3.5 text-sm font-medium text-white transition-all hover:border-gold/40"
                        >
                          Start Over
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

function Field({
  icon: Icon,
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-2 flex items-center gap-2 text-sm font-medium text-white">
        <Icon className="h-4 w-4 text-gold" /> {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-ink px-4 py-3 text-sm text-white placeholder-grey outline-none transition-colors focus:border-gold"
      />
    </div>
  );
}
