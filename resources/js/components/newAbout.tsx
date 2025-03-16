// import cardBgImage from '@/assets/images/g5500-6.svg';
// import bgimage from '@/assets/images/Group 111.png';

// import { Button } from '@/components/ui/shadcn-button';
// import { motion } from 'framer-motion';
// import { useEffect, useState } from 'react';

// export default function ChocolateHeroSection() {
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     // Trigger animations after component mounts
//     setIsLoaded(true);
//   }, []);

//   // Variants for staggered animations
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3
//       }
//     }
//   };

//   const fadeInUp = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 }
//   };

//   const staggerChildren = {
//     visible: {
//       transition: {
//         staggerChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
//   };

//   return (
//     <>
//       <div className="relative overflow-hidden py-8 lg:py-12  max-w-[100rem] mx-auto">
//         {/* Logo - Repositioned for better responsiveness */}
//         <motion.div
//           className="absolute top-4 right-4 sm:top-6 sm:right-8 md:right-16 lg:right-20 z-10"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5, duration: 0.8 }}
//         >
//           {/* <img
//             src={macaoLogo}
//             className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-16 lg:h-16"
//             alt="PASTOR MACAO Logo"
//           /> */}
//         </motion.div>

//         {/* Header Text Section */}
//         <motion.div
//           className="container mx-auto px-4 py-6 md:py-8"
//           initial="hidden"
//           animate="visible"
//           variants={staggerChildren}
//         >
//           <motion.h2
//             variants={fadeInUp}
//             className="text-gray-700 font-custom font-bold  tracking-wide uppercase mb-2 text-xs sm:text-sm md:text-base text-center"
//           >
//             À propos de nous
//           </motion.h2>
//           <motion.h1
//             variants={fadeInUp}
//             className="text-red-600 font-custom font-bold uppercase text-2xl sm:text-3xl md:text-5xl lg:text-6xl mb-1 sm:mb-2 text-center"
//           >
//             PASTOR MACAO
//           </motion.h1>
//           <motion.h2
//             variants={fadeInUp}
//             className="text-red-600 font-custom font-bold uppercase text-lg sm:text-xl md:text-3xl lg:text-4xl mb-3 sm:mb-4 text-center"
//           >
//             SAVOUREZ LA VIE !
//           </motion.h2>
//         </motion.div>

//         {/* Main Hero Section with Background and Card */}
//         <div className="relative w-full min-h-[400px] sm:min-h-[450px] md:h-[600px] lg:h-[650px] overflow-hidden">
//           {/* Background Image with Zoom Effect */}
//           <motion.div
//             className="absolute inset-0 w-full h-full"
//             initial={{ scale: 1.1 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 8, ease: 'easeOut' }}
//           >
//             <img
//               src={bgimage}
//               alt="Chocolatier preparing gourmet chocolates"
//               className="object-fill w-full h-full"
//               onLoad={() => setIsLoaded(true)}
//             />
//           </motion.div>

//           {/* Red Card - Completely restructured for mobile responsiveness */}
//           <div className="absolute inset-0 flex items-center h-[924px] justify-center sm:justify-end px-4 py-8 sm:px-6 md:px-8 lg:px-12 lg:mr-52">
//             <motion.div
//               className="w-full h-[1164px] max-w-2xl  sm:w-4/5 md:w-2/3 lg:w-4/5 text-white p-6 sm:p-8 md:p-10 shadow-xl overflow-hidden rounded-2xl sm:rounded-3xl flex flex-col justify-center relative"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
//               transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
//             >
//               {/* Background Image */}
//               <img src={cardBgImage} alt="Background" className="absolute inset-0 w-[700px] h-[800px] " />
//               <motion.div
//                 className="relative z-10 h-[688px] font-custom  flex flex-col gap-4 sm:gap-6 md:gap-8"
//                 variants={containerVariants}
//                 initial="hidden"
//                 animate={isLoaded ? 'visible' : 'hidden'}
//               >
//                 <motion.h2
//                   className="text-xl sm:text-2xl md:text-4xl font-custom font-bold mb-2 sm:mb-4 md:mb-6"
//                   variants={itemVariants}
//                 >
//                   PLAISIR GOURMAND
//                 </motion.h2>

