'use client';
import Link from 'next/link';
import Image from 'next/image';
import { _FLAG_COUNTRY, _IMAGE_URL } from '~/constants/global.const';
import { useTranslation } from 'react-i18next';
import appStore from '~/store/zustand/appStore';
import { cn } from '~/lib/utils';

type TProps = {};

const Header = ({}: TProps) => {
  const { setI18nextLng, i18nextLng } = appStore();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setI18nextLng(lng);
  };

  return (
    <header className="relative bg-black text-white">
      {/* Navbar */}
      <div className="absolute top-0 left-0 right-0 z-30 flex justify-center items-center py-1 bg-opacity-30 bg-black">
        {/* Logo */}
        <div className="flex items-center gap-8">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image src={`/images/logo/ksky.png`} alt="KSKY Solution" width={150} height={50} />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex gap-6 text-large cursor-pointer">
            <Link href="/casino" className="hover:underline font-bold">KSKYsolution</Link>
            <Link href="/slots" className="hover:underline font-bold">토지노 솔루션</Link>
            <Link href="/sports" className="hover:underline font-bold">카지노 솔루션</Link>
            <Link href="/minigames" className="hover:underline font-bold">상품 통합 API</Link>
            <Link href="/api" className="hover:underline font-bold">컨설팅</Link>
            <Link href="/info" className="hover:underline font-bold">More</Link>
          </nav>
        </div>
      </div>

      {/* Banner */}
      <div className="relative h-[500px]">
        <Image
          src={`/images/background/banner_main.jpg`}
          alt="Banner"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-100">
          <h1 className="text-5xl font-bold text-white max-w-2xl" style={{ marginTop:'266px'}}>
            카지노 솔루션, 슬롯 솔루션, 스포츠 및 미니게임 솔루션 및 통합 API
          </h1>
        </div>
      </div>
    </header>
  );
};

Header.displayName = 'Header';
export default Header;
