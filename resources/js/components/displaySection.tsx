// import video from '@/assets/images/VIDEO-2023-01-06-12-46-20.mp4';
// import { motion, useAnimation, useInView } from 'framer-motion';
// import { Play } from 'lucide-react';
// import { useEffect, useRef, useState } from 'react';
// import StatsDashboard from './counter';
// import { Container } from './ui';
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/shadcn-dailog';

// const CircularCursor = ({ position, isHovering }) => {
//   const [rotation, setRotation] = useState(0);
//   const text = 'PARCOURS ARTISANAL • PASTORE MACAO • ';
//   const radius = 80;
//   const characters = text.split('');

//   useEffect(() => {
//     const animate = () => {
//       setRotation((prev) => (prev + 1) % 360);
//     };
//     const intervalId = setInterval(animate, 30);
//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <div
//       className="fixed pointer-events-none "
//       style={{
//         left: position.x - radius,
//         top: position.y - radius,
//         opacity: isHovering ? 1 : 0,
//         transition: 'opacity 0.3s ease'
//       }}
//     >
//       {' '}
//       <div className="relative w-28 h-28">
//         <Play className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white w-8 h-8" />
//         {characters.map((char, i) => {
//           const angle = (i * 360) / characters.length + rotation;
//           return (
//             <span
//               key={i}
//               className="absolute text-white text-sm font-medium"
//               style={{
//                 left: '50%',
//                 top: '50%',
//                 transform: `
//                 translate(-50%, -50%)
//                 rotate(${angle}deg)
//                 translateY(-${radius}px)
//               `, // Keep characters standing upright vertically
//                 transition: 'transform 0.1s linear'
//               }}
//             >
//               {char}
//             </span>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default function DisplaySection() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isHovering, setIsHovering] = useState(false);
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   const headerRef = useRef(null);
//   const videoSectionRef = useRef(null);
//   const statsRef = useRef(null);
//   const headerInView = useInView(headerRef, { once: false, amount: 0.3 });
//   const videoInView = useInView(videoSectionRef, {
//     once: false,
//     amount: 0.2
//     // rootMargin: '-50px 0px'
//   });
//   const statsInView = useInView(statsRef, {
//     once: false,
//     amount: 0.3
//   });

//   // Animation controls
//   const videoControls = useAnimation();
//   const statsControls = useAnimation();

//   // Apply animations when sections come into view
//   useEffect(() => {
//     if (videoInView) {
//       videoControls.start('visible');
//     } else {
//       videoControls.start('hidden');
//     }
//   }, [videoInView, videoControls]);

//   useEffect(() => {
//     if (statsInView) {
//       statsControls.start('visible');
//     } else {
//       statsControls.start('hidden');
//     }
//   }, [statsInView, statsControls]);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   // Your existing animation variants
//   const fadeInLeft = {
//     hidden: { opacity: 0, x: -100 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: 0.6,
//         ease: 'easeOut'
//       }
//     }
//   };

//   const fadeInRight = {
//     hidden: { opacity: 0, x: 100 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         duration: 0.6,
//         ease: 'easeOut'
//       }
//     }
//   };

//   const fadeInUp = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: 'easeOut'
//       }
//     }
//   };

//   const staggerChildren = {
//     hidden: {},
//     visible: {
//       transition: {
//         staggerChildren: 0.2
//       }
//     }
//   };

