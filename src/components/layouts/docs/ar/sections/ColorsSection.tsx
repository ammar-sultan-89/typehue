export default function ColorsSection() {
  return (
    <section id="colors" className="py-12 border-b border-border/50">
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] mb-8 font-body font-[var(--body-weight,900)]">
        النظام البصري
      </div>

      <h1 className="text-3xl sm:text-4xl font-display font-[var(--display-weight,900)] mb-8 text-text tracking-[var(--display-letter-spacing,-0.02em)] leading-[var(--display-line-height,1.2)]">الألوان</h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-text-muted mb-10 leading-[var(--body-line-height,1.6)] font-body font-[var(--body-weight,400)]">
          نظام الألوان في TypeHue مبني على تسلسل هرمي من <span className="text-text font-bold">المتغيرات الدلالية (Semantic Variables)</span>. بدلاً من اختيار أكواد hex ثابتة، يمكنك تحديد أدوار مثل "السطح" (Surface)، أو "الأساسي" (Primary)، أو "نص باهت" (Text Muted).
        </p>

        <h3 className="text-xl sm:text-2xl font-display font-[var(--display-weight,700)] mb-6 text-text tracking-[var(--display-letter-spacing,-0.01em)]">هيكل لوحة الألوان</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: 'أساسي (Primary)', var: '--color-primary', bg: 'bg-primary', text: 'text-primary-fg' },
            { label: 'ثانوي (Secondary)', var: '--color-secondary', bg: 'bg-secondary', text: 'text-secondary-fg' },
            { label: 'ثالث (Tertiary)', var: '--color-tertiary', bg: 'bg-tertiary', text: 'text-tertiary-fg' },
            { label: 'السطح (Surface)', var: '--color-surface', bg: 'bg-surface', text: 'text-text' },
          ].map((color) => (
            <div key={color.label} className="p-4 bg-bg border border-border rounded-xl">
              <div className={`h-12 w-full rounded-lg ${color.bg} mb-3 flex items-center justify-center font-bold text-[10px] ${color.text} font-body font-[var(--body-weight,700)]`}>
                {color.label}
              </div>
              <p className="text-[10px] font-mono text-text-muted text-center" dir="ltr">{color.var}</p>
            </div>
          ))}
        </div>

        <h3 className="text-xl sm:text-2xl font-display font-[var(--display-weight,700)] mb-6 text-text tracking-[var(--display-letter-spacing,-0.01em)]">الضبط التلقائي والتناغم</h3>
        <p className="text-text-muted mb-6 leading-[var(--body-line-height,1.6)] font-body font-[var(--body-weight,400)]">
          يتميز TypeHue بمحرك <span className="text-text font-bold">ضبط تلقائي (Auto-Adjust)</span> تجريبي. عند تفعيله، يقوم باشتقاق اللوحة بأكملها من لونك الأساسي بناءً على أحد أوضاع التناغم الأربعة:
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 list-none p-0">
          {[
            { name: 'متماثل (Analogous)', desc: 'ألوان متجاورة على عجلة الألوان.' },
            { name: 'ثلاثي (Triadic)', desc: 'ألوان متباعدة بالتساوي حول عجلة الألوان.' },
            { name: 'مكمل منقسم (Split-Complementary)', desc: 'لون أساسي واللونين المجاورين لمكمله.' },
            { name: 'مكمل (Complementary)', desc: 'ألوان متقابلة على عجلة الألوان.' },
          ].map((mode) => (
            <li key={mode.name} className="m-0 p-5 bg-surface border border-border rounded-xl">
              <h4 className="font-display font-bold text-sm text-text mb-1 font-[var(--display-weight,700)]">{mode.name}</h4>
              <p className="text-xs text-text-muted leading-relaxed m-0 font-body font-[var(--body-weight,400)]">{mode.desc}</p>
            </li>
          ))}
        </ul>

        <h3 className="text-xl sm:text-2xl font-display font-[var(--display-weight,700)] mb-6 text-text tracking-[var(--display-letter-spacing,-0.01em)]">تصدير الثيمات</h3>
        <p className="text-text-muted mb-6 font-body font-[var(--body-weight,400)] leading-[var(--body-line-height,1.6)]">
          بمجرد إتقان الثيم الخاص بك، يمكنك تصديره كمتغيرات CSS أو ككائن تكوين Tailwind مباشرة من تبويب <span className="font-bold text-text">التصدير (Export)</span>.
        </p>

        <div className="bg-surface border border-border rounded-xl overflow-hidden mb-8">
          <div className="bg-bg/50 px-4 py-2 border-b border-border flex justify-between items-center">
            <span className="text-[10px] font-mono text-text-muted">Tailwind Config Export</span>
          </div>
          <pre className="p-6 font-mono text-sm overflow-x-auto text-text" dir="ltr">
            <code>{`module.exports = {
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        surface: 'var(--color-surface)',
        bg: 'var(--color-bg)',
        // ... all semantic roles
      }
    }
  }
}`}</code>
          </pre>
        </div>
      </div>
    </section>
  );
}
