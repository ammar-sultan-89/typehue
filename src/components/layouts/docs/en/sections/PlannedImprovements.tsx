export default function PlannedImprovements() {
  return (
    <section id="planned-improvements" className="py-12 pb-32">
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] mb-8 font-body font-[var(--body-weight,900)]">
        Roadmap
      </div>

      <h1 className="text-3xl sm:text-4xl font-display font-[var(--display-weight,900)] mb-8 text-text tracking-[var(--display-letter-spacing,-0.02em)] leading-[var(--display-line-height,1.2)]">Planned Improvements</h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-text-muted mb-10 leading-[var(--body-line-height,1.6)] font-body font-[var(--body-weight,400)]">
          TypeHue is continuously evolving. Here are the key features we're currently planning to implement to make the tool even more powerful for your design workflow.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
          <div className="p-8 bg-surface border border-border rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
              <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/></svg>
            </div>
            <h3 className="font-display font-bold text-xl mb-3 text-text font-[var(--display-weight,700)]">1. Local Font Support</h3>
            <p className="text-text-muted text-sm leading-[var(--body-line-height,1.6)] font-body font-[var(--body-weight,400)]">
              While Google Fonts provides a vast library, we know that many professional projects use custom or licensed local fonts. We're planning to add the ability to select and test fonts directly from your system or upload font files for real-time testing within the layouts.
            </p>
          </div>

          <div className="p-8 bg-surface border border-border rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
              <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
            </div>
            <h3 className="font-display font-bold text-xl mb-3 text-text font-[var(--display-weight,700)]">2. Configuration Persistence</h3>
            <p className="text-text-muted text-sm leading-[var(--body-line-height,1.6)] font-body font-[var(--body-weight,400)]">
              Soon, you'll be able to save your theme configurations and re-import them later. This will allow for iterative testing across different sessions and make it easier to share specific theme explorations with your team by simply sharing a JSON configuration file.
            </p>
          </div>
        </div>

        <div className="p-6 bg-primary/5 border border-primary/20 rounded-2xl flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
          </div>
          <div>
            <h4 className="font-display font-bold text-text text-sm font-[var(--display-weight,700)] mb-2">Have a suggestion?</h4>
            <p className="text-text-muted text-xs font-body font-[var(--body-weight,400)]">
              If there's a feature you'd like to see in TypeHue, feel free to open an issue or start a discussion on GitHub.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
