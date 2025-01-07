import Carousel1 from '@/assets/images/carousel-1.png';
import Carousel2 from '@/assets/images/carousel-2.png';
import Carousel3 from '@/assets/images/carousel-3.png';
import piple2 from '@/assets/images/Papil. B.png';
import piple from '@/assets/images/Papil.brown.png';

import useWindowSize from '@/hooks/useWindowSize';

import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useMemo, useState } from 'react';

const FloatingImage = ({ image, position }) => {
  const positionStyles = {
    'top-left': 'top-12 left-12 md:top-28 md:left-[10rem]',
    'top-right': 'top-12 right-12 md:top-28 md:right-[10rem]',
    // 'bottom-left': 'bottom-40 left-12 md:bottom-[4rem] md:left-[36rem]',
    'bottom-right': 'bottom-40 right-12 md:bottom-32 md:right-96'
  };

  const rotateValues = {
    'top-left': -16,
    'top-right': 52,
    'bottom-left': -130,
    'bottom-right': 160
  };

  const floatingAnimation = {
    y: ['-10px', '10px'],
    rotate: rotateValues[position],
    transition: {
      y: {
        duration: 2,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut'
      },
      rotate: {
        duration: 0,
        ease: 'linear'
      }
    }
  };

  return (
    <motion.div className={`absolute ${positionStyles[position]} z-30`} animate={floatingAnimation}>
      <img
        src={image}
        alt="Floating product"
        className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain rounded-lg"
        style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' }}
      />
    </motion.div>
  );
};

