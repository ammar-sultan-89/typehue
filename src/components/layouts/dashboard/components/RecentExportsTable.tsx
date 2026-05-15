import { Search, ExternalLink } from 'lucide-react';
import { useTranslation } from '@/i18n';

const EXPORTS_DATA = [
  { id: 1, name: 'Ocean Breeze', harmony: 'Analogous', color: '#0ea5e9', date: '2024-05-20', status: 'success' },
  { id: 2, name: 'Sunset Glow', harmony: 'Complementary', color: '#f97316', date: '2024-05-19', status: 'success' },
  { id: 3, name: 'Forest Deep', harmony: 'Triadic', color: '#10b981', date: '2024-05-18', status: 'neutral' },
  { id: 4, name: 'Cyber Neon', harmony: 'Split-Complementary', color: '#d946ef', date: '2024-05-17', status: 'danger' },
  { id: 5, name: 'Minimal Slate', harmony: 'Monochromatic', color: '#64748b', date: '2024-05-16', status: 'success' },
];

export function RecentExportsTable() {
  const { t, locale } = useTranslation();
  const isRtl = locale === 'ar';

  return (
    <div className="bg-bg border border-border rounded-[2rem] shadow-sm overflow-hidden flex flex-col">
      <div className="p-8 border-b border-border flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h3 className="text-xl font-black text-text">{t('dashboard.table.title')}</h3>
        
        <div className="relative group max-w-sm w-full">
          <Search className={`absolute top-1/2 -translate-y-1/2 ${isRtl ? 'right-4' : 'left-4'} w-4 h-4 text-text-muted group-focus-within:text-primary transition-colors`} />
          <input 
            type="text" 
            placeholder={t('dashboard.table.search_placeholder')}
            className={`w-full ${isRtl ? 'pr-12' : 'pl-12'} pr-4 py-2.5 bg-surface border border-border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all`}
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-start">
          <thead>
            <tr className="bg-surface/50">
              <th className={`px-8 py-4 text-start text-[10px] font-black uppercase tracking-[0.2em] text-text-muted`}>
                {t('dashboard.table.columns.theme_name')}
              </th>
              <th className={`px-8 py-4 text-start text-[10px] font-black uppercase tracking-[0.2em] text-text-muted`}>
                {t('dashboard.table.columns.harmony')}
              </th>
              <th className={`px-8 py-4 text-start text-[10px] font-black uppercase tracking-[0.2em] text-text-muted`}>
                {t('dashboard.table.columns.base_color')}
              </th>
              <th className={`px-8 py-4 text-start text-[10px] font-black uppercase tracking-[0.2em] text-text-muted`}>
                {t('dashboard.table.columns.exported_at')}
              </th>
              <th className={`px-8 py-4 text-start text-[10px] font-black uppercase tracking-[0.2em] text-text-muted`}>
                {t('dashboard.table.columns.status')}
              </th>
              <th className="px-8 py-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/50">
            {EXPORTS_DATA.map((row, idx) => (
              <tr key={row.id} className={`${idx % 2 === 0 ? 'bg-bg' : 'bg-surface/30'} hover:bg-primary/5 transition-colors`}>
                <td className="px-8 py-4">
                  <span className="font-bold text-text">{row.name}</span>
                </td>
                <td className="px-8 py-4">
                  <span className="text-sm text-text-muted">{row.harmony}</span>
                </td>
                <td className="px-8 py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full border border-white/20" style={{ backgroundColor: row.color }} />
                    <code className="text-[10px] font-mono text-text-muted">{row.color.toUpperCase()}</code>
                  </div>
                </td>
                <td className="px-8 py-4 text-sm text-text-muted">
                  {row.date}
                </td>
                <td className="px-8 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider
                    ${row.status === 'success' ? 'bg-success/10 text-success' : 
                      row.status === 'danger' ? 'bg-danger/10 text-danger' : 
                      'bg-text/10 text-text'}`}
                  >
                    {t(`dashboard.table.status.${row.status}`)}
                  </span>
                </td>
                <td className="px-8 py-4 text-end">
                  <button className="p-2 hover:bg-surface rounded-lg text-text-muted hover:text-primary transition-all">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
