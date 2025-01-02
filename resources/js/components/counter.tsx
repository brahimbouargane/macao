import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  label: string;
}

export function Counter({ end, duration = 2000, suffix = '', label }: CounterProps) {
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
      <div className="text-4xl md:text-5xl font-light text-gray-800">
        {count}
        {suffix}
      </div>
      <div className="text-sm text-gray-600 mt-2">{label}</div>
    </div>
  );
}
