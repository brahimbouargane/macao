// export default Navbar;
import candies from '@/assets/images/candies.webp';
import candy from '@/assets/images/candy.webp';
import choco from '@/assets/images/chocolate.webp';
import leonardo from '@/assets/images/Leonardo.webp';
import macaoImage from '@/assets/images/macao_logo.png';
import patesserieicon from '@/assets/images/pastrybag.png';
import wafericon from '@/assets/images/wafer.png';
import wafer from '@/assets/images/wafer.webp';

import { Button } from '@/components/ui/shadcn-button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/components/ui/shadcn-navigation-menu';
import { Sheet, SheetClose, SheetContent, SheetTrigger } from '@/components/ui/shadcn-sheet';
import useWindowSize from '@/hooks/useWindowSize';
import { usePage } from '@inertiajs/react';
import { motion } from 'framer-motion';
import {
  Cake,
  Candy,
  ChevronDown,
  Cookie,
  Facebook,
  Gift,
  History,
  Instagram,
  Layers,
  Linkedin,
  Menu,
  NotebookTabs,
  Youtube
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { Container, Link } from './ui';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/shadcn-dropdown-menu';
import { ScrollArea } from './ui/shadcn-scroll-area';

const MotionLink = motion(Link);
const MotionButton = motion(Button);

// Animation variants
const fadeIn = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const scaleUp = {
  initial: { scale: 0.95 },
  animate: { scale: 1 },
  hover: { scale: 1.05 }
};

const menuItemVariants = {
  closed: { opacity: 0, x: -10 },
  open: { opacity: 1, x: 0 }
};

// Featured categories with enhanced visuals
const featuredCategories = [
  {
    id: 'chocolat',
    title: 'Chocolats',
    icon: Cookie,
    description: 'Découvrez notre sélection de chocolats fins',
    image: choco,
    highlight: 'Nouvelle Collection',
    items: ['Pâtes à tartiner', 'Chocolats variés', 'Chocolats sans sucre']
  },
  {
    id: 'confiserie',
    title: 'Confiseries',
    icon: Candy,
    description: 'Des douceurs pour tous les goûts',
    image: candies,
    highlight: 'Fait Main',
    items: [
      'Sucettes',
      'Pâte à mâcher',
      'Gommes gélifiées',
      'Dragées',
      'Caramel',
      'Bonbons durs sans sucre',
      'Bonbons Durs',
      'Tablettes de chocolats'
    ]
  },
  {
    id: 'Produits pâtissiers',
    title: 'Produits pâtissiers',
    icon: Cake,
    iconImage: patesserieicon,
    description: "L'excellence de la pâtisserie française",
    image: leonardo,
    highlight: 'Création Artisanale',
    items: ['Chocolats pâtissiers', 'Fourrage & décoration', 'Poudre de cacao sucré']
  },
  {
    id: 'gaufrettes',
    title: 'Gaufrettes',
    icon: Layers,
    iconImage: wafericon,
    description: 'La légèreté et le croustillant à la perfection',
    image: wafer,
    highlight: 'Création Artisanale',
    items: ['Gaufrettes enrobées', 'Gaufrettes fourrées']
  },
  {
    id: 'Fêtes et événements',
    title: 'Fêtes et événements',
    icon: Gift,
    description: 'La légèreté et le croustillant à la perfection',
    image: candy,
    highlight: 'Collections Saisonnières',
    items: ['Chocolats fins fourrés', 'Confiserie fine', 'Fruits confits', 'Saint-Valentin', 'Nougat']
  }
];

const IconRenderer = ({ category, scrolled }) => {
  if (category.icon) {
    const IconComponent = category.icon;
    return (
      <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.3 }}>
        <IconComponent className="h-5 w-5 " />
      </motion.div>
    );
  }

  if (category.iconImage) {
    return (
      <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.3 }}>
        <img
          src={category.iconImage}
          alt={`${category.title} icon`}
          className={`h-5 w-5 object-contain transition-all duration-300
              ${
                scrolled
                  ? 'brightness-0' // Makes the image black when scrolled
                  : 'brightness-0 invert' // Makes the image white when not scrolled
              }
              hover:brightness-100 hover:invert-0 hover:filter-none`} // Removes filters on hover to show original color
        />
      </motion.div>
    );
  }

  return null;
};
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [showBanner, setShowBanner] = useState(true);
  const { width } = useWindowSize();
  const { url } = usePage();

  const isProductDetailPage = /^\/products\/[^\/]+$/.test(url);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      const shouldHideBanner = window.scrollY > 0; // Hide banner on any scroll
      setScrolled(isScrolled);
      setShowBanner(!shouldHideBanner);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header className="fixed top-0 z-50 w-full" initial="initial" animate="animate" variants={fadeIn}>
      {/* Special Announcement Banner */}
      <motion.div
        initial={{ height: 'auto', opacity: 1 }}
        animate={{
          height: showBanner ? 'auto' : 0,
          opacity: showBanner ? 1 : 0
        }}
        transition={{
          height: { duration: 0.3 },
          opacity: { duration: 0.2 }
        }}
        className="bg-red-600 text-white overflow-hidden"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: '-100%' }}
            transition={{
              duration: width < 768 ? 20 : 40,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="py-2 whitespace-nowrap flex items-center"
          >
            <div className="flex items-center space-x-16">
              <span>🍫 Nouvelle Collection de Chocolats Premium</span>
              <span>•</span>
              <span>🍪 Découvrez nos Spécialités Maison</span>
              <span>•</span>
              <span>✨ Créations Artisanales Exclusives</span>
              <span>•</span>
              <span>🎁 Coffrets Cadeaux Personnalisés</span>
              <span>•</span>
              <span>🌟 Excellence Pâtissière Française</span>
              <span>•</span>
              <span>🍬 Confiseries Traditionnelles</span>
              <span>•</span>
              <span>🏆 Qualité Exceptionnelle Garantie</span>
              <span>•</span>
              <span>💝 Idées Cadeaux Gourmands</span>
            </div>
            {/* Duplicate content for seamless loop */}
            <div className="flex items-center space-x-16 ml-16">
              <span>🍫 Nouvelle Collection de Chocolats Premium</span>
              <span>•</span>
              <span>🍪 Découvrez nos Spécialités Maison</span>
              <span>•</span>
              <span>✨ Créations Artisanales Exclusives</span>
              <span>•</span>
              <span>🎁 Coffrets Cadeaux Personnalisés</span>
              <span>•</span>
              <span>🌟 Excellence Pâtissière Française</span>
              <span>•</span>
              <span>🍬 Confiseries Traditionnelles</span>
              <span>•</span>
              <span>🏆 Qualité Exceptionnelle Garantie</span>
              <span>•</span>
              <span>💝 Idées Cadeaux Gourmands</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className={`relative ${
          isProductDetailPage
            ? 'bg-gradient-to-r from-red-600 to-red-800'
            : scrolled
              ? 'bg-white shadow-md'
              : 'bg-gradient-to-b from-black/60 to-transparent'
        }`}
        animate={{
          background: isProductDetailPage
            ? 'linear-gradient(to right, rgb(220, 38, 38), rgb(153, 27, 27))' // from-red-600 to-red-800
            : scrolled
              ? 'rgba(255, 255, 255, 1)'
              : 'linear-gradient(to bottom, rgba(0, 0, 0, 0.6), transparent)',
          transition: { duration: 0.3 }
        }}
      >
        <Container>
          <div className="flex h-20 md:h-24 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="relative flex-shrink-0">
              <img
                src={macaoImage}
                alt="Logo"
                className="h-[4.9rem] w-auto md:h-24 transition-transform duration-300 hover:scale-105"
              />
            </Link>

            {/* Main Navigation */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList className="space-x-1">
                <NavigationMenuItem>
                  <MotionLink href="/history">
                    <NavigationMenuLink
                      className={`text-lg font-medium rounded-md  ${
                        scrolled
                          ? 'text-gray-800 hover:bg-red-50 hover:text-red-600'
                          : 'text-white hover:bg-red-100 hover:text-red-600'
                      } hover:text-red-600 transition-colors duration-300 px-3 py-2 flex items-center gap-2`}
                    >
                      <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.3 }}>
                        <History className="h-5 w-5" />
                      </motion.div>
                      NOTRE HISTOIRE
                    </NavigationMenuLink>
                  </MotionLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={`text-lg font-medium ${
                      scrolled
                        ? 'text-gray-800 hover:bg-red-50 hover:text-red-600'
                        : 'text-white hover:bg-red-100 hover:text-red-600'
                    } hover:text-red-600 transition-colors duration-300`}
                  >
                    <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.05 }}>
                      <Candy className="h-5 w-5" />
                      NOS PRODUITS
                    </motion.div>
                  </NavigationMenuTrigger>

                  <NavigationMenuContent>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      className="w-screen left-0 max-w-screen-xl mx-auto bg-white rounded-lg shadow-xl p-6"
                    >
                      <div className="grid lg:grid-cols-5 gap-6">
                        {featuredCategories.map((category) => (
                          <motion.div
                            key={category.id}
                            className=" "
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                          >
                            {/* Category Header */}
                            <div className="flex items-center gap-2 border-b border-gray-100 pb-2">
                              <div className="text-red-600">
                                <IconRenderer category={category} scrolled={true} />
                              </div>
                              <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
                            </div>

                            {/* Category Image */}
                            <div className="relative h-32 overflow-hidden rounded-lg">
                              <motion.img
                                src={category.image}
                                alt={category.title}
                                className="w-full h-full object-cover"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.4 }}
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                              <span className="absolute bottom-2 left-2 text-white text-sm font-medium">
                                {category.highlight}
                              </span>
                            </div>

                            {/* Category Items */}
                            <div className="space-y-2">
                              {category.items.map((item, index) => (
                                <motion.div
                                  key={item}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: index * 0.05 }}
                                >
                                  <Link href={`/products/${category.id}/${item.toLowerCase()}`} className="block group">
                                    <motion.div
                                      className="px-3 py-2 rounded-md hover:bg-red-50 transition-colors duration-300"
                                      whileHover={{ x: 5 }}
                                    >
                                      <span className="text-gray-600 group-hover:text-red-600 text-sm">{item}</span>
                                    </motion.div>
                                  </Link>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <MotionLink href="#conatct">
                    <NavigationMenuLink
                      className={`text-lg font-medium rounded-md  ${
                        scrolled
                          ? 'text-gray-800 hover:bg-red-50 hover:text-red-600'
                          : 'text-white hover:bg-red-100 hover:text-red-600'
                      } hover:text-red-600 transition-colors duration-300 px-3 py-2 flex items-center gap-2`}
                    >
                      <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.3 }}>
                        <NotebookTabs className="h-5 w-5" />
                      </motion.div>
                      CONTACTT
                    </NavigationMenuLink>
                  </MotionLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Social Media and Language */}
            <motion.div className="flex items-center space-x-6" variants={fadeIn}>
              <div className="flex items-center space-x-4">
                {[
                  { icon: Facebook, href: 'https://www.facebook.com/MacaoPastor/' },
                  { icon: Instagram, href: 'https://www.instagram.com/macaopastor/' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/company/pastor-macao-s-a/' },
                  { icon: Youtube, href: 'https://www.youtube.com/channel/UCGoKUNUIEgPpUkV_Po_r__g' }
                ].map(({ icon: Icon, href }) => (
                  <MotionLink
                    key={href}
                    href={href}
                    target="_blank"
                    className={`${scrolled ? 'text-gray-800' : 'text-white'} hover:text-red-600 transition-colors duration-300`}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="h-5 w-5" />
                  </MotionLink>
                ))}
              </div>

              <motion.div className="h-4 w-px bg-gray-200 " variants={scaleUp} />

              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`flex items-center space-x-2 ${
                    scrolled ? 'text-gray-800' : 'text-white'
                  } hover:text-red-600 transition-colors duration-300`}
                >
                  <span className="text-base font-medium">FR</span>
                  <ChevronDown className="!h-5 !w-5" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>English</DropdownMenuItem>
                  <DropdownMenuItem>Français</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Mobile Menu */}
              <Sheet>
                <SheetTrigger asChild>
                  <MotionButton
                    variant="ghost"
                    className={`lg:hidden ${scrolled ? 'text-gray-800' : 'text-white'} hover:text-red-600`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Menu className="!h-8 !w-8" />
                  </MotionButton>
                </SheetTrigger>
                <SheetContent side="right" className="w-full max-w-sm">
                  <ScrollArea className="h-screen">
                    <nav className="mt-6">
                      <SheetClose asChild>
                        <Link href="/history" className="block mb-6">
                          <span className="text-lg font-semibold text-red-600 hover:text-gray-900">NOTRE HISTOIRE</span>
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link href="#contact" className="block mb-6">
                          <span className="text-lg font-semibold text-red-600 hover:text-gray-900">CONTACT</span>
                        </Link>
                      </SheetClose>
                      {featuredCategories.map((category) => (
                        <div key={category.id} className="mb-10">
                          <h3 className="text-lg font-semibold text-red-600 mb-4">{category.title}</h3>
                          <div className="ml-4 grid grid-cols-2 gap-3">
                            {category.items.map((item, index) => (
                              <motion.div
                                key={item}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                              >
                                <SheetClose asChild>
                                  <Link href={`/products/${category.id}/${item.toLowerCase()}`} className="block group">
                                    <motion.div
                                      className="p-4 rounded-lg bg-gray-50 hover:bg-red-50 border border-gray-100 hover:border-red-100 transition-all duration-300"
                                      whileHover={{
                                        scale: 1.03,
                                        y: -2,
                                        transition: { duration: 0.2 }
                                      }}
                                    >
                                      <span className="text-gray-800 group-hover:text-red-600 font-medium transition-colors duration-300">
                                        {item}
                                      </span>
                                    </motion.div>
                                  </Link>
                                </SheetClose>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </nav>
                  </ScrollArea>
                </SheetContent>
              </Sheet>
            </motion.div>
          </div>
        </Container>
      </motion.div>
    </motion.header>
  );
}

export default Navbar;
