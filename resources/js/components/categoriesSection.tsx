import candies from '@/assets/images/pic2.jpg';
import candy from '@/assets/images/pic3.jpg';
import choco from '@/assets/images/pic4.jpg';
import leonardo from '@/assets/images/pic5.jpg';
import wafer from '@/assets/images/pic6.jpg';
import { Button } from '@/components/ui/shadcn-button';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';

interface Category {
  title: string;
  image: string;
  href: string;
  description: string;
}

const categories: Category[] = [
  {
    title: 'Chocolats',
    image: wafer,
    href: '/products/chocolat/pâtes%20à%20tartiner',
    description: 'Découvrez notre sélection de chocolats premium'
  },
  {
    title: 'Confiseries',
    image: leonardo,
    href: '/products/confiserie/sucettes',
    description: 'Découvrez notre gamme de confiseries artisanales'
  },
  {
    title: 'Gaufrettes',
    image: candy,
    href: '/products/Gaufrettes/Gaufrettes enrobées',
    description: 'Parcourez notre collection de gaufrettes croustillantes'
  },
  {
    title: 'Pâtisseries',
    image: choco,
    href: '/products/Produits%20pâtissiers/chocolats%20pâtissiers',
    description: 'Découvrez nos pâtisseries fraîchement préparées'
  },
  {
    title: 'Fêtes et événements',
    image: candies,
    href: '/products/Fêtes%20et%20événements/Chocolats%20fins%20fourrés',
    description: 'Découvrez nos douceurs parfaites pour toutes vos célébrations'
  }
];

const CarouselCard = ({ category }: { category: Category }) => {
  return (
    <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] overflow-hidden rounded-lg group">
      {' '}
      <img
        src={category.image || '/placeholder.svg'}
        alt={category.title}
        className="h-full w-full object-fill transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-red-800 to-transparent transition-opacity duration-300 opacity-70 group-hover:opacity-90" />
      <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 text-white">
        <h3 className="text-2xl sm:text-3xl font-bold mb-2">{category.title}</h3>
        <p className="text-sm sm:text-md mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {category.description}
        </p>
        <a href={category.href}>
          <Button
            variant="outline"
            className="w-full bg-transparent border-white text-white hover:bg-white hover:text-red-600 transition-colors duration-300"
          >
            Découvrir
          </Button>
        </a>
      </div>
    </div>
  );
};

export default function EnhancedInfiniteCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout>();
  const totalItems = categories.length;

  const isSmallScreen = useMediaQuery('(max-width: 640px)');
  const isMediumScreen = useMediaQuery('(min-width: 641px) and (max-width: 1024px)');

  const itemsPerPage = isSmallScreen ? 1 : isMediumScreen ? 2 : 3;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  }, [totalItems]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  }, [totalItems]);

  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    autoPlayRef.current = setInterval(nextSlide, 5000);
    setIsAutoPlaying(true);
  }, [nextSlide]);

  const stopAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    setIsAutoPlaying(false);
  }, []);

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [startAutoPlay]);

  const visibleItems = [...categories, ...categories].slice(currentIndex, currentIndex + itemsPerPage);
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
  return (
    <div
      className="relative w-full max-w-[98rem] mx-auto px-4 py-12"
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      <motion.div className="text-center " initial="hidden" animate="visible" variants={staggerChildren}>
        <motion.h2
          variants={fadeInUp}
          className="text-red-500 font-medium tracking-wide uppercase mb-3 sm:mb-4
           text-sm sm:text-lg"
        >
          NOS PRODUITS
        </motion.h2>
        <motion.h1
          variants={fadeInUp}
          className="text-gray-700 text-4xl uppercase md:text-5xl lg:text-6xl font-medium mb-2"
        >
          Tout un monde
        </motion.h1>
        <motion.h2 variants={fadeInUp} className="text-gray-700 text-2xl uppercase md:text-3xl lg:text-4xl mb-12">
          de plaisir
        </motion.h2>
      </motion.div>
      <div className="overflow-hidden ">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentIndex}
            className="flex gap-4"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          >
            {visibleItems.map((category, index) => (
              <motion.div
                key={`${category.title}-${index}`}
                className={`flex-shrink-0 ${isSmallScreen ? 'w-full' : isMediumScreen ? 'w-1/2' : 'w-[33%]'}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <CarouselCard category={category} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute  left-0 top-[60%] border-transparent -translate-y-1/2 bg-red-700 hover:bg-red-400"
        onClick={() => {
          prevSlide();
          stopAutoPlay();
        }}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-[60%] border-transparent -translate-y-1/2  bg-red-700 hover:bg-red-400"
        onClick={() => {
          nextSlide();
          stopAutoPlay();
        }}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
}
