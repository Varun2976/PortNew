import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import projects from "./ProjectsData";

/* Classic arcade palette */
const MAZE = "#2121ff";
const PAC = "#ffd800";
const GHOSTS = ["#ff0000", "#ffb8ff", "#00ffff", "#ffb852"];
const GHOST_NAMES = ["BLINKY", "PINKY", "INKY", "CLYDE"];

function Ghost({ color, size = 34 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      shapeRendering="crispEdges"
      className="pac-ghost"
    >
      {/* body */}
      <path
        fill={color}
        d="M8 1c3.3 0 6 2.7 6 6v8l-2-1.6L10 15l-2-1.6L6 15l-2-1.6L2 15V7c0-3.3 2.7-6 6-6z"
      />
      {/* eyes */}
      <rect x="4" y="5" width="3" height="4" fill="#fff" />
      <rect x="9" y="5" width="3" height="4" fill="#fff" />
      <rect x="5" y="6" width="2" height="2" fill={MAZE} />
      <rect x="10" y="6" width="2" height="2" fill={MAZE} />
    </svg>
  );
}

function Pellet({ big = false }) {
  return (
    <span
      className={big ? "pac-power" : "pac-dot"}
      style={{ background: "#ffe9a8" }}
    />
  );
}

function ProjectsPage({ onBack }) {
  const [score, setScore] = useState(0);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onBack();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onBack]);

  const pad = (n) => String(n).padStart(6, "0");

  return (
    <section className="pac-page relative min-h-screen w-full bg-black overflow-hidden">
      <style>{`
        .pac-page { --maze: ${MAZE}; }

        /* CRT scanlines */
        .pac-scan {
          background: repeating-linear-gradient(
            to bottom,
            rgba(255,255,255,0.05) 0px,
            rgba(255,255,255,0.05) 1px,
            transparent 1px,
            transparent 4px
          );
        }

        /* Pac-Man, mouth chomping */
        .pac-man {
          border-radius: 50%;
          background: ${PAC};
          animation: pacChomp .32s steps(1) infinite alternate,
                     pacRun 9s linear infinite;
          clip-path: polygon(100% 22%, 48% 50%, 100% 78%, 100% 100%, 0 100%, 0 0, 100% 0);
        }
        @keyframes pacChomp {
          from { clip-path: polygon(100% 22%, 48% 50%, 100% 78%, 100% 100%, 0 100%, 0 0, 100% 0); }
          to   { clip-path: polygon(100% 49%, 48% 50%, 100% 51%, 100% 100%, 0 100%, 0 0, 100% 0); }
        }
        @keyframes pacRun {
          0%   { transform: translateX(-6vw); }
          100% { transform: translateX(100vw); }
        }

        /* Ghosts chasing behind Pac-Man */
        .pac-chase { animation: pacRun 9s linear infinite; }
        .pac-ghost { animation: pacFloat 0.5s steps(2) infinite alternate; }
        @keyframes pacFloat {
          from { transform: translateY(0); }
          to   { transform: translateY(-3px); }
        }

        .pac-dot {
          width: 6px; height: 6px; border-radius: 50%;
          display: inline-block; flex: none;
        }
        .pac-power {
          width: 14px; height: 14px; border-radius: 50%;
          display: inline-block; flex: none;
          animation: pacBlink .45s steps(1) infinite alternate;
          box-shadow: 0 0 12px #ffe9a8;
        }
        @keyframes pacBlink { from { opacity: 1; } to { opacity: 0.15; } }

        .pac-1up { animation: pacBlink .6s steps(1) infinite alternate; }

        /* Maze wall: the classic double-line neon tube */
        .pac-wall {
          border: 3px solid ${MAZE};
          box-shadow: inset 0 0 0 3px #000, inset 0 0 0 6px ${MAZE},
                      0 0 14px rgba(33,33,255,0.55);
        }
        .pac-card:hover .pac-wall {
          box-shadow: inset 0 0 0 3px #000, inset 0 0 0 6px ${PAC},
                      0 0 26px rgba(255,216,0,0.45);
          border-color: ${PAC};
        }

        .pac-text-glow { text-shadow: 0 0 10px rgba(255,216,0,0.6); }
      `}</style>

      {/* scanline overlay */}
      <div className="pac-scan pointer-events-none absolute inset-0 z-20 opacity-40" />

      {/* ── HUD ───────────────────────────── */}
      <div className="sticky top-0 z-30 bg-black/95 backdrop-blur-sm border-b-4 border-[#2121ff]">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4 font-arcade text-[10px] md:text-xs">
          <button
            onClick={onBack}
            className="
              flex items-center gap-2
              text-[#ffd800] border-2 border-[#ffd800]
              px-3 py-2
              hover:bg-[#ffd800] hover:text-black
              transition-colors
            "
          >
            <span className="text-base leading-none">◄</span> EXIT
          </button>

          <div className="flex flex-col items-center gap-1">
            <span className="pac-1up text-[#00ffff]">1UP</span>
            <span className="text-white">{pad(score)}</span>
          </div>

          <div className="hidden sm:flex flex-col items-center gap-1">
            <span className="text-[#ff0000]">HIGH SCORE</span>
            <span className="text-white">{pad(projects.length * 100)}</span>
          </div>

          <div className="flex items-center gap-2">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="w-4 h-4 rounded-full"
                style={{
                  background: PAC,
                  clipPath:
                    "polygon(100% 22%, 48% 50%, 100% 78%, 100% 100%, 0 100%, 0 0, 100% 0)",
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── TITLE ─────────────────────────── */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-12 pb-6 text-center">
        <h2 className="font-arcade text-2xl md:text-5xl text-[#ffd800] pac-text-glow tracking-tight">
          PROJECTS
        </h2>

        <p className="font-arcade text-[9px] md:text-[11px] text-[#00ffff] mt-5">
          READY! — EAT ALL THE PELLETS
        </p>

        {/* Pac-Man chase strip */}
        <div className="relative h-14 mt-6 overflow-hidden">
          {/* pellet track */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2">
            {[...Array(34)].map((_, i) => (
              <Pellet key={i} big={i % 11 === 0} />
            ))}
          </div>

          {/* runner */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 flex items-center gap-4">
            <div className="pac-man w-9 h-9" />
          </div>

          <div
            className="pac-chase absolute top-1/2 -translate-y-1/2 left-0 flex items-center gap-3"
            style={{ marginLeft: "-13rem" }}
          >
            {GHOSTS.map((c) => (
              <Ghost key={c} color={c} size={30} />
            ))}
          </div>
        </div>
      </div>

      {/* ── MAZE OF PROJECTS ──────────────── */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 pb-24">
        {projects.map((project, index) => {
          const ghost = GHOSTS[index % GHOSTS.length];
          const ghostName = GHOST_NAMES[index % GHOST_NAMES.length];

          return (
            <div key={index}>
              {/* corridor pellets between maze blocks */}
              {index > 0 && (
                <div className="flex flex-col items-center gap-2 py-5">
                  {[...Array(3)].map((_, d) => (
                    <Pellet key={d} />
                  ))}
                </div>
              )}

              <motion.div
                className="pac-card relative"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                onViewportEnter={() => setScore((s) => s + 100)}
                whileHover={{ scale: 1.015 }}
              >
                <div className="pac-wall relative bg-black p-6 md:p-8">
                  {/* score popup */}
                  <span className="font-arcade text-[9px] text-[#00ffff] absolute right-4 top-4">
                    +100
                  </span>

                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center gap-2 pt-1">
                      <Ghost color={ghost} size={38} />
                      <span
                        className="font-arcade text-[7px]"
                        style={{ color: ghost }}
                      >
                        {ghostName}
                      </span>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="font-arcade text-[9px] text-white/50">
                          LEVEL {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="flex items-center gap-1">
                          <Pellet />
                          <Pellet />
                          <Pellet />
                        </span>
                      </div>

                      <h3 className="font-arcade text-sm md:text-xl text-[#ffd800] mt-4 leading-relaxed">
                        {project.title.toUpperCase()}
                      </h3>

                      <div className="my-4 h-[3px] w-full bg-[#2121ff]" />

                      <p className="text-white/85 text-base md:text-lg leading-relaxed font-mono">
                        {project.summary}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}

        {/* ── GAME OVER footer ───────────── */}
        <div className="mt-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Pellet big />
            <Pellet />
            <Pellet />
            <Pellet big />
          </div>

          <p className="font-arcade text-sm md:text-lg text-[#ff0000]">
            GAME OVER
          </p>

          <button
            onClick={onBack}
            className="
              mt-8 font-arcade text-[10px]
              text-[#ffd800] border-2 border-[#ffd800]
              px-5 py-3
              hover:bg-[#ffd800] hover:text-black
              transition-colors
            "
          >
            PRESS TO INSERT COIN ◄ BACK
          </button>

          <p className="font-arcade text-[8px] text-white/40 mt-5">
            OR HIT [ESC]
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProjectsPage;
