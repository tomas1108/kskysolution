'use client';
import Link from 'next/link';
import Image from 'next/image';
import { _FLAG_COUNTRY, _IMAGE_URL } from '~/constants/global.const';
import { useTranslation } from 'react-i18next';
import appStore from '~/store/zustand/appStore';
import { cn } from '~/lib/utils';

type TProps = {};

const SportAndCasino = ({ }: TProps) => {
  const { setI18nextLng, i18nextLng } = appStore();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setI18nextLng(lng);
  };

  return (
    <header className="relative bg-black text-white">
      {/* Navbar */}
      <div className="absolute left-0 right-0 top-0 z-30 flex items-center justify-center bg-black bg-opacity-30 py-1">
        {/* Logo */}
        <div className="flex items-center gap-8">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src={`/images/logo/ksky.png`}
                alt="KSKY Solution"
                width={150}
                height={50}
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="text-large flex cursor-pointer gap-6">
            <Link href="/" className="font-bold hover:underline">
              KSKYsolution
            </Link>
            <Link href="/sport&casino" className="font-bold hover:underline">
              토지노 솔루션
            </Link>
            <Link href="/slot&casino" className="font-bold hover:underline">
              카지노 솔루션
            </Link>
            <Link href="/consoluting" className="font-bold hover:underline text-lg">
              상품 통합 API
            </Link>
            <Link href="/agent-api" className="font-bold hover:underline">
              컨설팅
            </Link>
            <Link href="/info" className="font-bold hover:underline">
              More
            </Link>
          </nav>
        </div>
      </div>

      {/* Banner */}
      <div className="relative h-[1000px]">
        <Image
          src={`/images/background/sport_casino.jpg`}
          alt="Banner"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="px-100 relative z-20 flex h-full flex-col items-center justify-center text-center">
          <h1
            className="max-w-2xl text-center font-bold text-white"
            style={{
              marginTop: '650px',
              fontFamily: 'Roboto, sans-serif',
              fontSize: '100px',
              fontWeight: 700,
              lineHeight: '120px'
            }}
          >
            SPORTS and CASINO
          </h1>
          <div style={{ marginBottom: '750px' }}>
            {/* Subtitle */}
            {/* Title */}
            <p className="text-lg font-semibold text-white drop-shadow-lg">
              스포츠 미니게임 카지노 슬롯 통합형 솔루션
            </p>

            <div
              className="mt-4 max-w-xl text-sm font-medium leading-relaxed text-white drop-shadow-lg"
              style={{
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 700,
                fontSize: '20px',
                lineHeight: '57px',
                textAlign: 'center'
              }}
            >
              <p>다양한 기능이 구현되어 있으며</p>
              <p>수많은 임대를 통해 최적화된 솔루션 입니다</p>
              <p>유저가 사용하기 편하고 최신 트렌드에 맞는 미니게임을 제공</p>
              <p>스포츠 경기등록, 점수, 배당, 마감 자동으로 이루어 지며</p>
              <p>관리자의 임맛대로 경기별 수동 배당 설정이 가능합니다</p>
              <p>유저페이지 디자인 변경 가능</p>
            </div>

            <div className="mt-6 flex items-center justify-center gap-4 ">
              <button
                className="hover:bg-yellow-500 transform rounded-lg px-6 py-3 text-lg font-bold shadow-lg transition duration-200 hover:scale-105 hover:shadow-xl"
                style={{ backgroundColor: '#FBBF24', color: '#000' }}
              >
                토지노 샘플 1
              </button>

              <button
                className="hover:bg-yellow-500 transform rounded-lg px-6 py-3 text-lg font-bold shadow-lg transition duration-200 hover:scale-105 hover:shadow-xl"
                style={{ backgroundColor: '#FBBF24', color: '#000' }}
              >
                토지노 샘플 2
              </button>
            </div>
            <div
              className="mt-4 max-w-xl text-sm font-medium leading-relaxed text-white drop-shadow-lg"
              style={{
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 700,
                fontSize: '18px',
                lineHeight: '32px',
                textAlign: 'center'
              }}
            >
              <p>관리자 및 파트너 페이지 <br></br>
                자세한 문의는 텔레그램 @KSKY789</p>


            </div>
          </div>
        </div>
      </div>
      <footer className="absolute bottom-0 z-30 flex w-full items-center justify-center bg-black bg-opacity-30 py-1">
        <div className="container mx-auto max-w-[1500px]">
          <div className="flex flex-col items-center justify-between md:flex-row">
            {/* Centered Copyright */}
            <div className="my-3 flex items-center justify-center gap-2">
              <div style={{ fontSize: '15px' }}>
                <p>&copy; 2024 Copyright by KSKYSOLUTION </p>
              </div>
            </div>

            {/* Telegram Button */}
            <div className="my-3 flex items-center justify-center gap-2">
              <Image
                src={'/images/logo/tele.png'}
                alt="Telegram"
                width={120}
                height={50}
              />
              <button
                className="transform rounded bg-blue-500 px-3 py-1 text-white transition duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onClick={() =>
                  window.open('https://t.me/kskysolution', '_blank')
                }
              >
                텔레그램 상담하기
              </button>
            </div>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition hover:scale-110 focus:scale-110 focus:outline-none"
              >
                <Image
                  src={'/images/logo/youtube.png'}
                  alt="YouTube"
                  width={40}
                  height={24}
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition hover:scale-110 focus:scale-110 focus:outline-none"
              >
                <Image
                  src={'/images/logo/instagram.png'}
                  alt="Instagram"
                  width={40}
                  height={24}
                />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition hover:scale-110 focus:scale-110 focus:outline-none"
              >
                <Image
                  src={'/images/logo/twitter.png'}
                  alt="Twitter"
                  width={40}
                  height={24}
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </header>
  );
};

SportAndCasino.displayName = 'SportAndCasino';
export default SportAndCasino;
