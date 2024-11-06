import { useCallback } from 'react';
import { ChipPoker } from '~/components';
import { ChipPokerType } from '~/constants/chip';
import { usePlayerBet, usePlayerBetDispatch } from '../../context';
import { Types } from '../../context/reducers';

type ChipsViewProps = {};

const chipsPoker: ChipPokerType[] = [
  'chip10K',
  'chip30K',
  'chip50K',
  'chip100K',
  'chip500K',
  'chip1M'
];

const ChipsView: React.FC<ChipsViewProps> = () => {
  const { chipSelected } = usePlayerBet();
  const dispatchPlayerBet = usePlayerBetDispatch();

  const handleClickChip = useCallback((chip: ChipPokerType) => {
    dispatchPlayerBet({
      type: Types.SetChipSelected,
      payload: {
        chip
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mb-1 flex w-full flex-row justify-center gap-3">
      {chipsPoker.map((chip, index) => (
        <ChipPoker
          id={`chip-${chip}`}
          variant={chip}
          sound
          hover
          onClick={handleClickChip.bind(null, chip)}
          selected={chipSelected === chip}
          key={index}
          width={52}
          height={52}
        />
      ))}
    </div>
  );
};

export default ChipsView;
