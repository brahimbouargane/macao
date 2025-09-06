import piple4 from '@/assets/images/Papil. B.webp';
import piple1 from '@/assets/images/Papil.brown.webp';
import piple2 from '@/assets/images/Papil.N.webp';
import piple3 from '@/assets/images/Papil.red.webp';

import choko2 from '@/assets/images/black-cookies.webp';
import bluebereies from '@/assets/images/blueberies.webp';
import Carousel1 from '@/assets/images/carousel-1.png';
import Carousel2 from '@/assets/images/carousel-2.png';
import Carousel3 from '@/assets/images/carousel-3.png';
import cherry from '@/assets/images/cherrs.webp';
import cokies from '@/assets/images/cokies.webp';
import cupcake from '@/assets/images/cupcake.webp';
import orange from '@/assets/images/orange.webp';
import cake from '@/assets/images/small-cake.webp';
import strawberry from '@/assets/images/strawbery.webp';
import '../../css/app.css';

// Import background images
import { default as bgChocolat } from '@/assets/images/bg-slide.png';

import '../../css/app.css';

import { Link } from '@inertiajs/react';
import { AnimatePresence, motion } from 'framer-motion';
import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Button } from './ui/shadcn-button';

const FloatingImage = memo(
  ({ position, index, active, image, getPosition, getImageSize, getRotateValues, direction }: any) => {
    // Create unique bounce paths for each position - with much more dramatic bounces
    const getBouncePathByPosition = () => {
      switch (position) {
        case 'top-left':
          return [0, -65, 45, -30, 20, -10, 5, 0]; // Much more dramatic left-right bounce
        case 'top-right':
          return [0, 70, -50, 35, -20, 10, -5, 0]; // Opposite direction, very dramatic
        case 'bottom-left':
          return [0, -55, 75, -45, 25, -15, 5, 0]; // Another dramatic variation
        case 'bottom-right':
          return [0, 60, -80, 50, -30, 15, -8, 0]; // Most extreme bounce pattern
        default:
          return [0, 40, -30, 20, -10, 5, 0]; // Default dramatic bounce path
      }
    };

    // Get custom delay for each position for staggered effect
    const getCustomDelay = () => {
      const baseDelay = 0.3; // Base delay after title and description start animating
      // Stagger the floating images
      switch (position) {
        case 'top-left':
          return baseDelay;
        case 'top-right':
          return baseDelay + 0.1;
        case 'bottom-left':
          return baseDelay + 0.2;
        case 'bottom-right':
          return baseDelay + 0.3;
        default:
          return baseDelay;
      }
    };

    return (
      <motion.div
        key={`${active}-${position}`}
        className={`absolute ${getPosition(active, position)} ${getImageSize(active, position)}`}
        initial={{
          opacity: 0,
          scale: 0.7,
          x: direction === 'next' ? (position.includes('right') ? 100 : -100) : position.includes('right') ? -100 : 100, // Direction-aware offset
          y: position.includes('top') ? -40 : 40
        }}
        animate={{
          opacity: 1,
          scale: 1,
          x: getBouncePathByPosition(), // Apply custom bounce path
          y: [position.includes('top') ? -10 : 10, position.includes('top') ? 10 : -10], // Vertical float
          rotate: getRotateValues(active, position),
          transition: {
            opacity: { duration: 0.7, ease: 'easeOut', delay: getCustomDelay() },
            scale: { duration: 0.8, ease: 'easeOut', delay: getCustomDelay() },
            x: {
              duration: 2.2, // Even longer duration for most dramatic effect
              times:
                position === 'bottom-right'
                  ? [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1] // For most complex bounce
                  : [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1], // All use the same complex timing now
              ease: 'easeOut',
              delay: getCustomDelay()
            },
            y: {
              duration: 4,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
              delay: getCustomDelay() + index * 0.2
            },
            rotate: {
              duration: 0.8,
              ease: 'easeOut',
              delay: getCustomDelay()
            }
          }
        }}
        exit={{
          opacity: 0,
          scale: 0.8,
          x: direction === 'next' ? (position.includes('right') ? -100 : 100) : position.includes('right') ? 100 : -100,
          y: position.includes('top') ? -40 : 40,
          transition: {
            duration: 0.5,
            delay: 0.05 * (4 - index) // Staggered exit
          }
        }}
      >
        <img
          src={image}
          alt="Floating product"
          className="w-full h-full object-contain rounded-sm"
          style={{
            filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))',
            transition: 'filter 0.3s ease'
          }}
          loading="lazy"
        />
      </motion.div>
    );
  }
);

