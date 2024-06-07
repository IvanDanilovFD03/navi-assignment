import { create } from "zustand";

export interface DateState {
  openMenu: boolean;
  setOpenMenu: (value: boolean) => void;
}

const useNavigationMenuStore = create<DateState>()((set) => ({
  openMenu: false,
  setOpenMenu: (value: boolean) => set((state) => ({ openMenu: value })),
}));

export default useNavigationMenuStore;
