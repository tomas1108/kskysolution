enum CHIP_SELECTED {
  'chip10k',
  'chip30k',
  'chip50K',
  'chip100K',
  'chip500K',
  'chip1M'
}

export type ChipPokerType =
  | 'chip10K'
  | 'chip30K'
  | 'chip50K'
  | 'chip100K'
  | 'chip500K'
  | 'chip1M';

export type Player = 'player1' | 'player2' | 'player3';

export type Slot = 'super' | 'double' | 'event';
