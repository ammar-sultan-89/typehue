import { CheckCircle2, AlertCircle, Info } from 'lucide-react';
import { useTranslation } from '@/i18n';

export function AlertsPanel() {
  const { t } = useTranslation();

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4 p-4 bg-primary/10 border border-primary/20 rounded-2xl">
        <div className="shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
          <Info className="w-5 h-5" />
        </div>
        <p className="text-sm font-medium text-primary leading-tight">
          {t('dashboard.alerts.info')}
        </p>
      </div>
      <div className="flex items-center gap-4 p-4 bg-success/10 border border-success/20 rounded-2xl">
        <div className="shrink-0 w-8 h-8 rounded-full bg-success/20 flex items-center justify-center text-success">
          <CheckCircle2 className="w-5 h-5" />
        </div>
        <p className="text-sm font-medium text-success leading-tight">
          {t('dashboard.alerts.success')}
        </p>
      </div>

      <div className="flex items-center gap-4 p-4 bg-danger/10 border border-danger/20 rounded-2xl">
        <div className="shrink-0 w-8 h-8 rounded-full bg-danger/20 flex items-center justify-center text-danger">
          <AlertCircle className="w-5 h-5" />
        </div>
        <p className="text-sm font-medium text-danger leading-tight">
          {t('dashboard.alerts.danger')}
        </p>
      </div>

    </div>
  );
}
