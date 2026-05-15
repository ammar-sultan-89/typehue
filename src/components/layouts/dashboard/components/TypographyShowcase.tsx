import { Type } from 'lucide-react';
import { useTranslation } from '@/i18n';
import { useTheme } from '@/components/ThemeProvider';

export function TypographyShowcase() {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <div className="bg-bg border border-border rounded-[2rem] shadow-sm p-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 bg-surface rounded-lg text-primary">
          <Type className="w-5 h-5" />
        </div>
        <h3 className="text-xl font-black text-text">{t('dashboard.typography.title')}</h3>
      </div>

      <div className="space-y-6">
        <h2 className="text-4xl md:text-5xl font-display font-[var(--display-weight,900)] leading-[var(--display-line-height,1.1)] tracking-[var(--display-letter-spacing,-0.02em)] text-text">
          {t('dashboard.typography.section_heading')}
        </h2>

        <p className="text-lg font-body font-[var(--body-weight,400)] leading-[var(--body-line-height,1.6)] text-text-muted">
          {t('dashboard.typography.body_text')}
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <div className="px-3 py-1.5 bg-surface border border-border rounded-lg text-[10px] font-black uppercase tracking-widest text-text-muted">
            {t('dashboard.typography.label_display', { font: theme.fonts['--font-display'] })}
          </div>
          <div className="px-3 py-1.5 bg-surface border border-border rounded-lg text-[10px] font-black uppercase tracking-widest text-text-muted">
            {t('dashboard.typography.label_body', { font: theme.fonts['--font-body'] })}
          </div>
          <div className="px-3 py-1.5 bg-surface border border-border rounded-lg text-[10px] font-black uppercase tracking-widest text-text-muted">
            Weight: {theme.typography['--display-weight']} / {theme.typography['--body-weight']}
          </div>
        </div>
      </div>
    </div>
  );
}
