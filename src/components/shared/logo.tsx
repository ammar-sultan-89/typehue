

export default function Logo(props: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className="flex items-center gap-3" {...props}>
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
            <div className="text-primary-fg font-display font-bold text-2xl">T</div>
          </div>
          <span className="font-display font-[var(--display-weight,900)] text-2xl tracking-[var(--display-letter-spacing,-0.05em)]">TypeHue</span>
        </div>
    );
}