import macaoImageLarge from '@/assets/images/logo_large.png';
import { cn } from 'ui';

type LargeLogoProps = {
  className?: string;
};
export function LargeLogo({ className }: LargeLogoProps) {
  return <img src={macaoImageLarge} className={cn('!size-16 object-fit rounded-md ', className)} />;
}
