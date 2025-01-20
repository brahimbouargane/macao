import bestSelling2 from '@/assets/images/carousel-1.webp';
import bestSelling from '@/assets/images/carousel-2.webp';
import bestSelling3 from '@/assets/images/carousel-3.webp';
import pro1 from '@/assets/images/product-1.webp';
import pro2 from '@/assets/images/product-2.webp';
import pro3 from '@/assets/images/product-3.webp';
import pro4 from '@/assets/images/product-4.webp';
import pro5 from '@/assets/images/product-5.webp';
import pro6 from '@/assets/images/product-6.webp';

import waves from '@/assets/images/wave$.png';
import { AnimatePresence, motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { Container, Link } from './ui';
import { Button } from './ui/shadcn-button';

// Assuming these are your decorative images
const floatingImages = [
  bestSelling, // Replace with actual chocolate image paths
  bestSelling3
];

interface Product {
  id: string;
  title: string;
  subtitle: string;
  price?: string;
  image: string;
  bgColor?: string;
}
const tabsData = {
  nouveaute: [
    {
      id: '1',
      title: 'Chocolat Noir Premium',
      subtitle: 'Chocolat 85% cacao',
      details: 'Savoir plus',
      image: bestSelling2,
      href: '/products/chocolat-noir-premium'
    },
    {
      id: '2',
      title: 'CHOCOLAT LIGHT NOIR',
      subtitle: 'Chocolat Sans Sucre 73 % de Cacao',
      details: 'Savoir plus',
      image: pro1,
      href: '/products/pralines-assorties'
    },
    {
      id: '3',
      title: 'CHOCOLAT FONDANT NOIR',
      subtitle: 'Tablette de Chocolat 73% de Cacao',
      details: 'Savoir plus',
      image: pro2,
      href: '/products/truffes-royales'
    }
  ],
  meilleursVentes: [
    {
      id: '4',
      title: 'CHOCODÉJ',
      subtitle: 'Poudre de Cacao Sucré',
      details: 'Savoir plus',
      image: pro6,
      href: '/products/chocolat-light-noir'
    },
    {
      id: '5',
      title: 'Pâte à mâcher fruitée',
      subtitle: 'Bonbon fruité',
      details: 'Savoir plus',
      image: pro3,
      href: '/products/pate-a-macher-fruitee'
    },
    {
      id: '6',
      title: 'Pépites de chocolat noir',
      subtitle: 'Pépites de chocolat',
      details: 'Savoir plus',
      image: bestSelling,
      href: '/products/pepites-de-chocolate'
    }
  ],
  promotion: [
    {
      id: '7',
      title: 'CHOCOLAT DE COUVERTURE NOIR 57% CACAO',
      subtitle: 'Chocolat de Couverture Noir 57% Cacao',
      details: 'Savoir plus',
      image: pro4,
      href: '/products/assortiment-degustation'
    },
    {
      id: '8',
      title: 'DIAMANTS',
      subtitle: 'Assortiment De Chocolats Fins',
      details: 'Savoir plus',
      image: pro5,
      href: '/products/coffret-prestige'
    },
    {
      id: '9',
      title: 'Pralines Signature',
      subtitle: 'Collection exclusive',
      details: 'Savoir plus',
      image: bestSelling3,
      href: '/products/pralines-signature'
    }
  ]
};

const FloatingImage = ({ src, className }) => {
  return (
    <motion.img
      src={src}
      className={`absolute pointer-events-none ${className} w-28 h-28`}
      animate={{
        y: ['0%', '-20%', '0%'],
        rotate: [0, 10, -10, 0]
      }}
      transition={{
        duration: Math.random() * 3 + 4,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
      alt="Floating decoration"
    />
  );
};

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

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      duration: 0.5
    }
  },
  hover: {
    y: -10,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 10
    }
  }
};

