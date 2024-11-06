import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { ChipPokerType, Player } from '~/constants/chip';

export type PlayerChip = {
  super: {
    chips: {
      chipType: ChipPokerType;
      value: number;
      id: number;
    }[];
  };
  double: {
    chips: {
      chipType: ChipPokerType;
      value: number;
      id: number;
    }[];
  };
  event: {
    chips: {
      chipType: ChipPokerType;
      value: number;
      id: number;
    }[];
  };
};

interface Byp {
  chipSelected: ChipPokerType | null;
  players: {
    player1: PlayerChip;
    player2: PlayerChip;
    player3: PlayerChip;
  };
  prevPlayers: {
    player1: PlayerChip;
    player2: PlayerChip;
    player3: PlayerChip;
  } | null;
  setPlayers: (payload: { name: Player; data: PlayerChip }) => void;
  resetPlayers: () => void;
  setChipSelected: (payload: ChipPokerType) => void;
  setPrevPlayers: () => void;
  retryPlayers: () => void;
}

const settingBetStore = create<Byp>()(
  devtools((set) => ({
    chipSelected: null,
    players: {
      player1: {
        super: {
          chips: []
        },
        double: {
          chips: []
        },
        event: {
          chips: []
        }
      },
      player2: {
        super: {
          chips: []
        },
        double: {
          chips: []
        },
        event: {
          chips: []
        }
      },
      player3: {
        super: {
          chips: []
        },
        double: {
          chips: []
        },
        event: {
          chips: []
        }
      }
    },
    prevPlayers: null,
    setChipSelected: (payload: ChipPokerType) => {
      if (!payload) {
        return;
      }
      set({
        chipSelected: payload
      });
    },
    setPlayers: ({ name, data }: { name: Player; data: PlayerChip }) => {
      set((state) => {
        return {
          players: {
            ...state.players,
            [name]: data
          }
        };
      });
    },
    resetPlayers: () => {
      set({
        players: {
          player1: {
            super: {
              chips: []
            },
            double: {
              chips: []
            },
            event: {
              chips: []
            }
          },
          player2: {
            super: {
              chips: []
            },
            double: {
              chips: []
            },
            event: {
              chips: []
            }
          },
          player3: {
            super: {
              chips: []
            },
            double: {
              chips: []
            },
            event: {
              chips: []
            }
          }
        }
      });
    },
    setPrevPlayers: () => {
      set((state) => {
        return {
          prevPlayers: state.players
        };
      });
    },
    retryPlayers: () => {
      set((state) => {
        return {
          players: state.prevPlayers as any
        };
      });
    }
  }))
);

export default settingBetStore;
