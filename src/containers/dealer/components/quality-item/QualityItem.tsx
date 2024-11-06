import Image from 'next/image';
import { cn } from '~/lib/utils';
import betResultStore from '~/store/zustand/betResultStore';
import { isEmpty } from 'lodash';
import { Button } from '~/components/ui/button';

type QualityItemProps = {
  title: string;
  quality?: string;
  type: 'dealer' | 'player1' | 'player2' | 'player3';
  isChecked?: boolean;
  cards?: string[];
};

const titleVariants = cn('text-semibold text-2xl');
const buttonVariants = cn(
  'rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:opacity-80 data-[active]:opacity-80'
);
const checkVariants = cn('rounded-full p-2 shadow-2xl');

const QualityItem: React.FC<QualityItemProps> = ({
  title,
  quality,
  type,
  isChecked,
  cards
}) => {
  const { setTypeEdit, onConfirmResults, resetResultConfirm, resetResult } =
    betResultStore();

  const handleUpdatePlayer = () => {
    setTypeEdit(type);
  };

  const onCancelPlayer = () => {
    resetResultConfirm(type);
    resetResult(type);
  };

  return (
    <div
      className={cn(
        isChecked && checkVariants,
        'flex flex-col gap-2 rounded-md p-2'
      )}
    >
      <span className={cn(titleVariants)}>{title}</span>
      <div className="flex flex-row flex-wrap gap-2">
        {isEmpty(cards)
          ? Array.from({ length: 3 }).map((_, index) => (
              <Image
                key={index}
                className={cn(
                  'cursor-pointer drop-shadow-md transition-transform duration-500'
                )}
                src="/images/card/card-poker.png"
                alt="spade-1"
                width="42"
                height="42"
              />
            ))
          : cards?.map((card, index) => {
              const folder = card.split('-')[0];
              return (
                <Image
                  key={index}
                  className={cn(
                    'cursor-pointer drop-shadow-md transition-transform duration-500'
                  )}
                  src={`/images/card/${folder}/${card}.png`}
                  alt={card}
                  width="42"
                  height="42"
                />
              );
            })}
      </div>
      <span>
        카드 족보 (CHẤT BÀI) :<br />
        <span className="text-xl font-bold">{quality ?? '-'}</span>
      </span>
      <div className="flex flex-row gap-2">
        <Button
          className={cn(
            buttonVariants,
            `${isChecked ? 'bg-red-500' : 'bg-gray-300'}`
          )}
          onClick={onCancelPlayer}
          disabled={!isChecked}
        >
          Huỷ bỏ
        </Button>
        <Button onClick={handleUpdatePlayer} className={cn(buttonVariants)}>
          Chỉnh sửa{' '}
        </Button>
        <Button
          disabled={!isChecked}
          className={cn(buttonVariants, `${isChecked ? '' : 'bg-gray-300'}`)}
          onClick={onConfirmResults}
        >
          Xác nhận
        </Button>
      </div>
    </div>
  );
};

export default QualityItem;
