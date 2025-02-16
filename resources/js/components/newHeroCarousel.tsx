import carousel1 from '@/assets/images/h1-rev-img1-2.jpeg';
import carousel2 from '@/assets/images/h1-rev-img2.jpeg';
import carousel3 from '@/assets/images/h1-rev-img3.jpeg';
import { usePage } from '@inertiajs/react';
import { useCallback, useEffect, useState } from 'react';
import Navbar from './newNavBar';

const Header = () => {
  const { url } = usePage();
  const isHomePage = url === '/newhome';
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  // Sample carousel items
  const carouselItems = [
    {
      image: carousel1,
      title: 'Discover Our Chocolates',
      description: 'Handcrafted with passion and expertise'
    },
    {
      image: carousel2,
      title: 'Artisanal Excellence',
      description: 'A tradition of quality since 1935'
    },
    {
      image: carousel3,
      title: 'Premium Selection',
      description: 'From our kitchen to your table'
    }
  ];

  const goToNextSlide = useCallback((event) => {
    event.stopPropagation();
    setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselItems.length);
  }, []);

  const goToPrevSlide = useCallback((event) => {
    event.stopPropagation();
    setCurrentSlide((prevSlide) => (prevSlide - 1 + carouselItems.length) % carouselItems.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Handle touch events for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNextSlide(new Event('swipe'));
    } else if (isRightSwipe) {
      goToPrevSlide(new Event('swipe'));
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  // If not home page, return simple header with just navbar
  if (!isHomePage) {
    return (
      <div className="relative">
        <div className="relative">
          <div className="bg-white/80 backdrop-blur-sm z-50 relative">
            <Navbar />
          </div>
        </div>
      </div>
    );
  }

  //   return (
  //     <div className="relative">
  //       {/* Hero Carousel */}
  //       <div
  //         className="absolute inset-0 h-[100vh] md:h-screen w-full overflow-hidden"
  //         onTouchStart={handleTouchStart}
  //         onTouchMove={handleTouchMove}
  //         onTouchEnd={handleTouchEnd}
  //       >
  //         {carouselItems.map((item, index) => (
  //           <div
  //             key={index}
  //             className={`absolute inset-0 transition-opacity duration-1000 ${
  //               index === currentSlide ? 'opacity-100' : 'opacity-0'
  //             }`}
  //           >
  //             <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
  //             {/* Overlay and Text */}
  //             <div className="absolute inset-0 bg-black/30">
  //               <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center">
  //                 <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-4">{item.title}</h2>
  //                 <p className="text-lg sm:text-xl md:text-2xl max-w-2xl">{item.description}</p>
  //               </div>
  //             </div>
  //           </div>
  //         ))}

  //         {/* Navigation Buttons - Hidden on mobile, visible on larger screens */}
  //         <button
  //           onClick={goToPrevSlide}
  //           className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-4
  //                    transition-all duration-300 items-center justify-center z-20 group"
  //           aria-label="Previous slide"
  //         >
  //           <div className="relative overflow-hidden ">
  //             <CustomArrow direction="left" className="group-hover:-translate-x-2 w-16 " />
  //           </div>
  //         </button>
  //         <button
  //           onClick={goToNextSlide}
  //           className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-4
  //                    transition-all duration-300 items-center justify-center z-20 group"
  //           aria-label="Next slide"
  //         >
  //           <div className="relative overflow-hidden">
  //             <CustomArrow className="group-hover:translate-x-2 w-16" />
  //           </div>
  //         </button>

  //         {/* Dots Indicator */}
  //         <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
  //           {carouselItems.map((_, index) => (
  //             <button
  //               key={index}
  //               onClick={() => setCurrentSlide(index)}
  //               className={`h-2 w-2 rounded-full transition-all ${
  //                 index === currentSlide ? 'bg-white w-6' : 'bg-white/50'
  //               }`}
  //               aria-label={`Go to slide ${index + 1}`}
  //             />
  //           ))}
  //         </div>
  //       </div>

  //       {/* Semi-transparent overlay for navbar background */}
  //       <div className="relative h-[100vh] md:h-screen">
  //         <div className="absolute top-0 left-0 right-0 bg-white/80 backdrop-blur-sm">
  //           <Navbar />
  //         </div>
  //       </div>
  //     </div>
  //   );
  return (
    <div className="relative">
      {/* Hero Carousel */}
      <div
        className="absolute inset-0 h-[100vh] md:h-screen w-full overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
            {/* Overlay and Text */}
            <div className="absolute inset-0 bg-black/30">
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 md:mb-4">{item.title}</h2>
                <p className="text-lg sm:text-xl md:text-2xl max-w-2xl">{item.description}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Buttons - Hidden on mobile, visible on larger screens */}
        <button
          onClick={goToPrevSlide}
          className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-4
                   transition-all duration-300 items-center justify-center z-20 group"
          aria-label="Previous slide"
        >
          <div className="relative overflow-hidden">
            <CustomArrow direction="left" className="group-hover:-translate-x-2 w-16" />
          </div>
        </button>
        <button
          onClick={goToNextSlide}
          className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-4
                   transition-all duration-300 items-center justify-center z-20 group"
          aria-label="Next slide"
        >
          <div className="relative overflow-hidden">
            <CustomArrow className="group-hover:translate-x-2 w-16" />
          </div>
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-6' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Semi-transparent overlay for navbar background */}
      <div className="relative h-[100vh] md:h-screen">
        <div className="absolute top-0 left-0 right-0 bg-white/80 backdrop-blur-sm">
          <Navbar />
        </div>
      </div>
    </div>
  );
};

export default Header;
const CustomArrow = ({ direction = 'right', className = '' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="70"
    viewBox="0 0 28 63"
    className={`transform transition-transform duration-300 ${direction === 'left' ? 'rotate-180' : ''} ${className}`}
  >
    <line
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeMiterlimit="10"
      x1="0"
      y1="0"
      x2="27.48"
      y2="31.485"
      className="origin-center transition-all duration-300"
    />
    <line
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeMiterlimit="10"
      x1="0"
      y1="63"
      x2="27.48"
      y2="31.515"
      className="origin-center transition-all duration-300"
    />
  </svg>
);
