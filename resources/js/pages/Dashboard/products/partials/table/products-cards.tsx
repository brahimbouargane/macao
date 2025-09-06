import { PaginationData, ProductData } from '@/types';
import ProductCard from '../ui/product-card';

type ProductsCardsProps = {
  pd: PaginationData;
};

export default function ProductsCards({ pd }: ProductsCardsProps) {
  return (
    <div className="grid grid-cols-2 gap-6 p-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {pd.data.map((product: ProductData) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}
