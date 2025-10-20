import { useContext } from 'react';
import AppContext from './AppContext';
import type { AppContextType } from './AppContext';

export default function useAppContext(): AppContextType {
  const ctx = useContext(AppContext as React.Context<AppContextType | undefined>);
  if (!ctx) throw new Error('useAppContext must be used within AppProvider');
  return ctx as AppContextType;
}
