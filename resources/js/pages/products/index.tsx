import bgcandy from '@/assets/images/bg-candy.webp';
import candies from '@/assets/images/candies.webp';
import candy from '@/assets/images/candy.webp';
import chocobg from '@/assets/images/chocolat-bg.webp';
import choco from '@/assets/images/chocolate.webp';
import fetebg from '@/assets/images/cofes-bg.jpg';
import leonardo from '@/assets/images/Leonardo.webp';
import pastrybg from '@/assets/images/pastry-bg.webp';
import wafersbg from '@/assets/images/wafer-bg.webp';
import wafer from '@/assets/images/wafer.webp';

import { Badge } from '@/components/ui/shadcn-badge';
import { Button } from '@/components/ui/shadcn-button';
import { Input } from '@/components/ui/shadcn-input';
import { GuestLayout } from '@/layouts';
import { cn } from '@/utils/classes';
import { router, usePage } from '@inertiajs/react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import _ from 'lodash';
import { ChevronLeft, ChevronRight, ImageIcon, Search } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

// Product interface definition
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

// Category content configuration
const categoryContent = {
  Confiserie: {
    title: 'DÉLICES SUCRÉS MACAO',
    subtitle: 'Une gamme complète de confiseries artisanales',
    bgColor: 'from-red-600 to-red-700',
    bgImage: candies,
    overlayOpacity: 'opacity-80'
  },
  Chocolat: {
    title: 'CHOCOLAT EXQUIS',
    subtitle: 'Des créations chocolatées pour tous les plaisirs.',
    bgColor: 'from-amber-800 to-amber-900',
    bgImage: choco,
    overlayOpacity: '50'
  },
  Gaufrettes: {
    title: 'GAUFRETTES CROUSTILLANTES',
    subtitle: 'La légèreté et le croustillant à la perfection',
    bgColor: 'from-orange-400 to-orange-600',
    bgImage: wafer,
    overlayOpacity: '40'
  },
  'Produits pâtissiers': {
    title: 'PÂTISSERIE RAFFINÉE',
    subtitle: "L'excellence de la pâtisserie traditionnelle",
    bgColor: 'from-rose-400 to-rose-600',
    bgImage: leonardo,
    overlayOpacity: '45'
  },
  'Fêtes et événements': {
    title: 'CÉLÉBREZ VOS MOMENTS',
    subtitle: 'Des créations spéciales pour vos occasions',
    bgColor: 'from-purple-500 to-purple-700',
    bgImage: candy,
    overlayOpacity: '55'
  }
};

// Animation variants
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

