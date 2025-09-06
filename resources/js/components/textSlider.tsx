import choco from '@/assets/images/CHOCO.svg';
import icon4 from '@/assets/images/icon10.svg';
import icon2 from '@/assets/images/icon2.svg';
import icon3 from '@/assets/images/icon3.svg';
import icon5 from '@/assets/images/icon5.svg';
import icon6 from '@/assets/images/icon6.svg';
import icon7 from '@/assets/images/icon7.svg';
import icon8 from '@/assets/images/icon8.svg';
import icon9 from '@/assets/images/icon9.svg';
import macaoLogoRed from '@/assets/images/macoa-logo-small.svg';

import { motion, useAnimation, useInView } from 'framer-motion';
import React, { useRef, useState } from 'react';

type TextSliderProps = {
  topWords?: string[];
  bottomWords?: string[];
  speed?: number;
  pauseOnHover?: boolean;
  className?: string;
};

const WORD_ICONS: Record<string, string> = {
  SAVEURS: icon4,
  SUCRÉ: icon9,
  PÂTISSERIES: icon3,
  GÂTEAUX: icon6,
  BONBONS: icon2,
  CHOCOLAT: choco,
  DÉLICES: icon8,
  CONFISERIES: icon5,
  TRADITION: macaoLogoRed,
  CRÉATION: icon7
};

const DEFAULT_TOP_WORDS = ['SAVEURS', 'SUCRÉ', 'PÂTISSERIES', 'GÂTEAUX', 'BONBONS'];
const DEFAULT_BOTTOM_WORDS = ['CHOCOLAT', 'DÉLICES', 'CONFISERIES', 'TRADITION', 'CRÉATION'];

// Circle background colors for each index
const CIRCLE_COLORS = [
  'bg-red-500', // Light red for first word
  'bg-yellow-500', // Light yellow for second word
  'bg-pink-500', // Light pink for third word
  'bg-orange-500', // Light orange for fourth word
  'bg-rose-500' // Light rose for fifth word
];

const TextSlider = ({
  topWords = DEFAULT_TOP_WORDS,
  bottomWords = DEFAULT_BOTTOM_WORDS,
  speed = 1,
  pauseOnHover = true,
  className = ''
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  const controls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        staggerChildren: 0.2
      }
    }
  };

  // Item animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Circle animation variants
  const circleVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 15
      }
    },
    hover: {
      scale: 1.1,
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 0.3,
        rotate: {
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 1
        }
      }
    }
  };

  // Text animation variants
  const textVariants = {
    hover: {
      scale: 1.05,
      color: '#FF0000',
      transition: { duration: 0.2 }
    }
  };

  // Helper component for slide content with top words
  const TopSlideContent = React.memo(() => (
    <div className="flex items-center gap-6">
      {topWords.map((word, idx) => (
        <motion.div
          key={`top-${word}-${idx}`}
          className="flex items-center gap-16"
          variants={itemVariants}
          whileHover="hover"
        >
          <motion.span
            className="text-xl font-custom font-bold md:text-xl lg:text-2xl text-gray-800 uppercase whitespace-nowrap"
            variants={textVariants}
          >
            {word}
          </motion.span>
          <motion.div
            className={`w-14 h-14 rounded-full flex items-center justify-center mr-6 ${CIRCLE_COLORS[idx % CIRCLE_COLORS.length]}`}
            variants={circleVariants}
            whileHover="hover"
          >
            <motion.img
              src={WORD_ICONS[word] || macaoLogoRed}
              alt={word}
              className="w-8 h-8"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  ));

  // Helper component for slide content with bottom words
  const BottomSlideContent = React.memo(() => (
    <div className="flex items-center gap-6">
      {bottomWords.map((word, idx) => (
        <motion.div
          key={`bottom-${word}-${idx}`}
          className="flex items-center gap-16"
          variants={itemVariants}
          whileHover="hover"
        >
          <motion.div
            className={`w-14 h-14 rounded-full flex items-center justify-center ml-6  ${CIRCLE_COLORS[(idx + 2) % CIRCLE_COLORS.length]}`}
            variants={circleVariants}
            whileHover="hover"
          >
            <motion.img
              src={WORD_ICONS[word] || macaoLogoRed}
              alt={word}
              className="w-8 h-8"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
            />
          </motion.div>
          <motion.span
            className="text-xl font-custom font-bold md:text-2xl lg:text-2xl text-gray-800 uppercase whitespace-nowrap"
            variants={textVariants}
          >
            {word}
          </motion.span>
        </motion.div>
      ))}
    </div>
  ));

  // Calculate appropriate width to ensure smooth scrolling
  const calculateContentWidth = () => {
    return {
      minWidth: 'max-content'
    };
  };

  // Calculate animation duration based on speed
  const animationDuration = `${speed * 3}s`;
  const reverseAnimationDuration = `${speed * 3}s`;

  const topSlideStyles = {
    animation: `scroll ${animationDuration} linear infinite`,
    animationPlayState: isPaused ? 'paused' : 'running',
    willChange: 'transform'
  };

  const bottomSlideStyles = {
    animation: `scrollReverse ${reverseAnimationDuration} linear infinite`,
    animationPlayState: isPaused ? 'paused' : 'running',
    willChange: 'transform'
  };

  return (
    <motion.div
      ref={containerRef}
      className={`relative pt-20 pb-14 md:py-16 w-full overflow-hidden bg-white  ${className}`}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      {/* Gradient Edges */}
      <motion.div
        className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      />
      <motion.div
        className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      />

      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-35%));
            }
          }
          @keyframes scrollReverse {
            0% {
              transform: translateX(calc(-35%));
            }
            100% {
              transform: translateX(0);
            }
          }

          @keyframes pulse {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
            100% {
              transform: scale(1);
            }
          }
        `}
      </style>

      {/* Top Slider Track */}
      <motion.div className="relative py-6 overflow-hidden " variants={itemVariants}>
        <div className="flex whitespace-nowrap" style={{ ...topSlideStyles, ...calculateContentWidth() }}>
          {/* We need two sets to create a seamless loop effect */}
          <div className="flex shrink-0">
            <TopSlideContent />
          </div>
          <div className="flex shrink-0">
            <TopSlideContent />
          </div>
        </div>
      </motion.div>

      {/* Bottom Slider Track - Moving in opposite direction */}
      <motion.div className="relative py-6 overflow-hidden" variants={itemVariants}>
        <div className="flex whitespace-nowrap" style={{ ...bottomSlideStyles, ...calculateContentWidth() }}>
          {/* We need two sets to create a seamless loop effect */}
          <div className="flex shrink-0">
            <BottomSlideContent />
          </div>
          <div className="flex shrink-0">
            <BottomSlideContent />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default React.memo(TextSlider);
