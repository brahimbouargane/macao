import PastorMacaoHero from '@/components/aboutUs';
import CategoryGrid from '@/components/categoriesSection';
import CertificatesSection from '@/components/certaficates';
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

export default function Home() {
  return (
    <>
      <SEO title="Macao" description="Welcome to our amazing website" keywords="keyword1, keyword2, keyword3" />
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
        <Container>
          <BestSellers />
          <PastorMacaoHero />
        </Container>

        {/* Full-width section */}
        <div className="w-full">
          <TextSlider speed={8} pauseOnHover={true} />
        </div>

        <Container>
          <DisplaySection />
          <CertificatesSection />
          <ContactSection />
        </Container>
        <Footer />
      </div>
    </>
  );
}

// Home.layout = (page: any) => <AppLayout children={page} />;
