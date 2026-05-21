import { useMemo, useState } from "react";

export default function LovePage() {
  const [isLoveModalOpen, setIsLoveModalOpen] = useState(false);
  const rainText = useMemo(() => Array.from({ length: 120 }), []);

  const floatingHearts = useMemo(
    () =>
      Array.from({ length: 40 }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        fontSize: `${20 + Math.random() * 40}px`,
        animationDuration: `${2 + Math.random() * 5}s`,
      })),
    []
  );

  const fallingLoveText = useMemo(
    () =>
      rainText.map(() => ({
        left: `${Math.random() * 100}%`,
        top: `-${Math.random() * 100}%`,
        fontSize: `${14 + Math.random() * 18}px`,
        animationDelay: `${Math.random() * 10}s`,
      })),
    [rainText]
  );

  const celebrationHearts = useMemo(
    () =>
      Array.from({ length: 22 }, () => ({
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 1.2}s`,
        duration: `${2.4 + Math.random() * 2.2}s`,
        size: `${18 + Math.random() * 22}px`,
      })),
    []
  );

  return (
    <div className="min-h-screen overflow-hidden relative bg-black text-pink-100">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-900 via-rose-800 to-red-950 animate-pulse opacity-90" />

      <div className="absolute inset-0 overflow-hidden">
        {floatingHearts.map((heart, i) => (
          <div
            key={i}
            className="absolute text-pink-300 opacity-70 animate-bounce"
            style={heart}
          >
            ❤️
          </div>
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {fallingLoveText.map((style, i) => (
          <div
            key={i}
            className="absolute whitespace-nowrap text-pink-200/20 font-bold animate-[fall_10s_linear_infinite]"
            style={style}
          >
            Nurul Farahin I love you 💖
          </div>
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 py-10 md:px-6">
        <div className="backdrop-blur-xl bg-white/10 border border-pink-300/20 shadow-[0_0_80px_rgba(255,105,180,0.5)] rounded-[40px] p-6 md:p-10 max-w-5xl w-full animate-fadeIn">
          <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-pink-300 via-rose-200 to-red-300 text-transparent bg-clip-text drop-shadow-[0_0_25px_hotpink] animate-pulse">
            Nurul Farahin
          </h1>

          <p className="mt-6 text-3xl md:text-5xl font-bold text-pink-100 tracking-wide">I LOVE YOU 💘</p>

          <div className="mt-8 text-xl md:text-3xl italic text-rose-200">"bubu to my dudu" 🫶</div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl overflow-hidden border border-pink-100/20 bg-black/30 shadow-[0_0_30px_rgba(255,182,193,0.35)] group">
              <img
                src="/temp-page/azim-and-farah.JPEG"
                alt="Azim and Farah"
                className="w-full h-72 md:h-96 object-contain transition duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <div className="rounded-3xl overflow-hidden border border-pink-100/20 bg-pink-200/10 shadow-[0_0_30px_rgba(255,182,193,0.35)] group">
              <img
                src="/temp-page/Bubu-loving-Dudu.png"
                alt="Bubu loving Dudu"
                className="w-full h-72 md:h-96 object-cover transition duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {[
              "Always & Forever 💞",
              "You are my happiness 🌸",
              "Every heartbeat says your name 💓",
            ].map((text, idx) => (
              <div
                key={idx}
                className="bg-pink-200/10 border border-pink-100/20 rounded-3xl p-5 backdrop-blur-lg hover:-translate-y-1 hover:scale-105 transition duration-500 shadow-[0_0_30px_rgba(255,182,193,0.4)]"
              >
                <p className="text-lg text-pink-50 font-semibold">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <div className="text-[120px] md:text-[180px] drop-shadow-[0_0_40px_red] animate-heartbeat">❤️</div>
          </div>

          <div className="mt-6 flex flex-col items-center">
            <div className="mb-2 text-pink-100 font-bold text-base md:text-lg animate-pointHere">
              click here love
            </div>
            <div className="text-3xl mb-2 animate-arrowDrop">⬇️</div>
            <button
              onClick={() => setIsLoveModalOpen(true)}
              className="px-10 py-4 rounded-full bg-gradient-to-r from-pink-400 via-rose-400 to-red-500 text-white font-bold text-xl shadow-[0_0_40px_rgba(255,20,147,0.8)] hover:scale-105 hover:brightness-110 transition duration-500"
            >
              Forever Yours 💌
            </button>
          </div>
        </div>
      </div>

      {isLoveModalOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <button
            aria-label="Close love message"
            className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-modalFadeIn"
            onClick={() => setIsLoveModalOpen(false)}
          />

          <div className="relative w-full max-w-xl rounded-[34px] border border-pink-100/30 bg-gradient-to-br from-pink-600/80 via-rose-600/75 to-red-700/80 p-6 md:p-8 text-center shadow-[0_0_90px_rgba(255,84,150,0.7)] animate-lovePop">
            <div className="absolute inset-0 overflow-hidden rounded-[34px] pointer-events-none">
              {celebrationHearts.map((heart, idx) => (
                <span
                  key={idx}
                  className="absolute bottom-[-40px] animate-loveFloat"
                  style={{
                    left: heart.left,
                    animationDelay: heart.delay,
                    animationDuration: heart.duration,
                    fontSize: heart.size,
                  }}
                >
                  💖
                </span>
              ))}
            </div>

            <div className="relative z-10">
              <p className="text-pink-100/90 text-sm tracking-[0.25em] uppercase">A little love note</p>
              <h2 className="mt-2 text-4xl md:text-5xl font-black text-white drop-shadow-[0_0_16px_rgba(255,219,232,0.8)]">
                For Nurul Farahin
              </h2>
              <p className="mt-4 text-lg md:text-2xl text-rose-50 font-semibold leading-relaxed">
                You are my favorite person, my calm, my joy, and my forever home.
              </p>
              <p className="mt-3 text-base md:text-lg text-pink-100/95 italic">
                Every day with you feels like a beautiful dream. I love you endlessly. 💗
              </p>

              <div className="mt-7 flex items-center justify-center gap-3 text-3xl animate-heartSpark">
                <span>💞</span>
                <span>🫶</span>
                <span>💘</span>
              </div>

              <button
                onClick={() => setIsLoveModalOpen(false)}
                className="mt-8 px-7 py-3 rounded-full bg-white/20 border border-pink-100/40 text-white font-bold hover:bg-white/30 transition duration-300"
              >
                Close with love
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(-120vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            transform: translateY(120vh) rotate(360deg);
            opacity: 0;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 2s ease;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-heartbeat {
          animation: heartbeat 1.2s ease-in-out infinite;
          transform-origin: center;
          will-change: transform, filter;
        }

        @keyframes heartbeat {
          0% {
            transform: scale(1);
            filter: brightness(1);
          }
          14% {
            transform: scale(1.14);
            filter: brightness(1.08);
          }
          28% {
            transform: scale(1);
            filter: brightness(1);
          }
          42% {
            transform: scale(1.1);
            filter: brightness(1.06);
          }
          70% {
            transform: scale(1);
            filter: brightness(1);
          }
          100% {
            transform: scale(1);
            filter: brightness(1);
          }
        }

        .animate-modalFadeIn {
          animation: modalFadeIn 0.35s ease forwards;
        }

        @keyframes modalFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-lovePop {
          animation: lovePop 0.45s cubic-bezier(0.2, 1.1, 0.28, 1) forwards;
        }

        @keyframes lovePop {
          0% {
            opacity: 0;
            transform: scale(0.72) translateY(24px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-loveFloat {
          animation-name: loveFloat;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        @keyframes loveFloat {
          0% {
            transform: translateY(0) scale(0.9) rotate(0deg);
            opacity: 0;
          }
          15% {
            opacity: 0.95;
          }
          100% {
            transform: translateY(-340px) scale(1.2) rotate(16deg);
            opacity: 0;
          }
        }

        .animate-heartSpark {
          animation: heartSpark 1.4s ease-in-out infinite;
        }

        @keyframes heartSpark {
          0%,
          100% {
            transform: scale(1);
            filter: brightness(1);
          }
          50% {
            transform: scale(1.12);
            filter: brightness(1.15);
          }
        }

        .animate-pointHere {
          animation: pointHere 1.4s ease-in-out infinite;
        }

        @keyframes pointHere {
          0%,
          100% {
            transform: translateY(0);
            opacity: 0.85;
          }
          50% {
            transform: translateY(-4px);
            opacity: 1;
          }
        }

        .animate-arrowDrop {
          animation: arrowDrop 1.1s ease-in-out infinite;
        }

        @keyframes arrowDrop {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(6px);
          }
        }
      `}</style>
    </div>
  );
}
