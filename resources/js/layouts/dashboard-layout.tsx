import { IconCirclePerson, IconLogout } from 'justd-icons';
import { Avatar, Button,  Menu, Separator, Sidebar } from 'ui';

import DashboardSidebar from '@/pages/Dashboard/partials/dashboard-sidebar';
import { PagePropsData } from '@/types';
import __ from '@/utils/translations';
import { router, usePage } from '@inertiajs/react';
import { PropsWithChildren, useState } from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import { ThemeSwitcher } from '@/components/theme-switcher';
import LanguageSelector from '@/components/LanguageSelector';

export function DashboardLayout({ children }: PropsWithChildren) {

    const { auth ,translations,locale} = usePage<PagePropsData>().props;

    const [isFetching, setIsFetching] = useState(false);
    router.on('start', () => {
        setIsFetching(true);
    });
    router.on('finish', () => {
        setIsFetching(false);
    });

    return (
        <>
            {/* <div className="flex items-center justify-center w-full p-2 text-center text-white bg-accent-subtle">
                <p>You are logged in as User 9</p>
                <Button className="ml-2" intent="secondary">
                    LogOut
                </Button>
            </div> */}
            <ThemeProvider>
                <Sidebar.Provider>
                    <DashboardSidebar />
                    <Sidebar.Inset className="!overflow-hidden !m-0 !rounded-none">
                        {/* dashboard header */}
                        <header className="sticky justify-between  top-0   h-[3.57rem] p-4 px-6 border-b-[1px] border-solid  flex items-center gap-x-2   z-10 dark:bg-accent shadow-lg  dark:border-solid">
                            <span className="flex items-center space-x-4">
                                <Sidebar.Trigger className="-ml-1" />
                                <Separator className="hidden h-6 sm:block" orientation="vertical" />
                                <ThemeSwitcher/>
                            </span>
                            <div className="flex items-center gap-x-4 ">

                                {/* <DatabaseNotificationsProvider /> */}
                                <div className="flex items-center gap-x-2">
                                    {/* <Button appearance="plain" aria-label="Search..." size="square-petite">
                            <IconSearch />
                        </Button> */}
                        <LanguageSelector currentLocale={locale}/>
                                    {/* mobile view menu */}
                                    <Menu>
                                        <Menu.Trigger
                                            aria-label="Profile"
                                            className="flex items-center p-2 overflow-hidden rounded-full gap-x-2 group"
                                        >
                                            <Avatar className="overflow-hidden" size="medium" shape="circle" src={auth.user.avatar} />
                                        </Menu.Trigger>
                                        <Menu.Content className="min-w-[--trigger-width] dark:bg-accent">
                                            <Menu.Item href={route('profile.edit')}>
                                                <IconCirclePerson />
                                                {__(translations,'Profile')}
                                            </Menu.Item>
                                            {/* <Menu.Item href="#"> */}
                                            {/* <IconSettings /> */}
                                            {/* Settings */}
                                            {/* </Menu.Item> */}

                                            <Menu.Item routerOptions={{ method: 'post' }} href={route('logout')}>
                                                <IconLogout />
                                                {__(translations,'Log Out')}
                                            </Menu.Item>
                                        </Menu.Content>
                                    </Menu>
                                </div>
                            </div>
                        </header>
                        <div className="z-50 p-2 text-sm text-center text-white bg-primary/50">
                            {__(translations,'🚧 Notice: The application is in development mode. encountring errors is probable.')}
                        </div>
                        {/* Dashboard page content */}
                        {/* {isFetching && (
                        <div className="flex items-center justify-center w-full h-full bg-colors-primary-500/20">
                            <Loader intent="primary" size="extra-large" className="" />
                        </div>
                    )} */}
                        <div className="w-full h-full max-w-full bg-zinc-100 dark:bg-zinc-800 ">{children}</div>
                    </Sidebar.Inset>
                </Sidebar.Provider>
            </ThemeProvider>
        </>
    );
}
