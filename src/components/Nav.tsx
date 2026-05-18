export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b border-line">
      <div className="mx-auto max-w-5xl px-5 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-climb-green">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-climb-lime">
              <path
                d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-lg font-bold tracking-tight">Limbing</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted">
          <a href="#problems" className="hover:text-ink transition-colors">문제점</a>
          <a href="#how-it-works" className="hover:text-ink transition-colors">이용방법</a>
          <a href="#features" className="hover:text-ink transition-colors">기능</a>
        </div>

        <a
          href="#early-access"
          className="bg-climb-green hover:bg-climb-green/90 text-white font-semibold text-sm px-5 py-2 rounded-full transition-colors"
        >
          사전 신청
        </a>
      </div>
    </nav>
  );
}
