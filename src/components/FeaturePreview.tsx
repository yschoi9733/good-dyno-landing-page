const features = [
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "문제별 영상 피드",
    description: "같은 문제를 푼 사람들의 영상을 한 화면에서 비교하며 볼 수 있어요.",
    color: "bg-climb-green",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: "개인 기록 프로필",
    description: "내가 푼 문제들을 암장, 난이도별로 정리해 성장 기록을 확인해요.",
    color: "bg-climb-blue",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
      </svg>
    ),
    title: "난이도/암장 필터",
    description: "원하는 암장과 난이도만 골라서 영상을 검색할 수 있어요.",
    color: "bg-climb-red",
  },
  {
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "오늘의 Top 3",
    description: "인기 있는 풀이 영상과 주목받는 클라이머를 확인해보세요.",
    color: "bg-climb-lime text-climb-green",
  },
];

export function FeaturePreview() {
  return (
    <section className="flex min-h-svh snap-start flex-col items-center justify-center px-5 py-16">
      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-12 text-center">
          <p className="text-climb-green mb-3 text-sm font-semibold uppercase tracking-wider">
            Features
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            이런 기능이 준비되어 있어요
          </h2>
          <p className="text-muted mx-auto mt-4 max-w-xl text-lg">
            Limbing에서 만날 수 있는 핵심 기능들을 미리 만나보세요.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-surface shadow-panel group flex gap-5 rounded-2xl border border-line p-6 transition-all hover:-translate-y-1 hover:border-climb-green/30"
            >
              <div
                className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl ${feature.color} ${feature.color.includes("text-") ? "" : "text-white"}`}
              >
                {feature.icon}
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                <p className="text-muted leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Preview Badge */}
        <div className="mt-10 flex justify-center">
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
