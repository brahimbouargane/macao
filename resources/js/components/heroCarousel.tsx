// import piple from '@/assets/images/Papil.brown-blur.webp';
// import piple2 from '@/assets/images/Papil.N.webp';
// import piple4 from '@/assets/images/Papil.Or.webp';
// import piple3 from '@/assets/images/Papil.red.webp';

// import choko2 from '@/assets/images/black-cookies.webp';
// import bluebereies from '@/assets/images/blueberies.webp';
// import Carousel1 from '@/assets/images/carousel-1.webp';
// import Carousel2 from '@/assets/images/carousel-2.webp';
// import Carousel3 from '@/assets/images/carousel-3.webp';
// import cherry from '@/assets/images/cherrs.webp';
// import cokies from '@/assets/images/cokies.webp';
// import cupcake from '@/assets/images/cupcake.webp';
// import orange from '@/assets/images/orange.webp';
// import cake from '@/assets/images/small-cake.webp';
// import strawberry from '@/assets/images/strawbery.webp';
// import '../../css/app.css';

// import { AnimatePresence, motion } from 'framer-motion';
// import { memo, useCallback, useEffect, useMemo, useState } from 'react';
// import { Link } from './ui';

// const FloatingImage = memo(({ position, index, active, image, getPosition, getImageSize, getRotateValues }: any) => (
//   <motion.div
//     key={`${active}-${position}`}
//     className={`absolute ${getPosition(active, position)} ${getImageSize(active, position)}`}
//     initial={{ opacity: 0, scale: 0.5 }}
//     animate={{
//       opacity: 1,
//       scale: 1,
//       y: ['-10px', '10px'],
//       rotate: getRotateValues(active, position),
//       transition: {
//         opacity: { duration: 1.2, ease: 'easeOut' },
//         scale: { duration: 1.2, ease: 'easeOut' },
//         y: {
//           duration: 3,
//           repeat: Infinity,
//           repeatType: 'reverse',
//           ease: 'easeInOut'
//         }
//       }
//     }}
//     exit={{ opacity: 0, scale: 0.5, transition: { duration: 1 } }}
//   >
//     <img
//       src={image}
//       alt="Floating product"
//       className="w-full h-full object-contain rounded-sm"
//       style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' }}
//       loading="lazy"
//     />
//   </motion.div>
// ));

// const MainImage = memo(({ image, name }: any) => (
//   <motion.div
//     initial={{
//       opacity: 0,
//       scale: 0.8,
//       rotateY: 180,
//       transformStyle: 'preserve-3d'
//     }}
//     animate={{
//       opacity: 1,
//       scale: 1,
//       rotateY: 360
//     }}
//     exit={{
//       opacity: 0,
//       scale: 0.8,
//       rotateY: 0
//     }}
//     transition={{
//       duration: 1.2,
//       ease: [0.4, 0, 0.2, 1]
//     }}
//     className="w-full h-full"
//   >
//     <motion.div
//       initial={{ clipPath: 'circle(0% at 50% 50%)' }}
//       animate={{ clipPath: 'circle(100% at 50% 50%)' }}
//       exit={{ clipPath: 'circle(0% at 50% 50%)' }}
//       transition={{
//         duration: 1.2,
//         ease: [0.4, 0, 0.2, 1]
//       }}
//       className="w-full h-full"
//     >
//       <img src={image || '/placeholder.svg'} alt={name} className="w-full h-full object-contain" loading="lazy" />
//     </motion.div>
//   </motion.div>
// ));

// const NavigationButtons = memo(({ onPrev, onNext, onHoverChange }: any) => (
//   <div
//     className="absolute bottom-2 md:bottom-8 left-0 right-0 flex justify-center gap-4 z-50"
//     onMouseEnter={() => onHoverChange(true)}
//     onMouseLeave={() => onHoverChange(false)}
//   >
//     <button
//       onClick={onPrev}
//       className="h-12 w-12 rounded-sm border border-white/60 bg-white/30 text-xl text-white transition-colors hover:bg-white/40"
//       aria-label="Previous slide"
//     >
//       ‹
//     </button>
//     <button
//       onClick={onNext}
//       className="h-12 w-12 rounded-sm border border-white/60 bg-white/30 text-xl text-white transition-colors hover:bg-white/40"
//       aria-label="Next slide"
//     >
//       ›
//     </button>
//   </div>
// ));

// const HeroSlide = () => {
//   const [rotate, setRotate] = useState(0);
//   const [active, setActive] = useState(0);
//   const [direction, setDirection] = useState('left');
//   const [isHovering, setIsHovering] = useState(false);

