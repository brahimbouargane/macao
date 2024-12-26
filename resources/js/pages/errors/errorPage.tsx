import { Button } from '@/components/ui';
import { AppLayout } from '@/layouts';
import { PagePropsData } from '@/types';
import __ from '@/utils/translations';
import { Link, usePage } from '@inertiajs/react';

export default function ErrorPage({ status }) {
  console.log('I WAS HERRE §§§§§§§§§§§§');
  const translations = usePage<PagePropsData>().props.translations;
  const title = {
    503: '503: Service Unavailable',
    500: '500: Server Error',
    404: '404: Page Not Found',
    403: '403: Forbidden'
  }[status];

  const description = {
    503: 'Sorry, we are doing some maintenance. Please check back soon.',
    500: 'Whoops, something went wrong on our servers.',
    404: 'Sorry, the page you are looking for could not be found.',
    403: 'Sorry, you are forbidden from accessing this page.'
  }[status];

  console.log('🚀 ~ ErrorPage ~ description.status:', status);

  return (
    <main className="h-[calc(100vh-64px)] w-full flex flex-col justify-center items-center max-md:px-6   text-xl bg-red-500">
      <div className="relative">
        <h1 className="font-extrabold tracking-widest text-red-300 text-[10rem]">{status}</h1>
        <span className="top-[50%] left-[20%]  bg-primary px-2 text-sm rounded rotate-12 text-white    absolute">
          {__(translations, title)}
        </span>
      </div>
      <p className="bg-primary/80 max-w-[800px] p-2  rounded mt-24 mb-4  text-white">{__(translations, description)}</p>
      <Button className="mt-5 transition-all duration-200 hover:-rotate-3">
        <Link href="/">{__(translations, 'Go Home')}</Link>
      </Button>
    </main>
  );
}

ErrorPage.layout = (page: any) => <AppLayout children={page} />;
