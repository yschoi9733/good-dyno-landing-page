import { PlayCircle, User, SlidersHorizontal, Sparkles, Brain, Layers } from "lucide-react";

export function FeaturePreview() {
  return (
    <section id="features" className="snap-start min-h-[calc(100svh-4rem)] flex flex-col justify-center border-t border-line bg-surface/40 py-10 px-5">
      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-8 text-center">
          <p className="text-climb-green mb-2 text-xs font-bold uppercase tracking-wider">Features</p>
          <h2 className="text-2xl font-bold tracking-tight md:text-4xl">이런 기능이 준비되어 있어요</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Large: col-span-2 */}
          <div className="md:col-span-2 bg-surface shadow-panel rounded-2xl border border-line p-6 flex flex-col justify-between min-h-[200px] group hover:-translate-y-1 transition-transform">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-climb-green text-white">
                <PlayCircle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-bold mb-1">문제별 영상 피드</h3>
                <p className="text-muted text-sm leading-relaxed">같은 문제를 푼 사람들의 영상을 한 화면에서 비교하며 볼 수 있어요.</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="bg-bg rounded-xl p-3 border border-line w-fit transform group-hover:-translate-y-1 transition-transform">
                <p className="text-xs text-muted mb-1.5">더클라임 강남 · 초록 5번</p>
                <div className="flex gap-1.5 mb-2">
                  <span className="bg-climb-lime/30 text-climb-green border border-climb-lime/40 text-xs px-2 py-0.5 rounded-full font-bold">V4</span>
                  <span className="text-muted text-xs bg-surface px-2 py-0.5 rounded-full border border-line">영상 42개</span>
                </div>
                <div className="bg-climb-green text-white text-xs font-bold text-center py-1 rounded-lg">모아보기</div>
              </div>
            </div>
          </div>

          {/* Small */}
          <div className="bg-surface shadow-panel rounded-2xl border border-line p-6 flex flex-col items-center justify-center text-center min-h-[200px] group hover:-translate-y-1 transition-transform">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-climb-blue/10 text-climb-blue border border-climb-blue/20 mb-4">
              <User className="h-6 w-6" />
            </div>
            <h3 className="text-base font-bold mb-1">개인 기록 프로필</h3>
            <p className="text-muted text-sm leading-relaxed">내가 푼 문제들을 암장, 난이도별로 정리해 성장 기록을 확인해요.</p>
          </div>

          {/* Small */}
          <div className="bg-surface shadow-panel rounded-2xl border border-line p-6 flex flex-col justify-between min-h-[200px] group hover:-translate-y-1 transition-transform">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-climb-red/10 text-climb-red border border-climb-red/20">
                <SlidersHorizontal className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-bold mb-1">난이도/암장 필터</h3>
                <p className="text-muted text-sm leading-relaxed">원하는 암장과 난이도만 골라서 영상을 검색할 수 있어요.</p>
              </div>
            </div>
            <div className="flex items-end justify-center gap-2 mt-4">
              <div className="w-9 h-9 rounded-full bg-bg border-2 border-line flex items-center justify-center text-muted font-bold text-[10px]">V3</div>
              <div className="w-12 h-12 rounded-full bg-climb-lime/30 border-2 border-climb-lime flex items-center justify-center text-climb-green font-black mb-2 shadow-panel text-sm">V6</div>
              <div className="w-10 h-10 rounded-full bg-bg border-2 border-line flex items-center justify-center text-muted font-bold text-xs">V4</div>
            </div>
          </div>

          {/* Large: col-span-2 */}
          <div className="md:col-span-2 bg-surface shadow-panel rounded-2xl border border-line p-6 flex flex-col md:flex-row items-center justify-between gap-6 min-h-[200px] group hover:-translate-y-1 transition-transform">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-climb-lime text-climb-green">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-bold mb-1">오늘의 Top 3</h3>
                <p className="text-muted text-sm leading-relaxed">인기 있는 풀이 영상과 주목받는 클라이머를 확인해보세요.</p>
              </div>
            </div>
            <div className="shrink-0 flex -space-x-3 p-3 bg-bg rounded-2xl border border-line">
              {[
                "photo-1544005313-94ddf0286df2",
                "photo-1507003211169-0a1dd7228f2d",
                "photo-1494790108377-be9c29b29330",
              ].map((id) => (
                <img
                  key={id}
                  src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=100&q=80`}
                  alt="Climber"
                  className="w-11 h-11 rounded-full border-4 border-bg object-cover"
                />
              ))}
              <div className="w-11 h-11 rounded-full border-4 border-bg bg-climb-green text-white flex items-center justify-center font-bold text-[10px]">
                +12
              </div>
            </div>
          </div>

        </div>

        {/* AI Features */}
        <div className="mt-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 bg-line" />
            <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-climb-lime/40 bg-climb-lime/10 text-climb-green text-xs font-bold">
              <Sparkles className="h-3 w-3" />
              AI 기능 도입 예정
            </div>
            <div className="h-px flex-1 bg-line" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-surface shadow-panel rounded-2xl border border-climb-lime/30 p-6 flex flex-col justify-between min-h-[180px] group hover:-translate-y-1 transition-transform">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-climb-lime/20 text-climb-green border border-climb-lime/40">
                  <Brain className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-base font-bold">AI 자세 분석</h3>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-climb-lime/20 text-climb-green border border-climb-lime/40">Coming Soon</span>
                  </div>
                  <p className="text-muted text-sm leading-relaxed">업로드한 영상을 AI가 분석해 무게 중심, 발 위치, 팔 각도 등 자세 피드백을 제공해요.</p>
                </div>
              </div>
              <div className="mt-4 flex gap-2 flex-wrap">
                <span className="bg-bg text-xs px-3 py-1 rounded-full border border-line text-muted">무게 중심 분석</span>
                <span className="bg-bg text-xs px-3 py-1 rounded-full border border-line text-muted">발 위치 감지</span>
                <span className="bg-bg text-xs px-3 py-1 rounded-full border border-line text-muted">자세 점수</span>
              </div>
            </div>

            <div className="bg-surface shadow-panel rounded-2xl border border-climb-lime/30 p-6 flex flex-col justify-between min-h-[180px] group hover:-translate-y-1 transition-transform">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-climb-lime/20 text-climb-green border border-climb-lime/40">
                  <Layers className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-base font-bold">유사 문제 추천</h3>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-climb-lime/20 text-climb-green border border-climb-lime/40">Coming Soon</span>
                  </div>
                  <p className="text-muted text-sm leading-relaxed">내가 도전 중인 문제와 홀드 구성, 동작 패턴이 비슷한 문제를 AI가 자동으로 추천해줘요.</p>
                </div>
              </div>
              <div className="mt-4 flex gap-2 flex-wrap">
                <span className="bg-bg text-xs px-3 py-1 rounded-full border border-line text-muted">홀드 패턴 분석</span>
                <span className="bg-bg text-xs px-3 py-1 rounded-full border border-line text-muted">난이도 매칭</span>
                <span className="bg-bg text-xs px-3 py-1 rounded-full border border-line text-muted">맞춤 추천</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-sm">
            <span className="relative flex h-2 w-2">
              <span className="bg-climb-lime absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
              <span className="bg-climb-lime relative inline-flex h-2 w-2 rounded-full" />
            </span>
            <span className="text-muted">개발 중인 기능입니다</span>
          </div>
        </div>
      </div>
    </section>
  );
}
