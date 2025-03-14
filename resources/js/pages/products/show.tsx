// import { NewLayout } from '@/layouts/new-layout';
// import { Link } from '@inertiajs/react';
// import { AnimatePresence, motion } from 'framer-motion';
// import { ArrowLeft, ArrowRight, Box, ChevronLeft, Package, Weight } from 'lucide-react';
// import { useState } from 'react';

// const ProductShow = ({ product, relatedProducts }) => {
//   const [selectedImageIndex, setSelectedImageIndex] = useState(0);

//   const allImages = [
//     product.primaryImage?.optimized,
//     ...(product.secondaryImages?.map((img) => img.optimized) || [])
//   ].filter(Boolean);
//   const placeholderImage = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='24' fill='%239ca3af' text-anchor='middle' dominant-baseline='middle'%3EMACAO%3C/text%3E%3C/svg%3E`;

//   const displayImages = allImages.length > 0 ? allImages : [placeholderImage];

//   const nextImage = () => {
//     setSelectedImageIndex((prev) => (prev === displayImages.length - 1 ? 0 : prev + 1));
//   };

//   const previousImage = () => {
//     setSelectedImageIndex((prev) => (prev === 0 ? displayImages.length - 1 : prev - 1));
//   };

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.5,
//         ease: 'easeOut'
//       }
//     }
//   };

//   const imageVariants = {
//     hidden: { scale: 0.8, opacity: 0 },
//     visible: {
//       scale: 1,
//       opacity: 1,
//       transition: {
//         duration: 0.5,
//         ease: 'easeOut'
//       }
//     }
//   };

//   const categoryVariants = {
//     hidden: { opacity: 0, x: -20 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: 0.3,
//         ease: 'easeOut'
//       }
//     }
//   };

//   const specificationVariants = {
//     hidden: { opacity: 0, x: 20 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: 0.5,
//         ease: 'easeOut'
//       }
//     }
//   };
//   console.log(product);
//   return (
//     <>
//       {/* <Navbar /> */}
//       {/* <motion.div className="mt-32 bg-gray-50" initial="hidden" animate="visible" variants={containerVariants}> */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
//         <motion.button
//           onClick={() => window.history.back()}
//           className="flex items-center mb-5 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white  p-2 rounded-sm  transition-colors"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <ChevronLeft className="w-5 h-5 mr-1" />
//           <span>Retour</span>
//         </motion.button>

//         <motion.div className="bg-white rounded-sm shadow-sm overflow-hidden" variants={itemVariants}>
//           <div className="grid grid-cols-1 lg:grid-cols-2">
//             {/* Left Column - Images */}
//             <motion.div
//               className="p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-gray-200"
//               variants={imageVariants}
//             >
//               <div className="space-y-6">
//                 <div className="relative aspect-square rounded-sm overflow-hidden bg-gray-100">
//                   <AnimatePresence mode="wait">
//                     <motion.img
//                       key={selectedImageIndex}
//                       src={displayImages[selectedImageIndex]}
//                       alt={`${product.name} - View ${selectedImageIndex + 1}`}
//                       className="w-full h-full object-contain"
//                       initial={{ opacity: 0, scale: 0.8 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       exit={{ opacity: 0, scale: 0.8 }}
//                       transition={{ duration: 0.3 }}
//                     />
//                   </AnimatePresence>

//                   {displayImages.length > 1 && (
//                     <motion.div
//                       className="absolute inset-0 flex items-center justify-between p-4"
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       transition={{ delay: 0.3 }}
//                     >
//                       <motion.button
//                         onClick={previousImage}
//                         className="p-2 rounded-sm bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-colors"
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.9 }}
//                       >
//                         <ArrowLeft className="w-5 h-5" />
//                       </motion.button>
//                       <motion.button
//                         onClick={nextImage}
//                         className="p-2 rounded-sm bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-colors"
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.9 }}
//                       >
//                         <ArrowRight className="w-5 h-5" />
//                       </motion.button>
//                     </motion.div>
//                   )}
//                 </div>

//                 {displayImages.length > 1 && (
//                   <motion.div
//                     className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
//                     variants={itemVariants}
//                   >
//                     {displayImages.map((image, index) => (
//                       <motion.button
//                         key={index}
//                         onClick={() => setSelectedImageIndex(index)}
//                         className={`flex-shrink-0 w-20 h-20 rounded-sm overflow-hidden border-2 transition-colors
//                           ${selectedImageIndex === index ? 'border-red-500' : 'border-gray-200'}`}
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                       >
//                         <img
//                           src={image}
//                           alt={`${product.name} thumbnail ${index + 1}`}
//                           className="w-full h-full object-cover"
//                         />
//                       </motion.button>
//                     ))}
//                   </motion.div>
//                 )}
//               </div>
//             </motion.div>

