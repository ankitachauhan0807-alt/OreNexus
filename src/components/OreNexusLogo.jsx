import { useState, useRef } from 'react';
import { HiCpuChip, HiXMark, HiArrowTopRightOnSquare } from 'react-icons/hi2';
import { FaSatellite, FaSatelliteDish } from 'react-icons/fa6';
import { GiMinerals } from 'react-icons/gi';

/**
 * OreNexusLogo Component
 * Designed for Problem Statement ID: 26009
 * Title: Using AI/ML and Space Technology to Identify Manganese Reserves and Overcome Production Shortfalls
 * Organization: Ministry of Steel | Department: MOIL Ltd.
 */
const OreNexusLogo = ({
  variant = 'navbar',
  showText = true,
  showTagline = true,
  showBadge = true,
  className = '',
  onClick = null,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const logoRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!logoRef.current) return;
    const rect = logoRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -16;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  const handleLogoClick = (e) => {
    if (onClick) {
      onClick(e);
      return;
    }
    // Open the Statement 26009 Interactive Dossier Modal
    setIsModalOpen(true);
  };

  // Dimensions based on variant
  const sizeMap = {
    navbar: { box: 'size-10 sm:size-11', svg: 44 },
    hero: { box: 'size-16 sm:size-20 md:size-24', svg: 88 },
    footer: { box: 'size-12', svg: 48 },
    compact: { box: 'size-9', svg: 36 },
    large: { box: 'size-28', svg: 112 },
  };

  const currentSize = sizeMap[variant] || sizeMap.navbar;

  return (
    <>
      <div
        ref={logoRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        onClick={handleLogoClick}
        className={`relative inline-flex items-center gap-3 cursor-pointer select-none group transition-all duration-300 ${className}`}
        style={{
          transform: `perspective(600px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        }}
        title="Click to view Problem Statement 26009 & MOIL Satellite AI System Dossier"
      >
        {/* Animated Vector Emblem Container */}
        <div
          className={`relative ${currentSize.box} rounded-2xl p-[1.5px] bg-gradient-to-br from-violet-500 via-amber-400 to-emerald-400 transition-all duration-500 ${
            isHovered
              ? 'shadow-[0_0_25px_rgba(245,158,11,0.5),0_0_40px_rgba(139,92,246,0.4)] scale-105'
              : 'shadow-[0_0_15px_rgba(139,92,246,0.25)]'
          }`}
        >
          {/* Internal Dark Glass Capsule */}
          <div className="size-full rounded-[14px] bg-[#07090E]/95 backdrop-blur-md flex items-center justify-center overflow-hidden relative">
            {/* Background Ambient Radial Glow */}
            <div
              className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${
                isHovered
                  ? 'opacity-80 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.35),transparent_70%)]'
                  : 'opacity-40 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.2),transparent_70%)]'
              }`}
            />

            {/* Core Scalable Vector Logo */}
            <svg
              viewBox="0 0 100 100"
              className="size-full relative z-10 transition-transform duration-500 ease-out"
            >
              <defs>
                {/* Manganese Crystal Violet Gradient */}
                <linearGradient id="mnCrystalViolet" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C084FC" />
                  <stop offset="50%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#4C1D95" />
                </linearGradient>

                {/* Manganese High-Grade Mineral Vein (Gold/Amber) */}
                <linearGradient id="mnGoldVein" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FDE047" />
                  <stop offset="50%" stopColor="#F59E0B" />
                  <stop offset="100%" stopColor="#B45309" />
                </linearGradient>

                {/* Pyrolusite Dark Metallic Strata */}
                <linearGradient id="mnObsidian" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#312E81" />
                  <stop offset="100%" stopColor="#0B0F19" />
                </linearGradient>

                {/* Satellite Radar Beam Conical Gradient */}
                <linearGradient id="radarBeamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06D6A0" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#06D6A0" stopOpacity="0" />
                </linearGradient>

                {/* Orbit Ellipse Rim Gradient */}
                <linearGradient id="orbitRimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FBBF24" />
                  <stop offset="50%" stopColor="#A855F7" />
                  <stop offset="100%" stopColor="#06D6A0" />
                </linearGradient>

                {/* Glow Filter for Hover State */}
                <filter id="vectorGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* 1. SUB-SURFACE GEOLOGICAL RADAR SOUNDING WAVES (0-450m Reserve Depth) */}
              <g
                className="transition-opacity duration-300"
                opacity={isHovered ? '0.95' : '0.55'}
              >
                {/* 150m Depth Wave */}
                <path
                  d="M 28 68 A 24 24 0 0 0 72 68"
                  fill="none"
                  stroke="#06D6A0"
                  strokeWidth="1.2"
                  strokeDasharray="3 3"
                  className={isHovered ? 'animate-pulse' : ''}
                />
                {/* 300m Depth Wave */}
                <path
                  d="M 20 76 A 34 34 0 0 0 80 76"
                  fill="none"
                  stroke="#38BDF8"
                  strokeWidth="1.2"
                  strokeDasharray="4 3"
                  className={isHovered ? 'animate-pulse' : ''}
                />
                {/* 450m Depth Wave */}
                <path
                  d="M 12 84 A 44 44 0 0 0 88 84"
                  fill="none"
                  stroke="#818CF8"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                  opacity="0.6"
                />
              </g>

              {/* 2. REVOLVING 360° SATELLITE RADAR SCANNER SWEEP */}
              <g
                className={isHovered ? 'animate-radar-sweep-continuous' : ''}
                style={{
                  transformOrigin: '50px 50px',
                  animationDuration: isHovered ? '3s' : '10s',
                }}
              >
                <path
                  d="M 50 50 L 50 8 A 42 42 0 0 1 82 24 Z"
                  fill="url(#radarBeamGrad)"
                  opacity={isHovered ? '0.35' : '0.15'}
                />
                <line
                  x1="50"
                  y1="50"
                  x2="50"
                  y2="8"
                  stroke="#06D6A0"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  opacity={isHovered ? '0.8' : '0.35'}
                />
              </g>

              {/* 3. TILTED SATELLITE SPACE ORBIT TRACK (Low Earth Orbit 28° Angle) */}
              <g transform="rotate(-26 50 50)">
                {/* Elliptical Track Ring */}
                <ellipse
                  cx="50"
                  cy="50"
                  rx="43"
                  ry="17"
                  fill="none"
                  stroke="url(#orbitRimGrad)"
                  strokeWidth="1.4"
                  strokeDasharray={isHovered ? '6 3' : '4 4'}
                  opacity={isHovered ? '0.9' : '0.6'}
                  className={isHovered ? 'animate-data-stream' : ''}
                />

                {/* Orbiting Satellite Node Group (Rotates along the orbit path) */}
                <g
                  className={isHovered ? 'animate-orbit-fast' : 'animate-orbit-slow'}
                  style={{
                    transformOrigin: '50px 50px',
                    animationDuration: isHovered ? '4s' : '14s',
                  }}
                >
                  {/* The Satellite Body at the top perimeter (50, 33) in unrotated ellipse */}
                  <g transform="translate(50, 33)">
                    {/* Radar Target Beam to Core */}
                    <line
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="17"
                      stroke="#FDE047"
                      strokeWidth="1"
                      strokeDasharray="2 2"
                      opacity={isHovered ? '0.8' : '0.4'}
                    />

                    {/* Left Solar Panel */}
                    <rect
                      x="-7.5"
                      y="-2"
                      width="5"
                      height="4"
                      rx="0.8"
                      fill="#38BDF8"
                      stroke="#0284C7"
                      strokeWidth="0.5"
                    />
                    {/* Right Solar Panel */}
                    <rect
                      x="2.5"
                      y="-2"
                      width="5"
                      height="4"
                      rx="0.8"
                      fill="#38BDF8"
                      stroke="#0284C7"
                      strokeWidth="0.5"
                    />
                    {/* Satellite Central Chassis */}
                    <rect
                      x="-2.5"
                      y="-2.5"
                      width="5"
                      height="5"
                      rx="1"
                      fill="#F59E0B"
                      stroke="#FFFFFF"
                      strokeWidth="0.6"
                    />
                    {/* Sensor Dish / Beacon Dot */}
                    <circle cx="0" cy="0" r="1.2" fill="#FFFFFF" />
                    <circle
                      cx="0"
                      cy="0"
                      r="2.5"
                      fill="#FBBF24"
                      opacity="0.6"
                      className="animate-ping"
                    />
                  </g>
                </g>
              </g>

              {/* 4. MANGANESE ORE CRYSTALLINE CORE (Isometric Octahedral Facets) */}
              <g
                className="transition-transform duration-300"
                style={{
                  filter: isHovered
                    ? 'drop-shadow(0 0 6px rgba(245, 158, 11, 0.8))'
                    : 'drop-shadow(0 0 3px rgba(139, 92, 246, 0.5))',
                }}
              >
                {/* Outer Facet 1: Top Apex (Light Violet Specular Highlight) */}
                <polygon
                  points="50,22 33,34 50,48"
                  fill="url(#mnCrystalViolet)"
                  stroke="#E9D5FF"
                  strokeWidth="0.7"
                />

                {/* Outer Facet 2: Top Right Gold Mineral Vein (Manganese Rich Deposit) */}
                <polygon
                  points="50,22 67,34 50,48"
                  fill="url(#mnGoldVein)"
                  stroke="#FDE047"
                  strokeWidth="0.7"
                />

                {/* Outer Facet 3: Mid Left Pyrolusite Slate (Subsurface Mineral Base) */}
                <polygon
                  points="33,34 33,64 50,48"
                  fill="url(#mnObsidian)"
                  stroke="#6366F1"
                  strokeWidth="0.6"
                />

                {/* Outer Facet 4: Mid Right Deep Violet Lustre */}
                <polygon
                  points="67,34 67,64 50,48"
                  fill="url(#mnCrystalViolet)"
                  stroke="#C084FC"
                  strokeWidth="0.6"
                />

                {/* Outer Facet 5: Bottom Left Strata */}
                <polygon
                  points="33,64 50,78 50,48"
                  fill="url(#mnObsidian)"
                  stroke="#818CF8"
                  strokeWidth="0.6"
                />

                {/* Outer Facet 6: Bottom Right Amber Vein */}
                <polygon
                  points="67,64 50,78 50,48"
                  fill="url(#mnGoldVein)"
                  stroke="#F59E0B"
                  strokeWidth="0.7"
                />

                {/* Inner Crystalline Fracture / Vein Lines */}
                <line x1="50" y1="22" x2="50" y2="78" stroke="#FFFFFF" strokeWidth="0.7" opacity="0.4" />
                <line x1="33" y1="34" x2="67" y2="64" stroke="#FDE047" strokeWidth="0.8" opacity="0.6" />
                <line x1="33" y1="64" x2="67" y2="34" stroke="#C084FC" strokeWidth="0.8" opacity="0.6" />

                {/* Central Nexus Monogram (Stylized 'ON' with 'Mn-25' Resonance) */}
                <g transform="translate(50, 48)">
                  {/* Central Core Energy Dot */}
                  <circle
                    r="4.5"
                    fill="#0F172A"
                    stroke="#FBBF24"
                    strokeWidth="1.2"
                  />
                  {/* Inner Glowing Nucleus */}
                  <circle
                    r="2"
                    fill="#FDE047"
                    className={isHovered ? 'animate-ping' : ''}
                  />
                </g>
              </g>

              {/* 5. 4 CARDINAL AI/ML TELEMETRY CONSTELLATION NODES */}
              <g className="transition-opacity duration-300" opacity={isHovered ? '1' : '0.7'}>
                {/* North: Space Telemetry (Sentinel / InSAR) */}
                <circle cx="50" cy="8" r="2" fill="#06D6A0" stroke="#FFFFFF" strokeWidth="0.6" />
                {/* East: Reserve Estimation Engine (AI/ML) */}
                <circle cx="92" cy="50" r="2" fill="#A855F7" stroke="#FFFFFF" strokeWidth="0.6" />
                {/* South: Core Drill Subsurface Validation */}
                <circle cx="50" cy="92" r="2" fill="#38BDF8" stroke="#FFFFFF" strokeWidth="0.6" />
                {/* West: Shortfall Predictor & Dispatch */}
                <circle cx="8" cy="50" r="2" fill="#F59E0B" stroke="#FFFFFF" strokeWidth="0.6" />
              </g>
            </svg>
          </div>
        </div>

        {/* Brand Name & Statement Metadata Typography */}
        {showText && (
          <div className="flex flex-col text-left">
            <div className="flex items-center gap-2">
              <span className="font-zentry text-lg sm:text-xl tracking-wider text-white font-bold group-hover:text-amber-300 transition-colors">
                ORENEXUS
              </span>
              {showBadge && (
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-amber-400/10 border border-amber-400/30 text-[9px] font-mono text-amber-300 font-semibold tracking-wider">
                  <span className="size-1.5 rounded-full bg-amber-400 animate-ping" />
                  PS-26009
                </span>
              )}
            </div>

            {showTagline && (
              <div className="flex items-center gap-1.5 -mt-0.5">
                <span className="text-[10px] font-mono tracking-widest text-violet-300 uppercase font-medium">
                  Space & Manganese AI
                </span>
                <span className="text-[9px] font-mono text-white/40 hidden md:inline">
                  • MOIL Ltd.
                </span>
              </div>
            )}
          </div>
        )}

        {/* Floating Telemetry Hover HUD Pill (Shows on desktop hover for Navbar variant) */}
        {variant === 'navbar' && isHovered && (
          <div className="absolute top-full left-0 mt-3.5 w-72 p-3.5 rounded-xl bg-black/90 border border-violet-500/40 backdrop-blur-xl shadow-2xl z-50 text-left pointer-events-none transition-all duration-200">
            <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2">
              <span className="text-[10px] font-mono text-amber-300 font-bold tracking-wider flex items-center gap-1.5">
                <FaSatellite className="text-amber-400" />
                SIH STATEMENT ID: 26009
              </span>
              <span className="text-[9px] font-mono text-emerald-400 px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30">
                ACTIVE
              </span>
            </div>
            <p className="text-[11px] font-general text-blue-50/90 leading-tight">
              AI/ML & Space Technology to Identify Manganese Reserves & Overcome Production Shortfalls.
            </p>
            <div className="mt-2.5 pt-2 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-white/50">
              <span>ORG: MINISTRY OF STEEL</span>
              <span className="text-amber-300">CLICK FOR DOSSIER ↗</span>
            </div>
          </div>
        )}
      </div>

      {/* Full Problem Statement 26009 Mission Briefing Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-gradient-to-b from-[#0F131F] via-ore-card to-black border border-violet-500/40 shadow-2xl p-6 sm:p-10 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-white/10 pb-5 mb-6">
              <div className="flex items-center gap-4">
                <div className="size-14 rounded-2xl p-[1.5px] bg-gradient-to-br from-violet-500 via-amber-400 to-emerald-400">
                  <div className="size-full bg-black rounded-[14px] flex items-center justify-center">
                    <GiMinerals className="text-2xl text-amber-400 animate-pulse" />
                  </div>
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-mono font-bold">
                      STATEMENT ID 26009
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/40 text-xs font-mono">
                      THEME: SPACE TECHNOLOGY
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-xs font-mono">
                      CATEGORY: SOFTWARE
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-zentry font-black tracking-wide text-white mt-1">
                    MOIL LIMITED • MINISTRY OF STEEL
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/15 text-white/70 hover:text-white transition-colors"
                title="Close Modal"
              >
                <HiXMark className="text-xl" />
              </button>
            </div>

            {/* Problem Statement Title */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 mb-6">
              <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 block mb-1">
                Official Problem Statement Title
              </span>
              <h4 className="text-base sm:text-lg font-general font-semibold text-white leading-snug">
                Using AI/ML and Space Technology to Identify Manganese Reserves and Overcome Production Shortfalls
              </h4>
            </div>

            {/* Challenge & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {/* Background & Challenge */}
              <div className="p-5 rounded-2xl bg-black/50 border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-rose-400 text-xs font-mono uppercase tracking-wider mb-2 font-bold">
                    <span className="size-2 rounded-full bg-rose-500" />
                    The Mining Bottleneck
                  </div>
                  <p className="text-xs sm:text-sm text-blue-50/80 leading-relaxed">
                    MOIL Limited is the largest producer of Manganese Ore in India. Current reserve estimation and production planning rely on manual surveys, drill assays, and historical logs. These methods are slow and lead to expensive mismatches between expected and actual ore production.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-white/50">
                  Impact: Production deficits, unpredicted equipment idle time, blasting delays.
                </div>
              </div>

              {/* OreNexus Solution */}
              <div className="p-5 rounded-2xl bg-violet-950/30 border border-violet-500/30 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-2 font-bold">
                    <span className="size-2 rounded-full bg-emerald-500 animate-ping" />
                    The OreNexus AI Solution
                  </div>
                  <p className="text-xs sm:text-sm text-blue-50/80 leading-relaxed">
                    OreNexus fuses space technology inputs (satellite radar, rainfall, soil moisture, vegetation index NDVI, land surface temperature) with geological data, equipment telemetry, and core assays to map reserves and dynamically prevent shortfalls.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-amber-300">
                  Target: 98.6% Reserve Prospectivity Accuracy & Automated Blast Optimization.
                </div>
              </div>
            </div>

            {/* 4 Core Technological Capabilities */}
            <div className="mb-6">
              <h5 className="text-xs font-mono tracking-widest text-white/50 uppercase mb-3">
                Core Architectural Deliverables
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                  <FaSatellite className="text-amber-400 text-lg mt-0.5 shrink-0" />
                  <div>
                    <span className="font-bold text-white block">1. Space Remote Sensing</span>
                    <span className="text-white/60 text-[11px]">
                      Sentinel & Landsat multispectral bands: NDVI, soil moisture, land surface temperature, and InSAR subsidence.
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                  <HiCpuChip className="text-violet-400 text-lg mt-0.5 shrink-0" />
                  <div>
                    <span className="font-bold text-white block">2. Subsurface Reserve Mapping</span>
                    <span className="text-white/60 text-[11px]">
                      3D geostatistical modeling and machine learning to map manganese reserves up to 450m depth with Next-Best-Drill targeting.
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                  <FaSatelliteDish className="text-emerald-400 text-lg mt-0.5 shrink-0" />
                  <div>
                    <span className="font-bold text-white block">3. Production Shortfall Engine</span>
                    <span className="text-white/60 text-[11px]">
                      Predicts shortfalls by analyzing equipment downtime, weather impediments, crusher throughput, and blasting constraints.
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3">
                  <GiMinerals className="text-amber-300 text-lg mt-0.5 shrink-0" />
                  <div>
                    <span className="font-bold text-white block">4. Corrective Action Dispatch</span>
                    <span className="text-white/60 text-[11px]">
                      What-If simulator providing real-time recommendations: adjust mine schedules, optimize blasting, redeploy haulage fleets.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono text-white/50">
                <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                SYSTEM TWIN: MOIL MANGANESE CORRIDOR READY
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="#reserve-intelligence"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors flex items-center gap-1.5"
                >
                  Reserve Map
                  <HiArrowTopRightOnSquare />
                </a>
                <a
                  href="#what-if"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-300 text-black text-xs font-bold shadow-lg shadow-amber-500/20 hover:scale-105 transition-transform flex items-center gap-1.5"
                >
                  Launch What-If Engine
                  <HiArrowTopRightOnSquare />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OreNexusLogo;
