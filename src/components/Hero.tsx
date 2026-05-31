import {
  ArrowRight,
  Bell,
  ChevronDown,
  FlagTriangleRight,
  Heart,
  Home,
  MapPin,
  MessageCircle,
  Plus,
  Search,
  User,
} from 'lucide-react';

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-4rem)] flex-col justify-center overflow-hidden px-6 pt-16 pb-16">
      {/* Background glow */}
      <div className="bg-accent/5 pointer-events-none absolute top-1/3 left-1/2 h-150 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />

      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 lg:flex-row lg:gap-16">
        {/* Text */}
        <div className="flex-1 pt-4 text-center lg:text-left">
          <div className="border-accent/30 bg-accent/10 text-accent mb-6 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-bold">
            <span className="relative flex h-2 w-2">
              <span className="bg-accent absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
              <span className="bg-accent relative inline-flex h-2 w-2 rounded-full" />
            </span>
            베타 테스터 모집중
          </div>

          <h1 className="mb-6 max-w-xl text-5xl leading-[1.05] font-black tracking-tight text-balance md:text-6xl lg:text-7xl">
            <span className="text-accent">클라이밍 영상</span>을
            <br />
            한곳에
          </h1>

          <p className="text-muted mx-auto mb-10 max-w-md text-lg leading-relaxed text-pretty lg:mx-0">
            암장·섹터·난이도 기준으로 영상을 태깅하고, 같은 문제 풀이를 한눈에
            확인하세요.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="#early-access"
              className="bg-accent hover:bg-accent/85 flex h-14 w-full items-center justify-center gap-2 rounded-full px-8 text-base font-bold text-white transition-colors sm:w-auto"
            >
              사전 신청하기
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#problems"
              className="text-muted hover:text-ink flex items-center gap-2 text-base font-medium transition-colors"
            >
              서비스 컨셉 보기
              <ChevronDown className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Phone Mockup */}
        <div className="flex flex-1 justify-center lg:justify-end">
          <div className="border-line bg-card relative h-150 w-72.5 overflow-hidden rounded-[44px] border-[6px] shadow-[0_32px_80px_rgba(0,0,0,0.6)]">
            {/* Notch */}
            <div className="absolute top-0 z-50 flex h-6 w-full justify-center">
              <div className="bg-line h-4 w-1/3 rounded-b-2xl" />
            </div>

            {/* App Header */}
            <div className="bg-card/95 border-line absolute top-0 right-0 left-0 z-40 flex items-center justify-between border-b px-4 pt-7 pb-1.5 backdrop-blur-md">
              <span className="text-accent text-base font-black tracking-wider">
                LIMBING
              </span>
              <div className="flex items-center gap-3">
                <Search className="text-muted h-4 w-4" strokeWidth={2} />
                <div className="relative">
                  <Bell className="text-muted h-4 w-4" strokeWidth={2} />
                  <span className="bg-accent border-card absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full border" />
                </div>
              </div>
            </div>

            {/* Feed */}
            <div className="h-full overflow-hidden pt-15 pb-12">
              {/* Post 1 */}
              <div>
                <div className="flex items-center justify-between px-3 py-2.5">
                  <div className="flex items-center gap-2">
                    <div className="bg-surface border-line flex h-8 w-8 shrink-0 items-center justify-center rounded-full border">
                      <User className="text-muted h-4 w-4" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold">김샌드</p>
                      <p className="text-muted text-[10px]">더클라임 강남</p>
                    </div>
                  </div>
                  <span className="border-accent text-accent rounded-full border px-2.5 py-0.5 text-[10px] font-bold">
                    팔로우
                  </span>
                </div>
                <div className="relative aspect-4/5">
                  <img
                    src="https://images.unsplash.com/photo-1564769662533-4f00a87b4056?auto=format&fit=crop&w=600&q=80"
                    alt="Climbing"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/50 backdrop-blur-sm">
                      <div className="ml-1 h-0 w-0 border-t-[6px] border-b-[6px] border-l-10 border-t-transparent border-b-transparent border-l-white" />
                    </div>
                  </div>
                </div>
                <div className="px-3 py-2.5">
                  <div className="mb-2 flex flex-wrap gap-1">
                    <span className="bg-accent-blue/15 text-accent-blue rounded-full px-2 py-0.5 text-[9px] font-bold">
                      D섹터
                    </span>
                    <span className="bg-accent-lime/15 text-accent-lime rounded-full px-2 py-0.5 text-[9px] font-bold">
                      V8
                    </span>
                    <span className="bg-surface text-muted rounded-full px-2 py-0.5 text-[9px]">
                      #오버행
                    </span>
                    <span className="bg-surface text-muted rounded-full px-2 py-0.5 text-[9px]">
                      #파워
                    </span>
                  </div>
                  <p className="mb-2 text-xs">
                    드디어 완등! 🔥 3주 도전 끝에 성공
                  </p>
                  <div className="flex gap-3">
                    <span className="text-muted flex items-center gap-1 text-[10px]">
                      <Heart
                        className="h-3.5 w-3.5 fill-[#e8473c]"
                        strokeWidth={0}
                      />
                      156
                    </span>
                    <span className="text-muted flex items-center gap-1 text-[10px]">
                      <MessageCircle className="h-3.5 w-3.5" strokeWidth={2} />
                      23
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Tab Bar */}
            <div className="bg-card/95 border-line absolute right-0 bottom-0 left-0 z-40 flex h-12 items-center justify-around border-t px-2 backdrop-blur-xl">
              <button className="text-accent flex items-center justify-center rounded-xl px-2 py-2">
                <Home className="h-5 w-5 scale-110" strokeWidth={2.5} />
              </button>
              <button className="text-muted flex items-center justify-center rounded-xl px-2 py-2">
                <MapPin className="h-5 w-5" strokeWidth={2} />
              </button>
              <button
                aria-label="새 영상 업로드"
                className="-mt-4 flex items-center justify-center rounded-xl px-2 py-2"
              >
                <span className="bg-accent flex h-9 w-9 items-center justify-center rounded-full text-white shadow-[0_0_18px_rgba(87,203,96,0.45)]">
                  <Plus className="h-5 w-5" strokeWidth={2.3} />
                </span>
              </button>
              <button className="text-muted flex items-center justify-center rounded-xl px-2 py-2">
                <FlagTriangleRight className="h-5 w-5" strokeWidth={2} />
              </button>
              <button className="text-muted flex items-center justify-center rounded-xl px-2 py-2">
                <User className="h-5 w-5" strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
