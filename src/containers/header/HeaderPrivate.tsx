'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { _FLAG_COUNTRY, _IMAGE_URL } from '~/constants/global.const';
import useAuth from '~/hooks/useAuth';
import { cn } from '~/lib/utils';
import appStore from '~/store/zustand/appStore';

type HeaderPrivateProps = {};

const HeaderPrivate: React.FC<HeaderPrivateProps> = () => {
  const { setI18nextLng, i18nextLng } = appStore();
  const { user } = useAuth();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setI18nextLng(lng);
  };

  return (
    <header className="w-full px-4 py-4 text-white md:py-6">
      <div className="container mx-auto max-w-[1500px]">
        <Image
          src={_IMAGE_URL.logoHeader}
          alt="Logo"
          width={80}
          height={40}
          className="transition-all duration-300 ease-in-out hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mt-4 flex items-center gap-2 md:mt-0">
        <span className="hidden md:block">{t('home.language')}</span>
        {_FLAG_COUNTRY.map((flag, index) => (
          <Image
            key={index}
            src={flag.src}
            alt={`Flag ${index}`}
            width={24}
            onClick={changeLanguage.bind(null, flag.lng)}
            height={24}
            className={cn(
              'flagIcon cursor-pointer',
              flag.lng === i18nextLng &&
                'scale-125 animate-pulse rounded-[50%] border-2 border-solid border-[#27E897]'
            )}
          />
        ))}
      </div>
    </header>
  );
};

export default HeaderPrivate;
