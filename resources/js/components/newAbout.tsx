// // export default PralineAdvertisement;
// import bgimage from '@/assets/images/Group 111.png';
// import macaoLogo from '@/assets/images/macao_logo.png'; // Adjust path as needed

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
//       <motion.div
//         className="container mx-auto px-4 py-8 "
//         initial="hidden"
//         animate="visible"
//         variants={staggerChildren}
//       >
//         <motion.h2
//           variants={fadeInUp}
//           className="text-red-500 font-medium tracking-wide uppercase mb-3 text-sm md:text-base text-center"
//         >
//           À propos de nous
//         </motion.h2>
//         <motion.h1
//           variants={fadeInUp}
//           className="text-gray-700 uppercase text-3xl md:text-5xl lg:text-6xl font-medium mb-2 text-center"
//         >
//           PASTOR MACAO
//         </motion.h1>
//         <motion.h2
//           variants={fadeInUp}
//           className="text-gray-700 uppercase text-xl md:text-3xl lg:text-4xl mb-4  text-center"
//         >
//           SAVOUREZ LA VIE !
//         </motion.h2>
//       </motion.div>
//       <div className="relative w-full h-[500px] md:h-[600px] lg:h-[650px] overflow-hidden border-tl-full">
//         {/* Background Image with Zoom Effect */}
//         <motion.div
//           className="absolute inset-0 w-full h-full"
//           initial={{ scale: 1.1 }}
//           animate={{ scale: 1 }}
//           transition={{ duration: 8, ease: 'easeOut' }}
//         >
//           <img
//             src={bgimage}
//             alt="Chocolatier preparing gourmet chocolates"
//             className="object-fill w-full h-full"
//             onLoad={() => setIsLoaded(true)}
//           />
//         </motion.div>

//         {/* Red Gradient Overlay */}
//         <motion.div
//           className="absolute inset-0"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1.5, delay: 0.5 }}
//         />

//         <div className="absolute inset-0 right-32 top-32 flex items-center justify-end px-2 opacity-90">
//           <motion.div
//             className="h-full w-[90%] md:w-[35%] lg:w-[40%] right-20 rounded-t-3xl bg-red-600 text-white p-8 md:p-10 shadow-xl overflow-hidden flex flex-col justify-center relative"
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 50 }}
//             transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
//           >
//             {/* Top to bottom gradient overlay */}
//             <div className="absolute inset-0 bg-gradient-to-b from-red-800/40 to-red-600/70 pointer-events-none"></div>

//             {/* Decorative elements */}
//             <div className="absolute top-0 right-0 w-24 h-24 bg-red-700 rounded-full opacity-20 -translate-y-12 translate-x-12"></div>
//             <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-700 rounded-full opacity-20 translate-y-16 -translate-x-16"></div>

//             <motion.div
//               className="relative z-10 flex flex-col gap-8"
//               variants={containerVariants}
//               initial="hidden"
//               animate={isLoaded ? 'visible' : 'hidden'}
//             >
//               <motion.h2 className="text-2xl md:text-3xl font-bold mb-6" variants={itemVariants}>
//                 PLAISIR GOURMAND
//               </motion.h2>

//               <motion.p className="text-sm md:text-base mb-4 leading-relaxed text-justify" variants={itemVariants}>
//                 Fondée En 1954, PASTOR MACAO Est Le Leader Marocain En Confiserie-Chocolaterie, Offrant Une Large Gamme
//                 De Produits De Qualité Pour Satisfaire Tous Les Goûts Au Meilleur Prix. La Satisfaction De Nos Clients
//                 Est Au Cœur De Nos Préoccupations.
//                 <br />
//                 Nous Vous Proposons Une Large Gamme De Produits Halal, Conçus Avec Les Meilleurs Ingrédients Répondant
//                 Aux Normes De Qualité Les Plus Strictes Pour Satisfaire Tous Les Goûts.
//               </motion.p>

//               <motion.div variants={itemVariants}>
//                 <a href="/history">
//                   <Button
//                     variant="outline"
//                     className="bg-black hover:bg-gray-800 text-white rounded-full px-6 py-2 text-sm transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
//                   >
//                     READ MORE
//                     <span className="ml-2 inline-block transform group-hover:translate-x-1 transition-transform duration-200">
//                       →
//                     </span>
//                   </Button>
//                 </a>
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         </div>
//         <motion.div
//           className="absolute top-6 right-20 z-10"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.5, duration: 0.8 }}
//         >
//           <img
//             src={macaoLogo} // Update with your actual logo path
//             width={60}
//             height={60}
//             alt="PASTOR MACAO Logo"
//           />
//         </motion.div>
//       </div>
//     </>
//   );
// }

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
          className="text-red-500 font-medium tracking-wide uppercase mb-2 text-xs sm:text-sm md:text-base text-center"
        >
          À propos de nous
        </motion.h2>
        <motion.h1
          variants={fadeInUp}
          className="text-gray-700 uppercase text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-medium mb-1 sm:mb-2 text-center"
        >
          PASTOR MACAO
        </motion.h1>
        <motion.h2
          variants={fadeInUp}
          className="text-gray-700 uppercase text-lg sm:text-xl md:text-3xl lg:text-4xl mb-3 sm:mb-4 text-center"
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
        <div className="absolute inset-0 flex items-center justify-center sm:justify-end px-4 py-8 sm:px-6 md:px-8 lg:px-12 lg:mr-52">
          <motion.div
            className="w-full max-w-xl sm:w-4/5 md:w-2/3 lg:w-4/5 bg-red-600 text-white p-6 sm:p-8 md:p-10 shadow-xl overflow-hidden rounded-2xl sm:rounded-3xl flex flex-col justify-center relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            {/* Top to bottom gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-red-800/80 to-red-600/70 pointer-events-none"></div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 bg-red-700 rounded-full opacity-20 -translate-y-8 translate-x-8"></div>
            <div className="absolute bottom-0 left-0 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 bg-red-700 rounded-full opacity-20 translate-y-10 -translate-x-10"></div>

            <motion.div
              className="relative z-10 flex flex-col gap-4 sm:gap-6 md:gap-8"
              variants={containerVariants}
              initial="hidden"
              animate={isLoaded ? 'visible' : 'hidden'}
            >
              <motion.h2
                className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4 md:mb-6"
                variants={itemVariants}
              >
                PLAISIR GOURMAND
              </motion.h2>

              <motion.p
                className="text-xs sm:text-sm md:text-base mb-4 leading-relaxed text-justify"
                variants={itemVariants}
              >
                Fondée En 1954, PASTOR MACAO Est Le Leader Marocain En Confiserie-Chocolaterie, Offrant Une Large Gamme
                De Produits De Qualité Pour Satisfaire Tous Les Goûts Au Meilleur Prix. La Satisfaction De Nos Clients
                Est Au Cœur De Nos Préoccupations.
                <br className="hidden sm:block" />
                <span className="sm:mt-2 inline-block">
                  Nous Vous Proposons Une Large Gamme De Produits Halal, Conçus Avec Les Meilleurs Ingrédients Répondant
                  Aux Normes De Qualité Les Plus Strictes Pour Satisfaire Tous Les Goûts.
                </span>
              </motion.p>

              <motion.div variants={itemVariants} className="mt-2">
                <a href="/history">
                  <Button
                    variant="outline"
                    className="bg-black hover:bg-gray-800 text-white rounded-full px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    READ MORE
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
  );
}
