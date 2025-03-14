import bgimage from '@/assets/images/463.webp';
import product1Display from '@/assets/images/product1-display.webp';
import product2Display from '@/assets/images/product2-display.webp';
import product3Display from '@/assets/images/product3-display.webp';
import product4Display from '@/assets/images/product4-display.webp';
import product5Display from '@/assets/images/product5-display.webp';
import product6Display from '@/assets/images/product6-display.webp';
import product7Display from '@/assets/images/product7-display.webp';
import product8Display from '@/assets/images/product8-display.webp';

import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

const ProductShowcase = () => {
  const [activeTab, setActiveTab] = useState('nouveautes');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

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

  return (
    <div className="relative py-4 md:py-8">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgimage})`,
          filter: 'brightness(0.9)'
        }}
      />

      <div className="max-w-[90rem] mx-auto px-4 py-4 md:py-8">
        {/* Header Section */}
        <motion.div className="text-center mb-6 md:mb-12" initial="hidden" animate="visible" variants={staggerChildren}>
          <motion.h2
            variants={fadeInUp}
            className="text-red-500 font-custom font-bold  tracking-wide uppercase mb-2 md:mb-4 text-sm sm:text-base md:text-lg"
          >
            NOS PRODUITS
          </motion.h2>
          <motion.h1
            variants={fadeInUp}
            className="text-gray-700 font-custom font-bold  text-2xl sm:text-3xl md:text-4xl lg:text-6xl uppercase  mb-2"
          >
            Un univers
          </motion.h1>
          <motion.h2
            variants={fadeInUp}
            className="text-gray-700 font-custom font-bold  text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase"
          >
            gourmand et raffiné
          </motion.h2>
        </motion.div>

        {/* Navigation Tabs */}
        <div className="flex flex-col sm:flex-row justify-center gap-2 sm:space-x-4 mb-6 md:mb-8 relative rounded-xl">
          {[
            { id: 'nouveautes', label: 'Nouveautés' },
            { id: 'meilleures-ventes', label: 'Meilleures ventes' },
            { id: 'promotions', label: 'Promotions' }
          ].map((tab) => (
            <button
              key={tab.id}
              className={`px-4 sm:px-6 py-2 text-base md:text-lg transition-colors duration-300 rounded-full font-custom   ${
                activeTab === tab.id ? 'bg-red-500 text-white' : 'text-gray-600 hover:bg-red-50'
              }`}
              onClick={() => {
                setActiveTab(tab.id);
                setCurrentIndex(0);
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Carousel Section */}
        <div className="relative" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          {filteredProducts.length > getVisibleSlides() && (
            <>
              <button
                onClick={slideLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 text-white/80 bg-red-500 hover:text-white hover:bg-red-600 p-1 sm:p-2 shadow-lg z-10 transition-colors duration-300 rounded-full"
              >
                <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </button>

              <button
                onClick={slideRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 text-white/80 bg-red-500 hover:text-white hover:bg-red-600 p-1 sm:p-2 shadow-lg z-10 transition-colors duration-300 rounded-full"
              >
                <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </button>
            </>
          )}

          <div className="overflow-hidden">
            <motion.div
              className="flex"
              initial={false}
              animate={{
                x: `-${currentIndex * (100 / getVisibleSlides())}%`
              }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              {filteredProducts.map((product) => (
                <div key={product.id} className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2 sm:px-4 mb-6">
                  <div className="relative rounded-tl-[80px] rounded-bl-[80px] overflow-hidden border-2 border-red-600 transition-all duration-300 hover:shadow-xl bg-white h-full flex flex-col">
                    {/* White content area */}
                    <div className="flex-1 p-4 sm:p-6 relative">
                      {/* Product image */}
                      <div className="mb-3 sm:mb-4 flex items-center justify-center">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-contain"
                        />
                      </div>

                      {/* Tags at the top */}
                      <div className="flex flex-col  gap-2 mb-2">
                        <span className="px-2 font-custom font-medium sm:px-3 py-1 text-xs sm:text-sm bg-red-500 text-white rounded-full">
                          {product.type}
                        </span>
                        <span className="px-2 font-custom font-medium sm:px-3 py-1 text-xs sm:text-sm bg-red-100 text-red-800 rounded-full">
                          {product.category}
                        </span>
                      </div>
                    </div>

                    {/* Red bottom banner with product name */}
                    <div className="bg-[#AA071A] text-white p-4 rounded-tr-[50px] text-center">
                      <h3 className="font-custom font-bold  text-base sm:text-lg tracking-wide">{product.name}</h3>
                    </div>

                    {/* Bottom right corner accent */}
                    <div className="absolute bottom-0 right-0 w-6 h-6 sm:w-8 sm:h-8 bg-transparent flex items-center justify-center text-white font-bold">
                      <span className="text-xl sm:text-2xl">+</span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
