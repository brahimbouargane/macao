import { PagePropsData } from '@/types';
import { router, usePage } from '@inertiajs/react';
import { ThemeProvider } from 'components/theme-provider';
import React from 'react';
import { RouterProvider } from 'react-aria-components';
import { Toaster } from 'react-hot-toast';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <RouterProvider navigate={(to, options) => router.visit(to, options as any)}>
      <ThemeProvider>{children}</ThemeProvider>
      <Toaster toastOptions={{ className: 'dark:bg-accent dark:text-white dark:border-white border-[1px]' }} />
    </RouterProvider>
  );
}
