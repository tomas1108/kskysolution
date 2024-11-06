'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import { _IMAGE_URL } from '~/constants/global.const';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer bg-gray-800 text-white py-4">
      <div className="container max-w-[1500px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Centered Telegram Button */}
          <div className="flex justify-center items-center gap-2 my-3">
          <div style={{fontSize:"15px"}}>
              <p>&copy; 2024 Copyright by KSKYSOLUTION </p>
            </div>
          </div>


          <div className="flex justify-center items-center gap-2 my-3">
            <Image
              src={'/images/logo/tele.png'}
              alt="Telegram"
              width={100}
              height={50}
            />
            <button className="bg-blue-500 text-white py-1 px-3 rounded">
              텔레그램 상담하기
            </button>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <Image src={'/images/logo/youtube.png'} alt="YouTube" width={24} height={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Image src={'/images/logo/instagram.png'} alt="Instagram" width={24} height={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Image src={'/images/logo/twitter.png'} alt="Twitter" width={24} height={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.displayName = 'Footer';
export default Footer;
