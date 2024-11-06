import { ActionMap } from '~/@types/contex';
import { User } from '~/types/generated';

export type UserType = {
  user: User | undefined;
  sendJsonMessage?: (data: any) => void;
  isWebSocketOpen?: boolean;
  connectionId?: string;
  lastJsonMessage?: any;
};

// Define the initial state
export const initialUser: UserType = {
  user: undefined
};

export enum Types {
  SetInfo = 'SET_INFO',
  Rest = 'REST',
  SetMoney = 'SET_MONEY',
  SetMoneyActionWithdraw = 'SET_MONEY_ACTION_WITHDRAW'
}

type UserPayload = {
  [Types.SetInfo]: User;
  [Types.SetMoney]: {
    money: number;
  };
  [Types.SetMoneyActionWithdraw]: {
    money: number;
  };
  [Types.Rest]: {};
};

export type UserActions = ActionMap<UserPayload>[keyof ActionMap<UserPayload>];

// Define the reducer function
const userReducer = (state: UserType, action: UserActions) => {
  switch (action.type) {
    case Types.SetInfo: {
      return {
        ...state,
        user: action.payload
      };
    }
    case Types.SetMoney: {
      return {
        ...state,
        user: {
          ...state.user,
          walletMoney: state.user.walletMoney + action.payload.money
        }
      };
    }
    case Types.SetMoneyActionWithdraw: {
      return {
        ...state,
        user: {
          ...state.user,
          walletMoney: state.user.walletMoney - action.payload.money
        }
      };
    }
    case Types.Rest: {
      return {
        ...state,
        user: initialUser.user
      };
    }
    default:
      return state;
  }
};

export { userReducer };
