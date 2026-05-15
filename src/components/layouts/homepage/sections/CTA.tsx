import { useTranslation } from '@/i18n';

export default function CTA() {
    const { t } = useTranslation();

    return (
    <section className="pt-12 lg:pt-24 pb-24 px-6">
           <div className="max-w-4xl mx-auto bg-primary rounded-[3.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-primary/40">
              <div className="absolute -top-10 inset-s-[-40px] w-64 h-64 bg-white/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-10 inset-e-[-40px] w-48 h-48 bg-black/10 rounded-full blur-xl" />
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-display font-[var(--display-weight,900)] text-primary-fg mb-6 tracking-[var(--display-letter-spacing,-0.02em)]">
                  {t('homepage.cta.title')}
                </h2>
                <p className="text-lg md:text-xl text-primary-fg/80 mb-10 font-body font-[var(--body-weight,400)] leading-[var(--body-line-height,1.6)] max-w-2xl mx-auto">
                  {t('homepage.cta.description')}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a 
                    href="https://github.com/ammar-sultan-89/typehue"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-8 py-4 bg-primary-fg text-primary font-bold rounded-2xl hover:scale-[1.02] transition-transform active:scale-95 text-lg"
                  >
                    {t('homepage.cta.view_repo')}
                  </a>
                  <a
                   href='mailto:hello@ammar-sultan.com'
                   className="w-full sm:w-auto px-8 py-4 bg-white/10 text-primary-fg border border-white/20 font-bold rounded-2xl hover:bg-white/20 transition-colors text-lg backdrop-blur-sm">
                    {t('homepage.cta.contact_me')}
                  </a>
                </div>
              </div>
           </div>
        </section>
)}