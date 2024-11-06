import { Typography } from '~/components';
import { formatCurrency, moneyChip } from '~/utils/common';
import { useCallback, useId } from 'react';
import ItemPlayerView from './ItemPlayerView';
import { Player, Slot } from '~/constants/chip';
import { cn } from '~/lib/utils';
import { usePlayerBet, usePlayerBetDispatch } from '../../context';
import { Types } from '../../context/reducers';
import Image from 'next/image';

const { Text } = Typography;

type PlayerViewProps = {
  keyPlayer: Player;
  namePlayer: string;
  userCount: number;
  className?: string;
  totalMoneyBet?: number;
};

const borderVariant = 'border-b-[1px] border-[#0056FF]';

const PlayerView: React.FC<PlayerViewProps> = ({
  keyPlayer,
  namePlayer,
  userCount,
  className,
  totalMoneyBet
}) => {
  const id = useId();

  const { chipSelected, players, countTime } = usePlayerBet();
  const dispatchPlayerBet = usePlayerBetDispatch();

  const playSoundClick = () => {
    new Audio('/sounds/dropping-chip-2.wav').play();
  };

  const onHandleClickItemPlayer = useCallback(
    (params: { slot: Slot; keyPlayer: Player }) => {
      if (!chipSelected || [0, -1].includes(countTime)) {
        return;
      }
      playSoundClick();
      const { slot, keyPlayer } = params;
      const player = players[keyPlayer];
      const chips = player[slot].chips;
      chips.push({
        chipType: chipSelected,
        value: moneyChip(chipSelected),
        id: chips.length + 1
      });
      dispatchPlayerBet({
        type: Types.SetPlayers,
        payload: { name: keyPlayer, data: { ...player, [slot]: { chips } } }
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [players, chipSelected, countTime]
  );
  return (
    <div
      className={cn(
        'grid w-full auto-rows-min border-r-[1px] border-[#0056FF]',
        className
      )}
      id={id}
    >
      <div
        className={cn(
          borderVariant,
          'flex h-[45px] flex-row items-center justify-between gap-3 bg-[#1C3669] px-4'
        )}
      >
        <Text className="text-xs font-semibold text-[#F2ECB6]">
          {formatCurrency(totalMoneyBet || 0)}
        </Text>
        <Text className="inline-block text-xl font-semibold text-white">
          {namePlayer}
        </Text>
        <div className="flex flex-row items-center gap-3">
          <Image
            src="/icons/user-group.svg"
            width={20}
            color="white"
            height={20}
            alt="user-group"
          />
          <Text className="text-xs font-semibold text-[#F2ECB6]">
            {userCount || 0}
          </Text>
        </div>
      </div>
      <ItemPlayerView
        name="SUPER"
        slot="super"
        keyPlayer={keyPlayer}
        onHandleClickItemPlayer={onHandleClickItemPlayer}
        className={cn(borderVariant)}
      />
      <ItemPlayerView
        name="DOUBLE"
        slot="double"
        keyPlayer={keyPlayer}
        onHandleClickItemPlayer={onHandleClickItemPlayer}
        className={cn(borderVariant)}
      />
      <ItemPlayerView
        name="EVENT"
        slot="event"
        keyPlayer={keyPlayer}
        onHandleClickItemPlayer={onHandleClickItemPlayer}
      />
    </div>
  );
};

export default PlayerView;
