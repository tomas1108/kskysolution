'use client';

import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useReducer
} from 'react';
import {
  initialUser,
  Types,
  UserActions,
  userReducer,
  UserType
} from './userReducers';
import { useUserInfo } from '../gql/user';
import useAppWebSocket from '../useAppWebSocket';
import auth from '~/utils/auth';

// Define the types for the props and the state
type Props = PropsWithChildren<{}>;

const UserContext = createContext<UserType>({
  ...initialUser
});

const UserDispatchContext = createContext(
  (() => {}) as React.Dispatch<UserActions>
);

// Define the provider component
export function UserProvider({ children }: Props) {
  // @ts-ignore
  const { sendJsonMessage, isWebSocketOpen, connectionId, lastJsonMessage } =
    useAppWebSocket();
  const [user, dispatch] = useReducer(userReducer, initialUser);

  const { user: userInfo, refetch } = useUserInfo();

  useEffect(() => {
    if (userInfo) {
      dispatch({
        type: Types.SetInfo,
        payload: userInfo
      });
    }
  }, [userInfo]);

  useEffect(() => {
    if (auth.getToken) {
      refetch();
    }
  }, [auth.getToken]);

  return (
    <UserContext.Provider
      value={{
        ...user,
        sendJsonMessage,
        isWebSocketOpen,
        lastJsonMessage,
        connectionId
      }}
    >
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserContext.Provider>
  );
}
// Define hooks for accessing the state and the dispatch function
export function useUser() {
  return useContext(UserContext);
}

export function useUserDispatch() {
  return useContext(UserDispatchContext);
}
