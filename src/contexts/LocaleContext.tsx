import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { Locale } from '@/types';

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

interface LocaleProviderProps {
  children: ReactNode;
}

export const LocaleProvider = ({ children }: LocaleProviderProps) => {
  const [locale, setLocale] = useState<Locale>('en');

  // Sync SEO & Document Attributes when locale changes
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = (): LocaleContextValue => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
};
