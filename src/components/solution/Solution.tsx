'use client';

import Image from 'next/image';
import Link from 'next/link';

const ConsultingSection = () => {
  return (
    <header className="relative bg-black text-white">
            <div className="absolute left-0 right-0 top-0 z-30 flex items-center justify-center bg-black ">
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
          <nav className="flex space-x-6">
            <Link href="/" className="font-bold hover:underline text-lg">
              KSKYsolution
            </Link>
            {/* <Link href="/sport&casino" className="font-bold hover:underline text-lg">
              토지노 솔루션
            </Link> */}
            <Link href="/slot&casino" className="font-bold hover:underline text-lg">
              카지노 솔루션
            </Link>
            <Link href="/consoluting" className="font-bold hover:underline text-lg">
              상품 통합 API
            </Link>
            <Link href="/agent-api" className="font-bold hover:underline">
                            컨설팅
                        </Link>
            {/* <Link href="/info" className="font-bold hover:underline text-lg">
              More
            </Link> */}
          </nav>
        </div>
      </div>

      {/* Content Boxes Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-700 mb-12">CONSULTING</h2>

          {/* Content Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            {/* Box 1 */}
            <div className="bg-[#F4B183] p-6 rounded-lg shadow-lg text-center text-white">
              <Image
                src="/images/banner/banner_company.jpg"
                alt="Office Support"
                width={400}
                height={200}
                 className="rounded-lg mb-4 object-cover h-[350px] w-full"
              />
              <h3 className="text-2xl font-bold mb-2">업무지원</h3>
              <p className="text-md font-medium leading-relaxed">
                K-SKY 에서는<br />
                운영에 필요한 기본지식 및<br />
                영업 노하우 등의 업무지원을<br />
                제공하고 있습니다
              </p>
            </div>

            {/* Box 2 */}
            <div className="bg-[#8EAADB] p-6 rounded-lg shadow-lg text-center text-white">
              <Image
             src="/images/banner/banner_api.jpg"
                alt="API Supply"
                width={400}
                height={200}
                className="rounded-lg mb-4 object-cover h-[350px] w-full"
              />
              <h3 className="text-2xl font-bold mb-2">합리적인 가격의 API 알 공급</h3>
              <p className="text-md font-medium leading-relaxed">
                K-SKY 솔루션 외에<br />
                타사 솔루션 이용 업체에게도<br />
                투명하고 합리적인 가격의<br />
                API 제공을 약속드립니다
              </p>
            </div>

            {/* Box 3 */}
            <div className="bg-[#C8828B] p-6 rounded-lg shadow-lg text-center text-white">
              <Image
                src="/images/banner/banner_computer.jpg"
                alt="Web Development and Design"
                width={400}
                height={200}
                className="rounded-lg mb-4 object-cover h-[350px] w-full"
              />
              <h3 className="text-2xl font-bold mb-2">웹 개발 및 디자인</h3>
              <p className="text-md font-medium leading-relaxed">
                시장의 변화성에 맞춰<br />
                새로운 웹 개발 및 디자인<br />
                트렌드에 맞는 기능을<br />
                제공해 드리겠습니다
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer bg-gray-800 text-white py-4">
      <div className="container max-w-[1500px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Centered Copyright */}
          <div className="flex justify-center items-center gap-2 my-3">
            <div style={{fontSize:"15px"}}>
              <p>&copy; 2024 Copyright by KSKYSOLUTION </p>
            </div>
          </div>

          {/* Telegram Button */}
          <div className="flex justify-center items-center gap-2 my-3">
            <Image
              src={'/images/logo/tele.png'}
              alt="Telegram"
              width={100}
              height={50}
            />
            <button 
              className="bg-blue-500 text-white py-1 px-3 rounded transition duration-300 ease-in-out transform hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 focus:outline-none"
               onClick={() => window.open('https://t.me/kskysolution', '_blank')}
            >
              텔레그램 상담하기
            </button>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" 
               className="transition transform hover:scale-110 focus:scale-110 focus:outline-none">
              <Image src={'/images/logo/youtube.png'} alt="YouTube" width={24} height={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
               className="transition transform hover:scale-110 focus:scale-110 focus:outline-none">
              <Image src={'/images/logo/instagram.png'} alt="Instagram" width={24} height={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
               className="transition transform hover:scale-110 focus:scale-110 focus:outline-none">
              <Image src={'/images/logo/twitter.png'} alt="Twitter" width={24} height={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
    </header>
  );
};

export default ConsultingSection;