const HeroSlide = () => {
  const [rotate, setRotate] = useState(0);
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState('left');
  const [isHovered, setIsHovered] = useState(false);
  const { width } = useWindowSize();
  const radius = useMemo(() => {
    if (width < 450) return 450; // Very small phones
    if (width < 650) return 420; // Small phones
    if (width < 770) return 410; // Small phones
    if (width < 850) return 480; // Large phones
    if (width < 1024) return 230; // Tablets
    return 280; // Desktop
  }, [width]);

  const items = useMemo(
    () => [
      {
        id: 1,
        image: Carousel1,
        name: 'pâtisserie',
        description:
          'Délicieux gâteaux et pâtisseries faits avec soin pour toutes les occasions. Découvrez des créations artisanales qui allient tradition et raffinement pour régaler vos papilles.',
        gradient: 'linear-gradient(135deg, #DC143C 0%, #FF69B4 50%, #FFC0CB 100%)',
        textGradient: 'linear-gradient(135deg, #F8C3CD 0%, #FFE5EE 50%, #FFC0CB 100%)',
        floatingImages: [piple, piple, piple, piple]
      },
      {
        id: 2,
        image: Carousel3,
        name: 'CONFISERIE',
        description:
          'Douceurs sucrées comme caramels, nougats et bonbons colorés. Une gamme variée de petits plaisirs pour satisfaire toutes vos envies gourmandes.',
        gradient: 'linear-gradient(135deg, #FF69B4 0%, #800080 50%, #4B0082 100%)',
        textGradient: 'linear-gradient(135deg, #FFB6C1 0%, #DA70D6 50%, #FFF0F5 100%)',
        floatingImages: [piple2, piple2, piple2, piple2]
      },
      {
        id: 3,
        image: Carousel2,
        name: 'chocolat',
        description:
          'Chocolats gourmands, des truffes aux tablettes, fabriqués avec du cacao premium. Laissez-vous tenter par des saveurs intenses et une texture fondante irrésistible.',
        gradient: 'linear-gradient(135deg, #8B4513 0%, #975C1C 25%, #C19435 50%, #FFD700 100%)',
        textGradient: 'linear-gradient(135deg, #FFD700 0%, #FFF8DC 50%, #FFE4B5 100%)',
        floatingImages: [piple2, piple2, piple2, piple2]
      },
      {
        id: 4,
        image: Carousel1,
        name: 'pâtisserie',
        description:
          'Délicieux gâteaux et pâtisseries faits avec soin pour toutes les occasions. Découvrez des créations artisanales qui allient tradition et raffinement pour régaler vos papilles.',
        gradient: 'linear-gradient(135deg, #DC143C 0%, #FF69B4 50%, #FFC0CB 100%)',
        textGradient: 'linear-gradient(135deg, #F8C3CD 0%, #FFE5E5 50%, #FFC0CB 100%)',
        floatingImages: [piple2, piple2, piple2, piple2]
      },
      {
        id: 5,
        image: Carousel3,
        name: 'CONFISERIE',
        description:
          'Douceurs sucrées comme caramels, nougats et bonbons colorés. Une gamme variée de petits plaisirs pour satisfaire toutes vos envies gourmandes.',
        gradient: 'linear-gradient(135deg, #FF69B4 0%, #800080 50%, #4B0082 100%)',
        textGradient: 'linear-gradient(135deg, #FFB6C1 0%, #DA70D6 50%, #FFF0F5 100%)',
        floatingImages: [piple2, piple2, piple2, piple2]
      },
      {
        id: 6,
        image: Carousel2,
        name: 'chocolat',
        description:
          'Chocolats gourmands, des truffes aux tablettes, fabriqués avec du cacao premium. Laissez-vous tenter par des saveurs intenses et une texture fondante irrésistible.',
        gradient: 'linear-gradient(135deg, #8B4513 0%, #975C1C 25%, #C19435 50%, #FFD700 100%)',
        textGradient: 'linear-gradient(135deg, #FFD700 0%, #FFF8DC 50%, #FFE4B5 100%)',
        floatingImages: [piple2, piple2, piple2, piple2]
      }
    ],
    []
  );

  const countItem = items.length;
  const rotateAdd = 360 / countItem;

  const slideVariants = useMemo(
    () => ({
      enter: (direction) => ({
        y: direction === 'right' ? -50 : 50,
        opacity: 0
      }),
      center: {
        zIndex: 1,
        y: 0,
        opacity: 1
      },
      exit: (direction) => ({
        zIndex: 0,
        y: direction === 'right' ? 50 : -50,
        opacity: 0
      })
    }),
    []
  );

  // Memoized navigation functions
  const nextSlider = useCallback(() => {
    setDirection('left');
    setActive((prev) => (prev + 1) % items.length);
    setRotate((prev) => prev + rotateAdd);
  }, [items.length, rotateAdd]);

  const prevSlider = useCallback(() => {
    setDirection('right');
    setActive((prev) => (prev - 1 + items.length) % items.length);
    setRotate((prev) => prev - rotateAdd);
  }, [items.length, rotateAdd]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') prevSlider();
      if (e.key === 'ArrowRight') nextSlider();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [nextSlider, prevSlider]);

  // Auto-rotation effect
  useEffect(() => {
    if (isHovered) return;

    // const interval = setInterval(nextSlider, 2000);
    // return () => clearInterval(interval);
  }, [isHovered, nextSlider]);

  // Normalize rotation angle
  useEffect(() => {
    const normalizedRotation = ((rotate % 360) + 360) % 360;
    const activeIndex = Math.round(normalizedRotation / rotateAdd) % countItem;
    setActive((countItem - activeIndex) % countItem);
  }, [rotate, countItem, rotateAdd]);
  return (
    <div
      className="relative h-screen w-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="region"
      aria-label="Image carousel"
    >
      <div className="relative h-full w-full">
        <AnimatePresence initial={false} custom={direction} mode="sync">
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
            style={{
              background: items[active].gradient
            }}
          >
            <AnimatePresence mode="wait">
              <FloatingImage key={`${active}-top-left`} image={items[active].floatingImages[0]} position="top-left" />
              <FloatingImage key={`${active}-top-right`} image={items[active].floatingImages[1]} position="top-right" />
              {/* <FloatingImage
                key={`${active}-bottom-left`}
                image={items[active].floatingImages[2]}
                position="bottom-left"
              /> */}
              <FloatingImage
                key={`${active}-bottom-right`}
                image={items[active].floatingImages[3]}
                position="bottom-right"
              />
            </AnimatePresence>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full flex justify-center pt-32 md:pt-32 lg:pt-32 px-4"
            >
              <h1
                className="z-50 mt-10 md:mt-10 lg:mt-[8rem] text-7xl md:text-8xl lg:text-[10rem] font-bold uppercase leading-none bg-clip-text text-transparent"
                style={{
                  backgroundImage: items[active].textGradient,
                  WebkitBackgroundClip: 'text',
                  filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))'
                }}
              >
                {items[active].name}
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: 'easeOut'
              }}
              className="!w-[410px] !z-50  absolute top-[38%] left-[19%]  md:w-1/2 mt-4 md:mt-0 pointer-events-auto"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-white text-base  md:text-xl lg:text-xl leading-relaxed mt-16 md:mt-20 lg:mt-24 mb-8"
              >
                {items[active].description}
              </motion.p>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className=" px-8 py-3 bg-red-500 cursor-pointer  hover:bg-white/30 text-white rounded-full transition-colors duration-300 border border-white/60"
                onClick={() => console.log('Button clicked')}
              >
                Découvrir
              </motion.button>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <div
          //   className="absolute z-40 bottom-0 left-1/2 w-full md:w-[1000px] lg:w-[1300px] aspect-square rounded-full transition-transform duration-1000 ease-in-out"
          className="absolute z-40 bottom-0 left-1/2 w-full md:w-[1000px] lg:w-[1300px] aspect-square rounded-full transition-transform duration-1000 ease-in-out pointer-events-none"
          style={{
            transform: `translate(-50%, ${width < 768 ? '80%' : '71%'}) rotate(${rotate}deg)`
          }}
        >
          {items.map((item, index) => {
            const itemAngle = (360 / countItem) * index;

            return (
              <div
                key={item.id}
                className="absolute w-full h-full text-center origin-center"
                style={{
                  transform: `rotate(${itemAngle}deg) translateY(-${radius}px)`
                }}
              >
                <div
                  className="absolute left-1/2 transform -translate-x-1/2"
                  style={{
                    top: width < 768 ? '-24px' : width < 1024 ? '-24px' : '-24px',
                    transform: `translateX(-50%)  rotate(0deg)`,
                    opacity: active === index ? 1 : 0.4,
                    transition: 'all 0.8s ease-in-out'
                  }}
                >
                  <picture>
                    {/* <source media="(min-width: 768px)" srcSet={item.image} /> */}
                    <img
                      src={item.image}
                      alt={item.name}
                      className={`
                        transition-all duration-1000
                        ${
                          active === index
                            ? 'h-[30rem] md:h-[30rem] lg:h-[30rem]'
                            : 'h-[16rem] md:h-[16rem] lg:h-[16rem]'
                        }
                        object-contain
                      `}
                      loading="lazy"
                    />
                  </picture>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-4 md:gap-8 z-40">
          <button
            onClick={prevSlider}
            className="h-10 w-10 md:h-12 md:w-12 rounded-full border border-white/60 bg-white/30 text-xl text-white transition-colors hover:bg-white/40 focus:outline-none focus:ring-2 focus:ring-white/60"
            aria-label="Previous slide"
          >
            &#8249;
          </button>
          <button
            onClick={nextSlider}
            className="h-10 w-10 md:h-12 md:w-12 rounded-full border border-white/60 bg-white/30 text-xl text-white transition-colors hover:bg-white/40 focus:outline-none focus:ring-2 focus:ring-white/60"
            aria-label="Next slide"
          >
            &#8250;
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
