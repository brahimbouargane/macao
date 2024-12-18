import LanguageSelector from '@/components/LanguageSelector';
import { Logo } from '@/components/logo';
import { PagePropsData } from '@/types';
import __ from '@/utils/translations';
import { Link, usePage } from '@inertiajs/react';
import { useTheme } from 'components/theme-provider';
import { ThemeSwitcher } from 'components/theme-switcher';
import { IconBrandJustd, IconBrandLaravel, IconChevronDown, IconColorSwatch, IconSettings } from 'justd-icons';
import React from 'react';
import { Selection } from 'react-aria-components';
import { Avatar, Button, Menu, Navbar, Separator } from 'ui';

const navigations = [
  {
    name: 'Home',
    textValue: 'Accueil',
    href: '/'
  },
  {
    name: 'About',
    textValue: 'About',
    href: '/about'
  },
  
 
  
];

export function AppNavbar({ children, ...props }: React.ComponentProps<typeof Navbar>) {
  const page = usePage<PagePropsData>();
  const translations = page.props.translations
  const { auth } = page.props
  const [isOpen, setIsOpen] = React.useState(false);
  React.useEffect(() => setIsOpen(false), [page.url]);
  return (
    <Navbar isOpen={isOpen} onOpenChange={setIsOpen} {...props}>
      <Navbar.Nav>
        <Navbar.Logo aria-label="Logo">
          <Logo />
        </Navbar.Logo>
        <Navbar.Section>
          {navigations.map((item) => (
            <Navbar.Item isCurrent={item.href === page.url} key={item.href} href={item.href}>
              {__(translations,item.name)}
              
            </Navbar.Item>
          ))}
        </Navbar.Section>
     
        <Navbar.Section className="ml-auto ">
          <div className='hidden ml-auto gap-x-1 lg:flex'>
          {auth.user ? <UserMenu /> : <LoginMenu />}
          </div>
        <LanguageSelector currentLocale={page.props.locale}/>

        </Navbar.Section>
      </Navbar.Nav>

      <Navbar.Compact>
        <Navbar.Flex>
          <Navbar.Trigger />
          <Separator className="h-6" orientation="vertical" />
          <Navbar.Logo aria-label="Logo">
            <Logo className='!size-8'/>
          </Navbar.Logo>
        </Navbar.Flex>
        <Navbar.Flex className="gap-x-1">
          {!auth.user && <ThemeSwitcher />}
          {auth.user ? <UserMenu /> : <LoginMenu />}
        </Navbar.Flex>
      </Navbar.Compact>

      {children}
    </Navbar>
  );
}

function UserMenu() {
  const { auth } = usePage<PagePropsData>().props;
  const { theme, setTheme } = useTheme();
  const currentTheme = theme || 'system';
  const [selectedTheme, setSelectedTheme] = React.useState<Selection>(new Set([currentTheme]));
  return (
    <Menu>
      <Menu.Trigger aria-label="Open menu">
        <Avatar status="online" size="medium" src={auth.user.avatar} className="size-8" />
      </Menu.Trigger>
      <Menu.Content showArrow placement="bottom end" className="sm:min-w-56">
        <Menu.Section>
          <Menu.Header separator className="relative">
            <div>{auth.user.name}</div>
            <div className="pr-6 text-sm font-normal truncate text-muted-fg whitespace-nowrap">{auth.user.email}</div>
          </Menu.Header>
        </Menu.Section>
        <Menu.Item href={route('dashboard')}>Dashboard</Menu.Item>
        <Menu.Item href={route('profile.edit')} className="justify-between">
          Settings
          <IconSettings />
        </Menu.Item>
        <Menu.Submenu>
          <Menu.Item>Preferences</Menu.Item>
          <Menu.Content
            selectionMode="single"
            selectedKeys={selectedTheme}
            onSelectionChange={(keys) => {
              setSelectedTheme(keys);
              // @ts-ignore
              setTheme(keys.has('system') ? 'system' : keys.has('dark') ? 'dark' : 'light');
            }}
            items={[
              { name: 'Light', value: 'light' },
              { name: 'Dark', value: 'dark' },
              { name: 'System', value: 'system' }
            ]}
          >
            {(item) => (
              <Menu.Checkbox id={item.value} textValue={item.name}>
                {item.name}
              </Menu.Checkbox>
            )}
          </Menu.Content>
        </Menu.Submenu>
        <Menu.Separator />
        <Menu.Item target="_blank" href="https://laravel.com" className="justify-between">
          Documentation
          <IconBrandLaravel />
        </Menu.Item>
        <Menu.Item target="_blank" href="https://getjustd.com" className="justify-between">
          Components
          <IconBrandJustd />
        </Menu.Item>
        <Menu.Item target="_blank" href="https://getjustd.com/colors" className="justify-between">
          Colors
          <IconColorSwatch />
        </Menu.Item>
        <Menu.Separator />
        <Menu.Item routerOptions={{ method: 'post' }} href={route('logout')}>
          <span>Logout</span>
        </Menu.Item>
      </Menu.Content>
    </Menu>
  );
}

function LoginMenu() {
  const translations = usePage<PagePropsData>().props.translations

  return (
  <>
    <Button className="!p-0 overflow-hidden ml-4"><Link href={route('login')} className='inline-block p-2 rounde-md'> {__(translations,'Log in')}</Link></Button>
    {/* <Menu>
      <Button size="small" appearance="outline">
        {__(translations,'Log in')}
        <IconChevronDown className="ml-2" />
      </Button>
      <Menu.Content showArrow placement="bottom end" className="sm:min-w-40">
        <Menu.Item href={route('login')}>Login</Menu.Item>
        <Menu.Item href={route('register')}>Register</Menu.Item>
      </Menu.Content>
    </Menu> */}
    </>
  );
}
