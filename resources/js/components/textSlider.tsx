import macaoLogoRed from '@/assets/images/macoa-logo-small.svg';
import React, { useState } from 'react';

type TextSliderProps = {
  topWords?: string[];
  bottomWords?: string[];
  speed?: number;
  pauseOnHover?: boolean;
  className?: string;
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

  // Helper component for slide content with top words
  const TopSlideContent = React.memo(() => (
    <div className="flex items-center gap-8">
      {topWords.map((word, idx) => (
        <div key={`top-${word}-${idx}`} className="flex items-center gap-10">
          <span className="text-4xl font-custom font-bold md:text-5xl lg:text-4xl  text-gray-800 uppercase whitespace-nowrap">
            {word}
          </span>
          <div
            className={`w-16 h-16 rounded-full flex items-center justify-center ${CIRCLE_COLORS[idx % CIRCLE_COLORS.length]}`}
          >
            <img src={macaoLogoRed} alt="Logo" className="w-10 h-10" />
          </div>
        </div>
      ))}
    </div>
  ));

  // Helper component for slide content with bottom words
  const BottomSlideContent = React.memo(() => (
    <div className="flex items-center gap-8">
      {bottomWords.map((word, idx) => (
        <div key={`bottom-${word}-${idx}`} className="flex items-center gap-10">
          <div
            className={`w-16 h-16 rounded-full flex items-center justify-center ${CIRCLE_COLORS[(idx + 2) % CIRCLE_COLORS.length]}`}
          >
            <img src={macaoLogoRed} alt="Logo" className="w-10 h-10" />
          </div>
          <span className="text-4xl font-custom font-bold md:text-5xl lg:text-4xl  text-gray-800 uppercase whitespace-nowrap">
            {word}
          </span>
        </div>
      ))}
    </div>
  ));

  // Function to calculate appropriate width to ensure smooth scrolling
  const calculateContentWidth = () => {
    // This is a runtime calculation that helps ensure the animation is smooth
    return {
      // We need to apply this to ensure the animation is calculated properly
      minWidth: 'max-content'
    };
  };

  // Calculate animation duration based on speed
  const animationDuration = `${speed * 3}s`;
  const reverseAnimationDuration = `${speed * 3}s`; // Slightly different speed for visual interest

  const topSlideStyles = {
    animation: `scroll ${animationDuration} linear infinite`,
    animationPlayState: isPaused ? 'paused' : 'running',
    willChange: 'transform' // Performance optimization
  };

  const bottomSlideStyles = {
    animation: `scrollReverse ${reverseAnimationDuration} linear infinite`,
    animationPlayState: isPaused ? 'paused' : 'running',
    willChange: 'transform' // Performance optimization
  };

  return (
    <div
      className={`relative w-full overflow-hidden bg-white ${className}`}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      {/* Gradient Edges */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

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
        `}
      </style>

      {/* Top Slider Track */}
      <div className="relative py-6 overflow-hidden border-b border-gray-100">
        <div className="flex whitespace-nowrap" style={{ ...topSlideStyles, ...calculateContentWidth() }}>
          {/* We need two sets to create a seamless loop effect */}
          <div className="flex shrink-0">
            <TopSlideContent />
          </div>
          <div className="flex shrink-0">
            <TopSlideContent />
          </div>
        </div>
      </div>

      {/* Bottom Slider Track - Moving in opposite direction */}
      <div className="relative py-6 overflow-hidden">
        <div className="flex whitespace-nowrap" style={{ ...bottomSlideStyles, ...calculateContentWidth() }}>
          {/* We need two sets to create a seamless loop effect */}
          <div className="flex shrink-0">
            <BottomSlideContent />
          </div>
          <div className="flex shrink-0">
            <BottomSlideContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(TextSlider);
