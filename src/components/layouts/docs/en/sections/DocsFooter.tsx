export default function DocsFooter() {
  return (
          <footer className="mt-20 pt-10 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-surface border border-border rounded flex items-center justify-center text-[10px] font-display font-black text-text-muted">
                T
              </div>
              <span className="text-xs font-display font-bold text-text-muted">TypeHue © 2026</span>
            </div>
            <div className="flex gap-6 text-xs font-medium text-text-muted">
              <a href="#" className="hover:text-primary">Twitter</a>
              <a href="#" className="hover:text-primary">GitHub</a>
              <a href="#" className="hover:text-primary">Discord</a>
            </div>
          </footer>
  )
}