import { useState } from 'react';
import AnimatedTitle from './AnimatedTitle';
import { HiSparkles, HiCpuChip, HiArrowDown, HiArrowPath, HiCheckBadge } from 'react-icons/hi2';

const OreNexusSystem = () => {
  const [activeNode, setActiveNode] = useState(null);

  return (
    <section id="system" className="bg-ore-dark py-28 text-white relative overflow-hidden">
      {/* Dynamic Background Matrix */}
      <div className="absolute inset-0 radar-grid opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="text-center flex flex-col items-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/60 border border-violet-500/40 text-violet-300 text-xs font-mono tracking-widest uppercase mb-4">
            <HiCpuChip className="text-amber-400" />
            UNIFIED SYSTEM ARCHITECTURE
          </div>

          <AnimatedTitle
            title="THE <b>O</b>RENEXUS SYSTEM"
            containerClass="!text-white text-center"
          />

          <p className="mt-4 max-w-2xl font-circular-web text-base sm:text-lg text-blue-50/80 leading-relaxed">
            From cosmic satellite observation to atomic crusher mill feedback, OreNexus bridges the critical gap between geological promise and operational reality.
          </p>
        </div>

        {/* Unified Flowchart Architecture Box */}
        <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl border border-violet-500/30 bg-gradient-to-b from-black via-ore-card to-black shadow-2xl backdrop-blur-xl relative">
          <div className="flex flex-col items-center gap-6">
            {/* Top 3 Sensor Inputs */}
            <div className="flex flex-wrap justify-center gap-4 w-full">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3 min-w-44 justify-center hover:border-amber-400/50 transition-colors">
                <span className="text-2xl">🛰️</span>
                <div className="text-left">
                  <div className="font-zentry text-lg uppercase text-white font-bold">SPACE</div>
                  <div className="text-[10px] font-mono text-white/50">Hyperspectral & InSAR</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3 min-w-44 justify-center hover:border-amber-400/50 transition-colors">
                <span className="text-2xl">🪨</span>
                <div className="text-left">
                  <div className="font-zentry text-lg uppercase text-white font-bold">GEOLOGY</div>
                  <div className="text-[10px] font-mono text-white/50">Geophysics & Stratigraphy</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3 min-w-44 justify-center hover:border-amber-400/50 transition-colors">
                <span className="text-2xl">⛏️</span>
                <div className="text-left">
                  <div className="font-zentry text-lg uppercase text-white font-bold">DRILLING</div>
                  <div className="text-[10px] font-mono text-white/50">Core Assays & Density</div>
                </div>
              </div>
            </div>

            {/* Downward Pulse Arrow */}
            <div className="flex flex-col items-center text-amber-400 -my-2">
              <span className="h-6 w-0.5 bg-gradient-to-b from-transparent to-amber-400"></span>
              <HiArrowDown className="text-lg" />
            </div>

            {/* Central ORENEXUS AI ENGINE Core Hub */}
            <div className="w-full max-w-lg p-6 rounded-2xl bg-gradient-to-r from-violet-900/60 via-purple-900/50 to-amber-900/60 border border-violet-400 shadow-2xl shadow-violet-500/20 text-center">
              <div className="inline-flex items-center gap-2 text-amber-300 text-xs font-mono tracking-widest uppercase mb-1">
                <HiSparkles className="animate-spin" />
                CENTRAL COGNITIVE ENGINE
              </div>
              <h3 className="font-zentry text-3xl sm:text-4xl uppercase text-white font-black tracking-wide">
                ORENEXUS AI ENGINE
              </h3>
              <p className="text-xs font-circular-web text-violet-200 mt-1">
                Multi-Domain Sensor Fusion & 4D Spatio-Temporal Inversion Core
              </p>
            </div>

            {/* Branching Out: Reserve & Production */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
              <div className="p-6 rounded-2xl bg-white/5 border border-violet-500/30 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-violet-300 uppercase tracking-widest">
                    SUBSURFACE DOMAIN
                  </span>
                  <h4 className="font-zentry text-2xl uppercase text-white font-bold mt-1">
                    RESERVE PROSPECTIVITY
                  </h4>
                  <p className="text-xs font-circular-web text-white/70 mt-1">
                    High-resolution manganese grade probability & Next-Best-Drill vectors.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-red-500/30 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-red-300 uppercase tracking-widest">
                    OPERATIONAL DOMAIN
                  </span>
                  <h4 className="font-zentry text-2xl uppercase text-white font-bold mt-1">
                    PRODUCTION SHORTFALL
                  </h4>
                  <p className="text-xs font-circular-web text-white/70 mt-1">
                    Predicts equipment, weather, and blasting throughput bottlenecks.
                  </p>
                </div>
              </div>
            </div>

            {/* Downward Pulse Arrow */}
            <div className="flex flex-col items-center text-amber-400 -my-2">
              <span className="h-6 w-0.5 bg-gradient-to-b from-transparent to-amber-400"></span>
              <HiArrowDown className="text-lg" />
            </div>

            {/* What-If AI Synthesis Stage */}
            <div className="w-full max-w-md p-5 rounded-2xl bg-white/5 border border-amber-400/40 text-center">
              <span className="text-[10px] font-mono text-amber-300 uppercase tracking-widest">
                SCENARIO SIMULATION
              </span>
              <h4 className="font-zentry text-2xl uppercase text-white font-bold mt-0.5">
                WHAT-IF AI
              </h4>
              <p className="text-xs font-circular-web text-white/70 mt-1">
                Comparative optimization engine synthesizing corrective interventions.
              </p>
            </div>

            {/* Downward Pulse Arrow */}
            <div className="flex flex-col items-center text-emerald-400 -my-2">
              <span className="h-6 w-0.5 bg-gradient-to-b from-transparent to-emerald-400"></span>
              <HiArrowDown className="text-lg" />
            </div>

            {/* Best Action & Actual Result Loop */}
            <div className="w-full max-w-md p-5 rounded-2xl bg-emerald-950/40 border border-emerald-500/50 text-center shadow-lg shadow-emerald-500/10">
              <div className="flex items-center justify-center gap-2 text-emerald-400 text-xs font-mono font-bold tracking-wider uppercase mb-1">
                <HiCheckBadge className="text-lg" />
                EXECUTION & REINFORCEMENT
              </div>
              <h4 className="font-zentry text-2xl uppercase text-white font-bold">
                BEST ACTION → ACTUAL RESULT
              </h4>
              <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-mono">
                <HiArrowPath className="animate-spin text-sm" />
                <span>DATA FEEDS BACK TO MODEL (↺ CLOSED-LOOP)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OreNexusSystem;
