import { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useTranslation } from '@/i18n';

import { useSectionTracker } from '@/hooks/useSectionTracker';
import { DOCS_NAV_IDS } from './constants';

export default function MobileNav() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const { activeId, scrollToSection } = useSectionTracker({
    sectionIds: [...DOCS_NAV_IDS],
    rootMargin: '-20% 0% -70% 0%'
  });

  const handleScroll = (id: string) => {
    scrollToSection(id, () => setIsOpen(false));
  };


  const activeLabel = t(`docs.nav.${activeId}`);

  return (
    <div className="lg:hidden sticky top-0 z-30 bg-bg/80 backdrop-blur-md border-b border-border shadow-sm">
      <div className="px-6 py-3 flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-black uppercase tracking-widest text-primary font-body font-[var(--body-weight,900)]">
            {t('docs.title')}
          </span>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 text-sm font-bold text-text font-display font-[var(--display-weight,700)]"
          >
            {activeLabel}
            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>
        
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg bg-surface border border-border text-text-muted"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-surface border-b border-border shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="p-4 space-y-1">
            {DOCS_NAV_IDS.map((id) => (
              <button
                key={id}
                onClick={() => handleScroll(id)}
                className={`w-full text-start px-4 py-3 rounded-xl transition-all font-body text-sm ${
                  activeId === id
                    ? 'bg-primary/10 text-primary font-bold border-s-4 border-primary rounded-s-none font-[var(--body-weight,700)]'
                    : 'text-text-muted hover:text-text hover:bg-bg/50 font-[var(--body-weight,400)]'
                }`}
              >
                {t(`docs.nav.${id}`)}
              </button>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
