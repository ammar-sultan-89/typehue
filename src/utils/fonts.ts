import type { FontOption } from '@/types';

/**
 * Converts Google Fonts variants into the format required for Google Fonts CSS2 API
 * e.g. ["regular", "700", "italic", "700italic"] -> "ital,wght@0,400;0,700;1,400;1,700"
 */
export function formatGoogleFontsUrl(fontOptions: FontOption[]): string {
  if (fontOptions.length === 0) return '';

  const familyParams = fontOptions.map(font => {
    const familyName = font.family.replace(/ /g, '+');
    const variants = font.variants;

    // Separate weights and italics
    // Google API expects weights like 400, 700. "regular" is 400.
    const parsedVariants = variants.map(v => {
      const isItalic = v.includes('italic');
      let weight = 400;
      if (v === 'regular' || v === 'italic') {
        weight = 400;
      } else {
        weight = parseInt(v.replace('italic', '')) || 400;
      }
      return { isItalic, weight };
    });

    // Sort variants: first by italic (0 then 1), then by weight
    parsedVariants.sort((a, b) => {
      if (a.isItalic !== b.isItalic) return a.isItalic ? 1 : -1;
      return a.weight - b.weight;
    });

    const hasItalics = parsedVariants.some(v => v.isItalic);
    const hasRegular = parsedVariants.some(v => !v.isItalic);

    if (hasItalics && hasRegular) {
      const pairs = parsedVariants.map(v => `${v.isItalic ? 1 : 0},${v.weight}`).join(';');
      return `family=${familyName}:ital,wght@${pairs}`;
    } else if (hasItalics) {
      const weights = parsedVariants.map(v => v.weight).join(';');
      return `family=${familyName}:ital,wght@1,${weights}`;
    } else {
      const weights = parsedVariants.map(v => v.weight).join(';');
      return `family=${familyName}:wght@${weights}`;
    }
  });

  return `https://fonts.googleapis.com/css2?${familyParams.join('&')}&display=swap`;
}
