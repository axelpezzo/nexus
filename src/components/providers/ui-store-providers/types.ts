import { createUiStore } from "@/state/ui";
import { ReactNode } from "react";

export type UiStoreApi = ReturnType<typeof createUiStore>;

export interface UiStoreProviderProps {
  children: ReactNode;
}
