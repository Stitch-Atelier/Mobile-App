import { create } from "zustand";

interface IsEmptyStore {
  isEmpty: boolean;
  setIsEmpty: (value: boolean) => void;
}

export const useIsEmptyStore = create<IsEmptyStore>((set) => ({
  isEmpty: true,
  setIsEmpty: (value: boolean) => set({ isEmpty: value }),
}));
