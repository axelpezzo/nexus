export interface UiState {
  primaryMenu: IPrimaryMenu_State;
}

export interface IPrimaryMenu_State {
  menuId: string;
}

export interface UiActions {
  setPrimaryMenuId: (id: string) => void;
}

export type TUiStore = UiState & UiActions;
