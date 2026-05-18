import { useState } from "react";

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
    <section className="flex min-h-svh snap-start flex-col items-center justify-center px-5 py-16">
      <div className="mx-auto w-full max-w-2xl text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="flex items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-climb-green">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                className="text-climb-lime"
              >
                <path
                  d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-3xl font-bold tracking-tight">Limbing</span>
          </div>
        </div>

        <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
          출시되면 가장 먼저 알려드릴게요
        </h2>
        <p className="text-muted mb-8 text-lg">
          이메일을 남겨주시면 Limbing 출시 소식을 가장 먼저 받아보실 수 있어요.
        </p>

        {isSubmitted ? (
          <div className="bg-surface shadow-panel inline-flex items-center gap-3 rounded-2xl border border-climb-green/30 px-8 py-6">
            <svg className="text-climb-green h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div className="text-left">
              <p className="font-semibold">신청이 완료되었어요!</p>
              <p className="text-muted text-sm">출시되면 가장 먼저 연락드릴게요.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mx-auto max-w-md">
            <div className="bg-surface shadow-panel flex flex-col gap-3 rounded-2xl border border-line p-2 sm:flex-row sm:items-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="이메일 주소를 입력하세요"
                className="text-ink placeholder:text-muted flex-1 rounded-xl bg-bg px-4 py-3 text-base outline-none transition-shadow focus:ring-2 focus:ring-climb-green/20"
                required
              />
              <button
                type="submit"
                className="bg-climb-green hover:bg-climb-green/90 flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold text-white transition-colors"
              >
                사전 신청
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
            <p className="text-muted mt-4 text-sm">
              스팸 없이 출시 소식만 보내드려요. 언제든 구독 취소 가능합니다.
            </p>
          </form>
        )}

        {/* Footer */}
        <div className="text-muted mt-16 border-t border-line pt-8 text-sm">
          <p>Made with care by Good Dyno Team</p>
        </div>
      </div>
    </section>
  );
}