//   const items = useMemo(
//     () => [
//       {
//         id: 1,
//         image: Carousel1,
//         name: 'pâtisserie',
//         description:
//           'Délicieux gâteaux et pâtisseries faits avec soin pour toutes les occasions. Découvrez des créations artisanales qui allient tradition et raffinement pour régaler vos papilles.',
//         gradient:
//           'linear-gradient(135deg, rgba(139, 30, 63, 0.85) 0%, rgba(178, 56, 80, 0.75) 50%, rgba(232, 223, 224, 0.65) 100%)',
//         textGradient: 'linear-gradient(135deg, #E8DFE0 0%, #FFFFFF 100%)',
//         floatingImages: [cake, cokies, choko2, cupcake],
//         page: 'products/Produits%20pâtissiers/chocolats%20pâtissiers'
//       },
//       {
//         id: 2,
//         image: Carousel3,
//         name: 'CONFISERIE',
//         description:
//           'Douceurs sucrées comme caramels, nougats et bonbons colorés. Une gamme variée de petits plaisirs pour satisfaire toutes vos envies gourmandes.',
//         gradient: 'linear-gradient(135deg, #D4AF37 0%, #D4AF37 50%, #D4AF37 100%)',
//         textGradient: 'linear-gradient(135deg, #E8DFE0 0%, #FFFFFF 100%)',
//         floatingImages: [strawberry, cherry, orange, bluebereies],
//         page: 'products/confiserie/sucettes'
//       },
//       {
//         id: 3,
//         image: Carousel2,
//         name: 'chocolat',
//         description:
//           'Chocolats gourmands, des truffes aux tablettes, fabriqués avec du cacao premium. Laissez-vous tenter par des saveurs intenses et une texture fondante irrésistible.',
//         gradient:
//           'linear-gradient(135deg, rgba(62, 39, 35, 0.85) 0%, rgba(93, 64, 55, 0.75) 50%, rgba(141, 110, 99, 0.65) 100%)',
//         textGradient: 'linear-gradient(135deg, #D7CCC8 0%, #FFFFFF 100%)',
//         floatingImages: [piple, piple2, piple3, piple4],
//         page: 'products/chocolat/pâtes%20à%20tartiner'
//       }
//     ],
//     []
//   );

//   const countItem = items.length;
//   const rotateAdd = 360 / countItem;

//   //   const slideVariants = useMemo(
//   //     () => ({
//   //       enter: (direction) => ({
//   //         y: direction === 'right' ? -50 : 50,
//   //         opacity: 0
//   //       }),
//   //       center: {
//   //         zIndex: 1,
//   //         y: 0,
//   //         opacity: 1
//   //       },
//   //       exit: (direction) => ({
//   //         zIndex: 0,
//   //         y: direction === 'right' ? 50 : -50,
//   //         opacity: 0
//   //       })
//   //     }),
//   //     []
//   //   );
//   const slideVariants = useMemo(
//     () => ({
//       enter: (direction) => ({
//         y: direction === 'right' ? -50 : 50,
//         opacity: 0
//       }),
//       center: {
//         zIndex: 1,
//         y: 0,
//         opacity: 1
//       },
//       exit: (direction) => ({
//         zIndex: 0,
//         y: direction === 'right' ? 50 : -50,
//         opacity: 0
//       })
//     }),
//     []
//   );
//   //   const getRotateValues = (active, position) => {
//   //     // Base sizes for each active state
//   //     const rotate = {
//   //       0: {
//   //         // First slide
//   //         'top-left': -25,
//   //         'top-right': 30,
//   //         'bottom-left': 120,
//   //         'bottom-right': 20
//   //       },
//   //       1: {
//   //         // Second slide
//   //         'top-left': -25,
//   //         'top-right': 30,
//   //         'bottom-left': 10,
//   //         'bottom-right': 20
//   //       },
//   //       2: {
//   //         // Third slide
//   //         'top-left': -25,
//   //         'top-right': 60,
//   //         'bottom-left': -120,
//   //         'bottom-right': -20
//   //       }
//   //     };

//   //     return rotate[active]?.[position] || 0; // Default size
//   //   };
//   const getRotateValues = useCallback((active, position) => {
//     const rotate = {
//       0: {
//         'top-left': -25,
//         'top-right': 30,
//         'bottom-left': 120,
//         'bottom-right': 20
//       },
//       1: {
//         'top-left': -25,
//         'top-right': 30,
//         'bottom-left': 10,
//         'bottom-right': 20
//       },
//       2: {
//         'top-left': -25,
//         'top-right': 60,
//         'bottom-left': -120,
//         'bottom-right': -20
//       }
//     };
//     return rotate[active]?.[position] || 0;
//   }, []);
//   const getImageSize = useCallback((active, position) => {
//     // Base sizes for each active state
//     const sizes = {
//       0: {
//         // First slide
//         'top-left': ' w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44',
//         'top-right': 'w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44',
//         'bottom-left': ' w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40',
//         'bottom-right': ' w-28 h-28 md:w-36 md:h-36 lg:w-44 lg:h-44'
//       },
//       1: {
//         // Second slide
//         'top-left': 'w-32 h-32 md:w-36 md:h-36 lg:w-44 lg:h-44',
//         'top-right': 'w-36 h-36 md:w-36 md:h-36 lg:w-44 lg:h-44',
//         'bottom-left': ' w-32 h-32 md:w-36 md:h-36 lg:w-44 lg:h-44',
//         'bottom-right': ' w-24 h-24 md:w-36 md:h-36 lg:w-36 lg:h-36'
//       },
//       2: {
//         // Third slide
//         'top-left': 'w-32 h-32 md:w-36 md:h-36 lg:w-44 lg:h-44',
//         'top-right': 'w-32 h-32 md:w-36 md:h-36 lg:w-52 lg:h-52',
//         'bottom-left': ' w-32 h-32 md:w-36 md:h-36 lg:w-44 lg:h-44',
//         'bottom-right': ' w-32 h-32 md:w-36 md:h-36 lg:w-44 lg:h-44'
//       }
//     };

//     return sizes[active]?.[position] || 'w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48'; // Default size
//   }, []);

