import macaoImage from '@/assets/images/macao_logo.png';
import { AnimatePresence, motion } from 'framer-motion';

import candies from '@/assets/images/candies.webp';
import candy from '@/assets/images/candy.webp';
import choco from '@/assets/images/chocolate.webp';
import leonardo from '@/assets/images/Leonardo.webp';
import wafer from '@/assets/images/wafer.webp';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';

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

const categories = [
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
// const CategoryCard = ({ category, className }) => {
//   return (
//     <motion.div className={`relative group ${className}`} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
//       {/* Base image */}
//       <div className="absolute inset-0">
//         <img src={category.image} alt={category.title} className="w-full h-full object-cover" />
//       </div>

//       {/* Gradient overlay */}
//       <div
//         className="absolute inset-0 bg-gradient-to-t from-black/80 to-red-600
//           opacity-60 group-hover:opacity-80 transition-opacity duration-300"
//       />

//       {/* Content */}
//       <div className="relative h-full p-6 flex flex-col justify-between">
//         {/* Title */}
//         <h3 className="text-white text-lg md:text-3xl  font-medium">{category.title}</h3>

//         {/* Description and button */}
//         <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
//           <p className="text-white mb-4">{category.description}</p>
//           <a
//             href={category.href}
//             className="inline-block bg-white text-red-600 px-6 py-2 font-medium
//               hover:bg-red-50 transition-colors duration-300"
//           >
//             Découvrir
//           </a>
//         </div>
//       </div>
//     </motion.div>
//   );
// };
// const BentoGrid = () => {
//   return (
//     <section className="mx-auto w-full max-w-[98rem] py-8 sm:py-12 lg:py-16 relative px-4">
//       <motion.div className="text-center mb-12" initial="hidden" animate="visible" variants={staggerChildren}>
//         <motion.h2
//           variants={fadeInUp}
//           className="text-red-500 font-medium tracking-wide uppercase mb-3 sm:mb-4 text-sm sm:text-lg"
//         >
//           NOS CATÉGORIES
//         </motion.h2>
//         <motion.h1
//           variants={fadeInUp}
//           className="text-gray-700 text-4xl uppercase md:text-5xl lg:text-6xl font-medium mb-2"
//         >
//           Tout un monde
//         </motion.h1>
//         <motion.h2 variants={fadeInUp} className="text-gray-700 text-2xl uppercase md:text-3xl lg:text-4xl">
//           de plaisir
//         </motion.h2>
//       </motion.div>

//       <div className="grid grid-cols-12 grid-rows-6 gap-4 ">
//         {/* First row - left card (8 cols) and right tall card (4 cols, 1.5 rows) */}
//         <CategoryCard category={categories[0]} className="col-span-8 row-span-2" />
//         <CategoryCard category={categories[1]} className="col-span-4 row-span-3" />

//         {/* Second row - left card (4 cols) and logo (4 cols) */}
//         <CategoryCard category={categories[2]} className="col-span-4 row-span-2" />
//         <motion.div
//           className="col-span-4 row-span-2 bg-white  flex items-center justify-center"
//           whileHover={{ y: -5 }}
//           transition={{ duration: 0.2 }}
//         >
//           <div className="text-center">
//             <img src={macaoImage} alt="Macao Logo" className="w-32 h-32 mx-auto " />
//           </div>
//         </motion.div>
//         <CategoryCard category={categories[4]} className="col-span-4 row-span-4" />

//         {/* Third row - wide card (8 cols) and tall card continues from top */}
//         <CategoryCard category={categories[3]} className="col-span-8 row-span-3 h-60" />
//       </div>
//     </section>
//   );
// };
// Mobile Carousel Card Component
const CarouselCard = ({ category, isActive }) => {
  return (
    <motion.div
      className="w-full h-[400px] relative flex-shrink-0"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0">
        <img src={category.image} alt={category.title} className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-red-600/60" />
      <div className="relative h-full p-6 flex flex-col justify-between">
        <h3 className="text-white text-3xl font-medium">{category.title}</h3>
        <div className="space-y-4">
          <p className="text-white text-lg">{category.description}</p>
          <a
            href={category.href}
            className="inline-block bg-white text-red-600 px-6 py-2 font-medium
                       hover:bg-red-50 transition-colors duration-300"
          >
            Découvrir
          </a>
        </div>
      </div>
    </motion.div>
  );
};

// Desktop Category Card Component
const CategoryCard = ({ category, className }) => {
  return (
    <motion.div className={`relative group ${className}`} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
      <div className="absolute inset-0">
        <img src={category.image} alt={category.title} className="w-full h-full object-cover" />
      </div>
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/80 to-red-600/60
                      opacity-60 group-hover:opacity-80 transition-opacity duration-300"
      />
      <div className="relative h-full p-6 flex flex-col justify-between">
        <h3 className="text-white text-lg md:text-3xl font-medium">{category.title}</h3>
        <div
          className="transform translate-y-4 opacity-0 group-hover:translate-y-0
                        group-hover:opacity-100 transition-all duration-300"
        >
          <p className="text-white mb-4">{category.description}</p>
          <a
            href={category.href}
            className="inline-block bg-white text-red-600 px-6 py-2 font-medium
                       hover:bg-red-50 transition-colors duration-300"
          >
            Découvrir
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const BentoGrid = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % categories.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + categories.length) % categories.length);
  };

  return (
    <section className="mx-auto w-full max-w-[98rem] py-8 sm:py-12 lg:py-16 relative px-4">
      <motion.div className="text-center mb-12" initial="hidden" animate="visible" variants={staggerChildren}>
        <motion.h2
          variants={fadeInUp}
          className="text-red-500 font-medium tracking-wide uppercase mb-3 sm:mb-4 text-sm sm:text-lg"
        >
          NOS CATÉGORIES
        </motion.h2>
        <motion.h1
          variants={fadeInUp}
          className="text-gray-700 text-4xl uppercase md:text-5xl lg:text-6xl font-medium mb-2"
        >
          Tout un monde
        </motion.h1>
        <motion.h2 variants={fadeInUp} className="text-gray-700 text-2xl uppercase md:text-3xl lg:text-4xl">
          de plaisir
        </motion.h2>
      </motion.div>

      {isMobile ? (
        // Mobile Carousel View
        <div className="relative">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <CarouselCard key={currentIndex} category={categories[currentIndex]} isActive={true} />
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-r-lg">
            <ChevronLeft className="w-6 h-6 text-red-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-l-lg"
          >
            <ChevronRight className="w-6 h-6 text-red-600" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {categories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'w-4 bg-red-500' : 'bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      ) : (
        // Desktop Grid View
        <div className="grid grid-cols-12 grid-rows-6 gap-4 h-[800px]">
          <CategoryCard category={categories[0]} className="col-span-8 row-span-2" />
          <CategoryCard category={categories[1]} className="col-span-4 row-span-3" />
          <CategoryCard category={categories[2]} className="col-span-4 row-span-2" />
          <motion.div
            className="col-span-4 row-span-2 bg-white flex items-center justify-center"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="text-center">
              <img src={macaoImage} alt="Macao Logo" className="w-32 h-32 mx-auto" />
            </div>
          </motion.div>
          <CategoryCard category={categories[4]} className="col-span-4 row-span-4" />
          <CategoryCard category={categories[3]} className="col-span-8 row-span-3" />
        </div>
      )}
    </section>
  );
};

export default BentoGrid;
