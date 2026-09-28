'use client';

import { motion } from 'framer-motion';

export default function FloatingAccents() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        className="absolute -left-20 top-1/4 h-64 w-64 rounded-full bg-gold/[0.04] blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -right-32 top-2/3 h-80 w-80 rounded-full bg-gold/[0.03] blur-3xl"
        animate={{ y: [0, 40, 0], x: [0, -20, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
