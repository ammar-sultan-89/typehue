import { useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useLocale } from '@/contexts/LocaleContext';
import { useTheme } from '@/components/ThemeProvider';
import { LAYOUTS } from '@/data/layouts';
import type { Locale, LayoutId } from '@/types';

export function RouteManager() {
  const { lang, layoutId } = useParams<{ lang: string; layoutId?: string }>();
  const { locale, setLocale } = useLocale();
  const { activeLayout, setActiveLayout } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  // 1. Sync URL Language -> State
  useEffect(() => {
    if (lang && (lang === 'en' || lang === 'ar')) {
      if (lang !== locale) {
        setLocale(lang as Locale);
      }
    } else if (location.pathname === '/' || !lang) {
      // Default to /en if at root or lang is missing
      navigate('/en', { replace: true });
    }
  }, [lang, locale, setLocale, navigate, location.pathname]);

  // 2. Sync URL Layout -> State
  useEffect(() => {
    const currentLayoutId = (layoutId as LayoutId) || 'homepage';
    
    // Only update if it's different to avoid loops
    if (activeLayout !== currentLayoutId) {
      const isValidLayout = LAYOUTS.some(l => l.id === currentLayoutId);
      
      if (isValidLayout) {
        setActiveLayout(currentLayoutId);
      } else if (layoutId) {
        // If layoutId is provided but invalid, redirect to base locale path
        navigate(`/${lang || locale}`, { replace: true });
      }
    }
  }, [layoutId, activeLayout, setActiveLayout, navigate, lang, locale]);

  return null;
}
