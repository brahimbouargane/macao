import Footer from '@/components/footer';
import Header from '@/components/newHeroCarousel';
import SEO from '@/components/seo';
import { Head } from '@inertiajs/react';
import { PropsWithChildren, ReactNode } from 'react';

interface NewLayout {
  header?: string | null;
  description?: string | ReactNode | null;
}

export function NewLayout({ description = null, header = null, children }: PropsWithChildren<NewLayout>) {
  return (
    <>
      <SEO
        title="Macao - Artisanal Confectionery & Patisserie"
        description="Discover our exquisite collection of artisanal candies, chocolates, and patisserie crafted with passion and tradition."
        keywords="artisanal chocolate, luxury confectionery, patisserie, candy, desserts, Macao"
      />
      <Head title="Macao" />
      <Header />

      <div>{children}</div>
      <Footer />
    </>
  );
}
