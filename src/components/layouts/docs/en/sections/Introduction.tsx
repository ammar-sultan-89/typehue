export default function Introduction() {
  return (
    <section id="getting-started" className="py-12 border-b border-border/50">
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] mb-8 font-body font-[var(--body-weight,900)]">
        Introduction
      </div>
      
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-[var(--display-weight,900)] mb-8 leading-[var(--display-line-height,1.1)] tracking-[var(--display-letter-spacing,-0.02em)] text-text">
        Getting Started
      </h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-text-muted mb-8 font-body font-[var(--body-weight,400)] leading-[var(--body-line-height,1.6)]">
          TypeHue is a free, open-source, real-time font and color theme testing tool designed specifically for developers and designers who need to see their choices in a production-like context.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          <div className="p-6 bg-surface border border-border rounded-2xl">
            <h3 className="font-display font-bold text-lg mb-2 text-text font-[var(--display-weight,700)]">Why TypeHue?</h3>
            <p className="text-text-muted text-sm leading-relaxed font-body font-[var(--body-weight,400)] leading-[var(--body-line-height,1.6)]">
              Fonts need to be tested in production-like contexts with real layouts, and real color palettes. TypeHue was built out of frustration with tools that don't account for RTL/Arabic typography.
            </p>
          </div>
          <div className="p-6 bg-surface border border-border rounded-2xl">
            <h3 className="font-display font-bold text-lg mb-2 text-text font-[var(--display-weight,700)]">Open & Free</h3>
            <p className="text-text-muted text-sm leading-relaxed font-body font-[var(--body-weight,400)] leading-[var(--body-line-height,1.6)]">
              TypeHue is a open source project aimed at making the bridge between design and code as seamless as possible.
            </p>
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-display font-bold mb-6 text-text font-[var(--display-weight,700)] tracking-[var(--display-letter-spacing,-0.01em)]">Installation</h2>
        <p className="text-text-muted mb-6 font-body font-[var(--body-weight,400)] leading-[var(--body-line-height,1.6)]">
          To run TypeHue locally and start experimenting, follow these steps:
        </p>

        <div className="bg-surface border border-border rounded-xl overflow-hidden mb-10">
          <div className="bg-bg/50 px-4 py-2 border-b border-border flex justify-between items-center">
            <span className="text-[10px] font-mono text-text-muted">Terminal</span>
          </div>
          <pre className="p-6 font-mono text-sm overflow-x-auto text-text">
            <code>{`# Clone the repository
git clone https://github.com/ammar-sultan-89/typehue.git

# Navigate to the project
cd typehue

# Install dependencies
npm install

# Start the development server
npm run dev`}</code>
          </pre>
        </div>

        <h2 className="text-2xl sm:text-3xl font-display font-bold mb-6 text-text font-[var(--display-weight,700)] tracking-[var(--display-letter-spacing,-0.01em)]">The Configuration Panel</h2>
        <p className="text-text-muted mb-6 font-body font-[var(--body-weight,400)] leading-[var(--body-line-height,1.6)]">
          The right sidebar is your command center. Every change you make there is instantly reflected in the preview area via CSS variables. This allows you to test:
        </p>
        <ul className="space-y-3 mb-10 list-disc list-inside text-text-muted font-body font-[var(--body-weight,400)]">
          <li>Live font pairing (Display + Body)</li>
          <li>Contrast and readability across different palettes</li>
          <li>RTL layout integrity for Arabic and other right-to-left languages</li>
          <li>Spacing and typography hierarchy adjustments</li>
        </ul>

        <div className="p-6 bg-primary/5 border border-primary/20 rounded-2xl flex gap-4">
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <div>
            <h4 className="font-display font-bold text-primary mb-1 text-sm font-[var(--display-weight,700)]">Quick Tip</h4>
            <p className="text-text-muted text-sm leading-relaxed font-body font-[var(--body-weight,400)]">
              Use the <span className="font-bold text-text">Randomize</span> button in the panel to quickly discover unexpected but harmonious font and color combinations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
