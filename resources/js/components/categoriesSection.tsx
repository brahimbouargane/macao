// import candies from '@/assets/images/candies.webp';
// import candy from '@/assets/images/candy.webp';
// import choco from '@/assets/images/chocolate.webp';
// import leonardo from '@/assets/images/Leonardo.webp';
// import wafer from '@/assets/images/wafer.webp';
// import { motion } from 'framer-motion';
// import React, { useState } from 'react';
// import {
//   Carousel,
//   CarouselApi,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious
// } from './ui/shadcn-carousel';

// interface Category {
//   title: string;
//   image: string;
//   href: string;
//   description?: string;
// }

// interface CategoryCardProps extends Category {
//   priority?: boolean;
// }

// function CategoryCard({ title, image, href, description = '', priority = false }: CategoryCardProps) {
//   const [isLoaded, setIsLoaded] = useState(false);

//   return (
//     <div
//       className="group relative block overflow-hidden rounded-none transition-transform duration-300 hover:-translate-y-1"
//       aria-label={`Voir la catégorie ${title}`}
//     >
//       <div className="aspect-[3/4] relative bg-gray-100 overflow-hidden">
//         <img
//           src={image}
//           alt={description || `Image de la catégorie ${title}`}
//           className={`
//           absolute inset-0 h-full w-full object-cover transition-all duration-300
//           group-hover:scale-105 group-hover:blur-sm
//           ${isLoaded ? 'opacity-100' : 'opacity-0'}
//         `}
//           sizes="(min-width: 1536px) 20vw, (min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
//           loading={priority ? 'eager' : 'lazy'}
//           onLoad={() => setIsLoaded(true)}
//         />
//         {!isLoaded && <div className="absolute inset-0 animate-pulse bg-gray-200" />}

//         <div className="absolute inset-0 bg-black/0 group-hover:bg-red-500/90 transition-all duration-500 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 p-6">
//           <p className="text-white text-center mb-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-400 text-lg">
//             {description}
//           </p>
//           <a
//             href={href}
//             className="inline-flex items-center justify-center px-6 py-2 bg-white text-red-500 font-medium rounded-full
//                    transform translate-y-4 group-hover:translate-y-0  duration-300 delay-300
//                    hover:bg-red-50 hover:scale-105 transition-all"
//           >
//             Découvrir
//             <svg
//               className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//             </svg>
//           </a>
//         </div>
//       </div>

//       <div className="relative bottom-2 left-0 right-0">
//         <svg
//           className="w-full h-auto"
//           viewBox="0 0 280 108"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//           aria-hidden="true"
//         >
//           <path
//             d="M0 41.4273V107.993C0 107.993 44.631 108.828 83.2438 92.187C121.857 75.5456 213.69 53.9182 279.809 107.158C280.239 100.919 279.809 0 279.809 0H0.0942532L0 41.4273Z"
//             fill="#FF2600"
//             className="transition-colors duration-300 group-hover:fill-red-700"
//           />
//         </svg>
//         <div className="absolute inset-0 flex items-center justify-center">
//           <h3 className="text-center pb-4 font-medium text-white drop-shadow-md transform -translate-y-2 text-xl sm:text-xl md:text-2xl lg:text-xl xl:text-2xl">
//             {title}
//           </h3>
//         </div>
//       </div>
//     </div>
//   );
// }

// const categories: Category[] = [
//   {
//     title: 'Chocolats',
//     image: choco,
//     href: '/products/chocolat/pâtes%20à%20tartiner',
//     description: 'Découvrez notre sélection de chocolats premium'
//   },
//   {
//     title: 'Confiseries',
//     image: candies,
//     href: '/products/confiserie/sucettes',
//     description: 'Découvrez notre gamme de confiseries artisanales'
//   },
//   {
//     title: 'Gaufrettes',
//     image: wafer,
//     href: '/products/Gaufrettes/Gaufrettes enrobées',
//     description: 'Parcourez notre collection de gaufrettes croustillantes'
//   },
//   {
//     title: 'Pâtisseries',
//     image: leonardo,
//     href: '/products/Produits%20pâtissiers/chocolats%20pâtissiers',
//     description: 'Découvrez nos pâtisseries fraîchement préparées'
//   },
//   {
//     title: 'Fêtes et événements',
//     image: candy,
//     href: '/products/Fêtes%20et%20événements/Chocolats%20fins%20fourrés',
//     description: 'Découvrez nos douceurs parfaites pour toutes vos célébrations'
//   }
// ];

// const fadeInUp = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 }
// };

// const staggerChildren = {
//   visible: {
//     transition: {
//       staggerChildren: 0.2
//     }
//   }
// };