//   const getPosition = useCallback((active, position) => {
//     // Custom positions for each active state
//     const positions = {
//       0: {
//         'top-left': '-left-4 -top-20 md:-left-12 md:-top-16',
//         'top-right': '-right-2 -top-16 md:-right-8 md:-top-20',
//         'bottom-left': '-left-0 -bottom-10 md:-left-0 md:-bottom-20',
//         'bottom-right': '-right-0 -bottom-10 md:-right-4 md:-bottom-20'
//       },
//       1: {
//         'top-left': '-left-16 -top-20 md:-left-20 md:-top-24',
//         'top-right': '-right-16 -top-20 md:-right-20 md:-top-24',
//         'bottom-left': '-left-16 -bottom-16 md:-left-20 md:-bottom-16',
//         'bottom-right': '-right-16 -bottom-16 md:-right-20 md:-bottom-20'
//       },
//       2: {
//         'top-left': '-left-16 -top-20 md:-left-24 md:-top-28',
//         'top-right': '-right-16 -top-20 md:-right-24 md:-top-28',
//         'bottom-left': '-left-16 -bottom-16 md:-left-16 md:-bottom-20',
//         'bottom-right': '-right-16 -bottom-16 md:-right-24 md:-bottom-20'
//       }
//     };

//     return positions[active]?.[position] || '-left-16 -top-20'; // Default position
//   }, []);

//   const getImageContainerClass = useCallback((itemId) => {
//     if (itemId === 1) {
//       return 'w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px]';
//     }
//     return 'w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px]';
//   }, []);
//   // Memoized navigation functions
//   const nextSlider = useCallback(() => {
//     setDirection('left');
//     setActive((prev) => (prev + 1) % items.length);
//     setRotate((prev) => prev + rotateAdd);
//   }, [items.length, rotateAdd]);

//   const prevSlider = useCallback(() => {
//     setDirection('right');
//     setActive((prev) => (prev - 1 + items.length) % items.length);
//     setRotate((prev) => prev - rotateAdd);
//   }, [items.length, rotateAdd]);

//   // Handle keyboard navigation
//   useEffect(() => {
//     const handleKeyPress = (e) => {
//       if (e.key === 'ArrowLeft') prevSlider();
//       if (e.key === 'ArrowRight') nextSlider();
//     };

//     window.addEventListener('keydown', handleKeyPress);
//     return () => window.removeEventListener('keydown', handleKeyPress);
//   }, [nextSlider, prevSlider]);

