import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  label: string;
  icon: React.ReactNode;
}

export function Counter({ end, icon, duration = 2000, suffix = '', label }: CounterProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true
  });

  useEffect(() => {
    if (!inView) return;

    const startTime = Date.now();
    const endValue = end;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);

      if (progress < 1) {
        const nextCount = Math.floor(endValue * progress);
        if (nextCount !== countRef.current) {
          countRef.current = nextCount;
          setCount(nextCount);
        }
        requestAnimationFrame(updateCount);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(updateCount);
  }, [end, duration, inView]);

  return (
    <div ref={ref} className="text-center">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center space-y-4"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"
        >
          <div className="text-primary w-6 h-6">{icon}</div>
        </motion.div>
        <div className="text-4xl md:text-5xl font-light text-gray-800">
          {count}
          {suffix}
        </div>
        <div className="text-sm text-gray-600 mt-2">{label}</div>
      </motion.div>
    </div>
  );
}
