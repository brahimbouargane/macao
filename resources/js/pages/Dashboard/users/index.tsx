import { Button, Card, Container } from '@/components/ui';
import { DashboardLayout } from '@/layouts';
import { PagePropsData } from '@/types';
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
import React from 'react';

function Index({ paginationData}: PagePropsData) {
    const translations = usePage<PagePropsData>().props.translations

    const parsedQueryParams = buildConfigFromQueryParams(route().queryParams);

    const builder = useQueryBuilder(parsedQueryParams);

    return (
        <>
            <Head title={__(translations,'Users')} />

            {/* <DashboardBreadCrumbs /> */}
            <Container className={cn('  w-full max-w-full !p-6 lg:!px-8')}>
                <DashboardBreadCrumbs resource="Users"  />

                <div className="flex items-center justify-between py-4">
                    <h1 className="text-2xl"> {__(translations,'Users')}</h1>
                        <Button className={'p-0'}>
                            <Link
                                className="flex items-center justify-center w-full h-full px-4 py-2 text-base gap-x-2"
                                href={route('users.create')}
                            >
                                <IconPlus />
                                {__(translations,'Create')}
                            </Link>
                        </Button>
                </div>
                <Card className={cn('w-full h-full ')}>
                    <QueryBuilderProvider builder={builder}>
                        <UsersDataTable columns={columns} data={paginationData.data} pd={paginationData} translations={translations} />
                    </QueryBuilderProvider>
                </Card>
            </Container>
        </>
    );
}

Index.layout = (page: any) => <DashboardLayout children={page} />;

export default Index;