// export default function CategoryCarousel() {
//   const [api, setApi] = React.useState<CarouselApi>();
//   const [current, setCurrent] = React.useState(0);
//   const [count, setCount] = React.useState(0);

//   React.useEffect(() => {
//     if (!api) {
//       return;
//     }

//     setCount(api.scrollSnapList().length);
//     setCurrent(api.selectedScrollSnap());

//     api.on('select', () => {
//       setCurrent(api.selectedScrollSnap());
//     });
//   }, [api]);

//   return (
//     <section className="mx-auto w-full max-w-[98rem] py-8 sm:py-12 lg:py-16 relative overflow-hidden px-4">
//       <motion.div className="text-center mb-12" initial="hidden" animate="visible" variants={staggerChildren}>
//         <motion.h2
//           variants={fadeInUp}
//           className="text-red-500 font-medium tracking-wide uppercase mb-3 sm:mb-4 text-sm sm:text-lg"
//         >
//           NOS PRODUITS
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

//       <Carousel
//         setApi={setApi}
//         className="w-full"
//         opts={{
//           align: 'start',
//           loop: true
//         }}
//       >
//         <CarouselContent className="-ml-4">
//           {categories.map((category, index) => (
//             <CarouselItem key={category.title} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
//               <a href={category.href} className="block">
//                 <CategoryCard {...category} priority={index < 2} />
//               </a>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//         <CarouselPrevious className="hidden sm:flex" />
//         <CarouselNext className="hidden sm:flex" />
//       </Carousel>

//       <div className="py-4 text-center">
//         <div className="flex items-center justify-center gap-2">
//           {Array.from({ length: count }).map((_, index) => (
//             <button
//               key={index}
//               className={`h-2 w-2 rounded-full transition-all duration-300 ${
//                 index === current ? 'w-4 bg-red-500' : 'bg-gray-300'
//               }`}
//               onClick={() => api?.scrollTo(index)}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

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
  let position = null;
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
      translateX = position * 300;
      //   rotateY = position * -30;
      rotateY = 0;

      opacity = 0.9;
      scale = 1;
      zIndex = 5;
    } else if (position === 2 || position === -2) {
      // Images further to sides
      translateZ = -300;
      translateX = position * 350;
      //   rotateY = position * -45;
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
      className="group absolute top-0 left-0 w-full transition-all duration-500 rounded-2xl"
      style={getStyles()}
      aria-label={`Voir la catégorie ${title}`}
    >
      <a href={href}>
        <div className="aspect-[3/4] relative bg-gray-100 overflow-hidden rounded-2xl">
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
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-red-600/40 to-black transition-opacity duration-500"></div>
          )}
          {/* Hover overlay with increased red opacity */}
          {position === 0 && (
            <div className="absolute inset-0 bg-gradient-to-b from-red-500/0 via-red-500/20 to-red-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          )}
          {/* Content overlay */}
          {position === 0 && (
            <div className="absolute inset-0 bg-black/0 group-hover:bg-red-500/20 transition-all duration-500 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 p-6">
              <p className="text-white text-center mb-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-400 text-lg">
                {description}
              </p>
              <a
                href={href}
                className="inline-flex items-center justify-center px-6 py-2 bg-white text-red-500 font-medium rounded-full
                   transform translate-y-4 group-hover:translate-y-0 duration-300 delay-300
                    transition-all"
              >
                Découvrir
                <svg
                  className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
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

export default function Category3DCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

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

  return (
    <section className="mx-auto w-full max-w-[98rem] py-8 sm:py-12 lg:py-16 relative overflow-hidden px-4">
      <motion.div className="text-center mb-12" initial="hidden" animate="visible" variants={staggerChildren}>
        <motion.h2
          variants={fadeInUp}
          className="text-red-500 font-medium tracking-wide uppercase mb-3 sm:mb-4 text-sm sm:text-lg"
        >
          NOS PRODUITS
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

      {/* 3D Carousel Container */}
      <div className="relative w-full h-[520px] lg:h-[600px] flex justify-center items-center perspective-1000 overflow-hidden">
        <div className="relative w-full max-w-md h-full transform-style-3d">
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
        <button
          onClick={handlePrev}
          className="absolute left-4 z-10 w-12 h-12 flex items-center justify-center rounded-full text-white/80 bg-red-500 hover:text-white hover:bg-red-600 transition-all duration-300 shadow-md"
          aria-label="Previous slide"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 z-10 w-12 h-12 flex items-center justify-center rounded-full text-white/80 bg-red-500 hover:text-white hover:bg-red-600 transition-all duration-300 shadow-md"
          aria-label="Next slide"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </section>
  );
}
