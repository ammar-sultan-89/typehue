import { createContext, useContext, useState, useEffect, useCallback, ReactNode, useMemo, useRef } from 'react';
import type { Theme, CssColorVar, CssFontVar, LayoutId, TypographyVars } from '@/types';
import { resolveAutoAdjust, generatePalette as generatePaletteFromMode, PaletteHarmony } from '@/data/palettes';
import { hexToHsl } from '@/utils/colors';
import { COLOR_THEME_PRESETS, ColorMode, ColorThemePreset } from '@/data/colorThemePresets';
import { useLocale } from '@/contexts/LocaleContext';
import { getRandomThemeState } from '@/utils/theme';
import { useThemeDOM } from '@/hooks/useThemeDOM';
import { useThemeHistory } from '@/hooks/useThemeHistory';

interface ThemeContextValue {
  theme: Theme;
  autoAdjust: boolean;
  setAutoAdjust: (value: boolean) => void;
  paletteHarmony: PaletteHarmony;
  setPaletteHarmony: (harmony: PaletteHarmony) => void;
  derivedVars: Set<CssColorVar>;
  setDerivedVars: React.Dispatch<React.SetStateAction<Set<CssColorVar>>>;
  deriveSingleField: (variable: CssColorVar, modeOverride?: ColorMode, harmonyOverride?: PaletteHarmony) => void;
  rederiveFromPrimary: (mode: ColorMode) => void;
  generatePalette: () => void;
  cleanSlate: (mode: 'light' | 'dark') => void;
  setColor: (variable: CssColorVar, value: string) => void;
  clearColor: (variable: CssColorVar) => void;
  setFont: (variable: CssFontVar, value: string) => void;
  setTheme: (theme: Theme) => void;
  applyPreset: (preset: any) => void;
  randomize: () => void;
  undo: () => void;
  canUndo: boolean;
  activeLayout: LayoutId;
  setActiveLayout: (id: LayoutId) => void;
  setTypography: (variable: keyof TypographyVars, value: string | number) => void;
  activeThemeId: string;
  setActiveThemeId: (id: string) => void;
  activeFontPairId: string;
  setActiveFontPairId: (id: string) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { locale } = useLocale();
  // Initialize with a single source of truth to ensure IDs and Theme match on mount
  const [initial] = useState(() => getRandomThemeState(locale));
  
  const [activeThemeId, setActiveThemeId] = useState<string>(initial.themeId);
  const [activeFontPairId, setActiveFontPairId] = useState<string>(initial.fontPairId);
  const [theme, setThemeInternal] = useState<Theme>(initial.theme);
  
  const [autoAdjust, setAutoAdjust] = useState<boolean>(false);
  const [paletteHarmony, setPaletteHarmony] = useState<PaletteHarmony>('complementary');
  const [derivedVars, setDerivedVars] = useState<Set<CssColorVar>>(new Set());
  const [activeLayout, setActiveLayout] = useState<LayoutId>('homepage');

  const isFirstMount = useRef(true);

  // to prevent the active theme variable from being recomputed,
  // if autoAdjust is true, it calls setDerivedVars with the initial state
  // and removes the active theme variable from the derived variables
  const handleSetAutoAdjust = useCallback((value: boolean) => {
    setAutoAdjust(value);
    if (value) {
      const allVars: CssColorVar[] = [
        '--color-bg', '--color-surface', '--color-primary-fg', '--color-text',
        '--color-text-muted', '--color-border', '--color-secondary', '--color-secondary-fg',
        '--color-tertiary', '--color-tertiary-fg'
      ];
      setDerivedVars(new Set(allVars));
    } else {
      setDerivedVars(new Set());
    }
  }, []);
  
  const { pushToHistory, undo, canUndo } = useThemeHistory(setThemeInternal);

