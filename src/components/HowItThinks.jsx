import { useState, useEffect } from 'react';
import AnimatedTitle from './AnimatedTitle';
import { HiOutlineSparkles, HiCpuChip, HiGlobeAmericas, HiCircleStack, HiWrenchScrewdriver, HiCloud } from 'react-icons/hi2';

const dataStreams = [
  {
    id: 'space',
    icon: '🛰️',
    name: 'SPACE',
    subtitle: 'Hyperspectral & InSAR Radar',
    metric: '12-Band Earth Observation',
    feed: 'Satellite surface alteration mapping, terrain moisture, fault displacement',
    pulseRate: '1.2 Hz',
    color: 'from-blue-500 to-indigo-600',
    border: 'border-blue-400/40',
    glow: 'shadow-blue-500/20',
    samples: '48.2 GB/day'
  },
  {
    id: 'geology',
    icon: '🪨',
    name: 'GEOLOGY',
    subtitle: 'Structural Lithology & Geophysics',
    metric: '3D Stratigraphic Voxel Mesh',
    feed: 'Magnetic dipole survey, gravity gradients, structural joint orientations',
    pulseRate: '2.4 Hz',
    color: 'from-purple-500 to-violet-700',
    border: 'border-purple-400/40',
    glow: 'shadow-purple-500/20',
    samples: '1.4M voxels'
  },
  {
    id: 'drilling',
    icon: '⛏️',
    name: 'DRILLING',
    subtitle: 'RC & Diamond Core Assays',
    metric: '99.2% Assay Assay Accuracy',
    feed: 'XRF manganese grade, RQD core recovery, density pycnometry logs',
    pulseRate: '3.1 Hz',
    color: 'from-amber-500 to-orange-600',
    border: 'border-amber-400/40',
    glow: 'shadow-amber-500/20',
    samples: '12,400 assays'
  },
  {
    id: 'operations',
    icon: '⚙️',
    name: 'OPERATIONS',
    subtitle: 'Fleet Telematics & Dispatch',
    metric: 'Real-time Shovel Payloads',
    feed: 'CAT 789D haul cycle times, crusher choke levels, dig bench congestion',
    pulseRate: '10 Hz',
    color: 'from-cyan-500 to-teal-600',
    border: 'border-cyan-400/40',
    glow: 'shadow-cyan-500/20',
    samples: '84 assets online'
  },
  {
    id: 'weather',
    icon: '🌧️',
    name: 'WEATHER',
    subtitle: 'Micro-Climate & Hydro Models',
    metric: 'Predictive Pit Inflow',
    feed: 'Monsoon precipitation radar, haul road rolling resistance forecasts',
    pulseRate: '0.5 Hz',
    color: 'from-emerald-500 to-green-700',
    border: 'border-emerald-400/40',
    glow: 'shadow-emerald-500/20',
    samples: '0.1mm rain radar'
  }
];

const HowItThinks = () => {
  const [activeStream, setActiveStream] = useState(0);
  const [packetCounter, setPacketCounter] = useState(148920);

  useEffect(() => {
    const interval = setInterval(() => {
      setPacketCounter((prev) => prev + Math.floor(Math.random() * 25) + 5);
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="how-it-thinks" className="bg-ore-dark py-28 text-white relative overflow-hidden">
      {/* Dynamic Background Scanning Grid */}
      <div className="absolute inset-0 radar-grid-fine opacity-15 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-10 relative z-10">
        <div className="text-center flex flex-col items-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/60 border border-violet-500/40 text-violet-300 text-xs font-mono tracking-widest uppercase mb-4">
            <HiCpuChip className="text-amber-400 animate-spin" />
            MULTI-LAYER DATA INGESTION MATRIX
          </div>
          <AnimatedTitle
            title="HOW <b>O</b>RENEXUS THINKS"
            containerClass="!text-white text-center"
          />
          <p className="mt-4 max-w-2xl font-circular-web text-base sm:text-lg text-blue-50/80 leading-relaxed">
            Five heterogeneous data streams fuse simultaneously into a unified deep-learning core to predict rock variability and operational friction before shovel hits ore.
          </p>
        </div>

        {/* Interactive Ingestion Pipeline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: 5 Data Streams list */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            <span className="text-xs font-mono text-white/50 tracking-widest uppercase mb-1">
              INPUT DATA PIPELINES (LIVE TELEMETRY)
            </span>
            {dataStreams.map((stream, idx) => (
              <div
                key={stream.id}
                onClick={() => setActiveStream(idx)}
                className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer backdrop-blur-md ${
                  activeStream === idx
                    ? `bg-white/10 ${stream.border} ${stream.glow} translate-x-2`
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{stream.icon}</span>
                    <div>
                      <h4 className="font-zentry text-lg tracking-wide uppercase text-white font-bold">
                        {stream.name}
                      </h4>
                      <p className="text-xs font-mono text-white/60">
                        {stream.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-amber-300">
                      {stream.pulseRate}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Center/Right: Glowing OreNexus AI Neural Aggregation Core */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div className="relative w-full max-w-lg p-8 rounded-3xl border border-violet-500/30 bg-gradient-to-b from-violet-950/40 via-black to-ore-dark shadow-2xl backdrop-blur-xl">
              {/* Scanline effect */}
              <div className="absolute inset-0 scanline pointer-events-none rounded-3xl opacity-30"></div>

              {/* Header Info */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-violet-500"></span>
                  </span>
                  <span className="font-mono text-xs text-violet-300 uppercase tracking-widest font-semibold">
                    ORENEXUS NEURAL ENGINE
                  </span>
                </div>
                <span className="font-mono text-xs text-amber-400">
                  {packetCounter.toLocaleString()} PKTS INGESTED
                </span>
              </div>

              {/* Active Stream Inspector */}
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[10px] font-mono uppercase text-amber-300 tracking-wider">
                    CURRENT FOCUS FEED: {dataStreams[activeStream].name}
                  </span>
                  <p className="text-sm font-circular-web text-white mt-1 leading-relaxed">
                    {dataStreams[activeStream].feed}
                  </p>
                  <div className="mt-3 flex items-center justify-between text-xs font-mono text-white/70">
                    <span>BANDWIDTH: {dataStreams[activeStream].samples}</span>
                    <span className="text-emerald-400">STATUS: OPTIMAL FUSION</span>
                  </div>
                </div>

                {/* Visual Neural Node Fusion Animation */}
                <div className="relative py-6 flex flex-col items-center">
                  <div className="relative size-32 rounded-full border-2 border-dashed border-violet-500/60 animate-spin flex items-center justify-center"></div>
                  
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-24 rounded-full bg-gradient-to-tr from-violet-600 via-purple-500 to-amber-400 p-[2px] shadow-2xl shadow-violet-500/50">
                    <div className="size-full rounded-full bg-black flex flex-col items-center justify-center">
                      <HiOutlineSparkles className="text-amber-300 text-2xl animate-pulse" />
                      <span className="font-zentry text-[11px] uppercase tracking-wider text-white font-bold mt-1">
                        AI ENGINE
                      </span>
                    </div>
                  </div>
                </div>

                {/* Output Banner */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-violet-900/40 via-purple-900/30 to-amber-900/40 border border-violet-400/40 text-center">
                  <span className="text-xs font-mono tracking-widest text-violet-200 uppercase">
                    OUTPUT: SYNTHETIC MINING INTELLIGENCE
                  </span>
                  <div className="mt-1 font-zentry text-lg sm:text-xl uppercase text-white font-bold tracking-wide">
                    PROSPECTIVITY + PRODUCTION FORECAST + ACTIONABLE DISPATCH
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItThinks;
