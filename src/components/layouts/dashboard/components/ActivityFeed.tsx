import { Download, UserPlus, Save, Layers, ArrowRight } from 'lucide-react';
import { useTranslation } from '@/i18n';

interface ActivityItem {
  id: number;
  type: 'exported' | 'new_user' | 'saved' | 'generated';
  colorClass: string;
  vars: Record<string, string>;
  icon: any;
}

const ACTIVITIES: { today: ActivityItem[], yesterday: ActivityItem[] } = {
  today: [
    { 
      id: 1, 
      type: 'exported', 
      colorClass: 'bg-primary text-primary-fg', 
      vars: { theme: 'Midnight Gold' },
      icon: Download
    },
    { 
      id: 2, 
      type: 'new_user', 
      colorClass: 'bg-success text-success-fg', 
      vars: { user: 'Sarah Ahmed' },
      icon: UserPlus
    },
    { 
      id: 3, 
      type: 'generated', 
      colorClass: 'bg-secondary text-secondary-fg', 
      vars: { count: '12', type: 'Triadic harmonies' },
      icon: Layers
    },
  ],
  yesterday: [
    { 
      id: 4, 
      type: 'saved', 
      colorClass: 'bg-tertiary text-tertiary-fg', 
      vars: { palette: 'Nordic Winter' },
      icon: Save
    },
    { 
      id: 5, 
      type: 'exported', 
      colorClass: 'bg-primary text-primary-fg', 
      vars: { theme: 'Emerald City' },
      icon: Download
    },
  ]
};

export function ActivityFeed() {
  const { t } = useTranslation();

  const renderActivityList = (items: ActivityItem[]) => (
    <ul className="space-y-6">
      {items.map((item) => (
        <li key={item.id} className="flex gap-4 group">
          <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${item.colorClass} shadow-sm group-hover:scale-110 transition-transform`}>
            <item.icon className="w-5 h-5" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm text-text leading-snug break-words" 
               dangerouslySetInnerHTML={{ __html: t(`dashboard.activity.${item.type}`, item.vars) }} 
            />
            <div className="flex items-center gap-4 mt-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-text-muted">14:20 PM</span>
              <button className="text-[10px] font-black uppercase tracking-widest text-primary flex items-center gap-1 hover:gap-2 transition-all">
                {t('dashboard.activity.view_link')}
                <ArrowRight className={`w-3 h-3 rtl:rotate-180`} />
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="bg-bg border border-border rounded-[2rem] shadow-sm p-8 h-full">
      <h3 className="text-xl font-black text-text mb-8">{t('dashboard.activity.title')}</h3>
      
      <div className="space-y-12">
        <section>
          <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted mb-6 px-4 py-1 bg-surface rounded-lg inline-block">
            {t('dashboard.activity.today')}
          </h4>
          {renderActivityList(ACTIVITIES.today)}
        </section>

        <section>
          <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted mb-6 px-4 py-1 bg-surface rounded-lg inline-block">
            {t('dashboard.activity.yesterday')}
          </h4>
          {renderActivityList(ACTIVITIES.yesterday)}
        </section>
      </div>
    </div>
  );
}
