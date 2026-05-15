import { Calendar, Plus, ChevronDown } from 'lucide-react';
import { useTranslation } from '@/i18n';

export function TopBar() {
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 z-10 bg-bg/80 backdrop-blur-md border-b border-border h-20 flex items-center justify-between px-8">
      <div>
        <h1 className="text-2xl font-display font-black text-text tracking-tight">
          {t('dashboard.topbar.title')}
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded-xl text-sm font-medium text-text-muted cursor-default">
          <Calendar className="w-4 h-4" />
          <span>{t('dashboard.topbar.date_range')}</span>
        </div>

        <button className="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-fg font-bold rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all active:scale-95 text-sm">
          <Plus className="w-4 h-4" />
          <span>{t('dashboard.topbar.action_button')}</span>
        </button>

        <div className="h-8 w-px bg-border mx-2 hidden sm:block"></div>

        <button className="flex items-center gap-3 p-1.5 hover:bg-surface rounded-xl transition-colors">
          <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-secondary-fg font-black text-xs shadow-sm">
            {t('dashboard.topbar.workspace').split(' ').map((word) => word[0]).join('').toUpperCase().slice(0, 2)}
          </div>
          <span className="hidden sm:block text-sm font-bold text-text">
            {t('dashboard.topbar.workspace')}
          </span>
          <ChevronDown className="w-4 h-4 text-text-muted" />
        </button>
      </div>
    </header>
  );
}
