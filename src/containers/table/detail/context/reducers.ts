import { ActionMap } from '~/@types/contex';
import { ChipPokerType, Player } from '~/constants/chip';

type PlayerChip = {
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

export type VideoType = {
  small: string;
  large: string;
};

export type PlayerBetType = {
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
  video: VideoType; // Sử dụng đối tượng video
  isWebSocketOpen?: boolean;
  sendJsonMessage?: (message: any) => void;
  lastJsonMessage?: any;
  tableId?: string;
  countTime: number;
  roundId: string;
};

// Define the initial state
export const initialPlayerBet: PlayerBetType = {
  chipSelected: 'chip10K',
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
  video: {
    // Cập nhật đối tượng video
    large: process.env.ID_VIDEO_YOUTUBE_LARGE,
    small: process.env.ID_VIDEO_YOUTUBE_SMALL
  },
  countTime: -1,
  roundId: ''
};

export enum Types {
  SetChipSelected = 'SET_CHIP_SELECTED',
  SetPlayers = 'SET_PLAYERS',
  ResetPlayers = 'RESET_PLAYERS',
  SetPrevPlayers = 'SET_PREV_PLAYERS',
  RetryPlayers = 'RETRY_PLAYERS',
  SwapVideo = 'SWAP_VIDEO',
  SetCountTime = 'SET_COUNT_TIME',
  SetRoundId = 'SET_ROUND_ID'
}

type PlayerBetPayload = {
  [Types.SetChipSelected]: { chip: ChipPokerType };
  [Types.SetPlayers]: {
    name: Player;
    data: PlayerChip;
  };
  [Types.ResetPlayers]: {};
  [Types.SetPrevPlayers]: {};
  [Types.RetryPlayers]: {};
  [Types.SwapVideo]: {
    video: VideoType;
  };
  [Types.SetCountTime]: {
    countTime: number;
  };
  [Types.SetRoundId]: {
    roundId: string;
  };
};

export type PlayerBetActions =
  ActionMap<PlayerBetPayload>[keyof ActionMap<PlayerBetPayload>];

// Define the reducer function
const playerBetReducer = (state: PlayerBetType, action: PlayerBetActions) => {
  switch (action.type) {
    case Types.SetChipSelected: {
      return {
        ...state,
        chipSelected: action.payload.chip
      };
    }
    case Types.SetPlayers: {
      const { name, data } = action.payload;
      return {
        ...state,
        players: {
          ...state.players,
          [name]: data
        }
      };
    }
    case Types.ResetPlayers: {
      return {
        ...state,
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
      };
    }
    case Types.SetPrevPlayers: {
      return {
        ...state,
        prevPlayers: state.players
      };
    }
    case Types.RetryPlayers: {
      return {
        ...state,
        players: state.prevPlayers
      };
    }
    case Types.SwapVideo: {
      const { video } = action.payload;

      return {
        ...state,
        video: { ...video }
      };
    }
    case Types.SetCountTime: {
      return {
        ...state,
        countTime: action.payload.countTime
      };
    }
    case Types.SetRoundId: {
      return {
        ...state,
        roundId: action.payload.roundId
      };
    }
    default:
      return state;
  }
};

export { playerBetReducer };
