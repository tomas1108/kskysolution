'use client';

import {
  ChipsView,
  PlayerView,
  ActionsView,
  TimeProgress,
  InfoTable,
  DealerInfoTable,
  ResultTable,
  LoadingRoomBet
} from './components';
import VideoLive from './components/video-live';
import ChatView from './components/chat-view';
import { usePlayerBet, usePlayerBetDispatch } from './context';
import { useEffect, useRef, useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { useGetResults } from '~/hooks/gql/result';
import { useParams } from 'next/navigation';
import { WSMessageAction } from '~/@types/websocket';
import { Types } from './context/reducers';
import { Typography } from '~/components';
import { cn } from '~/lib/utils';
import { formatCurrency } from '~/utils/common';
import { ArrowBigLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger
} from '~/components/ui/tooltip';
import { TooltipContent } from '@radix-ui/react-tooltip';
import { hoverOpacityVariants } from '~/styles/variants';
import { useCustomRouter } from '~/hooks';
import { useUsersBetAggregateByRoundId } from '~/hooks/gql/user';
import { useUser, useUserDispatch } from '~/hooks/context/userContext';
import { useRoomDetail } from '~/hooks/gql/room';
import { Types as TypesUser } from '~/hooks/context/userReducers';

type TableDetailViewProps = {};

const { Text } = Typography;

const moneyWinner = cn(
  'text-bold absolute left-1/2 opacity-0	top-1/2 inline-block -translate-x-1/2 -translate-y-1/2 transform bg-gradient-to-r  from-[#F2ECB6] via-[#A96F44] to-[#F2ECB6] bg-clip-text text-3xl font-semibold text-transparent transition-opacity'
);

const TableDetailView: React.FC<TableDetailViewProps> = () => {
  const moneyBetOld = useRef<number>(0);
  const { replace } = useCustomRouter();
  const { t } = useTranslation();
  const soundRef = useRef<HTMLAudioElement>(null);
  const soundCoinRef = useRef<HTMLAudioElement>(null);
  const { tableId: roomId } = useParams();
  const { room, loading: loadingRoomDetail } = useRoomDetail(roomId as string);
  const [isShowWinner, setIsShowWinner] = useState(false);
  const [totalMoneyWinner, setTotalMoneyWinner] = useState(0);
  const playerRef = useRef<Player>(null);
  const { roundId } = usePlayerBet();

  const { results, loading, refetch } = useGetResults(roomId as string);
  const { aggregate, refetch: refetchAggregated } =
    useUsersBetAggregateByRoundId(roundId);

  const { connectionId, sendJsonMessage, lastJsonMessage } = useUser();
  const dispatchPlayerBet = usePlayerBetDispatch();
  const dispatchUser = useUserDispatch();

  useEffect(() => {
    if (lastJsonMessage?.action === WSMessageAction.SEND_RESULT) {
      moneyBetOld.current = 0;
      refetch();
      const { isWinner, totalMoney } = lastJsonMessage;
      if (isWinner) {
        playerRef.current?.play();
        soundRef.current?.play();
        setIsShowWinner(true);
      }

      setTotalMoneyWinner(totalMoney);
      dispatchUser({
        type: TypesUser.SetMoney,
        payload: {
          money: totalMoney as number
        }
      });
      dispatchPlayerBet({
        type: Types.ResetPlayers,
        payload: {}
      });
    }
    if (lastJsonMessage?.action === WSMessageAction.INSERT_USER_BET) {
      refetchAggregated();
    }
    if (lastJsonMessage?.action === WSMessageAction.INSERT_ROUND) {
      moneyBetOld.current = 0;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastJsonMessage, refetch, refetchAggregated]);

  useEffect(() => {
    return () => !connectionId && replace('/user/room/niu-niu');
  }, [connectionId]);

  const onGoBack = () => {
    if (roomId && connectionId) {
      sendJsonMessage({
        action: WSMessageAction.LEAVE_ROOM,
        message: {
          action: WSMessageAction.LEAVE_ROOM,
          roomId,
          connectionId
        }
      });
    }
    moneyBetOld.current = 0;
    replace('/user/room/niu-niu');
  };

  return loadingRoomDetail ? (
    <LoadingRoomBet />
  ) : (
    <>
      <div className="tablePlayer relative h-screen w-screen overflow-hidden">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild onClick={onGoBack}>
              <div
                className={cn(
                  hoverOpacityVariants,
                  'absolute left-4 top-8 z-10 flex h-[36px] w-[36px] cursor-pointer items-center  justify-center rounded-full bg-slate-50/25'
                )}
              >
                <ArrowBigLeft className="cursor-pointer text-white" />
              </div>
            </TooltipTrigger>
            <TooltipContent>{t('app.back')}</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <div className="absolute left-[82px] top-4 z-auto flex flex-col gap-4">
          <InfoTable room={room} />
          <DealerInfoTable room={room} />
        </div>
        <div className="absolute left-10 top-1/3">
          <TimeProgress
            lastJsonMessage={lastJsonMessage}
            roundTime={room?.roundTime ?? 0}
          />
        </div>
        <div
          className={cn(
            'z-100 absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-2xl',
            isShowWinner ? 'bg-slate-50/5' : 'b'
          )}
        >
          <Player
            ref={playerRef}
            onEvent={(event) => {
              if (event === 'pause') {
                setIsShowWinner(false);
                soundCoinRef.current?.play();
              }
            }}
            className="relative"
            src="/animations/winner.json"
          >
            <Text
              className={cn(
                moneyWinner,
                isShowWinner && 'opacity-100',
                'text-nowrap'
              )}
            >
              {formatCurrency(totalMoneyWinner)}
            </Text>
          </Player>
        </div>
        <div
          className="grid h-full"
          style={{
            gridTemplateRows: '1fr 200px'
          }}
        >
          <VideoLive
            videoIdLarge={room?.videIdLarge}
            videoIdSmall={room?.videIdSmall}
          />
          <div
            className="tablePlayer bottom-0 z-10 grid w-full items-end"
            style={{
              gridTemplateColumns: 'auto 2fr 1fr'
            }}
          >
            <div
              className="grid h-full flex-col"
              style={{
                gridTemplateRows: '40px 1fr'
              }}
            >
              <ChatView />
              <ResultTable results={results} loading={loading} />
            </div>
            <div className="viewer grid h-full w-full grid-cols-3 border-[1px] border-[#0056FF] shadow-xl">
              <PlayerView
                keyPlayer="player1"
                namePlayer="PLAYER 1"
                userCount={aggregate?.player1?.count}
                totalMoneyBet={aggregate?.player1?.totalMoney}
              />
              <PlayerView
                keyPlayer="player2"
                namePlayer="PLAYER 2"
                userCount={aggregate?.player2?.count}
                totalMoneyBet={aggregate?.player2?.totalMoney}
              />
              <PlayerView
                keyPlayer="player3"
                namePlayer="PLAYER 3"
                userCount={aggregate?.player3?.count}
                totalMoneyBet={aggregate?.player3?.totalMoney}
                className="border-r-[0px]"
              />
            </div>
            <div className="flex h-full flex-col items-center justify-center bg-[#1C3669D9]">
              <ChipsView />
              <ActionsView
                sendJsonMessage={sendJsonMessage}
                moneyBetOld={moneyBetOld}
              />
            </div>
          </div>
        </div>
      </div>
      <audio id="myAudio" controls className="hidden" ref={soundRef}>
        <source src="/sounds/sound-win.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <audio id="myAudioCoin" controls className="hidden" ref={soundCoinRef}>
        <source src="/sounds/sound-coin.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </>
  );
};

export default TableDetailView;
