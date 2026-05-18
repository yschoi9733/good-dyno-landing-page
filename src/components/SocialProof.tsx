import { MapPin, Video, Share2, Sparkles } from "lucide-react";

const surveyItems = [
  {
    icon: <MapPin className="h-5 w-5" />,
    title: "주로 가는 암장",
    description: "어떤 암장을 자주 방문하시나요?",
  },
  {
    icon: <Video className="h-5 w-5" />,
    title: "영상 촬영 빈도",
    description: "클라이밍 영상을 얼마나 자주 찍으시나요?",
  },
  {
    icon: <Share2 className="h-5 w-5" />,
    title: "현재 공유 플랫폼",
    description: "지금은 어디에 영상을 올리시나요?",
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: "기대하는 AI 기능",
    description: "어떤 AI 기능이 가장 도움이 될까요?",
  },
];

export function SocialProof() {
  return (
    <section className="flex min-h-[calc(100svh-4rem)] flex-col items-center justify-center px-5 py-16">
      <div className="mx-auto w-full max-w-5xl">
        <div className="bg-surface shadow-soft overflow-hidden rounded-3xl border border-line">
          <div className="bg-climb-green px-6 py-8 text-center text-white md:px-12 md:py-12">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">
              지금 클라이머들의 영상 기록 습관을
              <br />
              확인하고 있어요
            </h2>
            <p className="text-climb-lime/90 mx-auto max-w-xl text-lg">
              자주 가는 암장과 영상 업로드 방식을 알려주시면 초기 서비스 설계에 반영할게요.
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
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfhmF8J0a2n8Oo5UdUndkORE5u9cWKR8FGrW9S-01ks6hH_Pw/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-climb-green hover:bg-climb-green/90 inline-block rounded-full px-8 py-3 font-semibold text-white transition-colors"
            >
              설문 참여하기
            </a>
            <p className="text-muted mt-3 text-sm">약 3분 정도 소요됩니다</p>
          </div>
        </div>
      </div>
    </section>
  );
}
