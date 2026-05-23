/**
 * ThemeProvider — wraps the app with `next-themes` so light mode is
 * applied consistently via the `class` strategy on <html>.
 *
 * We re-export `useTheme` for ergonomic imports from a single module.
 */

import { ThemeProvider as NextThemesProvider, useTheme as useNextTheme } from "next-themes";
import type { ReactNode } from "react";

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"
      forcedTheme="light"
      enableSystem={false}
      disableTransitionOnChange={true}
      storageKey="inievo-theme"
    >
      {children}
    </NextThemesProvider>
  );
}

export const useTheme = useNextTheme;