//   // Auto-rotation effect
//   useEffect(() => {
//     if (!isHovering) {
//       const interval = setInterval(nextSlider, 5000);
//       return () => clearInterval(interval);
//     }
//   }, [nextSlider, isHovering]);
//   // Normalize rotation angle
//   useEffect(() => {
//     const normalizedRotation = ((rotate % 360) + 360) % 360;
//     const activeIndex = Math.round(normalizedRotation / rotateAdd) % countItem;
//     setActive((countItem - activeIndex) % countItem);
//   }, [rotate, countItem, rotateAdd]);
//   return (
//     <div className="relative h-screen max-w-full overflow-hidden">
//       <div
//         className="absolute inset-0 transition-colors duration-700"
//         style={{
//           background: items[active].gradient
//         }}
//       />
//       <AnimatePresence initial={false} custom={direction} mode="sync">
//         <motion.div
//           key={active}
//           custom={direction}
//           variants={slideVariants}
//           initial="enter"
//           animate="center"
//           exit="exit"
//           transition={{
//             y: { type: 'tween', duration: 0.5 },
//             opacity: { duration: 0.3 }
//           }}
//           className="absolute inset-0"
//           //   style={{
//           //     background: items[active].gradient,
//           //     transformStyle: 'preserve-3d'
//           //   }}
//         >
//           <div className="relative h-[calc(100vh-6rem)] mt-24">
//             {' '}
//             <motion.div
//               initial={{ opacity: 0, scale: 0.8 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{
//                 duration: 1.2,
//                 ease: 'easeOut'
//               }}
//               className="absolute w-full flex justify-center "
//             >
//               <motion.h1
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{
//                   duration: 1,
//                   ease: 'easeOut'
//                 }}
//                 className=" encode-sans lg:tracking-[-1.6rem] mt-10 md:mt-24 text-7xl md:text-[12rem] lg:text-[16rem] font-bold uppercase leading-none bg-clip-text text-transparent  2xl:text-[18rem] 3xl:text-[20rem] lg:max-w-full 3xl:max-w-[98rem]"
//                 style={{
//                   backgroundImage: items[active].textGradient,
//                   WebkitBackgroundClip: 'text',
//                   filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))'
//                 }}
//               >
//                 {items[active].name}
//               </motion.h1>
//             </motion.div>
//             <div className="relative w-full h-[80%] z-50 lg:h-full lg:max-w-full 3xl:max-w-[82rem] mx-auto px-4 ">
//               <div className="relative w-full h-full flex items-center justify-center">
//                 <motion.div
//                   initial={{ opacity: 0, x: -50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   exit={{ opacity: 0, x: 50 }}
//                   transition={{
//                     duration: 1.2,
//                     ease: 'easeInOut',
//                     delay: 0.3
//                   }}
//                   className="absolute left-0 lg:left-10 2xl:left-6 3xl:-left-28 top-[75%] lg:top-[60%] -translate-y-1/2 z-40 w-full  md:max-w-md mt-4 md:mt-0"
//                 >
//                   <div className="flex flex-col mt-8 md:mt-0 md:block  backdrop-blur-md bg-white/10 py-2 px-4 md:p-6 rounded-sm border border-white/20">
//                     <p className="text-white text-center md:text-left text-base md:text-lg lg:text-xl leading-relaxed mb-2 md:mb-6">
//                       {items[active].description}
//                     </p>
//                     <Link
//                       href={items[active].page}
//                       className="inline-block text-center md:text-left px-8 py-3 text-white rounded-sm transition-colors duration-500 border border-white/60 hover:bg-white/30"
//                       style={{
//                         background: items[active].gradient
//                       }}
//                     >
//                       Découvrir
//                     </Link>
//                   </div>
//                 </motion.div>

//                 <motion.div
//                   key={active}
//                   style={{
//                     perspective: '1000px'
//                   }}
//                   className="relative z-50 w-full h-full flex items-center justify-center"
//                 >
//                   {/* Fixed size container for main image */}
//                   <div className={`relative ${getImageContainerClass(items[active].id)}`}>
//                     {/* <motion.div
//                       initial={{
//                         opacity: 0,
//                         scale: 0.8,
//                         rotateY: 180,
//                         transformStyle: 'preserve-3d'
//                       }}
//                       animate={{
//                         opacity: 1,
//                         scale: 1,
//                         rotateY: 360
//                       }}
//                       exit={{
//                         opacity: 0,
//                         scale: 0.8,
//                         rotateY: 0
//                       }}
//                       transition={{
//                         duration: 1.2,
//                         ease: [0.4, 0, 0.2, 1]
//                       }}
//                       className="w-full h-full"
//                     >
//                       <motion.div
//                         initial={{ clipPath: 'circle(0% at 50% 50%)' }}
//                         animate={{ clipPath: 'circle(100% at 50% 50%)' }}
//                         exit={{ clipPath: 'circle(0% at 50% 50%)' }}
//                         transition={{
//                           duration: 1.2,
//                           ease: [0.4, 0, 0.2, 1]
//                         }}
//                         className="w-full h-full"
//                       >
//                         <img
//                           src={items[active].image || '/placeholder.svg'}
//                           alt={items[active].name}
//                           className="w-full h-full object-contain"
//                         />
//                       </motion.div>
//                     </motion.div> */}
//                     <MainImage image={items[active].image} name={items[active].name} />

//                     {/* Floating images */}
//                     <AnimatePresence mode="wait">
//                       {[
//                         { position: 'top-left', index: 0 },
//                         { position: 'top-right', index: 1 },
//                         { position: 'bottom-left', index: 2 },
//                         { position: 'bottom-right', index: 3 }
//                       ].map(({ position, index }) => (
//                         // <motion.div
//                         //   key={`${active}-${position}`}
//                         //   className={`absolute ${getPosition(active, position)} ${getImageSize(active, position)}`}
//                         //   initial={{ opacity: 0, scale: 0.5 }}
//                         //   animate={{
//                         //     opacity: 1,
//                         //     scale: 1,
//                         //     y: ['-10px', '10px'],
//                         //     rotate: getRotateValues(active, position),
//                         //     transition: {
//                         //       opacity: { duration: 1.2, ease: 'easeOut' },
//                         //       scale: { duration: 1.2, ease: 'easeOut' },
//                         //       y: {
//                         //         duration: 3,
//                         //         repeat: Infinity,
//                         //         repeatType: 'reverse',
//                         //         ease: 'easeInOut'
//                         //       }
//                         //     }
//                         //   }}
//                         //   exit={{ opacity: 0, scale: 0.5, transition: { duration: 1 } }}
//                         // >
//                         //   <img
//                         //     src={items[active].floatingImages[index]}
//                         //     alt="Floating product"
//                         //     className="w-full h-full object-contain rounded-sm"
//                         //     style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' }}
//                         //   />
//                         // </motion.div>
//                         <FloatingImage
//                           key={`${active}-${position}`}
//                           position={position}
//                           index={index}
//                           active={active}
//                           image={items[active].floatingImages[index]}
//                           getPosition={getPosition}
//                           getImageSize={getImageSize}
//                           getRotateValues={getRotateValues}
//                         />
//                       ))}
//                     </AnimatePresence>
//                   </div>
//                 </motion.div>
//               </div>
//             </div>
//           </div>

//           {/* Navigation Buttons */}
//           {/* <div
//             className="absolute bottom-2 md:bottom-8 left-0 right-0 flex justify-center gap-4 z-50"
//             onMouseEnter={() => setIsHovering(true)}
//             onMouseLeave={() => setIsHovering(false)}
//           >
//             <button
//               onClick={prevSlider}
//               className="h-12 w-12 rounded-full border border-white/60 bg-white/30 text-xl text-white transition-colors hover:bg-white/40"
//               aria-label="Previous slide"
//             >
//               ‹
//             </button>
//             <button
//               onClick={nextSlider}
//               className="h-12 w-12 rounded-full border border-white/60 bg-white/30 text-xl text-white transition-colors hover:bg-white/40"
//               aria-label="Next slide"
//             >
//               ›
//             </button>
//           </div> */}
//           <NavigationButtons onPrev={prevSlider} onNext={nextSlider} onHoverChange={setIsHovering} />
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// };

// export default HeroSlide;

import piple from '@/assets/images/Papil.brown-blur.webp';
import piple2 from '@/assets/images/Papil.N.webp';
import piple4 from '@/assets/images/Papil.Or.webp';
import piple3 from '@/assets/images/Papil.red.webp';

import choko2 from '@/assets/images/black-cookies.webp';
import bluebereies from '@/assets/images/blueberies.webp';
import Carousel1 from '@/assets/images/carousel-1.webp';
import Carousel2 from '@/assets/images/carousel-2.webp';
import Carousel3 from '@/assets/images/carousel-3.webp';
import cherry from '@/assets/images/cherrs.webp';
import cokies from '@/assets/images/cokies.webp';
import cupcake from '@/assets/images/cupcake.webp';
import orange from '@/assets/images/orange.webp';
import cake from '@/assets/images/small-cake.webp';
import strawberry from '@/assets/images/strawbery.webp';
import '../../css/app.css';

// Import background images
import { default as bgChocolat, default as bgConfiserie, default as bgPatisserie } from '@/assets/images/bg-slide.png';

import '../../css/app.css';

import { AnimatePresence, motion } from 'framer-motion';
import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link } from './ui';
import { Button } from './ui/shadcn-button';

