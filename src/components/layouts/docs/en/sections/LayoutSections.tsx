export default function LayoutSections() {
  return (
    <section id="layouts" className="py-12 border-b border-border/50">
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] mb-8 font-body font-[var(--body-weight,900)]">
        Architecture
      </div>

      <h1 className="text-3xl sm:text-4xl font-display font-[var(--display-weight,900)] mb-8 text-text tracking-[var(--display-letter-spacing,-0.02em)] leading-[var(--display-line-height,1.2)]">Layouts</h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-text-muted mb-8 leading-[var(--body-line-height,1.6)] font-body font-[var(--body-weight,400)]">
          Layouts in TypeHue aren't just templates; they are <span className="text-text font-bold">stress-tests</span>. By viewing your theme in different contexts—marketing landing pages, data-heavy dashboards, or technical documentation—you can make informed design decisions that hold up in real-world applications.
        </p>

        <h3 className="text-xl sm:text-2xl font-display font-[var(--display-weight,700)] mb-6 text-text tracking-[var(--display-letter-spacing,-0.01em)]">Current Layouts</h3>
        
        <div className="space-y-4 mb-12">
          {[
            { id: '/', name: 'Landing Page', focus: 'Visual hierarchy, large display typography, and brand impact.' },
            { id: '/dashboard', name: 'Dashboard', focus: 'Information density, component isolation, and functional color usage (success/danger).' },
            { id: '/docs', name: 'Documentation', focus: 'Long-form readability, nested hierarchies, and code presentation.' },
          ].map((layout) => (
            <div key={layout.id} className="p-4 sm:p-5 bg-surface border border-border rounded-xl flex items-start gap-4">
              <div className="w-16 sm:w-24 h-10 flex-shrink-0 rounded-lg bg-bg border border-border flex items-center justify-center font-mono text-[10px] sm:text-xs text-primary font-bold">
                {layout.id}
              </div>
              <div>
                <h4 className="font-display font-bold text-text mb-1 font-[var(--display-weight,700)]">{layout.name}</h4>
                <p className="text-text-muted text-sm font-body font-[var(--body-weight,400)]">{layout.focus}</p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="text-xl sm:text-2xl font-display font-[var(--display-weight,700)] mb-6 text-text tracking-[var(--display-letter-spacing,-0.01em)]">Adding a New Layout</h3>
        <p className="text-text-muted mb-6 font-body font-[var(--body-weight,400)] leading-[var(--body-line-height,1.6)]">
          Adding a layout is the best way to contribute. Each layout is a standalone component that consumes the global theme via CSS variables.
        </p>

        <div className="bg-surface border border-border rounded-xl overflow-hidden mb-8">
          <div className="bg-bg/50 px-4 py-2 border-b border-border">
            <span className="text-[10px] font-mono text-text-muted">Recommended File Structure</span>
          </div>
          <pre className="p-6 font-mono text-sm overflow-x-auto text-text">
            <code>{`src/components/layouts/
└── my-new-layout/
    ├── sections/          # Subcomponents for each part
    │   ├── Hero.tsx
    │   └── Content.tsx
    └── MyNewLayout.tsx    # Main entry point`}</code>
          </pre>
        </div>

        <p className="text-text-muted mb-6 font-body font-[var(--body-weight,400)] leading-[var(--body-line-height,1.6)]">
          Once your component is ready, register it in <code className="text-primary font-bold">src/data/layouts.ts</code> and <code className="text-primary font-bold">src/components/layouts/index.ts</code> to make it appear in the panel dropdown.
        </p>

        <div className="p-6 bg-secondary/5 border border-secondary/20 rounded-2xl">
          <h4 className="font-display font-bold text-secondary mb-2 text-sm font-[var(--display-weight,700)]">Pro Tip: Theme Consistency</h4>
          <p className="text-text-muted text-sm leading-relaxed font-body font-[var(--body-weight,400)]">
            When building a layout, avoid hardcoding values. Instead of <code className="text-danger">text-[#333]</code>, use <code className="text-primary">text-text</code> or <code className="text-primary">text-text-muted</code>. This ensures your layout remains fully reactive to theme changes.
          </p>
        </div>
      </div>
    </section>
  );
}
