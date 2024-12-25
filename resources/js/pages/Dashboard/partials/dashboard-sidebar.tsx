import * as React from 'react';

import { PagePropsData } from '@/types';
import __ from '@/utils/translations';
import { usePage } from '@inertiajs/react';

import { MdCategory, MdDashboard, MdSupervisedUserCircle } from 'react-icons/md';
import { Sidebar } from 'ui';
import { FaBoxOpen, FaTags } from 'react-icons/fa';
import MacaoChef from '@/assets/images/macao_chef.png';

export default function DashboardSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const { modelsCount, translations, locale } = usePage<PagePropsData>().props;
  const component = usePage().component;

  return (
    <Sidebar
      {...props}
      side="left"
      intent="sidebar"
      collapsible="dock"
      className="!shadow-xl border-none dark:border-solid  border-zinc-700  bg-accent "
    >
      <Sidebar.Header className="!bg-colors-primary/80 !h-[3.3rem] !w-full  !m-0 !p-0 !py-0 items-center justify-center     dark:bg-accent"></Sidebar.Header>
      <Sidebar.Content className="p-2 dark:bg-accent">
        <Sidebar.Section className={'mt-4'}>
          <Sidebar.Item
            isCurrent={component === 'Dashboard/overview/index'}
            icon={MdDashboard}
            href={route('dashboard')}
          >
            {__(translations, 'Dashboard')}
          </Sidebar.Item>
        </Sidebar.Section>

        {/* Ressource management */}
        <Sidebar.Section collapsible title={__(translations, 'Resource management')}>
          <Sidebar.Item
            isCurrent={component.includes('Dashboard/products')}
            icon={FaBoxOpen}
            href={route('products.index')}
            badge={String(modelsCount.product)}
          >
            {__(translations, 'Products')}
          </Sidebar.Item>

          <Sidebar.Item
            isCurrent={component.includes('Dashboard/brands')}
            icon={FaTags}
            href={route('brands.index')}
            badge={String(modelsCount.product)}
          >
            {__(translations, 'Brands')}
          </Sidebar.Item>
          <Sidebar.Item
            isCurrent={component.includes('Dashboard/categories')}
            icon={MdCategory}
            href={route('categories.index')}
            badge={String(modelsCount.category)}
          >
            {__(translations, 'Categories')}
          </Sidebar.Item>
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
      <Sidebar.Footer>
        <div className="">
          <img src={MacaoChef} className="object-contain w-full h-32 " alt="Macao chef" />
        </div>
      </Sidebar.Footer>
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
