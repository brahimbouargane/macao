import macaoImage from '@/assets/images/macao_logo.png';
import { Button } from '@/components/ui/shadcn-button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/shadcn-dropdown-menu';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/components/ui/shadcn-navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/shadcn-sheet';
import { Facebook, Globe, Instagram, Menu, Youtube } from 'lucide-react';

import { useEffect, useState } from 'react';
import { Link } from './ui';

const mainNavItems = [
  {
    title: 'ACCUEIL',
    href: '/'
  },
  {
    title: 'NOTRE HISTOIRE',
    href: '/'
  },
  {
    title: 'PRODUITS',
    href: '/produits',
    subItems: [
      { title: 'Sucettes', href: '/produits/sucettes' },
      { title: 'Bonbons durs', href: '/produits/bonbons-durs' },
      { title: 'Caramel', href: '/produits/caramel' }
    ]
  }
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header className="fixed top-0 z-50 w-full">
      <div
        className={`relative ${
          scrolled ? 'bg-white/70 backdrop-blur-md shadow-sm' : 'bg-transparent'
        } transition-all duration-300`}
      >
        <div className="container mx-auto px-4">
          {/* Top bar */}
          <div className="flex h-10 items-center justify-end space-x-4 text-sm">
            <div className="flex items-center space-x-4">
              <Link
                href="https://facebook.com"
                className={`${scrolled ? 'text-black' : 'text-white'} hover:text-red-600 transition-colors duration-300`}
              >
                <Facebook className="h-4 w-4" />
              </Link>
              <Link
                href="https://instagram.com"
                className={`${scrolled ? 'text-black' : 'text-white'} hover:text-red-600 transition-colors duration-300`}
              >
                <Instagram className="h-4 w-4" />
              </Link>
              <Link
                href="https://youtube.com"
                className={`${scrolled ? 'text-black' : 'text-white'} hover:text-red-600 transition-colors duration-300`}
              >
                <Youtube className="h-4 w-4" />
              </Link>
            </div>
            <div className="h-4 w-px bg-gray-200" />
            <DropdownMenu>
              <DropdownMenuTrigger
                className={`flex items-center space-x-2 ${scrolled ? 'text-black' : 'text-white'} transition-colors duration-300`}
              >
                <Globe className="h-4 w-4" />
                <span>FR</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>French</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Main navbar */}
          <div className="flex h-12 items-center justify-between">
            <Link href="/" className="flex-shrink-0 -top-6 lg:-top-2 ">
              <img src={macaoImage} alt="Macao" width={200} className="h-20 lg:h-28 w-auto" />
            </Link>

            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                {mainNavItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    {item.subItems ? (
                      <>
                        <NavigationMenuTrigger
                          className={`text-base font-bold hover:text-red-600 ${scrolled ? 'text-black' : 'text-white'}`}
                        >
                          {item.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid bg-white w-[400px] gap-3 p-4">
                            {item.subItems.map((subItem) => (
                              <li key={subItem.title}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={subItem.href}
                                    className="block text-base  select-none font-bold space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-red-50 hover:text-red-600"
                                  >
                                    {subItem.title}
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link href={item.href}>
                        <NavigationMenuLink
                          className={`text-base font-bold ${
                            scrolled ? 'text-black' : 'text-white'
                          } p-3 rounded-md hover:bg-red-50 hover:text-red-600 transition-colors duration-300`}
                        >
                          {item.title}
                        </NavigationMenuLink>
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className={`px-0 text-white  hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden  ${scrolled ? 'text-black' : 'text-white'}`}
                >
                  <Menu className="!h-8 !w-8" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col gap-4 ">
                  {mainNavItems.map((item) => (
                    <div key={item.title}>
                      <Link href={item.href} className="text-lg font-medium text-black hover:text-red-600">
                        {item.title}
                      </Link>
                      {item.subItems && (
                        <div className="ml-4 mt-2 flex flex-col gap-2">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.title}
                              href={subItem.href}
                              className="text-sm text-black hover:text-red-600"
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
