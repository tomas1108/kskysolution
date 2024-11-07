// Banner.js
'use client';

import Image from 'next/image';

const Banner = () => {
  return (
    <div className="relative w-full">
      <Image
        src={`/images/background/banner_main.jpg`}
        alt="Banner"
        fill
        className="object-cover object-center"
        priority
      />
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-100">
        <h1 className="text-5xl font-bold text-white max-w-2xl" style={{ marginTop: '266px' }}>
          카지노 솔루션, 슬롯 솔루션, 스포츠 및 미니게임 솔루션 및 통합 API
        </h1>
      </div>
    </div>
  );
};

export default Banner;
