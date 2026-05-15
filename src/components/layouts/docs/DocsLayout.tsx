import { useLocale } from '@/contexts/LocaleContext';
import { useTranslation } from '@/i18n';
import DocsLayoutEn from './en/DocsLayout';
import DocsLayoutAr from './ar/DocsLayout';
import Sidebar from './Sidebar';
import MobileNav from './MobileNav';

export default function DocsLayout() {
  const { locale } = useLocale();
  const { t } = useTranslation();

  const Content = locale === 'ar' ? DocsLayoutAr : DocsLayoutEn;

  return (
    <div className="flex bg-bg min-h-full w-full max-w-full">
      {/* Fixed Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 lg:ms-72 flex flex-col min-w-0">
        <MobileNav />
        <div className="max-w-4xl mx-auto px-4 md:px-12 py-12 w-full break-words">
          {/* Top Navigation Breadcrumb (Simple) */}
          <div className="flex items-center gap-2 text-xs font-mono text-text-muted mb-12">
            <span>{t('docs.breadcrumb_root')}</span>
            <span>/</span>
            <span className="text-primary font-bold">{t('docs.title')}</span>
          </div>

          <Content />
        </div>
      </div>
    </div>
  );
}
