import { Player } from '@lottiefiles/react-lottie-player';
import { useRef } from 'react';

type LoadingRoomBetProps = {};

const LoadingRoomBet: React.FC<LoadingRoomBetProps> = () => {
  const loadingRef = useRef<Player>(null);

  return (
    <div className="h-screen w-screen bg-white">
      <Player
        autoplay
        loop
        ref={loadingRef}
        className="z-100 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform "
        src="/animations/bet-loading.json"
      />
    </div>
  );
};

export default LoadingRoomBet;
