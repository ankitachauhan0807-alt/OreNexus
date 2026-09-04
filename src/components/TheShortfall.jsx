import { HiExclamationTriangle, HiArrowDown } from 'react-icons/hi2';

const TheShortfall = () => {
  return (
    <section id="shortfall" className="bg-ore-dark py-28 text-white relative overflow-hidden">
      {/* Background Warning Radar Grid */}
      <div className="absolute inset-0 radar-grid opacity-25 pointer-events-none"></div>

      {/* Ambient Cinematic Mine Video Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none overflow-hidden">
        <video
          src="/videos/Video 5.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="size-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ore-dark via-ore-dark/85 to-ore-dark" />
      </div>

      <div className="container mx-auto px-4 md:px-10 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          {/* Emergency Alert Indicator */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/80 border border-red-500 text-red-300 text-xs font-mono tracking-widest uppercase mb-8 animate-pulse shadow-lg shadow-red-500/30">
            <HiExclamationTriangle className="text-red-400 text-lg" />
            CRITICAL PRODUCTION DISCREPANCY DETECTED
          </div>

          {/* Huge Dramatic Alert Heading */}
          <div className="relative mb-6">
            <h1 className="special-font font-zentry text-6xl sm:text-8xl md:text-9xl font-black uppercase text-red-500 tracking-tight leading-none text-glow animate-pulse">
              13,000 T
            </h1>
            <span className="font-zentry text-3xl sm:text-5xl uppercase tracking-widest text-amber-400 font-bold block mt-2">
              AT RISK
            </span>
          </div>

          {/* Diagnostic 3-Question Grid */}
          <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-md">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-1">
                WHEN?
              </span>
              <h4 className="font-zentry text-2xl uppercase text-white font-bold">
                Next Production Cycle
              </h4>
              <p className="text-xs font-circular-web text-white/60 mt-1">
                Days 14–28 of the active monthly milling schedule.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-md">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-1">
                WHY?
              </span>
              <h4 className="font-zentry text-2xl uppercase text-white font-bold">
                Equipment + Weather + Blasting
              </h4>
              <p className="text-xs font-circular-web text-white/60 mt-1">
                Compounded operational bottlenecks cascading into haul delay.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-black/60 border border-white/10 backdrop-blur-md">
              <span className="text-xs font-mono text-red-400 uppercase tracking-widest block mb-1">
                IMPACT?
              </span>
              <h4 className="font-zentry text-2xl uppercase text-white font-bold text-red-300">
                Target Potentially Missed
              </h4>
              <p className="text-xs font-circular-web text-white/60 mt-1">
                $2.4M commercial supply contract delay penalties.
              </p>
            </div>
          </div>

          {/* Dramatic High-Voltage Transition Callout */}
          <div className="mt-16 flex flex-col items-center">
            <div className="p-1 rounded-full bg-gradient-to-r from-amber-500 via-violet-500 to-emerald-500 mb-6 shadow-xl shadow-amber-500/20">
              <div className="px-8 py-4 rounded-full bg-black/90 backdrop-blur-md">
                <span className="font-zentry text-2xl sm:text-4xl uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-purple-200 to-emerald-300 font-black">
                  BUT WHAT IF WE ACT NOW?
                </span>
              </div>
            </div>

            <a
              href="#what-if"
              className="flex items-center gap-2 text-xs font-mono text-amber-400 tracking-widest uppercase hover:text-white transition-colors"
            >
              <span>DISCOVER WHAT-IF SCENARIO ENGINE</span>
              <HiArrowDown className="animate-bounce" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheShortfall;
