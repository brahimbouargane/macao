import { Button, Card, Container } from '@/components/ui';
import { DashboardLayout } from '@/layouts';
import { PagePropsData, PaginationData, UserReferenceData } from '@/types';
import { cn } from '@/utils/classes';
import __ from '@/utils/translations';
import { Head, Link, router, usePage } from '@inertiajs/react';
import { IconPlus } from 'justd-icons';
import DashboardBreadCrumbs from '../partials/dashboard-breadcrumbs';
import { columns } from './partials/table/users-columns';
import { UsersDataTable } from './partials/table/users-table';
import { useQueryBuilder } from '@cgarciagarcia/react-query-builder';
import { QueryBuilderProvider } from './partials/providers/QueryBuilderProvider';
import { buildConfigFromQueryParams } from '@/utils/queryParamsParser';
import { useState } from 'react';
import FormModal from '@/components/ui/form-modal';
import CreateUserForm from './partials/forms/create-user-form';

type UsersPageProps = {
  paginationData: PaginationData;
  usersOptions: UserReferenceData[];
};
function Index({ paginationData, usersOptions }: UsersPageProps) {
  const translations = usePage<PagePropsData>().props.translations;

  const parsedQueryParams = buildConfigFromQueryParams(route().queryParams);

  const builder = useQueryBuilder(parsedQueryParams);

  const [isCreateFormModalOpen, setIsCreateFormModalOpen] = useState(false);

  return (
    <>
      <Head title={__(translations, 'Users')} />

      <Container className={cn('  w-full max-w-full !p-6 lg:!px-8')}>
        <DashboardBreadCrumbs resource="Users" />

        <div className="flex items-center justify-between py-4">
          <h1 className="text-2xl"> {__(translations, 'Users')}</h1>

          <Button
            onPress={() => {
              setIsCreateFormModalOpen(true);
            }}
          >
            <IconPlus />
            {__(translations, 'Create')}
          </Button>
          <FormModal
            size="xl"
            title={__(translations, 'Create') + ' ' + __(translations, 'User')}
            state={isCreateFormModalOpen}
            onOpenChange={setIsCreateFormModalOpen}
          >
            <CreateUserForm setIsCreateFormModalOpen={setIsCreateFormModalOpen} />
          </FormModal>
        </div>
        <Card className={cn('w-full h-full ')}>
          <QueryBuilderProvider builder={builder}>
            <UsersDataTable
              columns={columns}
              data={paginationData.data}
              pd={paginationData}
              translations={translations}
              usersOptions={usersOptions}
            />
          </QueryBuilderProvider>
        </Card>
      </Container>
    </>
  );
}

Index.layout = (page: any) => <DashboardLayout children={page} />;

export default Index;
