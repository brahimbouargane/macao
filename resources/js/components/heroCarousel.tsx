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

import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from './ui';

const HeroSlide = () => {
  const [rotate, setRotate] = useState(0);
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState('left');
  const [isHovering, setIsHovering] = useState(false);

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

  const getRotateValues = (active, position) => {
    // Base sizes for each active state
    const rotate = {
      0: {
        // First slide
        'top-left': -25,
        'top-right': 30,
        'bottom-left': 120,
        'bottom-right': 20
      },
      1: {
        // Second slide
        'top-left': -25,
        'top-right': 30,
        'bottom-left': 10,
        'bottom-right': 20
      },
      2: {
        // Third slide
        'top-left': -25,
        'top-right': 60,
        'bottom-left': -120,
        'bottom-right': -20
      }
    };

    return rotate[active]?.[position] || 0; // Default size
  };
  const getImageSize = (active, position) => {
    // Base sizes for each active state
    const sizes = {
      0: {
        // First slide
        'top-left': ' w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44',
        'top-right': 'w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44',
        'bottom-left': ' w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40',
        'bottom-right': ' w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44'
      },
      1: {
        // Second slide
        'top-left': 'w-32 h-32 md:w-36 md:h-36 lg:w-44 lg:h-44',
        'top-right': 'w-36 h-36 md:w-36 md:h-36 lg:w-44 lg:h-44',
        'bottom-left': ' w-32 h-32 md:w-36 md:h-36 lg:w-44 lg:h-44',
        'bottom-right': ' w-24 h-24 md:w-36 md:h-36 lg:w-36 lg:h-36'
      },
      2: {
        // Third slide
        'top-left': 'w-32 h-32 md:w-36 md:h-36 lg:w-44 lg:h-44',
        'top-right': 'w-32 h-32 md:w-36 md:h-36 lg:w-52 lg:h-52',
        'bottom-left': ' w-32 h-32 md:w-36 md:h-36 lg:w-44 lg:h-44',
        'bottom-right': ' w-32 h-32 md:w-36 md:h-36 lg:w-44 lg:h-44'
      }
    };

    return sizes[active]?.[position] || 'w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48'; // Default size
  };

  const getPosition = (active, position) => {
    // Custom positions for each active state
    const positions = {
      0: {
        'top-left': '-left-4 -top-20 md:-left-16 md:-top-20',
        'top-right': '-right-2 -top-16 md:-right-8 md:-top-20',
        'bottom-left': '-left-0 -bottom-10 md:-left-0 md:-bottom-20',
        'bottom-right': '-right-0 -bottom-10 md:-right-4 md:-bottom-20'
      },
      1: {
        'top-left': '-left-16 -top-20 md:-left-20 md:-top-24',
        'top-right': '-right-16 -top-20 md:-right-20 md:-top-24',
        'bottom-left': '-left-16 -bottom-16 md:-left-20 md:-bottom-16',
        'bottom-right': '-right-16 -bottom-16 md:-right-20 md:-bottom-20'
      },
      2: {
        'top-left': '-left-16 -top-20 md:-left-24 md:-top-28',
        'top-right': '-right-16 -top-20 md:-right-24 md:-top-28',
        'bottom-left': '-left-16 -bottom-16 md:-left-16 md:-bottom-20',
        'bottom-right': '-right-16 -bottom-16 md:-right-24 md:-bottom-20'
      }
    };

    return positions[active]?.[position] || '-left-16 -top-20'; // Default position
  };

  const getImageContainerClass = (itemId) => {
    if (itemId === 1) {
      return 'w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px]';
    }
    return 'w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px]';
  };
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
    if (!isHovering) {
      //   const interval = setInterval(nextSlider, 6000);
      //   return () => clearInterval(interval);
    }
  }, [nextSlider, isHovering]);
  // Normalize rotation angle
  useEffect(() => {
    const normalizedRotation = ((rotate % 360) + 360) % 360;
    const activeIndex = Math.round(normalizedRotation / rotateAdd) % countItem;
    setActive((countItem - activeIndex) % countItem);
  }, [rotate, countItem, rotateAdd]);
  return (
    <div className="relative h-screen max-w-full overflow-hidden">
      <AnimatePresence initial={false} custom={direction} mode="sync">
        <motion.div
          key={active}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
          style={{
            background: items[active].gradient,
            transformStyle: 'preserve-3d'
          }}
        >
          <div className="relative h-[calc(100vh-6rem)] mt-24">
            {' '}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1.2,
                ease: 'easeOut'
              }}
              className="absolute w-full flex justify-center "
            >
              <motion.h1
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1,
                  ease: 'easeOut'
                }}
                className=" encode-sans lg:tracking-[-1.6rem] mt-10 md:mt-24 text-7xl md:text-[12rem] lg:text-[16rem] font-bold uppercase leading-none bg-clip-text text-transparent  2xl:text-[18rem] 3xl:text-[20rem] lg:max-w-full 3xl:max-w-[98rem]"
                style={{
                  backgroundImage: items[active].textGradient,
                  WebkitBackgroundClip: 'text',
                  filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))'
                }}
              >
                {items[active].name}
              </motion.h1>
            </motion.div>
            <div className="relative w-full h-[80%] z-50 lg:h-full lg:max-w-full 3xl:max-w-[82rem] mx-auto px-4 ">
              <div className="relative w-full h-full flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{
                    duration: 1.2,
                    ease: 'easeInOut',
                    delay: 0.3
                  }}
                  className="absolute left-0 lg:left-10 2xl:left-6 3xl:-left-28 top-[75%] lg:top-[55%] -translate-y-1/2 z-40 w-full  md:max-w-md mt-4 md:mt-0"
                >
                  <div className="flex flex-col mt-8 md:mt-0 md:block  backdrop-blur-md bg-white/10 py-2 px-4 md:p-6 rounded-2xl border border-white/20">
                    <p className="text-white text-center md:text-left text-base md:text-lg lg:text-xl leading-relaxed mb-2 md:mb-6">
                      {items[active].description}
                    </p>
                    <Link
                      href={items[active].page}
                      className="inline-block text-center md:text-left px-8 py-3 text-white rounded-full transition-colors duration-500 border border-white/60 hover:bg-white/30"
                      style={{
                        background: items[active].gradient
                      }}
                    >
                      Découvrir
                    </Link>
                  </div>
                </motion.div>

                <motion.div
                  key={active}
                  style={{
                    perspective: '1000px'
                  }}
                  className="relative z-50 w-full h-full flex items-center justify-center"
                >
                  {/* Fixed size container for main image */}
                  <div className={`relative ${getImageContainerClass(items[active].id)}`}>
                    <motion.div
                      initial={{
                        opacity: 0,
                        scale: 0.8,
                        rotateY: 180,
                        transformStyle: 'preserve-3d'
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        rotateY: 360
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.8,
                        rotateY: 0
                      }}
                      transition={{
                        duration: 1.2,
                        ease: [0.4, 0, 0.2, 1]
                      }}
                      className="w-full h-full"
                    >
                      <motion.div
                        initial={{ clipPath: 'circle(0% at 50% 50%)' }}
                        animate={{ clipPath: 'circle(100% at 50% 50%)' }}
                        exit={{ clipPath: 'circle(0% at 50% 50%)' }}
                        transition={{
                          duration: 1.2,
                          ease: [0.4, 0, 0.2, 1]
                        }}
                        className="w-full h-full"
                      >
                        <img
                          src={items[active].image || '/placeholder.svg'}
                          alt={items[active].name}
                          className="w-full h-full object-contain"
                        />
                      </motion.div>
                    </motion.div>

                    {/* Floating images */}
                    <AnimatePresence mode="wait">
                      {[
                        { position: 'top-left', index: 0 },
                        { position: 'top-right', index: 1 },
                        { position: 'bottom-left', index: 2 },
                        { position: 'bottom-right', index: 3 }
                      ].map(({ position, index }) => (
                        <motion.div
                          key={`${active}-${position}`}
                          className={`absolute ${getPosition(active, position)} ${getImageSize(active, position)}`}
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                            y: ['-10px', '10px'],
                            rotate: getRotateValues(active, position),
                            transition: {
                              opacity: { duration: 1.2, ease: 'easeOut' },
                              scale: { duration: 1.2, ease: 'easeOut' },
                              y: {
                                duration: 3,
                                repeat: Infinity,
                                repeatType: 'reverse',
                                ease: 'easeInOut'
                              }
                            }
                          }}
                          exit={{ opacity: 0, scale: 0.5, transition: { duration: 1 } }}
                        >
                          <img
                            src={items[active].floatingImages[index]}
                            alt="Floating product"
                            className="w-full h-full object-contain rounded-lg"
                            style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' }}
                          />
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div
            className="absolute bottom-2 md:bottom-8 left-0 right-0 flex justify-center gap-4 z-50"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <button
              onClick={prevSlider}
              className="h-12 w-12 rounded-full border border-white/60 bg-white/30 text-xl text-white transition-colors hover:bg-white/40"
              aria-label="Previous slide"
            >
              ‹
            </button>
            <button
              onClick={nextSlider}
              className="h-12 w-12 rounded-full border border-white/60 bg-white/30 text-xl text-white transition-colors hover:bg-white/40"
              aria-label="Next slide"
            >
              ›
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HeroSlide;
