// components/CasinoTypes.js
import Image from 'next/image';

const CasinoTypes = () => {
  const casinoItems = [
    { src: '/images/casino/Frame 01.png', alt: 'Casino 1' },
    { src: '/images/casino/Frame 02.png', alt: 'Casino 2' },
    { src: '/images/casino/Frame 03.png', alt: 'Casino 3' },
    { src: '/images/casino/Frame 04.png', alt: 'Casino 4' },
    { src: '/images/casino/Frame 05.png', alt: 'Casino 5' },
    { src: '/images/casino/Frame 06.png', alt: 'Casino 6' },
    { src: '/images/casino/Frame 07.png', alt: 'Casino 7' },
    { src: '/images/casino/Frame 08.png', alt: 'Casino 8' },
    { src: '/images/casino/Frame 09.png', alt: 'Casino 9' },
    { src: '/images/casino/Frame 10.png', alt: 'Casino 10' },
    {   src: '/images/casino/Frame 11.png', alt: 'Casino 11' },
    { src: '/images/casino/Frame 12.png', alt: 'Casino 12' },
    { src: '/images/casino/Frame 13.png', alt: 'Casino 13' },
    { src: '/images/casino/Frame 14.png', alt: 'Casino 14' },
    { src: '/images/casino/Frame 15.png', alt: 'Casino 15' },
    { src: '/images/casino/Frame 16.png', alt: 'Casino 16' },
    { src: '/images/casino/Frame 17.png', alt: 'Casino 17' },
    { src: '/images/casino/Frame 18.png', alt: 'Casino 18' },
    { src: '/images/casino/Frame 19.png', alt: 'Casino 19' },
    { src: '/images/casino/Frame 20.png', alt: 'Casino 20' },
    { src: '/images/casino/Frame 21.png', alt: 'Casino 21' },
    { src: '/images/casino/Frame 22.png', alt: 'Casino 22' },
    { src: '/images/casino/Frame 23.png', alt: 'Casino 23' },
    { src: '/images/casino/Frame 24.png', alt: 'Casino 24' },
  


  ];

  return (
    <div className="casino-container">
      <h2 style={{color:"white", fontSize:"bold"}}>Slot Types</h2>
      <div className="casino-grid">
        {casinoItems.map((item, index) => (
          <div key={index} className="casino-item">
            <Image src={item.src} alt={item.alt} width={100} height={100} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CasinoTypes;
