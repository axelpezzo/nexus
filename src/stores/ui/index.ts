import { createStore } from "zustand/vanilla";
import { TUiStore, UiState } from "./types";

export const defaultInitState: UiState = {
  primaryMenu: {
    menuId: "",
  },
  secondaryMenu: {
    menuId: "",
    open: false,
  },
};

export const initUiStore = (): UiState => {
  return {
    primaryMenu: { menuId: "" },
    secondaryMenu: { menuId: "", open: false },
  };
};

export const createUiStore = (initState: UiState = defaultInitState) => {
  return createStore<TUiStore>()((set) => ({
    ...initState,
    setPrimaryMenuId: (id: string) =>
      set(() => ({ primaryMenu: { menuId: id } })),

    setSecondaryMenuId: (id: string) =>
      set((state) => ({
        secondaryMenu: { ...state.secondaryMenu, menuId: id },
      })),

    setSecondaryMenuOpen: (open: boolean) =>
      set((state) => ({ secondaryMenu: { ...state.secondaryMenu, open } })),
  }));
};
