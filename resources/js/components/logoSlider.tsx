interface Logo {
  src: string;
  alt: string;
}

interface LogoSliderProps {
  logos: Logo[];
  speed?: number;
  pauseOnHover?: boolean;
}

export default function LogoSlider({ logos, speed = 40, pauseOnHover = true }: LogoSliderProps) {
  // Ensure we have enough logos for a smooth scroll
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="w-full relative overflow-hidden bg-white">
      {/* Gradient Overlays */}

      {/* Main Slider */}
      <div className="relative flex py-12 w-max">
        {/* First Scroll Track */}
        <div
          className={`flex gap-16 animate-scroll ${pauseOnHover ? 'hover:[animation-play-state:paused]' : ''}`}
          style={{
            animationDuration: `${speed}s`,
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite'
          }}
        >
          {duplicatedLogos.map((logo, idx) => (
            <div key={`${logo.alt}-${idx}`} className="flex-shrink-0 w-48 h-24 bg-white rounded-lg shadow-sm p-4">
              <img src={logo.src} alt={logo.alt} className="w-full h-full object-contain" draggable={false} />
            </div>
          ))}
        </div>

        {/* Duplicate Track for Seamless Loop */}
        <div
          className={`flex gap-16 animate-scroll ${pauseOnHover ? 'hover:[animation-play-state:paused]' : ''}`}
          style={{
            animationDuration: `${speed}s`,
            animationTimingFunction: 'linear',
            animationIterationCount: 'infinite'
          }}
        >
          {duplicatedLogos.map((logo, idx) => (
            <div
              key={`${logo.alt}-duplicate-${idx}`}
              className="flex-shrink-0 w-48 h-24 bg-white rounded-lg shadow-sm p-4"
            >
              <img src={logo.src} alt={logo.alt} className="w-full h-full object-contain" draggable={false} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