//             {/* Right Column - Product Details */}
//             <motion.div className="p-6 lg:p-8" variants={itemVariants}>
//               <motion.div className="space-y-4 mb-6">
//                 <motion.div className="flex flex-wrap gap-2">
//                   {product.categoriesNames.map((category, index) => (
//                     <motion.span
//                       key={index}
//                       className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-sm"
//                       variants={categoryVariants}
//                       custom={index}
//                       whileHover={{ scale: 1.05 }}
//                     >
//                       {category}
//                     </motion.span>
//                   ))}
//                 </motion.div>
//                 <motion.p className="text-sm text-gray-500" variants={itemVariants}>
//                   Ref: {product.ref}
//                 </motion.p>
//               </motion.div>

//               <motion.h1 className="text-3xl font-bold text-gray-900 mb-4" variants={itemVariants}>
//                 {product.name}
//               </motion.h1>

//               <motion.div className="prose prose-gray max-w-none mb-8" variants={itemVariants}>
//                 <p>{product.description}</p>
//               </motion.div>

//               <motion.div className="mb-7" variants={itemVariants}>
//                 <motion.span
//                   className="px-3 py-1 bg-red-500 text-gray-100 text-sm rounded-sm"
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   {product.product_type.name}
//                 </motion.span>
//               </motion.div>

//               <motion.div
//                 className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-50 rounded-sm"
//                 variants={specificationVariants}
//               >
//                 {/* Weight and Packaging */}
//                 <motion.div className="space-y-4" variants={itemVariants}>
//                   <motion.div className="flex items-start gap-3" whileHover={{ x: 5 }}>
//                     <Weight className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
//                     <div>
//                       <p className="font-medium text-gray-900">Poids</p>
//                       <p className="text-gray-600">{product.weight}g</p>
//                     </div>
//                   </motion.div>
//                   <motion.div className="flex items-start gap-3" whileHover={{ x: 5 }}>
//                     <Package className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
//                     <div>
//                       <p className="font-medium text-gray-900">Emballage</p>
//                       <p className="text-gray-600">{product.packaging}</p>
//                     </div>
//                   </motion.div>
//                 </motion.div>

//                 {/* Container Info */}
//                 <motion.div className="space-y-4" variants={itemVariants}>
//                   <motion.div className="flex items-start gap-3" whileHover={{ x: 5 }}>
//                     <Box className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
//                     <div>
//                       <p className="font-medium text-gray-900">TC 20'</p>
//                       <p className="text-gray-600">{product.tc_20}</p>
//                     </div>
//                   </motion.div>
//                   <motion.div className="flex items-start gap-3" whileHover={{ x: 5 }}>
//                     <Box className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
//                     <div>
//                       <p className="font-medium text-gray-900">TC 40'</p>
//                       <p className="text-gray-600">{product.tc_40}</p>
//                     </div>
//                   </motion.div>
//                 </motion.div>
//               </motion.div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>

//       {/* Related Products Section */}
//       <motion.div
//         className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.5, duration: 0.5 }}
//       >
//         <motion.h2 className="text-2xl font-bold text-gray-900 mb-8" variants={itemVariants}>
//           Produits similaires
//         </motion.h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {relatedProducts?.map((relatedProduct, index) => (
//             <motion.div
//               key={relatedProduct.id}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 + 0.5 }}
//               whileHover={{ y: -8, transition: { duration: 0.2 } }}
//               className="bg-white rounded-sm shadow-sm overflow-hidden"
//             >
//               <div className="aspect-square overflow-hidden">
//                 <motion.img
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ duration: 0.4 }}
//                   src={relatedProduct.primaryImage?.optimized || placeholderImage}
//                   alt={relatedProduct.name}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <motion.div
//                 className="p-4"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: index * 0.1 + 0.7 }}
//               >
//                 <span className="text-sm text-gray-500 mb-1 block">{relatedProduct.ref}</span>
//                 <h3 className="font-semibold text-gray-900 mb-2 truncate">{relatedProduct.name}</h3>
//                 <motion.span
//                   className="px-2 py-1 bg-red-500 text-white text-xs rounded-sm"
//                   whileHover={{ scale: 1.05 }}
//                 >
//                   {relatedProduct.product_type?.name}
//                 </motion.span>
//                 <Link
//                   href={`/products/${relatedProduct.id}`}
//                   className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white mt-3 w-full block text-center rounded-sm  px-3 py-2 text-sm font-medium  transition-colors"
//                 >
//                   Voir plus
//                 </Link>
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//       {/* </motion.div> */}
//       {/* <Footer /> */}
//     </>
//   );
// };

