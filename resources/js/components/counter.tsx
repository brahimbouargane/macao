// import statS1 from '@/assets/images/stats-1.png';
// import { motion } from 'framer-motion';
// import { Award, Briefcase, Clock, Users } from 'lucide-react';
// import React, { useEffect, useRef, useState } from 'react';
// import { useInView } from 'react-intersection-observer';

// interface CounterProps {
//   end?: number;
//   duration?: number;
//   suffix?: string;
//   label?: string;
//   icon: React.ReactNode;
// }

// const Counter = ({ end = 0, icon, duration = 2000, suffix = '', label }: CounterProps) => {
//   const [count, setCount] = useState(0);
//   const countRef = useRef(count);
//   const [ref, inView] = useInView({
//     threshold: 0.5,
//     triggerOnce: true
//   });

//   useEffect(() => {
//     if (!inView) return;

//     const startTime = Date.now();
//     const endValue = end;

//     const updateCount = () => {
//       const now = Date.now();
//       const progress = Math.min((now - startTime) / duration, 1);

//       if (progress < 1) {
//         const nextCount = Math.floor(endValue * progress);
//         if (nextCount !== countRef.current) {
//           countRef.current = nextCount;
//           setCount(nextCount);
//         }
//         requestAnimationFrame(updateCount);
//       } else {
//         setCount(endValue);
//       }
//     };

//     requestAnimationFrame(updateCount);
//   }, [end, duration, inView]);

//   return (
//     <div ref={ref} className="bg-white p-6 rounded-lg shadow-lg border border-red-100">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={inView ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 0.5 }}
//         className="flex flex-col items-center space-y-4"
//       >
//         <motion.div
//           initial={{ scale: 0 }}
//           animate={inView ? { scale: 1 } : {}}
//           transition={{ duration: 0.5, delay: 0.1 }}
//           className="flex flex-col items-center justify-center"
//         >
//           <div className="text-5xl font-bold text-red-600">
//             +{count}
//             {suffix}
//           </div>
//         </motion.div>
//         <div className="text-red-800 text-lg font-medium">{label}</div>
//       </motion.div>
//     </div>
//   );
// };

// const StatsDashboard = () => {
//   const stats = [
//     { end: 70, label: "Ans d'expertise", icon: <Users size={24} /> },
//     { end: 20, label: 'Pays', icon: <Briefcase size={24} /> },
//     { end: 2, label: 'Continents', icon: <Award size={24} /> },
//     { end: 300, label: 'Produits', icon: <Clock size={24} /> }
//   ];

//   return (
//     <div className="bg-red-50 p-8 rounded-xl relative min-h-[400px] -mt-24 mx-4 shadow-xl md:p-10">
//       <div className="mt-4">
//         <h2 className="text-center text-2xl md:text-3xl mb-8 md:mb-10 text-red-800 uppercase font-bold">
//           Notre Excellence en Chiffres
//         </h2>
//         <motion.div
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="absolute top-4 right-4 w-16 h-16 rounded-full opacity-50"
//         >
//           <img src={statS1} />
//         </motion.div>
//         <motion.div
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 0.5, delay: 0.3 }}
//           className="absolute bottom-4 left-4 w-20 h-20  rounded-full opacity-70"
//         >
//           <img src={statS1} />
//         </motion.div>

//         {/* Stats grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {stats.map((stat, index) => (
//             <Counter key={index} end={stat.end} label={stat.label} icon={stat.icon} duration={2000} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StatsDashboard;
import bg from '@/assets/images/bg-numbers.png';
import { motion } from 'framer-motion';
import { Award, Briefcase, Clock, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedCounter = ({ end = 0, duration = 2000, ringColor, label }) => {
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
        <div className="absolute -top-2 -right-2 w-10 h-10 lg:w-14 lg:h-14 bg-white rounded-full" />
      </motion.div>
      <span className="text-white text-center font-light">{label}</span>
    </div>
  );
};

const StatsDashboard = () => {
  const metrics = [
    {
      end: 70,
      label: "Ans d'expertise",
      ringColor: 'rgb(200, 190, 175)',
      icon: <Users size={24} />
    },
    {
      end: 20,
      label: 'Pays',
      ringColor: 'rgb(217, 137, 104)',
      icon: <Briefcase size={24} />
    },
    {
      end: 2,
      label: 'Continents',
      ringColor: 'rgb(207, 88, 66)',
      icon: <Award size={24} />
    },
    {
      end: 300,
      label: 'Produits',
      ringColor: 'rgb(226, 124, 104)',
      icon: <Clock size={24} />
    }
  ];

  return (
    <div
      className="relative min-h-[400px] lg:min-h-[450px] flex flex-col rounded-lg items-center justify-center py-16 px-4 -mt-24 mx-4 shadow-xl md:p-10"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl text-white font-light mb-16 text-center"
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
            duration={2000}
          />
        ))}
      </div>
    </div>
  );
};

export default StatsDashboard;
