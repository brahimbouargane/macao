import { ModelsCountData, PagePropsData } from '@/types';
import __ from '@/utils/translations';
import { Head, usePage } from '@inertiajs/react';
import { DashboardLayout } from 'layouts';
import { FaBoxOpen, FaTags } from 'react-icons/fa';
import { MdCategory, MdSupervisedUserCircle } from 'react-icons/md';
import { CategoryDistributionPieChart } from './charts/CategoryDistributionPieChart';
import ModelCountWidget from './charts/model-count-widget';
import { ProductsCountByCategoryBarChart } from './charts/ProductsCountByCategoryBarChart';

export type CategoryProductsCount = {
  name: string;
  products_count: number;
};
type DashboardPageProps = {
  modelsCount: ModelsCountData;
  productsCountByCategory: CategoryProductsCount[];
};

export default function Dashboard({ productsCountByCategory, modelsCount }: DashboardPageProps) {
  const translations = usePage<PagePropsData>().props.translations;

  return (
    <>
      <Head title={__(translations, 'Dashboard')} />
      {/* charts and widgets */}
      <div className="p-6 space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">{__(translations, 'Dashboard')}</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <ModelCountWidget title={__(translations, 'Products')} value={modelsCount.product} icon={FaBoxOpen} />
          <ModelCountWidget title={__(translations, 'Categories')} value={modelsCount.category} icon={MdCategory} />
          <ModelCountWidget title={__(translations, 'Brands')} value={modelsCount.brand} icon={FaTags} />
          <ModelCountWidget title={__(translations, 'Users')} value={modelsCount.user} icon={MdSupervisedUserCircle} />
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <ProductsCountByCategoryBarChart productsCountByCategory={productsCountByCategory} />
          <CategoryDistributionPieChart productsCountByCategory={productsCountByCategory} />
        </div>
      </div>
    </>
  );
}

Dashboard.layout = (page: any) => <DashboardLayout children={page} />;
