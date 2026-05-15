import { useEffect } from 'react';
import type { Theme, LayoutId } from '@/types';
import { LAYOUTS } from '@/data/layouts';
import { findFont } from '@/data/fonts';
import { formatGoogleFontsUrl } from '@/utils/fonts';

export function useThemeDOM(theme: Theme, autoComputedColors: Record<string, string>, activeLayout: LayoutId) {
  const activeLayoutConfig = LAYOUTS.find(l => l.id === activeLayout) || LAYOUTS[0]!;

  // Apply colors to :root
  useEffect(() => {
    const root = document.documentElement;
    Object.entries(autoComputedColors).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }, [autoComputedColors]);

  // Apply fonts & typography to :root
  useEffect(() => {
    const root = document.documentElement;
    
    // Apply fonts (conditionally for mono)
    Object.entries(theme.fonts).forEach(([key, value]) => {
      if (key === '--font-mono' && !activeLayoutConfig.usesMono) {
        root.style.removeProperty(key);
        return;
      }
      root.style.setProperty(key, `"${value}", system-ui, sans-serif`);
    });

    // Apply typography
    Object.entries(theme.typography).forEach(([key, value]) => {
      root.style.setProperty(key, value.toString());
    });
  }, [theme.fonts, theme.typography, activeLayoutConfig]);

  // Inject Google Fonts
  useEffect(() => {
    const fontFamilies = new Set([
      theme.fonts['--font-display'],
      theme.fonts['--font-body'],
    ]);

    if (activeLayoutConfig.usesMono) {
      fontFamilies.add(theme.fonts['--font-mono']);
    }

    const fontOptions = Array.from(fontFamilies).map(family => findFont(family));
    const url = formatGoogleFontsUrl(fontOptions);
    
    if (!url) return;

    let link = document.getElementById('google-fonts-injection') as HTMLLinkElement | null;
    if (!link) {
      link = document.createElement('link');
      link.id = 'google-fonts-injection';
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }
    link.href = url;
  }, [theme.fonts, activeLayoutConfig]);
}
