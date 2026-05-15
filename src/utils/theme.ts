import type { Locale, Theme } from '@/types';
import { FONT_PAIR_PRESETS } from '@/data/fontPairPresets';
import { COLOR_THEME_PRESETS } from '@/data/colorThemePresets';

export function getRandomThemeState(locale: Locale): { theme: Theme, themeId: string, fontPairId: string } {
  const presets = FONT_PAIR_PRESETS.filter(p => p.locales.includes(locale));
  const randomPair = presets[Math.floor(Math.random() * presets.length)] || FONT_PAIR_PRESETS[0]!;
  const randomTheme = COLOR_THEME_PRESETS[Math.floor(Math.random() * COLOR_THEME_PRESETS.length)]!;
  
  return {
    theme: {
      colors: randomTheme.colors,
      fonts: {
        '--font-display': randomPair.display.family,
        '--font-body': randomPair.body.family,
        '--font-mono': randomPair.mono?.family ?? 'JetBrains Mono',
      },
      typography: {
        '--display-weight': 700,
        '--display-letter-spacing': '-0.02em',
        '--display-line-height': 1.05,
        '--body-weight': 400,
        '--body-line-height': 1.6,
      }
    },
    themeId: randomTheme.id,
    fontPairId: randomPair.id
  };
}
