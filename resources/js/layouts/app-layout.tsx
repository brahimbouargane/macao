import { useTheme } from '@/components/theme-provider';
import { AppNavbar } from '@/layouts/app-navbar';
import { PagePropsData } from '@/types';
import { usePage } from '@inertiajs/react';
import { FlashMessage } from 'components/flash-message';
import { Footer } from 'components/footer';
import { PropsWithChildren, useLayoutEffect } from 'react';

export function AppLayout({ children }: PropsWithChildren) {
  const { setTheme } = useTheme();
  const {
    props: { auth }
  } = usePage<PagePropsData>();
  useLayoutEffect(() => {
    // change the theme to light if  user  leaves the dashboard

    if (!window.location.pathname.includes('dashboard')) {
      setTheme('light');
    }
  }, [window.location.href]);
  return (
    <div>
      <FlashMessage />
      <AppNavbar>{children}</AppNavbar>
      <Footer />
    </div>
  );
}
