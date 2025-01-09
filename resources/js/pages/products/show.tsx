import { GuestLayout } from '@/layouts';
import { Link } from '@inertiajs/react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Box, ChevronLeft, Package, Weight } from 'lucide-react';
import { useState } from 'react';

const ProductShow = ({ product, relatedProducts }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const allImages = [
    product.primaryImage?.optimized,
    ...(product.secondaryImages?.map((img) => img.optimized) || [])
  ].filter(Boolean);
  const placeholderImage = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='24' fill='%239ca3af' text-anchor='middle' dominant-baseline='middle'%3EMACAO%3C/text%3E%3C/svg%3E`;

  const displayImages = allImages.length > 0 ? allImages : [placeholderImage];

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev === displayImages.length - 1 ? 0 : prev + 1));
  };

  const previousImage = () => {
    setSelectedImageIndex((prev) => (prev === 0 ? displayImages.length - 1 : prev - 1));
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    }
  };

  const specificationVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  return (
    <>
      {/* <Navbar /> */}
      <motion.div className="mt-32 bg-gray-50" initial="hidden" animate="visible" variants={containerVariants}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.button
            onClick={() => window.history.back()}
            className="flex items-center mb-5 text-gray-200 bg-red-500 p-2 rounded-lg hover:text-gray-900 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            <span>Retour</span>
          </motion.button>

          <motion.div className="bg-white rounded-xl shadow-sm overflow-hidden" variants={itemVariants}>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Column - Images */}
              <motion.div
                className="p-6 lg:p-8 border-b lg:border-b-0 lg:border-r border-gray-200"
                variants={imageVariants}
              >
                <div className="space-y-6">
                  <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={selectedImageIndex}
                        src={displayImages[selectedImageIndex]}
                        alt={`${product.name} - View ${selectedImageIndex + 1}`}
                        className="w-full h-full object-contain"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                      />
                    </AnimatePresence>

                    {displayImages.length > 1 && (
                      <motion.div
                        className="absolute inset-0 flex items-center justify-between p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <motion.button
                          onClick={previousImage}
                          className="p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ArrowLeft className="w-5 h-5" />
                        </motion.button>
                        <motion.button
                          onClick={nextImage}
                          className="p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ArrowRight className="w-5 h-5" />
                        </motion.button>
                      </motion.div>
                    )}
                  </div>

                  {displayImages.length > 1 && (
                    <motion.div
                      className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
                      variants={itemVariants}
                    >
                      {displayImages.map((image, index) => (
                        <motion.button
                          key={index}
                          onClick={() => setSelectedImageIndex(index)}
                          className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors
                          ${selectedImageIndex === index ? 'border-red-500' : 'border-gray-200'}`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <img
                            src={image}
                            alt={`${product.name} thumbnail ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </motion.button>
                      ))}
                    </motion.div>
                  )}
                </div>
              </motion.div>

              {/* Right Column - Product Details */}
              <motion.div className="p-6 lg:p-8" variants={itemVariants}>
                <motion.div className="space-y-4 mb-6">
                  <motion.div className="flex flex-wrap gap-2">
                    {product.categoriesNames.map((category, index) => (
                      <motion.span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                        variants={categoryVariants}
                        custom={index}
                        whileHover={{ scale: 1.05 }}
                      >
                        {category}
                      </motion.span>
                    ))}
                  </motion.div>
                  <motion.p className="text-sm text-gray-500" variants={itemVariants}>
                    Ref: {product.ref}
                  </motion.p>
                </motion.div>

                <motion.h1 className="text-3xl font-bold text-gray-900 mb-4" variants={itemVariants}>
                  {product.name}
                </motion.h1>

                <motion.div className="prose prose-gray max-w-none mb-8" variants={itemVariants}>
                  <p>{product.description}</p>
                </motion.div>

                <motion.div className="mb-7" variants={itemVariants}>
                  <motion.span
                    className="px-3 py-1 bg-red-500 text-gray-100 text-sm rounded-full"
                    whileHover={{ scale: 1.05 }}
                  >
                    {product.product_type.name}
                  </motion.span>
                </motion.div>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-50 rounded-lg"
                  variants={specificationVariants}
                >
                  {/* Weight and Packaging */}
                  <motion.div className="space-y-4" variants={itemVariants}>
                    <motion.div className="flex items-start gap-3" whileHover={{ x: 5 }}>
                      <Weight className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Poids</p>
                        <p className="text-gray-600">{product.weight}g</p>
                      </div>
                    </motion.div>
                    <motion.div className="flex items-start gap-3" whileHover={{ x: 5 }}>
                      <Package className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Emballage</p>
                        <p className="text-gray-600">{product.packaging}</p>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Container Info */}
                  <motion.div className="space-y-4" variants={itemVariants}>
                    <motion.div className="flex items-start gap-3" whileHover={{ x: 5 }}>
                      <Box className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">TC 20'</p>
                        <p className="text-gray-600">{product.tc_20}</p>
                      </div>
                    </motion.div>
                    <motion.div className="flex items-start gap-3" whileHover={{ x: 5 }}>
                      <Box className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">TC 40'</p>
                        <p className="text-gray-600">{product.tc_40}</p>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Related Products Section */}
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <motion.h2 className="text-2xl font-bold text-gray-900 mb-8" variants={itemVariants}>
            Produits similaires
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts?.map((relatedProduct, index) => (
              <motion.div
                key={relatedProduct.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <div className="aspect-square overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    src={relatedProduct.primaryImage?.optimized || placeholderImage}
                    alt={relatedProduct.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.div
                  className="p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.7 }}
                >
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
                    className="mt-3 w-full block text-center rounded-full bg-gray-100 px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 transition-colors"
                    // whileHover={{ scale: 1.02 }}
                    // whileTap={{ scale: 0.98 }}
                  >
                    Voir plus
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
      {/* <Footer /> */}
    </>
  );
};

export default ProductShow;
ProductShow.layout = (page: any) => <GuestLayout children={page} />;
