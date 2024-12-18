import {  Carousel, Container } from '@/components/ui';
import { Head } from '@inertiajs/react';
import { Logo } from 'components/logo';

import { AppLayout } from 'layouts';


export default function Home() {
  return (
    <>
      <Head title="Macao" />
      <Container>
        <div className="overflow-hidden rounded-lg border lg:border-border border-transparent">
      <Logo/>
      <Carousel className="w-full [&_.xrkr]:h-56 [&_.xrkr]:overflow-hidden [&_.xrkr]:flex [&_.xrkr]:flex-col max-w-xs">
  <Carousel.Content>
    <Carousel.Item className="basis-1/2">1</Carousel.Item>
    <Carousel.Item className="basis-1/2">2</Carousel.Item>
    <Carousel.Item className="basis-1/2">3</Carousel.Item>
  </Carousel.Content>
 
  <Carousel.Handler>
    <Carousel.Button slot="previous" />
    <Carousel.Button slot="next" />
  </Carousel.Handler>
</Carousel>
        </div>
      </Container>
    </>
  );
}

Home.layout = (page: any) => <AppLayout children={page} />;
