import { Link } from '@inertiajs/react';
import frFlag from '@/assets/images/fr_flag.svg' 
import ukFlag from '@/assets/images/uk_flag.svg' 

type LanguageSelectorProps = {
  currentLocale: string
}

export default function LanguageSelector({ currentLocale }:LanguageSelectorProps) {
    const selectableLocale = currentLocale === 'en' ? 'fr' : 'en';
    return (
        <div className="ml-4 ">
            <Link href={`/language/${selectableLocale}`} className="flex items-center w-full p-2 gap-x-4">
                <img
                    src={selectableLocale == 'en' ? ukFlag : frFlag}
                    alt={`${selectableLocale} flag`}
                    className="w-5 h-5"
                />
            </Link>
        </div>
    );
}
