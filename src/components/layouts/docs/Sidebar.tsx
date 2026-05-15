import Logo from '@/components/shared/logo';
import { useTranslation } from '@/i18n';

import { useSectionTracker } from '@/hooks/useSectionTracker';
import { DOCS_NAV_IDS } from './constants';

export default function Sidebar() {
  const { t } = useTranslation();
  const { activeId, scrollToSection } = useSectionTracker({
    sectionIds: [...DOCS_NAV_IDS],
    rootMargin: '-10% 0% -80% 0%'
  });


  return (
    <aside className="fixed inset-y-0 start-0 w-72 bg-surface border-e border-border z-20 hidden lg:block overflow-y-auto">
      <div className="p-8">
        <div className="mb-10">
          <Logo style={{ 'transform': 'scale(0.9)' }} />
        </div>

        <nav className="space-y-1">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-text-muted mb-4 px-3 font-body font-[var(--body-weight,900)]">
            {t('docs.title')}
          </p>
          {DOCS_NAV_IDS.map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`w-full text-start px-3 py-2 rounded-lg transition-all duration-200 font-body text-sm ${
                activeId === id
                  ? 'bg-primary/10 text-primary font-bold border-s-2 border-primary rounded-s-none font-[var(--body-weight,700)]'
                  : 'text-text-muted hover:text-text hover:bg-bg/50 font-[var(--body-weight,400)]'
              }`}
            >
              {t(`docs.nav.${id}`)}
            </button>
          ))}
        </nav>

        <div className="mt-12 p-4 bg-bg/50 border border-border rounded-xl">
          <p className="text-xs text-text-muted leading-relaxed font-body font-[var(--body-weight,400)]">
            {t('docs.footer')}
          </p>
        </div>
      </div>
    </aside>
  );
}
