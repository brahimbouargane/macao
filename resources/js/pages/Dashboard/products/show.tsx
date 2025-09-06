import { Badge, Card, Container } from '@/components/ui';
import { DashboardLayout } from '@/layouts';
import { PagePropsData } from '@/types';
import __ from '@/utils/translations';
import { Head, usePage } from '@inertiajs/react';
import DashboardBreadCrumbs from '../partials/dashboard-breadcrumbs';

function Show({ user }: PagePropsData) {
    const translations = usePage<PagePropsData>().props.translations
    return (
        <>
            <Head title={__(translations,'View') + ' ' + __(translations,'Users')} />

            {/* <DashboardBreadCrumbs /> */}
            <Container className="p-6 max-w-screen">
                <DashboardBreadCrumbs resource="Users" />
                <div className="flex items-center justify-between py-4">
                    <h1 className="text-2xl"> {__(translations,'View') + ' ' + __(translations,'User')}</h1>
                </div>

                <Card className="bg-accent">
                    <Card.Header>
                        <Card.Title>{user.email}</Card.Title>
                        <Card.Description className="space-x-4">
                            {/* <span className="space-x-2">
                                {user.roles.map((role) => (
                                    <Badge>{role.name}</Badge>
                                ))}
                            </span> */}
                        </Card.Description>
                    </Card.Header>
                    <Card.Content>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus perferendis repudiandae
                        quaerat dolorum amet, facere voluptate rem laboriosam inventore est! Consectetur, dolorem
                        molestias!
                    </Card.Content>
                    <Card.Footer></Card.Footer>
                </Card>
            </Container>
        </>
    );
}

Show.layout = (page: any) => <DashboardLayout children={page} />;

export default Show;
