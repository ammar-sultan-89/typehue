// All CSS custom property variable names used in the theme system
export type CssColorVar =
  | '--color-bg'
  | '--color-surface'
  | '--color-primary'
  | '--color-primary-fg' 
  | '--color-text'
  | '--color-text-muted'
  | '--color-border'
  | '--color-secondary'
  | '--color-secondary-fg'
  | '--color-tertiary'
  | '--color-tertiary-fg';

export type CssFontVar =
  | '--font-display'
  | '--font-body'
  | '--font-mono';

// Core variables always shown in panel, optional ones behind Advanced toggle
export type CoreColorVar = Extract<
  CssColorVar,
  | '--color-bg'
  | '--color-surface'
  | '--color-primary'
  | '--color-primary-fg'
  | '--color-text'
  | '--color-text-muted'
  | '--color-border'
>;

export type OptionalColorVar = Exclude<CssColorVar, CoreColorVar>;

export interface TypographyVars {
  '--display-weight': number;
  '--display-letter-spacing': string;
  '--display-line-height': number;
  '--body-weight': number;
  '--body-line-height': number;
}

// Full theme shape — color vars are a Record for easy iteration
export interface Theme {
  colors: Record<CssColorVar, string>;    // hex strings
  fonts: Record<CssFontVar, string>;      // font family names
  typography: TypographyVars;
}

// A single entry in the curated font list
export interface FontOption {
  family: string;
  category: 'sans-serif' | 'serif' | 'monospace' | 'display';
  variants: string[];                      // available variants e.g. ['400', '400italic', '700']
  googleId: string;                        // URL-safe name for Google Fonts import
  subsets: string[];                       // subsets e.g. ['latin', 'cyrillic']
}

// A named font pairing
export interface FontPair {
  display: FontOption;
  body: FontOption;
  mono?: FontOption;
}

export type Locale = 'en' | 'ar';

// Layout identifiers — extend this union when adding new layouts
export type LayoutId = 'homepage' | 'dashboard' | 'docs';

export interface LayoutConfig {
  id: LayoutId;
  label: string;
  // Which optional color vars this layout requires (auto-enabled in panel)
  requiredOptionalVars: OptionalColorVar[];
  // Whether this layout uses --font-mono
  usesMono: boolean;
}

// Export format types
export type ExportFormat = 'css' | 'tailwind' | 'google-fonts';

// One step in the undo history
export interface ThemeSnapshot {
  theme: Theme;
  timestamp: number;
}
