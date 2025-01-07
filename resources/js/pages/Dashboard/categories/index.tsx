import { Button, Card, Container } from '@/components/ui';
import { DashboardLayout } from '@/layouts';
import { CategoryData, PagePropsData, PaginationData, UserReferenceData } from '@/types';
import { cn } from '@/utils/classes';
import __ from '@/utils/translations';
import { Head, Link, router, usePage } from '@inertiajs/react';
import { IconPlus } from 'justd-icons';
import DashboardBreadCrumbs from '../partials/dashboard-breadcrumbs';
import { useQueryBuilder } from '@cgarciagarcia/react-query-builder';
import { QueryBuilderProvider } from './partials/providers/QueryBuilderProvider';
import { buildConfigFromQueryParams } from '@/utils/queryParamsParser';
import React, { useState } from 'react';
import { CategoriesDataTable } from './partials/table/categories-table';
import { columns } from './partials/table/categories-columns';
import FormModal from '@/components/ui/form-modal';
import CreateCategoryForm from './partials/forms/create-category-form';
interface CategoriesIndexPage extends PagePropsData {
  categories: CategoryData[];
  paginationData: PaginationData;
  usersOptions: UserReferenceData[];
}
function Index({ paginationData, categories, usersOptions }: CategoriesIndexPage) {
  const translations = usePage<PagePropsData>().props.translations;

  const parsedQueryParams = buildConfigFromQueryParams(route().queryParams);

  const builder = useQueryBuilder(parsedQueryParams);

  const [isCreateFormModalOpen, setIsCreateFormModalOpen] = useState(false);

  return (
    <>
      <Head title={__(translations, 'Categories')} />

      <QueryBuilderProvider builder={builder} categories={categories}>
        <Container className={cn('  w-full max-w-full !p-6 lg:!px-8')}>
          <DashboardBreadCrumbs resource="Categories" />

          <div className="flex items-center justify-between py-4">
            <h1 className="text-2xl"> {__(translations, 'Categories')}</h1>
            {/* <Button className={'p-0'}>
            <Link
              className="flex items-center justify-center w-full h-full px-4 py-2 text-base gap-x-2"
              href={route('categories.create')}
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
              title={__(translations, 'Create') + ' ' + __(translations, 'Category')}
              state={isCreateFormModalOpen}
              onOpenChange={setIsCreateFormModalOpen}
            >
              <CreateCategoryForm setIsCreateFormModalOpen={setIsCreateFormModalOpen} />
            </FormModal>
          </div>

          <Card className={cn('w-full h-full ')}>
            <CategoriesDataTable
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
