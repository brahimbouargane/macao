import {  Carousel, Container } from '@/components/ui';
import { Head } from '@inertiajs/react';
import { Logo } from 'components/logo';

import { AppLayout } from 'layouts';


export default function Home() {
  return (
    <>
      <Head title="Macao" />
      <Container>
        <div className="flex flex-col items-center justify-center pt-8 overflow-hidden border border-transparent rounded-lg lg:border-border">
          <h1 className="text-3xl text-center">WORK IN PROGRESS</h1>
          <img src="/images/progress.svg" alt="" className="h-96" />
        </div>
      </Container>
    </>
  );
}

Home.layout = (page: any) => <AppLayout children={page} />;
