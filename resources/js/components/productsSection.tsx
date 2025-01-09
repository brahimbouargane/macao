import bestSelling2 from '@/assets/images/carousel-1.webp';
import bestSelling from '@/assets/images/carousel-2.webp';
import bestSelling3 from '@/assets/images/carousel-3.webp';
import { motion } from 'framer-motion';
import { Link } from './ui';

interface Product {
  id: string;
  title: string;
  subtitle: string;
  details: string;
  image: string;
  href: string;
}

const products: Product[] = [
  {
    id: '1',
    title: 'CHOCOLAT LIGHT NOIR',
    subtitle: 'CHOCOLAT SANS SUCRE 75 % DE CACAO',
    details: 'BOCAL PLASTIQUE DE 200 PIECES',
    image: bestSelling,
    href: '/products/chocolat-light-noir'
  },
  {
    id: '2',
    title: 'Pâte à Mâcher Fruitée',
    subtitle: 'BONBON FRUITÉ SANS SUCRE',
    details: 'BOCAL PLASTIQUE DE 200 PIECES',
    image: bestSelling3,
    href: '/products/pate-a-macher-fruitee'
  },
  {
    id: '3',
    title: 'Pépites de Chocolate',
    subtitle: 'PÉPITES DE CHOCOLAT SANS SUCRE',
    details: 'BOCAL PLASTIQUE DE 200 PIECES',
    image: bestSelling2,
    href: '/products/pepites-de-chocolate'
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
export default function BestSellers() {
  return (
    <section className="py-16 md:py-24 px-4 ">
      <div className="container mx-auto">
        <motion.div className="text-center " initial="hidden" animate="visible" variants={staggerChildren}>
          <motion.h2
            variants={fadeInUp}
            className="text-red-500 font-medium tracking-wide uppercase mb-3 sm:mb-4
          text-sm sm:text-base"
          >
            Les produits
          </motion.h2>
          <motion.h1 variants={fadeInUp} className="text-gray-700 text-4xl md:text-5xl lg:text-6xl font-medium mb-2">
            Meilleures Ventes
          </motion.h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {products.map((product, index) => (
            <Link
              key={product.id}
              href={product.href}
              className={`block group relative transition-all duration-300
                ${index === 1 ? 'md:top-8 lg:top-12' : ''}
              `}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="p-8">
                  <div className="mx-auto max-w-[200px] md:max-w-[180px] lg:max-w-[220px] mb-6">
                    <div className="aspect-square relative">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="text-center space-y-2">
                    <h4 className="text-gray-800 text-xl font-medium">{product.title}</h4>
                    <p className="text-gray-600 text-sm">{product.subtitle}</p>
                  </div>
                </div>
                <div className="bg-red-600 text-white p-4 text-center text-sm group-hover:bg-red-600/50 transition-colors duration-300">
                  {product.details}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
