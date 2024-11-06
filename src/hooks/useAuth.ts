import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import Cookies from 'js-cookie';
import { SignInOutput } from '~/types/generated';

export enum AUTH {
  AUTHED = 'authed',
  NOT_AUTHED = 'not_authed'
}

type LocalUser = {
  authed: AUTH;
  id?: string;
  token?: string | null;
  email?: string | null;
  roles?: string[] | null;
};

interface Byp {
  user: LocalUser;
  ztSignIn: (payload: SignInOutput | null | undefined) => void;
  removeAuth: () => void;
}

const useAuth = create<Byp>()(
  devtools(
    persist(
      (set) => ({
        user: { authed: AUTH.NOT_AUTHED },
        ztSignIn: (payload: SignInOutput | null | undefined) => {
          if (!payload) {
            return;
          }
          Cookies.set('token', payload.accessToken as string);
          set({
            user: {
              authed: AUTH.AUTHED,
              token: payload.accessToken,
              id: payload.user.id
            }
          });
        },
        removeAuth: () => {
          set({ user: { authed: AUTH.NOT_AUTHED } });
          Cookies.remove('token');
        }
      }),
      {
        name: 'byp',
        getStorage: () => localStorage
      }
    )
  )
);

export default useAuth;
