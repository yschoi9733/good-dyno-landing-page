import { Upload, Tag, Play } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: <Upload className="h-5 w-5" />,
    title: '영상을 올린다',
    description:
      '클라이밍 영상을 업로드하세요. Limbing에서 빠르고 쉽게 편집할 수 있어요.',
    iconClass: 'bg-accent/10 text-accent border-accent/20',
    numClass: 'text-accent',
  },
  {
    step: '02',
    icon: <Tag className="h-5 w-5" />,
    title: '암장·섹터·난이도를 태깅한다',
    description: '어느 암장의 어느 섹터, 어떤 난이도인지 태그를 달아요.',
    iconClass: 'bg-accent-yellow/10 text-accent-yellow border-accent-yellow/20',
    numClass: 'text-accent-yellow',
  },
  {
    step: '03',
    icon: <Play className="h-5 w-5" />,
    title: '내 영상을 한곳에서 모아본다',
    description: '내 풀이 영상을 보관하고, 다른 사람들과 공유할 수 있어요.',
    iconClass: 'bg-accent-lime/10 text-accent-lime border-accent-lime/20',
    numClass: 'text-accent-lime',
  },
];

export function CoreFlow() {
  return (
    <section
      id="how-it-works"
      className="flex min-h-[calc(100svh-4rem)] flex-col justify-center px-6 py-16"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-10 text-center">
          <p className="text-muted mb-3 text-xs font-bold tracking-[0.2em] uppercase">
            How it works
          </p>
          <h2 className="text-3xl font-black tracking-tight md:text-5xl">
            단 3단계로 <span className="text-accent">시작</span>하세요
          </h2>
        </div>

        {/* Steps list */}
        <div className="mx-auto max-w-3xl">
          {steps.map((item, index) => (
            <div
              key={index}
              className={`group flex items-start gap-6 py-5 ${
                index < steps.length - 1 ? 'border-line border-b' : ''
              }`}
            >
              {/* Big step number */}
              <span
                className={`w-14 shrink-0 text-5xl font-black leading-none md:w-20 md:text-6xl ${item.numClass}`}
              >
                {item.step}
              </span>

              {/* Content */}
              <div className="flex-1 pt-1">
                <div
                  className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl border ${item.iconClass}`}
                >
                  {item.icon}
                </div>
                <h3 className="mb-2 text-xl font-black md:text-2xl">
                  {item.title}
                </h3>
                <p className="text-muted leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tag preview */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {[
            {
              label: '더클라임 강남',
              style:
                'bg-accent-yellow/15 text-accent-yellow border-accent-yellow/30 border font-bold',
            },
            {
              label: '4섹터',
              style:
                'bg-accent-blue/15 text-accent-blue border-accent-blue/30 border font-bold',
            },
            {
              label: '초록',
              style:
                'bg-accent-lime/15 text-accent-lime border-accent-lime/30 border font-bold',
            },
            {
              label: '완등',
              style: 'bg-accent/15 text-accent border-accent/30 border font-bold',
            },
            {
              label: '#오버행',
              style: 'bg-card text-muted border-line border',
            },
            {
              label: '#크림프',
              style: 'bg-card text-muted border-line border',
            },
          ].map((tag, i) => (
            <span
              key={i}
              className={`rounded-full px-4 py-2 text-sm font-medium ${tag.style}`}
            >
              {tag.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
