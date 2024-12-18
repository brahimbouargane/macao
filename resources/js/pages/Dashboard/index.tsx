import { PagePropsData } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { DashboardLayout } from 'layouts';
import { Card, Container } from 'ui';
import AreaChartExample from './charts/AreaChart';
import BarChartExample from './charts/BarChart';
import PieChartExample from './charts/PieChart';
import __ from '@/utils/translations';

export default function Dashboard({ auth }: PagePropsData) {
    const translations = usePage<PagePropsData>().props.translations
    return (
        <>
            <Head title={__(translations,"Dashboard")} />
            <div className="grid gap-4 p-2 lg:grid-cols-1 ">
                {/* <AreaChartExample /> */}
                {/* <PieChartExample /> */}
            </div>
            <Card className="w-full p-6 m-6">
                <Container className="max-w-screen">
                    <h1> Dashboard Index Page</h1>
                <BarChartExample />

                </Container>
            </Card>
        </>
    );
}

Dashboard.layout = (page: any) => <DashboardLayout children={page} />;
