import { Breadcrumbs } from '@/components/ui';
import { PagePropsData } from '@/types';
import __ from '@/utils/translations';
import { usePage } from '@inertiajs/react';

type DashboardBreadCrumbsProps = {
    resource: string;
};
export default function DashboardBreadCrumbs({ resource }: DashboardBreadCrumbsProps) {
    

    const { props :{translations}} = usePage<PagePropsData>();
    const currentComponent = usePage().component;
    const currentAction = currentComponent.split('/').pop() ;
    const resourceActions = { index: 'List', edit: 'Edit', show: 'View', create: 'Create' };

    return (
        <Breadcrumbs className="mb-2">
            <Breadcrumbs.Item href={route(`${resource.toLowerCase()}.index`)}>{__(translations,resource)}</Breadcrumbs.Item>
            <Breadcrumbs.Item href="#">{
            //@ts-ignore
            __(translations,resourceActions[currentAction])
            }</Breadcrumbs.Item>
        </Breadcrumbs>
    );
}
