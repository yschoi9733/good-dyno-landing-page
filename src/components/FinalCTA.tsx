import { useState } from "react";
import { CheckCircle, ArrowRight, Send } from "lucide-react";

export function FinalCTA() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
    }
  };

  return (
    <section id="early-access" className="snap-start min-h-[calc(100svh-4rem)] flex flex-col justify-center py-16 px-5">
      <div className="mx-auto w-full max-w-2xl text-center">

        <div className="relative bg-surface shadow-soft rounded-3xl border border-line p-10 md:p-16 overflow-hidden">
          {/* Decorative rings */}
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-climb-green/10 rounded-full" />
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-climb-green/8 rounded-full" />

          <div className="relative">
            {/* Icon */}
            <div className="mb-8 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-climb-green/10 border border-climb-green/30 text-climb-green">
                <Send className="h-7 w-7" />
              </div>
            </div>

            {/* Logo */}
            <div className="mb-6 flex justify-center items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-climb-green">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-climb-lime">
                  <path
                    d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-2xl font-bold tracking-tight">Limbing</span>
            </div>

            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              출시되면 가장 먼저 알려드릴게요
            </h2>
            <p className="text-muted mb-8 text-lg">
              이메일을 남겨주시면 Limbing 출시 소식을 가장 먼저 받아보실 수 있어요.
            </p>

            {isSubmitted ? (
              <div className="bg-bg inline-flex items-center gap-3 rounded-2xl border border-climb-green/30 px-8 py-6">
                <CheckCircle className="text-climb-green h-8 w-8" />
                <div className="text-left">
                  <p className="font-semibold">신청이 완료되었어요!</p>
                  <p className="text-muted text-sm">출시되면 가장 먼저 연락드릴게요.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mx-auto max-w-md">
                <div className="bg-bg flex flex-col gap-3 rounded-2xl border border-line p-2 sm:flex-row sm:items-center">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="이메일 주소를 입력하세요"
                    className="text-ink placeholder:text-muted flex-1 rounded-xl bg-surface px-4 py-3 text-base outline-none transition-shadow focus:ring-2 focus:ring-climb-green/20"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-climb-green hover:bg-climb-green/90 flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold text-white transition-colors"
                  >
                    사전 신청
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
                <p className="text-muted mt-4 text-sm">
                  스팸 없이 출시 소식만 보내드려요. 언제든 구독 취소 가능합니다.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="text-muted mt-12 border-t border-line pt-8 text-sm">
          <p>Made with care by Good Dyno Team</p>
        </div>
      </div>
    </section>
  );
}
