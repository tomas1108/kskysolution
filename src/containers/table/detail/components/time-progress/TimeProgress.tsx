import { Hourglass } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useInterval } from '~/hooks';
import { usePlayerBet, usePlayerBetDispatch } from '../../context';
import { WSMessageAction } from '~/@types/websocket';
import dayjs from 'dayjs';
import { generateExpiresAtMillisecond } from '~/utils/common';
import { Types } from '../../context/reducers';

type TimeProgressProps = {
  lastJsonMessage: any;
  roundTime: number;
};

const TimeProgress: React.FC<TimeProgressProps> = ({
  lastJsonMessage,
  roundTime
}) => {
  const { countTime } = usePlayerBet();
  const dispatchPlayerBet = usePlayerBetDispatch();

  const soundRef = useRef<HTMLAudioElement>(null);

  useInterval(
    () => {
      if (countTime === -1) {
        return;
      }
      // Your custom logic here
      dispatchPlayerBet({
        type: Types.SetCountTime,
        payload: {
          countTime: countTime - 1
        }
      });
      if (countTime === 11 && soundRef.current) {
        const audio = soundRef.current;
        audio?.play();
      }
    },
    [-1, 0].includes(countTime) ? null : 1000
  );

  useEffect(() => {
    if (lastJsonMessage?.action === WSMessageAction.INSERT_ROUND) {
      dispatchPlayerBet({
        type: Types.ResetPlayers,
        payload: {}
      });
      const millisecond = generateExpiresAtMillisecond(
        lastJsonMessage.createAt,
        roundTime ?? 60
      );
      const millisecondCurrent = dayjs().valueOf();

      dispatchPlayerBet({
        type: Types.SetCountTime,
        payload: {
          countTime: Math.round((millisecond - millisecondCurrent) / 1000)
        }
      });
      dispatchPlayerBet({
        type: Types.SetRoundId,
        payload: {
          roundId: lastJsonMessage.id
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastJsonMessage, roundTime]);

  return (
    <div className=" flex h-[108px] w-[108px] items-center justify-center rounded-full border-2 border-solid border-[#27E897] bg-[#E8FFF5]">
      <div className="h-[86px] w-[86px]">
        {[-1, 0].includes(countTime) ? (
          <div className="flex h-full w-full items-center justify-center rounded-full border-2 border-solid border-[#0AB970]">
            <Hourglass color="#0AB970" className="animate-spin" size={32} />
          </div>
        ) : (
          <CircularProgressbar
            minValue={0}
            maxValue={roundTime ?? 60}
            value={countTime}
            text={`${countTime}`}
            circleRatio={1}
            styles={{
              // Customize the root svg element
              root: {},
              // Customize the path, i.e. the "completed progress"
              path: {
                // Path color
                stroke: `#0AB970`,
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: 'butt',
                // Customize transition animation
                transition: 'stroke-dashoffset 0.5s ease 0s',
                // Rotate the path
                transform: 'rotate(0.75turn)',
                transformOrigin: 'center center'
              },
              // Customize the circle behind the path, i.e. the "total progress"
              trail: {
                // Trail color
                stroke: '#b5f5ec',
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: 'butt',
                // Rotate the trail
                transform: 'rotate(0.75turn)',
                transformOrigin: 'center center'
              },
              // Customize the text
              text: {
                // Text color
                fill: '#0AB970',
                // Text size
                fontSize: '42px'
              },
              // Customize background - only used when the `background` prop is true
              background: {
                fill: '#3e98c7'
              }
            }}
          />
        )}
      </div>
      <audio id="myAudio" controls className="hidden" ref={soundRef}>
        <source src="/sounds/sound-countdown.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default TimeProgress;
