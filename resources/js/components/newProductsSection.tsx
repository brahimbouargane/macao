import macao from '@/assets/images/LOGO-MACAO.svg';
import product1Display from '@/assets/images/product1-display.webp';
import product2Display from '@/assets/images/product2-display.webp';
import product3Display from '@/assets/images/product3-display.webp';
import product4Display from '@/assets/images/product4-display.webp';
import product5Display from '@/assets/images/product5-display.webp';
import product6Display from '@/assets/images/product6-display.webp';
import product7Display from '@/assets/images/product7-display.webp';
import product8Display from '@/assets/images/product8-display.webp';

import { AnimatePresence, motion, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';

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

const ProductShowcase = () => {
  const [activeTab, setActiveTab] = useState('nouveautes');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: false, amount: 0.3 });

  const products = [
    {
      id: 1,
      name: 'CHOCOLAT MONOGRAM AU LAIT',
      image: product1Display,
      category: 'Chocolat',
      type: 'Chocolat Monogram',
      isNew: true,
      isBestSeller: true,
      isPromotion: false
    },
    {
      id: 2,
      name: 'CHOCOLAT NOIR EXTRA FIN  AUX AMANDES',
      image: product2Display,
      category: 'Chocolat',
      type: 'Tablette de Chocolat 73% de Cacao',
      isNew: false,
      isBestSeller: true,
      isPromotion: true
    },
    {
      id: 3,
      name: 'CARAMEL NOUGAT',
      image: product3Display,
      category: 'Confiserie',
      type: 'Caramel à la Réglisse',
      isNew: true,
      isBestSeller: false,
      isPromotion: true
    },
    {
      id: 4,
      name: 'DRAGÉES IMPÉRIAL BLANCHES',
      image: product4Display,
      category: 'Dragées',
      type: 'Dragées Aux Amandes N°1',
      isNew: true,
      isBestSeller: false,
      isPromotion: true
    },
    {
      id: 5,
      name: 'CHOCO DROPS',
      image: product5Display,
      category: 'Chocolats pâtissiers',
      type: 'Pastilles au Sucre Chocolaté',
      isNew: false,
      isBestSeller: true,
      isPromotion: false
    },
    {
      id: 6,
      name: 'VERMICELLE CACAO',
      image: product6Display,
      category: 'Fourrage & décoration',
      type: 'Vermicelle',
      isNew: true,
      isBestSeller: true,
      isPromotion: false
    },
    {
      id: 7,
      name: 'FAMILY CACAO',
      image: product7Display,
      category: 'Gaufrettes fourrées',
      type: 'Gaufrette croustillante fourrée à la crème',
      isNew: true,
      isBestSeller: false,
      isPromotion: true
    },
    {
      id: 8,
      name: 'DIAMANTS',
      image: product8Display,
      category: 'Chocolats fins fourrés',
      type: 'Assortiment De Chocolats Fins',
      isNew: false,
      isBestSeller: true,
      isPromotion: true
    }
  ];

  const filteredProducts = products.filter((product) => {
    switch (activeTab) {
      case 'nouveautes':
        return product.isNew;
      case 'meilleures-ventes':
        return product.isBestSeller;
      case 'promotions':
        return product.isPromotion;
      default:
        return true;
    }
  });

  const slideLeft = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? Math.max(filteredProducts.length - 3, 0) : prevIndex - 1));
  }, [filteredProducts.length]);

  const slideRight = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === Math.max(filteredProducts.length - 3, 0) ? 0 : prevIndex + 1));
  }, [filteredProducts.length]);

  // Auto-slide functionality
  useEffect(() => {
    let interval;

    if (!isPaused && filteredProducts.length > 3) {
      interval = setInterval(() => {
        slideRight();
      }, 3000); // Change slide every 3 seconds
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isPaused, slideRight, filteredProducts.length]);

  // Reset index when changing tabs
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeTab]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const getVisibleSlides = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1; // mobile
      if (window.innerWidth < 1024) return 2; // tablet
      return 3; // desktop
    }
    return 3;
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
                       bg-red-600  animate-ping-slow
                       transition-opacity duration-300 ${isActive ? 'opacity-40' : 'opacity-0'}`}
          ></div>

          {/* Middle pulsing circle with delay */}
          <div
            className={`absolute inset-0 m-auto w-10 h-10 rounded-full
                       bg-gray-600 animate-ping-delayed
                       transition-opacity duration-300 ${isActive ? 'opacity-50' : 'opacity-0'}`}
          ></div>

          {/* Base button with gradient */}
          <div
            className={`absolute inset-0 w-16 h-16 rounded-full
                       bg-gradient-to-r from-rose-300/80 via-rose-400/80 to-rose-300/80
                       flex items-center justify-center z-10
                       transition-all duration-300 ${isActive ? 'scale-100' : ''}`}
          >
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
        </div>
      </button>
    );
  };

  const TabsRef = useRef(null);
  const CarouselRef = useRef(null);

  // Track when elements are in viewport
  const isTabsInView = useInView(TabsRef, {
    once: false, // Set to true if you want the animation to happen only once
    amount: 0.3 // How much of the element should be in view (0-1)
  });

  const isCarouselInView = useInView(CarouselRef, {
    once: false,
    amount: 0.2
  });

  return (
    <div className="relative py-4 md:pb-20 md:pt-0">
      <div className="max-w-[75rem] 3xl:max-w-[85rem] mx-auto px-4 ">
        {/* Header Section */}
        <motion.div
          ref={headerRef}
          className="text-center mb-12"
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
          variants={staggerChildren}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-gray-700 font-custom font-bold  tracking-wide uppercase mb-2 md:mb-4 text-sm sm:text-base md:text-lg"
          >
            NOS PRODUITS
          </motion.h2>
          <motion.h1
            variants={fadeInLeft}
            className=" text-red-600   font-custom font-bold  text-2xl sm:text-3xl md:text-4xl lg:text-6xl uppercase  mb-2"
          >
            Un univers
          </motion.h1>
          <motion.h2
            variants={fadeInRight}
            className=" text-red-600  font-custom font-bold  text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase"
          >
            gourmand et raffiné
          </motion.h2>
        </motion.div>

        {/* Animated Tabs */}
        <motion.div
          ref={TabsRef}
          className="flex flex-col sm:flex-row justify-center gap-2 sm:space-x-4 mb-6 md:mb-8 relative rounded-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: isTabsInView ? 1 : 0,
            y: isTabsInView ? 0 : 50
          }}
          transition={{
            duration: 0.6,
            ease: 'easeOut'
          }}
        >
          {[
            { id: 'nouveautes', label: 'Nouveautés' },
            { id: 'meilleures-ventes', label: 'Meilleures ventes' },
            { id: 'promotions', label: 'Promotions' }
          ].map((tab) => (
            <motion.button
              key={tab.id}
              className={`px-4 sm:px-6 py-2 text-base md:text-lg transition-colors duration-300 rounded-full font-custom ${
                activeTab === tab.id ? 'bg-[#AA071A] text-white' : 'text-gray-600 hover:bg-red-50'
              }`}
              onClick={() => {
                setActiveTab(tab.id);
                setCurrentIndex(0);
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.1)'
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              layout
            >
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Carousel Section with fade-up animation */}
        <motion.div
          ref={CarouselRef}
          className="relative "
          initial={{ opacity: 0, y: 60 }}
          animate={{
            opacity: isCarouselInView ? 1 : 0,
            y: isCarouselInView ? 0 : 60
          }}
          transition={{
            duration: 0.8,
            ease: 'easeOut',
            delay: 0.2
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {filteredProducts.length > getVisibleSlides() && (
            <>
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                <PulsingButton
                  onClick={slideLeft}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-20 p-1 sm:p-2 z-10 transition-colors duration-300 rounded-full"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </PulsingButton>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
                <PulsingButton
                  onClick={slideRight}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-20 p-1 sm:p-2 z-10 transition-colors duration-300 rounded-full"
                >
                  <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                </PulsingButton>
              </motion.div>
            </>
          )}

          <div className="overflow-hidden h-">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                className="flex mt-6 mb-6"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  x: `-${currentIndex * (100 / getVisibleSlides())}%`
                }}
                exit={{ opacity: 0 }}
                transition={{
                  opacity: { duration: 0.3 },
                  x: { duration: 0.5, ease: 'easeInOut' }
                }}
              >
                {filteredProducts.map((product, index) => (
                  //   <motion.div
                  //     key={product.id}
                  //     className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2 sm:px-4 "
                  //     initial={{ opacity: 0, y: 20 }}
                  //     animate={{
                  //       opacity: 1,
                  //       y: 0,
                  //       transition: {
                  //         delay: index * 0.1,
                  //         duration: 0.5
                  //       }
                  //     }}
                  //   >
                  //     <motion.div
                  //       className="relative h-full overflow-hidden border-2 border-[#AA071A] rounded-tl-[80px] rounded-bl-[80px] transition-all duration-300"
                  //       whileHover={{
                  //         scale: 1.01,
                  //         boxShadow: '0px 10px 25px rgba(170, 7, 26, 0.2)',
                  //         transition: { duration: 0.3 }
                  //       }}
                  //     >
                  //       <motion.div
                  //         className="absolute top-4 right-4 w-6 h-6  md:w-8 md:h-8  flex items-center justify-center text-red-700 font-bold"
                  //         whileHover={{
                  //           scale: 1.2,
                  //           //   rotate: 25,
                  //           transition: { duration: 0.3 }
                  //         }}
                  //         initial={{ rotate: 0 }}
                  //         animate={{
                  //           rotate: [0, 5, -5, 0],
                  //           transition: {
                  //             repeat: Infinity,
                  //             repeatType: 'mirror',
                  //             duration: 2,
                  //             ease: 'easeInOut'
                  //           }
                  //         }}
                  //       >
                  //         <img src={macao} alt="macao pastore" className="h-12 w-12" />
                  //       </motion.div>
                  //       <div className="bg-red-700">
                  //         <div className=" flex justify-center items-center rounded-br-[80px] bg-white py-20 px-10">
                  //           <img src={product.image} alt={product.name} className="h-full w-full " />
                  //         </div>
                  //         <div className="relative flex px-4 py-6 text-center justify-center items-center">
                  //           <motion.h3
                  //             className="font-custom font-bold h-full lg:h-[56px] text-white text-base sm:text-lg tracking-wide"
                  //             initial={{ opacity: 0 }}
                  //             animate={{ opacity: 1 }}
                  //             transition={{ delay: 0.2, duration: 0.5 }}
                  //           >
                  //             {product.name}
                  //           </motion.h3>
                  //         </div>

                  //         <motion.div
                  //           className="absolute bottom-0 right-0 w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-white font-bold"
                  //           whileHover={{
                  //             scale: 1.2,
                  //             rotate: 90,
                  //             transition: { duration: 0.3 }
                  //           }}
                  //           initial={{ rotate: 0 }}
                  //           animate={{
                  //             rotate: [0, 5, -5, 0],
                  //             transition: {
                  //               repeat: Infinity,
                  //               repeatType: 'mirror',
                  //               duration: 2,
                  //               ease: 'easeInOut'
                  //             }
                  //           }}
                  //         >
                  //           <span className="text-xl sm:text-2xl">+</span>
                  //         </motion.div>
                  //       </div>
                  //     </motion.div>
                  //   </motion.div>

                  <motion.div
                    key={product.id}
                    className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2 sm:px-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: index * 0.1,
                        duration: 0.5
                      }
                    }}
                    whileHover={{
                      scale: 1.01,
                      y: -5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <motion.div className="relative h-full group cursor-pointer">
                      <div className="w-full h-full   border-2 border-b-0 border-[#AA071A] overflow-hidden">
                        {/* SVG Container with your custom shape */}
                        <svg
                          className="w-full h-full drop-shadow-lg shadow-[#AA071A] "
                          viewBox="0 0 468 581"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <defs>
                            {/* Define clipPath using your shape */}
                            <clipPath id={`card-shape-${product.id}`}>
                              <path d="M139.818 558.668C118.354 564.55 56.9567 581 0 581V0H468V580.818C430.623 553.294 361.959 534.81 283.505 534.81C205.051 534.81 164.781 551.877 139.818 558.704" />
                            </clipPath>
                          </defs>

                          {/* White top section */}
                          <path d="M0 0H468V500H0V0Z" fill="white" stroke="#AA071A" strokeWidth="1" />

                          {/* Red bottom section with custom curve */}
                          <path
                            d="M0 415H468V580.818C430.623 553.294 361.959 534.81 283.505 534.81C205.051 534.81 164.781 551.877 139.818 558.704C118.354 564.55 56.9567 581 0 581V415Z"
                            fill="#AA071A"
                          />

                          {/* Content Container using foreignObject */}
                          <foreignObject
                            x="0"
                            y="0"
                            width="468"
                            height="581"
                            clipPath={`url(#card-shape-${product.id})`}
                          >
                            <div className="w-full h-full flex flex-col relative">
                              {/* Top Section - Logo */}
                              <div className="absolute top-2 right-2 z-10">
                                <motion.div
                                  className="w-14 h-14"
                                  whileHover={{
                                    scale: 1.2,
                                    transition: { duration: 0.3 }
                                  }}
                                  initial={{ rotate: 0 }}
                                  animate={{
                                    rotate: [0, 5, -5, 0],
                                    transition: {
                                      repeat: Infinity,
                                      repeatType: 'mirror',
                                      duration: 2,
                                      ease: 'easeInOut'
                                    }
                                  }}
                                >
                                  <img src={macao} alt="macao pastore" className="h-full w-full" />
                                </motion.div>
                              </div>

                              {/* Product Image Section - Takes up white area */}
                              <div className="flex-1 flex justify-center items-center px-8 pt-0 pb-32">
                                <div className="w-full max-w-xs h-64 flex justify-center items-center">
                                  <img
                                    src={product.image}
                                    alt={product.name}
                                    className="max-w-full max-h-full object-contain"
                                  />
                                </div>
                              </div>

                              {/* Product Name Section - In red area */}
                              <div className="absolute bottom-24 left-0 right-0 px-8 text-center">
                                <motion.h3
                                  className="font-custom font-bold text-white text-lg md:text-2xl tracking-wide leading-tight"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ delay: 0.2, duration: 0.5 }}
                                >
                                  {product.name}
                                </motion.h3>
                              </div>

                              {/* Plus Icon - Bottom right in red area */}
                              <motion.div
                                className="absolute bottom-8 right-2 w-8 h-8 flex items-center justify-center text-white font-bold"
                                whileHover={{
                                  scale: 1.2,
                                  rotate: 90,
                                  transition: { duration: 0.3 }
                                }}
                                initial={{ rotate: 0 }}
                                animate={{
                                  rotate: [0, 5, -5, 0],
                                  transition: {
                                    repeat: Infinity,
                                    repeatType: 'mirror',
                                    duration: 2,
                                    ease: 'easeInOut'
                                  }
                                }}
                              >
                                <span className="text-3xl">+</span>
                              </motion.div>
                            </div>
                          </foreignObject>
                        </svg>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductShowcase;
