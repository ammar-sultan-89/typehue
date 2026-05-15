import { LofiBrowser, LofiPalette, LofiMobile } from './LofiUI';
import { useTranslation } from '@/i18n';

export default function Hero() {
  const { t, locale } = useTranslation();

  return (
    <section id="home" className="relative pt-44 pb-24 px-6 overflow-hidden min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-20 items-center">
        
        <div className="text-start relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            {t('homepage.hero.badge')}
          </div>
          
          <h1 className="text-6xl md:text-8xl font-display font-[var(--display-weight,900)] mb-8 leading-[var(--display-line-height,0.9)] tracking-[var(--display-letter-spacing,-0.05em)] text-text">
            {t('homepage.hero.title')} <br />
            <span className="text-primary">{t('homepage.hero.title_span')}</span> <br />
            {t('homepage.hero.title_suffix')}
          </h1>
          
          <p className="text-xl text-text-muted max-w-xl mb-12 font-body font-[var(--body-weight,400)] leading-[var(--body-line-height,1.6)]">
            {t('homepage.hero.description')}
          </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a href="https://github.com/ammar-sultan-89/typehue" className="w-full sm:w-auto px-10 py-5 bg-primary text-primary-fg font-black text-center rounded-2xl shadow-2xl shadow-primary/30 hover:scale-[1.02] transition-all active:scale-95 text-lg">
            {t('homepage.hero.cta_primary')}
          </a>
          <a 
            href="#features" 
            className="w-full sm:w-auto px-10 py-5 bg-surface border border-border text-text font-bold rounded-2xl hover:bg-bg transition-colors text-center text-lg shadow-sm"
          >
            {t('homepage.hero.cta_secondary')}
          </a>
        </div>
        </div>

        {/* Lofi Illustrations Grid */}
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full aspect-square bg-[radial-gradient(circle_at_center,_var(--color-primary)_0%,_transparent_60%)] opacity-10 blur-3xl" />
          
          <div className={`relative grid grid-cols-2 gap-4 items-start ${locale === 'ar' ? 'translate-x-2 md:-translate-x-20' : '-translate-x-2 md:translate-x-20'}`}>
            <div className="space-y-4">
              <div className={`transform ${locale === 'ar' ? 'rotate-3' : '-rotate-3'}`}>
                <LofiBrowser />
              </div>
              <div className={`transform ${locale === 'ar' ? '-translate-x-12 -rotate-2' : 'translate-x-12 rotate-2'}`}>
                <LofiPalette />
              </div>
            </div>
            <div className="pt-20">
              <div className={`transform ${locale === 'ar' ? '-rotate-6' : 'rotate-6'}`}>
                <LofiMobile />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