const FloatingImage = memo(({ position, index, active, image, getPosition, getImageSize, getRotateValues }: any) => (
  <motion.div
    key={`${active}-${position}`}
    className={`absolute ${getPosition(active, position)} ${getImageSize(active, position)}`}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{
      opacity: 1,
      scale: 1,
      y: ['-8px', '8px'],
      rotate: getRotateValues(active, position),
      transition: {
        opacity: { duration: 0.8, ease: 'easeOut' },
        scale: { duration: 0.8, ease: 'easeOut' },
        y: {
          duration: 4,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut'
        }
      }
    }}
    exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.6 } }}
  >
    <img
      src={image}
      alt="Floating product"
      className="w-full h-full  object-contain rounded-sm"
      style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' }}
      loading="lazy"
    />
  </motion.div>
));

const MainImage = memo(({ image, name }: any) => (
  <motion.div
    initial={{
      opacity: 0,
      scale: 0.9
    }}
    animate={{
      opacity: 1,
      scale: 1
    }}
    exit={{
      opacity: 0,
      scale: 0.9
    }}
    transition={{
      duration: 0.8,
      ease: 'easeInOut'
    }}
    className="w-full h-full"
  >
    <motion.div
      initial={{ clipPath: 'circle(0% at 50% 50%)' }}
      animate={{ clipPath: 'circle(100% at 50% 50%)' }}
      exit={{ clipPath: 'circle(0% at 50% 50%)' }}
      transition={{
        duration: 0.8,
        ease: 'easeInOut'
      }}
      className="w-full h-full lg:h-[400px] 2xl:h-[500px] 3xl:h-[550px]"
    >
      <img src={image || '/placeholder.svg'} alt={name} className="w-full h-full object-contain" loading="lazy" />
    </motion.div>
  </motion.div>
));

