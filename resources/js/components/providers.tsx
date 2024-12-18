import { PagePropsData } from '@/types';
import { router, usePage } from '@inertiajs/react';
import { ThemeProvider } from 'components/theme-provider';
import React from 'react';
import { RouterProvider } from 'react-aria-components';

export function Providers({ children }: { children: React.ReactNode }) {


  return (
    <RouterProvider navigate={(to, options) => router.visit(to, options as any)}>
      <>{children}</>
    </RouterProvider>
  );
}
