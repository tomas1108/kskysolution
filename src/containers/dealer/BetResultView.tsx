'use client';

import { cn } from '~/lib/utils';
import { PokerCards, PostTable, QualityItem } from './components';
import betResultStore from '~/store/zustand/betResultStore';
import { toast } from 'sonner';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { Button } from '~/components/ui/button';
import { useUser } from '~/hooks/context/userContext';
import { WSMessageAction } from '~/@types/websocket';
import {
  useParams,
  usePathname,
  useSearchParams,
  useRouter
} from 'next/navigation';
import { useCallback, useEffect } from 'react';
import { useInsertResultIntoRoom, useUpdateResultId } from '~/hooks/gql/result';
import { throwError } from '~/utils/errors';
import { HeaderBack } from '~/components/layout';
dayjs.extend(localizedFormat);

type BestResultViewProps = {};

const titleVariants = cn('text-semibold text-2xl');
const buttonVariants = cn(
  'rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:opacity-[0.8]'
);

const BestResultView: React.FC<BestResultViewProps> = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const { roomId } = useParams();
  const { insertResultIntoRoom, loading } = useInsertResultIntoRoom();
  const { updateResultId, loading: loadingUpdate } = useUpdateResultId();
  const { sendJsonMessage, isWebSocketOpen, connectionId } = useUser();
  const { typeEdit, resultsConfirm, resetAll } = betResultStore();

  const onHandleSendResult = async () => {
    try {
      const resultId = searchParams.get('resultId') as string;

      if (!roomId || !isWebSocketOpen || !resultId) {
        return;
      }
      await updateResultId({
        resultId,
        input: {
          dealer: resultsConfirm?.dealer,
          player1: resultsConfirm?.player1,
          player2: resultsConfirm?.player2,
          player3: resultsConfirm?.player3
        }
      });
      sendJsonMessage({
        action: WSMessageAction.SEND_RESULT,
        message: {
          action: WSMessageAction.SEND_RESULT,
          roomId,
          roundId: resultId,
          result: {
            action: WSMessageAction.SEND_RESULT,
            dealer: resultsConfirm?.dealer,
            player1: resultsConfirm?.player1,
            player2: resultsConfirm?.player2,
            player3: resultsConfirm?.player3
          }
        }
      });
      toast.success('Gửi kết quả thành công', {
        description: dayjs().format('LLLL')
      });
    } catch (error) {
      throwError(error);
    } finally {
    }
  };

  const onHandleStartGame = useCallback(async () => {
    if (!roomId || !isWebSocketOpen) {
      return;
    }
    try {
      const {
        data: { result }
      } = await insertResultIntoRoom({
        input: {
          roomId
        }
      });
      sendJsonMessage({
        action: WSMessageAction.INSERT_ROUND,
        message: {
          action: WSMessageAction.INSERT_ROUND,
          roomId,
          roomInfo: result
        }
      });
      const params = new URLSearchParams(searchParams);
      params.set('resultId', result.id);
      replace(`${pathname}?${params.toString()}`);
      resetAll();
      toast.success('Bắt đầu ván cược thành công');
    } catch (error) {
      throwError(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isWebSocketOpen, roomId]);

  useEffect(() => {
    return () => !connectionId && replace('/dealer/room/niu-niu');
  }, [connectionId]);

  return (
    <>
      <HeaderBack />
      <div
        className="grid min-h-screen w-screen gap-4 p-4"
        style={{
          gridTemplateColumns: '1fr auto 1fr'
        }}
      >
        <div className="flex w-full flex-row gap-4">
          <div className="flex-cols flex h-full w-full flex-wrap justify-center gap-3">
            <div className="flex w-full flex-col gap-3">
              <span className={cn(titleVariants)}>Ván cược</span>
              <Button
                disabled={loadingUpdate}
                loading={loading}
                onClick={onHandleStartGame}
                className={cn(buttonVariants)}
              >
                Bắt đầu
              </Button>
              <Button
                disabled={loading || loadingUpdate}
                onClick={resetAll}
                className={cn(buttonVariants, 'bg-red-500 ')}
              >
                Huỷ kết quả
              </Button>
              <Button
                disabled={loading}
                loading={loadingUpdate}
                className={cn(buttonVariants)}
                onClick={onHandleSendResult}
              >
                Gửi kết quả
              </Button>
            </div>
            <QualityItem
              title="Dealer"
              quality={resultsConfirm?.dealer?.quality as undefined}
              type="dealer"
              isChecked={typeEdit === 'dealer'}
              cards={resultsConfirm?.dealer?.cards}
            />
            <QualityItem
              title="Player 1"
              quality={resultsConfirm?.player1?.quality as undefined}
              type="player1"
              isChecked={typeEdit === 'player1'}
              cards={resultsConfirm?.player1?.cards}
            />
            <QualityItem
              title="Player 2"
              quality={resultsConfirm?.player2?.quality as undefined}
              type="player2"
              isChecked={typeEdit === 'player2'}
              cards={resultsConfirm?.player2?.cards}
            />
            <QualityItem
              title="Player 3"
              quality={resultsConfirm?.player3?.quality as undefined}
              type="player3"
              isChecked={typeEdit === 'player3'}
              cards={resultsConfirm?.player3?.cards}
            />
          </div>
        </div>
        <PostTable />
        <PokerCards />
      </div>
    </>
  );
};

export default BestResultView;