  // Reactive Engine: Recompute derived colors when theme.colors or options change
  const autoComputedColors = useMemo(() => {
    // If autoAdjust is off AND no specific fields are derived, just return current colors
    if (!autoAdjust && derivedVars.size === 0) return theme.colors;
    
    const bgHex = theme.colors['--color-bg'] || '#ffffff';
    const mode: ColorMode = hexToHsl(bgHex)[2] < 50 ? 'dark' : 'light';
    const nextColors = resolveAutoAdjust(theme.colors, derivedVars, mode, paletteHarmony);

    // Stability Check: If the calculated values already match the theme,
    // return the existing reference to prevent downstream effects from re-running.
    const hasChanged = (Object.keys(nextColors) as CssColorVar[]).some(
      key => nextColors[key] !== theme.colors[key]
    );
    
    return hasChanged ? nextColors : theme.colors;
  }, [theme.colors, autoAdjust, derivedVars, paletteHarmony]);

  // Sync React state if autoComputed colors changes, update theme.colors
  useEffect(() => {
    const hasChanged = (Object.keys(autoComputedColors) as CssColorVar[]).some(
      key => autoComputedColors[key] !== theme.colors[key]
    );
    if (hasChanged) {
      setThemeInternal(prev => ({ ...prev, colors: autoComputedColors }));
    }
  }, [autoComputedColors, theme.colors]);

  // DOM Side-effects (applied to :root)
  useThemeDOM(theme, autoComputedColors, activeLayout);

  // set a color variable to a new value and push the previous value to the history
  const setColor = useCallback((variable: CssColorVar, value: string) => {
    setThemeInternal(prev => {
      pushToHistory(prev);
      return { ...prev, colors: { ...prev.colors, [variable]: value } };
    });
    // remove the color variable from the derived variables
    setDerivedVars(prev => {
      if (!prev.has(variable)) return prev;
      const next = new Set(prev);
      next.delete(variable);
      return next;
    });
  }, [pushToHistory]);

  // clear a color variable and push the previous value to the history
  const clearColor = useCallback((variable: CssColorVar) => {
    setThemeInternal(prev => {
      pushToHistory(prev);
      return { ...prev, colors: { ...prev.colors, [variable]: '' } };
    });
    // remove the color variable from the derived variables
    setDerivedVars(prev => {
      if (!prev.has(variable)) return prev;
      const next = new Set(prev);
      next.delete(variable);
      return next;
    });
  }, [pushToHistory]);

  // set a font variable to a new value and push the previous value to the history
  const setFont = useCallback((variable: CssFontVar, value: string) => {
    setThemeInternal(prev => {
      pushToHistory(prev);
      return { ...prev, fonts: { ...prev.fonts, [variable]: value } };
    });
  }, [pushToHistory]);

  // set the entire theme to a new value and push the previous value to the history
  const setTheme = useCallback((newTheme: Theme) => {
    setThemeInternal(prev => {
      pushToHistory(prev);
      return newTheme;
    });
  }, [pushToHistory]);

  // apply a preset to the theme
  const applyPreset = useCallback((preset: ColorThemePreset) => {
    setTheme({ ...theme, colors: preset.colors });
    setDerivedVars(new Set());
    setActiveThemeId(preset.id);
  }, [theme, setTheme]);

  // generate a new palette based on the current background color
  const generatePalette = useCallback(() => {
    const bg = theme.colors['--color-bg'] || '#ffffff';
    const mode = hexToHsl(bg)[2] < 50 ? 'dark' : 'light'; 
    const newColors = generatePaletteFromMode(mode, paletteHarmony);
    setTheme({ ...theme, colors: newColors });
    
    const allVars = Object.keys(newColors) as CssColorVar[];
    setDerivedVars(new Set(allVars.filter(v => v !== '--color-primary')));
    setActiveThemeId('');
  }, [theme, setTheme]);

