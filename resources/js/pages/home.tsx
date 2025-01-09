import PastorMacaoHero from '@/components/aboutUs';
import CategoryGrid from '@/components/categoriesSection';
import ContactSection from '@/components/contactUs';
import DisplaySection from '@/components/displaySection';
import HeroSlide from '@/components/heroCarousel';
import BestSellers from '@/components/productsSection';
import TextSlider from '@/components/textSlider';
import { Container } from '@/components/ui';
import { GuestLayout } from '@/layouts';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);
  return (
    <>
      <HeroSlide />
      <div className="flex min-h-screen flex-col">
        {/* Contained sections */}
        {/* <Container>
          <CategoryGrid />
        </Container> */}
        <CategoryGrid />
        {/* Full-width section */}

        <div className="w-full">
          <TextSlider speed={8} pauseOnHover={true} />
        </div>
        <PastorMacaoHero />
        <Container>
          <BestSellers />
        </Container>

        {/* Full-width section */}
        {/* <div className="w-full">
          <TextSlider speed={8} pauseOnHover={true} />
        </div> */}
        <DisplaySection />
        <Container>
          {/* <CertificatesSection /> */}
          <ContactSection />
        </Container>
      </div>
    </>
  );
}

Home.layout = (page: any) => <GuestLayout children={page} />;
