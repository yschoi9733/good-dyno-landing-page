import { FolderSearch, Search, BarChart3 } from "lucide-react";

const painPoints = [
  {
    icon: FolderSearch,
    title: "영상은 찍지만 다시 찾기 어렵다",
    description:
      "갤러리, 인스타 부계정, 스토리, 단톡방... 영상이 여기저기 흩어져 있어요.",
  },
  {
    icon: Search,
    title: "같은 문제 풀이를 검색할 수 없다",
    description:
      "고난이도 문제를 풀 때 참고할 영상을 찾으려면 인스타그램을 오래 뒤져야 해요.",
  },
  {
    icon: BarChart3,
    title: "내 성장을 한눈에 볼 수 없다",
    description:
      "내 풀이 기록은 쌓이지만 암장, 난이도, 문제 기준으로 다시 보기 어려워요.",
  },
];

export function PainPoints() {
  return (
    <section className="flex min-h-svh snap-start flex-col items-center justify-center px-5 py-16">
      <div className="mx-auto w-full max-w-5xl">
        <div className="mb-12 text-center">
          <p className="text-climb-green mb-3 text-sm font-semibold uppercase tracking-wider">
            Problem
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            클라이밍 영상, 왜 이렇게 찾기 어려울까요?
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="bg-surface shadow-panel rounded-2xl border border-line p-6 transition-transform hover:-translate-y-1"
            >
              <div className="bg-climb-green/10 text-climb-green mb-4 flex h-12 w-12 items-center justify-center rounded-xl">
                <point.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{point.title}</h3>
              <p className="text-muted leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
