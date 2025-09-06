import { Button, Card, Container } from '@/components/ui';
import FormModal from '@/components/ui/form-modal';
import { DashboardLayout } from '@/layouts';
import { PagePropsData, PaginationData, UserReferenceData } from '@/types';
import { cn } from '@/utils/classes';
import { buildConfigFromQueryParams } from '@/utils/queryParamsParser';
import __ from '@/utils/translations';
import { useQueryBuilder } from '@cgarciagarcia/react-query-builder';
import { Head, usePage } from '@inertiajs/react';
import { IconPlus } from 'justd-icons';
import { useState } from 'react';
import DashboardBreadCrumbs from '../partials/dashboard-breadcrumbs';
import { QueryBuilderProvider } from './partials/providers/QueryBuilderProvider';
import CreateProductTypeForm from './partials/forms/create-product-type-form';
import { ProductTypesDataTable } from './partials/table/productTypes-table';
import { columns } from './partials/table/productTypes-columns';

interface ProductTypeIndexPage extends PagePropsData {
  paginationData: PaginationData;
  usersOptions: UserReferenceData[];
}

function Index({ paginationData, usersOptions }: ProductTypeIndexPage) {
  const translations = usePage<PagePropsData>().props.translations;

  const parsedQueryParams = buildConfigFromQueryParams(route().queryParams);

  const builder = useQueryBuilder(parsedQueryParams);

  const [isCreateFormModalOpen, setIsCreateFormModalOpen] = useState(false);

  return (
    <>
      <Head title={__(translations, 'Types')} />

      <QueryBuilderProvider builder={builder}>
        <Container className={cn('  w-full max-w-full !p-6 lg:!px-8')}>
          <DashboardBreadCrumbs resource="productTypes" />

          <div className="flex items-center justify-between py-4">
            <h1 className="text-2xl"> {__(translations, 'Types')}</h1>
            {/* <Button className={'p-0'}>
            <Link
              className="flex items-center justify-center w-full h-full px-4 py-2 text-base gap-x-2"
              href={route('brands.create')}
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
              size="lg"
              title={__(translations, 'Create') + ' ' + __(translations, 'Type')}
              state={isCreateFormModalOpen}
              onOpenChange={setIsCreateFormModalOpen}
            >
              <CreateProductTypeForm setIsCreateFormModalOpen={setIsCreateFormModalOpen} />
            </FormModal>
          </div>

          <Card className={cn('w-full h-full ')}>
            <ProductTypesDataTable
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
