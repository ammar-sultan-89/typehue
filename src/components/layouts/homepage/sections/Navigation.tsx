import { Github, Mail } from 'lucide-react';
import { useTranslation } from '@/i18n';
import Logo from '@/components/shared/logo';

export default function Navigation() {
  const { t } = useTranslation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:py-8 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between bg-surface/80 backdrop-blur-md border border-border rounded-2xl px-6 py-4 pointer-events-auto">
        <Logo />
        
        <div className="hidden lg:flex items-center gap-10 text-xs font-bold uppercase tracking-widest text-text-muted">
          <a href="#home" className="hover:text-primary transition-colors">{t('homepage.navigation.home')}</a>
          <a href="#features" className="hover:text-primary transition-colors">{t('homepage.navigation.features')}</a>
          <a href="#about" className="hover:text-primary transition-colors">{t('homepage.navigation.about')}</a>
        </div>

        <div className="flex items-center gap-4">
          <a 
            href="https://github.com/ammar-sultan-89/typehue" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-2 md:px-4 py-2 text-sm font-bold hover:bg-text/5 rounded-xl transition-all"
          >
            <Github className="w-4 h-4" />
            <span className="hidden md:block">Github</span>
          </a>
          <a
           href='mailto:hello@ammar-sultan.com'
           className="bg-primary text-primary-fg px-2.5 md:px-6 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all active:scale-95">
            <Mail className="w-4 h-4 md:hidden" />
            <span className="hidden md:block">{t('homepage.navigation.cta')}</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
