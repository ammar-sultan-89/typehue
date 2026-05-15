import { useLocale } from '@/contexts/LocaleContext';
import enMain from './locales/en.json';
import enHomepage from './locales/homepage-en.json';
import enDashboard from './locales/dashboard-en.json';
import arMain from './locales/ar.json';
import arHomepage from './locales/homepage-ar.json';
import arDashboard from './locales/dashboard-ar.json';
import arDocs from './locales/docs-ar.json';
import enDocs from './locales/docs-en.json';

const translations = {
  en: { ...enMain, ...enHomepage, ...enDashboard, ...enDocs },
  ar: { ...arMain, ...arHomepage, ...arDashboard, ...arDocs },
};

export function useTranslation() {
  const { locale } = useLocale();
  
  const t = (path: string, fallback?: string | Record<string, string>, variables?: Record<string, string>) => {
    const actualFallback = typeof fallback === 'string' ? fallback : path;
    const actualVariables = typeof fallback === 'object' ? fallback : variables;

    const keys = path.split('.');
    let current: any = translations[locale] || translations.en;
    
    for (const key of keys) {
      if (current[key] === undefined) {
        // Fallback to English if key missing in current locale
        let englishFallback: any = translations.en;
        let found = true;
        for (const fKey of keys) {
          if (englishFallback[fKey] === undefined) {
            found = false;
            break;
          }
          englishFallback = englishFallback[fKey];
        }
        
        if (found) {
          current = englishFallback;
        } else {
          return actualFallback;
        }
        break;
      }
      current = current[key];
    }
    
    if (typeof current !== 'string') return actualFallback;
    
    let result = current;
    if (actualVariables) {
      Object.entries(actualVariables).forEach(([key, value]) => {
        result = result.replace(`{{${key}}}`, value);
      });
    }
    
    return result;
  };

  return { t, locale };
}
