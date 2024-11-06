'use client';
import {
  PropsWithChildren,
  createContext,
  useContext,
  useReducer
} from 'react';
import {
  initialPlayerBet,
  playerBetReducer,
  PlayerBetActions,
  PlayerBetType
} from './reducers';
import { useParams } from 'next/navigation';

// Define the types for the props and the state
type Props = PropsWithChildren<{}>;

const PlayerBetContext = createContext<PlayerBetType>({
  ...initialPlayerBet
});

const PlayerBetDispatchContext = createContext(
  (() => {}) as React.Dispatch<PlayerBetActions>
);

// Define the provider component
export function PlayerBetProvider({ children }: Props) {
  const { tableId } = useParams() as {
    tableId: string;
  };
  // @ts-ignore
  const [playerBet, dispatch] = useReducer(playerBetReducer, initialPlayerBet);

  return (
    <PlayerBetContext.Provider
      value={{
        ...playerBet,
        tableId
      }}
    >
      <PlayerBetDispatchContext.Provider value={dispatch}>
        {children}
      </PlayerBetDispatchContext.Provider>
    </PlayerBetContext.Provider>
  );
}
// Define hooks for accessing the state and the dispatch function
export function usePlayerBet() {
  return useContext(PlayerBetContext);
}

export function usePlayerBetDispatch() {
  return useContext(PlayerBetDispatchContext);
}
