export interface UiState {
  primaryMenu: IPrimaryMenu_State;
  secondaryMenu: ISecondaryMenu_State;
}

export interface IPrimaryMenu_State {
  menuId: string;
}

export interface ISecondaryMenu_State {
  menuId: string;
  open: boolean;
}

export interface UiActions {
  setPrimaryMenuId: (id: string) => void;
  setSecondaryMenuId: (id: string) => void;
  setSecondaryMenuOpen: (open: boolean) => void;
}

export type TUiStore = UiState & UiActions;
