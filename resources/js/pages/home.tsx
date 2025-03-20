import PastorMacaoHero from '@/components/aboutUs';
import CategoryGrid from '@/components/categoriesSection';
import ContactSection from '@/components/contactUs';
import DisplaySection from '@/components/displaySection';
import LuxuryPastryHero from '@/components/luxury-pastry-hero';
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
      {/* <HeroSlide /> */}
      <LuxuryPastryHero />
      <div className="flex min-h-screen flex-col">
        <CategoryGrid />
        <div className="w-full">
          <TextSlider speed={8} pauseOnHover={true} />
        </div>
        <PastorMacaoHero />
        <BestSellers />

        <DisplaySection />
        <Container>
          <ContactSection id="contact" />
        </Container>
      </div>
    </>
  );
}

Home.layout = (page: any) => <GuestLayout children={page} />;
