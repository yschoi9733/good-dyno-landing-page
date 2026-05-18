import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100svh-4rem)] flex flex-col justify-center px-5 pt-24 pb-16 overflow-hidden">
      <div className="mx-auto flex w-full max-w-5xl flex-col lg:flex-row items-center gap-16">

        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-climb-green/30 bg-climb-green/10 text-climb-green text-xs font-bold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-climb-lime opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-climb-lime" />
            </span>
            베타 테스터 모집중
          </div>

          <h1 className="max-w-xl text-balance text-4xl font-black leading-tight tracking-tight md:text-5xl lg:text-6xl mb-6">
            같은 문제를 푼 사람들의
            <br />
            <span className="text-climb-green">클라이밍 영상</span>을 한곳에
          </h1>

          <p className="text-muted max-w-md text-pretty text-lg leading-relaxed mb-10 mx-auto lg:mx-0">
            흩어진 클라이밍 영상을 암장, 난이도, 문제 기준으로 정리하고 내 성장 기록까지 확인하세요.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <a
              href="#early-access"
              className="w-full sm:w-auto bg-climb-green hover:bg-climb-green/90 flex h-14 items-center justify-center rounded-full px-8 text-lg font-semibold text-white transition-colors"
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
        <div className="flex-1 flex justify-center lg:justify-end">
          <div className="relative w-[300px] h-[620px] rounded-[44px] border-8 border-ink/10 bg-surface shadow-soft overflow-hidden">
            {/* Notch */}
            <div className="absolute top-0 w-full h-6 bg-transparent z-50 flex justify-center">
              <div className="w-1/3 h-4 bg-ink/10 rounded-b-2xl" />
            </div>

            {/* App Header */}
            <div className="absolute top-0 left-0 right-0 pt-8 pb-3 px-4 bg-surface/95 backdrop-blur-md z-40 border-b border-line flex justify-between items-center">
              <span className="text-climb-green font-bold tracking-wider text-base">LIMBING</span>
              <div className="flex items-center gap-3 text-ink/60 text-xs">
                <div className="relative">
                  <div className="w-5 h-5 rounded-full bg-ink/10" />
                  <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-climb-red rounded-full border border-surface" />
                </div>
                <div className="w-5 h-5 rounded-full bg-ink/10" />
              </div>
            </div>

            {/* Feed */}
            <div className="w-full h-full pt-[60px] pb-16 overflow-hidden">
              {/* Post 1 */}
              <div className="border-b border-line">
                <div className="px-3 py-2.5 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://images.unsplash.com/photo-1524334228333-0f6db392f8a1?auto=format&fit=crop&w=80&q=80"
                      alt="Avatar"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-xs font-semibold">박센드</p>
                      <p className="text-[10px] text-muted">더클라임 강남 · 2h</p>
                    </div>
                  </div>
                  <span className="bg-climb-green/15 text-climb-green text-[10px] font-bold px-2 py-0.5 rounded-full">V6</span>
                </div>
                <div className="relative aspect-[4/5] bg-bg">
                  <img
                    src="https://images.unsplash.com/photo-1564769662533-4f00a87b4056?auto=format&fit=crop&w=600&q=80"
                    alt="Climbing"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-2 left-2">
                    <span className="bg-climb-green/90 text-white text-[10px] px-2 py-0.5 rounded-full font-semibold">완등</span>
                  </div>
                  <div className="absolute bottom-2 left-2 flex gap-1">
                    <span className="bg-black/60 text-white text-[10px] px-2 py-0.5 rounded-full">#오버행</span>
                    <span className="bg-black/60 text-white text-[10px] px-2 py-0.5 rounded-full">#파워</span>
                  </div>
                </div>
                <div className="px-3 py-2.5">
                  <p className="text-xs mb-2">드디어 완등! 🔥 3주 도전 끝에 성공했어요</p>
                  <div className="flex gap-2">
                    <span className="bg-surface text-[10px] px-2 py-1 rounded-full border border-line">🔥 156</span>
                    <span className="bg-surface text-[10px] px-2 py-1 rounded-full border border-line">💀 23</span>
                    <span className="bg-surface text-[10px] px-2 py-1 rounded-full border border-line">👀 45</span>
                  </div>
                </div>
              </div>

              {/* Post 2 */}
              <div>
                <div className="px-3 py-2.5 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80"
                      alt="Avatar"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-xs font-semibold">이베타</p>
                      <p className="text-[10px] text-muted">클라이밍파크 홍대 · 4h</p>
                    </div>
                  </div>
                  <span className="bg-climb-blue/15 text-climb-blue text-[10px] font-bold px-2 py-0.5 rounded-full">V3</span>
                </div>
                <div className="relative aspect-square bg-bg">
                  <img
                    src="https://images.unsplash.com/photo-1675190558564-cc1ec83e9e0c?auto=format&fit=crop&w=600&q=80"
                    alt="Climbing"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Tab Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-14 bg-surface/95 backdrop-blur-md border-t border-line flex justify-around items-center px-2">
              <button className="flex flex-col items-center gap-0.5 text-climb-green">
                <div className="w-4 h-4 rounded-sm bg-climb-green/20" />
                <span className="text-[9px] font-bold">홈</span>
              </button>
              <button className="flex flex-col items-center gap-0.5 text-muted">
                <div className="w-4 h-4 rounded-sm bg-ink/10" />
                <span className="text-[9px]">암장</span>
              </button>
              <button className="w-10 h-10 rounded-full bg-climb-green text-white flex items-center justify-center -mt-4 shadow-soft text-xl font-light">
                +
              </button>
              <button className="flex flex-col items-center gap-0.5 text-muted">
                <div className="w-4 h-4 rounded-sm bg-ink/10" />
                <span className="text-[9px]">탐색</span>
              </button>
              <button className="flex flex-col items-center gap-0.5 text-muted">
                <div className="w-4 h-4 rounded-sm bg-ink/10" />
                <span className="text-[9px]">프로필</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
