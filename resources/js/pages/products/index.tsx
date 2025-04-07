import macao from '@/assets/images/macoa-logo-small-red.svg';
import choco from '@/assets/images/NewBannerChocolate.webp';
import candies from '@/assets/images/NewBannerConfiseries.webp';
import candy from '@/assets/images/NewBannerFetes.webp';
import wafer from '@/assets/images/NewBannerGaufrettes.webp';
import leonardo from '@/assets/images/NewBannerPatisseries.webp';
import { Button } from '@/components/ui/shadcn-button';
import { Input } from '@/components/ui/shadcn-input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/shadcn-select';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/shadcn-sheet';
import { NewLayout } from '@/layouts/new-layout';
import { cn } from '@/utils/classes';
import { router, usePage } from '@inertiajs/react';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import _ from 'lodash';
import { ChevronLeft, ChevronRight, Filter, ImageIcon, Search, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

// Product interface
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
    bgColor: 'from-red-700 to-red-800',
    bgImage: candies,
    overlayOpacity: 'opacity-80'
  },
  Chocolat: {
    title: 'CHOCOLAT EXQUIS',
    subtitle: 'Des créations chocolatées pour tous les plaisirs.',
    bgColor: 'from-amber-900 to-amber-950',
    bgImage: choco,
    overlayOpacity: '50'
  },
  Gaufrettes: {
    title: 'GAUFRETTES CROUSTILLANTES',
    subtitle: 'La légèreté et le croustillant à la perfection',
    bgColor: 'from-orange-600 to-orange-700',
    bgImage: wafer,
    overlayOpacity: '40'
  },
  'Produits pâtissiers': {
    title: 'PÂTISSERIE RAFFINÉE',
    subtitle: "L'excellence de la pâtisserie traditionnelle",
    bgColor: 'from-rose-800 to-rose-900',
    bgImage: leonardo,
    overlayOpacity: '45'
  },
  'Fêtes et événements': {
    title: 'CÉLÉBREZ VOS MOMENTS',
    subtitle: 'Des créations spéciales pour vos occasions',
    bgColor: 'from-purple-700 to-purple-800',
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

// Constants
const ITEMS_PER_PAGE = 9;
const PLACEHOLDER_IMAGE = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='24' fill='%239ca3af' text-anchor='middle' dominant-baseline='middle'%3EMACAO%3C/text%3E%3C/svg%3E`;

// Product Card Component
const ProductCard = ({ product, onError }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group relative h-full overflow-hidden border-2 border-[#AA071A] rounded-tl-[60px] rounded-bl-[60px] transition-all duration-300 w-full md:max-w-sm"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute top-2 right-2 w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-red-700 font-bold"
        whileHover={{
          scale: 1.2,
          //   rotate: 25,
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
        <img src={macao} alt="macao pastore" className="h-10 w-10" />
      </motion.div>
      <div className="bg-red-700">
        <div className="aspect-square overflow-hidden relative rounded-br-[80px] bg-white">
          <motion.img
            initial={{ scale: 1 }}
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.4 }}
            src={product.primaryImage.optimized || PLACEHOLDER_IMAGE}
            alt={product.name}
            className="h-full w-full object-cover"
            onError={onError}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center"
          >
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-black rounded-full"
              onClick={() => router.visit(`/products/${product.id}`)}
            >
              Voir les détails
            </Button>
          </motion.div>
        </div>

        <div className="p-6">
          {/* <div className="mb-2 text-sm text-white font-medium">{product.product_type.name}</div> */}
          <h3 className="text-lg font-semibold text-white font-custom mb-2 h-12">{product.name}</h3>
          <motion.div
            className="absolute bottom-0 right-0 w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-white font-bold"
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
            <span className="text-xl sm:text-2xl">+</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

// Filter Bar Component
const FilterBar = ({ onSortChange, totalProducts }) => (
  <div className="mb-8 flex items-center justify-between bg-[#EDEDED] p-4 rounded-full shadow-sm font-custom">
    <div className="text-sm text-red-700">{totalProducts} produits trouvés</div>
    <div className="flex gap-4 text-black rounded-full  ">
      <Select onValueChange={onSortChange}>
        <SelectTrigger className="w-[180px] text-black">
          <SelectValue placeholder="Trier par" />
        </SelectTrigger>
        <SelectContent className="text-black">
          <SelectItem value="name-asc">Nom (A-Z)</SelectItem>
          <SelectItem value="name-desc">Nom (Z-A)</SelectItem>
          {/* <SelectItem value="pieces-asc">Pièces (Croissant)</SelectItem>
          <SelectItem value="pieces-desc">Pièces (Décroissant)</SelectItem> */}
        </SelectContent>
      </Select>
    </div>
  </div>
);

// Mobile Filters Component
const MobileFilters = ({ categories, selectedCategory, onCategoryChange }) => (
  <Sheet>
    <SheetTrigger asChild>
      <Button className="lg:hidden mb-4 rounded-l-full rounded-br-full bg-red-700 text-white">
        <Filter className="h-4 w-4 mr-2" />
        Filtres
      </Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Filtres</SheetTitle>
        <SheetDescription>Affinez votre recherche</SheetDescription>
      </SheetHeader>
      <div className="mt-4">
        {categories.map((name) => (
          <Button
            key={name}
            variant={selectedCategory === name ? 'default' : 'ghost'}
            className="w-full justify-start mb-2"
            onClick={() => onCategoryChange(name)}
          >
            {name}
          </Button>
        ))}
      </div>
    </SheetContent>
  </Sheet>
);

// Active Filters Component
const ActiveFilters = ({ filters, onRemoveFilter }) => (
  <div className="flex flex-wrap gap-2 mb-4">
    {filters.map((filter) => (
      <div key={filter} className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-sm flex items-center">
        {filter}
        <X className="h-4 w-4 ml-2 cursor-pointer" onClick={() => onRemoveFilter(filter)} />
      </div>
    ))}
  </div>
);

// Main Products Component
const Products = () => {
  // State management
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState('name-asc');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Get page props
  const { products, parentCategory, childCategory } = usePage<{
    products: Product[];
    parentCategory: { name: string; childCategoriesNames: string[] };
    childCategory: { name: string };
  }>().props;

  console.log('Products:', products);
  console.log('Parent Category:', parentCategory);
  console.log('Child Category:', childCategory);

  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end start']
  });

  const headerOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

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

  // Sort products
  const sortedProducts = _.orderBy(
    filteredProducts,
    [
      (product) => {
        switch (sortOrder) {
          case 'name-asc':
          case 'name-desc':
            return product.name.toLowerCase();
          case 'pieces-asc':
          case 'pieces-desc':
            return product.pieces;
          default:
            return product.name.toLowerCase();
        }
      }
    ],
    [sortOrder.endsWith('-desc') ? 'desc' : 'asc']
  );

  // Pagination logic
  const totalPages = Math.ceil(sortedProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = sortedProducts.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  // Reset pagination when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, sortOrder]);

  // Navigation handler
  const handleCategoryChange = (name: string) => {
    setIsLoading(true);
    router.visit(`/products/${parentCategory.name}/${name}`, {
      onFinish: () => {
        setIsLoading(false);
        setSelectedCategory(name);
        if (!activeFilters.includes(name)) {
          setActiveFilters([...activeFilters, name]);
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  };

  // Remove filter handler
  const handleRemoveFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter((f) => f !== filter));
    if (selectedCategory === filter) {
      setSelectedCategory(null);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <motion.div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${categoryContent[parentCategory.name]?.bgImage || '/placeholder.svg'})`
            }}
          />
        </div>

        <div className="relative mx-auto px-4">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="flex min-h-[500px] items-center justify-center pt-48 pb-20"
          >
            {/* <div className="text-center">
              <motion.h1 variants={fadeInUp} className="mb-6 text-4xl font-bold font-custom text-white md:text-6xl">
                {categoryContent[parentCategory.name]?.title || 'MACAO CÉLÈBRE VOS FÊTES'}
              </motion.h1>
              <motion.p variants={fadeInUp} className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
                {categoryContent[parentCategory.name]?.subtitle || 'Découvrez notre collection'}
              </motion.p>
            </div> */}
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="min-h-screen bg-gradient-to-b from-[#f8f4f0] to-[#f0e9e4] ">
        <div className="max-w-[98rem] mx-auto px-4 py-8">
          <MobileFilters
            categories={parentCategory.childCategoriesNames}
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
          />

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="w-full lg:w-80">
              <div className="sticky top-36 space-y-6">
                {/* Search Input */}
                {/* <div className="rounded-lg bg-white p-6 shadow-sm"> */}
                <div className="relative rounded-full bg-[#EDEDED]">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-black" />
                  <Input
                    type="text"
                    placeholder="Rechercher..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 rounded-full bg-[#EDEDED] text-black"
                  />
                </div>
                {/* </div> */}

                {/* Categories */}
                <div className="rounded-full px-6 py-4 bg-[#EDEDED] shadow-sm">
                  <h2 className="text-2xl font-semibold font-custom tracking-tight text-red-700 justify-center">
                    {parentCategory.name}
                  </h2>
                </div>
                <div className="rounded-[40px] font-custom bg-[#EDEDED] p-6 shadow-sm">
                  <div className="space-y-2">
                    {parentCategory.childCategoriesNames.map((name) => (
                      <motion.button
                        key={name}
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleCategoryChange(name)}
                        disabled={isLoading}
                        className={cn(
                          'flex w-full items-center justify-between rounded-full px-3 py-2 text-sm font-medium transition-all',
                          childCategory.name === name
                            ? 'bg-red-50 text-red-700'
                            : 'text-gray-600 hover:bg-red-50 hover:text-red-700',
                          isLoading && 'opacity-50 cursor-not-allowed'
                        )}
                      >
                        {name}
                        {isLoading && childCategory.name === name && (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="h-4 w-4 border-2 border-red-700 border-t-transparent rounded-full"
                          />
                        )}
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Main Content Area */}
            <div className="flex-1">
              <FilterBar onSortChange={setSortOrder} totalProducts={sortedProducts.length} />

              {activeFilters.length > 0 && (
                <ActiveFilters filters={activeFilters} onRemoveFilter={handleRemoveFilter} />
              )}

              <AnimatePresence mode="wait">
                {paginatedProducts.length > 0 ? (
                  <motion.div
                    key={`${selectedCategory}-${sortOrder}`}
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                  >
                    {paginatedProducts.map((product) => (
                      <ProductCard key={product.id} product={product} onError={() => setImageError(true)} />
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

              {/* Pagination */}
              {sortedProducts.length > ITEMS_PER_PAGE && (
                <div className="mt-8 flex items-center justify-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    className="text-gray-700"
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
                        className={cn(
                          'min-w-[2.5rem] text-black hover:bg-red-700 hover:text-white',
                          currentPage === page && 'bg-red-600 text-white hover:bg-red-700'
                        )}
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
                    className="text-gray-700"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
Products.layout = (page: any) => <NewLayout children={page} />;
