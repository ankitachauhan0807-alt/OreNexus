import { useState } from 'react';
import AnimatedTitle from './AnimatedTitle';
import { HiSparkles, HiCheckCircle } from 'react-icons/hi2';

const mitigationOptions = [
  {
    id: 'resequence',
    title: 'RESEQUENCE MINE',
    boost: 6000,
    boostFormatted: '+6K T',
    desc: 'Advance Phase 3 high-grade bench extraction schedule by 12 days to bypass waterlogged haul floor.',
    category: 'Spatial Dig Sequence',
    color: 'border-purple-500/40'
  },
  {
    id: 'redeploy',
    title: 'REDEPLOY EQUIPMENT',
    boost: 8000,
    boostFormatted: '+8K T',
    desc: 'Reassign 4 CAT 789D haulers from lower-grade Waste Pit B to prime Manganese Flank D7.',
    category: 'Fleet Dispatch Optimization',
    color: 'border-amber-500/40'
  },
  {
    id: 'blasting',
    title: 'OPTIMIZE BLASTING',
    boost: 4000,
    boostFormatted: '+4K T',
    desc: 'Implement electronic micro-delay blast detonation pattern for fine fragmentation, speeding crusher throughput.',
    category: 'Energy & Geomechanics',
    color: 'border-cyan-500/40'
  }
];

