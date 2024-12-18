import { Container } from '@/components/ui';
import { DashboardLayout } from '@/layouts/dashboard-layout';
import { cn } from '@/utils/classes';
import { Head, usePage } from '@inertiajs/react';
import { UpdatePasswordForm, UpdateProfileInformationForm } from './partials';
import { PagePropsData } from '@/types';
interface Props {
    mustVerifyEmail: boolean;
    status?: string;
    optimized_profile_image: string;
}

const title = 'Profile';

export default function Edit({ mustVerifyEmail, status, optimized_profile_image }: Props) {
    const translations = usePage<PagePropsData>().props.translations

    return (
        <>
            <Head title={title} />
            <Container className={cn('w-full  max-w-screen !p-6 lg:!px-8')}>
                <div className="grid gap-8 md:grid-cols-2 ">
                    <UpdateProfileInformationForm
                        mustVerifyEmail={mustVerifyEmail}
                        status={status}
                        profile_image={optimized_profile_image}
                        translations={translations}
                    />
                    <UpdatePasswordForm  translations={translations}/>

                    {/* <DeleteUserForm /> */}
                </div>
            </Container>
        </>
    );
}

Edit.layout = (page: any) => <DashboardLayout children={page} />;
