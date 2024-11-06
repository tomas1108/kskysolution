import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export type PlayerChip = {
  i18nextLng: string;
};

interface App {
  i18nextLng: string;
  setI18nextLng: (payload: string) => void;
}

const appStore = create<App>()(
  persist(
    (set) => ({
      i18nextLng: 'vi',
      setI18nextLng: (payload) => set({ i18nextLng: payload })
    }),
    {
      name: 'app',
      storage: createJSONStorage(() => localStorage)
    }
  )
);

export default appStore;
