import { 
  LayoutDashboard, 
  Briefcase, 
  FileText, 
  Activity, 
  Settings, 
  HelpCircle, 
  ChevronDown
} from 'lucide-react';
import { useTranslation } from '@/i18n';
import Logo from '@/components/shared/logo';

interface NavItem {
  id: string;
  labelKey: string;
  icon: any;
  isActive?: boolean;
  hasSubmenu?: boolean;
  badge?: string;
}

interface NavGroup {
  labelKey: string;
  items: NavItem[];
}

const NAV_GROUPS: NavGroup[] = [
  {
    labelKey: 'dashboard.sidebar.overview',
    items: [
      { id: 'dashboard', labelKey: 'dashboard.sidebar.dashboard', icon: LayoutDashboard, isActive: true },
      { id: 'projects', labelKey: 'dashboard.sidebar.projects', icon: Briefcase, hasSubmenu: true },
      { id: 'templates', labelKey: 'dashboard.sidebar.templates', icon: FileText },
    ]
  },
  {
    labelKey: 'dashboard.sidebar.analytics',
    items: [
      { id: 'activity', labelKey: 'dashboard.sidebar.activity', icon: Activity, badge: 'dashboard.sidebar.badge_new' },
    ]
  },
  {
    labelKey: 'dashboard.sidebar.system',
    items: [
      { id: 'settings', labelKey: 'dashboard.sidebar.settings', icon: Settings, hasSubmenu: true },
      { id: 'help', labelKey: 'dashboard.sidebar.help', icon: HelpCircle },
    ]
  }
];

export function Sidebar() {
  const { t, locale } = useTranslation();
  const isRtl = locale === 'ar';
  return (
    <aside className={`fixed top-0 ${isRtl ? 'right-0 border-l' : 'left-0 border-r'} h-full w-64 bg-bg border-border z-20 hidden lg:flex flex-col`}>
      <div className="p-6">
          <Logo />
      </div>

      <nav className="flex-1 px-4 py-4 space-y-8 overflow-y-auto custom-scrollbar">
        {NAV_GROUPS.map((group) => (
          <div key={group.labelKey}>
            <h3 className="px-4 text-[10px] font-black uppercase tracking-[0.2em] text-text-muted mb-4">
              {t(group.labelKey)}
            </h3>
            <ul className="space-y-1">
              {group.items.map((item) => (
                <li key={item.id}>
                  <button
                    className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-200 group
                      ${item.isActive 
                        ? 'bg-primary/10 text-primary' 
                        : 'text-text-muted hover:bg-surface hover:text-text'
                      }`}
                  >
                    <item.icon className={`w-5 h-5 ${item.isActive ? 'text-primary' : 'group-hover:text-primary transition-colors'}`} />
                    <span className="flex-1 text-start font-medium text-sm">{t(item.labelKey)}</span>
                    
                    {item.badge && (
                      <span className={`text-[10px] font-black px-1.5 py-0.5 rounded-md ${item.isActive ? 'bg-primary-fg/20 text-primary-fg' : 'bg-primary/10 text-primary'}`}>
                        {t(item.badge)}
                      </span>
                    )}
                    
                    {item.hasSubmenu && (
                      <ChevronDown className={`w-4 h-4 opacity-50 ${isRtl ? 'rotate-90' : '-rotate-90'}`} />
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <div className="p-4 border-t border-border">
        <div className="bg-surface rounded-2xl p-4 flex items-center gap-3 border border-border/50">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold shadow-sm">
            {t('dashboard.sidebar.initials')}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-text truncate">{t('dashboard.sidebar.name')}</p>
            <p className="text-xs text-text-muted truncate">{t('dashboard.sidebar.plan')}</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