// Constants
const ITEMS_PER_PAGE = 9;
const PLACEHOLDER_IMAGE = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='24' fill='%239ca3af' text-anchor='middle' dominant-baseline='middle'%3EMACAO%3C/text%3E%3C/svg%3E`;

const Products = () => {
  // State management
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end start']
  });

  const headerOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const headerScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  // Get page props
  const { products, parentCategory, childCategory } = usePage<{
    products: Product[];
    parentCategory: { name: string; childCategoriesNames: string[] };
    childCategory: { name: string };
  }>().props;

  // Search and filter logic
  const filteredProducts = products
    .filter((product) => (selectedCategory ? product.category === selectedCategory : true))
    .filter((product) => {
      if (!searchQuery) return true;
      const searchLower = searchQuery.toLowerCase();
      return (
        product.name.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower) ||
        product.product_type.name.toLowerCase().includes(searchLower)
      );
    });

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  // Reset pagination when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  // Navigation handler
  const handleCategoryChange = (name: string) => {
    setIsLoading(true);
    router.visit(`/products/${parentCategory.name}/${name}`, {
      onFinish: () => {
        setIsLoading(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  };

  // Pagination component
  const PaginationControls = () => (
    <div className="mt-8 flex items-center justify-center gap-2 text-white">
      <Button
        variant="outline"
        size="icon"
        onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
        disabled={currentPage === 1}
        className="hover:text-black"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <div className="flex gap-1">
        {_.range(1, totalPages + 1).map((page) => (
          <Button
            key={page}
            variant={currentPage === page ? 'default' : 'outline'}
            size="sm"
            onClick={() => setCurrentPage(page)}
            className={cn('min-w-[2.5rem] hover:text-black', currentPage === page && 'bg-red-600 hover:bg-red-700')}
          >
            {page}
          </Button>
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
        disabled={currentPage === totalPages}
        className="hover:text-black"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
  const getCategoryBackground = (categoryName) => {
    const bgStyles = {
      Confiserie: {
        background: `url('${bgcandy}')`,
        overlay: 'rgba(0, 0, 0, 0.5)',
        position: 'center',
        size: '100% 100%'
      },
      Chocolat: {
        background: `url('${chocobg}')`,
        overlay: 'rgba(0, 0, 0, 0.5)',
        position: 'center',
        size: '100% 100%'
      },
      Gaufrettes: {
        background: `url('${wafersbg}')`,
        overlay: 'rgba(0, 0, 0, 0.5)',
        position: 'center',
        size: '100% 100%'
      },
      'Produits pâtissiers': {
        background: `url('${pastrybg}')`,
        overlay: 'rgba(0, 0, 0, 0.5)',
        position: 'center',
        size: '100% 100%'
      },
      'Fêtes et événements': {
        background: `url('${fetebg}')`,
        overlay: 'rgba(0, 0, 0, 0.5)',
        position: 'center',
        size: '100% 100%'
      }
    };

    return bgStyles[categoryName] || bgStyles.Chocolat;
  };

  return (
    <>
      <ScrollProgress />

      {/* Hero Section */}
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

      {/* Main Content */}
      <div
        className="min-w-full min-h-screen"
        style={{
          background: `linear-gradient(${getCategoryBackground(parentCategory.name).overlay}, ${getCategoryBackground(parentCategory.name).overlay}), ${getCategoryBackground(parentCategory.name).background}`,
          backgroundSize: getCategoryBackground(parentCategory.name).size,
          backgroundPosition: getCategoryBackground(parentCategory.name).position,
          backgroundRepeat: 'no-repeat', // Changed to repeat for seamless tiling
          transition: 'background 0.3s ease-in-out'
        }}
      >
        <motion.div
          variants={pageTransition}
          initial="hidden"
          animate="visible"
          className="max-w-[98rem] mx-auto px-4 py-16 "
        >
          <div className="flex flex-col gap-8 lg:flex-row">
            {/* Sidebar */}
            <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="w-full lg:w-72">
              <div className="sticky top-36 space-y-6">
                {/* Search Input */}
                <div className="rounded-xl bg-white p-6 shadow-lg">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="Rechercher..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Categories */}
                <div className="rounded-xl bg-white p-6 shadow-lg">
                  <h2 className="mb-4 text-lg font-semibold tracking-tight text-black">{parentCategory.name}</h2>
                  <div className="space-y-2">
                    {parentCategory.childCategoriesNames.map((name) => (
                      <motion.button
                        key={name}
                        whileHover={{ x: 4, backgroundColor: 'rgb(254, 242, 242)' }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleCategoryChange(name)}
                        disabled={isLoading}
                        className={cn(
                          'flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-all text-black',
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
              </div>
            </motion.div>

            {/* Product Grid */}
            <div className="flex-1">
              <AnimatePresence mode="wait">
                {paginatedProducts.length > 0 ? (
                  <motion.div
                    key={selectedCategory || 'all'}
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
                  >
                    {paginatedProducts.map((product) => (
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
                            src={product.primaryImage.optimized || PLACEHOLDER_IMAGE}
                            alt={product.name}
                            width={400}
                            height={400}
                            className={cn('h-full w-full object-cover', imageError && 'bg-red-300')}
                            onError={() => setImageError(true)}
                          />
                        </div>
                        {imageError && (
                          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                            <div className="text-center">
                              <div className="text-gray-400 mb-2">
                                <ImageIcon className="mx-auto h-12 w-12" />
                              </div>
                              <p className="text-sm text-gray-500">Image non disponible</p>
                            </div>
                          </div>
                        )}
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
                ) : (
                  <motion.div
                    variants={fadeInUp}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <ImageIcon className="mb-4 h-12 w-12 text-gray-400" />
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">Aucun produit trouvé</h3>
                    <p className="text-sm text-gray-600">Essayez de modifier vos critères de recherche</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Pagination Controls */}
              {filteredProducts.length > ITEMS_PER_PAGE && <PaginationControls />}
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Products;
Products.layout = (page: any) => <GuestLayout children={page} />;
