import { Upload, Tag, Users } from "lucide-react";

const steps = [
  {
    icon: Upload,
    step: "01",
    title: "영상을 올린다",
    description: "클라이밍 영상을 Limbing에 업로드하세요.",
  },
  {
    icon: Tag,
    step: "02",
    title: "암장, 난이도, 문제를 태깅한다",
    description: "어디서, 어떤 난이도의, 몇 번 문제인지 태그를 달아요.",
  },
  {
    icon: Users,
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
                  <item.icon className="text-climb-green h-8 w-8" />
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
