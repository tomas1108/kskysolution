type ItemResultRound = {
  cards: string[];
  point: number;
  quality: string;
};

export type ResultRound = {
  dealer: ItemResultRound;
  player1: ItemResultRound;
  player2: ItemResultRound;
  player3: ItemResultRound;
};
