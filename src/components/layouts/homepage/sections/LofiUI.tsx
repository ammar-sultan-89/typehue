import { useTranslation } from '@/i18n';

export const LofiBrowser = () => {
  const { t } = useTranslation();
  return (
  <div className="w-full max-w-sm rounded-lg border border-border bg-surface overflow-hidden shadow-2xl">
    <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border bg-bg/50">
      <div className="w-2 h-2 rounded-full bg-border" />
      <div className="w-2 h-2 rounded-full bg-border" />
      <div className="w-2 h-2 rounded-full bg-border" />
    </div>
    <div className="p-4 space-y-4">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded bg-primary/20 border border-primary/30 flex items-center justify-center">
          <div className="w-4 h-4 bg-primary rounded-sm" />
        </div>
        <div className="space-y-1">
          <div className="h-2 w-20 bg-text/20 rounded" />
          <div className="h-1.5 w-32 bg-text/10 rounded" />
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-2 w-full bg-text/10 rounded" />
        <div className="h-2 w-full bg-text/10 rounded" />
        <div className="h-2 w-2/3 bg-text/10 rounded" />
      </div>
      <div className="flex gap-2 pt-2">
        <div className="h-8 flex-1 rounded border border-border bg-bg" />
        <div className="h-8 w-24 rounded bg-primary text-primary-fg text-[10px] font-bold flex items-center justify-center">
            {t('homepage.lofiui.cta')}
        </div>
      </div>
    </div>
  </div>
);
}

export const LofiMobile = () => {
  return (
  <div className="w-48 h-80 rounded-[2rem] border-4 border-border bg-bg p-3 relative shadow-2xl">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-border rounded-b-xl" />
    <div className="mt-8 space-y-4">
      <div className="w-full aspect-video rounded-xl bg-surface border border-border flex items-center justify-center">
         <div className="w-1/2 h-2 bg-text/10 rounded" />
      </div>
      <div className="space-y-2 px-1">
        <div className="h-3 w-3/4 bg-text/20 rounded" />
        <div className="h-2 w-full bg-text/10 rounded" />
        <div className="h-2 w-full bg-text/10 rounded" />
        <div className="h-2 w-5/6 bg-text/10 rounded" />
      </div>
      <div className="px-1 pt-4">
        <div className="w-full h-10 rounded-full bg-[var(--color-secondary,var(--color-primary))] flex items-center justify-center">
           <div className="w-12 h-2 bg-[var(--color-secondary-fg,var(--color-primary-fg))]/40 rounded" />
        </div>
      </div>
    </div>
  </div>
);}

export const LofiPalette = () => {
  const { t } = useTranslation();
  return (
  <div className="flex flex-col gap-2 p-4 rounded-xl border border-border bg-surface w-40 transform -rotate-6 rtl:rotate-6 shadow-xl">
    <div className="flex items-center gap-2 mb-2">
      <div className="w-3 h-3 rounded-full bg-primary" />
      <span className="text-[10px] uppercase tracking-widest font-bold opacity-50 font-mono">{t('homepage.lofiui.palette')}</span>
    </div>
    <div className="grid grid-cols-2 gap-2">
      <div className="aspect-square rounded bg-bg border border-border" />
      <div className="aspect-square rounded bg-surface border border-border" />
      <div className="aspect-square rounded bg-primary" />
      <div className="aspect-square rounded bg-[var(--color-secondary,var(--color-primary))]" />
    </div>
    <div className="h-1.5 w-full bg-text/10 rounded mt-2" />
  </div>
);}

