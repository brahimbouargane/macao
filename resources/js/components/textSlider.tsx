import macaoLogoRed from '@/assets/images/macoa-logo-small.svg';
import React, { useState } from 'react';

type TextSliderProps = {
  words?: string[];
  speed?: number;
  pauseOnHover?: boolean;
  className?: string;
};

const DEFAULT_WORDS = ['SAVEUR', 'SUCRÉ', 'PÂTISSERIE', 'GÂTEAUX', 'BONBONS'];

const TextSlider = ({ words = DEFAULT_WORDS, speed = 40, pauseOnHover = true, className = '' }) => {
  const [isPaused, setIsPaused] = useState(false);

  // Helper component for slide content
  const SlideContent = React.memo(() => (
    <div className="flex items-center gap-8">
      {words.map((word, idx) => (
        <div key={`${word}-${idx}`} className="flex items-center gap-10">
          <span className="text-4xl md:text-5xl lg:text-4xl font-light text-gray-800 uppercase whitespace-nowrap">
            {word}
          </span>
          <img src={macaoLogoRed} alt="Logo" className="w-10 h-10" />
        </div>
      ))}
    </div>
  ));

  // Calculate animation duration based on speed
  const animationDuration = `${speed}s`;

  const slideStyles = {
    animation: `scroll ${animationDuration} linear infinite`,
    animationPlayState: isPaused ? 'paused' : 'running'
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

      {/* Slider Track */}
      <div className="relative py-12 overflow-hidden">
        <style>
          {`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
          `}
        </style>

        <div className="flex whitespace-nowrap" style={slideStyles}>
          <div className="flex shrink-0">
            <SlideContent />
          </div>
          <div className="flex shrink-0">
            <SlideContent />
          </div>
          <div className="flex shrink-0">
            <SlideContent />
          </div>
          <div className="flex shrink-0">
            <SlideContent />
          </div>
          <div className="flex shrink-0">
            <SlideContent />
          </div>
          <div className="flex shrink-0">
            <SlideContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(TextSlider);
