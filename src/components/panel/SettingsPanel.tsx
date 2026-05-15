import { useState } from 'react';
import { useTheme } from '@/components/ThemeProvider';
import { useLocale } from '@/contexts/LocaleContext';
import { ExportModal } from './ExportModal';
import { LayoutSection } from './LayoutSection';
import { TypographySection } from './TypographySection';
import { PaletteSection } from './PaletteSection';
import { 
  Undo2, 
  Shuffle, 
  X, 
  ChevronRight,
  Settings,
  Download,
} from 'lucide-react';
import { useTranslation } from '@/i18n';

interface SettingsPanelProps {
  isMobileOpen: boolean;
  setIsMobileOpen: (open: boolean) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export function SettingsPanel({ isMobileOpen, isOpen, setIsOpen }: SettingsPanelProps) {
  const { 
    theme, 
    randomize, 
    undo, 
    canUndo, 
    activeLayout, 
  } = useTheme();

  const { locale } = useLocale();
  const { t } = useTranslation();
  const [isExportOpen, setIsExportOpen] = useState(false);

  return (
    <aside 
      className={`fixed inset-y-0 inset-e-0 z-[60] md:w-[380px] w-full transform border-s border-border bg-bg shadow-2xl transition-all duration-300 ease-in-out flex flex-col h-full
        ${isOpen ? 'translate-x-0' : (locale === 'ar' ? '-translate-x-full' : 'translate-x-full')}
        ${isMobileOpen ? 'translate-x-0 !w-full' : ''}`}
    >
      <div className="flex h-full flex-col relative">
        {/* Integrated Toggle Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="absolute inset-s-[-40px] rounded-s-2xl border-e-0 top-1/2 -translate-y-1/2 h-20 w-10 bg-bg border border-border flex items-center justify-center hover:bg-surface transition-colors ltr:shadow-[-10px_0_15px_rgba(0,0,0,0.1)] rtl:shadow-[10px_0_15px_rgba(0,0,0,0.1)] flex"
          title={isOpen ? t('common.close', 'Close') : t('common.open', 'Open Settings')}
        >
          {isOpen ? (
            <ChevronRight className={`h-6 w-6 text-text-muted ${locale === 'ar' ? 'rotate-180' : ''}`} />
          ) : (
            <Settings className="h-6 w-6 text-text-muted animate-pulse" />
          )}
        </button>

        {/* Header */}
        <div className="flex items-center justify-between border-b border-border p-4 bg-bg/80 backdrop-blur-md shrink-0">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setIsOpen(false)}
              className="lg:hidden rounded-lg p-1.5 text-text-muted hover:bg-surface transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-text-muted">{t('panel.title')}</h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={undo}
              type="button"
              disabled={!canUndo}
              className={`rounded-lg p-1.5 transition-colors ${canUndo ? 'text-text hover:bg-surface' : 'text-text-muted opacity-30 cursor-not-allowed'}`}
              title={t('common.undo')}
            >
              <Undo2 className={`h-5 w-5 ${locale === 'ar' ? 'rotate-180' : ''}`} />
            </button>
            <button
              onClick={() => {
                randomize();
              }}
              type="button"
              title={t('common.randomize')}
              className="flex items-center gap-1.5 rounded-lg bg-primary/10 px-3 py-1.5 text-sm font-bold text-primary hover:bg-primary/20 transition-colors ms-1"
            >
              <Shuffle className="h-4 w-4" /> {t('common.randomize')}
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-10 selection:bg-primary/20 custom-scrollbar">
          
          {/* AREA 1: LAYOUT */}
          <LayoutSection />

          <hr className="border-border/50" />

          {/* AREA 2: TYPOGRAPHY */}
          <TypographySection />

          <hr className="border-border/50" />

          {/* AREA 3: PALETTES */}
          <PaletteSection />
        </div>

        {/* Footer */}
        <div className="border-t border-border p-6 bg-surface shrink-0">
          <button
            onClick={() => setIsExportOpen(true)}
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-text px-4 py-3 text-sm font-bold text-bg shadow-lg hover:opacity-90 transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            <Download className="h-4 w-4" />
            {t('panel.export')}
          </button>
        </div>
      </div>

      <ExportModal isOpen={isExportOpen} onClose={() => setIsExportOpen(false)} theme={theme} activeLayout={activeLayout} />
    </aside>
  );
}
