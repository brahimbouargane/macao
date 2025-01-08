import PastorMacaoHero from '@/components/aboutUs';
import CategoryGrid from '@/components/categoriesSection';
import ContactSection from '@/components/contactUs';
import DisplaySection from '@/components/displaySection';
import { Footer } from '@/components/footer';
import HeroSlide from '@/components/heroCarousel';
import { Navbar } from '@/components/navBar';
import BestSellers from '@/components/productsSection';
import SEO from '@/components/seo';
import TextSlider from '@/components/textSlider';
import { Container } from '@/components/ui';
import { Head } from '@inertiajs/react';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);
  return (
    <>
      <SEO
        title="Macao - Artisanal Confectionery & Patisserie"
        description="Discover our exquisite collection of artisanal candies, chocolates, and patisserie crafted with passion and tradition."
        keywords="artisanal chocolate, luxury confectionery, patisserie, candy, desserts, Macao"
      />
      <Head title="Macao" />
      <Navbar />
      <HeroSlide />
      <div className="flex min-h-screen flex-col">
        {/* Contained sections */}
        <Container>
          <CategoryGrid />
        </Container>
        {/* Full-width section */}

        <div className="w-full">
          <TextSlider speed={8} pauseOnHover={true} />
        </div>
        <PastorMacaoHero />
        <Container>
          <BestSellers />
        </Container>

        {/* Full-width section */}
        <div className="w-full">
          <TextSlider speed={8} pauseOnHover={true} />
        </div>
        <DisplaySection />
        <Container>
          {/* <CertificatesSection /> */}
          <ContactSection />
        </Container>
        <Footer />
      </div>
    </>
  );
}

// Home.layout = (page: any) => <AppLayout children={page} />;
