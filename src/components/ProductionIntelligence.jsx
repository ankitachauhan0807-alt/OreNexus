import AnimatedTitle from './AnimatedTitle';
import { HiTruck, HiCloud, HiFire, HiArrowTrendingDown } from 'react-icons/hi2';

const causes = [
  {
    id: 'equipment',
    icon: <HiTruck className="text-amber-400 text-2xl" />,
    title: 'EQUIPMENT DOWNTIME',
    impact: '−6,500 T',
    pct: '50% of shortfall',
    reason: 'Unscheduled hydraulic maintenance on Shovel #3 & 2 Haul Trucks down on ramp.',
    color: 'border-amber-500/40 bg-amber-950/20'
  },
  {
    id: 'weather',
    icon: <HiCloud className="text-blue-400 text-2xl" />,
    title: 'WEATHER IMPACT',
    impact: '−4,200 T',
    pct: '32% of shortfall',
    reason: 'Forecasted heavy monsoon precipitation causing pit floor saturation and speed limits.',
    color: 'border-blue-500/40 bg-blue-950/20'
  },
  {
    id: 'blasting',
    icon: <HiFire className="text-red-400 text-2xl" />,
    title: 'BLASTING DELAYS',
    impact: '−2,300 T',
    pct: '18% of shortfall',
    reason: 'Secondary boulder oversize fragmentation requiring additional hydraulic hammer breaking.',
    color: 'border-red-500/40 bg-red-950/20'
  }
];

const ProductionIntelligence = () => {
  return (
    <section id="production-intelligence" className="bg-black py-28 text-white relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 radar-grid opacity-20 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="text-center flex flex-col items-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs font-mono tracking-widest uppercase mb-4">
            <HiArrowTrendingDown className="text-cyan-400 text-sm" />
            DYNAMIC OPERATIONAL YIELD FORECAST
          </div>

          <AnimatedTitle
            title="KN<b>O</b>W WHAT YOU CAN DELIVER."
            containerClass="!text-white text-center"
          />

          <p className="mt-4 max-w-2xl font-circular-web text-base sm:text-lg text-blue-50/80 leading-relaxed">
            Transitioning from subsurface reserve potential to actual mine pit operations, OreNexus predicts bottlenecks weeks ahead.
          </p>
        </div>

        {/* 3 Main Metric Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Target */}
          <div className="p-8 rounded-3xl border border-white/10 bg-ore-card shadow-2xl backdrop-blur-md text-center">
            <span className="text-xs font-mono tracking-widest text-white/50 uppercase">
              COMMITTED PRODUCTION TARGET
            </span>
            <div className="font-zentry text-4xl sm:text-5xl uppercase text-white font-black mt-2">
              100,000 T
            </div>
            <span className="text-xs font-mono text-emerald-400 mt-2 block">
              100% Monthly Quota
            </span>
          </div>

          {/* AI Forecast */}
          <div className="p-8 rounded-3xl border border-violet-500/30 bg-violet-950/20 shadow-2xl backdrop-blur-md text-center">
            <span className="text-xs font-mono tracking-widest text-violet-300 uppercase">
              AI REALITY FORECAST
            </span>
            <div className="font-zentry text-4xl sm:text-5xl uppercase text-violet-200 font-black mt-2">
              87,000 T
            </div>
            <span className="text-xs font-mono text-violet-400 mt-2 block">
              87% Realizable Yield
            </span>
          </div>

          {/* Shortfall */}
          <div className="p-8 rounded-3xl border border-red-500/40 bg-red-950/30 shadow-2xl backdrop-blur-md text-center ring-1 ring-red-500/30">
            <span className="text-xs font-mono tracking-widest text-red-300 uppercase">
              PREDICTED SHORTFALL
            </span>
            <div className="font-zentry text-4xl sm:text-5xl uppercase text-red-400 font-black mt-2 animate-pulse text-glow">
              −13,000 T
            </div>
            <span className="text-xs font-mono text-red-300 mt-2 block">
              13% Quota Deficit
            </span>
          </div>
        </div>

        {/* Animated Root Causes Breakdown */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-4 px-2">
            <span className="text-xs font-mono text-white/50 tracking-widest uppercase">
              ROOT CAUSE ATTRIBUTION
            </span>
            <span className="text-xs font-mono text-amber-400">
              AGGREGATE IMPACT: −13,000 T
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {causes.map((cause) => (
              <div
                key={cause.id}
                className={`p-6 rounded-2xl border backdrop-blur-md transition-all duration-300 ${cause.color} hover:scale-105 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    {cause.icon}
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-white/10 text-white">
                      {cause.impact}
                    </span>
                  </div>
                  <h4 className="font-zentry text-xl uppercase text-white font-bold tracking-wide">
                    {cause.title}
                  </h4>
                  <p className="mt-2 text-xs font-circular-web text-white/70 leading-relaxed">
                    {cause.reason}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 text-[10px] font-mono text-white/50">
                  {cause.pct}
                </div>
              </div>
            ))}
          </div>

          {/* Real-Time Mine Haulage & Crusher Feed Monitor */}
          <div className="mt-12 rounded-3xl border border-white/10 bg-ore-card overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-12">
              <div className="md:col-span-6 relative min-h-64 group overflow-hidden">
                <img
                  src="/img/Photo 5.jpg"
                  alt="Haul Trucks at Primary Crusher Conveyor"
                  className="size-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-[10px] font-mono text-amber-300 flex items-center gap-1.5 px-2 py-1 rounded bg-black/70 border border-amber-400/30">
                    <span className="size-2 rounded-full bg-amber-400 animate-ping" />
                    FEED STATION #02: CRUSHER CONVEYOR RAMP
                  </span>
                </div>
              </div>
              <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block mb-1">
                    PRIMARY CRUSHER BOTTLENECK ANALYSIS
                  </span>
                  <h4 className="font-zentry text-2xl uppercase text-white font-bold">
                    HAUL TRUCK STAGING AT CONVEYOR 02
                  </h4>
                  <p className="mt-2 text-xs font-circular-web text-blue-50/80 leading-relaxed">
                    Real-time telematics detect queue congestion at the primary crusher feed ramp. OreNexus dynamically re-routes 4 haul trucks to intermediate surge piles, averting −6,500 T in mill starvation.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/50">
                  <span>UNMITIGATED SHORTFALL: −13,000 T</span>
                  <span className="text-amber-300 font-bold">DISPATCH RESOLVED ↗</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductionIntelligence;
