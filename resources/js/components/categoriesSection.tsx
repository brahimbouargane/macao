// import image2 from '@/assets/images/Container-2.png';
// import image3 from '@/assets/images/Container-3.png';
// import image4 from '@/assets/images/Container-4.png';
// import image1 from '@/assets/images/Container.png';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// import { useCallback, useEffect, useState } from 'react';

// interface Category {
//   title: string;
//   image: string;
//   href: string;
//   description?: string;
// }

// interface CategoryCardProps extends Category {
//   priority?: boolean;
// }

// const categories: Category[] = [
//   {
//     title: 'Chocolate',
//     image: image1,
//     href: '/categories/chocolate',
//     description: 'Explore our premium chocolate selection'
//   },
//   {
//     title: 'Confectionery',
//     image: image2,
//     href: '/categories/confectionery',
//     description: 'Discover our artisanal confectionery range'
//   },
//   {
//     title: 'Wafers',
//     image: image3,
//     href: '/categories/wafers',
//     description: 'Browse our crispy wafer collection'
//   },
//   {
//     title: 'Pastry',
//     image: image4,
//     href: '/categories/pastry',
//     description: 'View our freshly baked pastries'
//   },
//   {
//     title: 'Chocolate',
//     image: image1,
//     href: '/categories/chocolate',
//     description: 'Explore our premium chocolate selection'
//   }
// ];

// function CategoryCard({ title, image, href, description = '', priority = false }) {
//   const [isLoaded, setIsLoaded] = useState(false);

//   return (
//     <a
//       href={href}
//       className="group relative block overflow-hidden rounded-none transition-transform duration-300 hover:-translate-y-1"
//       aria-label={`View ${title} category`}
//     >
//       <div className="aspect-[3/4] relative bg-gray-100 overflow-hidden">
//         <img
//           src={image}
//           alt={description || `${title} category image`}
//           className={`
//               absolute inset-0 h-full w-full object-cover transition-all duration-300
//               group-hover:scale-105
//               ${isLoaded ? 'opacity-100' : 'opacity-0'}
//             `}
//           sizes="(min-width: 1536px) 20vw, (min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
//           loading={priority ? 'eager' : 'lazy'}
//           onLoad={() => setIsLoaded(true)}
//         />
//         {!isLoaded && <div className="absolute inset-0 animate-pulse bg-gray-200" />}

//         {/* Overlay with description */}
//         <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
//           <p className="text-white text-center px-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
//             {description}
//           </p>
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
//     </a>
//   );
// }

// function MobileCarousel({ children }) {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [touchStart, setTouchStart] = useState({ x: 0, time: 0 });
//   const [touchEnd, setTouchEnd] = useState({ x: 0, time: 0 });
//   const [isDragging, setIsDragging] = useState(false);
//   const [dragOffset, setDragOffset] = useState(0);

//   const handleNext = useCallback(() => {
//     setCurrentIndex((prevIndex) => (prevIndex === categories.length - 1 ? 0 : prevIndex + 1));
//     setDragOffset(0);
//   }, []);

//   const handlePrev = useCallback(() => {
//     setCurrentIndex((prevIndex) => (prevIndex === 0 ? categories.length - 1 : prevIndex - 1));
//     setDragOffset(0);
//   }, []);

//   const handleTouchStart = (e) => {
//     setIsDragging(true);
//     setTouchStart({
//       x: e.targetTouches[0].clientX,
//       time: Date.now()
//     });
//   };

//   const handleTouchMove = (e) => {
//     if (!isDragging) return;

//     const currentX = e.targetTouches[0].clientX;
//     const diff = currentX - touchStart.x;
//     setDragOffset(diff);
//     setTouchEnd({
//       x: currentX,
//       time: Date.now()
//     });

//     // Prevent default to stop scrolling
//     e.preventDefault();
//   };

//   const handleTouchEnd = () => {
//     setIsDragging(false);
//     const swipeDistance = touchEnd.x - touchStart.x;
//     const swipeTime = touchEnd.time - touchStart.time;
//     const velocity = Math.abs(swipeDistance / swipeTime);

//     // Calculate if swipe should trigger navigation
//     // Consider both distance and velocity
//     if (Math.abs(swipeDistance) > 50 || velocity > 0.5) {
//       if (swipeDistance > 0) {
//         handlePrev();
//       } else {
//         handleNext();
//       }
//     } else {
//       // Reset position if swipe wasn't strong enough
//       setDragOffset(0);
//     }
//   };

