export type Theme = 'paper' | 'carbon' | 'swiss';

export interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}
