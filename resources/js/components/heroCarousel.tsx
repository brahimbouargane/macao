import piple from '@/assets/images/Papil.brown-blur.webp';
import piple2 from '@/assets/images/Papil.N.webp';
import piple4 from '@/assets/images/Papil.Or.webp';
import piple3 from '@/assets/images/Papil.red.webp';

import choko2 from '@/assets/images/black-cookies.webp';
import bluebereies from '@/assets/images/blueberies.webp';
import Carousel1 from '@/assets/images/carousel-1.webp';
import Carousel2 from '@/assets/images/carousel-2.webp';
import Carousel3 from '@/assets/images/carousel-3.webp';
import cherry from '@/assets/images/cherrs.webp';
import cokies from '@/assets/images/cokies.webp';
import cupcake from '@/assets/images/cupcake.webp';
import orange from '@/assets/images/orange.webp';
import cake from '@/assets/images/small-cake.webp';
import strawberry from '@/assets/images/strawbery.webp';
import '../../css/app.css';

import useWindowSize from '@/hooks/useWindowSize';

import { Link } from '@inertiajs/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useMemo, useState } from 'react';

const FloatingImage = ({ image, position, activeItem }) => {
  const getPositionStyles = () => {
    const defaultPositions = {
      'top-left': 'top-28 left-12 md:top-28 md:left-[22rem] lg:top-28 lg:left-[35rem] ',
      'top-right': 'top-24 right-12 md:top-28 md:right-[21rem]  lg:top-28 lg:right-[29rem]  ',
      'bottom-left': 'bottom-40 left-12 md:bottom-[4rem] md:left-[25rem] lg:bottom-[4rem] lg:left-[36rem] ',
      'bottom-right': 'bottom-40 right-12 md:bottom-32 md:right-[25rem] lg:bottom-32 lg:right-[35rem] '
    };

    const item1Positions = {
      'top-left': 'top-28 left-12 md:top-28 md:left-[30rem] lg:top-28 lg:left-[40rem]',
      'top-right': 'top-20 right-12 md:top-28 md:right-[22rem] lg:top-28 lg:right-[34rem]',
      'bottom-left': 'bottom-40 left-12 md:bottom-[6rem] md:left-[35rem] lg:bottom-[6rem] lg:left-[40rem]',
      'bottom-right': 'bottom-40 right-12 md:bottom-32 md:right-[35rem] lg:bottom-32 lg:right-[40rem]'
    };

    return activeItem === 0 ? item1Positions : defaultPositions;
  };

  const positionStyles = getPositionStyles();

  const getRotateValues = () => {
    if (activeItem === 0) {
      return {
        'top-left': -25,
        'top-right': 30,
        'bottom-left': 120,
        'bottom-right': 20
      };
    } else if (activeItem === 1) {
      return {
        'top-left': -25,
        'top-right': 30,
        'bottom-left': 10,
        'bottom-right': 20
      };
    } else if (activeItem === 2) {
      return {
        'top-left': -25,
        'top-right': 60,
        'bottom-left': -120,
        'bottom-right': -20
      };
    }
  };

  ({
    0: {
      'top-left': -25,
      'top-right': 30,
      'bottom-left': 120,
      'bottom-right': 20
    },
    1: {
      'top-left': -25,
      'top-right': 30,
      'bottom-left': 10,
      'bottom-right': 20
    },
    2: {
      'top-left': -25,
      'top-right': 60,
      'bottom-left': -120,
      'bottom-right': -20
    }
  })[activeItem][position];

  const rotateValues = getRotateValues();

  const sizeClasses = {
    'top-left': 'w-28 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 	',
    'top-right': 'w-28 h-48 md:w-64 md:h-64 lg:w-80 lg:h-56',
    'bottom-left': 'w-28 h-48 md:w-64 md:h-64 lg:w-30 lg:h-56 ',
    'bottom-right': 'w-28 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 	'
  };

  const appearAnimation = {
    initial: {
      opacity: 0,
      scale: 0.5
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1, // Delay after main image appears
        duration: 1.2,
        ease: 'easeOut'
      }
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      transition: {
        duration: 0.5,
        ease: 'easeIn'
      }
    }
  };

  // Combine floating and appear animations
  const combinedAnimation = {
    ...appearAnimation.animate,
    y: ['-10px', '10px'],
    rotate: rotateValues[position],
    transition: {
      opacity: {
        delay: 1,
        duration: 1.2
      },
      scale: {
        delay: 1,
        duration: 1.2
      },
      y: {
        delay: 1, // Start floating after appearance
        duration: 4,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut'
      }
    }
  };

  return (
    <motion.div
      className={`absolute ${positionStyles[position]} z-30 `}
      initial={appearAnimation.initial}
      animate={combinedAnimation}
      exit={appearAnimation.exit}
    >
      <img
        src={image}
        alt="Floating product"
        className={`${sizeClasses[position]} object-contain rounded-lg  `}
        style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' }}
      />
    </motion.div>
  );
};

