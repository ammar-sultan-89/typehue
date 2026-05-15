import { useTranslation } from '@/i18n';
import { useLocale } from '@/contexts/LocaleContext';
import { useTheme } from '@/components/ThemeProvider';
import { PresetDropdown } from './PresetSelector';
import { FontPicker } from './FontPicker';
import { FONT_PAIR_PRESETS } from '@/data/fontPairPresets';
import { FONT_OPTIONS } from '@/data/fonts';
import type { CssFontVar } from '@/types';

export function TypographySection() {
  const { t } = useTranslation();
  const { locale } = useLocale();
  const { 
    theme, 
    setFont, 
    setTypography,
    activeFontPairId,
    setActiveFontPairId,
  } = useTheme();

  const handleFontPairSelect = (preset: any) => {
    setFont('--font-display', preset.display.family);
    setFont('--font-body', preset.body.family);
    setActiveFontPairId(preset.id);
  };

  const handleManualFontChange = (variable: CssFontVar, value: string) => {
    setFont(variable, value);
    setActiveFontPairId('custom');
  };

  const filteredPresets = FONT_PAIR_PRESETS.filter(p => p.locales.includes(locale));
  const displayFont = FONT_OPTIONS.find(f => f.family === theme.fonts['--font-display'])!;
  const bodyFont = FONT_OPTIONS.find(f => f.family === theme.fonts['--font-body'])!;

  return (
    <section className="space-y-6">
      <div className="flex items-center gap-2 mb-2 px-1">
        <span className="h-4 w-1 bg-primary rounded-full"></span>
        <h3 className="text-xs font-bold uppercase tracking-wider text-text">{t('panel.typography')}</h3>
      </div>

      <PresetDropdown 
        label={t('panel.presets')}
        items={filteredPresets}
        activeId={activeFontPairId}
        onSelect={handleFontPairSelect}
      />

      <div className="space-y-6 pt-2">
        <FontPicker
          label={t('panel.display_font')}
          value={displayFont}
          fontVar="--font-display"
          locale={locale}
          onChange={(f) => handleManualFontChange('--font-display', f.family)}
        />
        <FontPicker
          label={t('panel.body_font')}
          value={bodyFont}
          fontVar="--font-body"
          locale={locale}
          onChange={(f) => handleManualFontChange('--font-body', f.family)}
        />
      </div>

      <div className="space-y-5 px-1 pt-2">
        <TypographySlider 
          label={t('panel.display_weight')} 
          value={theme.typography['--display-weight']} 
          min={100} max={900} step={100} 
          unit=""
          onChange={(v) => setTypography('--display-weight', v)}
          onReset={() => setTypography('--display-weight', 700)}
        />
        <TypographySlider 
          label={t('panel.display_spacing')} 
          value={parseFloat(theme.typography['--display-letter-spacing'])} 
          min={-0.05} max={0.1} step={0.005} 
          unit="em"
          onChange={(v) => setTypography('--display-letter-spacing', `${v}em`)}
          onReset={() => setTypography('--display-letter-spacing', '-0.02em')}
        />
        <TypographySlider 
          label={t('panel.display_height')} 
          value={theme.typography['--display-line-height']} 
          min={0.9} max={1.6} step={0.05} 
          unit=""
          onChange={(v) => setTypography('--display-line-height', v)}
          onReset={() => setTypography('--display-line-height', 1.1)}
        />
        <div className="h-px bg-border/30 my-2"></div>
        <TypographySlider 
          label={t('panel.body_weight')} 
          value={theme.typography['--body-weight']} 
          min={300} max={700} step={100} 
          unit=""
          onChange={(v) => setTypography('--body-weight', v)}
          onReset={() => setTypography('--body-weight', 400)}
        />
        <TypographySlider 
          label={t('panel.body_height')} 
          value={theme.typography['--body-line-height']} 
          min={1.2} max={2.0} step={0.1} 
          unit=""
          onChange={(v) => setTypography('--body-line-height', v)}
          onReset={() => setTypography('--body-line-height', 1.6)}
        />
      </div>
    </section>
  );
}

function TypographySlider({ 
  label, value, min, max, step, unit, onChange, onReset 
}: { 
  label: string, 
  value: number, 
  min: number, 
  max: number, 
  step: number, 
  unit: string,
  onChange: (v: number) => void,
  onReset: () => void
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between text-[11px] font-medium text-text-muted">
        <span>{label}</span>
        <span className="font-mono text-primary">{value}{unit}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onDoubleClick={onReset}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-1.5 rounded-lg appearance-none bg-border cursor-pointer accent-primary"
      />
    </div>
  );
}
