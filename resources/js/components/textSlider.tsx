import macaoLogoRed from '@/assets/images/macoa-logo-small.svg';
import React from 'react';

type TextSliderProps = {
  words?: string[];
  speed?: number;
  pauseOnHover?: boolean;
  className?: string;
};

const DEFAULT_WORDS = ['TASTE', 'SWEET', 'BAKERY', 'WORKSHOP', 'DELIVERY', 'CAKES', 'CANDY'];

const TextSlider = ({ words = DEFAULT_WORDS, speed = 40, pauseOnHover = true, className = '' }: TextSliderProps) => {
  // Helper component for slide content
  const SlideContent = React.memo(() => (
    <div className="flex items-center gap-8">
      {words.map((word, idx) => (
        <div key={`${word}-${idx}`} className="flex items-center gap-8">
          <span className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 uppercase whitespace-nowrap">
            {word}
          </span>
          <img src={macaoLogoRed} alt="Macao Logo" className="w-10 h-10" />
        </div>
      ))}
    </div>
  ));

  // Memoize the animation style
  const animationStyle = React.useMemo(
    () =>
      ({
        '--animation-duration': `${speed}s`
      }) as React.CSSProperties,
    [speed]
  );

  return (
    <div className={`relative w-full overflow-hidden bg-white ${className}`} style={animationStyle}>
      {/* Gradient Edges */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

      {/* Slider Track */}
      <div className="relative py-12">
        <div className={`flex animate-marquee ${pauseOnHover ? 'hover:pause' : ''}`}>
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