export default function ProductTabs() {
  const [activeTab, setActiveTab] = useState<'nouveaute' | 'meilleursVentes' | 'promotion'>('nouveaute');
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const tabTitles = {
    nouveaute: 'Nouveautés',
    meilleursVentes: 'Meilleures ventes',
    promotion: 'Promotions'
  };
  const ProductCard = ({ product }: { product: Product }) => {
    return (
      <motion.div
        key={product.id}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        custom={product.id}
        className={`relative transition-all duration-300 ${product.id === '1' ? 'md:top-8 lg:top-12' : ''}`}
      >
        <div className="w-full aspect-square relative bg-white">
          <img
            src={product.image}
            alt={product.title}
            className="object-contain p-4 hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="relative">
          <svg viewBox="0 0 500 200" preserveAspectRatio="none" className="w-full h-40 transform translate-y-1">
            <path
              d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,200.00 L0.00,200.00 Z"
              className="fill-[#1A0B2E]" // Deep purple for wave
            />
          </svg>
          <div className="absolute inset-0 flex flex-col justify-center px-6 -mb-12">
            <div className="flex items-center justify-between mb-1">
              <span className="text-white font-medium text-lg line-clamp-1">{product.title}</span>
              <span className="text-white/90 font-bold">{product.price}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-300 text-sm line-clamp-1">{product.subtitle}</span>
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8 text-white hover:text-white hover:bg-[#3B185F] transition-colors duration-300"
              >
                <ShoppingCart className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };
  return (
    // <section
    //   className="py-36 md:py-24 px-4 overflow-hidden -mt-20  lg:h-[1200px]"
    //   style={{ background: `url(${waves}) center no-repeat` }}
    // >
    <div className="relative ">
      <div
        className="absolute right-0 left-0 inset-0 w-full h-full z-0"
        style={{
          background: `url(${waves}) center/cover no-repeat`,
          transform: 'scale(1)',
          pointerEvents: 'none'
        }}
      />
      <section className="py-10 md:py-8 px-4 overflow-visible relative w-full lg:h-[900px]">
        <Container>
          <div className="container mx-auto relative z-10">
            <motion.div className="text-center" initial="hidden" animate="visible" variants={staggerChildren}>
              <motion.h2
                variants={fadeInUp}
                className="text-white uppercase font-medium tracking-wide mb-3 sm:mb-4 text-base md:text-2xl"
              >
                NOS PRODUITS
              </motion.h2>
              <motion.div variants={fadeInUp} className="mb-12">
                <div className="flex justify-center space-x-4">
                  {Object.entries(tabTitles).map(([key, title]) => (
                    <motion.button
                      key={key}
                      onClick={() => setActiveTab(key as keyof typeof tabTitles)}
                      className={`px-4 py-2 text-xs  md:px-7 md:py-3 rounded-full md:text-base font-body transition-all duration-300 ${
                        activeTab === key
                          ? 'bg-gradient-to-r from-red-200 to-red-400 hover:from-red-400 hover:to-red-900 text-white'
                          : 'bg-white/80 text-gray-600 hover:bg-white'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {title}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative"
              >
                {tabsData[activeTab].map((product, index) => (
                  <motion.div
                    key={product.id}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    custom={index}
                    className={`relative transition-all duration-300 ${index === 1 ? 'md:top-8 lg:top-12' : ''}`}
                  >
                    <Link href={product.href} className="block">
                      <motion.div
                        className="bg-white backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                        onHoverStart={() => setIsHovered(product.id)}
                        onHoverEnd={() => setIsHovered(null)}
                      >
                        <div className="p-8">
                          <div className="mx-auto max-w-[200px] md:max-w-[180px] lg:max-w-[220px] mb-6">
                            <motion.div
                              className="aspect-square relative"
                              animate={{
                                rotate: isHovered === product.id ? [0, -5, 5, 0] : 0
                              }}
                              transition={{
                                duration: 0.5,
                                ease: 'easeInOut'
                              }}
                            >
                              <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                              />
                            </motion.div>
                          </div>
                          <div className="text-center space-y-2">
                            <h4 className="text-gray-800 text-xl font-medium uppercase">{product.title}</h4>
                            <p className="text-gray-600 text-sm">{product.subtitle}</p>
                          </div>
                        </div>
                        <motion.div
                          className="bg-gradient-to-r from-red-200 to-red-400 hover:from-red-400 hover:to-red-900 text-white p-4 text-center text-sm transition-colors duration-300"
                          whileHover={{
                            backgroundColor: 'rgba(220, 38, 38, 0.8)'
                          }}
                        >
                          <Link href={product.href}>{product.details}</Link>
                        </motion.div>
                      </motion.div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </Container>
      </section>
    </div>
  );
}