//                 <motion.p
//                   className="text-xs sm:text-sm md:text-lg mb-4 font-custom font-medium leading-relaxed text-justify"
//                   variants={itemVariants}
//                 >
//                   Fondée En 1954, PASTOR MACAO Est Le Leader Marocain En Confiserie-Chocolaterie, Offrant Une Large
//                   Gamme De Produits De Qualité Pour Satisfaire Tous Les Goûts Au Meilleur Prix. La Satisfaction De Nos
//                   Clients Est Au Cœur De Nos Préoccupations.
//                   <br className="hidden sm:block" />
//                   <span className="sm:mt-2 inline-block">
//                     Nous Vous Proposons Une Large Gamme De Produits Halal, Conçus Avec Les Meilleurs Ingrédients
//                     Répondant Aux Normes De Qualité Les Plus Strictes Pour Satisfaire Tous Les Goûts.
//                   </span>
//                 </motion.p>

//                 <motion.div variants={itemVariants} className="mt-2">
//                   <a href="/history">
//                     <Button
//                       variant="outline"
//                       className="bg-black hover:bg-gray-800 font-custom font-bold  text-white rounded-full px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm md:text-xl md:py-6 md:px-8 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
//                     >
//                       Découvrir
//                       <span className="ml-2 inline-block transform group-hover:translate-x-1 transition-transform duration-200">
//                         →
//                       </span>
//                     </Button>
//                   </a>
//                 </motion.div>
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import cardBgImage from '@/assets/images/g5500-6.svg';
import bgimage from '@/assets/images/Group 111.png';

