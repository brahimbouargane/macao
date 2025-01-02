import Carousel1 from '@/assets/images/carousel-1.png';
import Carousel2 from '@/assets/images/carousel-2.png';
import Carousel3 from '@/assets/images/carousel-3.png';
import choco from '@/assets/images/chocochips.png';
import mobileChoco from '@/assets/images/MOBIL-CHOCO.png';
import toffit from '@/assets/images/tofitta.png';
import trail from '@/assets/images/trial-one.png';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const HeroSlide = () => {
  const [rotate, setRotate] = useState(0);
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState('left');

  const items = [
    {
      id: 1,
      image: Carousel1,
      name: 'pâtisserie',
      gradient: 'linear-gradient(135deg, #DC143C 0%, #FF69B4 50%, #FFC0CB 100%)',
      textGradient: 'linear-gradient(135deg, #F8C3CD 0%, #FFE5EE 50%, #FFC0CB 100%)',
      desktopImage: choco,
      mobileImage: mobileChoco
    },
    {
      id: 2,
      image: Carousel3,
      name: 'CONFISERIE',
      gradient: 'linear-gradient(135deg, #FF69B4 0%, #800080 50%, #4B0082 100%)',
      textGradient: 'linear-gradient(135deg, #FFB6C1 0%, #DA70D6 50%, #FFF0F5 100%)',
      desktopImage: toffit
    },
    {
      id: 3,
      image: Carousel2,
      name: 'chocolat',
      gradient: 'linear-gradient(135deg, #8B4513 0%, #975C1C 25%, #C19435 50%, #FFD700 100%)',
      textGradient: 'linear-gradient(135deg, #FFD700 0%, #FFF8DC 50%, #FFE4B5 100%)',
      desktopImage: trail
    },
    {
      id: 4,
      image: Carousel1,
      name: 'pâtisserie',
      gradient: 'linear-gradient(135deg, #DC143C 0%, #FF69B4 50%, #FFC0CB 100%)',
      textGradient: 'linear-gradient(135deg, #F8C3CD 0%, #FFE5E5 50%, #FFC0CB 100%)',
      desktopImage: choco
    },
    {
      id: 5,
      image: Carousel3,
      name: 'CONFISERIE',
      gradient: 'linear-gradient(135deg, #FF69B4 0%, #800080 50%, #4B0082 100%)',
      textGradient: 'linear-gradient(135deg, #FFB6C1 0%, #DA70D6 50%, #FFF0F5 100%)',

      desktopImage: toffit
    },
    {
      id: 6,
      image: Carousel2,
      name: 'chocolat',
      gradient: 'linear-gradient(135deg, #8B4513 0%, #975C1C 25%, #C19435 50%, #FFD700 100%)',
      textGradient: 'linear-gradient(135deg, #FFD700 0%, #FFF8DC 50%, #FFE4B5 100%)',
      desktopImage: trail
    }
  ];

  const countItem = items.length;
  const rotateAdd = 360 / countItem;
  const radius = 230;

  const slideVariants = {
    enter: (direction: string) => ({
      y: direction === 'right' ? -100 : 100,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1
    },
    exit: (direction: string) => ({
      zIndex: 0,
      y: direction === 'right' ? 100 : -100,
      opacity: 0
    })
  };

  const nextSlider = () => {
    setDirection('left');
    // Use modulo with original items length
    setActive((active + 1) % items.length);
    setRotate(rotate + rotateAdd);
  };

  const prevSlider = () => {
    setDirection('right');
    // Use modulo with original items length
    setActive((active - 1 + items.length) % items.length);
    setRotate(rotate - rotateAdd);
  };

  useEffect(() => {
    const normalizedRotation = ((rotate % 360) + 360) % 360; // Ensure positive angle
    const activeIndex = Math.round(normalizedRotation / rotateAdd) % countItem;
    setActive((countItem - activeIndex) % countItem);
  }, [rotate, countItem, rotateAdd]);

  // Add autoplay effect
  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       nextSlider();
  //     }, 4000); // 4000ms = 3 seconds

  //     // Cleanup on component unmount
  //     return () => clearInterval(interval);
  //   }, [rotate]); // Add rotate as dependency to ensure smooth transitions

  //   // Add hover pause functionality (optional)
  //   const [isHovered, setIsHovered] = useState(false);

  //   useEffect(() => {
  //     if (isHovered) return; // Don't set interval if hovered

  //     const interval = setInterval(() => {
  //       nextSlider();
  //     }, 4000);

  //     return () => clearInterval(interval);
  //   }, [isHovered, rotate]);

  return (
    <div
      className="relative h-screen w-full overflow-hidden"
      //   onMouseEnter={() => setIsHovered(true)}
      //   onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-full w-full">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={active}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              y: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute h-full w-full flex flex-col"
            style={{
              background: items[active].gradient
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full flex justify-center pt-16 md:pt-32 px-4"
            >
              <h1
                className="z-50 mt-10  text-6xl lg:text-9xl font-bold uppercase leading-none bg-clip-text text-transparent"
                style={{
                  backgroundImage: items[active].textGradient,
                  WebkitBackgroundClip: 'text',
                  filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.1))'
                }}
              >
                {items[active].name}
              </h1>
            </motion.div>

            {/* Image Container */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 20,
                delay: 0.2
              }}
              className="flex-1 relative "
            >
              {/* Desktop Image */}
              <img
                src={items[active].desktopImage}
                alt={items[active].name}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[60%] w-[150%] h-[200%] lg:h-[1500px] pointer-events-none object-contain hidden md:block"
              />
              {/* Mobile Image */}
              <img
                src={items[active].mobileImage}
                alt={items[active].name}
                className="absolute left-1/2 top-[53%] -translate-x-1/2 -translate-y-[60%] w-[150%] h-[200%] lg:h-[1500px] pointer-events-none object-contain md:hidden"
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
        <div
          className="absolute z-40 bottom-0 left-1/2 w-[1300px] h-[1300px] rounded-full transition-transform duration-500 ease-in-out"
          style={{
            transform: `translate(-50%, 71%) rotate(${rotate}deg)`
          }}
        >
          {items.map((item, index) => {
            const itemAngle = (360 / countItem) * index;

            return (
              <div
                key={item.id}
                className="absolute w-full h-full text-center origin-center"
                style={{
                  transform: `rotate(${itemAngle}deg) translateY(-${radius}px) `
                }}
              >
                <div
                  className="absolute left-1/2 top-20 lg:-top-6 transform -translate-x-1/2"
                  style={{
                    transform: `translateX(-50%) rotate(0}deg`,
                    opacity: active === index ? 1 : 0.4,
                    transition: 'all 0.5s ease-in-out'
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className={`${active === index ? 'h-[17rem] lg:h-[30rem] ' : 'h-40 lg:h-60'}  object-contain transition-all duration-1000`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={prevSlider}
          className="absolute left-5 top-1/2 z-50 h-12 w-12 -translate-y-1/2 rounded-full border border-white/60 bg-white/30 text-xl text-white transition-colors hover:bg-white/40"
        >
          &#8249;
        </button>
        <button
          onClick={nextSlider}
          className="absolute right-5 top-1/2 z-50 h-12 w-12 -translate-y-1/2 rounded-full border border-white/60 bg-white/30 text-xl text-white transition-colors hover:bg-white/40"
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default HeroSlide;
