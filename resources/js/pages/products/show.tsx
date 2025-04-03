import candies from '@/assets/images/candies.webp';
import candy from '@/assets/images/candy.webp';
import choco from '@/assets/images/chocolate.webp';
import iso from '@/assets/images/iso.webp';
import leonardo from '@/assets/images/Leonardo.webp';
import onssa from '@/assets/images/onssa.webp';
import wafer from '@/assets/images/wafer.webp';
import { NewLayout } from '@/layouts/new-layout';
import { Link } from '@inertiajs/react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Box,
  ChevronLeft,
  Clock,
  Facebook,
  Instagram,
  Package,
  Share2,
  Shield,
  Truck,
  Twitter,
  Weight,
  X
} from 'lucide-react';
import { useEffect, useState } from 'react';

const ProductShow = ({ product, relatedProducts, parentCategory }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('info');
  const [showNotification, setShowNotification] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setPosition({ x, y });
  };

  const openLightbox = () => {
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  useEffect(() => {
    // Simulate loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const placeholderImage = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='24' fill='%239ca3af' text-anchor='middle' dominant-baseline='middle'%3EMACAO%3C/text%3E%3C/svg%3E`;
  const displayImages = [placeholderImage];

  // Animation variants
  const pageTransition = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        when: 'beforeChildren',
        staggerChildren: 0.2
      }
    }
  };

  const childrenTransition = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };
  const childrenTransition2 = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  const shimmerAnimation = {
    hidden: { backgroundPosition: '-200% 0' },
    visible: {
      backgroundPosition: '200% 0',
      transition: {
        repeat: Infinity,
        duration: 1.5,
        ease: 'linear'
      }
    }
  };

  const handleShare = (platform) => {
    // Implement sharing logic here
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  const ProductFeature = ({ icon: Icon, title, description }) => (
    <motion.div
      className="flex items-start gap-3 p-4 bg-[#fffcf488] rounded-2xl shadow-sm"
      variants={childrenTransition}
      whileHover={{ y: -2, transition: { duration: 0.2 } }}
    >
      <div className="rounded-full bg-red-100 p-2">
        <Icon className="w-5 h-5 text-red-600" />
      </div>
      <div>
        <h3 className="font-medium text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </motion.div>
  );

  if (isLoading) {
    return (
      <motion.div
        className="min-h-screen bg-[#fffcf488] p-8"
        initial="hidden"
        animate="visible"
        variants={shimmerAnimation}
      >
        <div className="max-w-7xl mx-auto">
          <div className="h-8 w-48 bg-gray-200 rounded mb-8" />
          <div className="bg-[#fffcf488] rounded-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="aspect-square bg-gray-100 rounded-lg animate-pulse" />
              <div className="space-y-4">
                <div className="h-8 w-3/4 bg-gray-200 rounded" />
                <div className="h-4 w-1/4 bg-gray-200 rounded" />
                <div className="space-y-2">
                  <div className="h-4 w-full bg-gray-200 rounded" />
                  <div className="h-4 w-5/6 bg-gray-200 rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
  const categoryContent = {
    Confiserie: {
      title: 'DÉLICES SUCRÉS MACAO',
      subtitle: 'Une gamme complète de confiseries artisanales',
      bgColor: 'from-red-600 to-red-700',
      bgImage: candies,
      overlayOpacity: 'opacity-80'
    },
    Chocolat: {
      title: 'CHOCOLAT EXQUIS',
      subtitle: 'Des créations chocolatées pour tous les plaisirs.',
      bgColor: 'from-amber-800 to-amber-900',
      bgImage: choco,
      overlayOpacity: '50'
    },
    Gaufrettes: {
      title: 'GAUFRETTES CROUSTILLANTES',
      subtitle: 'La légèreté et le croustillant à la perfection',
      bgColor: 'from-orange-400 to-orange-600',
      bgImage: wafer,
      overlayOpacity: '40'
    },
    'Produits pâtissiers': {
      title: 'PÂTISSERIE RAFFINÉE',
      subtitle: "L'excellence de la pâtisserie traditionnelle",
      bgColor: 'from-rose-600 to-rose-800',
      bgImage: leonardo,
      overlayOpacity: '45'
    },
    'Fêtes et événements': {
      title: 'CÉLÉBREZ VOS MOMENTS',
      subtitle: 'Des créations spéciales pour vos occasions',
      bgColor: 'from-purple-500 to-purple-700',
      bgImage: candy,
      overlayOpacity: '55'
    }
  };
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <>
      <motion.div
        className={`relative overflow-hidden bg-gradient-to-r ${
          categoryContent[parentCategory.name]?.bgColor || 'from-red-600 to-red-700'
        }`}
      >
        <div className="absolute inset-0">
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${categoryContent[parentCategory.name]?.bgImage || '/placeholder.svg'})`,
              opacity: '0.20'
            }}
          />
        </div>

        <div className="relative mx-auto px-4 ">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            className="flex max-h-[280px] items-center justify-center pt-48 pb-20"
          >
            <div className="text-center">
              <motion.h1 variants={fadeInUp} className="mb-6 text-4xl font-bold text-white md:text-6xl">
                {categoryContent[parentCategory.name]?.title || 'MACAO CÉLÈBRE VOS FÊTES'}
              </motion.h1>
              <motion.p variants={fadeInUp} className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
                {categoryContent[parentCategory.name]?.subtitle || 'Découvrez notre collection'}
              </motion.p>
            </div>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        className="pb-16 pt-0 bg-gradient-to-b from-[#f8f4f0] to-[#f0e9e4]"
        initial="hidden"
        animate="visible"
        variants={pageTransition}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <motion.nav className="flex items-center space-x-2 mb-8" variants={childrenTransition}>
            <button
              onClick={() => window.history.back()}
              className="text-gray-600 hover:text-red-600 transition-colors"
            >
              Retour
            </button>
            <ChevronLeft className="w-4 h-4 text-gray-400" />
            <span className="text-gray-900 font-medium">{product.name}</span>
          </motion.nav>

          {/* Main Product Section */}
          <motion.div
            className="bg-[#fffcf488] rounded-2xl shadow-lg overflow-hidden mb-8"
            variants={childrenTransition}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 bg-[#fffcf488]">
              {/* Left Column - Product Image */}
              <motion.div className="space-y-6" variants={childrenTransition}>
                {/* <motion.div
                  className="aspect-square rounded-lg overflow-hidden bg-[#fffcf488] relative group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img
                    src={product.primaryImage.optimized || displayImages[selectedImageIndex]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div> */}
                {/* Original Image Component */}
                {/* <motion.div
                  className="aspect-square rounded-lg overflow-hidden bg-[#fffcf488] relative group cursor-zoom-in"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  onClick={openLightbox}
                >
                  <motion.img
                    src="https://img.freepik.com/free-photo/assorted-biscuits-candies-cup-tea-gray-surface_114579-20940.jpg?t=st=1742916259~exp=1742919859~hmac=c816c97a77f55f378199139df830ef66b22e1f6616106b5d6cbbf520057b74da&w=826"
                    alt={product.name}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <motion.div
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                      initial={{ scale: 0.8 }}
                      whileHover={{ scale: 1.1 }}
                    ></motion.div>
                  </div>
                </motion.div> */}
                <motion.div
                  className="aspect-square rounded-lg overflow-hidden bg-[#fffcf488] relative group cursor-zoom-in"
                  onClick={openLightbox}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  onMouseMove={handleMouseMove}
                >
                  <motion.img
                    src={product.primaryImage.optimized || displayImages[selectedImageIndex]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    style={{
                      transformOrigin: `${position.x}% ${position.y}%`
                    }}
                    // Use direct animate prop instead of variants to isolate this animation
                    animate={hovered ? { scale: 2 } : { scale: 1 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  />
                  <div
                    onClick={(e) => {
                      closeLightbox();
                    }}
                    className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center"
                  />
                </motion.div>

                {/* Lightbox Overlay */}
                <AnimatePresence>
                  {isLightboxOpen && (
                    <motion.div
                      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className="relative max-w-[90vw] max-h-[90vh] w-auto h-auto"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <button
                          onClick={closeLightbox}
                          className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
                        >
                          <X size={24} />
                        </button>

                        <img
                          src={product.primaryImage.optimized || displayImages[selectedImageIndex]}
                          alt={product.name}
                          className="max-w-full max-h-full object-contain rounded-lg"
                        />
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Right Column - Product Details */}
              <motion.div className="space-y-6" variants={childrenTransition}>
                {/* Categories */}
                <motion.div className="flex flex-wrap gap-2">
                  {product.categoriesNames.map((category, index) => (
                    <motion.span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                      whileHover={{ scale: 1.05, backgroundColor: '#FEE2E2' }}
                    >
                      {category}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Description */}
                <motion.div className="prose prose-gray max-w-none" variants={childrenTransition}>
                  <p>{product.description}</p>
                </motion.div>

                <motion.div variants={childrenTransition}>
                  <motion.span
                    className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-red-500 text-white"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {product.product_type.name}
                  </motion.span>
                </motion.div>

                {/* Specifications */}
                <motion.div className="grid grid-cols-2 gap-4" variants={childrenTransition}>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Weight className="w-6 h-6 md:w-8 md:h-8 text-red-500 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Poids net</p>
                        <p className="text-gray-600">{product.weight}g</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Package className="w-6 h-6 md:w-8 md:h-8 text-red-500 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Emballage</p>
                        <p className="text-gray-600">{product.packaging}</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Box className="w-6 h-6 md:w-8 md:h-8 text-red-500 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">TC20' / TC40'</p>
                        <p className="text-gray-600">
                          {product.tc_20} / {product.tc_40}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Social Share */}
                <motion.div className="pt-6 border-t">
                  <p className="text-sm font-medium text-gray-900 mb-4">Partager sur</p>
                  <motion.div className="flex space-x-4">
                    {[
                      { Icon: Facebook, color: 'bg-blue-600', platform: 'facebook' },
                      { Icon: Twitter, color: 'bg-sky-500', platform: 'twitter' },
                      { Icon: Instagram, color: 'bg-pink-600', platform: 'instagram' },
                      { Icon: Share2, color: 'bg-gray-600', platform: 'copy' }
                    ].map(({ Icon, color, platform }) => (
                      <motion.button
                        key={platform}
                        onClick={() => handleShare(platform)}
                        className={`p-2 rounded-full ${color} text-white`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.button>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Features Section */}
          {/* <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8" variants={childrenTransition}>
            <ProductFeature
              icon={Shield}
              title="Qualité garantie"
              description="Produits certifiés aux normes internationales"
            />
            <ProductFeature icon={Truck} title="Livraison mondiale" description="Expédition rapide et sécurisée" />
            <ProductFeature icon={Clock} title="Support 24/7" description="Une équipe à votre service" />
          </motion.div> */}
          {/* Features Section - Now with proper layout-level animation */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
            variants={childrenTransition}
            initial="visible" // Set to visible initially to prevent re-animation
            animate="visible" // Keep it visible
          >
            <ProductFeature
              icon={Shield}
              title="Qualité garantie"
              description="Produits certifiés aux normes internationales"
            />
            <ProductFeature icon={Truck} title="Livraison mondiale" description="Expédition rapide et sécurisée" />
            <ProductFeature icon={Clock} title="Support 24/7" description="Une équipe à votre service" />
          </motion.div>

          {/* Product Type Badge */}

          {/* Technical Specifications */}
          <motion.section className="mt-16 bg-[#fffcf488] rounded-lg shadow-lg p-8" variants={childrenTransition}>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Spécifications techniques</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div className="space-y-6" variants={childrenTransition}>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Emballage</h3>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <dl className="space-y-3">
                      <div className="flex justify-between">
                        <dt className="text-gray-600">Unité de vente:</dt>
                        <dd className="font-medium text-gray-900">{product.packaging}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-gray-600">Poids net:</dt>
                        <dd className="font-medium text-gray-900">{product.weight}g</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-gray-600">TC 20':</dt>
                        <dd className="font-medium text-gray-900">{product.tc_20}</dd>
                      </div>
                      <div className="flex justify-between">
                        <dt className="text-gray-600">TC 40':</dt>
                        <dd className="font-medium text-gray-900">{product.tc_40}</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              </motion.div>

              <motion.div className="space-y-6" variants={childrenTransition}>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Certifications</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div
                      className="p-5 flex flex-col justify-center items-center border rounded-lg text-center"
                      whileHover={{ scale: 1.02 }}
                    >
                      <img src={iso} alt="ISO 9001:2015" className="h-20 w-20 object-contain " />
                      {/* <p className="font-semibold text-gray-900">ISO 9001:2015</p> */}
                      <p className="text-sm text-gray-500">Management Qualité International</p>
                    </motion.div>
                    <motion.div
                      className="p-5 flex flex-col justify-center items-center border rounded-lg text-center"
                      whileHover={{ scale: 1.02 }}
                    >
                      <img src={onssa} alt="ONSSA" className="h-20 w-20 object-contain " />
                      {/* <p className="font-semibold text-gray-900">ONSSA</p> */}
                      <p className="text-sm text-gray-500">Sécurité Alimentaire Maroc</p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* Related Products */}
          <motion.section className="mt-16" variants={childrenTransition}>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Produits similaires</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts?.map((relatedProduct, index) => (
                <motion.div
                  key={relatedProduct.id}
                  className="bg-[#fffcf488] rounded-lg shadow-sm overflow-hidden"
                  variants={childrenTransition}
                  whileHover={{ y: -8 }}
                >
                  <div className="aspect-square overflow-hidden">
                    <motion.img
                      src={relatedProduct.primaryImage?.optimized || placeholderImage}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                    />
                  </div>
                  <div className="p-4">
                    {/* <span className="text-sm text-gray-500 mb-1 block">{relatedProduct.ref}</span> */}
                    <h3 className="font-semibold text-gray-900 mb-2 truncate">{relatedProduct.name}</h3>
                    {/* <motion.span
                      className="px-2 py-1 bg-red-500 text-white text-xs rounded-full"
                      whileHover={{ scale: 1.05 }}
                    >
                      {relatedProduct.product_type?.name}
                    </motion.span> */}
                    <Link
                      href={`/products/${relatedProduct.id}`}
                      className="bg-red-700 hover:bg-red-700/90 text-white mt-3 w-full block text-center rounded-l-full rounded-br-full px-3 py-2 text-sm font-medium transition-colors"
                    >
                      Voir plus
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </motion.div>
    </>
  );
};

export default ProductShow;
ProductShow.layout = (page) => <NewLayout children={page} />;
