import candies from '@/assets/images/candies.webp';
import candy from '@/assets/images/candy.jpg';
import choco from '@/assets/images/chocolate.webp';
import leonardo from '@/assets/images/Leonardo.jpg';
import wafer from '@/assets/images/wafer.webp';
import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navBar';
import { Badge } from '@/components/ui/shadcn-badge';
import { cn } from '@/utils/classes';
import { router, usePage } from '@inertiajs/react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

// Import images and other dependencies...
interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  pieces: number;
  category: string;
  product_type: { name: string };
  primaryImage: { optimized: string };
}

const categoryContent = {
  Confiserie: {
    title: 'DÉLICES SUCRÉS MACAO',
    subtitle: 'Une gamme complète de confiseries artisanales',
    bgColor: 'from-red-600 to-red-700',
    bgImage: candies, // Image of colorful candies
    overlayOpacity: 'opacity-80' // Control darkness of overlay
  },
  Chocolat: {
    title: "L'ART DU CHOCOLAT",
    subtitle: 'Des chocolats fins pour tous les goûts',
    bgColor: 'from-amber-800 to-amber-900',
    bgImage: choco, // Rich chocolate pieces/truffles
    overlayOpacity: '50'
  },
  Gaufrettes: {
    title: 'GAUFRETTES CROUSTILLANTES',
    subtitle: 'La légèreté et le croustillant à la perfection',
    bgColor: 'from-orange-400 to-orange-600',
    bgImage: wafer, // Stacked wafers
    overlayOpacity: '40'
  },
  'Produits pâtissiers': {
    title: 'PÂTISSERIE RAFFINÉE',
    subtitle: "L'excellence de la pâtisserie traditionnelle",
    bgColor: 'from-rose-400 to-rose-600',
    bgImage: leonardo, // Elegant pastries
    overlayOpacity: '45'
  },
  'Fêtes et événements': {
    title: 'CÉLÉBREZ VOS MOMENTS',
    subtitle: 'Des créations spéciales pour vos occasions',
    bgColor: 'from-purple-500 to-purple-700',
    bgImage: candy, // Festive candies arrangement
    overlayOpacity: '55'
  }
};

// Enhanced animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const pageTransition = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: 'easeInOut'
    }
  }
};

// Scroll progress indicator component
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-white origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  //   const productGridRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end start']
  });

  const headerOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const headerScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  const { products, parentCategory, childCategory } = usePage<{
    products: Product[];
    parentCategory: { name: string; childCategoriesNames: string[] };
    childCategory: { name: string };
  }>().props;
  console.log(products);
  console.log(parentCategory);
  console.log(childCategory);
  // Enhanced filtering with animation support
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  // Loading state handler for navigation
  const handleCategoryChange = (name: string) => {
    setIsLoading(true);

    router.visit(`/products/${parentCategory.name}/${name}`, {
      onFinish: () => {
        setIsLoading(false);
        // Scroll to top after navigation
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    });
  };

  return (
    <>
      <Navbar />
      <ScrollProgress />

      {/* Hero Section with enhanced animations */}
      <motion.div
        ref={scrollRef}
        style={{
          opacity: headerOpacity,
          y: headerY,
          scale: headerScale
        }}
        className={`relative overflow-hidden bg-gradient-to-r ${
          categoryContent[parentCategory.name]?.bgColor || 'from-red-600 to-red-700'
        }`}
      >
        {/* Hero content... */}
        <div className="absolute inset-0">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${categoryContent[parentCategory.name]?.bgImage || '/placeholder.svg'})`,
              opacity: '0.20'
            }}
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black ${
              categoryContent[parentCategory.name]?.overlayOpacity
            } to-transparent`}
          />
        </div>

        {/* Hero text content */}
        <div className="container relative mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="flex min-h-[500px] items-center justify-center py-20"
          >
            <div className="text-center">
              <motion.h1 variants={fadeInUp} className="mb-6 text-4xl font-bold text-white md:text-6xl">
                {categoryContent[parentCategory.name]?.title || 'MACAO CÉLÈBRE VOS FÊTES'}
              </motion.h1>
              <motion.p variants={fadeInUp} className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
                {categoryContent[parentCategory.name]?.subtitle || 'Découvrez notre collection'}
              </motion.p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content with AnimatePresence for smooth transitions */}
      <motion.div variants={pageTransition} initial="hidden" animate="visible" className="container mx-auto px-4 py-16">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Sidebar with hover effects */}
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="w-full lg:w-72">
            <div className="sticky top-24 rounded-xl bg-white p-6 shadow-lg">
              <h2 className="mb-4 text-lg font-semibold tracking-tight">{parentCategory.name}</h2>
              <div className="space-y-2">
                {parentCategory.childCategoriesNames.map((name) => (
                  <motion.button
                    key={name}
                    whileHover={{ x: 4, backgroundColor: 'rgb(254, 242, 242)' }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleCategoryChange(name)}
                    disabled={isLoading}
                    className={cn(
                      'flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-all',
                      childCategory.name === name ? 'bg-red-50 text-red-600' : 'hover:bg-red-50 hover:text-red-600',
                      isLoading && 'opacity-50 cursor-not-allowed'
                    )}
                  >
                    {name.toLowerCase().replace(/^\w/, (c) => c.toUpperCase())}
                    {isLoading && childCategory.name === name && (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="h-4 w-4 border-2 border-red-600 border-t-transparent rounded-full"
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Product Grid with AnimatePresence */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCategory || 'all'}
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
              >
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    variants={fadeInUp}
                    whileHover={{ y: -8 }}
                    className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="aspect-square overflow-hidden">
                      <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                        src={product.primaryImage.optimized}
                        alt={product.name}
                        width={400}
                        height={400}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <Badge variant="secondary" className="mb-2 transition-colors hover:bg-red-100">
                        {product.product_type.name}
                      </Badge>
                      <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                      <p className="mt-1 text-sm text-gray-600">{product.description}</p>
                      <div className="mt-4 flex items-center justify-between">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => router.visit(`/products/${product.id}`)}
                          className="rounded-full bg-red-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700"
                        >
                          Voir plus
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
};

export default Products;