//   return (
//     <div className="relative w-full">
//       <div
//         className="overflow-hidden touch-pan-y select-none"
//         onTouchStart={handleTouchStart}
//         onTouchMove={handleTouchMove}
//         onTouchEnd={handleTouchEnd}
//       >
//         <div
//           className="flex transition-transform duration-300 ease-out"
//           style={{
//             transform: `translateX(calc(-${currentIndex * 100}% + ${dragOffset}px))`,
//             transition: isDragging ? 'none' : 'transform 300ms ease-out'
//           }}
//         >
//           {children}
//         </div>
//       </div>

//       <button
//         onClick={handlePrev}
//         className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg"
//         aria-label="Previous category"
//       >
//         <ChevronLeft className="w-6 h-6 text-gray-800" />
//       </button>

//       <button
//         onClick={handleNext}
//         className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg"
//         aria-label="Next category"
//       >
//         <ChevronRight className="w-6 h-6 text-gray-800" />
//       </button>

//       <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
//         {categories.map((_, index) => (
//           <button
//             key={index}
//             className={`w-2 h-2 rounded-full ${currentIndex === index ? 'bg-red-500' : 'bg-gray-300'}`}
//             onClick={() => setCurrentIndex(index)}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default function CategoryGrid() {
//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const checkIfMobile = () => {
//       setIsMobile(window.innerWidth < 640);
//     };

//     checkIfMobile();
//     window.addEventListener('resize', checkIfMobile);

//     return () => {
//       window.removeEventListener('resize', checkIfMobile);
//     };
//   }, []);

//   return (
//     <section className="py-8 sm:py-12 lg:py-16">
//       <div className="text-center mb-8 sm:mb-12">
//         <h2 className="text-red-500 font-medium tracking-wide uppercase mb-3 sm:mb-4 text-sm sm:text-base">
//           Categories
//         </h2>
//         <p className="text-gray-700 text-xl sm:text-2xl lg:text-3xl font-normal max-w-xl sm:max-w-2xl mx-auto px-4">
//           The best confectionery for your enjoyment
//         </p>
//       </div>

//       {isMobile ? (
//         <MobileCarousel>
//           {categories.map((category) => (
//             <div key={category.title} className="w-full flex-shrink-0">
//               <CategoryCard {...category} />
//             </div>
//           ))}
//         </MobileCarousel>
//       ) : (
//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8 xl:grid-cols-5 2xl:gap-10">
//           {categories.map((category, index) => (
//             <CategoryCard key={category.title} {...category} priority={index < 2} />
//           ))}
//         </div>
//       )}
//     </section>
//   );
// }
import candies from '@/assets/images/candies.webp';
import candy from '@/assets/images/candy.jpg';
import choco from '@/assets/images/chocolate.webp';
import leonardo from '@/assets/images/Leonardo.jpg';
import wafer from '@/assets/images/wafer.webp';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

interface Category {
  title: string;
  image: string;
  href: string;
  description?: string;
}

interface CategoryCardProps extends Category {
  priority?: boolean;
}

const categories: Category[] = [
  {
    title: 'Chocolat',
    image: choco,
    href: '/products/chocolate/Pâtes à tartiner',
    description: 'Découvrez notre sélection de chocolats premium'
  },
  {
    title: 'Confiserie',
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
    title: 'Pâtisserie',
    image: leonardo,
    href: '/products/Produits%20pâtissiers/chocolats%20pâtissiers',
    description: 'Découvrez nos pâtisseries fraîchement préparées'
  },
  {
    title: 'Fêtes et événements',
    image: candy,
    href: '/products/Fêtes%20et%20événements/Confiserie%20fine',
    description: 'Découvrez notre sélection de chocolats premium'
  }
];

