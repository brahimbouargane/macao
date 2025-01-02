import frFlag from '@/assets/images/fr_flag.svg';
import ukFlag from '@/assets/images/uk_flag.svg';
import { PagePropsData } from '@/types';
import __ from '@/utils/translations';
import { Link, usePage } from '@inertiajs/react';
import { Tooltip } from './ui';

type LanguageSelectorProps = {
  currentLocale: string;
};

export default function LanguageSelector({ currentLocale }: LanguageSelectorProps) {
  const selectableLocale = currentLocale === 'en' ? 'fr' : 'en';
  const translations = usePage<PagePropsData>().props.translations;

  return (
    <Tooltip delay={0} closeDelay={0}>
      <Tooltip.Trigger>
        <Link href={`/language/${selectableLocale}`} className="flex items-center w-full p-2 gap-x-4">
          <img src={selectableLocale == 'en' ? frFlag : ukFlag} alt={`${selectableLocale} flag`} className="w-5 h-5" />
        </Link>
      </Tooltip.Trigger>
      <Tooltip.Content placement="left" showArrow={true}>
        {__(translations, selectableLocale == 'en' ? 'Change lang to English' : 'Change lang to French')}
      </Tooltip.Content>
    </Tooltip>
  );
}