const HeroSlide = () => {
  const [rotate, setRotate] = useState(0);
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState('left');
  const { width } = useWindowSize();
  const radius = useMemo(() => {
    if (width < 450) return 450;
    if (width < 650) return 420;
    if (width < 770) return 410;
    if (width < 850) return 480;
    if (width < 1024) return 230;
    return 280;
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
        textGradient: 'linear-gradient(135deg, #FF69B4 0%, #FFE5EE 50%, #FFC0CB 100%)',
        floatingImages: [cake, cokies, choko2, cupcake],
        page: 'products/Produits%20pâtissiers/chocolats%20pâtissiers'
      },
      {
        id: 2,
        image: Carousel3,
        name: 'CONFISERIE',
        description:
          'Douceurs sucrées comme caramels, nougats et bonbons colorés. Une gamme variée de petits plaisirs pour satisfaire toutes vos envies gourmandes.',
        gradient: 'linear-gradient(135deg, #FF69B4 0%, #800080 50%, #4B0082 100%)',
        textGradient: 'linear-gradient(135deg, #800080 0%, #DA70D6 50%, #FFF0F5 100%)',
        floatingImages: [strawberry, cherry, orange, bluebereies],
        page: 'products/confiserie/sucettes'
      },
      {
        id: 3,
        image: Carousel2,
        name: 'chocolat',
        description:
          'Chocolats gourmands, des truffes aux tablettes, fabriqués avec du cacao premium. Laissez-vous tenter par des saveurs intenses et une texture fondante irrésistible.',
        gradient: 'linear-gradient(135deg, #8B4513 0%, #975C1C 25%, #C19435 50%, #FFD700 100%)',
        textGradient: 'linear-gradient(135deg, #FFD700 0%, #FFF8DC 50%, #FFE4B5 100%)',
        floatingImages: [piple, piple2, piple3, piple4],
        page: 'products/chocolat/pâtes%20à%20tartiner'
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
    const interval = setInterval(nextSlider, 6000);
    return () => clearInterval(interval);
  }, [nextSlider]);

  // Normalize rotation angle
  useEffect(() => {
    const normalizedRotation = ((rotate % 360) + 360) % 360;
    const activeIndex = Math.round(normalizedRotation / rotateAdd) % countItem;
    setActive((countItem - activeIndex) % countItem);
  }, [rotate, countItem, rotateAdd]);
  return (
    <div className="relative h-screen w-full overflow-hidden" role="region" aria-label="Image carousel">
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
              y: { type: 'spring', stiffness: 150, damping: 20 },
              opacity: { duration: 0.4 }
            }}
            className="absolute h-full w-full flex flex-col"
            style={{
              background: items[active].gradient
            }}
          >
            <AnimatePresence mode="wait">
              <FloatingImage
                key={`${active}-top-left`}
                image={items[active].floatingImages[0]}
                position="top-left"
                activeItem={active}
              />
              <FloatingImage
                key={`${active}-top-right`}
                image={items[active].floatingImages[1]}
                position="top-right"
                activeItem={active}
              />
              <FloatingImage
                key={`${active}-bottom-left`}
                image={items[active].floatingImages[2]}
                position="bottom-left"
                activeItem={active}
              />
              <FloatingImage
                key={`${active}-bottom-right`}
                image={items[active].floatingImages[3]}
                position="bottom-right"
                activeItem={active}
              />
            </AnimatePresence>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="w-full flex justify-center pt-32 md:pt-32 lg:pt-32 px-4"
            >
              <h1
                className="z-50  encode-sans lg:tracking-[-1.6rem] mt-10 md:mt-10 lg:mt-[8rem]  2xl:mt-[6rem] text-7xl md:text-8xl lg:text-[20rem] font-bold uppercase leading-none bg-clip-text text-transparent"
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
                duration: 1.6,
                delay: 0.4,
                ease: 'easeOut'
              }}
              className=" md:!w-[360px] !z-50  absolute bottom-[9%] left-[10%]  w-[320px] mt-4 md:mt-0 pointer-events-auto"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-white text-base mb-6   md:text-xl lg:text-xl leading-relaxed  md:mt-20 lg:mt-24 md:mb-8"
              >
                {items[active].description}
              </motion.p>
              <Link
                // initial={{ opacity: 0, y: 20 }}
                // animate={{ opacity: 1, y: 0 }}
                // exit={{ opacity: 0, y: -20 }}
                // transition={{ duration: 0.5, delay: 0.6 }}
                className=" px-8 py-3 mb-6  cursor-pointer  hover:bg-white/30 text-white rounded-full transition-colors duration-300 border border-white/60"
                onClick={() => console.log('Button clicked')}
                style={{
                  background: items[active].gradient
                }}
                href={items[active].page}
              >
                Découvrir
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <div
          className="absolute z-40 bottom-0 left-1/2 w-full md:w-[1000px] lg:w-[1300px] aspect-square rounded-full transition-transform duration-1000 ease-in-out pointer-events-none"
          style={{
            transform: `translate(-50%, ${
              width < 640
                ? '80%'
                : width < 768
                  ? '65%'
                  : width < 1024
                    ? '68%'
                    : width < 1280
                      ? '71%'
                      : width > 2000
                        ? '80%'
                        : '73%'
            }) rotate(${rotate}deg)`
          }}
        >
          {items.map((item, index) => {
            const itemAngle = (360 / countItem) * index;

            return (
              <div
                key={item.id}
                className="absolute w-full h-full text-center origin-center"
                style={{
                  transform: `rotate(${itemAngle}deg) translateY(-${radius}px) `
                }}
              >
                <div
                  className="absolute left-1/2 transform -translate-x-1/2"
                  style={{
                    top: width < 768 ? '-24px' : width < 1024 ? '-104px' : '-104px',
                    // transform: `translateX(-50%)  rotate(0deg)`,
                    transform: `translate(-50%, ${
                      width < 640
                        ? 'translateX(-50%)  rotate(0deg)'
                        : width < 768
                          ? 'translateX(-50%)  rotate(0deg)'
                          : width < 1024
                            ? 'translateX(-50%)  rotate(0deg)'
                            : width < 1280
                              ? 'translateX(-50%)  rotate(0deg)'
                              : width > 1280
                                ? 'translateX(-50%)  rotate(0deg)'
                                : 'translateX(-50%)  rotate(0deg)'
                    }) rotate(${rotate}deg)`,
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
                        ${active === index ? 'h-[30rem] md:h-[30rem] lg:h-[35rem]' : 'h-[16rem] md:h-[16rem] lg:h-[16rem]'}
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
        <div className="absolute bottom-2  lg:bottom-8 left-0 right-0 flex justify-center gap-4 md:gap-8 z-40">
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