const MainImage = memo(({ image, name, direction }: any) => (
  <motion.div
    initial={{
      opacity: 0,
      x: direction === 'next' ? 150 : -150, // Start further out
      scale: 0.95
    }}
    animate={{
      opacity: 1,
      x: [0, -50, 35, -25, 15, -8, 0], // More dramatic bounce path with larger values
      scale: 1,
      transition: {
        opacity: { duration: 0.7, ease: 'easeOut' },
        x: {
          duration: 1.8, // Even longer duration for more visible bounce
          times: [0, 0.25, 0.45, 0.65, 0.8, 0.9, 1], // Well-distributed bounce points
          ease: 'easeOut',
          delay: 0.1 // Small delay compared to title
        },
        scale: { duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }
      }
    }}
    exit={{
      opacity: 0,
      x: direction === 'next' ? -80 : 80,
      scale: 0.95,
      transition: {
        duration: 0.6,
        ease: 'easeInOut'
      }
    }}
    className="w-full h-full"
  >
    <motion.div className="w-full h-full lg:h-[400px] 2xl:h-[500px] 3xl:h-[550px]">
      <motion.img
        src={image || '/placeholder.svg'}
        alt={name}
        className="w-full h-full object-contain"
        style={{ filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.12))' }}
        initial={{ scale: 1 }}
        animate={{
          scale: [1, 1.02, 1],
          transition: {
            duration: 6,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }
        }}
        loading="lazy"
      />
    </motion.div>
  </motion.div>
));

const headingVariants = {
  initial: (direction) => ({
    opacity: 0,
    x: direction === 'next' ? 200 : -200, // Start even further for more dramatic bounce
    y: 20,
    filter: 'blur(8px)'
  }),
  animate: {
    opacity: 1,
    x: [0, 40, -30, 20, -10, 5, 0], // More oscillations with larger values
    y: 0,
    filter: 'blur(0px)',
    transition: {
      x: {
        duration: 1.6, // Longer duration for more visible bounce
        times: [0, 0.2, 0.4, 0.6, 0.75, 0.9, 1], // More control points for bounce
        ease: 'easeOut'
      },
      opacity: { duration: 0.5, ease: 'easeOut' },
      filter: { duration: 0.5, ease: 'easeOut' },
      y: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
    }
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction === 'next' ? -120 : 120,
    y: -20,
    filter: 'blur(8px)',
    transition: {
      duration: 0.6,
      ease: 'easeInOut'
    }
  })
};

