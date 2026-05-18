const surveyItems = [
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "주로 가는 암장",
    description: "어떤 암장을 자주 방문하시나요?",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: "영상 촬영 빈도",
    description: "클라이밍 영상을 얼마나 자주 찍으시나요?",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
    ),
    title: "현재 공유 플랫폼",
    description: "지금은 어디에 영상을 올리시나요?",
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "기대하는 AI 기능",
    description: "어떤 AI 기능이 가장 도움이 될까요?",
  },
];

export function SocialProof() {
  return (
    <section className="flex min-h-svh snap-start flex-col items-center justify-center px-5 py-16">
      <div className="mx-auto w-full max-w-5xl">
        <div className="bg-surface shadow-soft overflow-hidden rounded-3xl border border-line">
          <div className="bg-climb-green px-6 py-8 text-center text-white md:px-12 md:py-12">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">
              지금 클라이머들의 영상 기록 습관을
              <br />
              확인하고 있어요
            </h2>
            <p className="text-climb-lime/90 mx-auto max-w-xl text-lg">
              자주 가는 암장과 영상 업로드 방식을 알려주시면
              <br className="hidden sm:block" />
              초기 서비스 설계에 반영할게요.
            </p>
          </div>

          <div className="grid gap-4 p-6 md:grid-cols-2 md:p-8">
            {surveyItems.map((item, index) => (
              <div
                key={index}
                className="group flex cursor-pointer items-center gap-4 rounded-xl border border-line bg-bg p-4 transition-all hover:border-climb-green/30 hover:bg-climb-green/5"
              >
                <div className="bg-climb-green/10 text-climb-green flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors group-hover:bg-climb-green group-hover:text-white">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-muted text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-line p-6 text-center md:p-8">
            <button className="bg-climb-green hover:bg-climb-green/90 rounded-full px-8 py-3 font-semibold text-white transition-colors">
              설문 참여하기
            </button>
            <p className="text-muted mt-3 text-sm">약 2분 정도 소요됩니다</p>
          </div>
        </div>
      </div>
    </section>
  );
}
