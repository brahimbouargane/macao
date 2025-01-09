import Footer from '@/components/footer';
import Navbar from '@/components/navBar';
import ScrollToTopButton from '@/components/scrollUp';
import SEO from '@/components/seo';
import { Head } from '@inertiajs/react';
import { PropsWithChildren, ReactNode } from 'react';

interface GuestLayoutProps {
  header?: string | null;
  description?: string | ReactNode | null;
}

export function GuestLayout({ description = null, header = null, children }: PropsWithChildren<GuestLayoutProps>) {
  return (
    <>
      <SEO
        title="Macao - Artisanal Confectionery & Patisserie"
        description="Discover our exquisite collection of artisanal candies, chocolates, and patisserie crafted with passion and tradition."
        keywords="artisanal chocolate, luxury confectionery, patisserie, candy, desserts, Macao"
      />
      <Head title="Macao" />
      <Navbar />

      <div>{children}</div>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
