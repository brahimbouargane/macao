import { cn } from '@/utils/classes';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from './ui/shadcn-button';

import Carousel1 from '@/assets/images/carousel-1.png';
import Carousel2 from '@/assets/images/carousel-2.png';
import Carousel3 from '@/assets/images/carousel-3.png';

import piple from '@/assets/images/Papil.brown.webp';
import piple2 from '@/assets/images/Papil.N.webp';
import piple3 from '@/assets/images/Papil.red.webp';
import piple4 from '@/assets/images/Papil.yellow.webp';

import choko2 from '@/assets/images/black-cookies.webp';
import cokies from '@/assets/images/cokies.webp';
import cupcake from '@/assets/images/cupcake.webp';
import cake from '@/assets/images/small-cake.webp';

import bluebereies from '@/assets/images/blueberies.webp';
import cherry from '@/assets/images/cherrs.webp';
import orange from '@/assets/images/orange.webp';
import strawberry from '@/assets/images/strawbery.webp';
import { Link } from '@inertiajs/react';

export default function LuxuryPastryHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      mainImage: Carousel3,
      title: 'Confiserie',
      tagline: 'L’Art de la Gourmandise, Redéfini',
      cta: 'Découvrir Nos Confiseries',
      link: 'products/confiserie/sucettes',
      floatingImages: [
        {
          src: orange,
          position: 'left-[10%] top-[15%] md:left-[15%]',
          delay: '1',
          size: 'w-28 h-28 md:w-44 md:h-44',
          rotation: 90
        },
        {
          src: cherry,
          position: 'left-[8%] bottom-[10%]  md:bottom-[15%] md:left-[15%]',
          delay: '3',
          size: 'w-32 h-32 md:w-52 md:h-52',
          rotation: -25
        },
        {
          src: strawberry,
          position: 'top-[15%] md:top-[20%] right-[15%]',
          delay: '0',
          size: 'w-24 h-24 md:w-52 md:h-52',
          rotation: -20
        },
        {
          src: bluebereies,
          position: 'right-[10%] bottom-[15%] md:right-[20%]',
          delay: '2',
          size: 'w-20 h-20 md:w-40 md:h-40',
          rotation: 20
        }
      ]
    },
    {
      mainImage: Carousel1,
      title: 'Pâtisserie',
      tagline: "L'Élégance du Goût, L'Excellence du Savoir-Faire",
      cta: 'Explorer Nos Pâtisseries',
      link: 'products/Produits%20pâtissiers/chocolats%20pâtissiers',
      floatingImages: [
        {
          src: cupcake,
          position: 'left-[5%] top-[15%] md:left-[18%]',
          delay: '2',
          size: 'w-28 h-28 md:w-52 md:h-52',
          rotation: 6
        },
        {
          src: choko2,
          position: 'bottom-[10%] left-[15%]',
          delay: '0',
          size: 'w-24 h-24 md:w-40 md:h-40',
          rotation: -3
        },
        {
          src: cokies,
          position: 'top-[15%] right-[10%]  md:top-[20%] md:right-[20%]',
          delay: '3',
          size: 'w-28 h-28 md:w-52 md:h-52',
          rotation: 12
        },
        {
          src: cake,
          position: 'bottom-[10%] md:bottom-[15%] right-[18%]',
          delay: '1',
          size: 'w-24 h-24 md:w-40 md:h-40',
          rotation: -8
        }
      ]
    },
    {
      mainImage: Carousel2,
      title: 'Chocolat',
      tagline: 'L’Expérience d’un Chocolat d’Exception',
      cta: 'Découvrir Nos Chocolats',
      link: 'products/chocolat/pâtes%20à%20tartiner',
      floatingImages: [
        {
          src: piple,
          position: 'left-[10%] top-[20%] md:left-[15%]',
          delay: '0',
          size: 'w-24 h-24 md:w-40 md:h-40',
          rotation: -20
        },
        {
          src: piple2,
          position: 'left-[10%] bottom-[10%] md:left-[20%]',
          delay: '1',
          size: 'w-28 h-28 md:w-52 md:h-52',
          rotation: -125
        },
        {
          src: piple4,
          position: 'right-[10%] top-[20%] md:right-[18%]',
          delay: '2',
          size: 'w-28 h-28 md:w-52 md:h-52',
          rotation: 50
        },
        {
          src: piple3,
          position: 'right-[10%] bottom-[15%] md:right-[15%]',
          delay: '3',
          size: 'w-24 h-24 md:w-40 md:h-40',
          rotation: -20
        }
      ]
    }
  ];
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
        <div className="relative w-14 h-14">
          {/* Fixed: Animation layers now properly centered and visible */}
          {/* The key fix is using inset-0 instead of left/top + translate */}

          {/* Outermost pulsing circle */}
          <div
            className={`absolute inset-0 m-auto rounded-full
                       bg-rose-800/30 animate-ping-slow
                       transition-opacity duration-300 ${isActive ? 'opacity-40' : 'opacity-0'}`}
          ></div>

          {/* Middle pulsing circle with delay */}
          <div
            className={`absolute inset-0 m-auto w-10 h-10 rounded-full
                       bg-rose-800/40 animate-ping-delayed
                       transition-opacity duration-300 ${isActive ? 'opacity-50' : 'opacity-0'}`}
          ></div>

          {/* Base button with gradient */}
          <div
            className={`absolute inset-0 w-14 h-14 rounded-full
                       bg-gradient-to-r from-rose-300/80 via-rose-400/80 to-rose-300/80
                       flex items-center justify-center z-10
                       transition-all duration-300 ${isActive ? 'scale-110' : ''}`}
          >
            {/* Middle circle */}
            <div
              className={`w-10 h-10 rounded-full
                         bg-gradient-to-br from-rose-500/90 to-red-500/90
                         transition-all duration-300 flex items-center justify-center ${isActive ? 'scale-110' : ''}`}
            >
              {/* Inner circle with content */}
              <span className="text-white text-xl">{children}</span>

              {/* <div
                className={`w-8 h-8 rounded-full
                           bg-[#AA071A]
                           transition-all duration-300 flex items-center justify-center ${isActive ? 'scale-110' : ''}`}
              >
              </div> */}
            </div>
          </div>
        </div>
      </button>
    );
  };
  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 700);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);

    return () => clearInterval(interval);
  }, [currentSlide, isTransitioning]);
  // Variants for framer-motion animations
  const backgroundTitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 0.1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.5,
        ease: 'easeIn'
      }
    }
  };

  const mainImageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.5,
        ease: 'easeIn'
      }
    }
  };

  const taglineVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.3,
        ease: 'easeOut'
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.4,
        ease: 'easeIn'
      }
    }
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.5,
        ease: 'easeOut'
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.4,
        ease: 'easeIn'
      }
    }
  };

  const floatingImageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (delay) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        delay: delay * 0.2,
        ease: 'easeOut'
      }
    }),
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
        ease: 'easeIn'
      }
    }
  };
  return (
    <section className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-[#f8f4f0] to-[#f0e9e4]">
      {/* Carousel */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div key={currentSlide} initial="hidden" animate="visible" exit="exit" className="absolute inset-0">
            {/* Background Title */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              variants={backgroundTitleVariants}
            >
              <motion.h1 className="absolute top-[10%]  md:top-[19%]  md:block font-custom  text-[15vw] font-bold text-[#2a2118] tracking-tight">
                {slides[currentSlide].title}
              </motion.h1>
            </motion.div>

            {/* Main Content */}
            <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center">
              {/* Main Product Image */}
              <motion.div variants={mainImageVariants} className="relative">
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto">
                  <motion.img
                    src={slides[currentSlide].mainImage || '/placeholder.svg'}
                    alt={slides[currentSlide].title}
                    className="object-fill"
                    initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                  />
                </div>
              </motion.div>

              {/* Floating Images */}
              {slides[currentSlide].floatingImages.map((img, imgIndex) => (
                <motion.div
                  key={imgIndex}
                  className={cn('absolute', img.position, img.size)}
                  custom={parseInt(img.delay)}
                  variants={floatingImageVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <motion.img
                    src={img.src || '/placeholder.svg'}
                    alt="Floating pastry"
                    className="object-cover"
                    style={{
                      transform: `rotate(${img.rotation}deg)`
                    }}
                    whileHover={{
                      scale: 1.05,
                      rotate: `${img.rotation + 5}deg`,
                      transition: { duration: 0.3 }
                    }}
                  />
                </motion.div>
              ))}

              {/* Tagline */}
              <motion.h2
                variants={taglineVariants}
                className="font-serif mt-20 text-2xl md:text-3xl lg:text-4xl text-[#2a2118] mb-4"
              >
                {slides[currentSlide].tagline}
              </motion.h2>

              {/* CTA Button */}
              <motion.div variants={ctaVariants}>
                <Link href={slides[currentSlide].link}>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                    <Button className="border-[#2a2118] rounded-l-full rounded-br-full text-white hover:bg-[#2a2118] hover:text-red-500 transition-colors px-8 py-6 text-sm">
                      {slides[currentSlide].cta}
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <PulsingButton
        onClick={prevSlide}
        // className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/70 backdrop-blur-sm text-[#2a2118] hover:bg-white/90 transition-colors"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 "
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </PulsingButton>
      <PulsingButton
        onClick={nextSlide}
        // className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/70 backdrop-blur-sm text-[#2a2118] hover:bg-white/90 transition-colors"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 "
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </PulsingButton>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              'h-2 rounded-full transition-all duration-300',
              currentSlide === index ? 'bg-[#2a2118] w-8' : 'bg-[#2a2118]/30 hover:bg-[#2a2118]/50 w-2'
            )}
            aria-label={`Go to slide ${index + 1}`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.5 }}
          />
        ))}
      </div>
    </section>
  );
}