//   // New animation variants for video section
//   const videoSectionVariants = {
//     hidden: {
//       opacity: 0,
//       y: 80,
//       scale: 0.95
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: {
//         duration: 0.8,
//         ease: [0.22, 1, 0.36, 1] // Custom ease curve for smoother motion
//       }
//     }
//   };

//   // New animation variants for stats container
//   const statsContainerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.1,
//         duration: 0.4
//       }
//     }
//   };

//   // Animation for individual stat items
//   const statItemVariants = {
//     hidden: {
//       opacity: 0,
//       y: 40,
//       scale: 0.9
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: {
//         duration: 0.6,
//         type: 'spring',
//         stiffness: 150,
//         damping: 15
//       }
//     }
//   };

//   return (
//     <section className="relative py-8 md:pt-16 md:pb-24">
//       <motion.div
//         ref={headerRef}
//         className="text-center mb-12"
//         initial="hidden"
//         animate={headerInView ? 'visible' : 'hidden'}
//         variants={staggerChildren}
//       >
//         <motion.h2
//           variants={fadeInUp}
//           className="text-gray-700 font-custom font-bold uppercase  tracking-wide  mb-3 sm:mb-4
//                 text-sm md:text-xl"
//         >
//           Découvrez notre parcours artisanal
//         </motion.h2>
//         <motion.h1
//           variants={fadeInLeft}
//           className=" text-red-600 uppercase text-3xl md:text-5xl lg:text-5xl font-custom font-bold  "
//         >
//           Expérimentez le mélange
//         </motion.h1>
//         <motion.h1
//           variants={fadeInRight}
//           className=" text-red-600 uppercase  text-3xl md:text-5xl lg:text-5xl font-custom font-bold"
//         >
//           parfait
//         </motion.h1>
//       </motion.div>

//       {/* Video Section with Enhanced Animation */}
//       <motion.div
//         ref={videoSectionRef}
//         initial="hidden"
//         animate={videoControls}
//         variants={videoSectionVariants}
//         className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden group cursor-none"
//         onMouseEnter={() => setIsHovering(true)}
//         onMouseLeave={() => setIsHovering(false)}
//         onClick={() => setIsOpen(true)}
//       >
//         <motion.div
//           className="absolute inset-0 w-full h-full"
//           whileHover={{
//             scale: 1.03,
//             transition: { duration: 4, ease: 'easeOut' }
//           }}
//         >
//           <video autoPlay loop muted playsInline className="object-cover w-full h-full">
//             <source src={video} type="video/mp4" />
//           </video>

//           {/* Enhanced overlay with gradient and subtle animation */}
//           <motion.div
//             className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"
//             initial={{ opacity: 0.6 }}
//             animate={{ opacity: 0.4 }}
//             whileHover={{
//               opacity: 0.2,
//               transition: { duration: 0.5 }
//             }}
//             transition={{ duration: 0.5 }}
//           />

//           {/* Play button indication (appears when hovered) */}
//           <motion.div
//             className="absolute inset-0 flex items-center justify-center"
//             initial={{ opacity: 0 }}
//             whileHover={{
//               opacity: 1,
//               scale: 1.1,
//               transition: { duration: 0.3 }
//             }}
//           >
//             <motion.div
//               className="w-20 h-20 rounded-full bg-red-600/80 flex items-center justify-center"
//               whileHover={{
//                 scale: 1.1,
//                 backgroundColor: 'rgba(220, 38, 38, 0.9)'
//               }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <Play className="text-white w-8 h-8 ml-1" />
//             </motion.div>
//           </motion.div>
//         </motion.div>

//         {/* Custom Cursor */}
//         <CircularCursor position={position} isHovering={isHovering} />
//       </motion.div>

//       {/* Enhanced Video Modal */}
//       <Dialog open={isOpen} onOpenChange={setIsOpen}>
//         <DialogContent className="max-w-5xl p-0 overflow-hidden rounded-xl">
//           <DialogHeader>
//             <DialogTitle className="sr-only">Our Story</DialogTitle>
//           </DialogHeader>
//           <div className="relative w-full h-full pt-[56.25%] bg-black">
//             <iframe
//               src={video}
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowFullScreen
//               className="absolute w-full top-0 left-0 h-full border-0"
//             />
//           </div>
//         </DialogContent>
//       </Dialog>

//       {/* Enhanced Stats Section */}
//       <motion.div ref={statsRef} initial="hidden" animate={statsControls} variants={statsContainerVariants}>
//         <Container>
//           <StatsDashboard />
//         </Container>
//       </motion.div>
//     </section>
//   );
// }

// import video from '@/assets/images/VIDEO-2023-01-06-12-46-20.mp4';
// import { motion } from 'framer-motion';
// import { Play } from 'lucide-react';
// import { useEffect, useState } from 'react';
// import StatsDashboard from './counter';
// import { Container } from './ui';
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/shadcn-dailog';

// const CircularCursor = ({ position, isHovering }) => {
//   const [rotation, setRotation] = useState(0);
//   const text = 'PARCOURS ARTISANAL • PASTORE MACAO • ';
//   const radius = 30;
//   const characters = text.split('');

//   useEffect(() => {
//     const animate = () => {
//       setRotation((prev) => (prev + 1) % 360);
//     };
//     const intervalId = setInterval(animate, 30);
//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <div
//       className="fixed pointer-events-none "
//       style={{
//         left: position.x - radius,
//         top: position.y - radius,
//         opacity: isHovering ? 1 : 0,
//         transition: 'opacity 0.3s ease'
//       }}
//     >
//       <div className="relative w-28 h-28">
//         <Play className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white w-8 h-8" />
//         {characters.map((char, i) => {
//           const angle = (i * 360) / characters.length + rotation;
//           return (
//             <span
//               key={i}
//               className="absolute text-white text-sm  tracking-[0.3em]"
//               style={{
//                 left: '50%',
//                 top: '50%',
//                 letterSpacing: '8em',
//                 transform: `
//                     translate(-50%, -50%)
//                     rotate(${angle}deg)
//                     translateY(-${radius}px)
//                     rotate(90deg)
//                   `,
//                 transition: 'transform 0.1s linear'
//               }}
//             >
//               {char}
//             </span>
//           );
//         })}
//       </div>
//     </div>
//   );
// };
import video from '@/assets/images/VIDEO-2023-01-06-12-46-20.mp4';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useEffect, useState } from 'react';
import StatsDashboard from './counter';
import { Container } from './ui';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/shadcn-dailog';

const CircularCursor = ({ position, isHovering }) => {
  const [rotation, setRotation] = useState(0);
  const text = 'PARCOURS ARTISANAL • PASTORE MACAO • ';
  const radius = 80;
  const characters = text.split('');

  useEffect(() => {
    const animate = () => {
      setRotation((prev) => (prev + 1) % 360);
    };
    const intervalId = setInterval(animate, 30);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className="fixed pointer-events-none "
      style={{
        left: position.x - radius,
        top: position.y - radius,
        opacity: isHovering ? 1 : 0,
        transition: 'opacity 0.3s ease'
      }}
    >
      {' '}
      <div className="relative w-28 h-28">
        <Play className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white w-8 h-8" />
        {characters.map((char, i) => {
          const angle = (i * 360) / characters.length + rotation;
          return (
            <span
              key={i}
              className="absolute text-white text-sm font-medium"
              style={{
                left: '50%',
                top: '50%',
                transform: `
                translate(-50%, -50%)
                rotate(${angle}deg)
                translateY(-${radius}px)
              `, // Keep characters standing upright vertically
                transition: 'transform 0.1s linear'
              }}
            >
              {char}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default function DisplaySection() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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

  return (
    <section className="relative py-8 md:py-0 ">
      <motion.div className="text-center " initial="hidden" animate="visible" variants={staggerChildren}>
        <motion.h2
          variants={fadeInUp}
          className="text-gray-700  font-custom font-bold  tracking-wide uppercase mb-3 sm:mb-4
                  text-sm sm:text-lg"
        >
          Découvrez notre parcours artisanal
        </motion.h2>
        <motion.h1
          variants={fadeInUp}
          className="text-red-600 uppercase text-4xl md:text-5xl lg:text-6xl font-custom font-bold  mb-12"
        >
          Expérimentez le mélange <br /> parfait
        </motion.h1>
      </motion.div>

      {/* Video Section with Custom Cursor and Overlay */}
      <div
        className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden group cursor-none"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={() => setIsOpen(true)}
      >
        <div className="absolute inset-0 w-full h-full">
          <video autoPlay loop muted playsInline className="object-cover w-full h-full">
            <source src={video} type="video/mp4" />
          </video>
          {/* Black overlay that appears on hover */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-all duration-300" />
        </div>

        {/* Custom Cursor */}
        <CircularCursor position={position} isHovering={isHovering} />
      </div>

      {/* Enhanced Video Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden rounded-xl">
          <DialogHeader>
            <DialogTitle className="sr-only">Our Story</DialogTitle>
          </DialogHeader>
          <div className="relative w-full h-full pt-[56.25%] bg-black">
            <iframe
              src={video}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute w-full top-0 left-0  h-full border-0"
            />
          </div>
        </DialogContent>
      </Dialog>

      {/* Enhanced Stats Section */}
      <Container>
        <StatsDashboard />
      </Container>
    </section>
  );
}
