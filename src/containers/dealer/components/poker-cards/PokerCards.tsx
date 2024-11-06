import Image from 'next/image';
import { useMemo } from 'react';
import { CARD_POKER, CLUBS, DIAMONDS, HEARTS, SPADES } from '~/constants/card';
import { cn } from '~/lib/utils';
import betResultStore from '~/store/zustand/betResultStore';

type PokerCardsProps = {};

const Cards = ({
  data,
  selectedIds
}: {
  data: { value: number; type: CARD_POKER; image: string }[];
  selectedIds: string[];
}) => {
  const { setResults, results, typeEdit } = betResultStore();

  const handleSelectCard = (type: CARD_POKER, value: number) => {
    if (!typeEdit) return;
    const cards = [...results[typeEdit].cards];
    cards.push(`${type}-${value}`);
    const point = cards.reduce((acc, item) => {
      const [_, value] = item.split('-');
      return acc + parseInt(value);
    }, 0);
    setResults({
      cards,
      point
    });
  };

  return (
    <div className="flex flex-row flex-wrap gap-3	">
      {data.map((item) => {
        const classNameSelected =
          selectedIds?.includes(`${item.type}-${item.value}`) &&
          'rounded-[6px] scale-[1.3] transition-transform duration-500 border-2 border-lime-200';
        return (
          <Image
            onClick={handleSelectCard.bind(null, item.type, item.value)}
            className={cn(
              classNameSelected,
              'cursor-pointer drop-shadow-md transition-transform duration-500 hover:scale-[1.3]'
            )}
            key={`${item.type}-${item.value}`}
            src={item.image}
            alt={`${item.type}-${item.value}`}
            width="62"
            height="62"
          />
        );
      })}
    </div>
  );
};

const PokerCards: React.FC<PokerCardsProps> = () => {
  const { results, typeEdit } = betResultStore();

  const selectedIds = useMemo(
    () => (!typeEdit ? [] : results?.[typeEdit].cards),
    [results, typeEdit]
  );

  return (
    <div className="flex flex-col gap-3">
      <span className="font-semibold tracking-wider">Poker card</span>
      <Cards data={HEARTS} selectedIds={selectedIds} />
      <Cards data={DIAMONDS} selectedIds={selectedIds} />
      <Cards data={CLUBS} selectedIds={selectedIds} />
      <Cards data={SPADES} selectedIds={selectedIds} />
    </div>
  );
};

export default PokerCards;
