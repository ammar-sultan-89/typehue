import type { Theme, LayoutConfig, CssColorVar, CoreColorVar } from '@/types';
import { findFont } from '@/data/fonts';
import { formatGoogleFontsUrl } from './fonts';

export function generateCssExport(theme: Theme, layoutConfig: LayoutConfig): string {
  const padding = 28;
  
  // Filter colors
  const coreVars: CoreColorVar[] = [
    '--color-bg', '--color-surface', '--color-primary', 
    '--color-primary-fg', '--color-text', '--color-text-muted', '--color-border'
  ];
  const secondaryVars: CssColorVar[] = ['--color-secondary', '--color-secondary-fg'];
  
  const allowedColors = new Set<string>([...coreVars, ...secondaryVars, ...layoutConfig.requiredOptionalVars]);
  
  const colorLines = Object.entries(theme.colors)
    .filter(([key]) => allowedColors.has(key))
    .map(([key, val]) => `  ${key.padEnd(padding)}: ${val};`);

  // Filter fonts
  const fontLines = Object.entries(theme.fonts)
    .filter(([key]) => key !== '--font-mono' || layoutConfig.usesMono)
    .map(([key, val]) => `  ${key.padEnd(padding)}: "${val}", sans-serif;`);

  // Typography
  const typoLines = Object.entries(theme.typography).map(([key, val]) => {
    return `  ${key.padEnd(padding)}: ${val};`;
  });

  return `:root {\n${colorLines.join('\n')}\n\n${fontLines.join('\n')}\n\n${typoLines.join('\n')}\n}`;
}

export function generateTailwindExport(theme: Theme, layoutConfig: LayoutConfig): string {
  const colorEntries = Object.entries(theme.colors)
    .filter(([key]) => {
      const coreVars = ['bg', 'surface', 'primary', 'text', 'border', 'secondary'];
      const baseKey = key.replace('--color-', '').split('-')[0];
      return coreVars.includes(baseKey!) || layoutConfig.requiredOptionalVars.includes(key as any);
    })
    .map(([key]) => {
      const tailwindKey = key.replace('--color-', '');
      return `        "${tailwindKey}": "var(${key})",`;
    });

  const fontEntries = Object.entries(theme.fonts)
    .filter(([key]) => key !== '--font-mono' || layoutConfig.usesMono)
    .map(([key]) => {
      const tailwindKey = key.replace('--font-', '');
      return `        "${tailwindKey}": ["var(${key})", "system-ui", "sans-serif"],`;
    });

  return `// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
${colorEntries.join('\n')}
      },
      fontFamily: {
${fontEntries.join('\n')}
      },
      fontWeight: {
        "display": "var(--display-weight)",
        "body": "var(--body-weight)",
      },
      letterSpacing: {
        "display": "var(--display-letter-spacing)",
      },
      lineHeight: {
        "display": "var(--display-line-height)",
        "body": "var(--body-line-height)",
      }
    }
  }
}`;
}

export function generateGoogleFontsExport(theme: Theme, layoutConfig: LayoutConfig): string {
  const families = new Set([
    theme.fonts['--font-display'],
    theme.fonts['--font-body'],
  ]);

  if (layoutConfig.usesMono) {
    families.add(theme.fonts['--font-mono']);
  }

  const fontOptions = Array.from(families).map(f => findFont(f));
  const url = formatGoogleFontsUrl(fontOptions);
    
  return `@import url('${url}');`;
}
