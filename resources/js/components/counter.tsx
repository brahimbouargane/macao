import bg from '@/assets/images/bg-numbers.webp';
import { motion } from 'framer-motion';
import { CalendarClock, LucideIcon, Map, MapPin, Package } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface AnimatedCounterProps {
  end?: number;
  duration?: number;
  ringColor: string;
  label: string;
  icon: LucideIcon;
}

interface MetricProps {
  end: number;
  label: string;
  ringColor: string;
  icon: LucideIcon;
}

const AnimatedCounter = ({ end = 0, duration = 2000, ringColor, label, icon: Icon }: AnimatedCounterProps) => {
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
    <div ref={ref} className="flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="relative h-32 w-32 lg:w-40 lg:h-40 mb-4"
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <div
            className="absolute inset-0 rounded-full"
            style={{
              border: `8px solid ${ringColor}`
            }}
          />
          <span className="text-4xl md:text-5xl text-white font-light">+{count}</span>
        </div>
        <div className="absolute -top-2 -right-2 w-10 h-10 lg:w-14 lg:h-14 bg-white rounded-full flex items-center justify-center">
          <Icon className="w-6 h-6 lg:w-8 lg:h-8 text-red-600" />
        </div>
      </motion.div>
      <span className="text-white text-lg text-center font-semibold">{label}</span>
    </div>
  );
};

const StatsDashboard = () => {
  const metrics: MetricProps[] = [
    {
      end: 70,
      label: "Ans d'expertise",
      ringColor: 'rgb(200, 190, 175)',
      icon: CalendarClock
    },
    {
      end: 20,
      label: 'Pays',
      ringColor: 'rgb(217, 137, 104)',
      icon: MapPin
    },
    {
      end: 2,
      label: 'Continents',
      ringColor: 'rgb(207, 88, 66)',
      icon: Map
    },
    {
      end: 300,
      label: 'Produits',
      ringColor: 'rgb(226, 124, 104)',
      icon: Package
    }
  ];

  return (
    <div
      className="relative min-h-[400px] lg:min-h-[450px] flex flex-col rounded-sm items-center justify-center py-16 px-4 -mt-24 mx-4 shadow-xl md:p-10"
      style={{
        backgroundImage: `linear-gradient(rgba(211, 35, 43, 0.7), rgba(0, 0, 0, 0.7)), url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl text-white font-bold mb-16 text-center"
      >
        NOTRE EXCELLENCE EN CHIFFRES
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-20 max-w-7xl mx-auto">
        {metrics.map((metric, index) => (
          <AnimatedCounter
            key={index}
            end={metric.end}
            label={metric.label}
            ringColor={metric.ringColor}
            icon={metric.icon}
            duration={2000}
          />
        ))}
      </div>
    </div>
  );
};

export default StatsDashboard;
