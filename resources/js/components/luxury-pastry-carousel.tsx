import { cn } from '@/utils/classes';
import { Link } from '@inertiajs/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from './ui/shadcn-button';

import Carousel1 from '@/assets/images/carousel-1.png';
import Carousel2 from '@/assets/images/carousel-2.png';
import Carousel3 from '@/assets/images/carousel-3.png';

export default function LuxuryPastryCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      image: Carousel1,
      title: 'Chocolat Fin, Pur Plaisir',
      description: 'Handcrafted with the finest cocoa beans',
      cta: 'Discover Our Collection',
      link: '/collection/chocolate'
    },
    {
      image: Carousel2,
      title: 'Macarons Délicats',
      description: 'A symphony of flavors and colors',
      cta: 'Explore Flavors',
      link: '/collection/macarons'
    },
    {
      image: Carousel3,
      title: 'Pâtisserie Artisanale',
      description: 'The art of French pastry making',
      cta: 'View Our Pastries',
      link: '/collection/pastries'
    }
  ];

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentSlide, isTransitioning]);

  return (
    <section className="relative w-full h-[90vh] overflow-hidden bg-neutral-50">
      {/* Carousel */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={cn(
              'absolute inset-0 transition-opacity duration-1000 ease-in-out',
              currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
            )}
          >
            {/* Background Image with Parallax Effect */}
            <div
              className="absolute inset-0 bg-cover bg-center transform scale-110 transition-transform duration-[10s] ease-out"
              style={{
                backgroundImage: `url(${slide.image})`,
                transform: `scale(${currentSlide === index ? 1.05 : 1.1})`
              }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]" />

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center text-white">
              <h2
                className={cn(
                  'font-serif text-4xl md:text-5xl lg:text-6xl font-light tracking-wide mb-3 transition-all duration-1000',
                  currentSlide === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                )}
              >
                {slide.title}
              </h2>
              <p
                className={cn(
                  'font-light text-lg md:text-xl max-w-md mb-8 transition-all duration-1000 delay-300',
                  currentSlide === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                )}
              >
                {slide.description}
              </p>
              <Link
                href={slide.link}
                className={cn(
                  'inline-block transition-all duration-1000 delay-500',
                  currentSlide === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                )}
              >
                <Button
                  variant="outline"
                  className="bg-transparent border border-white text-white hover:bg-white hover:text-black transition-colors px-8 py-6 text-sm rounded-none"
                >
                  {slide.cta}
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              'w-2 h-2 rounded-full transition-all duration-300',
              currentSlide === index ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/80'
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
