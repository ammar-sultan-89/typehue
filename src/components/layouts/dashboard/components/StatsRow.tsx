import { TrendingUp, TrendingDown, Clock } from 'lucide-react';
import { useTranslation } from '@/i18n';

const STATS_DATA = [
  {
    id: 'generations',
    labelKey: 'dashboard.stats.total_generations',
    value: '12,842',
    trendKey: 'dashboard.stats.increase',
    trend: 'up',
    bgColor: 'bg-bg',
    textColor: 'text-primary',
    borderColor: 'border-primary/20',
    iconColor: 'bg-primary/10',
    shadow: 'shadow-primary/10',
    sparkline: 'M 0 30 Q 15 10 30 25 T 60 15 T 90 20 T 120 10'
  },
  {
    id: 'active_users',
    labelKey: 'dashboard.stats.active_users',
    value: '84.2%',
    trendKey: 'dashboard.stats.decrease',
    trend: 'down',
    bgColor: 'bg-bg',
    textColor: 'text-secondary',
    borderColor: 'border-secondary/20',
    iconColor: 'bg-secondary/10',
    shadow: 'shadow-secondary/10',
    sparkline: 'M 0 15 Q 15 35 30 20 T 60 30 T 90 10 T 120 25'
  },
  {
    id: 'duration',
    labelKey: 'dashboard.stats.avg_duration',
    value: '2.4s',
    trendKey: 'dashboard.stats.stable',
    trend: 'neutral',
    bgColor: 'bg-bg',
    textColor: 'text-tertiary',
    borderColor: 'border-tertiary/20',
    iconColor: 'bg-tertiary/10',
    shadow: 'shadow-tertiary/10',
    sparkline: 'M 0 20 L 20 20 L 40 20 L 60 20 L 80 20 L 100 20 L 120 20'
  }
];

export function StatsRow() {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {STATS_DATA.map((stat) => (
        <div 
          key={stat.id} 
          className={`${stat.bgColor} ${stat.textColor} shadow-sm ${stat.shadow} p-8 rounded-[2rem] relative border ${stat.borderColor} overflow-hidden group hover:scale-[1.02] transition-transform duration-300`}
        >
          <div className="relative z-10">
            <div className="flex items-center justify-between lg:justify-between md:justify-center mb-6">
              <div className={`p-3 rounded-2xl ${stat.iconColor} block lg:block md:hidden`}>
                {stat.id === 'generations' && <TrendingUp className="w-6 h-6" />}
                {stat.id === 'active_users' && <TrendingDown className="w-6 h-6" />}
                {stat.id === 'duration' && <Clock className="w-6 h-6" />}
              </div>
              <div className="text-right lg:text-right md:text-center">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80 mb-1">
                  {t(stat.labelKey)}
                </p>
                <h3 className="text-4xl font-display font-black tracking-tight">{stat.value}</h3>
              </div>
            </div>

            <div className="flex items-end justify-between">
              <p className="text-xs font-bold opacity-80 max-w-[100px]">
                {t(stat.trendKey)}
              </p>
              <div className="w-32 h-10 overflow-visible">
                <svg viewBox="0 0 120 40" className="w-full h-full overflow-visible">
                  <path
                    d={stat.sparkline}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-40"
                  />
                  <circle cx="120" cy={stat.sparkline.split(' ').pop()} r="3" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Decorative Background Pattern */}
          <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-colors" />
        </div>
      ))}
    </div>
  );
}
