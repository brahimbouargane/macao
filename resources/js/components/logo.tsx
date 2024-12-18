import React from 'react';
import { cn } from 'ui';
import macaoImage from '@/assets/images/macao_logo.jpg'

type LogoProps  = {
  className? : string
}
export function Logo({  className}:LogoProps) {
  return <img src={macaoImage} className={cn('!size-16 object-fit rounded-md ', className)} />;
}
