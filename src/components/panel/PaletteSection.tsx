import { useState, useEffect } from 'react';
import { useTranslation } from '@/i18n';
import { useLocale } from '@/contexts/LocaleContext';
import { useTheme } from '@/components/ThemeProvider';
import { PalettePresetDropdown } from './PresetSelector';
import { ColorPicker } from './ColorPicker';
import { COLOR_THEME_PRESETS, ColorMode } from '@/data/colorThemePresets';
import { Sun, Moon, Wand2, Sparkles, Trash2 } from 'lucide-react';
import type { CssColorVar } from '@/types';

export function PaletteSection() {
  const { t } = useTranslation();
  const { locale } = useLocale();
  const { 
    theme, 
    autoAdjust, setAutoAdjust,
    paletteHarmony, setPaletteHarmony,
    derivedVars,
    deriveSingleField,
    rederiveFromPrimary,
    generatePalette, cleanSlate,
    setColor, 
    clearColor,
    applyPreset,
    activeThemeId,
    setActiveThemeId,
  } = useTheme();

  // Initialize color mode filter based on current theme background brightness
  const [colorModeFilter, setColorModeFilter] = useState<ColorMode>(() => {
    const bg = theme.colors['--color-bg'];
    if (!bg) return 'dark';
    
    // Simple brightness detection
    const hex = bg.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128 ? 'light' : 'dark';
  });

  // Sync color mode filter when theme preset changes
  useEffect(() => {
    const preset = COLOR_THEME_PRESETS.find(t => t.id === activeThemeId);
    if (preset) {
      setColorModeFilter(preset.mode);
    }
  }, [activeThemeId]);

  const handleModeSwitch = (newMode: ColorMode) => {
    setColorModeFilter(newMode);
    
    if (activeThemeId && activeThemeId !== 'custom') {
      const currentPreset = COLOR_THEME_PRESETS.find(p => p.id === activeThemeId);
      if (currentPreset) {
        const matchingPreset = COLOR_THEME_PRESETS.find(
          p => p.mode === newMode && p.name === currentPreset.name
        );
        if (matchingPreset) {
          applyPreset(matchingPreset);
        } else {
          cleanSlate(newMode);
        }
        return;
      }
    }
    
    const primary = theme.colors['--color-primary'];
    if (primary && primary !== '') {
      rederiveFromPrimary(newMode);
    }
  };

  const handleThemeSelect = (preset: any) => {
    applyPreset(preset);
  };

  const handleManualColorChange = (variable: CssColorVar, value: string) => {
    setColor(variable, value);
    setActiveThemeId('custom');
  };

  const handleClearColor = (variable: CssColorVar) => {
    clearColor(variable);
    setActiveThemeId('custom');
  };

  const handlePromoteColor = (variable: CssColorVar) => {
    setColor(variable, theme.colors[variable] || '#000000');
  };

  const filteredThemes = COLOR_THEME_PRESETS.filter(t => t.mode === colorModeFilter);

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between mb-4 px-1">
        <div className="flex items-center gap-2">
          <span className="h-4 w-1 bg-primary rounded-full"></span>
          <h3 className="text-xs font-bold uppercase tracking-wider text-text">{t('panel.color_palette')}</h3>
        </div>
        <div className="flex gap-1 bg-surface p-0.5 rounded-lg border border-border shadow-sm">
          {(['light', 'dark'] as const).map(mode => (
            <button
              key={mode}
              onClick={() => handleModeSwitch(mode)}
              className={`flex items-center gap-1.5 px-3 py-1 text-[10px] font-bold uppercase rounded-md transition-all ${
                colorModeFilter === mode ? 'bg-bg text-text shadow-sm' : 'text-text-muted hover:text-text'
              }`}
            >
              {mode === 'light' ? <Sun className="h-3 w-3" /> : <Moon className="h-3 w-3" />} {t(`common.${mode}`)}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <PalettePresetDropdown 
          label={t('panel.presets')}
          items={filteredThemes.map(p => ({ ...p, name: p.translations?.[locale]?.name || p.name }))}
          activeId={activeThemeId}
          onSelect={handleThemeSelect}
        />

        <div className="flex items-center gap-2 px-1">
          <button 
            type="button"
            onClick={() => setAutoAdjust(!autoAdjust)}
            title="Live Mode: Editing Primary or BG updates the whole palette automatically"
            className={`flex-1 relative flex justify-center items-center gap-2 px-3 py-2 border rounded-lg text-xs font-bold transition-all ${
              autoAdjust 
                ? 'border-primary bg-primary/10 text-primary shadow-sm' 
                : 'border-border bg-surface text-text-muted hover:border-text/30'
            }`}
          >
            <div className={`w-8 h-4 rounded-full p-0.5 transition-colors ${autoAdjust ? 'bg-primary' : 'bg-border'}`}>
              <div className={`w-3 h-3 rounded-full bg-white transition-transform ${autoAdjust ? (locale === 'ar' ? '-translate-x-4' : 'translate-x-4') : 'translate-x-0'}`} />
            </div>
            <Wand2 className="h-3 w-3" /> {t('panel.auto')}
          </button>
          
          <button 
            type="button"
            onClick={generatePalette} 
            className="flex-1 flex justify-center items-center gap-1.5 px-3 py-2 border border-border bg-surface text-text rounded-lg text-xs font-bold hover:border-primary/50 transition-colors shadow-sm"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" /> {t('panel.generate')}
          </button>
          
          <button 
            type="button"
            onClick={() => cleanSlate(colorModeFilter)}
            className="px-3 py-2 border border-border bg-surface rounded-lg text-xs font-bold text-text-muted hover:text-danger hover:border-danger/30 transition-colors shadow-sm"
            title={t('panel.clean_slate')}
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="space-y-8 px-1 pt-4">
        {/* GROUP 1: BRAND */}
        <div className="space-y-4">
          <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted block mb-1">{t('panel.brand')}</label>
          <div className="space-y-4">
            <ColorPicker 
              label={t('panel.primary')} 
              variable="--color-primary" 
              value={theme.colors['--color-primary']} 
              onChange={handleManualColorChange} 
              onClear={handleClearColor} 
            />
            <ColorPicker 
              label={t('panel.primary_fg')} 
              variable="--color-primary-fg" 
              value={theme.colors['--color-primary-fg']} 
              isDerived={derivedVars.has('--color-primary-fg')}
              onPromote={handlePromoteColor}
              showAutoButton={!autoAdjust && !derivedVars.has('--color-primary-fg')}
              onAutoClick={() => deriveSingleField('--color-primary-fg')}
              onChange={handleManualColorChange} 
              onClear={handleClearColor} 
            />
            <div className="h-px bg-border/20 mx-2"></div>
            
            {(derivedVars.has('--color-secondary') || derivedVars.has('--color-tertiary')) && (
              <div className="space-y-2 mx-2 pb-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted block">{t('panel.harmony')}</label>
                <div className="flex gap-1 bg-surface p-0.5 rounded-md border border-border">
                  {(['analogous', 'triadic', 'split-complementary', 'complementary'] as const).map(mode => (
                    <button
                      key={mode}
                      onClick={() => {
                        setPaletteHarmony(mode);
                        if (!autoAdjust) {
                          if (derivedVars.has('--color-secondary')) deriveSingleField('--color-secondary', undefined, mode);
                          if (derivedVars.has('--color-tertiary')) deriveSingleField('--color-tertiary', undefined, mode);
                        }
                      }}
                      className={`flex-1 px-1 py-1 text-[8px] sm:text-[9px] font-bold uppercase rounded-sm transition-colors ${
                        paletteHarmony === mode ? 'bg-primary text-primary-fg shadow-sm' : 'text-text-muted hover:text-text'
                      }`}
                    >
                      {t(`panel.harmony_modes.${mode}`, mode.replace('-', ' '))}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            <ColorPicker 
              label={t('panel.secondary')} 
              variable="--color-secondary" 
              value={theme.colors['--color-secondary']} 
              isDerived={derivedVars.has('--color-secondary')}
              onPromote={handlePromoteColor}
              showAutoButton={!autoAdjust && !derivedVars.has('--color-secondary')}
              onAutoClick={() => {
                deriveSingleField('--color-secondary');
              }}
              onChange={handleManualColorChange} 
              onClear={handleClearColor} 
            />
            
            <ColorPicker 
              label={t('panel.secondary_fg')} 
              variable="--color-secondary-fg" 
              value={theme.colors['--color-secondary-fg']} 
              isDerived={derivedVars.has('--color-secondary-fg')}
              onPromote={handlePromoteColor}
              showAutoButton={!autoAdjust && !derivedVars.has('--color-secondary-fg')}
              onAutoClick={() => deriveSingleField('--color-secondary-fg')}
              onChange={handleManualColorChange} 
              onClear={handleClearColor} 
            />

            <ColorPicker 
              label={t('panel.tertiary')} 
              variable="--color-tertiary" 
              value={theme.colors['--color-tertiary']} 
              isDerived={derivedVars.has('--color-tertiary')}
              onPromote={handlePromoteColor}
              showAutoButton={!autoAdjust && !derivedVars.has('--color-tertiary')}
              onAutoClick={() => {
                deriveSingleField('--color-tertiary');
              }}
              onChange={handleManualColorChange} 
              onClear={handleClearColor} 
            />
            
            <ColorPicker 
              label={t('panel.tertiary_fg')} 
              variable="--color-tertiary-fg" 
              value={theme.colors['--color-tertiary-fg']} 
              isDerived={derivedVars.has('--color-tertiary-fg')}
              onPromote={handlePromoteColor}
              showAutoButton={!autoAdjust && !derivedVars.has('--color-tertiary-fg')}
              onAutoClick={() => deriveSingleField('--color-tertiary-fg')}
              onChange={handleManualColorChange} 
              onClear={handleClearColor} 
            />
          </div>
        </div>
        
        {/* GROUP 2: STRUCTURE */}
        <div className="space-y-4">
          <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted block mb-1">{t('panel.structure')}</label>
          <div className="space-y-4">
            <ColorPicker 
              label={t('panel.background')} 
              variable="--color-bg" 
              value={theme.colors['--color-bg']} 
              isDerived={derivedVars.has('--color-bg')}
              onPromote={handlePromoteColor}
              showAutoButton={!autoAdjust && !derivedVars.has('--color-bg')}
              onAutoClick={() => deriveSingleField('--color-bg')}
              onChange={handleManualColorChange} 
              onClear={handleClearColor} 
            />
            <ColorPicker 
              label={t('panel.surface')} 
              variable="--color-surface" 
              value={theme.colors['--color-surface']} 
              isDerived={derivedVars.has('--color-surface')}
              onPromote={handlePromoteColor}
              showAutoButton={!autoAdjust && !derivedVars.has('--color-surface')}
              onAutoClick={() => deriveSingleField('--color-surface')}
              onChange={handleManualColorChange} 
              onClear={handleClearColor} 
            />
            <ColorPicker 
              label={t('panel.text')} 
              variable="--color-text" 
              value={theme.colors['--color-text']} 
              isDerived={derivedVars.has('--color-text')}
              onPromote={handlePromoteColor}
              showAutoButton={!autoAdjust && !derivedVars.has('--color-text')}
              onAutoClick={() => deriveSingleField('--color-text')}
              onChange={handleManualColorChange} 
              onClear={handleClearColor} 
            />
            <ColorPicker 
              label={t('panel.text_muted')} 
              variable="--color-text-muted" 
              value={theme.colors['--color-text-muted']} 
              isDerived={derivedVars.has('--color-text-muted')}
              onPromote={handlePromoteColor}
              showAutoButton={!autoAdjust && !derivedVars.has('--color-text-muted')}
              onAutoClick={() => deriveSingleField('--color-text-muted')}
              onChange={handleManualColorChange} 
              onClear={handleClearColor} 
            />
            <ColorPicker 
              label={t('panel.border')} 
              variable="--color-border" 
              value={theme.colors['--color-border']} 
              isDerived={derivedVars.has('--color-border')}
              onPromote={handlePromoteColor}
              showAutoButton={!autoAdjust && !derivedVars.has('--color-border')}
              onAutoClick={() => deriveSingleField('--color-border')}
              onChange={handleManualColorChange} 
              onClear={handleClearColor} 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
