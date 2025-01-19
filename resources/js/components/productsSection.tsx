import bestSelling2 from '@/assets/images/carousel-1.webp';
import bestSelling from '@/assets/images/carousel-2.webp';
import bestSelling3 from '@/assets/images/carousel-3.webp';
import waves from '@/assets/images/waves.svg';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Container, Link } from './ui';

// Assuming these are your decorative images
const floatingImages = [
  bestSelling, // Replace with actual chocolate image paths
  bestSelling3
];

interface Product {
  id: string;
  title: string;
  subtitle: string;
  details: string;
  image: string;
  href: string;
}
const tabsData = {
  nouveaute: [
    {
      id: '1',
      title: 'Chocolat Noir Premium',
      subtitle: 'Chocolat 85% cacao',
      details: 'Nouveau',
      image: bestSelling2,
      href: '/products/chocolat-noir-premium'
    },
    {
      id: '2',
      title: 'Pralines Assorties',
      subtitle: 'Sélection de pralines',
      details: 'Nouveau',
      image: bestSelling2,
      href: '/products/pralines-assorties'
    },
    {
      id: '3',
      title: 'Truffes Royales',
      subtitle: 'Truffes au chocolat',
      details: 'Nouveau',
      image: bestSelling2,
      href: '/products/truffes-royales'
    }
  ],
  meilleursVentes: [
    {
      id: '4',
      title: 'Chocolat light noir',
      subtitle: 'Chocolat sans sucre 75% de cacao',
      details: 'Sachet',
      image: bestSelling,
      href: '/products/chocolat-light-noir'
    },
    {
      id: '5',
      title: 'Pâte à mâcher fruitée',
      subtitle: 'Bonbon fruité',
      details: 'Sachet',
      image: bestSelling,
      href: '/products/pate-a-macher-fruitee'
    },
    {
      id: '6',
      title: 'Pépites de chocolat noir',
      subtitle: 'Pépites de chocolat',
      details: 'Sachet',
      image: bestSelling,
      href: '/products/pepites-de-chocolate'
    }
  ],
  promotion: [
    {
      id: '7',
      title: 'Assortiment Dégustation',
      subtitle: 'Sélection spéciale',
      details: '-20%',
      image: bestSelling3,
      href: '/products/assortiment-degustation'
    },
    {
      id: '8',
      title: 'Coffret Prestige',
      subtitle: 'Edition limitée',
      details: '-15%',
      image: bestSelling3,
      href: '/products/coffret-prestige'
    },
    {
      id: '9',
      title: 'Pralines Signature',
      subtitle: 'Collection exclusive',
      details: '-25%',
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
    nouveaute: 'Nouveauté',
    meilleursVentes: 'Meilleurs ventes',
    promotion: 'Promotion'
  };

  return (
    <section
      className="py-36 md:py-24 px-4 overflow-hidden  lg:h-[800px]"
      style={{ background: `url(${waves}) center no-repeat` }}
    >
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
                    className={`px-7 py-3 rounded-full text-base font-body transition-all duration-300 ${
                      activeTab === key
                        ? 'bg-gradient-to-r from-red-600 to-red-900 hover:from-red-700 hover:to-red-900 text-white'
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
                        className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white p-4 text-center text-sm transition-colors duration-300"
                        whileHover={{
                          backgroundColor: 'rgba(220, 38, 38, 0.8)'
                        }}
                      >
                        {product.details}
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
  );
}
