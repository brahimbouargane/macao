import carousel1 from '@/assets/images/h1-rev-img1-2.jpeg';
import carousel2 from '@/assets/images/h1-rev-img2.jpeg';
import carousel3 from '@/assets/images/h1-rev-img3.jpeg';
import { usePage } from '@inertiajs/react';
import { useCallback, useEffect, useState } from 'react';
import HeroSlide from './heroCarousel';
import Navbar from './newNavBar';

const Header = () => {
  const { url } = usePage();
  const isHomePage = url === '/';
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
        <div className="fixed top-0  left-0 right-0 bg-transparent backdrop-blur-sm z-50">
          <Navbar />
        </div>
      </div>
    );
  }

  return (
    <div className="relative ">
      {/* Hero Carousel */}
      <HeroSlide />
      {/* <LuxuryPastryHero /> */}

      <div className="fixed top-0  left-0 right-0  z-50">
        <Navbar />
      </div>
    </div>
  );
};

export default Header;
