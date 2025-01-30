"use client";

import { createUiStore, initUiStore } from "@/state/ui";
import { TUiStore } from "@/state/ui/types";
import { useStore } from "zustand";
import { createContext, useRef, useContext } from "react";
import { UiStoreApi, UiStoreProviderProps } from "./types";

export const UiStoreContext = createContext<UiStoreApi | undefined>(undefined);

export const UiStoreProvider = ({ children }: UiStoreProviderProps) => {
  const storeRef = useRef<UiStoreApi>(null);
  if (!storeRef.current) {
    storeRef.current = createUiStore(initUiStore());
  }

  return (
    <UiStoreContext.Provider value={storeRef.current}>
      {children}
    </UiStoreContext.Provider>
  );
};

export const useUiStore = <T,>(selector: (store: TUiStore) => T): T => {
  const uiStoreContext = useContext(UiStoreContext);

  if (!uiStoreContext) {
    throw new Error(`useUiStore must be used within UiStoreProvider`);
  }

  return useStore(uiStoreContext, selector);
};
