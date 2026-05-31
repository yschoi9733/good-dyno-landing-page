import { FolderOpen, Search, BarChart3 } from 'lucide-react';

const painPoints = [
  {
    number: '01',
    icon: <FolderOpen className="h-6 w-6" />,
    title: '영상은 찍지만\n다시 찾기 어렵다',
    description:
      '갤러리, 인스타 부계정, 스토리, 단톡방... 영상이 여기저기 흩어져 있어요.',
  },
  {
    number: '02',
    icon: <Search className="h-6 w-6" />,
    title: '같은 문제 풀이를\n검색할 수 없다',
    description:
      '어려운 루트를 공략할 때 참고할 영상을 찾으려면 인스타그램을 오래 뒤져야 해요.',
  },
  {
    number: '03',
    icon: <BarChart3 className="h-6 w-6" />,
    title: '내 성장을\n한눈에 볼 수 없다',
    description:
      '내 풀이 기록은 쌓이지만 암장, 섹터, 난이도 기준으로 다시 보기 어려워요.',
  },
];

export function PainPoints() {
  return (
    <section
      id="problems"
      className="bg-surface/30 flex min-h-[calc(100svh-4rem)] flex-col justify-center px-6 py-16"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-12">
          <p className="text-muted mb-3 text-xs font-bold tracking-[0.2em] uppercase">
            The Problem
          </p>
          <h2 className="max-w-xl text-3xl font-black tracking-tight md:text-5xl">
            아직도 인스타그램에
            <br />
            <span className="text-accent">클라이밍 영상</span>을 올리시나요?
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {painPoints.map((point, i) => (
            <div
              key={i}
              className="bg-card border-line group relative overflow-hidden rounded-2xl border transition-all hover:-translate-y-1"
            >
              {/* Top muted bar */}
              <div className="bg-line h-1 w-full opacity-60" />

              <div className="p-7">
                <div className="relative">
                  <div className="border-line bg-surface text-muted mb-5 flex h-12 w-12 items-center justify-center rounded-xl border">
                    {point.icon}
                  </div>

                  <h3 className="mb-3 whitespace-pre-line text-xl font-black leading-snug">
                    {point.title}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
