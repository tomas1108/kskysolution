import React from "react";
import Image from "next/image";

const Middle = () => {
  return (
    <div className="bg-black text-white flex flex-col items-center p-6">
      {/* Phần giới thiệu */}
      <p className="text-center text-lg font-medium mb-6">
        카지노 및 토지노 종합 솔루션 서비스를 제공하고 있습니다.<br />
        카지노 솔루션 분양부터 카지노 솔루션 임대까지 맞춤 서비스를 찾으신다면 KSKY SOLUTION을 이용해보세요!
      </p>


      <p className="text-center text-lg font-medium mb-6">
        카지노 솔루션 | 슬롯 솔루션 | 스포츠 솔루션 | 파워볼 솔루션 | FX 솔루션 | 홀덤 <br></br>
        솔루션 | 정품 통합형 API | 자체 파싱형 API
      </p>
      {/* Logo ở giữa */}
      <div className="flex items-center justify-center mb-6">
        <div className="flex items-center ">
          <Image src="/images/logo/ksky.png" alt="Logo" width={350} height={250} />
        </div>
       
      </div>

      {/* Thông tin chi tiết */}
     

      <p className="text-center text-sm font-light">
      저희 솔루션에서 제공하는 카지노 게임은 현재 시중에 있는 모든 게임은 물론, 현재 개발중인 게임 소식과 개발 후 서비스까지 모두 제공하고 있습니다. 또한, 메이저 게임사들과 다이렉트 계약으로 모두 정품 api를 사용 하고 있기 때문에 회원들로부터 높은 만족도를 유지하고 있으며, 사소한 오류라도 즉시 해결합니다. 매번 새롭게 등장하는 신규 대형 카지노 게임 제공 업체의 게임들을 미리 확인할 수 있기 때문에 저희 솔루션의 카지노
      사이트를 운영하는 업체 대표님 혹은 운영자분들은 이러한 게임들을 미리 확인할 수 있으며, 반응을 본 후 즉시 API를 연동하여 게임을 추가하실 수 있습니다. 이런 혜택들은 오직 저희 솔루션에서만 가능합니다.
      </p>
    </div>
  );
};

export default Middle;
