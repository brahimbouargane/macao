import candies from '@/assets/images/candies.webp';
import candy from '@/assets/images/candy.webp';
import choco from '@/assets/images/Chocolatebanner.png';
import leonardo from '@/assets/images/Leonardo.webp';
import logo from '@/assets/images/macoa-logo-small.svg';
import wafer from '@/assets/images/wafer.webp';

import { Badge } from '@/components/ui/shadcn-badge';
import { Button } from '@/components/ui/shadcn-button';
import { Checkbox } from '@/components/ui/shadcn-checkbox';
import { Input } from '@/components/ui/shadcn-input';
import { Select, SelectContent, SelectItem } from '@/components/ui/shadcn-select';
import { Separator } from '@/components/ui/shadcn-separator';
import { GuestLayout } from '@/layouts';
import { cn } from '@/utils/classes';
import { router, usePage } from '@inertiajs/react';
import { SelectTrigger, SelectValue } from '@radix-ui/react-select';
import { AnimatePresence, motion, useScroll } from 'framer-motion';
import _ from 'lodash';
import { ImageIcon, Search } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  brand_id: number;
  ref: string;
  packaging: string;
  weight: number;
  categoriesNames: string[];
  product_type: {
    id: number;
    name: string;
  };
  primaryImage: {
    optimized: string | null;
    thumbnail: string | null;
  };
  created_at: string;
  updated_at: string;
  tc_20: string;
  tc_40: string;
}
interface FilterState {
  sortBy: string;
  productTypes: string[];
  weightRange: [number, number] | null;
  packagingTypes: string[];
  searchTerm: string;
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

const Products = () => {
  // State management
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const scrollRef = useRef<HTMLDivElement>(null);

  const [filters, setFilters] = useState<FilterState>({
    sortBy: 'name-asc',
    productTypes: [],
    weightRange: [0, 1000],
    packagingTypes: [],
    searchTerm: ''
  });

  // Scroll animations
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end start']
  });

  // Get page props
  const { products, parentCategory, childCategory } = usePage<{
    products: Product[];
    parentCategory: { name: string; childCategoriesNames: string[] };
    childCategory: { name: string };
  }>().props;

  const uniquePackagingTypes = useMemo(() => Array.from(new Set(products.map((p) => p.packaging))), [products]);

  const uniqueProductTypes = useMemo(() => Array.from(new Set(products.map((p) => p.product_type.name))), [products]);

  const updateFilters = (newFilters: Partial<FilterState>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
    setCurrentPage(1); // Reset pagination when filters change
  };

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        // Category filter (existing)
        if (selectedCategory && product.categoriesNames) {
          if (!product.categoriesNames.includes(selectedCategory)) {
            return false;
          }
        }

        // Search term filter
        if (filters.searchTerm) {
          const searchLower = filters.searchTerm.toLowerCase();
          const searchMatch = [
            product.name,
            product.description,
            product.ref,
            product.packaging,
            product.product_type.name
          ].some((field) => field?.toLowerCase().includes(searchLower));

          if (!searchMatch) return false;
        }

        // Product type filter
        if (filters.productTypes.length > 0 && !filters.productTypes.includes(product.product_type.name)) {
          return false;
        }

        // Weight range filter
        if (filters.weightRange && product.weight) {
          if (product.weight < filters.weightRange[0] || product.weight > filters.weightRange[1]) {
            return false;
          }
        }

        // Packaging filter
        if (filters.packagingTypes.length > 0 && !filters.packagingTypes.includes(product.packaging)) {
          return false;
        }

        return true;
      })
      .sort((a, b) => {
        switch (filters.sortBy) {
          case 'name-asc':
            return a.name.localeCompare(b.name);
          case 'name-desc':
            return b.name.localeCompare(a.name);
          case 'weight-asc':
            return (a.weight || 0) - (b.weight || 0);
          case 'weight-desc':
            return (b.weight || 0) - (a.weight || 0);
          case 'reference':
            return a.ref.localeCompare(b.ref);
          case 'newest':
            return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
          default:
            return 0;
        }
      });
  }, [products, selectedCategory, filters]);

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
    <div>
      <div className=" mt-8 flex items-center justify-center  text-black">
        <Button
          variant="outline"
          onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
          disabled={currentPage === 1}
          className="text-gray-500  border-0 border-transparent  hover:bg-red-700 hover:text-white"
        >
          Precedent
        </Button>

        <div className="flex items-center border-r border-l border-gray-200">
          {_.range(1, totalPages + 1).map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? 'default' : 'outline'}
              size="sm"
              onClick={() => setCurrentPage(page)}
              className={cn(
                'min-w-[2.5rem]  border-0 border-transparent bot text-gray-500 hover:bg-red-700 hover:text-white',
                currentPage === page && 'bg-red-600 text-white hover:bg-red-700'
              )}
            >
              {page}
            </Button>
          ))}
        </div>

        <Button
          variant="outline"
          onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 border-0 border-transparent text-gray-600 hover:bg-red-700 hover:text-white disabled:opacity-50"
        >
          Suivant
        </Button>
      </div>
    </div>
  );

  return (
    <>
      <ScrollProgress />

      {/* <motion.div className="relative w-full h-[350px] overflow-hidden bg-gray-100">
        <div className="absolute inset-0">
          <div className="relative w-full h-full">
            <motion.img
              initial={{ scale: 1.1, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 1.5,
                ease: 'easeOut'
              }}
              src={categoryContent[parentCategory.name]?.bgImage || '/placeholder.svg'}
              alt={categoryContent[parentCategory.name]?.title || 'Category banner'}
              className="w-full h-full object-cover object-center"
              style={{
                transform: 'scale(0.7)'
              }}
            />

=            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
          </div>

          <div className="absolute inset-0 flex items-center">
            <div className="container pl-34">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-2xl mt-16"
              >
                <motion.h1
                  className="text-4xl md:text-5xl font-bold text-white mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  {categoryContent[parentCategory.name]?.title}
                </motion.h1>

                <motion.p
                  className="text-lg text-white/90"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {categoryContent[parentCategory.name]?.subtitle}
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div> */}

      <motion.div className="relative h-[350px] w-full overflow-hidden">
        {/* Main container for image and text */}
        <div className="absolute inset-0">
          {/* Image wrapper */}
          <div className="relative h-full w-full">
            <motion.img
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5 }}
              src={categoryContent[parentCategory.name]?.bgImage || '/placeholder.svg'}
              alt={categoryContent[parentCategory.name]?.title || 'Banner'}
              className="h-full w-full object-cover"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/25 to-transparent" />
          </div>

          {/* Text content */}
          <div className="absolute inset-0 flex items-center mt-16">
            <div className="mx-auto w-full max-w-7xl  ">
              <div className="max-w-xl">
                <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                  {categoryContent[parentCategory.name]?.title}
                </h1>
                <p className="text-base text-white/90 sm:text-lg md:text-xl">
                  {categoryContent[parentCategory.name]?.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="min-w-full min-h-screen bg-gray-200	">
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
                  <div className="py-6 text-black">
                    <h3 className="font-medium text-sm mb-2 text-black">Trier par</h3>
                    <Select value={filters.sortBy} onValueChange={(value) => updateFilters({ sortBy: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Trier par" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="name-asc">Nom (A-Z)</SelectItem>
                        <SelectItem value="name-desc">Nom (Z-A)</SelectItem>
                        <SelectItem value="weight-asc">Poids (Croissant)</SelectItem>
                        <SelectItem value="weight-desc">Poids (Décroissant)</SelectItem>
                        <SelectItem value="reference">Référence</SelectItem>
                        <SelectItem value="newest">Plus récent</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Separator />
                  <div className="py-4">
                    <h3 className="font-medium text-sm mb-2 text-black">Types de produit</h3>
                    <div className="space-y-2 text-black">
                      {uniqueProductTypes.map((type) => (
                        <div key={type} className="flex items-center space-x-2">
                          <Checkbox
                            id={`type-${type}`}
                            checked={filters.productTypes.includes(type)}
                            onCheckedChange={(checked) => {
                              updateFilters({
                                productTypes: checked
                                  ? [...filters.productTypes, type]
                                  : filters.productTypes.filter((t) => t !== type)
                              });
                            }}
                          />
                          <label htmlFor={`type-${type}`} className="text-sm cursor-pointer">
                            {type}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Separator />

                  <div className="py-4">
                    <h3 className="font-medium text-sm pb-4 text-black">Conditionnement</h3>
                    <div className="space-y-2">
                      {uniquePackagingTypes.map((type) => (
                        <div key={type} className="flex items-center space-x-2 text-black">
                          <Checkbox
                            id={`packaging-${type}`}
                            checked={filters.packagingTypes.includes(type)}
                            onCheckedChange={(checked) => {
                              updateFilters({
                                packagingTypes: checked
                                  ? [...filters.packagingTypes, type]
                                  : filters.packagingTypes.filter((t) => t !== type)
                              });
                            }}
                          />
                          <label htmlFor={`packaging-${type}`} className="text-sm cursor-pointer truncate">
                            {type}
                          </label>
                        </div>
                      ))}
                    </div>
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
                          {' '}
                          <motion.img
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.4 }}
                            src={product.primaryImage.optimized || logo}
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
                          <Badge variant="secondary" className="mb-2 transition-colors  bg-gray-500 ">
                            {product.product_type.name}
                          </Badge>
                          <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                          <p className="mt-1 text-sm text-gray-600">{product.description}</p>
                          <div className="mt-4 flex items-center justify-between">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => router.visit(`/products/${product.id}`)}
                              className="rounded-full bg-red-600 px-4 py-2 text-sm w-full font-medium text-white transition-colors hover:bg-red-700"
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
