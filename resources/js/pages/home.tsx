import Category3DCarousel from '@/components/categoriesSection';
import ContactHome from '@/components/ContactHome';
import DisplaySection from '@/components/displaySection';
import PralineAdvertisement from '@/components/newAbout';
import ProductShowcase from '@/components/newProductsSection';
import TextSlider from '@/components/textSlider';

import { GuestLayout } from '@/layouts';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);
  return (
    <>
      {/* <HeroSlide /> */}
      <Category3DCarousel />
      <div className="w-full">
        <TextSlider speed={8} pauseOnHover={true} />
      </div>
      <PralineAdvertisement />
      <ProductShowcase />
      <DisplaySection />
      <ContactHome />
    </>
  );
}

Home.layout = (page: any) => <GuestLayout children={page} />;
