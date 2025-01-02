import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navBar';
import { Badge } from '@/components/ui/shadcn-badge';
import { cn } from '@/utils/classes';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

// Product type definition
interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  pieces: number;
  category: string;
}

// Categories data
const categories = [
  { name: 'Sucettes', href: '/produits/sucettes', count: 12 },
  { name: 'Bonbons durs', href: '/produits/bonbons-durs', count: 8 },
  { name: 'Bonbons durs sans sucre', href: '/produits/sans-sucre', count: 6 },
  { name: 'Pâte à mâcher', href: '/produits/pate-a-macher', count: 4 },
  { name: 'Caramel', href: '/produits/caramel', count: 5 },
  { name: 'Gommes gélifiées', href: '/produits/gommes-gelifiees', count: 7 },
  { name: 'Dragées', href: '/produits/dragees', count: 3 }
];

// Products data
const products: Product[] = [
  {
    id: 1,
    name: 'MAC POP FRUITÉ + CRÈME',
    description: 'Sucettes Fruitées à la Crème',
    image: '/placeholder.svg',
    pieces: 100,
    category: 'Sucettes'
  },
  {
    id: 2,
    name: 'MAC POP FRUITÉ + YAOURT',
    description: 'Sucettes Fruitées à la Crème Yaourt',
    image: '/placeholder.svg',
    pieces: 100,
    category: 'Sucettes'
  },
  {
    id: 3,
    name: 'MAC POP CARAMEL LAIT',
    description: 'Sucettes Au Lait',
    image: '/placeholder.svg',
    pieces: 100,
    category: 'Sucettes'
  },
  {
    id: 4,
    name: 'ORO POP SUCETTES FRUITÉES',
    description: 'Assortiment de Sucettes Fruitées',
    image: '/placeholder.svg',
    pieces: 100,
    category: 'Sucettes'
  },
  {
    id: 5,
    name: 'ORO POP SUCETTES FRUITÉES',
    description: 'Assortiment de Sucettes Fruitées',
    image: '/placeholder.svg',
    pieces: 100,
    category: 'Dragées'
  }
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end start']
  });

  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;
  return (
    <>
      <Navbar />
      <motion.div
        ref={scrollRef}
        style={{ opacity: headerOpacity, y: headerY }}
        className="relative overflow-hidden bg-gradient-to-r from-red-600 to-red-700"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
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
                MACAO CÉLÈBRE VOS FÊTES
                <br />
                ET ÉVÉNEMENTS
              </motion.h1>
              <motion.p variants={fadeInUp} className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
                Découvrez notre collection de confiseries pour toutes vos célébrations
              </motion.p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full bg-white px-8 py-3 text-lg font-medium text-red-600 transition-colors hover:bg-red-50"
              >
                Découvrir nos produits
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Sidebar */}
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="w-full lg:w-64">
            <div className="sticky top-24 rounded-xl bg-white p-6 shadow-lg">
              <h2 className="mb-4 text-lg font-semibold tracking-tight">Catégories</h2>
              <div className="space-y-2">
                {categories.map((category) => (
                  <motion.button
                    key={category.name}
                    whileHover={{ x: 4 }}
                    onClick={() => setSelectedCategory(category.name)}
                    className={cn(
                      'flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                      selectedCategory === category.name
                        ? 'bg-red-50 text-red-600'
                        : 'hover:bg-red-50 hover:text-red-600'
                    )}
                  >
                    {category.name}
                    <span className="text-sm text-gray-500">{category.count}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Product Grid */}
          <div className="flex-1">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
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
                    <img
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <Badge variant="secondary" className="mb-2 transition-colors hover:bg-red-100">
                      {product.category}
                    </Badge>
                    <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                    <p className="mt-1 text-sm text-gray-600">{product.description}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-500">
                        Boîte plastique de {product.pieces} pièces
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="rounded-full bg-red-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700"
                      >
                        Voir plus
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
