// components/CasinoTypes.js
import Image from 'next/image';

const Slot = () => {
  const casinoItems = [
    { src: '/images/slot/Frame 18.png', alt: 'Slot 1' },
    { src: '/images/slot/Frame 19.png', alt: 'Slot 2' },
    { src: '/images/slot/Frame 20.png', alt: 'Slot 3' },
    { src: '/images/slot/Frame 21.png', alt: 'Slot 4' },
    { src: '/images/slot/Frame 22.png', alt: 'Slot 5' },
    { src: '/images/slot/Frame 23.png', alt: 'Slot 6' },
    { src: '/images/slot/Frame 24.png', alt: 'Slot 7' },
    { src: '/images/slot/Frame 25.png', alt: 'Slot 8' },
    { src: '/images/slot/Frame 26.png', alt: 'Slot 9' },
    { src: '/images/slot/Frame 27.png', alt: 'Slot 10' },
    { src: '/images/slot/Frame 28.png', alt: 'Slot 11' },
    {  src: '/images/slot/Frame 29.png', alt: 'Slot 12' },
    { src: '/images/slot/Frame 30.png', alt: 'Slot 13' },
    { src: '/images/slot/Frame 31.png', alt: 'Slot 14' },
    { src: '/images/slot/Frame 32.png', alt: 'Slot 15' },
    { src: '/images/slot/Frame 33.png', alt: 'Slot 16' },
    { src: '/images/slot/Frame 34.png', alt: 'Slot 17' },
    { src: '/images/slot/Frame 35.png', alt: 'Slot 18' },
    { src: '/images/slot/Frame 36.png', alt: 'Slot 19' },
    { src: '/images/slot/Frame 37.png', alt: 'Slot 20' },
    { src: '/images/slot/Frame 38.png', alt: 'Slot 21' },
    { src: '/images/slot/Frame 39.png', alt: 'Slot 22' },
    { src: '/images/slot/Frame 40.png', alt: 'Slot 23' },
    { src: '/images/slot/Frame 41.png', alt: 'Slot 24' },
    { src: '/images/slot/Frame 42.png', alt: 'Slot 25' },
    { src: '/images/slot/Frame 43.png', alt: 'Slot 26' },
    { src: '/images/slot/Frame 44.png', alt: 'Slot 27' },
    { src: '/images/slot/Frame 45.png', alt: 'Slot 28' },
    { src: '/images/slot/Frame 46.png', alt: 'Slot 29' },
    { src: '/images/slot/Frame 47.png', alt: 'Slot 30' },
    { src: '/images/slot/Frame 48.png', alt: 'Slot 31' },
    { src: '/images/slot/Frame 49.png', alt: 'Slot 32' },
    { src: '/images/slot/Frame 50.png', alt: 'Slot 33' },
    { src: '/images/slot/Frame 51.png', alt: 'Slot 34' },
    { src: '/images/slot/Frame 52.png', alt: 'Slot 35' },
    { src: '/images/slot/Frame 53.png', alt: 'Slot 36' },
    { src: '/images/slot/Frame 54.png', alt: 'Slot 37' },
    { src: '/images/slot/Frame 56.png', alt: 'Slot 39' },
    { src: '/images/slot/Frame 57.png', alt: 'Slot 40' },
    { src: '/images/slot/Frame 58.png', alt: 'Slot 41' },
    { src: '/images/slot/Frame 59.png', alt: 'Slot 42' },
  { src: '/images/slot/Frame 60.png', alt: 'Slot 43' },
  { src: '/images/slot/Frame 61.png', alt: 'Slot 44' },
 
  { src: '/images/slot/Frame 80.png', alt: 'Slot 63' },
  { src: '/images/slot/Frame 81.png', alt: 'Slot 64' },
  { src: '/images/slot/Frame 82.png', alt: 'Slot 65' },
  { src: '/images/slot/Frame 83.png', alt: 'Slot 66' },
  { src: '/images/slot/Frame 84.png', alt: 'Slot 67' },
  { src: '/images/slot/Frame 85.png', alt: 'Slot 68' },
  { src: '/images/slot/Frame 86.png', alt: 'Slot 69' },
  { src: '/images/slot/Frame 87.png', alt: 'Slot 70' },
  { src: '/images/slot/Frame 88.png', alt: 'Slot 71' },
  { src: '/images/slot/Frame 89.png', alt: 'Slot 72' },
  { src: '/images/slot/Frame 90.png', alt: 'Slot 73' },
  { src: '/images/slot/Frame 91.png', alt: 'Slot 74' },
  { src: '/images/slot/Frame 92.png', alt: 'Slot 75' },
  { src: '/images/slot/Frame 93.png', alt: 'Slot 76' },
  { src: '/images/slot/Frame 94.png', alt: 'Slot 77' },
  { src: '/images/slot/Frame 95.png', alt: 'Slot 78' },
  { src: '/images/slot/Frame 96.png', alt: 'Slot 79' },
  { src: '/images/slot/Frame 97.png', alt: 'Slot 80' },
  { src: '/images/slot/Frame 98.png', alt: 'Slot 81' },

    


  ];

  return (
    <div className="casino-container">
      <h2 style={{color:"white", fontSize:"bold"}}>Slot Types</h2>
      <div className="casino-grid">
        {casinoItems.map((item, index) => (
          <div key={index} className="casino-item">
            <Image src={item.src} alt={item.alt} width={150} height={100} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slot;
