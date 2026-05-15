export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-12 border-b border-border/50">
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] mb-8 font-body font-[var(--body-weight,900)]">
        Under the Hood
      </div>

      <h1 className="text-4xl font-display font-[var(--display-weight,900)] mb-8 text-text tracking-[var(--display-letter-spacing,-0.02em)] leading-[var(--display-line-height,1.2)]">How It Works</h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-text-muted mb-10 leading-[var(--body-line-height,1.6)] font-body font-[var(--body-weight,400)]">
          TypeHue is built on top of <span className="text-text font-bold">React</span> and <span className="text-text font-bold">Vite</span>, but the real magic happens in the way we bridge the React state with the DOM's native styling capabilities.
        </p>

        <h3 className="text-2xl font-display font-[var(--display-weight,700)] mb-6 text-text tracking-[var(--display-letter-spacing,-0.01em)]">The Data Flow</h3>
        
        <div className="p-8 bg-surface border border-border rounded-2xl mb-12 flex flex-col items-center">
          <div className="max-w-md w-full">
            <svg viewBox="0 0 400 200" className="w-full h-auto">
              {/* Nodes */}
              <rect x="140" y="20" width="120" height="40" rx="8" fill="var(--color-primary)" />
              <text x="200" y="45" textAnchor="middle" fill="var(--color-primary-fg)" fontSize="12" fontWeight="bold">Settings Panel</text>
              
              <rect x="140" y="80" width="120" height="40" rx="8" fill="var(--color-surface)" stroke="var(--color-border)" />
              <text x="200" y="105" textAnchor="middle" fill="var(--color-text)" fontSize="12" fontWeight="bold">ThemeProvider</text>
              
              <rect x="40" y="140" width="120" height="40" rx="8" fill="var(--color-bg)" stroke="var(--color-primary)" />
              <text x="100" y="165" textAnchor="middle" fill="var(--color-text)" fontSize="10">CSS Variables (:root)</text>
              
              <rect x="240" y="140" width="120" height="40" rx="8" fill="var(--color-bg)" stroke="var(--color-secondary)" />
              <text x="300" y="165" textAnchor="middle" fill="var(--color-text)" fontSize="10">useThemeColors Hook</text>
              
              {/* Arrows */}
              <path d="M200 60 L200 80" stroke="var(--color-text-muted)" fill="none" markerEnd="url(#arrowhead)" />
              <path d="M160 120 L100 140" stroke="var(--color-text-muted)" fill="none" markerEnd="url(#arrowhead)" />
              <path d="M240 120 L300 140" stroke="var(--color-text-muted)" fill="none" markerEnd="url(#arrowhead)" />
              
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                  <polygon points="0 0, 10 3.5, 0 7" fill="var(--color-text-muted)" />
                </marker>
              </defs>
            </svg>
          </div>
          <p className="text-xs text-text-muted mt-6 text-center italic font-body font-[var(--body-weight,400)]">
            Simplified data flow from user interaction to DOM application.
          </p>
        </div>

        <div className="space-y-8 mb-12">
          <div>
            <h4 className="font-display font-bold text-text mb-2 font-[var(--display-weight,700)]">1. ThemeProvider & CSS Variables</h4>
            <p className="text-text-muted text-sm leading-[var(--body-line-height,1.6)] font-body font-[var(--body-weight,400)]">
              The <code className="text-primary">ThemeProvider</code> acts as the single source of truth. When a user modifies a setting, the provider updates its internal state and immediately pushes those values to the <code className="text-primary">:root</code> as CSS variables. This ensures that 99% of your styles update via the browser's native CSS engine, which is incredibly performant.
            </p>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-text mb-2 font-[var(--display-weight,700)]">2. useThemeColors & Chart Reactivity</h4>
            <p className="text-text-muted text-sm leading-[var(--body-line-height,1.6)] font-body font-[var(--body-weight,400)]">
              Standard CSS variables don't work for non-DOM elements like SVG charts rendered via libraries (e.g., Recharts). For these cases, we use a custom <code className="text-primary">useThemeColors</code> hook. It uses a <code className="text-text font-bold">MutationObserver</code> on the root element to detect style changes and provide resolved hex values directly to React components.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-text mb-2 font-[var(--display-weight,700)]">3. Auto-Adjust Memoization</h4>
            <p className="text-text-muted text-sm leading-[var(--body-line-height,1.6)] font-body font-[var(--body-weight,400)]">
              To prevent infinite render loops during rapid color changes (like dragging a color picker), the auto-adjustment logic is memoized. A single change to the primary color triggers exactly one render cycle where all derived variables are re-calculated and batch-applied.
            </p>
          </div>
        </div>

        <div className="p-6 bg-surface border border-border rounded-2xl">
          <h4 className="font-display font-bold text-text mb-2 font-[var(--display-weight,700)]">RTL Implementation Details</h4>
          <p className="text-text-muted text-sm leading-[var(--body-line-height,1.6)] font-body font-[var(--body-weight,400)] mb-4">
            RTL support is achieved using a combination of the <code className="text-primary">dir="rtl"</code> attribute and Tailwind's logical property utilities (<code className="text-primary">ms-*</code>, <code className="text-primary">pe-*</code>).
          </p>
          <div className="bg-bg p-4 rounded-lg font-mono text-xs text-text-muted border border-border">
            {`// In App.tsx
<div dir={locale === 'ar' ? 'rtl' : 'ltr'}>
  <ActiveLayout />
</div>`}
          </div>
        </div>
      </div>
    </section>
  );
}
