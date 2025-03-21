import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

// Import images from your assets
import candies from '@/assets/images/candies.webp';
import candy from '@/assets/images/candy.webp';
import choco from '@/assets/images/chocolate.webp';
import leonardo from '@/assets/images/leonardo.webp';
import wafer from '@/assets/images/wafer.webp';

interface Category {
  title: string;
  image: string;
  href: string;
  description?: string;
}

interface CategoryCardProps extends Category {
  priority?: boolean;
  index?: number;
  currentIndex?: number;
  totalItems?: number;
}

function CategoryCard3D({
  title,
  image,
  href,
  description = '',
  priority = false,
  index = 0,
  currentIndex = 0,
  totalItems = 5
}: CategoryCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1440);
  let position = null;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  // Calculate 3D position
  const getStyles = () => {
    // Calculate relative position (-2, -1, 0, 1, 2)
    position = index - currentIndex;

    // Handle wrap-around for continuous rotation
    if (position > totalItems / 2) position -= totalItems;
    if (position < -totalItems / 2) position += totalItems;

    // Position cards in 3D space
    let translateZ = 0;
    let translateX = 0;
    let rotateY = 0;
    let opacity = 0;
    let scale = 1;
    let zIndex = 5;
    const getResponsiveTranslateX = (baseValue) => {
      if (windowWidth >= 1536) {
        // 2xl
        return position * baseValue;
      } else if (windowWidth >= 1280) {
        // xl
        return position * (baseValue * 0.85);
      } else if (windowWidth >= 1024) {
        // lg
        return position * (baseValue * 0.7);
      } else if (windowWidth >= 768) {
        // md
        return position * (baseValue * 0.6);
      } else if (windowWidth >= 640) {
        // sm
        return position * (baseValue * 0.5);
      } else {
        // xs
        return position * (baseValue * 0.4);
      }
    };

    if (position === 0) {
      // Current image (center)
      translateZ = 0;
      translateX = 0;
      rotateY = 0;
      opacity = 1;
      scale = 1;
      zIndex = 10;
    } else if (position === 1 || position === -1) {
      // Images to sides
      translateZ = -150;
      translateX = getResponsiveTranslateX(435);
      rotateY = 0;
      opacity = 0.9;
      scale = 0.85;
      zIndex = 5;
    } else if (position === 2 || position === -2) {
      // Images further to sides
      translateZ = -300;
      translateX = getResponsiveTranslateX(400);
      rotateY = 0;
      opacity = 0.5;
      scale = 0.7;
      zIndex = 1;
    } else {
      // Hidden images
      translateZ = -500;
      translateX = position * 400;
      opacity = 0;
      zIndex = 0;
    }

    return {
      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
      opacity,
      zIndex
    };
  };

  return (
    <div
      className="group absolute top-0 left-0 w-full transition-all duration-500 "
      style={getStyles()}
      aria-label={`Voir la catégorie ${title}`}
    >
      <a href={href}>
        <div className="aspect-[3/4] relative bg-gray-100 overflow-hidden rounded-[30px]">
          <img
            src={image}
            alt={description || `Image de la catégorie ${title}`}
            className={`
                absolute inset-0 h-full w-full object-cover transition-all duration-300
                group-hover:scale-105 group-hover:blur-sm
                ${isLoaded ? 'opacity-100' : 'opacity-0'}
              `}
            sizes="(min-width: 1536px) 20vw, (min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            loading={priority ? 'eager' : 'lazy'}
            onLoad={() => setIsLoaded(true)}
          />

          {/* Loading placeholder */}
          {!isLoaded && <div className="absolute inset-0 animate-pulse bg-gray-200" />}

          {/* Red gradient overlay - added this element */}
          {position === 0 && (
            <div className="absolute inset-0 bg-gradient-to-b from-transparent  to-red-700 transition-opacity duration-500"></div>
          )}

          {/* Hover overlay with increased red opacity */}
          {position === 0 && (
            <div className="absolute inset-0 bg-gradient-to-b from-red-500/0 via-red-500/20 to-red-700/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          )}

          {/* Title at bottom */}
          {position === 0 && (
            <div className="absolute bottom-10 left-0 right-0 bg-gradient-to-t to-red-700/60  pt-12 pb-4 px-4 transition-all duration-500 uppercase">
              <h2 className="text-white text-center text-4xl md:text-5xl drop-shadow-md font-custom font-bold uppercase">
                {title}
              </h2>
            </div>
          )}

          {/* Content overlay with fade-up animation */}
          {position === 0 && (
            <div
              className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10 transition-all duration-500
                  flex flex-col items-center justify-center p-6
                  opacity-0 group-hover:opacity-100
                  transform translate-y-4 group-hover:translate-y-0"
            >
              <p
                className="text-white text-center mb-6 font-custom font-medium
                    transform translate-y-6 group-hover:translate-y-0 scale-95 group-hover:scale-100
                    transition-all duration-500 ease-out text-lg opacity-0 group-hover:opacity-100"
              >
                {description}
              </p>

              <a
                href={href}
                className="inline-flex font-custom font-medium items-center justify-center px-6 py-2
                    bg-white text-red-500 rounded-full shadow-md hover:shadow-lg
                    transition-all duration-500 ease-out
                    transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100
                    hover:bg-red-50"
              >
                Découvrir
                <svg
                  className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          )}
        </div>
      </a>
    </div>
  );
}
const categories: Category[] = [
  {
    title: 'Chocolats',
    image: choco,
    href: '/products/chocolat/pâtes%20à%20tartiner',
    description: 'Découvrez notre sélection de chocolats premium'
  },
  {
    title: 'Confiseries',
    image: candies,
    href: '/products/confiserie/sucettes',
    description: 'Découvrez notre gamme de confiseries artisanales'
  },
  {
    title: 'Gaufrettes',
    image: wafer,
    href: '/products/Gaufrettes/Gaufrettes enrobées',
    description: 'Parcourez notre collection de gaufrettes croustillantes'
  },
  {
    title: 'Pâtisseries',
    image: leonardo,
    href: '/products/Produits%20pâtissiers/chocolats%20pâtissiers',
    description: 'Découvrez nos pâtisseries fraîchement préparées'
  },
  {
    title: 'Fêtes et événements',
    image: candy,
    href: '/products/Fêtes%20et%20événements/Chocolats%20fins%20fourrés',
    description: 'Découvrez nos douceurs parfaites pour toutes vos célébrations'
  }
];

const fadeInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut'
    }
  }
};

