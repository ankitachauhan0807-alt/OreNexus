import { useState } from 'react';
import AnimatedTitle from './AnimatedTitle';
import { HiViewfinderCircle, HiShieldCheck } from 'react-icons/hi2';

const zones = [
  {
    id: 'D7',
    name: 'ZONE D7',
    prospectivity: 'HIGH',
    prospectivityScore: 94,
    confidence: '87%',
    mnGrade: '46.2% Mn',
    depth: '120m - 185m',
    volume: '1.82M Tonnes',
    risk: 'LOW RISK',
    status: 'OPTIMAL VEIN',
    anomaly: '+4.8σ Gravimetric Peak',
    grid: [
      ['░', '░', '▒', '▒', '▓', '▓', '█', '█', '█', '█'],
      ['░', '▒', '▒', '▓', '█', '█', '█', '█', '█', '█'],
      ['░', '░', '▒', '▓', '▓', '█', '█', '█', '█', '▓'],
      ['░', '▒', '▓', '▓', '█', '█', '█', '█', '▓', '▒'],
    ]
  },
  {
    id: 'C4',
    name: 'ZONE C4',
    prospectivity: 'MODERATE-HIGH',
    prospectivityScore: 78,
    confidence: '81%',
    mnGrade: '38.5% Mn',
    depth: '80m - 140m',
    volume: '1.15M Tonnes',
    risk: 'MEDIUM RISK',
    status: 'SECONDARY TARGET',
    anomaly: '+2.9σ Magnetic Gradient',
    grid: [
      ['░', '░', '░', '▒', '▒', '▓', '▓', '█', '▓', '▒'],
      ['░', '░', '▒', '▒', '▓', '▓', '▓', '█', '▓', '▒'],
      ['░', '░', '░', '▒', '▓', '▓', '█', '▓', '▒', '░'],
      ['░', '░', '░', '▒', '▒', '▓', '▓', '▒', '░', '░'],
    ]
  },
  {
    id: 'B2',
    name: 'ZONE B2',
    prospectivity: 'MODERATE',
    prospectivityScore: 62,
    confidence: '74%',
    mnGrade: '32.1% Mn',
    depth: '40m - 90m',
    volume: '840K Tonnes',
    risk: 'MEDIUM-HIGH RISK',
    status: 'INFILL REQUIRED',
    anomaly: '+1.6σ Resistivity Drop',
    grid: [
      ['░', '░', '░', '░', '▒', '▒', '▓', '▒', '░', '░'],
      ['░', '░', '░', '▒', '▒', '▓', '▓', '▒', '░', '░'],
      ['░', '░', '░', '░', '▒', '▓', '▒', '░', '░', '░'],
      ['░', '░', '░', '░', '░', '▒', '░', '░', '░', '░'],
    ]
  },
  {
    id: 'A1',
    name: 'ZONE A1',
    prospectivity: 'LOW-MODERATE',
    prospectivityScore: 45,
    confidence: '68%',
    mnGrade: '24.8% Mn',
    depth: '160m - 240m',
    volume: '420K Tonnes',
    risk: 'HIGH UNCERTAINTY',
    status: 'FAULTED STRATA',
    anomaly: '+0.4σ Baseline Noise',
    grid: [
      ['░', '░', '░', '░', '░', '▒', '░', '░', '░', '░'],
      ['░', '░', '░', '░', '▒', '▒', '░', '░', '░', '░'],
      ['░', '░', '░', '░', '░', '░', '░', '░', '░', '░'],
      ['░', '░', '░', '░', '░', '░', '░', '░', '░', '░'],
    ]
  }
];

