import { FolderOpen, Search, BarChart3 } from "lucide-react";

const painPoints = [
  {
    icon: <FolderOpen className="h-6 w-6" />,
    color: "bg-climb-red/10 text-climb-red border-climb-red/20",
    title: "영상은 찍지만 다시 찾기 어렵다",
    description: "갤러리, 인스타 부계정, 스토리, 단톡방... 영상이 여기저기 흩어져 있어요.",
  },
  {
    icon: <Search className="h-6 w-6" />,
    color: "bg-climb-blue/10 text-climb-blue border-climb-blue/20",
    title: "같은 문제 풀이를 검색할 수 없다",
    description: "고난이도 문제를 풀 때 참고할 영상을 찾으려면 인스타그램을 오래 뒤져야 해요.",
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    color: "bg-climb-green/10 text-climb-green border-climb-green/20",
    title: "내 성장을 한눈에 볼 수 없다",
    description: "내 풀이 기록은 쌓이지만 암장, 난이도, 문제 기준으로 다시 보기 어려워요.",
  },
];

export function PainPoints() {
  return (
    <section id="problems" className="snap-start min-h-[calc(100svh-4rem)] flex flex-col justify-center border-t border-line bg-surface/40 py-16 px-5">
      <div className="mx-auto w-full max-w-5xl">
        <div className="flex flex-col md:flex-row gap-16 items-start">

          {/* Sticky Left Column */}
          <div className="w-full md:w-1/3 md:sticky md:top-24">
            <p className="text-climb-green mb-3 text-sm font-bold uppercase tracking-wider">
              The Problem
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl leading-tight mb-4">
              아직도 인스타그램에<br />등반 영상을 올리시나요?
            </h2>
            <p className="text-muted leading-relaxed">
              기존 SNS는 등반에 특화되어 있지 않습니다. 수많은 루트 비디오가 흩어지고, 내 실력을 체계적으로 확인하기 어렵죠.
            </p>
          </div>

          {/* Right Cards */}
          <div className="w-full md:w-2/3 flex flex-col gap-5">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="bg-surface shadow-panel rounded-2xl border border-line p-6 flex gap-5 items-start transition-transform hover:-translate-y-0.5"
              >
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${point.color}`}>
                  {point.icon}
                </div>
                <div>
                  <h3 className="mb-1.5 text-lg font-semibold">{point.title}</h3>
                  <p className="text-muted leading-relaxed">{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
