export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#0b0614] px-5 py-8">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4 text-sm text-white/60">
        <div className="flex items-center gap-3">
          <span className="relative">
            <span className="absolute -inset-3 rounded-full bg-white/10 blur-xl opacity-60" />
            <img
              src="/logo%20with%20word.png"
              alt="WJM logo"
              className="relative h-12 w-auto drop-shadow-[0_10px_24px_rgba(0,0,0,0.35)]"
              loading="lazy"
            />
          </span>
        </div>
        <div className="text-xs text-white/50">© 2026 WJM. All rights reserved.</div>
      </div>
    </footer>
  );
}
