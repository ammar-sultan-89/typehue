export const hexToHsl = (hex: string): [number, number, number] => {
  const clean = hex.replace('#', '');
  const full = clean.length === 3
    ? clean.split('').map(c => c + c).join('')
    : clean;
  const r = parseInt(full.substring(0, 2), 16) / 255;
  const g = parseInt(full.substring(2, 4), 16) / 255;
  const b = parseInt(full.substring(4, 6), 16) / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const l = (max + min) / 2;
  if (max === min) return [0, 0, Math.round(l * 100)];
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h = 0;
  if (max === r) h = (g - b) / d + (g < b ? 6 : 0);
  else if (max === g) h = (b - r) / d + 2;
  else h = (r - g) / d + 4;
  return [Math.round((h / 6) * 360), Math.round(s * 100), Math.round(l * 100)];
};

export const hslToHex = (h: number, s: number, l: number): string => {
  const lFrac = l / 100;
  const a = (s * Math.min(lFrac, 1 - lFrac)) / 100;
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const c = lFrac - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * c).toString(16).padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
};

// Determines readable foreground color for any background
export function contrastingFg(hex: string): string {
  const [, , l] = hexToHsl(hex);
  return l > 58 ? '#111111' : '#ffffff';
}
const getVarHex = (varName: string) => {
  if (typeof window === 'undefined') return '#000';
  return getComputedStyle(document.documentElement).getPropertyValue(varName).trim() || '#000';
};
// Export a function to get all colors as a record
export const getAllColors = () => {
  return {
    primary: getVarHex('--color-primary'),
    primaryFg: getVarHex('--color-primary-fg'),
    secondary: getVarHex('--color-secondary'),
    secondaryFg: getVarHex('--color-secondary-fg'),
    tertiary: getVarHex('--color-tertiary'),
    tertiaryFg: getVarHex('--color-tertiary-fg'),
    text: getVarHex('--color-text'),
    muted: getVarHex('--color-text-muted'),
    border: getVarHex('--color-border'),
    surface: getVarHex('--color-surface'),
    bg: getVarHex('--color-bg')
  };
}