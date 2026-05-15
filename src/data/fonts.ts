import fonts from './fonts.json'; // Fonts are downloaded from: https://www.googleapis.com/webfonts/... sorted by popularity
import type { FontOption } from '@/types';

export const FONT_OPTIONS: FontOption[] = fonts.map(font => ({
  family: font.family,
  category: font.category === 'handwriting' ? 'display' : font.category as 'sans-serif' | 'monospace' | 'serif' | 'display',
  variants: font.variants, // Keep all variants from the source JSON
  googleId: font.family.replace(/\s/g, '+'),
  subsets: font.subsets,
}));
export const FONT_OPTIONS_BY_SUBSET: Record<string, FontOption[]> = FONT_OPTIONS.reduce((acc, font) => {
  font.subsets.forEach(subset => {
    if (!acc[subset]) {
      acc[subset] = [];
    }
    acc[subset].push(font);
  });
  return acc;
}, {} as Record<string, FontOption[]>);


export const findFont = (family: string): FontOption => {
  const font = FONT_OPTIONS.find(f => f.family === family);
  if (!font) throw new Error(`Font ${family} not found`);
  return font;
};