const staggerChildren = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Category3DCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Add refs for scroll detection
  const headerRef = useRef(null);
  const carouselRef = useRef(null);
  const leftContentRef = useRef(null);
  const rightContentRef = useRef(null);

  // Check if elements are in view
  const headerInView = useInView(headerRef, { once: false, amount: 0.3 });
  const carouselInView = useInView(carouselRef, { once: false, amount: 0.2 });
  const leftContentInView = useInView(leftContentRef, { once: false, amount: 0.3 });
  const rightContentInView = useInView(rightContentRef, { once: false, amount: 0.3 });

  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % categories.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const handlePrev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + categories.length) % categories.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  // Auto-rotate the slider
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isTransitioning]);

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
          {/* Outermost pulsing circle */}
          {/* <div
            className={`absolute inset-0 m-auto rounded-full
                       bg-red-600  animate-ping-slow
                       transition-opacity duration-300 ${isActive ? 'opacity-40' : 'opacity-0'}`}
          ></div> */}

          {/* Middle pulsing circle with delay */}
          {/* <div
            className={`absolute inset-0 m-auto w-10 h-10 rounded-full
                       bg-red-600 animate-ping-delayed
                       transition-opacity duration-300 ${isActive ? 'opacity-50' : 'opacity-0'}`}
          ></div> */}

          {/* Base button with gradient */}
          {/* <div
            className={`absolute inset-0 w-16 h-16 rounded-full
                       bg-gradient-to-r from-rose-300/80 via-rose-400/80 to-rose-300/80
                       flex items-center justify-center z-10
                       transition-all duration-300 ${isActive ? 'scale-100' : ''}`}
          > */}
          {/* Middle circle */}
          <div
            className={`w-12 h-12 rounded-full
                         bg-gradient-to-br from-rose-500/90 to-red-500/90
                         transition-all duration-300 flex items-center justify-center ${isActive ? 'scale-100' : ''}`}
          >
            {/* Inner circle with content */}
            <div
              className={`w-8 h-8 rounded-full
                           bg-[#AA071A]
                           transition-all duration-300 flex items-center justify-center ${isActive ? 'scale-100' : ''}`}
            >
              <span className="text-white text-xl">{children}</span>
            </div>
          </div>
        </div>
        {/* </div> */}
      </button>
    );
  };

  return (
    <section className="mx-auto w-full max-w-full pt-8 sm:py-16 lg:py-24 relative overflow-hidden px-0 ">
      <motion.div
        ref={headerRef}
        className="text-center mb-12"
        initial="hidden"
        animate={headerInView ? 'visible' : 'hidden'}
        variants={staggerChildren}
      >
        <motion.h2
          variants={fadeInUp}
          className="text-gray-700 font-custom font-bold tracking-wide uppercase mb-3 sm:mb-4 text-sm sm:text-lg"
        >
          NOS CATeGORIES
        </motion.h2>
        <motion.h1
          variants={fadeInLeft}
          className="text-red-600 text-2xl font-custom font-bold uppercase md:text-5xl lg:text-6xl mb-2"
        >
          Tout un monde
        </motion.h1>
        <motion.h2
          variants={fadeInRight}
          className="text-red-600 font-custom font-bold text-2xl uppercase md:text-3xl lg:text-4xl"
        >
          de plaisir
        </motion.h2>
      </motion.div>

      {/* 3D Carousel Container */}
      <motion.div
        ref={carouselRef}
        className="relative w-full h-[520px] lg:h-[600px] flex justify-center items-center  overflow-x-hidden"
        initial={{ opacity: 0, y: 60 }}
        animate={
          carouselInView ? { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } } : { opacity: 0, y: 60 }
        }
      >
        <div className="relative w-full max-w-md h-full transform-style-3d ">
          {categories.map((category, index) => (
            <CategoryCard3D
              key={category.title}
              {...category}
              priority={index === currentIndex}
              index={index}
              currentIndex={currentIndex}
              totalItems={categories.length}
            />
          ))}
        </div>

        {/* Custom Navigation Buttons */}
        <PulsingButton
          onClick={handlePrev}
          className="absolute left-0 md:left-[20%] lg:left-[30%] z-10 w-16 h-16 md:ml-4 flex items-center justify-center rounded-full text-white/80 hover:text-white  transition-all duration-300"
          aria-label="Previous slide"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </PulsingButton>

        <PulsingButton
          onClick={handleNext}
          className="absolute right-0 md:right-[20%] lg:right-[30%] z-10 w-16 h-16 md:mr-4 flex items-center justify-center rounded-full text-white/80 hover:text-white  transition-all duration-300"
          aria-label="Next slide"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </PulsingButton>
      </motion.div>
    </section>
  );
}
