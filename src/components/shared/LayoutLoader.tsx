export function LayoutLoader() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[60vh] animate-in fade-in duration-500">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-4 border-primary/10"></div>
        <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
      </div>
      <p className="mt-6 text-sm font-mono text-text-muted animate-pulse">
        Loading Layout...
      </p>
    </div>
  );
}
