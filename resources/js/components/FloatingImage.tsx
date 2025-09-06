import { motion } from 'framer-motion';

interface FloatingImageProps {
  image: string;
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  activeItem: number;
}

const FloatingImage: React.FC<FloatingImageProps> = ({ image, position, activeItem }) => {
  const getPositionStyles = () => {
    const defaultPositions = {
      'top-left': 'top-28 left-12 md:top-28 md:left-[22rem] lg:top-28 lg:left-[35rem] ',
      'top-right': 'top-24 right-12 md:top-28 md:right-[21rem]  lg:top-28 lg:right-[29rem]  ',
      'bottom-left': 'bottom-40 left-12 md:bottom-[4rem] md:left-[25rem] lg:bottom-[4rem] lg:left-[36rem] ',
      'bottom-right': 'bottom-40 right-12 md:bottom-32 md:right-[25rem] lg:bottom-32 lg:right-[35rem] '
    };

    const item1Positions = {
      'top-left': 'top-28 left-12 md:top-28 md:left-[30rem] lg:top-28 lg:left-[40rem]',
      'top-right': 'top-20 right-12 md:top-28 md:right-[22rem] lg:top-28 lg:right-[34rem]',
      'bottom-left': 'bottom-40 left-12 md:bottom-[6rem] md:left-[35rem] lg:bottom-[6rem] lg:left-[40rem]',
      'bottom-right': 'bottom-40 right-12 md:bottom-32 md:right-[35rem] lg:bottom-32 lg:right-[40rem]'
    };

    return activeItem === 0 ? item1Positions : defaultPositions;
  };

  const positionStyles = getPositionStyles();

  const getRotateValues = () => {
    if (activeItem === 0) {
      return {
        'top-left': -25,
        'top-right': 30,
        'bottom-left': 120,
        'bottom-right': 20
      };
    } else if (activeItem === 1) {
      return {
        'top-left': -25,
        'top-right': 30,
        'bottom-left': 10,
        'bottom-right': 20
      };
    } else if (activeItem === 2) {
      return {
        'top-left': -25,
        'top-right': 60,
        'bottom-left': -120,
        'bottom-right': -20
      };
    }
  };

  ({
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
  })[activeItem][position];

  const rotateValues = getRotateValues();

  const sizeClasses = {
    'top-left': 'w-28 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 	',
    'top-right': 'w-28 h-48 md:w-64 md:h-64 lg:w-80 lg:h-56',
    'bottom-left': 'w-28 h-48 md:w-64 md:h-64 lg:w-30 lg:h-56 ',
    'bottom-right': 'w-28 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 	'
  };

  const appearAnimation = {
    initial: {
      opacity: 0,
      scale: 0.5
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 1, // Delay after main image appears
        duration: 1.2,
        ease: 'easeOut'
      }
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      transition: {
        duration: 0.5,
        ease: 'easeIn'
      }
    }
  };

  // Combine floating and appear animations
  const combinedAnimation = {
    ...appearAnimation.animate,
    y: ['-10px', '10px'],
    rotate: rotateValues[position],
    transition: {
      opacity: {
        delay: 1,
        duration: 1.2
      },
      scale: {
        delay: 1,
        duration: 1.2
      },
      y: {
        delay: 1, // Start floating after appearance
        duration: 4,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut'
      }
    }
  };

  return (
    <motion.div
      className={`absolute ${positionStyles[position]} z-30 `}
      initial={appearAnimation.initial}
      animate={combinedAnimation}
      exit={appearAnimation.exit}
    >
      <img
        src={image}
        alt="Floating product"
        className={`${sizeClasses[position]} object-contain rounded-lg  `}
        style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))' }}
      />
    </motion.div>
  );
};

export default FloatingImage;
