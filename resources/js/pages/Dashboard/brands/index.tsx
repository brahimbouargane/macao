import { Button, Card, Container } from '@/components/ui';
import FormModal from '@/components/ui/form-modal';
import { DashboardLayout } from '@/layouts';
import { PagePropsData, PaginationData } from '@/types';
import { cn } from '@/utils/classes';
import { buildConfigFromQueryParams } from '@/utils/queryParamsParser';
import __ from '@/utils/translations';
import { useQueryBuilder } from '@cgarciagarcia/react-query-builder';
import { Head, usePage } from '@inertiajs/react';
import { IconPlus } from 'justd-icons';
import { useState } from 'react';
import DashboardBreadCrumbs from '../partials/dashboard-breadcrumbs';
import CreateBrandForm from './partials/forms/create-brand-form';
import { QueryBuilderProvider } from './partials/providers/QueryBuilderProvider';
import { columns } from './partials/table/brands-columns';
import { BrandsDataTable } from './partials/table/brands-table';

interface BrandsIndexPage extends PagePropsData {
  paginationData: PaginationData;
}

function Index({ paginationData }: BrandsIndexPage) {
  const translations = usePage<PagePropsData>().props.translations;

  const parsedQueryParams = buildConfigFromQueryParams(route().queryParams);

  const builder = useQueryBuilder(parsedQueryParams);

  const [isCreateFormModalOpen, setIsCreateFormModalOpen] = useState(false);

  return (
    <>
      <Head title={__(translations, 'Brands')} />

      <QueryBuilderProvider builder={builder}>
        <Container className={cn('  w-full max-w-full !p-6 lg:!px-8')}>
          <DashboardBreadCrumbs resource="Brands" />

          <div className="flex items-center justify-between py-4">
            <h1 className="text-2xl"> {__(translations, 'Brands')}</h1>
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
              title={__(translations, 'Create') + ' ' + __(translations, 'Brand')}
              state={isCreateFormModalOpen}
              onOpenChange={setIsCreateFormModalOpen}
            >
              <CreateBrandForm setIsCreateFormModalOpen={setIsCreateFormModalOpen} />
            </FormModal>
          </div>

          <Card className={cn('w-full h-full ')}>
            <BrandsDataTable
              columns={columns}
              data={paginationData.data}
              pd={paginationData}
              translations={translations}
            />
          </Card>
        </Container>
      </QueryBuilderProvider>
    </>
  );
}

Index.layout = (page: any) => <DashboardLayout children={page} />;

export default Index;
