import bestSelling from '@/assets/images/carousel-2.png';
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
    title: 'CHOCOLAT LIGHT NOIR',
    subtitle: 'CHOCOLAT SANS SUCRE 75 % DE CACAO',
    details: 'BOCAL PLASTIQUE DE 200 PIECES',
    image: bestSelling,
    href: '/products/chocolat-light-noir'
  },
  {
    id: '3',
    title: 'CHOCOLAT LIGHT NOIR',
    subtitle: 'CHOCOLAT SANS SUCRE 75 % DE CACAO',
    details: 'BOCAL PLASTIQUE DE 200 PIECES',
    image: bestSelling,
    href: '/products/chocolat-light-noir'
  }
];

export default function BestSellers() {
  return (
    <section className="py-16 px-4 ">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-red-500 font-medium tracking-wide uppercase mb-4">Categories</h2>
          <h3 className="text-gray-800 text-4xl font-normal">Best Sellers</h3>
        </div>

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
                <div className="bg-[#8B4513] text-white p-4 text-center text-sm group-hover:bg-[#6d3610] transition-colors duration-300">
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