const PulsingButton = ({ onClick, children, ...props }) => {
  const [isActive, setIsActive] = useState(false);

  // Add animation styles
  useEffect(() => {
    const styleEl = document.createElement('style');
    styleEl.textContent = `
      @keyframes ping-slow {
        0% {
          transform: scale(1);
          opacity: 0.4;
        }
        50% {
          transform: scale(1.5);
          opacity: 0.2;
        }
        100% {
          transform: scale(2);
          opacity: 0;
        }
      }

      @keyframes ping-delayed {
        0% {
          transform: scale(1);
          opacity: 0.5;
        }
        70% {
          transform: scale(1.3);
          opacity: 0.3;
        }
        100% {
          transform: scale(1.7);
          opacity: 0;
        }
      }

      .animate-ping-slow {
        animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
      }

      .animate-ping-delayed {
        animation: ping-delayed 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        animation-delay: 0.3s;
      }
    `;
    document.head.appendChild(styleEl);

    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);

  return (
    <button
      onClick={(e) => {
        setIsActive(true);
        setTimeout(() => setIsActive(false), 1000);
        onClick && onClick(e);
      }}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      className="relative focus:outline-none pointer-events-auto"
      {...props}
    >
      {/* Container for all elements - important for proper positioning */}
      <div className="relative w-16 h-16">
        {/* Fixed: Animation layers now properly centered and visible */}
        {/* The key fix is using inset-0 instead of left/top + translate */}

        {/* Outermost pulsing circle */}
        <div
          className={`absolute inset-0 m-auto rounded-full
                     bg-rose-200/30 animate-ping-slow
                     transition-opacity duration-300 ${isActive ? 'opacity-40' : 'opacity-0'}`}
        ></div>

        {/* Middle pulsing circle with delay */}
        <div
          className={`absolute inset-0 m-auto w-12 h-12 rounded-full
                     bg-rose-300/40 animate-ping-delayed
                     transition-opacity duration-300 ${isActive ? 'opacity-50' : 'opacity-0'}`}
        ></div>

        {/* Base button with gradient */}
        <div
          className={`absolute inset-0 w-16 h-16 rounded-full
                     bg-gradient-to-r from-rose-300/80 via-rose-400/80 to-rose-300/80
                     flex items-center justify-center z-10
                     transition-all duration-300 ${isActive ? 'scale-110' : ''}`}
        >
          {/* Middle circle */}
          <div
            className={`w-12 h-12 rounded-full
                       bg-gradient-to-br from-rose-500/90 to-red-500/90
                       transition-all duration-300 flex items-center justify-center ${isActive ? 'scale-110' : ''}`}
          >
            {/* Inner circle with content */}
            <div
              className={`w-8 h-8 rounded-full
                         bg-[#AA071A]
                         transition-all duration-300 flex items-center justify-center ${isActive ? 'scale-110' : ''}`}
            >
              <span className="text-white text-xl">{children}</span>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

const NavigationButtons = memo(({ onPrev, onNext, onHoverChange, active, total }: any) => (
  <div className="absolute top-0 bottom-0 left-0 right-0 z-50 pointer-events-none">
    {/* Navigation buttons */}
    <div
      className="h-full w-full flex items-center justify-between px-6 md:px-10"
      onMouseEnter={() => onHoverChange(true)}
      onMouseLeave={() => onHoverChange(false)}
    >
      <PulsingButton onClick={() => onPrev(1)} aria-label="Previous slide">
        ‹
      </PulsingButton>

      <PulsingButton onClick={() => onNext(1)} aria-label="Next slide">
        ›
      </PulsingButton>
    </div>
  </div>
));

const BackgroundImage = ({ src, active, isCurrentSlide, overlayColor, direction }) => (
  <motion.div
    className="absolute inset-0 w-full h-full z-1 overflow-hidden"
    initial={{
      opacity: 0
      //   scale: 1.05
    }}
    animate={{
      opacity: isCurrentSlide ? 1 : 0,
      transition: {
        opacity: { duration: 0.8 }
      }
    }}
    exit={{
      opacity: 0
    }}
  >
    {/* Key prop ensures animation reruns for each slide */}
    {isCurrentSlide && (
      <motion.div
        key={`bg-container-${active}`}
        className="absolute inset-0 overflow-hidden"
        // Oversized container to prevent edge visibility during extreme rotations
        style={{ width: '140%', height: '140%', top: '-20%', left: '-20%' }}
        // Initial scale depends on slide direction - slightly larger when coming from next, smaller from previous
        initial={{
          scale: direction === 'next' ? 1.15 : 0.9
        }}
        // Animate to normal scale with custom easing for smooth, slightly bouncy feel
        animate={{
          scale: 1,
          transition: {
            scale: { duration: 2, ease: [0.22, 1, 0.36, 1] } // Custom cubic bezier curve
          }
        }}
        // Exit animation reverses the initial scale based on direction
        exit={{
          scale: direction === 'next' ? 0.9 : 1.15,
          transition: {
            scale: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } // Material design easing
          }
        }}
      >
        <motion.div
          className="w-full h-full overflow-hidden"
          // Initial transform sets up dramatic starting position
          initial={{
            rotate: direction === 'next' ? 18 : -18, // Strong initial rotation
            x: direction === 'next' ? 80 : -80, // Significant horizontal offset
            y: 30 // Vertical offset creates dynamic entry
          }}
          // Complex animation with multiple keyframes for dramatic, bouncy movement
          animate={{
            // Rotation sequence: starts with extreme angle, bounces through opposite direction, gradually settles
            rotate: [
              direction === 'next' ? 20 : -40, // Initial rotation
              direction === 'next' ? -20 : 90, // First bounce (opposite direction)
              direction === 'next' ? 20 : -90, // Second bounce (back to original direction)
              0 // Settled position
            ],
            // Horizontal movement follows similar pattern to rotation
            x: [
              direction === 'next' ? 80 : -80, // Initial x-offset
              direction === 'next' ? -60 : 60, // First bounce
              direction === 'next' ? 40 : -40, // Second bounce
              direction === 'next' ? -25 : 25, // Third bounce
              direction === 'next' ? 10 : -10, // Final small bounce
              0 // Settled position
            ],
            // Vertical movement gradually decreases without direction changes
            y: [40, 30, 20, 10, 4, 0], // Gradually settling from high to centered
            transition: {
              duration: 2, // Longer duration for more visible effect
              times: [0, 0.2, 0.4, 0.6, 0.8, 1], // Timing distribution for keyframes
              ease: [0.76, 0, 0.24, 1] // Custom easing for amplified motion feel
            }
          }}
          // Exit animation creates smooth transition to next slide
          exit={{
            rotate: direction === 'next' ? -12 : 12, // Rotate opposite to entrance direction
            x: direction === 'next' ? -70 : 70, // Move opposite to entrance direction
            y: 15, // Slight vertical lift on exit
            transition: {
              duration: 0.8, // Quicker exit than entrance
              ease: 'easeOut' // Standard ease out for natural motion
            }
          }}
        >
          <motion.img
            src={src}
            alt="Background"
            className="w-full h-full object-cover"
            // Image starts slightly darker and less saturated
            initial={{ filter: 'brightness(0.8) saturate(0.85)' }}
            // Image brightens and becomes more vibrant as animation completes
            animate={{
              filter: 'brightness(1) saturate(1.05)', // Slightly oversaturated for visual impact
              transition: { duration: 1.4 } // Slightly slower than position changes
            }}
            // Image returns to darker state when exiting
            exit={{
              filter: 'brightness(0.8) saturate(0.85)',
              transition: { duration: 0.6 } // Quick fade-out effect
            }}
          />
        </motion.div>
      </motion.div>
    )}

    {/* Non-animated fallback for non-current slides */}
    {!isCurrentSlide && <img src={src} alt="Background" className="w-full h-full object-cover" />}

    <div
      className="absolute inset-0"
      style={{
        backgroundColor: overlayColor,
        mixBlendMode: 'overlay'
      }}
    />
  </motion.div>
);

const HeroSlide = () => {
  const [rotate, setRotate] = useState(0);
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState('next');
  const [isHovering, setIsHovering] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);
  const items = useMemo(
    () => [
      {
        id: 1,
        image: Carousel1,
        bgImage: bgChocolat,
        overlayColor: '#b02c26',
        name: 'pâtisserie',
        description:
          'Délicieux gâteaux et pâtisseries faits avec soin pour toutes les occasions. Découvrez des créations artisanales qui allient tradition et raffinement pour régaler vos papilles.',
        gradient:
          'linear-gradient(135deg, rgba(139, 30, 63, 0.85) 0%, rgba(178, 56, 80, 0.75) 50%, rgba(232, 223, 224, 0.65) 100%)',
        textGradient: 'linear-gradient(135deg, #340503 0%, #340503 100%)',
        floatingImages: [cake, cokies, choko2, cupcake],
        page: 'products/Produits%20pâtissiers/chocolats%20pâtissiers'
      },
      {
        id: 2,
        image: Carousel3,
        bgImage: bgChocolat,
        overlayColor: '#6a8f3b',
        name: 'CONFISERIE',
        description:
          'Douceurs sucrées comme caramels, nougats et bonbons colorés. Une gamme variée de petits plaisirs pour satisfaire toutes vos envies gourmandes.',
        gradient: 'linear-gradient(135deg, #D4AF37 0%, #D4AF37 50%, #D4AF37 100%)',
        textGradient: 'linear-gradient(135deg, #141E07 0%, #141E07 100%)',
        floatingImages: [cherry, orange, bluebereies, strawberry],
        page: 'products/confiserie/sucettes'
      },
      {
        id: 3,
        image: Carousel2,
        bgImage: bgChocolat,
        overlayColor: '#602e2c',
        name: 'chocolat',
        description:
          'Chocolats gourmands, des truffes aux tablettes, fabriqués avec du cacao premium. Laissez-vous tenter par des saveurs intenses et une texture fondante irrésistible.',
        gradient:
          'linear-gradient(135deg, rgba(62, 39, 35, 0.85) 0%, rgba(93, 64, 55, 0.75) 50%, rgba(141, 110, 99, 0.65) 100%)',
        textGradient: 'linear-gradient(135deg, #1E0807 0%, #1E0807 100%)',
        floatingImages: [piple2, piple1, piple4, piple3],
        page: 'products/chocolat/pâtes%20à%20tartiner'
      }
    ],
    []
  );

  const countItem = items.length;
  const rotateAdd = 120; // 360 degrees divided by 3 items = 120 degrees per item

  const slideVariants = useMemo(
    () => ({
      enter: (direction) => ({
        opacity: 0,
        x: direction === 'next' ? '130%' : '-130%',
        transition: {
          opacity: { duration: 0.6, ease: [0.645, 0.045, 0.355, 1.0] },
          x: { duration: 0.8, ease: [0.645, 0.045, 0.355, 1.0] }
        }
      }),
      center: {
        zIndex: 1,
        opacity: 1,
        x: 0,
        transition: {
          opacity: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] },
          x: {
            duration: 0.9,
            type: 'spring',
            stiffness: 80,
            damping: 10,
            bounce: 0.5
          }
        }
      },
      exit: (direction) => ({
        zIndex: 0,
        opacity: 0,
        x: direction === 'next' ? '-70%' : '70%',
        transition: {
          opacity: { duration: 0.7, ease: [0.215, 0.61, 0.355, 1] },
          x: {
            duration: 0.7,
            ease: [0.215, 0.61, 0.355, 1]
          }
        }
      })
    }),
    []
  );
  const getRotateValues = useCallback((active, position) => {
    const rotate = {
      0: {
        'top-left': 25,
        'top-right': 30,
        'bottom-left': -50,
        'bottom-right': -30
      },
      1: {
        'top-left': -50,
        'top-right': -120,
        'bottom-left': 10,
        'bottom-right': -10
      },
      2: {
        'top-left': -40,
        'top-right': 60,
        'bottom-left': -120,
        'bottom-right': -40
      }
    };
    return rotate[active]?.[position] || 0;
  }, []);

  const getImageSize = useCallback((active, position) => {
    // Base sizes for each active state
    const sizes = {
      0: {
        // First slide
        'top-left': 'w-28 h-28 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-40 xl:h-40 2xl:w-36 2xl:h-36',
        'top-right': 'w-32 h-32 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 2xl:w-40 2xl:h-40',
        'bottom-left': 'w-32 h-32 md:w-32 md:h-32 lg:w-32 lg:h-32 xl:w-36 xl:h-36 2xl:w-32 2xl:h-32',
        'bottom-right': 'w-32 h-32 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 2xl:w-48 2xl:h-48'
      },
      1: {
        // Second slide
        'top-left': 'w-28 h-28 md:w-48 md:h-48 lg:w-48 lg:h-48 xl:w-48 xl:h-48 2xl:w-48 2xl:h-48',
        'top-right': 'w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-40 xl:h-40 2xl:w-40 2xl:h-40',
        'bottom-left': 'w-28 h-28 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-32 xl:h-32 2xl:w-32 2xl:h-32',
        'bottom-right': 'w-32 h-32 md:w-32 md:h-32 lg:w-32 lg:h-32 xl:w-52 xl:h-52 2xl:w-60 2xl:h-60'
      },
      2: {
        // Third slide
        'top-left': 'w-24 h-24 md:w-24 md:h-24 lg:w-40 lg:h-40 xl:w-40 xl:h-40 2xl:w-40 2xl:h-40',
        'top-right': 'w-24 h-24 md:w-24 md:h-24 lg:w-40 lg:h-40 xl:w-44 xl:h-44 2xl:w-44 2xl:h-44',
        'bottom-left': 'w-16 h-16 md:w-20 md:h-20 lg:w-32 lg:h-32 xl:w-44 xl:h-44 2xl:w-40 2xl:h-40',
        'bottom-right': 'w-24 h-24 md:w-24 md:h-24 lg:w-40 lg:h-40 xl:w-52 xl:h-52 2xl:w-52 2xl:h-52'
      }
    };

    return sizes[active]?.[position] || 'w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48'; // Default size
  }, []);

  const getPosition = useCallback((active, position) => {
    // Custom positions for each active state
    const positions = {
      0: {
        'top-left': '-left-4 -top-20 md:-left-12 md:-top-16  lg:-left-0 lg:-top-24 2xl:-left-60 2xl:-top-0',
        'top-right': '  -right-4 -top-20 md:-right-12 md:-top-16 lg:-right-0 lg:-top-24  2xl:-right-52 2xl:-top-0',
        'bottom-left':
          ' -left-0 -bottom-24 md:-left-4 md:-bottom-20 lg:-left-0 lg:-bottom-0 2xl:-left-36 2xl:-bottom-44',
        'bottom-right':
          '-right-0 -bottom-24 md:-right-4 md:-bottom-20 lg:-right-0 lg:-bottom-0 2xl:-right-36 2xl:-bottom-44'
      },
      1: {
        'top-left': '-left-16 -top-20 md:-left-20 md:-top-24 lg:-left-0 lg:-top-24 2xl:-left-52 2xl:top-0',
        'top-right': ' -right-16 -top-20 md:-right-20 md:-top-24 lg:-right-0 lg:-top-24  2xl:-right-48 2xl:-top-0',
        'bottom-left':
          ' -left-16 -bottom-24 md:-left-20 md:-bottom-20 lg:-left-0 lg:-bottom-0 2xl:-left-36 2xl:-bottom-44',
        'bottom-right':
          ' -right-16 -bottom-24 md:-right-20 md:-bottom-20 lg:-right-0 lg:-bottom-0 2xl:-right-56 2xl:-bottom-44'
      },
      2: {
        'top-left': '-left-16 -top-20 md:-left-24 md:-top-28 lg:-left-0 lg:-top-24 2xl:-left-52 2xl:-top-4',
        'top-right': ' -right-16 -top-20 md:-right-24 md:-top-28 lg:-right-0 lg:-top-24 2xl:-right-64 2xl:-top-0',
        'bottom-left':
          ' -left-16 -bottom-24 md:-left-24 md:-bottom-20 lg:-left-0 lg:-bottom-0 2xl:-left-36 2xl:-bottom-48',
        'bottom-right':
          '-right-16 -bottom-24 md:-right-24 md:-bottom-20 lg:-right-0 lg:-bottom-0 2xl:-right-48 2xl:-bottom-32'
      }
    };

    return positions[active]?.[position] || '-left-16 -top-20'; // Default position
  }, []);

  const getImageContainerClass = useCallback((itemId) => {
    if (itemId === 1) {
      return 'w-[350px] h-[350px] md:w-[450px] md:h-[450px] lg:w-[370px] lg:h-[370px] md:top-[-20px] lg:top-[-100px]';
    }
    return 'w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[400px] lg:h-[400px] md:top-[-20px] lg:top-[-100px]';
  }, []);

  // Memoized navigation functions
  const nextSlider = useCallback(() => {
    setDirection('next');
    setActive((prev) => (prev + 1) % items.length);
  }, [items.length]);

  const prevSlider = useCallback(() => {
    setDirection('prev');
    setActive((prev) => (prev - 1 + items.length) % items.length);
  }, [items.length]);

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
      const interval = setInterval(nextSlider, 5000);
      return () => clearInterval(interval);
    }
  }, [nextSlider, isHovering]);

  // Normalize rotation angle
  useEffect(() => {
    const normalizedRotation = ((rotate % 360) + 360) % 360;
    const activeIndex = Math.round(normalizedRotation / rotateAdd) % countItem;
    setActive((countItem - activeIndex) % countItem);
  }, [rotate, countItem, rotateAdd]);

  const descriptionVariants = {
    initial: (direction) => ({
      opacity: 0,
      x: direction === 'next' ? 180 : -180, // Even further starting point
      y: 0
    }),
    animate: {
      opacity: 1,
      x: [0, 60, -45, 30, -20, 10, -5, 0], // More dramatic oscillations with larger values
      y: 0,
      transition: {
        x: {
          duration: 2.0, // Longest duration for maximum visibility
          times: [0, 0.15, 0.35, 0.5, 0.65, 0.8, 0.9, 1], // Well-distributed bounce points
          ease: 'easeOut',
          delay: 0.25 // Slightly increased delay
        },
        opacity: { duration: 0.7, ease: 'easeOut', delay: 0.3 }
      }
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction === 'next' ? -70 : 70,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut'
      }
    })
  };
  const buttonVariants = {
    initial: { scale: 1 },
    hover: {
      scale: 1.05,
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.98 }
  };

  return (
    <div className="relative h-screen max-w-full overflow-hidden">
      {/* Background Images */}
      {/* <div className="absolute inset-0  z-0"></div> */}

      {items.map((item, index) => (
        <BackgroundImage
          key={`bg-${item.id}`}
          src={item.bgImage}
          active={active}
          isCurrentSlide={index === active}
          overlayColor={item.overlayColor}
          direction={direction}
        />
      ))}

      <AnimatePresence initial={false} custom={direction} mode="sync">
        <motion.div
          key={active}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 z-10"
          style={{
            transformOrigin: 'center center',
            transformStyle: 'preserve-3d'
          }}
        >
          <div className="relative h-[calc(100vh-6rem)] lg:mt-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1.2,
                ease: 'easeOut'
              }}
              className="absolute w-full h-full flex justify-center items-start md:items-center"
            >
              <motion.h1
                custom={direction}
                variants={headingVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="encode-sans font-custom mt-32 md:pt-0 mb-12 md:mb-48 lg:mb-40 lg:tracking-[-1.6rem] text-7xl md:text-[8rem] lg:text-[16rem] font-bold uppercase leading-none lg:max-w-full 3xl:max-w-[90rem] relative z-20 lg:text-center mx-auto"
              >
                {/* Base layer - solid color */}
                <span className="absolute inset-0 font-custom  text-white opacity-20">{items[active].name}</span>

                {/* Second layer - gradient overlay */}
                <span className="relative bg-clip-text font-custom  text-transparent">{items[active].name}</span>
              </motion.h1>
            </motion.div>
            <div className="relative w-full h-full md:h-[90%]  z-20 lg:h-full lg:max-w-full 3xl:max-w-[82rem] mx-auto px-4">
              <div className="relative w-full h-full flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, x: direction === 'next' ? 100 : -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction === 'next' ? -100 : 100 }}
                  transition={{
                    opacity: { duration: 0.8, ease: 'easeOut' },
                    x: {
                      duration: 0.8,
                      type: 'spring',
                      stiffness: 80,
                      damping: 12,
                      bounce: 0.5
                    }
                  }}
                  className="absolute left-0 lg:left-10 2xl:left-6 3xl:-left-28 top-[85%] lg:top-[60%] -translate-y-1/2 z-40 w-full lg:max-w-md mt-4 lg:mt-0"
                  style={{ transformOrigin: 'center center' }}
                >
                  <motion.div
                    variants={descriptionVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    custom={direction}
                    className="flex flex-col lg:mt-0 lg:block py-2 px-4 md:p-6 rounded-2xl"
                  >
                    <Link href={items[active].page}>
                      <Button className="bg-red-700 font-custom w-full mb-2 lg:w-fit hover:bg-black text-white rounded-l-full rounded-br-full px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                        Découvrir
                        <span className="ml-2 inline-block transform group-hover:translate-x-1 transition-transform duration-200">
                          →
                        </span>
                      </Button>
                    </Link>
                    <motion.p className="text-white font-light text-center md:text-left text-base md:text-lg lg:text-lg leading-relaxed md:mb-6">
                      {items[active].description}
                    </motion.p>
                  </motion.div>
                </motion.div>

                {/* Main product image - stationary at center */}
                <div className={`relative z-30 ${getImageContainerClass(items[active].id)}`}>
                  <AnimatePresence mode="wait">
                    <MainImage
                      key={`main-${active}`}
                      image={items[active].image}
                      name={items[active].name}
                      direction={direction}
                    />
                  </AnimatePresence>

                  {/* Floating images with orbital motion */}
                  <AnimatePresence mode="wait">
                    {[
                      { position: 'top-left', index: 0, angle: 45 },
                      { position: 'top-right', index: 1, angle: 135 },
                      { position: 'bottom-left', index: 2, angle: 225 },
                      { position: 'bottom-right', index: 3, angle: 315 }
                    ].map(({ position, index, angle }) => (
                      <FloatingImage
                        key={`${active}-${position}`}
                        position={position}
                        index={index}
                        active={active}
                        image={items[active].floatingImages[index]}
                        getPosition={getPosition}
                        getImageSize={getImageSize}
                        getRotateValues={getRotateValues}
                        direction={direction} // Pass direction
                      />
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
          <NavigationButtons
            onPrev={prevSlider}
            onNext={nextSlider}
            onHoverChange={setIsHovering}
            active={active}
            total={items.length}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HeroSlide;
