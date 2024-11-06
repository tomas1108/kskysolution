import { useTransition, animated } from '@react-spring/web';
import { ChipPoker, Typography } from '~/components';
import { cn } from '~/lib/utils';
import { formatCurrency } from '~/utils/common';
import { Player, Slot } from '~/constants/chip';
import { useMemo } from 'react';
import Image from 'next/image';
import { usePlayerBet } from '../../context';

type ItemPlayerViewProps = {
  name: string;
  onHandleClickItemPlayer: ({
    slot,
    keyPlayer
  }: {
    slot: Slot;
    keyPlayer: Player;
  }) => void;
  slot: Slot;
  keyPlayer: Player;
  className?: string;
};

const { Text } = Typography;

const TRANSITION_CONFIG = {
  from: { opacity: 0, transform: 'translate3d(0, -40px, 0)' },
  enter: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
  leave: { opacity: 0, transform: 'translate3d(0, -40px, 0)' }
};

const variantCommon = cn('flex flex-col justify-center items-center gap-1');

const variantHoverCommon = cn('hover:brightness-115 raise hover:z-[1000000]');

const ItemPlayerView: React.FC<ItemPlayerViewProps> = ({
  name,
  keyPlayer,
  onHandleClickItemPlayer,
  slot,
  className
}) => {
  const { players } = usePlayerBet();

  const chips = players[keyPlayer][slot].chips;

  const transitionChips = useTransition(chips ?? [], TRANSITION_CONFIG);

  const totalMoney = chips?.reduce((acc, chip) => acc + chip.value, 0);

  const formatTotalMoney = useMemo(() => {
    const pointMillion = totalMoney / 1000000;
    if (pointMillion >= 1) {
      return `${pointMillion}M`;
    }

    return totalMoney / 1000 >= 1 ? `${totalMoney / 1000}K` : totalMoney;
  }, [totalMoney]);

  const typeChip = useMemo(() => {
    if (totalMoney >= 10000 && totalMoney < 30000) {
      return {
        chip: 'chip10K',
        className: 'text-[#338610]'
      };
    }
    if (totalMoney >= 30000 && totalMoney < 50000) {
      return {
        chip: 'chip30K',
        className: 'text-[#0F6480]'
      };
    }
    if (totalMoney >= 50000 && totalMoney < 100000) {
      return {
        chip: 'chip50K',
        className: 'text-[#BB6C11]'
      };
    }
    if (totalMoney >= 100000 && totalMoney < 500000) {
      return {
        chip: 'chip100K',
        className: 'text-[#B962DC]'
      };
    }
    if (totalMoney >= 500000 && totalMoney < 1000000) {
      return {
        chip: 'chip500K',
        className: 'text-[#E04D4D]'
      };
    }
    return {
      chip: 'chip1M',
      className: 'text-[#DFCF6E]'
    };
  }, [totalMoney]);

  const point = useMemo(() => {
    switch (slot) {
      case 'super':
        return 13;
      case 'double':
        return 6;
      default:
        return 1;
    }
  }, [slot]);

  const isEvent = slot === 'event';

  const playSoundClick = () => {
    new Audio('/sounds/dropping-chip-2.wav').play();
  };

  const handleOnClickItemPlayer = (params: {
    slot: Slot;
    keyPlayer: Player;
  }) => {
    playSoundClick();
    onHandleClickItemPlayer && onHandleClickItemPlayer(params);
  };

  return (
    <div
      id={name}
      className={cn(
        className,
        isEvent ? '' : 'grid grid-cols-3 ',
        'relative h-[52px] w-full cursor-pointer items-center bg-[#1C3669] px-2 hover:bg-[#1C3669BA]'
      )}
      onClick={handleOnClickItemPlayer.bind(null, { slot, keyPlayer })}
    >
      <div
        className={cn(
          'flex flex-row items-center',
          isEvent ? ' justify-center gap-4' : 'col-span-2 justify-between gap-2'
        )}
      >
        <Text
          className={cn(
            'text-center font-semibold text-white',
            isEvent ? 'text-[14px]' : 'text-xs'
          )}
        >
          {formatCurrency(totalMoney * point)}
        </Text>
        <Text
          dangerouslySetInnerHTML={{
            __html: name
          }}
          className={cn(
            'inline-block bg-gradient-to-r from-[#F2ECB6] via-[#A96F44] to-[#F2ECB6] bg-clip-text font-semibold text-transparent',
            isEvent ? 'text-sm' : 'text-xs'
          )}
        />
        <div className={cn(variantCommon, variantHoverCommon)}>
          <div className="flex h-[52px] w-[52px] flex-col justify-center">
            {transitionChips((style, item, _transitionState) => {
              return (
                <animated.div
                  key={item.id}
                  style={style}
                  className={cn(`absolute`)}
                >
                  <div className="relative flex h-full w-full items-center justify-center">
                    <Image
                      src={`/images/chip/${typeChip.chip}.png`}
                      alt="Chip"
                      width={52}
                      height={52}
                    />
                    <span
                      className={cn(
                        'absolute z-10 font-semibold',
                        typeChip.className
                      )}
                    >
                      {formatTotalMoney}
                    </span>
                  </div>
                </animated.div>
              );
            })}
          </div>
        </div>
      </div>
      {!isEvent && (
        <div className="flex h-full w-full flex-row items-center border-l-[1px] border-[#0056FF] pl-2 ">
          <Text className="text-[16px] font-semibold text-[#091E46]">{`X${point}`}</Text>
          <div className="relative ml-2 flex h-full w-[52px] flex-col justify-center">
            {transitionChips((style, item, _transitionState, index) => {
              const order = index >= 5 ? 5 : index;
              let styleClone =
                order % 8 === 0
                  ? { ...style }
                  : ({
                      ...style,
                      bottom: `${(order % 8) * 8}px`,
                      zIndex: index
                    } as any);

              return (
                <animated.div
                  key={item.id}
                  style={styleClone}
                  className={cn(`absolute`)}
                >
                  <ChipPoker variant={item.chipType} width={42} height={42} />
                </animated.div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemPlayerView;
