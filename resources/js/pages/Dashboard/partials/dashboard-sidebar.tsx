import * as React from 'react';

import { PagePropsData } from '@/types';
import __ from '@/utils/translations';
import { usePage } from '@inertiajs/react';

import { Logo } from '@/components/logo';
import { MdCategory, MdDashboard, MdSupervisedUserCircle } from 'react-icons/md';
import { Link, Separator, Sidebar  } from 'ui';

export default function DashboardSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const {  modelsCount, translations, locale } = usePage<PagePropsData>().props;
  const component = usePage().component;

  return (
    <Sidebar
      {...props}
      side="left"
      intent="sidebar"
      collapsible="dock"
      className="!shadow-xl border-none dark:border-solid  border-zinc-700  bg-accent "
    >
      <Sidebar.Header className="!bg-colors-primary/80 !h-[3.3rem] !w-full  !m-0 !p-0 !py-0 items-center justify-center     dark:bg-accent">
        <Link
          className=" w-full     flex items-center justify-center group-data-[collapsible=dock]:size-10 group-data-[collapsible=dock]:justify-center gap-x-2 "
          href={route('dashboard')}
        >
          {() => {
            return <Logo className={'!size-8'} />;
          }}
          {/* <strong className="font-medium group-data-[collapsible=dock]:hidden">Logo</strong> */}
        </Link>
      </Sidebar.Header>
      <Sidebar.Content className="pl-0 dark:bg-accent p-2">
        <Sidebar.Section className={'mt-4'}>
          <Sidebar.Item isCurrent={component === 'Dashboard/index'} icon={MdDashboard} href={route('dashboard')}>
            {__(translations, 'Dashboard')}
          </Sidebar.Item>
        </Sidebar.Section>

        {/* Ressource management */}
        <Sidebar.Section collapsible title={__(translations, 'Resource management')}>
          <Sidebar.Item
            isCurrent={component.includes('Dashboard/categories')}
            icon={MdCategory}
            href={route('categories.index')}
            badge={String(modelsCount.category)}
          >
            {__(translations, 'Categories')}
          </Sidebar.Item>
          <Separator />
          <Sidebar.Item
            isCurrent={component.includes('Dashboard/users')}
            icon={MdSupervisedUserCircle}
            href={route('users.index')}
            badge={String(modelsCount.user)}
          >
            {__(translations, 'Users')}
          </Sidebar.Item>
        </Sidebar.Section>

        {/* Settings */}
        {/* <Sidebar.Section collapsible title={__('Settings')}>
                    <Sidebar.Item icon={IconSettings} href="#">
                        {__(translations,'Settings')}
                    </Sidebar.Item>
                </Sidebar.Section> */}
      </Sidebar.Content>

      {/* sidebar footer */}
      {/* <Sidebar.Footer className="items-center hidden w-full lg:flex lg:flex-row bg-accent">
                <Menu>
                    <Button appearance="plain" aria-label="Profile" slot="close" className="group ">
                        <Avatar size="small" shape="square" src={auth.user.avatar} className="overflow-hidden" />
                        <span className="group-data-[collapsible=dock]:hidden flex items-center justify-center">
                            {auth.user.email.substring(0, 10)}
                            <IconChevronLgDown className="absolute transition-transform right-3 size-4 group-pressed:rotate-180" />
                        </span>
                    </Button>
                    <Menu.Content className="min-w-[--trigger-width]">
                        <Menu.Item href={route('profile.edit')}>
                            <IconCirclePerson />
                            {__(translations,'Profile')}
                        </Menu.Item>

                        <Menu.Separator />
                        <Menu.Item
                            routerOptions={{
                                method: 'post',
                                onStart: () => {
                                    setTheme('light');
                                }
                            }}
                            href={route('logout')}
                        >
                            <IconLogout />
                            {__(translations,'Log Out')}
                        </Menu.Item>
                    </Menu.Content>
                </Menu>
            <LanguageSelector  currentLocale={locale}/>
            </Sidebar.Footer> */}
    </Sidebar>
  );
}