// export default ProductShow;
// ProductShow.layout = (page: any) => <NewLayout children={page} />;

import iso from '@/assets/images/iso.webp';
import onssa from '@/assets/images/onssa.webp';
import { NewLayout } from '@/layouts/new-layout';
import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
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
  Weight
} from 'lucide-react';
import { useEffect, useState } from 'react';

const ProductShow = ({ product, relatedProducts }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('info');
  const [showNotification, setShowNotification] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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
      className="flex items-start gap-3 p-4 bg-[#FDFAF1] rounded-lg shadow-sm"
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
        className="min-h-screen bg-[#FDFAF1] p-8"
        initial="hidden"
        animate="visible"
        variants={shimmerAnimation}
      >
        <div className="max-w-7xl mx-auto">
          <div className="h-8 w-48 bg-gray-200 rounded mb-8" />
          <div className="bg-[#FDFAF1] rounded-lg p-8">
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

  return (
    <motion.div className="py-28 bg-white" initial="hidden" animate="visible" variants={pageTransition}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <motion.nav className="flex items-center space-x-2 mb-8" variants={childrenTransition}>
          <button onClick={() => window.history.back()} className="text-gray-600 hover:text-red-600 transition-colors">
            Retour
          </button>
          <ChevronLeft className="w-4 h-4 text-gray-400" />
          <span className="text-gray-900 font-medium">{product.name}</span>
        </motion.nav>

        {/* Main Product Section */}
        <motion.div className="bg-[#FDFAF1] rounded-lg shadow-lg overflow-hidden mb-8" variants={childrenTransition}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 bg-[#FDFAF1]">
            {/* Left Column - Product Image */}
            <motion.div className="space-y-6" variants={childrenTransition}>
              <motion.div
                className="aspect-square rounded-lg overflow-hidden bg-[#FDFAF1] relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src={displayImages[selectedImageIndex]}
                  alt={product.name}
                  className="w-full h-full object-contain"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
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
                    <Weight className="w-5 h-5 text-red-500 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Poids net</p>
                      <p className="text-gray-600">{product.weight}g</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Package className="w-5 h-5 text-red-500 mt-1" />
                    <div>
                      <p className="font-medium text-gray-900">Emballage</p>
                      <p className="text-gray-600">{product.packaging}</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Box className="w-5 h-5 text-red-500 mt-1" />
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
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8" variants={childrenTransition}>
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
        <motion.section className="mt-16 bg-[#FDFAF1] rounded-lg shadow-lg p-8" variants={childrenTransition}>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Spécifications techniques</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div className="space-y-6" variants={childrenTransition}>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Emballage</h3>
                <div className="bg-white p-4 rounded-lg">
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
                    <p className="font-semibold text-gray-900">ISO 9001:2015</p>
                    <p className="text-sm text-gray-500">Management Qualité International</p>
                  </motion.div>
                  <motion.div
                    className="p-5 flex flex-col justify-center items-center border rounded-lg text-center"
                    whileHover={{ scale: 1.02 }}
                  >
                    <img src={onssa} alt="ONSSA" className="h-20 w-20 object-contain " />
                    <p className="font-semibold text-gray-900">ONSSA</p>
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
                className="bg-[#FDFAF1] rounded-lg shadow-sm overflow-hidden"
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
                  <span className="text-sm text-gray-500 mb-1 block">{relatedProduct.ref}</span>
                  <h3 className="font-semibold text-gray-900 mb-2 truncate">{relatedProduct.name}</h3>
                  <motion.span
                    className="px-2 py-1 bg-red-500 text-white text-xs rounded-full"
                    whileHover={{ scale: 1.05 }}
                  >
                    {relatedProduct.product_type?.name}
                  </motion.span>
                  <Link
                    href={`/products/${relatedProduct.id}`}
                    className="bg-red-500 hover:bg-red-500/90 text-white mt-3 w-full block text-center rounded-full px-3 py-2 text-sm font-medium transition-colors"
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
  );
};

export default ProductShow;
ProductShow.layout = (page) => <NewLayout children={page} />;
