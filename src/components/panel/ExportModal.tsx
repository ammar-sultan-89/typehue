import React, { useState } from 'react';
import type { Theme, ExportFormat } from '@/types';
import { generateCssExport, generateTailwindExport, generateGoogleFontsExport } from '@/utils/export';
import { LAYOUTS } from '@/data/layouts';
import { Copy, CopyCheck } from 'lucide-react';
import { useTranslation } from '@/i18n';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme: Theme;
  activeLayout: string;
}

export function ExportModal({ isOpen, onClose, theme, activeLayout }: ExportModalProps) {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<ExportFormat>('css');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const layoutConfig = LAYOUTS.find(l => l.id === activeLayout) || LAYOUTS[0]!;

  const getContent = (): string => {
    switch (activeTab) {
      case 'css': return generateCssExport(theme, layoutConfig);
      case 'tailwind': return generateTailwindExport(theme, layoutConfig);
      case 'google-fonts': return generateGoogleFontsExport(theme, layoutConfig);
      default: return '';
    }
  };

  const copyToClipboard = (): void => {
    navigator.clipboard.writeText(getContent());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleBackdropClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      onClick={handleBackdropClick}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      <div className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-bg shadow-2xl border border-border">
        <div className="flex items-center justify-between border-b border-border p-6">
          <h2 className="text-xl font-bold font-display">{t('export_modal.title')}</h2>
          <button onClick={onClose} className="text-text-muted hover:text-text transition-colors" type="button">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6">
          <div className="mb-6 flex gap-2 rounded-lg bg-surface p-1">
            {(['css', 'tailwind', 'google-fonts'] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`flex-1 rounded-md py-2 text-sm font-semibold transition-all ${
                  activeTab === tab ? 'bg-bg text-primary shadow-sm' : 'text-text-muted hover:text-text'
                }`}
              >
                {tab === 'google-fonts' ? 'FONTS' : tab.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="relative">
            <pre dir="ltr" className="max-h-[420px] overflow-auto rounded-xl bg-text/90 p-6 text-sm text-bg font-mono leading-relaxed">
              {getContent()}
            </pre>
            <button
              onClick={copyToClipboard}
              type="button"
              className="absolute inset-e-4 top-4 rounded-lg bg-primary p-2 text-xs font-bold text-primary-fg shadow-lg hover:opacity-90 transition-all active:scale-95"
              title={t('export_modal.copy')}
            >
              {copied ? <div className="flex items-center gap-1"><CopyCheck className="h-4 w-4" /> <span>{t('export_modal.copied')}</span></div> : <Copy className="h-4 w-4" />}
            </button>
          </div>
        </div>

        <div className="border-t border-border bg-surface p-6 flex justify-end">
          <button onClick={onClose} type="button" className="rounded-lg border border-border bg-bg px-6 py-2 text-sm font-bold shadow-sm hover:bg-surface transition-colors">
            {t('common.close')}
          </button>
        </div>
      </div>
    </div>
  );
}
