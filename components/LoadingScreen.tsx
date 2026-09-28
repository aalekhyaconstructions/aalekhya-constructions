'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0d0d0d]"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex flex-col items-center"
          >
            <div className="relative">
              <div className="absolute -inset-6 rounded-full bg-gold/20 blur-2xl" />
              <svg width="72" height="72" viewBox="0 0 72 72" className="relative">
                <motion.path
                  d="M14 54 L36 14 L58 54 Z"
                  fill="none"
                  stroke="#c9a227"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.4, ease: 'easeInOut' }}
                />
                <motion.path
                  d="M22 54 L36 28 L50 54"
                  fill="none"
                  stroke="#e0c656"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.4, delay: 0.3, ease: 'easeInOut' }}
                />
              </svg>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="mt-6 font-heading text-2xl tracking-[0.2em] text-white"
            >
              AALEKHYA
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.7 }}
              className="mt-1 font-body text-[0.7rem] tracking-[0.4em] text-gold"
            >
              CONSTRUCTIONS
            </motion.p>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '180px' }}
              transition={{ delay: 0.6, duration: 1.2, ease: 'easeInOut' }}
              className="mt-6 h-px bg-gradient-gold"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
