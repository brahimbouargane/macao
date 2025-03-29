import macaoImage from '@/assets/images/LOGO-MACAO.svg';
import { Link, usePage } from '@inertiajs/react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Facebook, Instagram, Linkedin, Menu, X, Youtube } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';

const MotionLink = motion(Link);
const MotionTag = motion.a;

const featuredCategories = [
  {
    id: 'chocolat',
    title: 'Chocolats',
    description: 'Découvrez notre sélection de chocolats fins',
    highlight: 'Nouvelle Collection',
    items: ['Pâtes à tartiner', 'Chocolats variés', 'Chocolats sans sucre', 'Tablettes de chocolats']
  },
  {
    id: 'confiserie',
    title: 'Confiseries',
    description: 'Des douceurs pour tous les goûts',
    highlight: 'Fait Main',
    items: [
      'Sucettes',
      'Pâte à mâcher',
      'Gommes gélifiées',
      'Dragées',
      'Caramel',
      'Bonbons durs sans sucre',
      'Bonbons Durs'
    ]
  },
  {
    id: 'Produits pâtissiers',
    title: 'Produits pâtissiers',
    description: "L'excellence de la pâtisserie française",
    highlight: 'Création Artisanale',
    items: ['Chocolats pâtissiers', 'Fourrage & décoration', 'Poudre de cacao sucré', 'Fruits confits']
  },
  {
    id: 'gaufrettes',
    title: 'Gaufrettes',
    description: 'La légèreté et le croustillant à la perfection',
    highlight: 'Création Artisanale',
    items: ['Gaufrettes enrobées', 'Gaufrettes fourrées']
  },
  {
    id: 'Fêtes et événements',
    title: 'Fêtes et événements',
    description: 'La légèreté et le croustillant à la perfection',
    highlight: 'Collections Saisonnières',
    items: ['Chocolats fins fourrés', 'Confiserie fine', 'Nougat', 'Fruits confits - f&e']
  }
];
const blog = [
  {
    id: 'blog',
    title: 'Blog',
    items: ['Les actualités de Macao', 'Les recettes à base de produits Macao'],
    link: ['actualites-macao', 'recettes-produits-macao']
  }
];

const dropdownVariants = {
  hidden: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.2,
      ease: 'easeInOut'
    }
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: 'easeOut'
    }
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.2,
      ease: 'easeInOut'
    }
  }
};