  // derive a single color field value based on the current background color and palette harmony
  // set the derived variable to the derived color field value
  const deriveSingleField = useCallback((variable: CssColorVar, modeOverride?: ColorMode, harmonyOverride?: PaletteHarmony) => {
    const bgHex = theme.colors['--color-bg'] || '#ffffff';
    const mode: ColorMode = modeOverride || (hexToHsl(bgHex)[2] < 50 ? 'dark' : 'light');
    const hMode = harmonyOverride || paletteHarmony;
    
    const tempDerived = new Set(derivedVars);
    tempDerived.add(variable);
    
    const tempComputed = resolveAutoAdjust(theme.colors, tempDerived, mode, hMode);
    const newValue = tempComputed[variable];
    
    setColor(variable, newValue);
    setDerivedVars(prev => {
      const next = new Set(prev);
      next.add(variable);
      return next;
    });
  }, [theme.colors, derivedVars, paletteHarmony, setColor]);

  // rederive all color field values based on the current primary color and palette harmony
  const rederiveFromPrimary = useCallback((mode: ColorMode) => {
    const primary = theme.colors['--color-primary'];
    if (!primary) return;

    const allVars: CssColorVar[] = [
      '--color-bg', '--color-surface', '--color-primary-fg', '--color-text',
      '--color-text-muted', '--color-border', '--color-secondary', '--color-secondary-fg',
      '--color-tertiary', '--color-tertiary-fg'
    ];
    const fullSet = new Set(allVars);
    const newColors = resolveAutoAdjust(theme.colors, fullSet, mode, paletteHarmony);

    setThemeInternal(prev => {
      pushToHistory(prev);
      return { ...prev, colors: newColors };
    });

    if (!autoAdjust) {
      setDerivedVars(new Set());
    } else {
      setDerivedVars(fullSet);
    }
  }, [theme.colors, paletteHarmony, autoAdjust, pushToHistory]);

  // apply a clean slate theme
  const cleanSlate = useCallback((mode: 'light' | 'dark') => {
    const presetId = `clean-slate-${mode}`;
    const preset = COLOR_THEME_PRESETS.find(p => p.id === presetId);
    if (preset) {
      setTheme({ ...theme, colors: preset.colors });
      setDerivedVars(new Set());
      setActiveThemeId(preset.id);
    }
  }, [theme, setTheme]);

  // set typography values and push the previous value to the history
  const setTypography = useCallback((variable: keyof TypographyVars, value: string | number) => {
    setThemeInternal(prev => {
      pushToHistory(prev);
      return { ...prev, typography: { ...prev.typography, [variable]: value } };
    });
  }, [pushToHistory]);

  // apply a random theme preset
  const randomize = useCallback(() => {
    const newState = getRandomThemeState(locale);
    setTheme(newState.theme);
    setDerivedVars(new Set());
    setActiveThemeId(newState.themeId);
    setActiveFontPairId(newState.fontPairId);
  }, [setTheme, locale]);

  // Handle locale changes: Re-randomize to ensure font compatibility
  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }
    randomize();
  }, [locale, randomize]);

  const value: ThemeContextValue = useMemo(() => ({
    theme,
    autoAdjust,
    setAutoAdjust: handleSetAutoAdjust,
    paletteHarmony,
    setPaletteHarmony,
    derivedVars,
    setDerivedVars,
    deriveSingleField,
    rederiveFromPrimary,
    generatePalette,
    cleanSlate,
    setColor,
    clearColor,
    setFont,
    setTheme,
    applyPreset,
    randomize,
    undo,
    canUndo,
    activeLayout,
    setActiveLayout,
    setTypography,
    activeThemeId,
    setActiveThemeId,
    activeFontPairId,
    setActiveFontPairId,
  }), [
    theme,
    autoAdjust,
    handleSetAutoAdjust,
    paletteHarmony,
    setPaletteHarmony,
    derivedVars,
    setDerivedVars,
    deriveSingleField,
    rederiveFromPrimary,
    generatePalette,
    cleanSlate,
    setColor,
    clearColor,
    setFont,
    setTheme,
    applyPreset,
    randomize,
    undo,
    canUndo,
    activeLayout,
    setActiveLayout,
    setTypography,
    activeThemeId,
    setActiveThemeId,
    activeFontPairId,
    setActiveFontPairId,
  ]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};
