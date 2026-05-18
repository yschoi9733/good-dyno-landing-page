const steps = [
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
      </svg>
    ),
    step: "01",
    title: "영상을 올린다",
    description: "클라이밍 영상을 Limbing에 업로드하세요.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
    step: "02",
    title: "암장, 난이도, 문제를 태깅한다",
    description: "어디서, 어떤 난이도의, 몇 번 문제인지 태그를 달아요.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
      </svg>
    ),
    step: "03",
    title: "같은 문제 영상을 모아본다",
    description: "같은 문제를 푼 다른 사람들의 풀이를 한눈에 확인해요.",
  },
];

export function CoreFlow() {
  return (
    <section className="flex min-h-svh snap-start flex-col items-center justify-center px-5 py-16">
      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-12 text-center">
          <p className="text-climb-green mb-3 text-sm font-semibold uppercase tracking-wider">
            How it works
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Limbing은 이렇게 작동해요
          </h2>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="bg-line absolute top-24 right-0 left-0 hidden h-0.5 md:block" />

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((item, index) => (
              <div key={index} className="relative flex flex-col items-center text-center">
                {/* Step Circle */}
                <div className="shadow-soft bg-surface relative z-10 mb-6 flex h-20 w-20 flex-col items-center justify-center rounded-full border-2 border-climb-green">
                  <div className="text-climb-green">{item.icon}</div>
                </div>

                {/* Step Number */}
                <span className="text-climb-lime mb-2 text-sm font-bold">
                  {item.step}
                </span>

                {/* Content */}
                <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                <p className="text-muted max-w-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Demo */}
        <div className="shadow-soft bg-surface mt-16 overflow-hidden rounded-2xl border border-line">
          <div className="flex items-center gap-2 border-b border-line bg-bg px-4 py-3">
            <div className="h-3 w-3 rounded-full bg-climb-red" />
            <div className="h-3 w-3 rounded-full bg-climb-lime" />
            <div className="h-3 w-3 rounded-full bg-climb-green" />
            <span className="text-muted ml-4 text-sm">더클라임 강남 - 초록 5번 문제</span>
          </div>
          <div className="grid gap-4 p-6 md:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group cursor-pointer">
                <div className="bg-bg mb-3 aspect-[9/16] overflow-hidden rounded-xl border border-line transition-transform group-hover:scale-105">
                  <div className="flex h-full flex-col items-center justify-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-climb-green/20" />
                    <span className="text-muted text-xs">@climber_{i}</span>
                  </div>
                </div>
                <p className="text-sm font-medium">클라이머_{i}</p>
                <p className="text-muted text-xs">2일 전</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
