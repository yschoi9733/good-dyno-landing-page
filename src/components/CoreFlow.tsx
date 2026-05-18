const steps = [
  {
    step: "01",
    title: "영상을 올린다",
    description: "클라이밍 영상을 Limbing에 업로드하세요.",
    preview: (
      <div className="bg-surface rounded-2xl border border-line p-4 flex items-center gap-3 w-fit shadow-panel">
        <div className="w-10 h-10 rounded-xl bg-climb-green/15 flex items-center justify-center text-climb-green">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" />
          </svg>
        </div>
        <div>
          <p className="font-semibold text-sm">영상 업로드</p>
          <p className="text-xs text-muted">갤러리에서 바로 올리기</p>
        </div>
      </div>
    ),
  },
  {
    step: "02",
    title: "암장, 난이도, 문제를 태깅한다",
    description: "어디서, 어떤 난이도의, 몇 번 문제인지 태그를 달아요.",
    preview: (
      <div className="bg-surface rounded-2xl border border-line p-4 shadow-panel">
        <div className="flex gap-2 flex-wrap max-w-[200px]">
          <span className="bg-climb-green/15 text-climb-green border border-climb-green/30 text-xs px-3 py-1.5 rounded-full font-semibold">완등</span>
          <span className="bg-bg text-muted text-xs px-3 py-1.5 rounded-full border border-line">#다이노</span>
          <span className="bg-bg text-muted text-xs px-3 py-1.5 rounded-full border border-line">#슬로퍼</span>
          <span className="bg-climb-lime/30 text-climb-green text-xs font-bold px-3 py-1.5 rounded-full border border-climb-lime/40">V5</span>
        </div>
      </div>
    ),
  },
  {
    step: "03",
    title: "같은 문제 영상을 모아본다",
    description: "같은 문제를 푼 다른 사람들의 풀이를 한눈에 확인해요.",
    preview: (
      <div className="bg-surface rounded-2xl border border-line p-3 shadow-panel inline-flex gap-2">
        <button className="bg-bg text-ink px-4 py-2 rounded-full text-sm flex items-center gap-2 border border-line">
          🔥 <span className="text-climb-green font-bold">NICE!</span>
        </button>
        <button className="bg-bg text-muted w-10 h-10 flex items-center justify-center rounded-full text-sm border border-line">
          💀
        </button>
      </div>
    ),
  },
];

export function CoreFlow() {
  return (
    <section id="how-it-works" className="min-h-[calc(100svh-4rem)] flex flex-col justify-center py-16 px-5">
      <div className="mx-auto w-full max-w-4xl">
        <div className="text-center mb-10">
          <p className="text-climb-green mb-2 text-xs font-bold uppercase tracking-wider">
            How it works
          </p>
          <h2 className="text-2xl font-bold tracking-tight md:text-4xl">
            Limbing은 이렇게 작동해요
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-line to-transparent -translate-x-1/2" />

          {steps.map((item, index) => (
            <div
              key={index}
              className={`relative flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center justify-between gap-6 ${index < steps.length - 1 ? "mb-10" : ""}`}
            >
              {/* Content Side */}
              <div className={`w-full md:w-5/12 pl-16 ${index % 2 === 0 ? "md:pl-0 md:text-right md:pr-10" : "md:pr-0 md:pl-10"}`}>
                <span className="text-climb-lime font-black text-sm mb-2 block">{item.step}</span>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted leading-relaxed">{item.description}</p>
              </div>

              {/* Center Dot */}
              <div className="absolute left-6 md:left-1/2 w-3.5 h-3.5 bg-bg border-2 border-climb-green rounded-full -translate-x-1/2 z-10 shadow-[0_0_8px_rgba(36,94,69,0.5)]" />

              {/* Preview Side */}
              <div className={`w-full md:w-5/12 pl-16 ${index % 2 === 0 ? "md:pl-10" : "md:pr-10 flex md:justify-end"}`}>
                {item.preview}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
