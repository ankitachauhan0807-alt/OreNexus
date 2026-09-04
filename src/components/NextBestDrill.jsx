import { useState } from 'react';
import AnimatedTitle from './AnimatedTitle';
import { HiStar, HiSparkles, HiArrowTrendingUp, HiCursorArrowRays } from 'react-icons/hi2';

const drillTargets = [
  {
    id: 'A',
    name: 'ZONE A',
    score: '62%',
    numericScore: 62,
    uncertainty: '45% Info Gain',
    cost: '$42,000',
    depth: '110m',
    isBest: false,
    desc: 'Moderate prospectivity with high structural fracture noise.'
  },
  {
    id: 'B',
    name: 'ZONE B',
    score: '78%',
    numericScore: 78,
    uncertainty: '60% Info Gain',
    cost: '$54,000',
    depth: '145m',
    isBest: false,
    desc: 'Strong magnetic signature but flanked by fault boundary.'
  },
  {
    id: 'C',
    name: 'ZONE C',
    score: '71%',
    numericScore: 71,
    uncertainty: '52% Info Gain',
    cost: '$48,000',
    depth: '130m',
    isBest: false,
    desc: 'Good stratigraphic correlation, modest grade continuity.'
  },
  {
    id: 'D',
    name: 'ZONE D',
    score: '★ 91%',
    numericScore: 91,
    uncertainty: '88% Info Gain',
    cost: '$58,000',
    depth: '160m',
    isBest: true,
    desc: 'Maximum uncertainty reduction ROI. High-grade manganese core intercept predicted.'
  }
];

const NextBestDrill = () => {
  const [selectedTarget, setSelectedTarget] = useState(drillTargets[3]); // Default to Zone D

  return (
    <section id="next-best-drill" className="bg-ore-dark py-28 text-white relative overflow-hidden">
      {/* Radar scanning background */}
      <div className="absolute inset-0 radar-grid-fine opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-10 relative z-10">
        {/* Header */}
        <div className="text-center flex flex-col items-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/60 border border-amber-500/40 text-amber-300 text-xs font-mono tracking-widest uppercase mb-4">
            <HiSparkles className="text-amber-400 animate-spin" />
            SIGNATURE EXPLORATION INNOVATION
          </div>

          <AnimatedTitle
            title="DON'T JUST DRILL. <br/> DRILL WHERE IT <b>M</b>ATTERS."
            containerClass="!text-white text-center"
          />

          <p className="mt-4 max-w-2xl font-circular-web text-base sm:text-lg text-blue-50/80 leading-relaxed">
            Prioritizes exploration locations based on prospectivity and uncertainty reduction, maximizing drilling ROI.
          </p>
        </div>

        {/* 2-Column Exploration Radar & Next-Best-Drill Highlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Exploration Points Comparative Matrix */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="flex items-center justify-between text-xs font-mono text-white/50 px-2 uppercase">
              <span>EXPLORATION TARGETS</span>
              <span>PROSPECTIVITY / VALUE SCORE</span>
            </div>

            {drillTargets.map((target) => (
              <div
                key={target.id}
                onClick={() => setSelectedTarget(target)}
                className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer backdrop-blur-md flex items-center justify-between ${
                  target.isBest
                    ? 'bg-gradient-to-r from-amber-950/40 via-purple-950/30 to-black border-amber-400/60 shadow-xl shadow-amber-500/20 ring-1 ring-amber-400/50'
                    : selectedTarget.id === target.id
                    ? 'bg-white/10 border-white/30'
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`size-10 rounded-xl flex items-center justify-center font-zentry text-xl font-bold ${
                    target.isBest ? 'bg-amber-400 text-black' : 'bg-white/10 text-white'
                  }`}>
                    {target.id}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-zentry text-xl tracking-wide uppercase text-white font-bold">
                        {target.name}
                      </h4>
                      {target.isBest && (
                        <span className="px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 text-[10px] font-mono font-bold border border-amber-400/40">
                          RECOMMENDED
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-circular-web text-white/60 mt-0.5">
                      {target.uncertainty}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <div className={`font-zentry text-2xl font-black ${
                    target.isBest ? 'text-amber-400 text-glow-amber' : 'text-white/80'
                  }`}>
                    {target.score}
                  </div>
                  <span className="text-[10px] font-mono text-white/40">
                    Depth: {target.depth}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Signature Next-Best-Drill Solution Callout Card */}
          <div className="lg:col-span-6 p-8 rounded-3xl border border-amber-400/40 bg-gradient-to-br from-amber-950/30 via-ore-card to-black shadow-2xl relative overflow-hidden backdrop-blur-xl">
            <div className="absolute top-0 right-0 p-6 pointer-events-none opacity-10">
              <HiCursorArrowRays className="size-48 text-amber-400" />
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400 text-black text-xs font-mono font-black tracking-widest uppercase mb-6">
              <HiStar className="text-black" />
              SIGNATURE NEXT-BEST-DRILL
            </div>

            <h2 className="font-zentry text-4xl sm:text-5xl uppercase text-white font-black tracking-tight">
              {selectedTarget.name}
            </h2>

            <p className="mt-4 font-circular-web text-base text-blue-50/90 leading-relaxed">
              Prioritizes exploration locations based on prospectivity and uncertainty. By drilling {selectedTarget.name}, the system achieves maximum geological clarity with minimal exploration expenditure.
            </p>

            {/* Targeted Metrics Grid */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-black/50 border border-white/10 text-center">
                <span className="text-[10px] font-mono text-white/50 uppercase">TARGET DEPTH</span>
                <div className="font-zentry text-lg text-white font-bold mt-0.5">
                  {selectedTarget.depth}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-black/50 border border-white/10 text-center">
                <span className="text-[10px] font-mono text-white/50 uppercase">INFO GAIN</span>
                <div className="font-zentry text-lg text-emerald-400 font-bold mt-0.5">
                  {selectedTarget.uncertainty.split(' ')[0]}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-black/50 border border-white/10 text-center">
                <span className="text-[10px] font-mono text-white/50 uppercase">EST. COST</span>
                <div className="font-zentry text-lg text-amber-300 font-bold mt-0.5">
                  {selectedTarget.cost}
                </div>
              </div>
            </div>

            {/* Active Bench Drilling Rig Telemetry Feed */}
            <div className="mt-6 relative h-44 w-full rounded-2xl overflow-hidden border border-amber-400/30 group">
              <img
                src="/img/Photo 2.jpg"
                alt="Active Quarry Bench Exploration Core Drill Rig"
                className="size-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex items-end p-3.5">
                <span className="text-[10px] font-mono text-amber-300 flex items-center gap-2">
                  <span className="size-2 rounded-full bg-amber-400 animate-ping" />
                  BENCH TELEMETRY ACTIVE // CORE DRILL RIG #04 INTERCEPTING {selectedTarget.name}
                </span>
              </div>
            </div>

            {/* ROI Simulation Summary */}
            <div className="mt-4 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <HiArrowTrendingUp className="text-amber-400 text-2xl" />
                <div>
                  <h4 className="font-general text-xs font-bold text-white uppercase">
                    EXPLORATION VALUE ROI
                  </h4>
                  <p className="text-xs font-mono text-amber-300">
                    3.4x Faster Reserve Delineation vs Fixed Grid
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextBestDrill;
