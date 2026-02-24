'use client';

import React, { createContext, useContext, useMemo } from 'react';

type Theme = 'light';
type ThemeProviderState = {
  theme: Theme;
  resolvedTheme: 'light';
  setTheme: (theme: Theme) => void;
};

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // We are forcing a single universal theme for the showcase website
  const theme = 'light';
  const resolvedTheme = 'light';

  const setTheme = () => {
    // No-op as we are enforcing a single theme
  };

  const value = useMemo(() => ({ theme, resolvedTheme, setTheme }), []);

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};