const ReserveIntelligence = () => {
  const [selectedZone, setSelectedZone] = useState(zones[0]);

  return (
    <section id="reserve-intelligence" className="bg-black py-28 text-white relative overflow-hidden">
      {/* Geological Scanning Background Grid */}
      <div className="absolute inset-0 radar-grid opacity-25 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-10 relative z-10">
        {/* Section Header */}
        <div className="text-center flex flex-col items-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/60 border border-violet-500/40 text-violet-300 text-xs font-mono tracking-widest uppercase mb-4">
            <HiViewfinderCircle className="text-amber-400 text-sm" />
            SUBSURFACE AI RADIOGRAPHY
          </div>
          
          {/* Huge Heading */}
          <AnimatedTitle
            title="SEE B<b>E</b>NEATH."
            containerClass="!text-white text-center"
          />

          {/* Subheading */}
          <p className="mt-4 max-w-2xl font-circular-web text-base sm:text-lg text-blue-50/80 leading-relaxed">
            AI combines geological, drilling and satellite indicators to identify areas with higher manganese prospectivity.
          </p>
        </div>

        {/* Interactive Prospectivity Map & HUD Scanner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Interactive Map & Density Heatmap */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl border border-white/10 bg-ore-card shadow-2xl flex flex-col justify-between backdrop-blur-md">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4 mb-6">
                <div>
                  <h3 className="font-zentry text-2xl uppercase text-white font-bold tracking-wide">
                    MANGANESE PROSPECTIVITY SCANNER
                  </h3>
                  <p className="text-xs font-mono text-white/50">
                    SPECTRAL DENSITY & 3D INVERSION MODEL
                  </p>
                </div>
                
                {/* Zone Selectors */}
                <div className="flex items-center gap-2">
                  {zones.map((zone) => (
                    <button
                      key={zone.id}
                      onClick={() => setSelectedZone(zone)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                        selectedZone.id === zone.id
                          ? 'bg-amber-400 text-black shadow-lg shadow-amber-500/30'
                          : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
                      }`}
                    >
                      {zone.id}
                    </button>
                  ))}
                </div>
              </div>

              {/* Prospectivity Gradient Scale Bar */}
              <div className="mb-6 p-4 rounded-xl bg-black/40 border border-white/5">
                <div className="flex justify-between items-center text-xs font-mono text-white/60 mb-2">
                  <span>LOW</span>
                  <span className="text-amber-400 font-bold">MANGANESE GRADE SPECTRUM</span>
                  <span>HIGH</span>
                </div>
                <div className="h-3 w-full rounded-full bg-gradient-to-r from-slate-900 via-purple-900 via-violet-600 to-amber-400 p-[1px]">
                  <div className="size-full rounded-full bg-transparent"></div>
                </div>
              </div>

              {/* Density Block Matrix (ASCII & Heatmap Visual) */}
              <div className="p-6 rounded-2xl bg-black/80 border border-violet-500/20 font-mono text-base sm:text-xl tracking-widest leading-loose select-none overflow-x-auto">
                <div className="flex flex-col gap-1">
                  {selectedZone.grid.map((row, rIdx) => (
                    <div key={rIdx} className="flex gap-1.5 items-center justify-center">
                      {row.map((char, cIdx) => {
                        let color = "text-slate-700";
                        if (char === '▒') color = "text-purple-400";
                        if (char === '▓') color = "text-violet-400 text-glow";
                        if (char === '█') color = "text-amber-400 text-glow-amber font-black";
                        return (
                          <span key={cIdx} className={`${color} transition-all duration-300 hover:scale-125 cursor-crosshair`}>
                            {char}
                          </span>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Radar Coordinates & Anomaly Footer */}
            <div className="mt-6 flex flex-wrap items-center justify-between text-xs font-mono text-white/50 border-t border-white/10 pt-4">
              <span>LAT: -22.4182° | LON: +119.8241°</span>
              <span className="text-violet-300">{selectedZone.anomaly}</span>
            </div>
          </div>

          {/* Right Column: Zone Inspection HUD Card */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl border border-violet-500/30 bg-gradient-to-br from-violet-950/40 via-ore-card to-black shadow-2xl flex flex-col justify-between backdrop-blur-xl">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <span className="text-xs font-mono tracking-widest text-amber-300 uppercase">
                  GEO-TELEMETRY HUD
                </span>
                <span className="px-2.5 py-1 rounded bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-mono font-semibold">
                  {selectedZone.status}
                </span>
              </div>

              {/* Main Zone Display */}
              <div className="mb-6">
                <span className="text-xs font-mono text-white/50 uppercase">TARGET DOMAIN</span>
                <h2 className="font-zentry text-4xl sm:text-5xl uppercase text-white font-black tracking-wide mt-1">
                  {selectedZone.name}
                </h2>
              </div>

              {/* Telemetry Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[10px] font-mono text-white/60 uppercase">PROSPECTIVITY</span>
                  <div className="font-zentry text-2xl uppercase text-amber-400 font-bold mt-1">
                    {selectedZone.prospectivity}
                  </div>
                  <span className="text-xs font-mono text-white/40">
                    Index: {selectedZone.prospectivityScore}/100
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[10px] font-mono text-white/60 uppercase">CONFIDENCE</span>
                  <div className="font-zentry text-2xl uppercase text-violet-300 font-bold mt-1">
                    {selectedZone.confidence}
                  </div>
                  <span className="text-xs font-mono text-white/40">
                    Bayesian Inversion
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[10px] font-mono text-white/60 uppercase">MANGANESE GRADE</span>
                  <div className="font-zentry text-xl uppercase text-white font-bold mt-1">
                    {selectedZone.mnGrade}
                  </div>
                  <span className="text-xs font-mono text-white/40">High Metallurgical Yield</span>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[10px] font-mono text-white/60 uppercase">DEPTH LAYER</span>
                  <div className="font-zentry text-xl uppercase text-white font-bold mt-1">
                    {selectedZone.depth}
                  </div>
                  <span className="text-xs font-mono text-white/40">Open-Pit Accessible</span>
                </div>
              </div>

              {/* Geological Strata Ground Truth Feed */}
              <div className="mt-4 relative h-36 w-full rounded-2xl overflow-hidden border border-white/10 group">
                <img
                  src="/img/Photo 4.jpg"
                  alt="Subsurface Manganese Ore Face Ground Truth"
                  className="size-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex items-end p-3">
                  <span className="text-[10px] font-mono text-violet-300 flex items-center gap-1.5">
                    <span className="size-2 rounded-full bg-violet-400 animate-ping" />
                    SUB-SURFACE STRATA VALIDATION // {selectedZone.name} ORE EXTRACTION CHAMBER
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Verification Metric */}
            <div className="mt-4 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <HiShieldCheck className="text-amber-400 text-2xl" />
                <div>
                  <h4 className="font-general text-xs font-bold text-white uppercase">
                    ESTIMATED RECOVERABLE ORE
                  </h4>
                  <p className="text-xs font-mono text-amber-300">
                    {selectedZone.volume} @ High Confidence
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

export default ReserveIntelligence;
