import cardBgImage from '@/assets/images/g5500-6.svg';
import bgimage from '@/assets/images/show-section.png';

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
  const fadeInImgae = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
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

  const CarouselRef = useRef(null);

  const isCarouselInView = useInView(CarouselRef, {
    once: false,
    amount: 0.2
  });

  return (
    <>
      <div
        ref={sectionRef}
        className="relative overflow-hidden py-8 lg:py-24 max-w-[110rem] mx-auto rounded-l-[80px] rounded-br-[80px]"
      >
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
            SAVOUREZ LA VIE
          </motion.h2>
        </motion.div>

        {/* Main Hero Section with Background and Card */}
        <div className="relative w-full min-h-[400px] sm:min-h-[450px] md:h-[600px] lg:h-[780px] ">
          {/* Background Image with Zoom and Parallax Effect */}
          <motion.div className="absolute md:inset-0 md:w-full md:h-full">
            <img
              src={bgimage}
              alt="Chocolatier preparing gourmet chocolates"
              className="object-fill !max-w-none md:w-full md:h-[85%] "
              onLoad={() => setIsLoaded(true)}
            />
          </motion.div>

          {/* Red Card with scroll animation */}
          <div className="absolute py-8 md:py-0 inset-0 flex items-center lg:h-full rounded-3xl justify-center sm:justify-end p-10  sm:px-6 md:px-8 lg:px-12 md:mr-10 lg:mr-28   ">
            <motion.div
              ref={cardRef}
              className="w-full  max-w-2xl sm:w-4/5 md:w-2/3 lg:w-4/5 text-white p-6 sm:p-8 md:py-6   flex flex-col justify-center relative overflow-hidden rounded-tl-[80px] "
            >
              {/* Background Image with subtle animation */}
              <div className="absolute inset-0  ">
                <motion.img src={cardBgImage} alt="Background" className="w-full h-full " />
              </div>

              <motion.div className="relative pb-6 px-4 md:py-10 lg:pt-16 z-10 h-[310px] md:h-[460px] lg:h-[710px] font-custom flex flex-col gap-2 md:gap-2 lg:gap-8">
                <motion.h2 className="text-xl sm:text-2xl md:text-4xl font-custom font-bold mb-2 sm:mb-4 md:mb-6">
                  PLAISIR <br />
                  GOURMAND
                </motion.h2>

                <motion.p
                  className="text-xs sm:text-sm md:text-lg mb-4 font-body font-medium leading-relaxed text-justify"
                  variants={textReveal}
                >
                  Fondée En 1954, PASTOR MACAO Est Le Leader Marocain En Confiserie-Chocolaterie, Offrant Une Large
                  Gamme De Produits De Qualité Pour Satisfaire Tous Les Goûts Au Meilleur Prix. La Satisfaction De Nos
                  Clients Est Au Cœur De Nos Préoccupations.
                </motion.p>
                <motion.p
                  className="text-xs sm:text-sm md:text-lg mb-4 font-body font-medium leading-relaxed text-justify"
                  variants={textReveal}
                >
                  Nous Vous Proposons Une Large Gamme De Produits Halal, Conçus Avec Les Meilleurs Ingrédients Répondant
                  Aux Normes De Qualité Les Plus Strictes Pour Satisfaire Tous Les Goûts.
                </motion.p>

                <motion.div variants={itemVariants} className=" md:mt-8 lg:mt-40">
                  <a href="/history">
                    <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
                      <Button className="bg-black hover:bg-gray-800 font-body font-bold text-white rounded-l-full rounded-br-full px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm md:text-lg md:py-4 md:px-6 transform transition-all duration-300 hover:scale-105 ">
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
