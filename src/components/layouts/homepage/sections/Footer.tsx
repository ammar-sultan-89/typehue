import { Github, Twitter, Mail, Heart } from 'lucide-react';
import { useTranslation } from '@/i18n';
import { LAYOUTS } from '@/data/layouts';
import { useLocale } from '@/contexts/LocaleContext';
import Logo from '@/components/shared/logo';

export default function Footer() {
  const { t } = useTranslation();
  const { locale } = useLocale();

  return (
    <footer className="py-20 px-6 bg-bg border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="max-w-sm">
            <div className="mb-6">
              <Logo/>
            </div>
            <p className="text-text-muted text-sm font-body font-[var(--body-weight,400)] leading-[var(--body-line-height,1.6)] mb-6">
              {t('homepage.footer.description')}
            </p>
            <div className="flex items-center gap-4">
              <a href="https://github.com/ammar-sultan-89/typehue" className="w-10 h-10 rounded-xl bg-surface border border-border flex items-center justify-center hover:border-primary transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-surface border border-border flex items-center justify-center hover:border-primary transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-surface border border-border flex items-center justify-center hover:border-primary transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-16">
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted mb-6">{t('homepage.footer.explore')}</h4>
              <ul className="space-y-4 text-xs font-bold text-text/60">
                <li><a href="#home" className="hover:text-primary tracking-[var(--display-letter-spacing,0.05em)] uppercase transition-colors">{t('homepage.navigation.home')}</a></li>
                <li><a href="#features" className="hover:text-primary tracking-[var(--display-letter-spacing,0.05em)] uppercase transition-colors">{t('homepage.navigation.features')}</a></li>
                <li><a href="#about" className="hover:text-primary tracking-[var(--display-letter-spacing,0.05em)] uppercase transition-colors">{t('homepage.navigation.about')}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted mb-6">{t('homepage.footer.layouts')}</h4>
              <ul className="space-y-4 text-xs font-bold text-text/60">
                {LAYOUTS.map(l => (
                  <li key={l.id}>
                    <a href={`/${locale}/${l.id}`} className="hover:text-primary tracking-[var(--display-letter-spacing,0.05em)] uppercase transition-colors">
                      {t(`layouts.${l.id}`)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-text-muted uppercase tracking-[0.2em]">
          <p dir="ltr">© {new Date().getFullYear()} TypeHue. {t('homepage.footer.license')}</p>
          <div className="flex items-center gap-1">
            {t('homepage.footer.built_with')} <Heart className="w-3 h-3 text-red-500 fill-current" /> {t('homepage.footer.built_by')} <a className="text-text hover:text-primary" href="https://ammar-sultan.com" target="_blank" rel="noopener noreferrer">{t('homepage.footer.dev_name')}</a> · {t('homepage.footer.built_for')}
          </div>
        </div>
      </div>
    </footer>
  );
}
