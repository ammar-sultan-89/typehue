import { Type, Palette, Layout, Globe } from 'lucide-react';
import { useTranslation } from '@/i18n';

export default function Features() {
  const { t } = useTranslation();

  const FEATURES = [
    {
      icon: <Palette className="w-6 h-6" />,
      title: t('homepage.features.item_1_title'),
      desc: t('homepage.features.item_1_desc')
    },
    {
      icon: <Type className="w-6 h-6" />,
      title: t('homepage.features.item_2_title'),
      desc: t('homepage.features.item_2_desc')
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: t('homepage.features.item_3_title'),
      desc: t('homepage.features.item_3_desc')
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: t('homepage.features.item_4_title'),
      desc: t('homepage.features.item_4_desc')
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 lg:py-32 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-end mb-16 lg:mb-24">
          <div>
            <div className="text-[var(--color-secondary,var(--color-primary))] font-mono text-sm font-bold uppercase tracking-[0.3em] mb-4">{t('homepage.features.principles')}</div>
            <h2 className="text-4xl md:text-5xl font-display font-[var(--display-weight,900)] leading-[var(--display-line-height,1.1)] tracking-[var(--display-letter-spacing,-0.02em)] text-text">
              {t('homepage.features.title')} <br />
              <span className="text-primary">{t('homepage.features.title_span')}</span>
            </h2>
          </div>
          <p className="text-text-muted text-lg font-body font-[var(--body-weight,400)] leading-[var(--body-line-height,1.6)] max-w-lg lg:mb-2">
            {t('homepage.features.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map((feature, idx) => (
            <div key={idx} className="bg-bg border border-border p-10 rounded-[2rem] hover:border-primary/50 transition-all group">
              <div className="w-14 h-14 bg-surface rounded-2xl flex items-center justify-center mb-8 border border-border text-primary group-hover:bg-primary group-hover:text-primary-fg transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-display font-[var(--display-weight,700)] tracking-[var(--display-letter-spacing,-0.02em)] text-text mb-4">{feature.title}</h3>
              <p className="text-sm text-text-muted font-body font-[var(--body-weight,400)] leading-[var(--body-line-height,1.6)]">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
