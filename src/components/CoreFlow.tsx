const steps = [
  {
    step: '01',
    title: '영상을 올린다',
    description: '클라이밍 영상을 Limbing에 업로드하세요.',
    preview: (
      <div className="bg-surface border-line shadow-panel flex w-fit items-center gap-3 rounded-2xl border p-4">
        <div className="bg-climb-green/15 text-climb-green flex h-10 w-10 items-center justify-center rounded-xl">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" />
          </svg>
        </div>
        <div>
          <p className="text-sm font-semibold">영상 업로드</p>
          <p className="text-muted text-xs">갤러리에서 바로 올리기</p>
        </div>
      </div>
    ),
  },
  {
    step: '02',
    title: '암장, 난이도, 문제를 태깅한다',
    description: '어디서, 어떤 난이도의, 몇 번 문제인지 태그를 달아요.',
    preview: (
      <div className="bg-surface border-line shadow-panel rounded-2xl border p-4">
        <div className="flex max-w-[200px] flex-wrap gap-2">
          <span className="bg-climb-green/15 text-climb-green border-climb-green/30 rounded-full border px-3 py-1.5 text-xs font-semibold">
            완등
          </span>
          <span className="bg-bg text-muted border-line rounded-full border px-3 py-1.5 text-xs">
            #다이노
          </span>
          <span className="bg-bg text-muted border-line rounded-full border px-3 py-1.5 text-xs">
            #슬로퍼
          </span>
          <span className="bg-climb-lime/30 text-climb-green border-climb-lime/40 rounded-full border px-3 py-1.5 text-xs font-bold">
            V5
          </span>
        </div>
      </div>
    ),
  },
  {
    step: '03',
    title: '같은 문제 영상을 모아본다',
    description: '같은 문제를 푼 다른 사람들의 풀이를 한눈에 확인해요.',
    preview: (
      <div className="bg-surface border-line shadow-panel inline-flex gap-2 rounded-2xl border p-3">
        <button className="bg-bg text-ink border-line flex items-center gap-2 rounded-full border px-4 py-2 text-sm">
          🔥 <span className="text-climb-green font-bold">NICE!</span>
        </button>
        <button className="bg-bg text-muted border-line flex h-10 w-10 items-center justify-center rounded-full border text-sm">
          💀
        </button>
      </div>
    ),
  },
];

export function CoreFlow() {
  return (
    <section
      id="how-it-works"
      className="flex min-h-[calc(100svh-4rem)] flex-col justify-center px-5 py-16"
    >
      <div className="mx-auto w-full max-w-4xl">
        <div className="mb-10 text-center">
          <p className="text-climb-green mb-2 text-xs font-bold tracking-wider uppercase">
            How it works
          </p>
          <h2 className="text-2xl font-bold tracking-tight md:text-4xl">
            Limbing은 이렇게 작동해요
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="via-line absolute top-0 bottom-0 left-6 w-px -translate-x-1/2 bg-gradient-to-b from-transparent to-transparent md:left-1/2" />

          {steps.map((item, index) => (
            <div
              key={index}
              className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-between gap-6 ${index < steps.length - 1 ? 'mb-10' : ''}`}
            >
              {/* Content Side */}
              <div
                className={`w-full pl-16 md:w-5/12 ${index % 2 === 0 ? 'md:pr-10 md:pl-0 md:text-right' : 'md:pr-0 md:pl-10'}`}
              >
                <span className="text-climb-lime mb-2 block text-sm font-black">
                  {item.step}
                </span>
                <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                <p className="text-muted leading-relaxed">{item.description}</p>
              </div>

              {/* Center Dot */}
              <div className="bg-bg border-climb-green absolute left-6 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 shadow-[0_0_8px_rgba(36,94,69,0.5)] md:left-1/2" />

              {/* Preview Side */}
              <div
                className={`w-full pl-16 md:w-5/12 ${index % 2 === 0 ? 'md:pl-10' : 'flex md:justify-end md:pr-10'}`}
              >
                {item.preview}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
