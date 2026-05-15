export default function LayoutSections() {
  return (
    <section id="layouts" className="py-12 border-b border-border/50">
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] mb-8 font-body font-[var(--body-weight,900)]">
        المعمارية
      </div>

      <h1 className="text-3xl sm:text-4xl font-display font-[var(--display-weight,900)] mb-8 text-text tracking-[var(--display-letter-spacing,-0.02em)] leading-[var(--display-line-height,1.2)]">التخطيطات</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-text-muted mb-8 leading-[var(--body-line-height,1.6)] font-body font-[var(--body-weight,400)]">
          التخطيطات في TypeHue ليست مجرد قوالب؛ بل هي <span className="text-text font-bold">اختبارات تحمل (Stress-tests)</span>. من خلال عرض الثيم الخاص بك في سياقات مختلفة—صفحات الهبوط، لوحات البيانات، أو التوثيق التقني—يمكنك اتخاذ قرارات تصميم مستنيرة تصمد في التطبيقات الواقعية.
        </p>

        <h3 className="text-xl sm:text-2xl font-display font-[var(--display-weight,700)] mb-6 text-text tracking-[var(--display-letter-spacing,-0.01em)]">التخطيطات الحالية</h3>
        
        <div className="space-y-4 mb-12">
          {[
            { id: '/', name: 'صفحة الهبوط', focus: 'التسلسل الهرمي البصري، طباعة العرض الكبيرة، وتأثير العلامة التجارية.' },
            { id: '/dashboard', name: 'لوحة البيانات', focus: 'كثافة المعلومات، عزل المكونات، واستخدام الألوان الوظيفية (success/danger).' },
            { id: '/docs', name: 'التوثيق', focus: 'سهولة القراءة الطويلة، التسلسلات الهرمية المتداخلة، وعرض الكود.' },
          ].map((layout) => (
            <div key={layout.id} className="p-4 sm:p-5 bg-surface border border-border rounded-xl flex items-start gap-4">
              <div className="w-16 sm:w-24 h-10 flex-shrink-0 rounded-lg bg-bg border border-border flex items-center justify-center font-mono text-[10px] sm:text-xs text-primary font-bold" dir="ltr">
                {layout.id}
              </div>
              <div>
                <h4 className="font-display font-bold text-text mb-1 font-[var(--display-weight,700)]">{layout.name}</h4>
                <p className="text-text-muted text-sm font-body font-[var(--body-weight,400)]">{layout.focus}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-xl sm:text-2xl font-display font-[var(--display-weight,700)] mb-6 text-text tracking-[var(--display-letter-spacing,-0.01em)]">إضافة تخطيط جديد</h3>
        <p className="text-text-muted mb-6 font-body font-[var(--body-weight,400)] leading-[var(--body-line-height,1.6)]">
          إضافة تخطيط هو أفضل طريقة للمساهمة. كل تخطيط هو مكون مستقل يستهلك الثيم العالمي عبر متغيرات CSS.
        </p>

        <div className="bg-surface border border-border rounded-xl overflow-hidden mb-8">
          <div className="bg-bg/50 px-4 py-2 border-b border-border">
            <span className="text-[10px] font-mono text-text-muted">هيكل الملفات الموصى به</span>
          </div>
          <pre className="p-6 font-mono text-sm overflow-x-auto text-text" dir="ltr">
            <code>{`src/components/layouts/
└── my-new-layout/
    ├── sections/          # Subcomponents for each part
    │   ├── Hero.tsx
    │   └── Content.tsx
    └── MyNewLayout.tsx    # Main entry point`}</code>
          </pre>
        </div>

        <p className="text-text-muted mb-6 font-body font-[var(--body-weight,400)] leading-[var(--body-line-height,1.6)]">
          بمجرد جاهزية المكون الخاص بك، قم بتسجيله في <code className="text-primary font-bold">src/data/layouts.ts</code> و <code className="text-primary font-bold">src/components/layouts/index.ts</code> ليظهر في القائمة المنسدلة للوحة.
        </p>

        <div className="p-6 bg-secondary/5 border border-secondary/20 rounded-2xl">
          <h4 className="font-display font-bold text-secondary mb-2 text-sm font-[var(--display-weight,700)]">نصيحة: اتساق الثيم</h4>
          <p className="text-text-muted text-sm leading-relaxed font-body font-[var(--body-weight,400)]">
            عند بناء تخطيط، تجنب استخدام القيم الثابتة (Hardcoded). بدلاً من استخدام <code className="text-danger">text-[#333]</code>، استخدم <code className="text-primary">text-text</code> أو <code className="text-primary">text-text-muted</code>. يضمن ذلك بقاء تخطيطك متفاعلاً بالكامل مع تغييرات الثيم.
          </p>
        </div>
      </div>
    </section>
  );
}
