import { useLocale } from '@/contexts/LocaleContext';
import { useTranslation } from '@/i18n';

export function PresetDropdown<T extends { id: string, name: string }>({ 
  label, 
  items, 
  activeId, 
  onSelect 
}: { 
  label: string, 
  items: T[], 
  activeId: string, 
  onSelect: (item: T) => void 
}) {
  const { locale } = useLocale();
  const { t } = useTranslation();

  return (
    <div className="space-y-1.5">
      <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted px-1">{label}</label>
      <select 
        value={activeId === 'custom' ? '' : activeId}
        onChange={(e) => {
          const item = items.find(i => i.id === e.target.value);
          if (item) onSelect(item);
        }}
        className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm font-medium focus:border-primary focus:outline-none transition-colors appearance-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: locale === 'ar' ? 'left 0.75rem center' : 'right 0.75rem center', backgroundSize: '1rem' }}
      >
        <option value="" disabled>{activeId === 'custom' ? '' : t('common.select_preset', 'Select a preset...')}</option>
        {items.map(item => (
          <option key={item.id} value={item.id}>{item.name}</option>
        ))}
      </select>
    </div>
  );
}

export function PalettePresetDropdown<T extends { id: string, name: string, colors: Record<string, string> }>({ 
  label, 
  items, 
  activeId, 
  onSelect 
}: { 
  label: string, 
  items: T[], 
  activeId: string, 
  onSelect: (item: T) => void 
}) {
  const { locale } = useLocale();
  const { t } = useTranslation();
  const activeItem = items.find(i => i.id === activeId);

  return (
    <div className="space-y-1.5">
      <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted px-1">{label}</label>
      <div className="relative group">
        <select 
          value={activeId === 'custom' ? '' : activeId}
          onChange={(e) => {
            const item = items.find(i => i.id === e.target.value);
            if (item) onSelect(item);
          }}
          className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm font-medium focus:border-primary focus:outline-none transition-colors appearance-none"
          style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: locale === 'ar' ? 'left 0.75rem center' : 'right 0.75rem center', backgroundSize: '1rem' }}
        >
          <option value="" disabled>{activeId === 'custom' ? '' : t('common.select_palette', 'Select a palette...')}</option>
          {items.map(item => (
            <option key={item.id} value={item.id}>{item.name}</option>
          ))}
        </select>
        
        {activeId !== 'custom' && activeItem && (
          <div className="mt-2 flex gap-1 px-1">
            {['--color-bg', '--color-surface', '--color-primary', '--color-secondary'].map(v => (
              <div 
                key={v}
                className="h-3 w-3 rounded-sm border border-border/50" 
                style={{ backgroundColor: activeItem.colors[v] || activeItem.colors['--color-primary'] }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