function CategoryCard({ title, image, href, description = '', priority = false }: CategoryCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <a
      href={href}
      className="group relative block overflow-hidden rounded-none transition-transform duration-300 hover:-translate-y-1"
      aria-label={`Voir la catégorie ${title}`}
    >
      <div className="aspect-[3/4] relative bg-gray-100 overflow-hidden">
        <img
          src={image}
          alt={description || `Image de la catégorie ${title}`}
          className={`
            absolute inset-0 h-full w-full object-cover transition-all duration-300
            group-hover:scale-105
            ${isLoaded ? 'opacity-100' : 'opacity-0'}
          `}
          sizes="(min-width: 1536px) 20vw, (min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          loading={priority ? 'eager' : 'lazy'}
          onLoad={() => setIsLoaded(true)}
        />
        {!isLoaded && <div className="absolute inset-0 animate-pulse bg-gray-200" />}

        <div className="absolute inset-0 bg-black/0 group-hover:bg-red-500/70 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <p className="text-white text-center px-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            {description}
          </p>
        </div>
      </div>

      <div className="relative bottom-2 left-0 right-0">
        <svg
          className="w-full h-auto"
          viewBox="0 0 280 108"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M0 41.4273V107.993C0 107.993 44.631 108.828 83.2438 92.187C121.857 75.5456 213.69 53.9182 279.809 107.158C280.239 100.919 279.809 0 279.809 0H0.0942532L0 41.4273Z"
            fill="#FF2600"
            className="transition-colors duration-300 group-hover:fill-red-700"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <h3 className="text-center pb-4 font-medium text-white drop-shadow-md transform -translate-y-2 text-xl sm:text-xl md:text-2xl lg:text-xl xl:text-2xl">
            {title}
          </h3>
        </div>
      </div>
    </a>
  );
}

function MobileCarousel({ children }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState({ x: 0, time: 0 });
  const [touchEnd, setTouchEnd] = useState({ x: 0, time: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === categories.length - 1 ? 0 : prevIndex + 1));
    setDragOffset(0);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? categories.length - 1 : prevIndex - 1));
    setDragOffset(0);
  }, []);

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setTouchStart({
      x: e.targetTouches[0].clientX,
      time: Date.now()
    });
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const currentX = e.targetTouches[0].clientX;
    const diff = currentX - touchStart.x;
    setDragOffset(diff);
    setTouchEnd({
      x: currentX,
      time: Date.now()
    });
    e.preventDefault();
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    const swipeDistance = touchEnd.x - touchStart.x;
    const swipeTime = touchEnd.time - touchStart.time;
    const velocity = Math.abs(swipeDistance / swipeTime);

    if (Math.abs(swipeDistance) > 50 || velocity > 0.5) {
      if (swipeDistance > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    } else {
      setDragOffset(0);
    }
  };

  return (
    <div className="relative w-full">
      <div
        className="overflow-hidden touch-pan-y select-none"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{
            transform: `translateX(calc(-${currentIndex * 100}% + ${dragOffset}px))`,
            transition: isDragging ? 'none' : 'transform 300ms ease-out'
          }}
        >
          {children}
        </div>
      </div>

      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg"
        aria-label="Catégorie précédente"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg"
        aria-label="Catégorie suivante"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {categories.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${currentIndex === index ? 'bg-red-500' : 'bg-gray-300'}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Aller à la diapositive ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function CategoryGrid() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  return (
    <section className="py-8 sm:py-12 lg:py-16 relative overflow-hidden">
      {/* <div className="absolute right-0 -bottom-40 w-64 h-[20rem] translate-x-1/2 translate-y-1/2 ">
        <img src={third} alt="Decorative right candy" className="w-full h-full object-cover opacity-50" />
      </div>

      <div className="absolute left-0  w-64 h-[20rem]  -translate-x-[37%] translate-y-[116%]">
        <img src={second} alt="Floating candy 1" className="w-full h-full object-contain " />
      </div> */}

      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-red-500 font-medium tracking-wide uppercase mb-3 sm:mb-4 text-sm sm:text-base">
          Catégories
        </h2>
        <p className="text-gray-700 text-xl sm:text-2xl lg:text-3xl font-normal max-w-xl sm:max-w-2xl mx-auto px-4">
          Les meilleures confiseries pour votre plaisir
        </p>
      </div>

      {isMobile ? (
        <MobileCarousel>
          {categories.map((category) => (
            <div key={category.title} className="w-full flex-shrink-0">
              <CategoryCard {...category} />
            </div>
          ))}
        </MobileCarousel>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8 xl:grid-cols-5 2xl:gap-10">
          {categories.map((category, index) => (
            <CategoryCard key={category.title} {...category} priority={index < 2} />
          ))}
        </div>
      )}
    </section>
  );
}
