'use client';

import Image from 'next/image';
import Link from 'next/link';

const AgentApi = () => {
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

     
      <div className="mt-0 grid w-full grid-cols-1 gap-6 px-4 py-20 md:grid-cols-3 bg-gray-100 text-black text-center">


  {/* Card 1 */}
  <div className="flex flex-col items-center justify-center rounded-lg border p-4 shadow-md bg-[#0A2540] text-white">
    <div className="w-full">

    <h1 className="text-2xl font-semibold">카지노 & 슬롯 API</h1>
    <p className="text-lg font-medium">API 에이전시</p>
    <div className="my-4 flex justify-center">
          <Image
            src="/images/background/agent_api.png"
            alt="Agent API Background"
            width={200}
            height={100}
          />
        </div>
    </div>
    <div className="mx-auto max-w-md space-y-2 text-sm leading-relaxed">
          <p>심리스 방식</p>
          <p>카지노&슬롯</p>
          <p>정품 통합</p>
          <p>( 제공 게임사 및 수수료 문의 )</p>
          <p>각 에이전시에서 제공되는 게임사 리스트 및 수수료는</p>
          <p>텔레그램을 통해 24시 안내해드리고 있습니다</p>
          <p>또한 간단한 API 연결을 통해</p>
          <p>타사 솔루션 업체 및 개발실 연동이 가능합니다</p>
          <p>- KSKY Solution -</p>
        </div>
      
  </div>

  {/* Card 2 */}
  <div className="flex flex-col items-center justify-center rounded-lg border p-4 shadow-md  bg-[#0A2540] text-white">
    <div className="w-full"></div>
    <div className="w-full">
      <img
        src="/images/logo/Dragon.png"
        alt="DRAGON SOFT"
        className="mx-auto mb-4 w-full max-w-[150px] rounded border-4 border-yellow-500"
      />
    </div>
    <h2 className="text-lg font-semibold">스윅스</h2>
    <p className="mt-2 text-center text-sm font-medium leading-relaxed">
      심리스 방식 <br />
      카지노&슬롯 <br />
      정품 통합
    </p>
    <p className="mt-2 text-center text-xs text-gray-500">
      ( 제공 게임사 및 수수료 문의 )
    </p>
  </div>

  {/* Card 3 */}
  <div className="flex flex-col items-center justify-center rounded-lg border p-4 shadow-md  bg-[#0A2540] text-white">
    <div className="w-full"></div>
    <div className="w-full">
    <div className="my-4 flex justify-center">
          <Image
            src="/images/background/honor_link.jpg"
            alt="Agent API Background"
            width={200}
            height={100}
          />
        </div>
    </div>
    <h2 className="text-lg font-semibold">아너링크</h2>
    <p className="mt-2 text-center text-sm font-medium leading-relaxed">
      심리스, 트랜스퍼 제공 <br />
      카지노&슬롯 <br />
      국내 점유율 1위 <br />
      정품 통합
    </p>
    <p className="mt-2 text-center text-xs text-gray-500">
      ( 제공 게임사 및 수수료 문의 )
    </p>
  </div>
</div>





      <footer style={{marginTop:-50, padding: "20px"}} className="footer bg-gray-800 text-white py-4">
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

export default AgentApi;
