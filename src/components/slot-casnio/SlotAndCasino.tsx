'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import appStore from '~/store/zustand/appStore';

const SlotAndCasino = () => {
  const { setI18nextLng, i18nextLng } = appStore();
  const { t, i18n } = useTranslation();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const openLink = (index: string) => {
    window.open(`https://d${index}.dom100.win`, '_blank');
    console.log(`https://d${index}.dom100.win`);

  };

  if (!isClient) return null;

  return (
    <header className="relative bg-black text-white">
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
            {/* <Link href="/sport&casino" className="font-bold hover:underline">
                            토지노 솔루션
                        </Link> */}
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


      <div className="relative h-[1000px]">
        <Image
          src={`/images/background/slot_casino.jpg`}
          alt="Banner"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="px-100 relative z-20 flex h-full flex-col items-center justify-center text-center">
          {/* Main Title */}
          <h1
            className="text-[80px] font-extrabold text-yellow-400"
            style={{
              marginBottom: "50px", // Giảm khoảng cách xuống còn 20px
              color: "#FFFFFF"
            }}
          >
            CASINO & SLOT
          </h1>
          <h2
            className="text-[50px] font-bold text-white"
            style={{
              marginBottom: "50px", // Giảm khoảng cách xuống còn 50px
              color: "#FFFFFF"
            }}
          >
            카지노 슬롯 솔루션
          </h2>


          {/* Description */}
          <p className="max-w-2xl text-lg font-semibold text-white leading-relaxed mb-8">
            10년 이상 카지노 솔루션 임대를 통한 업계 최고의 기술력을 바탕으로
            고객의 니즈에 맞는 디자인 및 관리자 페이지의 다양한 기능 제공
            <br />
            온라인 특화형 및 오프매장 특화형 기능 최적화되어
            <br />
            운영 특성에 맞는 특화형 솔루션을 제공합니다
            <br />
            자체개발 소스로 24시간 즉각적이고 빠른 처리 및 대응
          </p>

          {/* Sample Buttons */}
            <div className="grid grid-cols-5 gap-4 mb-8">
              {[...Array(28)].map((_, index) => (
                <a
                key={index}
                href={`https://d${index + 1}.dom100.win`}
                target="_blank"
                rel="noopener noreferrer"
                className="transform rounded-lg px-4 py-2 text-sm font-medium shadow-md transition duration-200 bg-black bg-opacity-70 hover:bg-opacity-90 text-white"
              >
                샘플 {index + 1}
              </a>
              ))}
            </div>





          {/* Contact Info */}
          <p
            className="text-xl font-medium text-[#8A8A6C] text-center"
            style={{
              lineHeight: "1.6",
            }}
          >
            관리자 및 파트너 페이지
            <br />
            자세한 문의는 텔레그램 <span className="font-bold text-white">@KSKY789</span>
          </p>



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

export default SlotAndCasino;
