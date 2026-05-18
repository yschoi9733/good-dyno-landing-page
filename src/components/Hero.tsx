import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="flex min-h-svh snap-start flex-col items-center justify-center px-5 py-16">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-8 text-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-climb-green">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="text-climb-lime"
            >
              <path
                d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-2xl font-bold tracking-tight">Limbing</span>
        </div>

        {/* Main Headline */}
        <h1 className="max-w-3xl text-balance text-4xl leading-tight font-bold tracking-tight md:text-5xl lg:text-6xl">
          같은 문제를 푼 사람들의
          <br />
          <span className="text-climb-green">클라이밍 영상</span>을 한곳에
        </h1>

        {/* Subheadline */}
        <p className="text-muted max-w-xl text-pretty text-lg leading-relaxed md:text-xl">
          흩어진 등반 영상을 암장, 난이도, 문제 기준으로 정리하고 내 성장 기록까지
          확인하세요.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <button className="bg-climb-green hover:bg-climb-green/90 flex h-14 items-center justify-center rounded-full px-8 text-lg font-semibold text-white transition-colors">
            사전 신청하기
          </button>
          <button className="text-muted hover:text-ink flex items-center gap-2 text-lg font-medium transition-colors">
            서비스 컨셉 보기
            <ChevronDown className="h-5 w-5" />
          </button>
        </div>

        {/* App Mock Preview */}
        <div className="mt-8 w-full max-w-sm">
          <div className="shadow-soft rounded-3xl border-8 border-ink/10 bg-surface p-2">
            <div className="rounded-2xl bg-bg p-4">
              {/* Status Bar Mock */}
              <div className="mb-4 flex items-center justify-between text-xs text-muted">
                <span>9:41</span>
                <div className="flex gap-1">
                  <div className="h-2.5 w-2.5 rounded-full bg-ink/30" />
                  <div className="h-2.5 w-2.5 rounded-full bg-ink/30" />
                  <div className="h-2.5 w-2.5 rounded-full bg-ink/30" />
                </div>
              </div>

              {/* Feed Preview */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 rounded-xl bg-surface p-3">
                  <div className="h-12 w-12 rounded-lg bg-climb-green/20" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">더클라임 강남</p>
                    <p className="text-xs text-muted">초록 5번 문제</p>
                  </div>
                  <span className="rounded-full bg-climb-lime px-2 py-0.5 text-xs font-semibold text-climb-green">
                    V4
                  </span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-surface p-3">
                  <div className="h-12 w-12 rounded-lg bg-climb-blue/20" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">클라이밍파크 홍대</p>
                    <p className="text-xs text-muted">파랑 3번 문제</p>
                  </div>
                  <span className="rounded-full bg-climb-blue/20 px-2 py-0.5 text-xs font-semibold text-climb-blue">
                    V3
                  </span>
                </div>
                <div className="flex items-center gap-2 rounded-xl bg-surface p-3">
                  <div className="h-12 w-12 rounded-lg bg-climb-red/20" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">더클라임 신촌</p>
                    <p className="text-xs text-muted">빨강 7번 문제</p>
                  </div>
                  <span className="rounded-full bg-climb-red/20 px-2 py-0.5 text-xs font-semibold text-climb-red">
                    V5
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
