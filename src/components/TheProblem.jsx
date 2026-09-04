import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import AnimatedTitle from "./AnimatedTitle";
import { HiExclamationTriangle, HiArrowDown } from 'react-icons/hi2';

gsap.registerPlugin(ScrollTrigger);

const TheProblem = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: '#problem-clip',
        start: 'center center',
        end: '+=800 center',
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to('.mask-clip-path-problem', {
      width: '100vw',
      height: '100vh',
      borderRadius: 0,
    });
  });

  const steps = [
    {
      title: "GEOLOGICAL RESERVE",
      badge: "In-Situ Model",
      desc: "Static resource estimations based on sparse drill samples.",
      color: "border-blue-300/40 text-blue-200",
      bg: "bg-blue-900/20"
    },
    {
      title: "UNCERTAINTY",
      badge: "❓ Risk Factor",
      desc: "Structural faults, grade variability, assay variances.",
      color: "border-amber-400/50 text-amber-300",
      bg: "bg-amber-950/30",
      isAlert: true
    },
    {
      title: "MINE PLANNING",
      badge: "Theoretical Schedule",
      desc: "Fixed monthly dig sequences and mill tonnage commitments.",
      color: "border-violet-400/40 text-violet-200",
      bg: "bg-violet-900/20"
    },
    {
      title: "EQUIPMENT / WEATHER / BLASTING",
      badge: "Operational Reality",
      desc: "Haul truck breakdowns, flash monsoon rains, poor blast fragmentation.",
      color: "border-amber-500/50 text-amber-300",
      bg: "bg-amber-950/30",
      isAlert: true
    },
    {
      title: "ACTUAL PRODUCTION",
      badge: "Mill Intake",
      desc: "What actually reaches the processing crusher vs expectation.",
      color: "border-cyan-400/40 text-cyan-200",
      bg: "bg-cyan-900/20"
    },
    {
      title: "GAP",
      badge: "⚠️ Shortfall Detected",
      desc: "Divergence between planned delivery and actual milled tonnage.",
      color: "border-red-500 text-red-400 animate-pulse",
      bg: "bg-red-950/40",
      isCritical: true
    }
  ];

  return (
    <div id="problem" className="min-h-screen w-screen bg-black text-white relative overflow-hidden">
      {/* Background Radar Lines */}
      <div className="absolute inset-0 radar-grid opacity-20 pointer-events-none"></div>

      <div className="relative mb-12 mt-28 flex flex-col items-center gap-6 px-4 md:px-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/40 border border-red-500/30 text-red-300 text-xs font-mono tracking-widest uppercase">
          <HiExclamationTriangle className="text-red-400" />
          THE INDUSTRY CHALLENGE
        </div>

        {/* Huge Animated Headline */}
        <AnimatedTitle
          title="MINES DON'T RUN <b>O</b>N RESERVES. <br/> THEY RUN ON <b>A</b>VAILABLE ORE."
          containerClass="mt-2 text-center !text-white"
        />

        {/* Small explainer text */}
        <p className="max-w-2xl text-center font-circular-web text-base md:text-lg text-blue-50/80 leading-relaxed">
          Reserve estimates and production plans can diverge when operational and environmental constraints affect ore availability.
        </p>

        {/* Visual Problem Breakdown Flow */}
        <div className="mt-10 w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative z-20">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-2xl border backdrop-blur-md transition-all duration-300 hover:scale-[1.02] ${step.bg} ${step.color} flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono tracking-widest uppercase opacity-70">
                    PHASE 0{idx + 1}
                  </span>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-white/10">
                    {step.badge}
                  </span>
                </div>
                <h3 className="font-zentry text-xl tracking-wide uppercase text-white font-bold mt-1">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs font-circular-web text-white/70">
                  {step.desc}
                </p>
              </div>

              {idx < steps.length - 1 && (
                <div className="mt-4 flex justify-end md:hidden text-white/40">
                  <HiArrowDown />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* GSAP ScrollTrigger Mask Clip Section */}
      <div className="h-dvh w-screen relative" id="problem-clip">
        <div className="mask-clip-path mask-clip-path-problem about-image">
          <div className="relative size-full overflow-hidden rounded-3xl border border-violet-500/30">
            <img
              src="/img/Future Mining.jpg"
              alt="Geological Pit Anomaly and Vast Open Pit Mining Expanse"
              className="absolute left-0 top-0 size-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-8">
              <span className="font-mono text-xs text-amber-400 tracking-widest uppercase">
                GEOLOGICAL REALITY CHECK
              </span>
              <h4 className="font-zentry text-3xl uppercase text-white font-bold">
                Divergence Discovered at Shovel Face
              </h4>
              <p className="font-circular-web text-sm text-blue-50/80 max-w-md mt-1">
                Conventional static block models fail to account for dynamic fleet availability and grade dilution in real time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheProblem;
