import { Sparkles } from 'lucide-react';

const features = [
  {
    emoji: '✂️',
    title: 'AI 컷편집',
    description:
      '긴 영상에서 핵심 순간만 빠르게 편집하여 바로 공유 가능한 클립이 완성돼요.',
    status: 'Beta' as const,
    tags: ['핵심 구간 추출', '배속', '자동 클립'],
  },
  {
    emoji: '🪄',
    title: '클라이머 캐릭터화',
    description: '내 동작을 AI가 분석해 나만의 클라이머 캐릭터로 만들어드려요.',
    status: 'Beta' as const,
    tags: ['클라이머 인식', '캐릭터 생성', '나만의 캐릭터'],
  },
  {
    emoji: '💡',
    title: '문제 풀이 추천',
    description: '창의적인 풀이 영상을 추천해요.',
    status: 'Coming' as const,
    tags: ['베타 탐색', '창의적 베타', '맞춤 추천'],
  },

  {
    emoji: '🧗',
    title: '자세 분석 피드백',
    description:
      'AI가 동작을 분석해 자세와 무게중심에 대한 피드백을 제공합니다.',
    status: 'Coming' as const,
    tags: ['무브 분석', '무게중심 분석'],
  },
];

const statusConfig = {
  Beta: {
    badge: 'bg-accent/15 text-accent border-accent/30 border',
    stripe: 'bg-accent',
    cardBorder: 'border-accent/20',
  },
  Coming: {
    badge: 'bg-accent-lime/10 text-accent-lime border-accent-lime/30 border',
    stripe: 'bg-accent-lime',
    cardBorder: 'border-accent-lime/15',
  },
};

export function AIFeatures() {
  return (
    <section className="flex min-h-[calc(100svh-4rem)] flex-col justify-center px-6 py-16">
      <div className="mx-auto w-full max-w-6xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="border-accent-lime/40 bg-accent-lime/10 text-accent-lime mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold">
            <Sparkles className="h-3.5 w-3.5" />
            AI 기능
          </div>
          <h2 className="text-3xl font-black tracking-tight md:text-5xl">
            <span className="text-muted/60">영상 하나로</span>
            <br />
            <span className="text-accent">AI</span>와 함께{' '}
            <span className="text-accent">성장</span>해요
          </h2>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {features.map((f, i) => {
            const cfg = statusConfig[f.status];
            return (
              <div
                key={i}
                className={`bg-card ${cfg.cardBorder} group flex overflow-hidden rounded-2xl border transition-transform hover:-translate-y-1`}
              >
                {/* Left accent stripe */}
                <div className={`w-1 shrink-0 ${cfg.stripe} opacity-60`} />

                <div className="flex flex-1 flex-col p-6">
                  {/* Top row: emoji + status */}
                  <div className="mb-4 flex items-start justify-between">
                    <div className="bg-surface flex h-12 w-12 items-center justify-center rounded-xl text-2xl">
                      {f.emoji}
                    </div>
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-bold ${cfg.badge}`}
                    >
                      {f.status}
                    </span>
                  </div>

                  {/* Title & description */}
                  <h3 className="mb-2 text-lg font-bold">{f.title}</h3>
                  <p className="text-muted mb-4 flex-1 text-sm leading-relaxed">
                    {f.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {f.tags.map(tag => (
                      <span
                        key={tag}
                        className="bg-surface border-line text-muted rounded-full border px-2.5 py-1 text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <p className="text-muted mt-8 text-center text-sm">
          Beta 기능은 출시 후 바로 사용 가능 · Coming 기능은 순차 도입 예정
        </p>
      </div>
    </section>
  );
}
