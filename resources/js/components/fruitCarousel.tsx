import Avocado from '@/assets/images/fruit_avocado.png';
import Orange from '@/assets/images/fruit_orange.png';
import Strawberry from '@/assets/images/fruit_strawberry.png';
import ListSoda from '@/assets/images/listSoda.jpg';
import Mockup from '@/assets/images/mockup.png';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Types
interface FruitSlide {
  id: number;
  name: string;
  background: string;
  image: string;
}

const slides: FruitSlide[] = [
  {
    id: 1,
    name: 'Strawberry',
    background: '#EA3D41',
    image: Strawberry
  },
  {
    id: 2,
    name: 'Avocado',
    background: '#2D5643',
    image: Avocado
  },
  {
    id: 3,
    name: 'Orange',
    background: '#E7A043',
    image: Orange
  }
];

export default function FruitCarousel() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState('left');
  const [leftMockup, setLeftMockup] = useState(0);

  const slideVariants = {
    enter: (direction: string) => ({
      y: direction === 'right' ? -100 : 100,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1
    },
    exit: (direction: string) => ({
      zIndex: 0,
      y: direction === 'right' ? 100 : -100,
      opacity: 0
    })
  };

  const leftValues = [0, 50, 100]; // Fixed positions for each slide

  const handleNext = () => {
    setDirection('left');
    setActive((prev) => {
      const newActive = prev >= slides.length - 1 ? 0 : prev + 1;
      // Set leftMockup based on the new active index
      setLeftMockup(leftValues[newActive]);
      return newActive;
    });
  };

  const handlePrev = () => {
    setDirection('right');
    setActive((prev) => {
      const newActive = prev <= 0 ? slides.length - 1 : prev - 1;
      // Set leftMockup based on the new active index
      setLeftMockup(leftValues[newActive]);
      return newActive;
    });
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative  h-screen w-full overflow-hidden">
      <div className="relative h-full w-full">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={active}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              y: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute h-full w-full flex flex-col"
            style={{ backgroundColor: slides[active].background }}
          >
            {/* Text Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full flex justify-center pt-32"
            >
              <h1 className="text-[4rem] lg:text-[8rem] font-bold text-white/90 uppercase leading-none">
                {slides[active].name}
              </h1>
            </motion.div>

            {/* Image Container */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 20,
                delay: 0.2
              }}
              className="flex-1 relative"
            >
              <img
                src={slides[active].image}
                alt={slides[active].name}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] pointer-events-none object-contain"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Mockup with product display */}
        <div
          className="absolute z-[5] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: 'calc(371px / 1.5)',
            height: 'calc(673px / 1.5)',
            backgroundImage: `url(${Mockup}), url(${ListSoda})`,
            backgroundPosition: `0 0, ${leftMockup}% 0`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'auto 100%',
            backgroundBlendMode: 'multiply',
            WebkitMaskImage: `url(${Mockup})`,
            WebkitMaskRepeat: 'no-repeat',
            WebkitMaskSize: 'auto 100%',
            transition: 'background-position 0.5s'
          }}
        />

        {/* Shadow effect */}
        <div
          className="absolute z-50"
          style={{
            width: 'calc(371px / 1.5)',
            height: '100px',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            borderRadius: '50%',
            filter: 'blur(20px)',
            top: 'calc(50% + 200px)',
            left: '50%',
            transform: 'translateX(-50%)'
          }}
        />

        {/* Navigation buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-5 top-1/2 z-10 h-12 w-12 -translate-y-1/2 rounded-full border border-white/60 bg-white/30 text-xl text-white transition-colors hover:bg-white/40"
        >
          &#8249;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-5 top-1/2 z-10 h-12 w-12 -translate-y-1/2 rounded-full border border-white/60 bg-white/30 text-xl text-white transition-colors hover:bg-white/40"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
}
