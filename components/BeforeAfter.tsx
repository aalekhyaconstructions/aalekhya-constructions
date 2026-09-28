'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function BeforeAfter({
  before,
  after,
  labelBefore = 'Before',
  labelAfter = 'After',
}: {
  before: string;
  after: string;
  labelBefore?: string;
  labelAfter?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);

  const handleMove = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPos((x / rect.width) * 100);
  };

  return (
    <div
      ref={containerRef}
      className="relative aspect-[16/10] w-full cursor-ew-resize select-none overflow-hidden rounded-2xl border border-gold/20"
      onMouseMove={(e) => e.buttons === 1 && handleMove(e.clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
    >
      <img src={after} alt={labelAfter} className="absolute inset-0 h-full w-full object-cover" draggable={false} />
      <span className="absolute right-4 top-4 rounded-full bg-ink/70 px-3 py-1 text-xs font-medium text-gold backdrop-blur-sm">
        {labelAfter}
      </span>
      <div className="absolute inset-0 h-full overflow-hidden" style={{ width: `${pos}%` }}>
        <img src={before} alt={labelBefore} className="absolute inset-0 h-full w-full object-cover" style={{ width: containerRef.current?.offsetWidth ?? '100%' }} draggable={false} />
        <span className="absolute left-4 top-4 rounded-full bg-ink/70 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
          {labelBefore}
        </span>
      </div>
      <div className="absolute inset-y-0 z-10 w-0.5 bg-gold" style={{ left: `${pos}%` }}>
        <motion.div
          className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-gold bg-ink text-gold shadow-lg"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-xs">⟷</span>
        </motion.div>
      </div>
    </div>
  );
}
