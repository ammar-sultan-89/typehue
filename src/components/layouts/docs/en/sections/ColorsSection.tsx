export default function ColorsSection() {
  return (
    <section id="colors" className="py-12 border-b border-border/50">
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] mb-8 font-body font-[var(--body-weight,900)]">
        Visual System
      </div>

      <h1 className="text-3xl sm:text-4xl font-display font-[var(--display-weight,900)] mb-8 text-text tracking-[var(--display-letter-spacing,-0.02em)] leading-[var(--display-line-height,1.2)]">Colors</h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-text-muted mb-10 leading-[var(--body-line-height,1.6)] font-body font-[var(--body-weight,400)]">
          The color system in TypeHue is built on a hierarchy of <span className="text-text font-bold">Semantic Variables</span>. Instead of picking fixed hex codes, you define roles like "Surface", "Primary", or "Text Muted".
        </p>

        <h3 className="text-xl sm:text-2xl font-display font-[var(--display-weight,700)] mb-6 text-text tracking-[var(--display-letter-spacing,-0.01em)]">Palette Structure</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: 'Primary', var: '--color-primary', bg: 'bg-primary', text: 'text-primary-fg' },
            { label: 'Secondary', var: '--color-secondary', bg: 'bg-secondary', text: 'text-secondary-fg' },
            { label: 'Tertiary', var: '--color-tertiary', bg: 'bg-tertiary', text: 'text-tertiary-fg' },
            { label: 'Surface', var: '--color-surface', bg: 'bg-surface', text: 'text-text' },
          ].map((color) => (
            <div key={color.label} className="p-4 bg-bg border border-border rounded-xl">
              <div className={`h-12 w-full rounded-lg ${color.bg} mb-3 flex items-center justify-center font-bold text-xs ${color.text} font-body font-[var(--body-weight,700)]`}>
                {color.label}
              </div>
              <p className="text-[10px] font-mono text-text-muted text-center">{color.var}</p>
            </div>
          ))}
        </div>

        <h3 className="text-xl sm:text-2xl font-display font-[var(--display-weight,700)] mb-6 text-text tracking-[var(--display-letter-spacing,-0.01em)]">Auto-Adjust & Harmonies</h3>
        <p className="text-text-muted mb-6 leading-[var(--body-line-height,1.6)] font-body font-[var(--body-weight,400)]">
          TypeHue features an experimental <span className="text-text font-bold">Auto-Adjust</span> engine. When enabled, it derives the entire palette from your primary color based on one of four harmony modes:
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 list-none p-0">
          {[
            { name: 'Analogous', desc: 'Colors that are next to each other on the color wheel.' },
            { name: 'Triadic', desc: 'Colors that are evenly spaced around the color wheel.' },
            { name: 'Split-Complementary', desc: 'A base color and the two colors adjacent to its complement.' },
            { name: 'Complementary', desc: 'Colors that are opposite each other on the color wheel.' },
          ].map((mode) => (
            <li key={mode.name} className="m-0 p-5 bg-surface border border-border rounded-xl">
              <h4 className="font-display font-bold text-sm text-text mb-1 font-[var(--display-weight,700)]">{mode.name}</h4>
              <p className="text-xs text-text-muted leading-relaxed m-0 font-body font-[var(--body-weight,400)]">{mode.desc}</p>
            </li>
          ))}
        </ul>

        <h3 className="text-xl sm:text-2xl font-display font-[var(--display-weight,700)] mb-6 text-text tracking-[var(--display-letter-spacing,-0.01em)]">Exporting Themes</h3>
        <p className="text-text-muted mb-6 font-body font-[var(--body-weight,400)] leading-[var(--body-line-height,1.6)]">
          Once you've perfected your theme, you can export it as CSS variables or a Tailwind configuration object directly from the <span className="font-bold text-text">Export</span> tab.
        </p>

        <div className="bg-surface border border-border rounded-xl overflow-hidden mb-8">
          <div className="bg-bg/50 px-4 py-2 border-b border-border flex justify-between items-center">
            <span className="text-[10px] font-mono text-text-muted">Tailwind Config Export</span>
          </div>
          <pre className="p-6 font-mono text-sm overflow-x-auto text-text">
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
