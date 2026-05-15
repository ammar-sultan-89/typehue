export default function ContributingSection() {
  return (
    <section id="contributing" className="py-12 border-b border-border/50">
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] mb-8 font-body font-[var(--body-weight,900)]">
        المجتمع
      </div>

      <h1 className="text-3xl sm:text-4xl font-display font-[var(--display-weight,900)] mb-8 text-text tracking-[var(--display-letter-spacing,-0.02em)] leading-[var(--display-line-height,1.2)]">المساهمة</h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-text-muted mb-10 leading-[var(--body-line-height,1.6)] font-body font-[var(--body-weight,400)]">
          TypeHue هو مشروع مفتوح المصدر. نرحب بالمساهمات بجميع أنواعها—من إضافة تخطيطات جديدة وقوالب خطوط، إلى إصلاح الأخطاء وتحسين أو توسيع الوظائف.
        </p>

        <h3 className="text-xl sm:text-2xl font-display font-[var(--display-weight,700)] mb-6 text-text tracking-[var(--display-letter-spacing,-0.01em)]">هيكل المشروع</h3>
        <div className="p-8 bg-surface border border-border rounded-2xl mb-12">
          <div className="font-mono text-sm space-y-2" dir="ltr">
            <div className="flex items-center gap-2">
              <span className="text-primary font-bold">src/</span>
            </div>
            <div className="ms-2 sm:ms-6 flex items-center gap-2 border-s border-border ps-2 sm:ps-4">
              <span className="text-secondary font-bold">components/</span>
              <span className="text-text-muted hidden sm:inline">— عناصر الواجهة والتخطيطات</span>
            </div>
            <div className="ms-4 sm:ms-12 flex items-center gap-2 border-s border-border ps-2 sm:ps-4">
              <span className="text-text font-bold">panel/</span>
              <span className="text-text-muted hidden sm:inline">— الشريط الجانبي للإعدادات</span>
            </div>
            <div className="ms-4 sm:ms-12 flex items-center gap-2 border-s border-border ps-2 sm:ps-4">
              <span className="text-text font-bold">layouts/</span>
              <span className="text-text-muted hidden sm:inline">— قوالب المعاينة الرئيسية</span>
            </div>
            <div className="ms-6 flex items-center gap-2 border-s border-border ps-4">
              <span className="text-secondary font-bold">data/</span>
              <span className="text-text-muted">— قوائم الخطوط، مسبقات الألوان</span>
            </div>
            <div className="ms-6 flex items-center gap-2 border-s border-border ps-4">
              <span className="text-secondary font-bold">contexts/</span>
              <span className="text-text-muted">— إدارة حالة الثيم واللغة</span>
            </div>
            <div className="ms-6 flex items-center gap-2 border-s border-border ps-4">
              <span className="text-secondary font-bold">hooks/</span>
              <span className="text-text-muted">— مراقبو DOM ومنطق السجل</span>
            </div>
          </div>
        </div>

        <h3 className="text-xl sm:text-2xl font-display font-[var(--display-weight,700)] mb-6 text-text tracking-[var(--display-letter-spacing,-0.01em)]">كيف تساهم</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {[
            { title: 'إضافة تخطيط', desc: 'أنشئ قالب معاينة جديداً لاختبار الثيمات في سياقات مختلفة.' },
            { title: 'إضافة مسبقات', desc: 'ساهم بمجموعات خطوط أو لوحات ألوان جديدة للقوائم المنسقة.' },
            { title: 'تحسين / توسيع', desc: 'ساعد في تحسين الوظائف من خلال إصلاح الأخطاء أو إضافة ميزات جديدة.' },
          ].map((item) => (
            <div key={item.title} className="p-6 bg-bg border border-border rounded-xl">
              <h4 className="font-display font-bold text-text mb-2 text-sm font-[var(--display-weight,700)]">{item.title}</h4>
              <p className="text-text-muted text-xs leading-relaxed font-body font-[var(--body-weight,400)]">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-primary text-primary-fg p-10 rounded-3xl text-center shadow-2xl shadow-primary/20">
          <h2 className="text-3xl font-display font-black mb-4 font-[var(--display-weight,900)] tracking-[var(--display-letter-spacing,-0.02em)]">جاهز للبدء؟</h2>
          <p className="max-w-xl mx-auto mb-8 opacity-90 font-body font-[var(--body-weight,400)] leading-[var(--body-line-height,1.6)]">
            قم بعمل Fork للمستودع، وأنشئ فرعاً (Branch)، وأرسل Pull Request. نحن نراجع جميع المساهمات ويسعدنا تقديم التوجيه.
          </p>
          <a href="https://github.com/ammar-sultan-89/typehue" className="inline-block px-8 py-4 bg-primary-fg text-primary font-black rounded-xl hover:scale-105 transition-transform active:scale-95 font-body font-[var(--body-weight,900)]">
            زيارة مستودع GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
