import type { CssColorVar } from '@/types';
import { ColorMode } from './colorThemePresets';
import { hexToHsl, hslToHex, contrastingFg } from '@/utils/colors';

// Generate a full palette from just a hue + mode — used for Generate button
export function generatePalette(
  mode: ColorMode = 'dark',
  harmony: PaletteHarmony = 'complementary'
): Record<CssColorVar, string> {
  const primary = randomPrimary(mode);
  const bg = deriveBgFromPrimary(primary, mode);
  const { secondary, tertiary } = deriveHarmonyColors(primary, mode, harmony);

  return {
    '--color-bg':         bg,
    '--color-surface':    deriveSurfaceFromBg(bg, mode),
    '--color-primary':    primary,
    '--color-primary-fg': contrastingFg(primary),
    '--color-text':       deriveTextFromBg(bg, mode),
    '--color-text-muted': deriveTextMutedFromBg(bg, mode),
    '--color-border':     deriveBorderFromBg(bg, mode),
    '--color-secondary':     secondary,
    '--color-secondary-fg':  contrastingFg(secondary),
    '--color-tertiary':      tertiary,
    '--color-tertiary-fg':   contrastingFg(tertiary),
  };
}

function applyLightnessCorrection(hue: number, saturation: number, mode: ColorMode): string {
  // Yellow zone (45-85°) needs extra darkness on light mode to have contrast
  const inYellowZone = hue > 45 && hue < 85;
  const l = mode === 'dark' ? 62 : (inYellowZone ? 32 : 38);
  return hslToHex(hue, Math.min(saturation, 70), l);
}

function randomPrimary(mode: 'light' | 'dark'): string {
  const hue: number = Math.floor(Math.random() * 360);
  return applyLightnessCorrection(hue, 70, mode);
}

function deriveBgFromPrimary(
  primary: string,
  mode: ColorMode
): string {
  const [pH, pS] = hexToHsl(primary);
  const bgS = Math.min(pS * 0.20, 15);
  return hslToHex(pH, bgS, mode === 'dark' ? 8 : 97);
}
function deriveSurfaceFromBg(
  bg: string,
  mode: ColorMode
): string {
  const [bgH, bgS, bgL] = hexToHsl(bg);
  return hslToHex(bgH, bgS, mode === 'dark' ? bgL + 5 : bgL - 4);
}
function deriveTextFromBg(
  bg: string,
  mode: ColorMode
): string {
  const [bgH] = hexToHsl(bg);
  return hslToHex(bgH, 8, mode === 'dark' ? 93 : 7);
}
function deriveTextMutedFromBg(
  bg: string,
  mode: ColorMode
): string {
  const [bgH, bgS] = hexToHsl(bg);
  const mutedS = Math.max(bgS * 3.5, 12);
  return hslToHex(bgH, mutedS, mode === 'dark' ? 52 : 44);
}
function deriveBorderFromBg(
  bg: string,
  mode: ColorMode
): string {
  const [bgH] = hexToHsl(bg);
  return hslToHex(bgH, 6, mode === 'dark' ? 18 : 88);
}
export type PaletteHarmony = 'analogous' | 'triadic' | 'split-complementary' | 'complementary';

function deriveHarmonyColors(
  primary: string,
  mode: ColorMode,
  harmony: PaletteHarmony = 'complementary'
): { secondary: string, tertiary: string } {
  const [pH, pS] = hexToHsl(primary);
  
  let secondaryH = pH;
  let tertiaryH = pH;

  switch (harmony) {
    case 'analogous':
      secondaryH = (pH + 30) % 360;
      tertiaryH = (pH + 60) % 360;
      break;
    case 'triadic':
      secondaryH = (pH + 120) % 360;
      tertiaryH = (pH + 240) % 360;
      break;
    case 'split-complementary':
      secondaryH = (pH + 150) % 360;
      tertiaryH = (pH + 210) % 360;
      break;
    case 'complementary':
    default:
      secondaryH = (pH + 180) % 360;
      tertiaryH = (pH + 180) % 360;
      break;
  }

  const secondary = applyLightnessCorrection(secondaryH, pS, mode);
  let tertiary = applyLightnessCorrection(tertiaryH, pS, mode);

  if (harmony === 'complementary') {
    // Tonal variant for complementary tertiary
    const inYellowZone = tertiaryH > 45 && tertiaryH < 85;
    const baseL = mode === 'dark' ? 62 : (inYellowZone ? 32 : 38);
    // Shift lightness to create a distinct tonal variant
    const adjustedL = mode === 'dark' ? Math.max(10, baseL - 15) : Math.min(90, baseL + 15);
    tertiary = hslToHex(tertiaryH, Math.min(pS, 70), adjustedL);
  }

  return { secondary, tertiary };
}

export function resolveAutoAdjust(
  colors: Record<CssColorVar, string>,
  derivedVars: Set<CssColorVar>,
  mode: ColorMode,
  harmony: PaletteHarmony
): Record<CssColorVar, string> {
  const newColors = { ...colors };
  
  const primary = colors['--color-primary'] || '#000000';
  
  const bg = derivedVars.has('--color-bg') ? deriveBgFromPrimary(primary, mode) : (colors['--color-bg'] || '#ffffff');
  newColors['--color-bg'] = bg;
  
  const surface = derivedVars.has('--color-surface') ? deriveSurfaceFromBg(bg, mode) : (colors['--color-surface'] || '#ffffff');
  newColors['--color-surface'] = surface;
  
  newColors['--color-text'] = derivedVars.has('--color-text') ? deriveTextFromBg(bg, mode) : (colors['--color-text'] || '#000000');
  newColors['--color-text-muted'] = derivedVars.has('--color-text-muted') ? deriveTextMutedFromBg(bg, mode) : (colors['--color-text-muted'] || '#000000');
  newColors['--color-border'] = derivedVars.has('--color-border') ? deriveBorderFromBg(bg, mode) : (colors['--color-border'] || '#000000');
  
  const { secondary: derivedSecondary, tertiary: derivedTertiary } = deriveHarmonyColors(primary, mode, harmony);

  const secondary = derivedVars.has('--color-secondary') ? derivedSecondary : (colors['--color-secondary'] || '#000000');
  newColors['--color-secondary'] = secondary;
  
  const tertiary = derivedVars.has('--color-tertiary') ? derivedTertiary : (colors['--color-tertiary'] || '#000000');
  newColors['--color-tertiary'] = tertiary;
  
  newColors['--color-primary-fg'] = derivedVars.has('--color-primary-fg') ? contrastingFg(primary) : (colors['--color-primary-fg'] || '#ffffff');
  
  newColors['--color-secondary-fg'] = derivedVars.has('--color-secondary-fg') ? contrastingFg(secondary) : (colors['--color-secondary-fg'] || '#ffffff');
  
  newColors['--color-tertiary-fg'] = derivedVars.has('--color-tertiary-fg') ? contrastingFg(tertiary) : (colors['--color-tertiary-fg'] || '#ffffff');
  
  return newColors;
}