import { Button } from '@/components/ui/shadcn-button';
import { motion, useInView, useScroll, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function ChocolateHeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardRef = useRef(null);

  const isHeadingInView = useInView(headingRef, { once: false, amount: 0.5 });
  const isCardInView = useInView(cardRef, { once: false, amount: 0.3 });

  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  });

  // Create smooth scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Transform values based on scroll
  const bgScale = useTransform(smoothProgress, [0, 1], [1, 1.1]);
  const bgOpacity = useTransform(smoothProgress, [0, 0.5, 1], [1, 0.8, 0.6]);
  const cardY = useTransform(smoothProgress, [0, 1], [0, -50]);
  const headingY = useTransform(smoothProgress, [0, 1], [0, -100]);

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
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };
  const fadeInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
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
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  // New animation for the button
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    },
    tap: {
      scale: 0.95
    }
  };

  // Text reveal animation
  const textReveal = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(8px)'
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <>
      <div ref={sectionRef} className="relative overflow-hidden py-8 lg:py-12 max-w-[100rem] mx-auto">
        {/* Logo - With rotation animation */}
        <motion.div
          className="absolute top-4 right-4 sm:top-6 sm:right-8 md:right-16 lg:right-20 z-10"
          initial={{ opacity: 0, rotate: -10 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{
            opacity: { delay: 0.5, duration: 0.8 },
            rotate: { delay: 0.7, duration: 0.5, ease: 'backOut' }
          }}
        >
          {/* Logo content */}
        </motion.div>

        {/* Header Text Section with scroll parallax */}
        <motion.div
          ref={headingRef}
          className="container mx-auto px-4 py-6 md:py-8"
          initial="hidden"
          animate={isHeadingInView ? 'visible' : 'hidden'}
          variants={staggerChildren}
          style={{ y: headingY }}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-gray-700 font-custom font-bold tracking-wide uppercase mb-2 text-xs sm:text-sm md:text-base text-center"
          >
            À propos de nous
          </motion.h2>
          {/* <motion.div className="overflow-hidden"> */}
          <motion.h1
            variants={fadeInLeft}
            className="text-red-600 font-custom font-bold uppercase text-2xl sm:text-3xl md:text-5xl lg:text-6xl mb-1 sm:mb-2 text-center"
          >
            PASTOR MACAO
          </motion.h1>
          {/* </motion.div> */}
          <motion.h2
            variants={fadeInRight}
            className="text-red-600 font-custom font-bold uppercase text-lg sm:text-xl md:text-3xl lg:text-4xl mb-3 sm:mb-4 text-center"
            whileHover={{
              scale: 1.03,
              textShadow: '0px 0px 8px rgba(255, 0, 0, 0.3)',
              transition: { duration: 0.2 }
            }}
          >
            SAVOUREZ LA VIE !
          </motion.h2>
        </motion.div>

        {/* Main Hero Section with Background and Card */}
        <div className="relative w-full min-h-[400px] sm:min-h-[450px] md:h-[600px] lg:h-[650px] overflow-hidden">
          {/* Background Image with Zoom and Parallax Effect */}
          <motion.div
            className="absolute inset-0 w-full h-full"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: 'easeOut' }}
            style={{
              scale: bgScale,
              opacity: bgOpacity
            }}
          >
            <img
              src={bgimage}
              alt="Chocolatier preparing gourmet chocolates"
              className="object-fill w-full h-full"
              onLoad={() => setIsLoaded(true)}
            />
          </motion.div>

          {/* Red Card with scroll animation */}
          <div className="absolute inset-0 flex items-center h-[924px] justify-center sm:justify-end px-4 py-8 sm:px-6 md:px-8 lg:px-12 lg:mr-52">
            <motion.div
              ref={cardRef}
              className="w-full h-[1164px] max-w-2xl sm:w-4/5 md:w-2/3 lg:w-4/5 text-white p-6 sm:p-8 md:p-10 shadow-xl overflow-hidden rounded-2xl sm:rounded-3xl flex flex-col justify-center relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: isLoaded && isCardInView ? 1 : 0,
                y: isLoaded && isCardInView ? 0 : 30,
                rotateY: isLoaded && isCardInView ? 0 : 5
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1]
              }}
              style={{ y: cardY }}
              whileHover={{
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                transition: { duration: 0.4 }
              }}
            >
              {/* Background Image with subtle animation */}
              <motion.img
                src={cardBgImage}
                alt="Background"
                className="absolute inset-0 w-[700px] h-[800px]"
                initial={{ scale: 1.1, opacity: 0.8 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 2.5 }}
                whileHover={{ scale: 1.05, transition: { duration: 1.5 } }}
              />

              <motion.div
                className="relative z-10 h-[688px] font-custom flex flex-col gap-4 sm:gap-6 md:gap-8"
                variants={containerVariants}
                initial="hidden"
                animate={isLoaded && isCardInView ? 'visible' : 'hidden'}
              >
                <motion.h2
                  className="text-xl sm:text-2xl md:text-4xl font-custom font-bold mb-2 sm:mb-4 md:mb-6"
                  variants={itemVariants}
                  whileHover={{
                    x: 5,
                    textShadow: '0px 0px 8px rgba(255, 255, 255, 0.5)',
                    transition: { duration: 0.2 }
                  }}
                >
                  PLAISIR GOURMAND
                </motion.h2>

                <motion.p
                  className="text-xs sm:text-sm md:text-lg mb-4 font-custom font-medium leading-relaxed text-justify"
                  variants={textReveal}
                >
                  Fondée En 1954, PASTOR MACAO Est Le Leader Marocain En Confiserie-Chocolaterie, Offrant Une Large
                  Gamme De Produits De Qualité Pour Satisfaire Tous Les Goûts Au Meilleur Prix. La Satisfaction De Nos
                  Clients Est Au Cœur De Nos Préoccupations.
                  <br className="hidden sm:block" />
                  <motion.span
                    className="sm:mt-2 inline-block"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                  >
                    Nous Vous Proposons Une Large Gamme De Produits Halal, Conçus Avec Les Meilleurs Ingrédients
                    Répondant Aux Normes De Qualité Les Plus Strictes Pour Satisfaire Tous Les Goûts.
                  </motion.span>
                </motion.p>

                <motion.div variants={itemVariants} className="mt-2">
                  <a href="/history">
                    <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                      <Button
                        variant="outline"
                        className="bg-black hover:bg-gray-800 font-custom font-bold text-white rounded-full px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm md:text-xl md:py-6 md:px-8 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      >
                        Découvrir
                        <motion.span
                          className="ml-2 inline-block"
                          animate={{ x: [0, 5, 0] }}
                          transition={{
                            repeat: Infinity,
                            repeatType: 'reverse',
                            duration: 1.5,
                            ease: 'easeInOut'
                          }}
                        >
                          →
                        </motion.span>
                      </Button>
                    </motion.div>
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
