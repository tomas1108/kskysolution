'use client';

import Image from 'next/image';
import Link from 'next/link';

const AgentApi = () => {
  return (
    <header className="relative bg-black text-white min-h-screen flex flex-col items-center justify-center">
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
      
      
      {/* Main Content */}
      <div className="text-center space-y-4 mt-20">
        {/* Title */}
        <h1 className="text-2xl font-semibold">카지노 & 슬롯 API</h1>
        <p className="text-lg font-medium">API 에이전시</p>
        
        {/* Centered Background Image */}
        <div className="flex justify-center my-4">
          <Image
            src="/images/background/agent_api.png"
            alt="Agent API Background"
            width={200}
            height={100}
          />
        </div>

        {/* Description Text */}
        <div className="text-sm leading-relaxed space-y-2 max-w-md mx-auto">
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

      {/* Footer with Telegram Contact */}
      <footer className="mt-8">
        <div className="flex flex-col items-center gap-2">
          <Image
            src="/images/logo/tele.png"
            alt="Telegram"
            width={50}
            height={50}
          />
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={() => window.open('https://t.me/kskysolution', '_blank')}
          >
            텔레그램 상담하기
          </button>
        </div>
      </footer>
    </header>
  );
};

export default AgentApi;
