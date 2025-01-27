import { createStore } from "zustand/vanilla";
import { TUiStore, UiState } from "./types";

export const defaultInitState: UiState = {
  primaryMenu: {
    menuId: "",
  },
};

export const initUiStore = (): UiState => {
  return { primaryMenu: { menuId: "" } };
};

export const createUiStore = (initState: UiState = defaultInitState) => {
  return createStore<TUiStore>()((set) => ({
    ...initState,
    setPrimaryMenuId: (id: string) =>
      set(() => ({ primaryMenu: { menuId: id } })),
  }));
};
