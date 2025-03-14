import cardBgImage from '@/assets/images/g5500-6.svg';
import bgimage from '@/assets/images/Group 111.png';
import macaoLogo from '@/assets/images/macao_logo.png'; // Adjust path as needed

import { Button } from '@/components/ui/shadcn-button';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ChocolateHeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setIsLoaded(true);
  }, []);

  // Variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <>
      <div className="relative overflow-hidden">
        {/* Logo - Repositioned for better responsiveness */}
        <motion.div
          className="absolute top-4 right-4 sm:top-6 sm:right-8 md:right-16 lg:right-20 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <img
            src={macaoLogo}
            className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-16 lg:h-16"
            alt="PASTOR MACAO Logo"
          />
        </motion.div>

        {/* Header Text Section */}
        <motion.div
          className="container mx-auto px-4 py-6 md:py-8"
          initial="hidden"
          animate="visible"
          variants={staggerChildren}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-red-500 font-custom font-bold  tracking-wide uppercase mb-2 text-xs sm:text-sm md:text-base text-center"
          >
            À propos de nous
          </motion.h2>
          <motion.h1
            variants={fadeInUp}
            className="text-gray-700 font-custom font-bold uppercase text-2xl sm:text-3xl md:text-5xl lg:text-6xl mb-1 sm:mb-2 text-center"
          >
            PASTOR MACAO
          </motion.h1>
          <motion.h2
            variants={fadeInUp}
            className="text-gray-700 font-custom font-bold uppercase text-lg sm:text-xl md:text-3xl lg:text-4xl mb-3 sm:mb-4 text-center"
          >
            SAVOUREZ LA VIE !
          </motion.h2>
        </motion.div>

        {/* Main Hero Section with Background and Card */}
        <div className="relative w-full min-h-[400px] sm:min-h-[450px] md:h-[600px] lg:h-[650px] overflow-hidden">
          {/* Background Image with Zoom Effect */}
          <motion.div
            className="absolute inset-0 w-full h-full"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: 'easeOut' }}
          >
            <img
              src={bgimage}
              alt="Chocolatier preparing gourmet chocolates"
              className="object-cover w-full h-full"
              onLoad={() => setIsLoaded(true)}
            />
          </motion.div>

          {/* Red Card - Completely restructured for mobile responsiveness */}
          <div className="absolute inset-0 flex items-center h-[924px] justify-center sm:justify-end px-4 py-8 sm:px-6 md:px-8 lg:px-12 lg:mr-52">
            <motion.div
              className="w-full h-[1164px] max-w-2xl  sm:w-4/5 md:w-2/3 lg:w-4/5 text-white p-6 sm:p-8 md:p-10 shadow-xl overflow-hidden rounded-2xl sm:rounded-3xl flex flex-col justify-center relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            >
              {/* Background Image */}
              <img src={cardBgImage} alt="Background" className="absolute inset-0 w-[700px] h-[800px] " />
              <motion.div
                className="relative z-10 h-[688px] font-custom  flex flex-col gap-4 sm:gap-6 md:gap-8"
                variants={containerVariants}
                initial="hidden"
                animate={isLoaded ? 'visible' : 'hidden'}
              >
                <motion.h2
                  className="text-xl sm:text-2xl md:text-4xl font-custom font-bold mb-2 sm:mb-4 md:mb-6"
                  variants={itemVariants}
                >
                  PLAISIR GOURMAND
                </motion.h2>

                <motion.p
                  className="text-xs sm:text-sm md:text-lg mb-4 font-custom font-medium leading-relaxed text-justify"
                  variants={itemVariants}
                >
                  Fondée En 1954, PASTOR MACAO Est Le Leader Marocain En Confiserie-Chocolaterie, Offrant Une Large
                  Gamme De Produits De Qualité Pour Satisfaire Tous Les Goûts Au Meilleur Prix. La Satisfaction De Nos
                  Clients Est Au Cœur De Nos Préoccupations.
                  <br className="hidden sm:block" />
                  <span className="sm:mt-2 inline-block">
                    Nous Vous Proposons Une Large Gamme De Produits Halal, Conçus Avec Les Meilleurs Ingrédients
                    Répondant Aux Normes De Qualité Les Plus Strictes Pour Satisfaire Tous Les Goûts.
                  </span>
                </motion.p>

                <motion.div variants={itemVariants} className="mt-2">
                  <a href="/history">
                    <Button
                      variant="outline"
                      className="bg-black hover:bg-gray-800 font-custom font-bold  text-white rounded-full px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm md:text-xl md:py-6 md:px-8 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      Découvrir
                      <span className="ml-2 inline-block transform group-hover:translate-x-1 transition-transform duration-200">
                        →
                      </span>
                    </Button>
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* <img src={cardBgImage} alt="Background" className=" inset-0 w-[400px] h-[400px] " /> */}
    </>
  );
}
