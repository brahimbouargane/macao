import { Button } from '@/components/ui';
import { AppLayout } from '@/layouts';
import { PagePropsData } from '@/types';
import __ from '@/utils/translations';
import { Link, usePage } from '@inertiajs/react';

import macaoImage from '@/assets/images/macao_logo.jpg'
import { FaBackspace, FaHome } from 'react-icons/fa';
import { RiArrowGoBackFill } from 'react-icons/ri';

export default function ErrorPage({ status }) {
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
    <main className="relative flex flex-col items-center justify-center w-full h-full text-xl bg-red-500 max-md:px-6">
      <img src={macaoImage} alt="macao logo" className="mb-8" />
      <div className="relative">
        <h1 className="font-extrabold tracking-widest text-red-300 text-[10rem]">{status}</h1>
        <span className="top-[50%] left-[20%]  bg-primary px-2 text-sm rounded rotate-12 text-white    absolute">
          {__(translations, title)}
        </span>
      </div>
      <p className="bg-primary/80 max-w-[800px] p-2  rounded mt-24 mb-4  text-white">{__(translations, description)}</p>
      <div className="flex gap-4">
        <Button className="mt-5 transition-all duration-200 hover:-rotate-3">
          <Link href="#" className="flex items-center justify-between gap-2" onClick={() => window.history.back()}>
            {__(translations, 'Go Back')}
            <FaBackspace className="size-6" />
          </Link>
        </Button>
        <Button className="mt-5 transition-all duration-200 hover:-rotate-3">
          <Link href="/" className="flex items-center justify-between gap-2">
            {__(translations, 'Go Home')}
            <FaHome className="size-6" />
          </Link>
        </Button>
      </div>
    </main>
  );
}

// ErrorPage.layout = (page: any) => <AppLayout children={page} />;
