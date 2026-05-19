import {
  PlayCircle,
  User,
  SlidersHorizontal,
  Sparkles,
  Brain,
  Layers,
} from 'lucide-react';

export function FeaturePreview() {
  return (
    <section
      id="features"
      className="border-line bg-surface/40 flex min-h-[calc(100svh-4rem)] flex-col justify-center border-t px-5 py-6"
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-5 text-center">
          <p className="text-climb-green mb-2 text-xs font-bold tracking-wider uppercase">
            Features
          </p>
          <h2 className="text-2xl font-bold tracking-tight md:text-4xl">
            이런 기능이 준비되어 있어요
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* Large: col-span-2 */}
          <div className="bg-surface shadow-panel border-line group flex min-h-[160px] items-center gap-3 rounded-2xl border p-6 transition-transform hover:-translate-y-1 md:col-span-2">
            <div className="bg-climb-green flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white">
              <PlayCircle className="h-5 w-5" />
            </div>
            <div>
              <h3 className="mb-1 text-base font-bold">문제별 영상 피드</h3>
              <p className="text-muted text-sm leading-relaxed">
                같은 문제를 푼 사람들의 영상을 비교하며 볼 수 있어요.
              </p>
            </div>
          </div>

          {/* Small */}
          <div className="bg-surface shadow-panel border-line group flex min-h-[160px] flex-col items-center justify-center rounded-2xl border p-6 text-center transition-transform hover:-translate-y-1">
            <div className="bg-climb-blue/10 text-climb-blue border-climb-blue/20 mb-4 flex h-12 w-12 items-center justify-center rounded-full border">
              <User className="h-6 w-6" />
            </div>
            <h3 className="mb-1 text-base font-bold">개인 기록 프로필</h3>
            <p className="text-muted text-sm leading-relaxed">
              내가 푼 문제들을 암장, 난이도별로 정리해 성장 기록을 확인해요.
            </p>
          </div>

          {/* Small */}
          <div className="bg-surface shadow-panel border-line group flex min-h-[160px] flex-col justify-between rounded-2xl border p-6 transition-transform hover:-translate-y-1">
            <div className="flex items-start gap-4">
              <div className="bg-climb-red/10 text-climb-red border-climb-red/20 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border">
                <SlidersHorizontal className="h-5 w-5" />
              </div>
              <div>
                <h3 className="mb-1 text-base font-bold">난이도/암장 필터</h3>
                <p className="text-muted text-sm leading-relaxed">
                  원하는 암장과 난이도만 골라서 영상을 검색할 수 있어요.
                </p>
              </div>
            </div>
            <div className="mt-4 flex items-end justify-center gap-2">
              <div className="bg-bg border-line text-muted flex h-9 w-9 items-center justify-center rounded-full border-2 text-[10px] font-bold">
                V3
              </div>
              <div className="bg-climb-lime/30 border-climb-lime text-climb-green shadow-panel mb-2 flex h-12 w-12 items-center justify-center rounded-full border-2 text-sm font-black">
                V6
              </div>
              <div className="bg-bg border-line text-muted flex h-10 w-10 items-center justify-center rounded-full border-2 text-xs font-bold">
                V4
              </div>
            </div>
          </div>

          {/* Large: col-span-2 */}
          <div className="bg-surface shadow-panel border-line group flex min-h-[160px] flex-col items-center justify-between gap-6 rounded-2xl border p-6 transition-transform hover:-translate-y-1 md:col-span-2 md:flex-row">
            <div className="flex items-start gap-4">
              <div className="bg-climb-lime text-climb-green flex h-11 w-11 shrink-0 items-center justify-center rounded-xl">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <h3 className="mb-1 text-base font-bold">오늘의 Top 3</h3>
                <p className="text-muted text-sm leading-relaxed">
                  인기 있는 풀이 영상을 확인해보세요.
                </p>
              </div>
            </div>
            <div className="bg-bg border-line flex shrink-0 -space-x-3 rounded-2xl border p-3">
              {[
                'photo-1544005313-94ddf0286df2',
                'photo-1507003211169-0a1dd7228f2d',
                'photo-1494790108377-be9c29b29330',
              ].map(id => (
                <img
                  key={id}
                  src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=100&q=80`}
                  alt="Climber"
                  className="border-bg h-11 w-11 rounded-full border-4 object-cover"
                />
              ))}
              <div className="border-bg bg-climb-green flex h-11 w-11 items-center justify-center rounded-full border-4 text-[10px] font-bold text-white">
                +12
              </div>
            </div>
          </div>
        </div>

        {/* AI Features */}
        <div className="mt-5">
          <div className="mb-3 flex items-center gap-3">
            <div className="bg-line h-px flex-1" />
            <div className="border-climb-lime/40 bg-climb-lime/10 text-climb-green flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-bold">
              <Sparkles className="h-3 w-3" />
              AI 기능 도입 예정
            </div>
            <div className="bg-line h-px flex-1" />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="bg-surface shadow-panel border-climb-lime/30 group flex min-h-[140px] flex-col justify-between rounded-2xl border p-6 transition-transform hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="bg-climb-lime/20 text-climb-green border-climb-lime/40 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border">
                  <Brain className="h-5 w-5" />
                </div>
                <div>
                  <div className="mb-1 flex items-center gap-2">
                    <h3 className="text-base font-bold">AI 자세 분석</h3>
                    <span className="bg-climb-lime/20 text-climb-green border-climb-lime/40 rounded-full border px-2 py-0.5 text-[10px] font-bold">
                      Coming Soon
                    </span>
                  </div>
                  <p className="text-muted text-sm leading-relaxed">
                    업로드한 영상을 AI가 분석해 무게 중심, 발 위치, 팔 각도 등
                    자세 피드백을 제공해요.
                  </p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="bg-bg border-line text-muted rounded-full border px-3 py-1 text-xs">
                  무게 중심 분석
                </span>
                <span className="bg-bg border-line text-muted rounded-full border px-3 py-1 text-xs">
                  발 위치 감지
                </span>
                <span className="bg-bg border-line text-muted rounded-full border px-3 py-1 text-xs">
                  자세 점수
                </span>
              </div>
            </div>

            <div className="bg-surface shadow-panel border-climb-lime/30 group flex min-h-[140px] flex-col justify-between rounded-2xl border p-6 transition-transform hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="bg-climb-lime/20 text-climb-green border-climb-lime/40 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border">
                  <Layers className="h-5 w-5" />
                </div>
                <div>
                  <div className="mb-1 flex items-center gap-2">
                    <h3 className="text-base font-bold">유사 문제 추천</h3>
                    <span className="bg-climb-lime/20 text-climb-green border-climb-lime/40 rounded-full border px-2 py-0.5 text-[10px] font-bold">
                      Coming Soon
                    </span>
                  </div>
                  <p className="text-muted text-sm leading-relaxed">
                    내가 도전 중인 문제와 홀드 구성, 동작 패턴이 비슷한 문제를
                    AI가 자동으로 추천해줘요.
                  </p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="bg-bg border-line text-muted rounded-full border px-3 py-1 text-xs">
                  홀드 패턴 분석
                </span>
                <span className="bg-bg border-line text-muted rounded-full border px-3 py-1 text-xs">
                  난이도 매칭
                </span>
                <span className="bg-bg border-line text-muted rounded-full border px-3 py-1 text-xs">
                  맞춤 추천
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
