import { cva } from 'class-variance-authority';
import Image, { ImageProps } from 'next/image';
import { useCallback } from 'react';
import { cn } from '~/lib/utils';

type ChipPokerProps = Omit<ImageProps, 'alt' | 'onClick' | 'src'> & {
  onClick?: () => void;
  selected?: boolean;
  variant: ChipPokerVariant;
  alt?: string;
  sound?: boolean;
  hover?: boolean;
};

const chipsPoker = {
  chip10K: '/images/chip/chip-10k-x3.png',
  chip30K: '/images/chip/chip-30k-x3.png',
  chip50K: '/images/chip/chip-50k-x3.png',
  chip100K: '/images/chip/chip-100k-x3.png',
  chip500K: '/images/chip/chip-500k-x3.png',
  chip1M: '/images/chip/chip-1M-x3.png'
};

const chipPokerVariants = cva(
  'cursor-pointer transition-transform duration-200 ease-in-out hover:scale-[1.4]',
  {
    variants: {
      variant: {
        chip10K: 'hover:drop-shadow-chip-poker-10K',
        chip30K: 'hover:drop-shadow-chip-poker-30K',
        chip50K: 'hover:drop-shadow-chip-poker-50K',
        chip100K: 'hover:drop-shadow-chip-poker-100K',
        chip500K: 'hover:drop-shadow-chip-poker-500K',
        chip1M: 'hover:drop-shadow-chip-poker-1M'
      }
    }
  }
);

const DropShadowChipPoker = {
  chip10K: 'drop-shadow-chip-poker-10K',
  chip30K: 'drop-shadow-chip-poker-30K',
  chip50K: 'drop-shadow-chip-poker-50K',
  chip100K: 'drop-shadow-chip-poker-100K',
  chip500K: 'drop-shadow-chip-poker-500K',
  chip1M: 'drop-shadow-chip-poker-1M'
};

const BorderChipPoker = {
  chip10K: 'border-2 border-chip-poker-10K rounded-full',
  chip30K: 'border-2 border-chip-poker-30K rounded-full',
  chip50K: 'border-2 border-chip-poker-50K rounded-full',
  chip100K: 'border-2 border-chip-poker-100K rounded-full',
  chip500K: 'border-2 border-chip-poker-500K rounded-full',
  chip1M: 'border-2 border-chip-poker-1M rounded-full'
};

const ChipPoker: React.FC<ChipPokerProps> = ({
  variant,
  onClick,
  hover,
  selected,
  className,
  sound,
  ...props
}) => {
  const handleClickChip = useCallback(() => {
    sound && new Audio('/sounds/clicking-chip-2.wav').play();
    onClick && onClick();
  }, [onClick, sound]);

  return (
    <Image
      {...props}
      src={chipsPoker[variant]}
      alt={`chip-poker-${variant}`}
      onClick={handleClickChip}
      className={cn(
        hover &&
          chipPokerVariants({
            variant
          }),
        className,
        selected &&
          `scale-[1.4] ${DropShadowChipPoker[variant]} border-2 ${BorderChipPoker[variant]}`
      )}
    />
  );
};

export default ChipPoker;