const WhatIfEngine = () => {
  const baseTonnage = 87000;
  const targetQuota = 100000;

  // Selected actions state (defaults to optimal combo)
  const [selectedActions, setSelectedActions] = useState(['resequence', 'redeploy']);

  const toggleAction = (id) => {
    setSelectedActions((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectOptimal = () => {
    setSelectedActions(['resequence', 'redeploy']);
  };

  const currentBoost = selectedActions.reduce((total, id) => {
    const opt = mitigationOptions.find((o) => o.id === id);
    return total + (opt ? opt.boost : 0);
  }, 0);

  const currentTotal = baseTonnage + currentBoost;
  const isTargetAchieved = currentTotal >= targetQuota;
  const isOptimalCombo = selectedActions.includes('resequence') && selectedActions.includes('redeploy') && !selectedActions.includes('blasting');

  return (
    <section id="what-if" className="bg-black py-28 text-white relative overflow-hidden">
      {/* Background Cyber Radar Overlay */}
      <div className="absolute inset-0 radar-grid opacity-25 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="text-center flex flex-col items-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/60 border border-violet-500/40 text-violet-300 text-xs font-mono tracking-widest uppercase mb-4">
            <HiSparkles className="text-amber-400 animate-spin" />
            REAL-TIME PREDICTIVE SCENARIO SIMULATOR
          </div>

          <AnimatedTitle
            title="WHAT-IF <b>A</b>I ENGINE"
            containerClass="!text-white text-center"
          />

          <p className="mt-4 max-w-2xl font-circular-web text-base sm:text-lg text-blue-50/80 leading-relaxed">
            Simulate corrective actions in real time. OreNexus compares millions of operational permutations to synthesize the highest-yield intervention.
          </p>
        </div>

        {/* Interactive Simulator Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Interactive Scenario Action Levers */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between px-2">
                <span className="text-xs font-mono text-white/50 tracking-widest uppercase">
                  ACTIVE MITIGATION LEVERS (SELECT TO SIMULATE)
                </span>
                <button
                  onClick={selectOptimal}
                  className="text-xs font-mono text-amber-400 hover:text-amber-300 font-bold underline cursor-pointer"
                >
                  ⚡ APPLY OPTIMAL SCENARIO
                </button>
              </div>

              {mitigationOptions.map((option) => {
                const isSelected = selectedActions.includes(option.id);
                return (
                  <div
                    key={option.id}
                    onClick={() => toggleAction(option.id)}
                    className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer backdrop-blur-md ${
                      isSelected
                        ? `bg-white/10 ${option.color} ring-1 ring-white/20 shadow-xl shadow-purple-500/10 translate-x-1`
                        : 'bg-white/5 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div
                          className={`mt-1 size-6 rounded-lg flex items-center justify-center border transition-colors ${
                            isSelected
                              ? 'bg-amber-400 border-amber-400 text-black'
                              : 'border-white/30 text-transparent'
                          }`}
                        >
                          <HiCheckCircle className="text-lg" />
                        </div>
                        <div>
                          <span className="text-[10px] font-mono text-white/50 uppercase tracking-wider">
                            {option.category}
                          </span>
                          <h4 className="font-zentry text-xl sm:text-2xl uppercase text-white font-bold tracking-wide mt-0.5">
                            {option.title}
                          </h4>
                          <p className="mt-2 text-xs sm:text-sm font-circular-web text-white/70 leading-relaxed max-w-md">
                            {option.desc}
                          </p>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="font-zentry text-2xl font-black text-amber-400 text-glow-amber">
                          {option.boostFormatted}
                        </span>
                        <span className="block text-[10px] font-mono text-white/40">
                          Yield Gain
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Base Plan Callout */}
            <div className="mt-6 p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs font-mono">
              <span className="text-white/60">CURRENT BASELINE PLAN:</span>
              <span className="text-white font-bold">87,000 T (Unmitigated)</span>
            </div>
          </div>

          {/* Right Column: Dynamic Simulation HUD & Outcome */}
          <div className="lg:col-span-5 p-8 rounded-3xl border border-violet-500/30 bg-gradient-to-br from-violet-950/40 via-ore-card to-black shadow-2xl flex flex-col justify-between backdrop-blur-xl">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <span className="text-xs font-mono tracking-widest text-amber-300 uppercase">
                  SIMULATION SYNTHESIS
                </span>
                <span className={`px-2.5 py-1 rounded text-xs font-mono font-bold ${
                  isTargetAchieved
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                    : 'bg-red-500/20 text-red-300 border border-red-500/40'
                }`}>
                  {isTargetAchieved ? 'TARGET EXCEEDED' : 'DEFICIT PERSISTS'}
                </span>
              </div>

              {/* Expected Output Big Number */}
              <div className="text-center py-4">
                <span className="text-xs font-mono text-white/50 uppercase tracking-widest block mb-1">
                  EXPECTED OUTPUT
                </span>
                <div className={`font-zentry text-5xl sm:text-6xl uppercase font-black tracking-tight transition-colors duration-500 ${
                  isTargetAchieved ? 'text-emerald-400 text-glow-emerald' : 'text-amber-400'
                }`}>
                  {(currentTotal / 1000).toFixed(0)}K T
                </div>
                <div className="text-xs font-mono text-white/60 mt-1">
                  {currentTotal.toLocaleString()} Tonnes / 100,000 T Target
                </div>
              </div>

              {/* Simulated Mine Execution Video Feed */}
              <div className="relative h-32 w-full rounded-2xl overflow-hidden border border-violet-500/30 my-3 group">
                <video
                  src="/videos/Video 6.mp4"
                  loop
                  autoPlay
                  muted
                  playsInline
                  className="size-full object-cover opacity-60 group-hover:opacity-85 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                  <span className="text-[10px] font-mono text-emerald-300 flex items-center gap-1.5 px-2 py-0.5 rounded bg-black/70 border border-emerald-500/30">
                    <span className="size-2 rounded-full bg-emerald-400 animate-ping" />
                    SIMULATION TWIN // CRUSHER FEED & PIT DISPATCH
                  </span>
                </div>
              </div>

              {/* Visual Progress Meter */}
              <div className="my-4">
                <div className="flex justify-between text-[11px] font-mono text-white/50 mb-1.5">
                  <span>87K (Baseline)</span>
                  <span className="text-amber-300">100K Quota</span>
                  <span>{(currentTotal / 1000).toFixed(0)}K (Simulated)</span>
                </div>
                <div className="h-4 w-full rounded-full bg-white/10 overflow-hidden p-[2px]">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      isTargetAchieved
                        ? 'bg-gradient-to-r from-emerald-500 to-green-400'
                        : 'bg-gradient-to-r from-amber-500 to-orange-500'
                    }`}
                    style={{ width: `${Math.min(100, (currentTotal / 105000) * 100)}%` }}
                  ></div>
                </div>
              </div>

              {/* Optimal Action Recommendation */}
              <div className="p-4 rounded-2xl bg-black/60 border border-white/10 space-y-2">
                <span className="text-[10px] font-mono text-amber-300 uppercase tracking-widest font-semibold block">
                  AI RECOMMENDATION
                </span>
                <h5 className="font-zentry text-lg uppercase text-white font-bold">
                  OPTIMAL ACTION: RESEQUENCE + EQUIPMENT REDEPLOYMENT
                </h5>
                <p className="text-xs font-circular-web text-white/70">
                  Compounding spatial bench re-sequencing with 4-unit hauler redeployment delivers 101,000 T with zero overtime cost.
                </p>
              </div>
            </div>

            {/* Big Status Badge: SHORTFALL -> PREVENTED */}
            <div className={`mt-6 p-4 rounded-2xl border text-center transition-all duration-500 ${
              isTargetAchieved
                ? 'bg-emerald-950/60 border-emerald-400/50 shadow-lg shadow-emerald-500/20'
                : 'bg-amber-950/60 border-amber-400/50'
            }`}>
              <div className="flex items-center justify-center gap-2 font-zentry text-xl sm:text-2xl uppercase font-black tracking-wide text-white">
                {isTargetAchieved ? (
                  <>
                    <HiCheckCircle className="text-emerald-400 text-2xl animate-bounce" />
                    <span>SHORTFALL → <span className="text-emerald-400">PREVENTED</span></span>
                    {isOptimalCombo && (
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/40 ml-2 font-normal">
                        ★ OPTIMAL LEVERS
                      </span>
                    )}
                  </>
                ) : (
                  <span>SELECT MORE LEVERS TO RESOLVE GAP</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIfEngine;