const PulsingButton = ({ onClick, children, ...props }) => {
  const [isActive, setIsActive] = useState(false);

  // Add animation styles
  useEffect(() => {
    const styleEl = document.createElement('style');
    styleEl.textContent = `
      @keyframes ping-slow {
        0% {
          transform: scale(1);
          opacity: 0.4;
        }
        50% {
          transform: scale(1.5);
          opacity: 0.2;
        }
        100% {
          transform: scale(2);
          opacity: 0;
        }
      }

      @keyframes ping-delayed {
        0% {
          transform: scale(1);
          opacity: 0.5;
        }
        70% {
          transform: scale(1.3);
          opacity: 0.3;
        }
        100% {
          transform: scale(1.7);
          opacity: 0;
        }
      }

      .animate-ping-slow {
        animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
      }

      .animate-ping-delayed {
        animation: ping-delayed 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        animation-delay: 0.3s;
      }
    `;
    document.head.appendChild(styleEl);

    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);

  return (
    <button
      onClick={(e) => {
        setIsActive(true);
        setTimeout(() => setIsActive(false), 1000);
        onClick && onClick(e);
      }}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      className="relative focus:outline-none pointer-events-auto"
      {...props}
    >
      {/* Container for all elements - important for proper positioning */}
      <div className="relative w-16 h-16">
        {/* Fixed: Animation layers now properly centered and visible */}
        {/* The key fix is using inset-0 instead of left/top + translate */}

        {/* Outermost pulsing circle */}
        <div
          className={`absolute inset-0 m-auto rounded-full
                     bg-rose-200/30 animate-ping-slow
                     transition-opacity duration-300 ${isActive ? 'opacity-40' : 'opacity-0'}`}
        ></div>

        {/* Middle pulsing circle with delay */}
        <div
          className={`absolute inset-0 m-auto w-12 h-12 rounded-full
                     bg-rose-300/40 animate-ping-delayed
                     transition-opacity duration-300 ${isActive ? 'opacity-50' : 'opacity-0'}`}
        ></div>

        {/* Base button with gradient */}
        <div
          className={`absolute inset-0 w-16 h-16 rounded-full
                     bg-gradient-to-r from-rose-300/80 via-rose-400/80 to-rose-300/80
                     flex items-center justify-center z-10
                     transition-all duration-300 ${isActive ? 'scale-110' : ''}`}
        >
          {/* Middle circle */}
          <div
            className={`w-12 h-12 rounded-full
                       bg-gradient-to-br from-rose-500/90 to-red-500/90
                       transition-all duration-300 flex items-center justify-center ${isActive ? 'scale-110' : ''}`}
          >
            {/* Inner circle with content */}
            <div
              className={`w-8 h-8 rounded-full
                         bg-[#AA071A]
                         transition-all duration-300 flex items-center justify-center ${isActive ? 'scale-110' : ''}`}
            >
              <span className="text-white text-xl">{children}</span>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

const NavigationButtons = memo(({ onPrev, onNext, onHoverChange, active, total }: any) => (
  <div className="absolute top-0 bottom-0 left-0 right-0 z-50 pointer-events-none">
    {/* Navigation buttons */}
    <div
      className="h-full w-full flex items-center justify-between px-6 md:px-10"
      onMouseEnter={() => onHoverChange(true)}
      onMouseLeave={() => onHoverChange(false)}
    >
      <PulsingButton onClick={() => onPrev(1)} aria-label="Previous slide">
        ‹
      </PulsingButton>

      <PulsingButton onClick={() => onNext(1)} aria-label="Next slide">
        ›
      </PulsingButton>
    </div>
  </div>
));

const BackgroundImage = ({ src, active, isCurrentSlide, overlayColor }) => (
  <motion.div
    className="absolute inset-0 w-full h-full z-0"
    initial={{ opacity: 0 }}
    animate={{ opacity: isCurrentSlide ? 1 : 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.8 }}
  >
    <img src={src} alt="Background" className="w-full h-full object-cover" style={{ filter: 'brightness(0.6)' }} />
    <div
      className="absolute inset-0"
      style={{
        backgroundColor: isCurrentSlide ? overlayColor : 'transparent',
        opacity: 0.8,
        mixBlendMode: 'overlay'
      }}
    />
    <div
      className="absolute inset-0"
      style={{
        background: isCurrentSlide
          ? 'linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.1) 100%)'
          : 'none',
        mixBlendMode: 'multiply'
      }}
    />
  </motion.div>
);

const HeroSlide = () => {
  const [rotate, setRotate] = useState(0);
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState('clockwise');
  const [isHovering, setIsHovering] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);
  const items = useMemo(
    () => [
      {
        id: 1,
        image: Carousel1,
        bgImage: bgPatisserie,
        overlayColor: '#6A3614',
        name: 'pâtisserie',
        description:
          'Délicieux gâteaux et pâtisseries faits avec soin pour toutes les occasions. Découvrez des créations artisanales qui allient tradition et raffinement pour régaler vos papilles.',
        gradient:
          'linear-gradient(135deg, rgba(139, 30, 63, 0.85) 0%, rgba(178, 56, 80, 0.75) 50%, rgba(232, 223, 224, 0.65) 100%)',
        textGradient: 'linear-gradient(135deg, #6e4931 0%, #6e4931 100%)',
        floatingImages: [cake, cokies, choko2, cupcake],
        page: 'products/Produits%20pâtissiers/chocolats%20pâtissiers'
      },
      {
        id: 2,
        image: Carousel3,
        bgImage: bgConfiserie,
        overlayColor: '#F2AC1F',
        name: 'CONFISERIE',
        description:
          'Douceurs sucrées comme caramels, nougats et bonbons colorés. Une gamme variée de petits plaisirs pour satisfaire toutes vos envies gourmandes.',
        gradient: 'linear-gradient(135deg, #D4AF37 0%, #D4AF37 50%, #D4AF37 100%)',
        textGradient: 'linear-gradient(135deg, #ffdf90 0%, #ffdf90 100%)',
        floatingImages: [strawberry, cherry, orange, bluebereies],
        page: 'products/confiserie/sucettes'
      },
      {
        id: 3,
        image: Carousel2,
        bgImage: bgChocolat,
        overlayColor: '#1E0807',
        name: 'chocolat',
        description:
          'Chocolats gourmands, des truffes aux tablettes, fabriqués avec du cacao premium. Laissez-vous tenter par des saveurs intenses et une texture fondante irrésistible.',
        gradient:
          'linear-gradient(135deg, rgba(62, 39, 35, 0.85) 0%, rgba(93, 64, 55, 0.75) 50%, rgba(141, 110, 99, 0.65) 100%)',
        textGradient: 'linear-gradient(135deg, #725744 0%, #725744 100%)',
        floatingImages: [piple, piple2, piple3, piple4],
        page: 'products/chocolat/pâtes%20à%20tartiner'
      }
    ],
    []
  );

  const countItem = items.length;
  const rotateAdd = 120; // 360 degrees divided by 3 items = 120 degrees per item

  const slideVariants = useMemo(
    () => ({
      enter: (direction) => ({
        opacity: 0,
        x: direction === 'next' ? 20 : -20,
        transition: {
          opacity: { duration: 0.5, ease: 'easeInOut' },
          x: { duration: 0.5, ease: 'easeInOut' }
        }
      }),
      center: {
        zIndex: 1,
        opacity: 1,
        x: 0,
        transition: {
          opacity: { duration: 0.5, ease: 'easeInOut' },
          x: { duration: 0.5, ease: 'easeInOut' }
        }
      },
      exit: (direction) => ({
        zIndex: 0,
        opacity: 0,
        x: direction === 'next' ? -20 : 20,
        transition: {
          opacity: { duration: 0.5, ease: 'easeInOut' },
          x: { duration: 0.5, ease: 'easeInOut' }
        }
      })
    }),
    []
  );

  const getRotateValues = useCallback((active, position) => {
    const rotate = {
      0: {
        'top-left': -25,
        'top-right': 30,
        'bottom-left': 120,
        'bottom-right': 20
      },
      1: {
        'top-left': -25,
        'top-right': 30,
        'bottom-left': 10,
        'bottom-right': 20
      },
      2: {
        'top-left': -25,
        'top-right': 60,
        'bottom-left': -120,
        'bottom-right': -20
      }
    };
    return rotate[active]?.[position] || 0;
  }, []);

  const getImageSize = useCallback((active, position) => {
    // Base sizes for each active state
    const sizes = {
      0: {
        // First slide
        'top-left': 'w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 2xl:w-44 2xl:h-44',
        'top-right': 'w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 2xl:w-44 2xl:h-44',
        'bottom-left': 'w-24 h-24 md:w-32 md:h-32 lg:w-32 lg:h-32 xl:w-36 xl:h-36 2xl:w-40 2xl:h-40',
        'bottom-right': 'w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 2xl:w-44 2xl:h-44'
      },
      1: {
        // Second slide
        'top-left': 'w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-44 xl:h-44 2xl:w-48 2xl:h-48',
        'top-right': 'w-36 h-36 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-44 xl:h-44 2xl:w-48 2xl:h-48',
        'bottom-left': 'w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-44 xl:h-44 2xl:w-48 2xl:h-48',
        'bottom-right': 'w-24 h-24 md:w-36 md:h-36 lg:w-32 lg:h-32 xl:w-32 xl:h-32 2xl:w-32 2xl:h-32'
      },
      2: {
        // Third slide
        'top-left': 'w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-44 xl:h-44 2xl:w-48 2xl:h-48',
        'top-right': 'w-32 h-32 md:w-36 md:h-36 lg:w-44 lg:h-44 xl:w-52 xl:h-52 2xl:w-56 2xl:h-56',
        'bottom-left': 'w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-44 xl:h-44 2xl:w-48 2xl:h-48',
        'bottom-right': 'w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 xl:w-44 xl:h-44 2xl:w-48 2xl:h-48'
      }
    };

    return sizes[active]?.[position] || 'w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48'; // Default size
  }, []);

  const getPosition = useCallback((active, position) => {
    // Custom positions for each active state
    const positions = {
      0: {
        'top-left': '-left-4 -top-20 md:-left-12 md:-top-16  lg:-left-0 lg:-top-24 2xl:-left-10 2xl:-top-24',
        'top-right': '-right-2 -top-16 md:-right-8 md:-top-20 lg:-right-0 lg:-top-24  2xl:-right-10 2xl:-top-24',
        'bottom-left': '-left-0 -bottom-10 md:-left-0 md:-bottom-20 lg:-left-0 lg:-bottom-0 2xl:-left-8 2xl:-bottom-20',
        'bottom-right':
          '-right-0 -bottom-10 md:-right-4 md:-bottom-20 lg:-right-0 lg:-bottom-0 2xl:-right-8 2xl:-bottom-20'
      },
      1: {
        'top-left': '-left-16 -top-20 md:-left-20 md:-top-24 lg:-left-0 lg:-top-24 2xl:-left-20 2xl:-top-24',
        'top-right': '-right-16 -top-20 md:-right-20 md:-top-24 lg:-right-0 lg:-top-24  2xl:-right-20 2xl:-top-24',
        'bottom-left':
          '-left-16 -bottom-16 md:-left-20 md:-bottom-16 lg:-left-0 lg:-bottom-0 2xl:-left-20 2xl:-bottom-32',
        'bottom-right':
          '-right-16 -bottom-16 md:-right-20 md:-bottom-20 lg:-right-0 lg:-bottom-0 2xl:-right-20 2xl:-bottom-32'
      },
      2: {
        'top-left': '-left-16 -top-20 md:-left-24 md:-top-28 lg:-left-0 lg:-top-24 2xl:-left-20 2xl:-top-24',
        'top-right': '-right-16 -top-20 md:-right-24 md:-top-28 lg:-right-0 lg:-top-24 2xl:-right-20 2xl:-top-24',
        'bottom-left':
          '-left-16 -bottom-16 md:-left-16 md:-bottom-20 lg:-left-0 lg:-bottom-0 2xl:-left-20 2xl:-bottom-32',
        'bottom-right':
          '-right-16 -bottom-16 md:-right-24 md:-bottom-20 lg:-right-0 lg:-bottom-0 2xl:-right-20 2xl:-bottom-32'
      }
    };

    return positions[active]?.[position] || '-left-16 -top-20'; // Default position
  }, []);

  const getImageContainerClass = useCallback((itemId) => {
    if (itemId === 1) {
      return 'w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px]';
    }
    return 'w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px]';
  }, []);

  // Memoized navigation functions
  const nextSlider = useCallback(() => {
    setDirection('clockwise');
    setActive((prev) => (prev + 1) % items.length);
    setRotate((prev) => prev + rotateAdd);
  }, [items.length, rotateAdd]);

  const prevSlider = useCallback(() => {
    setDirection('counter-clockwise');
    setActive((prev) => (prev - 1 + items.length) % items.length);
    setRotate((prev) => prev - rotateAdd);
  }, [items.length, rotateAdd]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') prevSlider();
      if (e.key === 'ArrowRight') nextSlider();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [nextSlider, prevSlider]);

  // Auto-rotation effect
  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(nextSlider, 5000);
      return () => clearInterval(interval);
    }
  }, [nextSlider, isHovering]);

  // Normalize rotation angle
  useEffect(() => {
    const normalizedRotation = ((rotate % 360) + 360) % 360;
    const activeIndex = Math.round(normalizedRotation / rotateAdd) % countItem;
    setActive((countItem - activeIndex) % countItem);
  }, [rotate, countItem, rotateAdd]);

  return (
    <div className="relative h-screen max-w-full overflow-hidden">
      {/* Background Images */}
      {items.map((item, index) => (
        <BackgroundImage
          key={`bg-${item.id}`}
          src={item.bgImage}
          active={active}
          isCurrentSlide={index === active}
          overlayColor={item.overlayColor}
        />
      ))}

      <AnimatePresence initial={false} custom={direction} mode="sync">
        <motion.div
          key={active}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 z-10"
          style={{
            transformOrigin: 'center center',
            transformStyle: 'preserve-3d'
          }}
        >
          <div className="relative h-[calc(100vh-6rem)] mt-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1.2,
                ease: 'easeOut'
              }}
              className="absolute w-full flex justify-center"
            >
              <motion.h1
                initial={{ opacity: 0, scale: 0.8, rotate: direction === 'clockwise' ? -30 : 30 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotate: direction === 'clockwise' ? 30 : -30 }}
                transition={{
                  duration: 1,
                  ease: 'easeOut'
                }}
                className="encode-sans  lg:tracking-[-1.6rem] mt-10 md:mt-28 text-7xl md:text-[12rem] lg:text-[16rem] font-bold uppercase leading-none bg-clip-text text-transparent 2xl:text-[18rem] 3xl:text-[18rem] lg:max-w-full 3xl:max-w-[90rem]"
                style={{
                  backgroundImage: items[active].textGradient,
                  WebkitBackgroundClip: 'text',
                  filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))',
                  transformOrigin: 'center center'
                }}
              >
                {items[active].name}
              </motion.h1>
            </motion.div>
            <div className="relative w-full h-[80%] z-20 lg:h-full lg:max-w-full 3xl:max-w-[82rem] mx-auto px-4">
              <div className="relative w-full h-full flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, x: -50, rotate: direction === 'clockwise' ? -15 : 15 }}
                  animate={{ opacity: 1, x: 0, rotate: 0 }}
                  exit={{ opacity: 0, x: 50, rotate: direction === 'clockwise' ? 15 : -15 }}
                  transition={{
                    duration: 1.2,
                    ease: 'easeInOut',
                    delay: 0.3
                  }}
                  className="absolute left-0 lg:left-10 2xl:left-6 3xl:-left-28 top-[75%] lg:top-[60%] -translate-y-1/2 z-40 w-full md:max-w-md mt-4 md:mt-0"
                  style={{ transformOrigin: 'center center' }}
                >
                  <div className="flex flex-col mt-8 md:mt-0 md:block backdrop-blur-md bg-black/30 py-2 px-4 md:p-6 rounded-2xl border border-white/20">
                    <p className="text-white text-center md:text-left text-base md:text-lg lg:text-xl leading-relaxed mb-2 md:mb-6">
                      {items[active].description}
                    </p>
                    <Link
                      href={items[active].page}
                      //   className="inline-block text-center md:text-left px-8 py-3 text-white rounded-full transition-colors duration-500 border border-white/60 hover:bg-white/30"
                    >
                      <Button
                        variant="outline"
                        className="bg-black w-full lg:w-fit hover:bg-gray-800 text-white rounded-full px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      >
                        Découvrir
                        <span className="ml-2 inline-block transform group-hover:translate-x-1 transition-transform duration-200">
                          →
                        </span>
                      </Button>
                    </Link>
                  </div>
                </motion.div>

                {/* Main product image - stationary at center */}
                <div className={`relative z-30 ${getImageContainerClass(items[active].id)}`}>
                  <AnimatePresence mode="wait">
                    <MainImage key={`main-${active}`} image={items[active].image} name={items[active].name} />
                  </AnimatePresence>

                  {/* Floating images with orbital motion */}
                  <AnimatePresence mode="wait">
                    {[
                      { position: 'top-left', index: 0, angle: 45 },
                      { position: 'top-right', index: 1, angle: 135 },
                      { position: 'bottom-left', index: 2, angle: 225 },
                      { position: 'bottom-right', index: 3, angle: 315 }
                    ].map(({ position, index, angle }) => (
                      <FloatingImage
                        key={`${active}-${position}`}
                        position={position}
                        index={index}
                        active={active}
                        image={items[active].floatingImages[index]}
                        getPosition={getPosition}
                        getImageSize={getImageSize}
                        getRotateValues={getRotateValues}
                      />
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
          <NavigationButtons
            onPrev={prevSlider}
            onNext={nextSlider}
            onHoverChange={setIsHovering}
            active={active}
            total={items.length}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HeroSlide;
