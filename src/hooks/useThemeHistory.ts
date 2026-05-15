import { useState, useCallback } from 'react';
import type { Theme, ThemeSnapshot } from '@/types';


// this file is used to store the history of theme changes

export function useThemeHistory(setThemeInternal: React.Dispatch<React.SetStateAction<Theme>>) {
  const [history, setHistory] = useState<ThemeSnapshot[]>([]);

  // push theme to history
  const pushToHistory = useCallback((currentTheme: Theme) => {
    setHistory(prev => [{ theme: currentTheme, timestamp: Date.now() }, ...prev].slice(0, 20));
  }, []);

  // undo theme change
  const undo = useCallback(() => {
    setHistory(prev => {
      if (prev.length === 0) return prev;
      const [last, ...rest] = prev;
      setThemeInternal(last!.theme);
      return rest;
    });
  }, [setThemeInternal]);

  return {
    history,
    pushToHistory,
    undo,
    canUndo: history.length > 0,
  };
}
