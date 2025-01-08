// export default Navbar;
import candies from '@/assets/images/candies.webp';
import choco from '@/assets/images/chocolate.webp';
import leonardo from '@/assets/images/Leonardo.jpg';
import macaoImage from '@/assets/images/macao_logo.png';
import { Button } from '@/components/ui/shadcn-button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/components/ui/shadcn-navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/shadcn-sheet';
import useWindowSize from '@/hooks/useWindowSize';
import { motion } from 'framer-motion';
import {
  Candy,
  Cherry,
  ChevronDown,
  Cookie,
  Facebook,
  History,
  Home,
  Instagram,
  Linkedin,
  Menu,
  Youtube
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from './ui';
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
    title: 'Chocolat',
    icon: Cookie,
    description: 'Découvrez notre sélection de chocolats fins',
    image: choco,
    highlight: 'Nouvelle Collection',
    items: ['Pâtes à tartiner', 'Chocolats variés', 'Chocolats sans sucre']
  },
  {
    id: 'confiserie',
    title: 'Confiserie',
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
    icon: Cherry,
    description: "L'excellence de la pâtisserie française",
    image: leonardo,
    highlight: 'Création Artisanale',
    items: ['Chocolats pâtissiers', 'Fourrage & décoration', 'Poudre de cacao sucré']
  }
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const { width } = useWindowSize();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <motion.header className="fixed top-0 z-50 w-full" initial="initial" animate="animate" variants={fadeIn}>
      {/* Special Announcement Banner */}
      <div className="bg-red-600 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: '-100%' }}
            transition={{
              duration: width < 768 ? 10 : 20,
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
      </div>

      <motion.div
        className={`relative ${scrolled ? 'bg-white shadow-md' : 'bg-gradient-to-b from-black/60 to-transparent'}`}
        animate={{
          backgroundColor: scrolled ? 'rgba(255, 255, 255, 1)' : 'rgba(0, 0, 0, 0)',
          transition: { duration: 0.3 }
        }}
      >
        <div className="container mx-auto px-4">
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
                  <MotionLink href="/">
                    <NavigationMenuLink
                      className={`text-lg font-medium rounded-md ${
                        scrolled
                          ? 'text-gray-800 hover:bg-red-50 hover:text-red-600'
                          : 'text-white hover:bg-red-100 hover:text-red-600'
                      }  transition-colors duration-300 px-3 py-2 flex items-center gap-2`}
                    >
                      <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.3 }}>
                        <Home className="h-5 w-5" />
                      </motion.div>
                      ACCUEIL
                    </NavigationMenuLink>
                  </MotionLink>
                </NavigationMenuItem>

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

                {featuredCategories.map((category) => (
                  <NavigationMenuItem key={category.id}>
                    <NavigationMenuTrigger
                      onMouseEnter={() => setHoveredCategory(category.id)}
                      className={`text-lg font-medium ${
                        scrolled
                          ? 'text-gray-800 hover:bg-red-50 hover:text-red-600'
                          : 'text-white hover:bg-red-100 hover:text-red-600'
                      } hover:text-red-600 transition-colors duration-300`}
                    >
                      <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.05 }}>
                        {category.icon && (
                          <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.3 }}>
                            <category.icon className="h-5 w-5" />
                          </motion.div>
                        )}
                        {category.title.toUpperCase()}
                      </motion.div>
                    </NavigationMenuTrigger>

                    <NavigationMenuContent>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="w-screen max-w-screen-lg mx-auto bg-white rounded-lg shadow-xl"
                      >
                        <div className="p-6 grid grid-cols-2 gap-8">
                          {/* Left Column - Image Section */}
                          <div className="relative overflow-hidden rounded-lg">
                            <motion.img
                              src={category.image}
                              alt={category.title}
                              className="w-full h-80 object-cover rounded-lg shadow-md"
                              whileHover={{ scale: 1.05 }}
                              transition={{ duration: 0.4 }}
                            />
                            {/* <motion.div
                              className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
                              whileHover={{ scale: 1 }}
                              initial={{ opacity: 0, y: -20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2 }}
                            >
                              {category.highlight}
                            </motion.div> */}
                          </div>

                          {/* Right Column - Content Section */}
                          <div className="flex flex-col justify-between">
                            <div className="space-y-4">
                              <motion.div
                                variants={menuItemVariants}
                                initial="closed"
                                animate="open"
                                className="border-b border-gray-100 pb-4"
                              >
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{category.title}</h3>
                                <p className="text-gray-600 text-lg">{category.description}</p>
                              </motion.div>

                              <div className="grid grid-cols-2 gap-3 pt-4">
                                {category.items.map((item, index) => (
                                  <motion.div
                                    key={item}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                  >
                                    <Link
                                      href={`/products/${category.id}/${item.toLowerCase()}`}
                                      className="block group"
                                    >
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
                                  </motion.div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
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
                      <Link href="/" className="block mb-6">
                        <span className="text-lg font-semibold text-gray-900 hover:text-red-600">ACCUEIL</span>
                      </Link>

                      {featuredCategories.map((category) => (
                        <div key={category.id} className="mb-6">
                          <h3 className="text-lg font-semibold text-red-600 mb-4">{category.title}</h3>
                          <div className="ml-4 grid grid-cols-2 gap-3">
                            {category.items.map((item, index) => (
                              <motion.div
                                key={item}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                              >
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
        </div>
      </motion.div>
    </motion.header>
  );
}

export default Navbar;
