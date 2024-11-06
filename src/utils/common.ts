import dayjs from 'dayjs';
import { isEmpty } from 'lodash';
import { MAP_POINT_QUALITY, TYPE_CARD_VALUE } from '~/constants/bet-result';
import { ChipPokerType } from '~/constants/chip';
import { ResultBet } from '~/types/generated';

export const formatCurrency = (
  value: number | undefined | null,
  prefix = 'đ'
) =>
  `${prefix} ${`${Math.ceil(value || 0)}`.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ','
  )}`;

export function generateExpiresAtMillisecond(date: string, seconds: number) {
  const milliseconds = dayjs(date).add(seconds, 'second').valueOf();

  return milliseconds;
}

export const moneyChip = (chip: ChipPokerType) => {
  switch (chip) {
    case 'chip10K':
      return 10000;
    case 'chip30K':
      return 30000;
    case 'chip50K':
      return 50000;
    case 'chip100K':
      return 100000;
    case 'chip500K':
      return 500000;
    case 'chip1M':
      return 1000000;
    default:
      return 0;
  }
};

export const getTotalMoney = (
  chips: {
    chipType: ChipPokerType;
    value: number;
    id: number;
  }[]
) => chips.reduce((acc, chip) => acc + chip.value, 0);

// Function to get the numeric value of a card
const getCardValue = (card: string): number => {
  const value = card.split('-')[1];
  return parseInt(value, 10);
};

export const findMaxCard = (cards: string[]): string => {
  if (isEmpty(cards)) {
    return '';
  }
  return cards.reduce((maxCard, currentCard) => {
    return getCardValue(currentCard) > getCardValue(maxCard)
      ? currentCard
      : maxCard;
  });
};

const checkWinnerDealer = ({
  pointDeader,
  pointPlayer,
  maxCardDealer,
  maxCardPlayer
}: {
  pointDeader: number;
  pointPlayer: number;
  maxCardDealer: string;
  maxCardPlayer: string;
}) => {
  if (pointDeader === pointPlayer) {
    const [typeCardDealer, valueCardDealer] = maxCardDealer.split('-');
    const [typeCardPlayer, valueCardPlayer] = maxCardPlayer.split('-');
    if (Number(valueCardDealer) === Number(valueCardPlayer)) {
      const valueTypeCardDealer =
        TYPE_CARD_VALUE[typeCardDealer as keyof typeof TYPE_CARD_VALUE];
      const valueTypeCardPlayer =
        TYPE_CARD_VALUE[typeCardPlayer as keyof typeof TYPE_CARD_VALUE];
      if (valueTypeCardDealer === valueTypeCardPlayer) {
        return true;
      }
      return valueTypeCardDealer > valueTypeCardPlayer;
    }
    return Number(valueCardDealer) > Number(valueCardPlayer);
  }

  return pointDeader > pointPlayer;
};

export const getDataResultRound = (result: ResultBet) => {
  const pointDealer =
    MAP_POINT_QUALITY[result.dealer.quality as keyof typeof MAP_POINT_QUALITY];
  const pointPlayer1 =
    MAP_POINT_QUALITY[result.player1.quality as keyof typeof MAP_POINT_QUALITY];
  const pointPlayer2 =
    MAP_POINT_QUALITY[result.player2.quality as keyof typeof MAP_POINT_QUALITY];
  const pointPlayer3 =
    MAP_POINT_QUALITY[result.player3.quality as keyof typeof MAP_POINT_QUALITY];

  const maxCardDealer = findMaxCard(result.dealer.cards as string[]);
  const maxCardPlayer1 = findMaxCard(result.player1.cards as string[]);
  const maxCardPlayer2 = findMaxCard(result.player2.cards as string[]);
  const maxCardPlayer3 = findMaxCard(result.player3.cards as string[]);

  const isDealerWinPlayer1 = checkWinnerDealer({
    pointDeader: pointDealer,
    pointPlayer: pointPlayer1,
    maxCardDealer,
    maxCardPlayer: maxCardPlayer1
  });
  const isDealerWinPlayer2 = checkWinnerDealer({
    pointDeader: pointDealer,
    pointPlayer: pointPlayer2,
    maxCardDealer,
    maxCardPlayer: maxCardPlayer2
  });
  const isDealerWinPlayer3 = checkWinnerDealer({
    pointDeader: pointDealer,
    pointPlayer: pointPlayer3,
    maxCardDealer,
    maxCardPlayer: maxCardPlayer3
  });

  return {
    isDealerWin: isDealerWinPlayer1 && isDealerWinPlayer2 && isDealerWinPlayer3,
    isPlayer1Win: !isDealerWinPlayer1,
    isPlayer2Win: !isDealerWinPlayer2,
    isPlayer3Win: !isDealerWinPlayer3
  };
};

export const getIconCard = (type: string) => {
  switch (type) {
    case 'spade':
      return '♠';
    case 'club':
      return '♣';
    case 'heart':
      return '♥';
    case 'diamond':
      return '♦';
    default:
      return '';
  }
};
