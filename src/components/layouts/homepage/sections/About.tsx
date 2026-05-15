import { LofiBrowser } from './LofiUI';
import { useTranslation } from '@/i18n';

export default function About() {
    const { t } = useTranslation();

    return (
    <section id="about" className="py-20 md:py-24 lg:py-32 px-6 bg-bg overflow-hidden">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 space-y-8">
                <h2 className="text-4xl md:text-6xl font-display font-[var(--display-weight,900)] tracking-[var(--display-letter-spacing,-0.05em)] leading-[var(--display-line-height,1)] text-text">
                  {t('homepage.about.title_line1')} <br />
                  {t('homepage.about.title_line2')}
                </h2>
                <div className="space-y-6 text-lg text-text-muted font-body font-[var(--body-weight,400)] leading-[var(--body-line-height,1.6)]">
                <p>
                    {t('homepage.about.description_p1')}
                </p>
                <p>
                    {t('homepage.about.description_p2')}
                </p>
                </div>
                <div className="pt-4">
                <blockquote className="border-s-4 border-primary ps-6 italic text-xl text-text font-display font-[var(--display-weight,700)]">
                    {t('homepage.about.quote')}
                </blockquote>
                </div>
            </div>
            <div className="hidden lg:block flex-1">
                <div className="p-8 bg-surface rounded-[3rem] border-2 border-dashed border-border flex items-center justify-center relative">
                    <LofiBrowser />
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary rounded-full opacity-10 blur-3xl" />
                </div>
            </div>
            </div>
        </div>
    </section>
)}
