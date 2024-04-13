'use client';

import { ThemeMode } from '@/types/interfaces';
import { FC, ReactNode, useState, createContext, Dispatch, SetStateAction } from 'react';

export interface IAppState {
  themeMode: ThemeMode.DARK | ThemeMode.LIGHT
  isVisibleSecondaryHeaderCTAButton: boolean
}

export interface IAppContext {
  themeMode: ThemeMode.DARK | ThemeMode.LIGHT
  isVisibleSecondaryHeaderCTAButton: boolean
  setAppState: Dispatch<SetStateAction<IAppState>>
}

interface IAppCoreProvider {
  children: ReactNode;
}

export const AppContext = createContext<IAppContext | null>(null);

export const AppContextProvider: FC<IAppCoreProvider> = ({ children }) => {
  const [state, setState] = useState<IAppState>({
    themeMode: ThemeMode.DARK,
    isVisibleSecondaryHeaderCTAButton: true
  });

  return (
    <AppContext.Provider
      value={{
        themeMode: state.themeMode,
        isVisibleSecondaryHeaderCTAButton: state.isVisibleSecondaryHeaderCTAButton,
        setAppState: setState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

