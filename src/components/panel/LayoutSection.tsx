import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from '@/i18n';
import { useLocale } from '@/contexts/LocaleContext';
import { useTheme } from '@/components/ThemeProvider';
import { LAYOUTS } from '@/data/layouts';

export function LayoutSection() {
  const { t } = useTranslation();
  const { locale } = useLocale();
  const { activeLayout, setActiveLayout } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <section className="space-y-6">
      <div className="flex items-center gap-2 mb-2 px-1">
        <span className="h-4 w-1 bg-primary rounded-full"></span>
        <h3 className="text-xs font-bold uppercase tracking-wider text-text">{t('panel.layout_lang')}</h3>
      </div>
      
      {/* Language Selection */}
      <div className="space-y-2 px-1">
        <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted">{t('panel.lang_dir')}</label>
        <div className="flex gap-2">
          {(['en', 'ar'] as const).map((l) => (
            <button
              key={l}
              onClick={() => {
                const layoutPart = activeLayout === 'homepage' ? '' : `/${activeLayout}`;
                navigate(`/${l}${layoutPart}${location.search}`);
              }}
              className={`flex-1 py-2 px-3 rounded-lg border text-sm font-bold transition-all ${
                locale === l 
                  ? 'border-primary bg-primary/10 text-primary shadow-sm' 
                  : 'border-border bg-surface text-text-muted hover:border-text/30'
              }`}
            >
              {l === 'en' ? t('common.english') : t('common.arabic')}
            </button>
          ))}
        </div>
      </div>

      {/* Layout Dropdown */}
      <div className="space-y-2 px-1">
        <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted">{t('panel.active_layout')}</label>
        <select 
          value={activeLayout}
          onChange={(e) => {
            const newLayout = e.target.value as any;
            setActiveLayout(newLayout);
            const layoutPart = newLayout === 'homepage' ? '' : `/${newLayout}`;
            navigate(`/${locale}${layoutPart}${location.search}`);
          }}
          className="w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-sm font-medium focus:border-primary focus:outline-none transition-colors appearance-none"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: locale === 'ar' ? 'left 0.75rem center' : 'right 0.75rem center', backgroundSize: '1rem' }}
        >
          {LAYOUTS.map(l => (
            <option key={l.id} value={l.id}>{t(`layouts.${l.id}`, l.label)}</option>
          ))}
        </select>
      </div>
    </section>
  );
}
