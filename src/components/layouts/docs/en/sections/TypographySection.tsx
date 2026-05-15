export default function TypographySection() {
  return (
    <section id="typography" className="py-12 border-b border-border/50">
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] mb-8 font-body font-[var(--body-weight,400)]">
        Visual System
      </div>

      <h1 className="text-3xl sm:text-4xl font-display font-[var(--display-weight,900)] mb-8 text-text tracking-[var(--display-letter-spacing,-0.02em)] leading-[var(--display-line-height,1.2)]">Typography</h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-text-muted mb-10 font-body font-[var(--body-weight,400)] leading-[var(--body-line-height,1.6)]">
          TypeHue uses a <span className="text-text font-bold">Dual-Font System</span>. By separating your font choices into <span className="italic">Display</span> (for headings and impact) and <span className="italic">Body</span> (for readability), you can create sophisticated visual hierarchies.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="p-8 bg-bg border border-border rounded-2xl shadow-sm">
            <span className="text-[10px] font-black text-primary uppercase tracking-widest block mb-4 font-body font-[var(--body-weight,900)]">Display Sample</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-[var(--display-weight,900)] leading-[var(--display-line-height,1.1)] tracking-[var(--display-letter-spacing,-0.02em)] text-text mb-4">
              Modern Typography is Dynamic
            </h2>
            <p className="text-xs text-text-muted font-mono">
              Weight: var(--display-weight) <br/>
              Leading: var(--display-line-height)
            </p>
          </div>
          <div className="p-8 bg-bg border border-border rounded-2xl shadow-sm">
            <span className="text-[10px] font-black text-primary uppercase tracking-widest block mb-4 font-body font-[var(--body-weight,900)]">Body Sample</span>
            <p className="font-body font-[var(--body-weight,400)] leading-[var(--body-line-height,1.6)] text-text">
              The body font is the workhorse of your design. It should be legible, well-spaced, and balanced for long-form reading on any device.
            </p>
            <p className="text-xs text-text-muted font-mono mt-4">
              Weight: var(--body-weight) <br/>
              Leading: var(--body-line-height)
            </p>
          </div>
        </div>

        <h3 className="text-2xl font-display font-[var(--display-weight,700)] mb-6 text-text tracking-[var(--display-letter-spacing,-0.01em)]">Arabic & RTL Support</h3>
        <p className="text-text-muted mb-8 leading-[var(--body-line-height,1.6)] font-body font-[var(--body-weight,400)]">
          TypeHue is built from the ground up to support Right-To-Left (RTL) layouts. We don't just "flip" the text; we ensure the entire layout remains logically sound using modern CSS and Tailwind practices.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {[
            { 
              title: 'Logical Properties', 
              desc: 'We use logical utilities like ms-* (margin-start) and pe-* (padding-end) instead of left/right fixed values.',
              code: 'ms-4 pe-8'
            },
            { 
              title: 'Alignment & Flex', 
              desc: 'Text alignment and flex-box positioning use start/end keywords to respond to the document direction.',
              code: 'text-start items-end'
            },
            { 
              title: 'Directional Insets', 
              desc: 'Absolute positioning uses inset-s-* (start) and inset-e-* (end) to maintain relative positions.',
              code: 'inset-s-0'
            },
            { 
              title: 'Rounded Corners', 
              desc: 'Borders are rounded using logical start/end corners to preserve the design shape when flipped.',
              code: 'rounded-s-2xl'
            },
            { 
              title: 'Conditional Classes', 
              desc: 'Occasional locale-specific overrides are applied using conditional expressions based on the current locale.',
              code: "locale === 'ar' ? '...' : '...'"
            },
            { 
              title: 'Font Filtering', 
              desc: 'The system automatically filters for fonts that support the Arabic script when RTL is enabled.',
              code: 'findFont(family).subsets.includes("arabic")'
            }
          ].map((item) => (
            <div key={item.title} className="p-5 bg-surface border border-border rounded-xl">
              <h4 className="font-display font-bold text-sm text-text mb-2 font-[var(--display-weight,700)]">{item.title}</h4>
              <p className="text-xs text-text-muted leading-relaxed mb-3 font-body font-[var(--body-weight,400)]">{item.desc}</p>
              <code className="text-[10px] font-mono bg-bg px-2 py-1 rounded border border-border text-primary">{item.code}</code>
            </div>
          ))}
        </div>

        <div className="p-6 bg-surface border border-border rounded-2xl border-s-4 border-s-primary">
          <h4 className="font-display font-bold text-text mb-2 font-[var(--display-weight,700)]">Precision RTL Handling</h4>
          <p className="text-text-muted text-sm leading-[var(--body-line-height,1.6)] font-body font-[var(--body-weight,400)]">
            By strictly adhering to logical properties, TypeHue layouts remain robust and predictable. This approach eliminates the common "layout breakage" that occurs when manually flipping designs from LTR to RTL.
          </p>
        </div>
      </div>
    </section>
  );
}
