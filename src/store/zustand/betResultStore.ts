import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { Quality } from '~/constants/bet-result';

type Result = {
  dealer: {
    quality: Quality | null;
    point: number;
    cards: string[];
  };
  player1: {
    quality: Quality | null;
    point: number;
    cards: string[];
  };
  player2: {
    quality: Quality | null;
    point: number;
    cards: string[];
  };
  player3: {
    quality: Quality | null;
    point: number;
    cards: string[];
  };
};

type TypePlayer = 'dealer' | 'player1' | 'player2' | 'player3';

interface Byp {
  typeEdit: TypePlayer | null;
  results: Result;
  resultsConfirm: Result | null;
  setTypeEdit: (type: TypePlayer | null) => void;
  setResults: (payload: any) => void;
  onConfirmResults: () => void;
  resetResult: (type: TypePlayer) => void;
  resetResultConfirm: (type: TypePlayer) => void;
  resetAll: () => void;
}

const betResultStore = create<Byp>()(
  devtools((set) => ({
    typeEdit: null,
    results: {
      dealer: {
        quality: null,
        point: 0,
        cards: []
      },
      player1: {
        quality: null,
        point: 0,
        cards: []
      },
      player2: {
        quality: null,
        point: 0,
        cards: []
      },
      player3: {
        quality: null,
        point: 0,
        cards: []
      }
    },
    resultsConfirm: null,
    setTypeEdit: (type) => set((state) => ({ typeEdit: type })),
    setResults: (payload) =>
      set((state) => ({
        results: {
          ...state.results,
          [state.typeEdit!]: {
            ...state.results[state.typeEdit!],
            ...payload
          }
        }
      })),
    onConfirmResults: () => {
      set((state) => ({ resultsConfirm: state.results, typeEdit: null }));
    },
    resetResult: (type: TypePlayer) =>
      set((state) => ({
        results: {
          ...state.results,
          [type]: {
            quality: null,
            point: 0,
            cards: []
          }
        }
      })),
    resetResultConfirm: (type: TypePlayer) =>
      set((state) => ({
        resultsConfirm: {
          ...((state.resultsConfirm as any) ?? {}),
          [type]: {
            quality: null,
            point: 0,
            cards: []
          }
        }
      })),
    resetAll: () => {
      set({
        typeEdit: null,
        results: {
          dealer: {
            quality: null,
            point: 0,
            cards: []
          },
          player1: {
            quality: null,
            point: 0,
            cards: []
          },
          player2: {
            quality: null,
            point: 0,
            cards: []
          },
          player3: {
            quality: null,
            point: 0,
            cards: []
          }
        },
        resultsConfirm: null
      });
    }
  }))
);

export default betResultStore;
