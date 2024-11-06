'use client';

import { CircleCheckBig, CircleXIcon, RefreshCcw, Undo2 } from 'lucide-react';
import { useCallback } from 'react';
import { usePlayerBet, usePlayerBetDispatch } from '../../context';
import { Types } from '../../context/reducers';
import { Button } from '~/components/ui/button';
import { cn } from '~/lib/utils';
import { toast } from 'sonner';
import { useInsertUserBet } from '~/hooks/gql/user';
import { getTotalMoney } from '~/utils/common';
import { throwError } from '~/utils/errors';
import { WSMessageAction } from '~/@types/websocket';
import { useParams } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { Types as TypesUser } from '~/hooks/context/userReducers';
import { useUser, useUserDispatch } from '~/hooks/context/userContext';
import { hoverOpacityVariants } from '~/styles/variants';
import { useDeletedUserBetsByRoundId } from '~/hooks/gql/bet';

type ActionsViewProps = {
  sendJsonMessage: (message: any) => void;
  moneyBetOld: React.MutableRefObject<number>;
};

const buttonVariants =
  'h-[43px] min-w-[138px] text-lg font-semibold rounded-3xl gap-2';

const ActionsView: React.FC<ActionsViewProps> = ({
  sendJsonMessage,
  moneyBetOld
}) => {
  const { t } = useTranslation();
  const { insertUserBet, loading } = useInsertUserBet();
  const { deletedUserBetsByRoundId, loading: loadingRevert } =
    useDeletedUserBetsByRoundId();
  const { tableId: roomId } = useParams();
  const { user } = useUser();

  const { prevPlayers, players, tableId, countTime, roundId } = usePlayerBet();
  const dispatchPlayerBet = usePlayerBetDispatch();
  const dispatchUser = useUserDispatch();

  const onReset = useCallback(() => {
    dispatchPlayerBet({
      type: Types.ResetPlayers,
      payload: {}
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onRetry = useCallback(() => {
    dispatchPlayerBet({
      type: Types.RetryPlayers,
      payload: {}
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onHandleRevertBet = useCallback(async () => {
    try {
      const {
        data: {
          deletedUserBetsByRoundId: { refundMoney }
        }
      } = await deletedUserBetsByRoundId({
        input: {
          roundId,
          roomId
        }
      });
      dispatchPlayerBet({
        type: Types.SetPrevPlayers,
        payload: {}
      });
      if (refundMoney > 0) {
        dispatchUser({
          type: TypesUser.SetMoney,
          payload: {
            money: refundMoney
          }
        });
      }
      dispatchPlayerBet({
        type: Types.ResetPlayers,
        payload: {}
      });
      toast.success('Hủy đặt cược thành công');
    } catch (e) {
      throwError(e);
    }
  }, [roundId, roomId]);

  const onSubmit = useCallback(async () => {
    try {
      if (!tableId || countTime <= 2 || !roundId) {
        return toast.error('Hết thời gian đặt cược');
      }
      const isFail = Object.values(players).every(
        (player) =>
          player.super.chips.length === 0 &&
          player.event.chips.length === 0 &&
          player.double.chips.length === 0
      );
      if (isFail) {
        return;
      }

      const totalMoneyBet =
        getTotalMoney(players.player1.super.chips) * 13 +
        getTotalMoney(players.player1.double.chips) * 6 +
        getTotalMoney(players.player1.event.chips) +
        getTotalMoney(players.player2.super.chips) * 13 +
        getTotalMoney(players.player2.double.chips) * 6 +
        getTotalMoney(players.player2.event.chips) +
        getTotalMoney(players.player3.super.chips) * 13 +
        getTotalMoney(players.player3.double.chips) * 6 +
        getTotalMoney(players.player3.event.chips);

      const totalMoney = 0 - (totalMoneyBet - moneyBetOld.current);

      moneyBetOld.current = totalMoneyBet;

      if (user.walletMoney < Math.abs(totalMoney)) {
        return toast.error('Số tiền không đủ');
      }

      await insertUserBet({
        input: {
          roomId: tableId,
          bet: {
            player1: {
              superBet: getTotalMoney(players.player1.super.chips),
              doubleBet: getTotalMoney(players.player1.double.chips),
              eventBet: getTotalMoney(players.player1.event.chips)
            },
            player2: {
              superBet: getTotalMoney(players.player2.super.chips),
              doubleBet: getTotalMoney(players.player2.double.chips),
              eventBet: getTotalMoney(players.player2.event.chips)
            },
            player3: {
              superBet: getTotalMoney(players.player3.super.chips),
              doubleBet: getTotalMoney(players.player3.double.chips),
              eventBet: getTotalMoney(players.player3.event.chips)
            }
          },
          roundId
        }
      });

      dispatchUser({
        type: TypesUser.SetMoney,
        payload: {
          money: totalMoney as number
        }
      });
      dispatchPlayerBet({
        type: Types.SetPrevPlayers,
        payload: {}
      });
      sendJsonMessage({
        action: WSMessageAction.INSERT_USER_BET,
        message: {
          action: WSMessageAction.INSERT_USER_BET,
          roomId
        }
      });
      toast.success('Đặt cược thành công');
    } catch (e) {
      throwError(e);
    }
  }, [
    players,
    tableId,
    countTime,
    roundId,
    user?.walletMoney,
    roomId,
    moneyBetOld
  ]);

  return (
    <div className="flex flex-col gap-3 p-4">
      <div className="flex w-full flex-row  justify-center gap-3">
        <Button
          loading={loadingRevert}
          className={cn(buttonVariants, 'bg-[#CF4949] hover:bg-[#CF4949BF]')}
          onClick={onHandleRevertBet}
        >
          {t('bet.action.cancel')}
          <CircleXIcon size={18} color="white" />
        </Button>
        <Button
          className={cn(buttonVariants, 'bg-[#78C34A] hover:bg-[#78C34ABF]')}
          onClick={onRetry}
          disabled={!prevPlayers}
        >
          {t('bet.action.retry')}
          <RefreshCcw size={18} color="white" />
        </Button>
      </div>
      <div className="flex flex-row items-center gap-2">
        <Undo2
          onClick={onReset}
          className={cn(hoverOpacityVariants, 'cursor-pointer')}
        />
        <Button
          className={cn(
            buttonVariants,
            'flex-1 bg-linear-gradient text-[#0C1F44]'
          )}
          onClick={onSubmit}
          loading={loading}
          disabled={[0, -1].includes(countTime)}
        >
          {t('bet.action.bet')}
          <CircleCheckBig size={18} color="#0C1F44" />
        </Button>
      </div>
    </div>
  );
};

export default ActionsView;
