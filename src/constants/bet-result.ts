export type Quality =
  | '소카드'
  | '포카드'
  | 'niuniu'
  | 'niu9'
  | 'niu8'
  | 'niu7'
  | 'niu6'
  | 'niu5'
  | 'niu4'
  | 'niu3'
  | 'niu2'
  | 'niu1'
  | 'High Card';

export const MAP_POINT_QUALITY = {
  niu1: 1,
  niu2: 2,
  niu3: 3,
  niu4: 4,
  niu5: 5,
  niu6: 6,
  niu7: 7,
  niu8: 8,
  niu9: 9,
  hightCard: 0,
  소카드: 100000,
  포카드: 10000,
  올픽쳐: 1000,
  niuniu: 100
};

export enum CARD_POKER_TYPE {
  SPADE = 'spade',
  CLUB = 'club',
  HEART = 'heart',
  DIAMOND = 'diamond'
}

export const TYPE_CARD_VALUE = {
  [CARD_POKER_TYPE.SPADE]: 4,
  [CARD_POKER_TYPE.HEART]: 3,
  [CARD_POKER_TYPE.CLUB]: 2,
  [CARD_POKER_TYPE.DIAMOND]: 1
};