const CategoryCard = ({ category, index }) => {
  return (
    <div className={`p-4 md:px-8 md:py-6 bg-[#EDEDED] rounded-l-[80px] rounded-tr-[80px]`}>
      <div className="flex items-center font-custom  gap-2 mb-4">
        {category.icon && <category.icon className="h-5 w-5 text-primary" />}
        {category.iconImage && <img src={category.iconImage} alt={`${category.title} icon`} className="h-5 w-5" />}
        <h2 className="text-xl font-custom  md:text-2xl italic mb-2">
          <span className="text-red-700">{category.title}</span>
        </h2>
      </div>

      <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8" role="menu">
        {category.items.map((item, itemIndex) => (
          <li key={itemIndex} role="none">
            <Link
              href={`/products/${category.id}/${item.toLowerCase()}`}
              className="text-gray-600 font-custom  hover:text-primary text-sm md:text-base block transition-colors duration-200"
              role="menuitem"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
const BlogCard = ({ category, index }) => {
  return (
    <div className={`p-4 md:px-8 md:py-6 bg-[#EDEDED] rounded-l-[80px] rounded-tr-[80px]`}>
      <div className="flex items-center font-custom  gap-2 mb-4">
        {category.icon && <category.icon className="h-5 w-5 text-primary" />}
        {category.iconImage && <img src={category.iconImage} alt={`${category.title} icon`} className="h-5 w-5" />}
        <h2 className="text-xl font-custom  md:text-2xl italic mb-2">
          <span className="text-red-700">{category.title}</span>
        </h2>
      </div>

      <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8" role="menu">
        {category.link.map((item, itemIndex) => (
          <li key={itemIndex} role="none">
            <Link
              href={`/${category.id}/${item.toLowerCase()}`}
              className="text-gray-600 font-custom  hover:text-primary text-sm md:text-base block transition-colors duration-200"
              role="menuitem"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
// Custom hook for handling dropdown timing
const useDropdownTimer = (initialState = false, delayTime = 300) => {
  const [isOpen, setIsOpen] = useState(initialState);
  const timerRef = useRef(null);

  const clearTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  const handleOpen = useCallback(() => {
    clearTimer();
    setIsOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    clearTimer();
    timerRef.current = setTimeout(() => {
      setIsOpen(false);
    }, delayTime);
  }, [delayTime]);

  // Cleanup on unmount
  useEffect(() => {
    return () => clearTimer();
  }, []);

  return [isOpen, handleOpen, handleClose];
};

export default function Navbar() {
  const { url } = usePage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, handleOpen, handleClose] = useDropdownTimer(false, 400) as [boolean, () => void, () => void];
  const [isBlogOpen, handleBlogOpen, handleBlogClose] = useDropdownTimer(false, 400) as [
    boolean,
    () => void,
    () => void
  ];

  const dropdownRef = useRef(null);
  const dropdownBlogRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Function to check if link is active
  const isActive = (path) => {
    // Handle home page
    if (path === '/' && url === '/') {
      return true;
    }
    // Handle other pages - check if the URL starts with the path
    // This ensures that subpages are also highlighted correctly
    return path !== '/' && url.startsWith(path);
  };

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 250);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (event) => {
    if (event.key === 'Escape' && isProductsOpen) {
      handleClose();
    }
  };
  const handleKeyDownBlog = (event) => {
    if (event.key === 'Escape' && isBlogOpen) {
      handleBlogClose();
    }
  };
  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        handleClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleClose]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownBlogRef.current && !dropdownBlogRef.current.contains(event.target)) {
        handleClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDownBlog);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDownBlog);
    };
  }, [handleBlogClose]);
  return (
    <nav
      className={`fixed top-0 left-0 py-2 w-full z-50 transition-all duration-200 ${
        isScrolled ? 'bg-transparent' : 'bg-transparent'
      }`}
    >
      {/* <div className="container z-50 flex h-16 items-center justify-between px-4 sticky top-0 bg-transparent"> */}
      <div className="md:container font-custom  mx-auto bg-black rounded-full flex h-16  items-center justify-between px-8">
        <button
          className="lg:hidden text-white hover:text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        {/* Left side navigation */}
        <div className=" hidden lg:flex  items-center space-x-6 gap-8">
          <MotionLink
            whileHover={{ scale: 1.1, rotate: 1 }}
            href="/"
            className={`text-md font-custom font-semibold ${isActive('/') ? 'text-primary' : 'text-white'} hover:text-primary relative after:absolute after:bottom-[-8px] after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full`}
          >
            ACCUEIL
          </MotionLink>
          <MotionLink
            whileHover={{ scale: 1.1, rotate: 1 }}
            href="/history"
            className={`text-md font-custom font-semibold ${isActive('/history') ? 'text-primary' : 'text-white'} hover:text-primary relative after:absolute after:bottom-[-8px] after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full`}
          >
            NOTRE HISTOIRE
          </MotionLink>
          <div ref={dropdownRef} className="relative" onMouseEnter={handleOpen} onMouseLeave={handleClose}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`text-md font-custom font-semibold ${url.startsWith('/products') ? 'text-primary' : 'text-white'} hover:text-primary relative after:absolute after:bottom-[-8px] after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full flex items-center`}
              aria-expanded={isProductsOpen}
              id="products-menu"
            >
              NOS PRODUITS
              <ChevronDown
                className={`ml-1 h-5 w-5 transform transition-transform duration-300 ${
                  isProductsOpen ? 'rotate-180' : ''
                }`}
              />
            </motion.button>

            <AnimatePresence>
              {isProductsOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute font-custom rounded-[80px]  top-[80px] md:-left-28 lg:-left-80 w-[90vw] max-w-[1500px] gap-2  grid grid-cols-1 md:grid-cols-5 z-50"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="products-menu"
                >
                  {featuredCategories.map((category, index) => (
                    <CategoryCard key={category.id} category={category} index={index} />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Center logo */}

        <div className="flex-1 flex justify-center">
          <MotionLink
            whileHover={{ scale: 1.1, rotate: 1 }}
            href="/"
            className={`flex items-center transition-all duration-200 ${
              isScrolled ? 'relative top-6' : 'relative top-8'
            }`}
          >
            <img
              src={macaoImage}
              alt="product macao logo"
              width={200}
              height={80}
              className={`transition-all duration-200 ${isScrolled ? 'h-28 w-auto' : 'h-32 w-auto'}`}
            />
          </MotionLink>
        </div>

        {/* Right side navigation */}
        <div className="hidden lg:flex  items-center space-x-6 gap-8">
          <div ref={dropdownBlogRef} className="relative" onMouseEnter={handleBlogOpen} onMouseLeave={handleBlogClose}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`text-md font-custom font-semibold ${url.startsWith('/blog') ? 'text-primary' : 'text-white'} hover:text-primary relative after:absolute after:bottom-[-8px] after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full flex items-center`}
              aria-expanded={isBlogOpen}
              id="products-menu"
            >
              BLOG
              <ChevronDown
                className={`ml-1 h-5 w-5 transform transition-transform duration-300 ${isBlogOpen ? 'rotate-180' : ''}`}
              />
            </motion.button>

            <AnimatePresence>
              {isBlogOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute font-custom rounded-[80px]  top-[80px] md:-left-28 lg:-left-20 w-[20vw] max-w-[1500px] grid  z-50"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="products-menu"
                >
                  {blog.map((category, index) => (
                    <BlogCard key={category.id} category={category} index={index} />
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <MotionLink
            whileHover={{ scale: 1.1, rotate: 1 }}
            href="/career"
            className={`text-md font-custom font-semibold ${isActive('/career') ? 'text-primary' : 'text-white'} hover:text-primary relative after:absolute after:bottom-[-8px] after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full`}
          >
            NOUS REJOINDRE
          </MotionLink>
          <MotionLink
            whileHover={{ scale: 1.1, rotate: 1 }}
            href="/contact"
            className={`text-md font-custom font-semibold ${isActive('/contact') ? 'text-primary' : 'text-white'} hover:text-primary relative after:absolute after:bottom-[-8px] after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full`}
          >
            CONTACT
          </MotionLink>
          <div className="flex items-center space-x-4">
            {[
              { icon: Facebook, href: 'https://www.facebook.com/MacaoPastor/' },
              { icon: Instagram, href: 'https://www.instagram.com/macaopastor/' },
              { icon: Linkedin, href: 'https://www.linkedin.com/company/pastor-macao-s-a/' },
              { icon: Youtube, href: 'https://www.youtube.com/channel/UCGoKUNUIEgPpUkV_Po_r__g' }
            ].map(({ icon: Icon, href }) => (
              <MotionTag
                key={href}
                href={href}
                target="_blank"
                className="text-white hover:text-red-600"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="h-5 w-5" />
              </MotionTag>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="lg:hidden font-custom  fixed inset-0 z-50 bg-white"
          >
            <div className="min-w-screen bg-white z-50 px-4 py-6">
              <div className="flex justify-between items-center mb-8">
                <Link href="/" className="flex items-center">
                  <img src={macaoImage} alt="product macao logo" className="h-20 w-auto" />
                </Link>
                <button className="text-gray-600 hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                  <X className="h-6 w-6" />
                </button>
              </div>

              <nav className="space-y-6">
                <Link
                  href="/"
                  className={`block text-lg font-custom  font-semibold ${isActive('/') ? 'text-primary' : 'text-gray-600'} hover:text-primary`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  ACCUEIL
                </Link>
                <Link
                  href="/history"
                  className={`block text-lg font-custom  font-semibold ${isActive('/history') ? 'text-primary' : 'text-gray-600'} hover:text-primary`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  NOTRE HISTOIRE
                </Link>

                {/* Mobile Products Menu */}
                <div className="space-y-4">
                  <button
                    className={`flex items-center justify-between w-full text-lg font-custom  font-semibold ${url.startsWith('/products') ? 'text-primary' : 'text-gray-600'} hover:text-primary`}
                    onClick={isProductsOpen ? handleClose : handleOpen}
                  >
                    NOS PRODUITS
                    <ChevronDown
                      className={`h-5 w-5 transform transition-transform duration-300 ${isProductsOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  <AnimatePresence>
                    {isProductsOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="pl-4 max-h-80 overflow-y-auto font-custom "
                      >
                        <div className="grid grid-cols-2 gap-4">
                          {featuredCategories.map((category) => (
                            <div key={category.id} className="space-y-2 ">
                              <h4 className="font-semibold text-primary text-sm sticky top-0 bg-white py-2">
                                {category.title}
                              </h4>
                              <div className="space-y-1">
                                {category.items.map((item, index) => (
                                  <Link
                                    key={index}
                                    href={`/products/${category.id}/${item.toLowerCase()}`}
                                    className="block text-gray-600 hover:text-primary text-sm py-1"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                  >
                                    {item}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href="/contact"
                  className={`block text-lg font-custom  font-semibold ${isActive('/contact') ? 'text-primary' : 'text-gray-600'} hover:text-primary`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  CONTACT
                </Link>
                <Link
                  href="/career"
                  className={`block text-lg font-custom  font-semibold ${isActive('/career') ? 'text-primary' : 'text-gray-600'} hover:text-primary`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  NOUS REJOINDRE
                </Link>

                {/* Social Media Links */}
                <div className="flex font-custom  items-center space-x-4 pt-4">
                  {[
                    { icon: Facebook, href: 'https://www.facebook.com/MacaoPastor/' },
                    { icon: Instagram, href: 'https://www.instagram.com/macaopastor/' },
                    { icon: Linkedin, href: 'https://www.linkedin.com/company/pastor-macao-s-a/' },
                    { icon: Youtube, href: 'https://www.youtube.com/channel/UCGoKUNUIEgPpUkV_Po_r__g' }
                  ].map(({ icon: Icon, href }) => (
                    <Link key={href} href={href} target="_blank" className="text-black hover:text-red-700">
                      <Icon className="h-6 w-6" />
                    </Link>
                  ))}
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
