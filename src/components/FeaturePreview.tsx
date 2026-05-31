import {
  PlayCircle,
  User,
  SlidersHorizontal,
  FlagTriangleRight,
} from 'lucide-react';

const features = [
  {
    num: '01',
    icon: <User className="h-6 w-6" />,
    title: '영상 아카이브',
    description: '내 클라이밍 기록을 언제든 꺼내볼 수 있어요.',
    iconClass: 'bg-accent/10 text-accent border-accent/20',
    numColor: 'text-accent/10',
    colSpan: 'md:col-span-1',
  },
  {
    num: '02',
    icon: <SlidersHorizontal className="h-6 w-6" />,
    title: '암장·섹터·난이도 필터',
    description:
      '암장·섹터·난이도를 선택해 원하는 영상을 빠르게 찾을 수 있어요.',
    iconClass: 'bg-accent-blue/10 text-accent-blue border-accent-blue/20',
    numColor: 'text-accent-blue/10',
    colSpan: 'md:col-span-2',
  },
  {
    num: '03',
    icon: <PlayCircle className="h-6 w-6" />,
    title: '영상 피드',
    description:
      '인기 영상부터 독창적인 풀이까지, 다양한 클라이머들과 영상으로 소통해요.',
    iconClass: 'bg-accent-lime/10 text-accent-lime border-accent-lime/20',
    numColor: 'text-accent-lime/10',
    colSpan: 'md:col-span-2',
  },
  {
    num: '04',
    icon: <FlagTriangleRight className="h-6 w-6" />,
    title: '크루와 함께',
    description: '같이 운동하는 크루원들과 일상을 공유해요.',
    iconClass:
      'bg-accent-yellow/10 text-accent-yellow border-accent-yellow/20',
    numColor: 'text-accent-yellow/10',
    colSpan: 'md:col-span-1',
  },
];

export function FeaturePreview() {
  return (
    <section
      id="features"
      className="bg-surface/30 flex min-h-[calc(100svh-4rem)] flex-col justify-center px-6 py-16"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-muted mb-3 text-xs font-bold tracking-[0.2em] uppercase">
            Features
          </p>
          <h2 className="text-3xl font-black tracking-tight md:text-5xl">
            이런 <span className="text-accent">기능</span>이
            <br />
            준비되어 있어요
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={i}
              className={`bg-card border-line hover:border-accent/25 group relative overflow-hidden rounded-2xl border p-7 transition-all hover:-translate-y-1 ${f.colSpan}`}
            >
              {/* Decorative number */}
              <span
                className={`pointer-events-none absolute -top-4 -right-2 select-none text-[100px] font-black leading-none ${f.numColor}`}
              >
                {f.num}
              </span>

              <div className="relative">
                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl border ${f.iconClass}`}
                >
                  {f.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold">{f.title}</h3>
                <p className="text-muted leading-relaxed">{f.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
