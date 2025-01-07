import { Button, Card, Container } from '@/components/ui';
import FormModal from '@/components/ui/form-modal';
import { DashboardLayout } from '@/layouts';
import { BrandData, CategoryData, PagePropsData, PaginationData, ProductTypeData, UserReferenceData } from '@/types';
import { cn } from '@/utils/classes';
import { buildConfigFromQueryParams } from '@/utils/queryParamsParser';
import __ from '@/utils/translations';
import { useQueryBuilder } from '@cgarciagarcia/react-query-builder';
import { Head, usePage } from '@inertiajs/react';
import { IconPlus } from 'justd-icons';
import { useState } from 'react';
import DashboardBreadCrumbs from '../partials/dashboard-breadcrumbs';
import CreateProductForm from './partials/forms/create-product-form';
import { QueryBuilderProvider } from './partials/providers/QueryBuilderProvider';
import { columns } from './partials/table/products-columns';
import { ProductsDataTable } from './partials/table/products-table';

interface ProductsIndexPage extends PagePropsData {
  categories: CategoryData[];
  brands: BrandData[];
  productTypes: ProductTypeData[];
  paginationData: PaginationData;
  usersOptions: UserReferenceData[];
}

function Index({ paginationData, categories, brands, productTypes, usersOptions }: ProductsIndexPage) {
  const translations = usePage<PagePropsData>().props.translations;

  const parsedQueryParams = buildConfigFromQueryParams(route().queryParams);

  const builder = useQueryBuilder(parsedQueryParams);

  const [isCreateFormModalOpen, setIsCreateFormModalOpen] = useState(false);

  return (
    <>
      <Head title={__(translations, 'Products')} />

      <QueryBuilderProvider builder={builder} categories={categories} brands={brands} productTypes={productTypes}>
        <Container className={cn('  w-full max-w-full !p-6 lg:!px-8')}>
          <DashboardBreadCrumbs resource="Products" />

          <div className="flex items-center justify-between py-4">
            <h1 className="text-2xl"> {__(translations, 'Products')}</h1>
            {/* <Button className={'p-0'}>
              <Link
                className="flex items-center justify-center w-full h-full px-4 py-2 text-base gap-x-2"
                href={route('products.create')}
              >
                <IconPlus />
                {__(translations, 'Create')}
              </Link>
            </Button> */}

            <Button
              onPress={() => {
                setIsCreateFormModalOpen(true);
              }}
            >
              <IconPlus />
              {__(translations, 'Create')}
            </Button>
            <FormModal
              size="7xl"
              title={__(translations, 'Create') + ' ' + __(translations, 'Product')}
              state={isCreateFormModalOpen}
              onOpenChange={setIsCreateFormModalOpen}
            >
              <CreateProductForm setIsCreateFormModalOpen={setIsCreateFormModalOpen} />
            </FormModal>
          </div>
          <Card className={cn('w-full h-full ')}>
            <ProductsDataTable
              columns={columns}
              data={paginationData.data}
              pd={paginationData}
              translations={translations}
              usersOptions={usersOptions}
            />
          </Card>
        </Container>
      </QueryBuilderProvider>
    </>
  );
}

Index.layout = (page: any) => <DashboardLayout children={page} />;

export default Index;
