import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-4rem)] flex-col justify-center overflow-hidden px-5 pt-24 pb-16">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-16 lg:flex-row">
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <div className="border-climb-green/30 bg-climb-green/10 text-climb-green mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-bold">
            <span className="relative flex h-2 w-2">
              <span className="bg-climb-lime absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
              <span className="bg-climb-lime relative inline-flex h-2 w-2 rounded-full" />
            </span>
            베타 테스터 모집중
          </div>

          <h1 className="mb-6 max-w-xl text-4xl leading-tight font-black tracking-tight text-balance md:text-5xl lg:text-6xl">
            같은 문제를 푼 사람들의
            <br />
            <span className="text-climb-green">클라이밍 영상</span>을 한곳에
          </h1>

          <p className="text-muted mx-auto mb-10 max-w-md text-lg leading-relaxed text-pretty lg:mx-0">
            흩어진 클라이밍 영상을 암장, 난이도, 문제 기준으로 정리하고 내 성장
            기록까지 확인하세요.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="#early-access"
              className="bg-climb-green hover:bg-climb-green/90 flex h-14 w-full items-center justify-center rounded-full px-8 text-lg font-semibold text-white transition-colors sm:w-auto"
            >
              사전 신청하기
            </a>
            <a
              href="#problems"
              className="text-muted hover:text-ink flex items-center gap-2 text-lg font-medium transition-colors"
            >
              서비스 컨셉 보기
              <ArrowDown className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Phone Mockup */}
        <div className="flex flex-1 justify-center lg:justify-end">
          <div className="border-ink/10 bg-surface shadow-soft relative h-[620px] w-[300px] overflow-hidden rounded-[44px] border-8">
            {/* Notch */}
            <div className="absolute top-0 z-50 flex h-6 w-full justify-center bg-transparent">
              <div className="bg-ink/10 h-4 w-1/3 rounded-b-2xl" />
            </div>

            {/* App Header */}
            <div className="bg-surface/95 border-line absolute top-0 right-0 left-0 z-40 flex items-center justify-between border-b px-4 pt-8 pb-3 backdrop-blur-md">
              <span className="text-climb-green text-base font-bold tracking-wider">
                LIMBING
              </span>
              <div className="text-ink/60 flex items-center gap-3 text-xs">
                <div className="relative">
                  <div className="bg-ink/10 h-5 w-5 rounded-full" />
                  <span className="bg-climb-red border-surface absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full border" />
                </div>
                <div className="bg-ink/10 h-5 w-5 rounded-full" />
              </div>
            </div>

            {/* Feed */}
            <div className="h-full w-full overflow-hidden pt-[60px] pb-16">
              {/* Post 1 */}
              <div className="border-line border-b">
                <div className="flex items-center justify-between px-3 py-2.5">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://images.unsplash.com/photo-1524334228333-0f6db392f8a1?auto=format&fit=crop&w=80&q=80"
                      alt="Avatar"
                      className="h-8 w-8 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-xs font-semibold">박센드</p>
                      <p className="text-muted text-[10px]">
                        더클라임 강남 · 2h
                      </p>
                    </div>
                  </div>
                  <span className="bg-climb-green/15 text-climb-green rounded-full px-2 py-0.5 text-[10px] font-bold">
                    V6
                  </span>
                </div>
                <div className="bg-bg relative aspect-[4/5]">
                  <img
                    src="https://images.unsplash.com/photo-1564769662533-4f00a87b4056?auto=format&fit=crop&w=600&q=80"
                    alt="Climbing"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm">
                      <div className="ml-1 h-0 w-0 border-t-[6px] border-b-[6px] border-l-[10px] border-t-transparent border-b-transparent border-l-white" />
                    </div>
                  </div>
                  <div className="absolute top-2 left-2">
                    <span className="bg-climb-green/90 rounded-full px-2 py-0.5 text-[10px] font-semibold text-white">
                      완등
                    </span>
                  </div>
                  <div className="absolute bottom-2 left-2 flex gap-1">
                    <span className="rounded-full bg-black/60 px-2 py-0.5 text-[10px] text-white">
                      #오버행
                    </span>
                    <span className="rounded-full bg-black/60 px-2 py-0.5 text-[10px] text-white">
                      #파워
                    </span>
                  </div>
                </div>
                <div className="px-3 py-2.5">
                  <p className="mb-2 text-xs">
                    드디어 완등! 🔥 3주 도전 끝에 성공했어요
                  </p>
                  <div className="flex gap-2">
                    <span className="bg-surface border-line rounded-full border px-2 py-1 text-[10px]">
                      🔥 156
                    </span>
                    <span className="bg-surface border-line rounded-full border px-2 py-1 text-[10px]">
                      💀 23
                    </span>
                    <span className="bg-surface border-line rounded-full border px-2 py-1 text-[10px]">
                      👀 45
                    </span>
                  </div>
                </div>
              </div>

              {/* Post 2 */}
              <div>
                <div className="flex items-center justify-between px-3 py-2.5">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80"
                      alt="Avatar"
                      className="h-8 w-8 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-xs font-semibold">이베타</p>
                      <p className="text-muted text-[10px]">
                        클라이밍파크 홍대 · 4h
                      </p>
                    </div>
                  </div>
                  <span className="bg-climb-blue/15 text-climb-blue rounded-full px-2 py-0.5 text-[10px] font-bold">
                    V3
                  </span>
                </div>
                <div className="bg-bg relative aspect-square">
                  <img
                    src="https://images.unsplash.com/photo-1675190558564-cc1ec83e9e0c?auto=format&fit=crop&w=600&q=80"
                    alt="Climbing"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm">
                      <div className="ml-1 h-0 w-0 border-t-[6px] border-b-[6px] border-l-[10px] border-t-transparent border-b-transparent border-l-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Tab Bar */}
            <div className="bg-surface/95 border-line absolute right-0 bottom-0 left-0 flex h-14 items-center justify-around border-t px-2 backdrop-blur-md">
              <button className="text-climb-green flex flex-col items-center gap-0.5">
                <div className="bg-climb-green/20 h-4 w-4 rounded-sm" />
                <span className="text-[9px] font-bold">홈</span>
              </button>
              <button className="text-muted flex flex-col items-center gap-0.5">
                <div className="bg-ink/10 h-4 w-4 rounded-sm" />
                <span className="text-[9px]">암장</span>
              </button>
              <button className="bg-climb-green shadow-soft -mt-4 flex h-10 w-10 items-center justify-center rounded-full text-xl font-light text-white">
                +
              </button>
              <button className="text-muted flex flex-col items-center gap-0.5">
                <div className="bg-ink/10 h-4 w-4 rounded-sm" />
                <span className="text-[9px]">탐색</span>
              </button>
              <button className="text-muted flex flex-col items-center gap-0.5">
                <div className="bg-ink/10 h-4 w-4 rounded-sm" />
                <span className="text-[9px]">프로필</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
