import { useRef, useState, useEffect } from "react";
import AnimatedTitle from "./AnimatedTitle";
import gsap from "gsap";
import RoundedCorners from "./RoundedCorners";
import { HiArrowPath } from "react-icons/hi2";

const loopStages = [
  { step: '01', title: 'PREDICT', desc: 'Forecast bench yields & bottlenecks 30 days out.' },
  { step: '02', title: 'ACT', desc: 'Execute AI-optimized dig sequences & fleet dispatch.' },
  { step: '03', title: 'MEASURE', desc: 'Capture real mill recovery tonnage & grade assays.' },
  { step: '04', title: 'LEARN', desc: 'Backpropagate actual vs forecast variances into core.' },
  { step: '05', title: 'IMPROVE', desc: 'Auto-calibrate voxel block model for next cycle.' }
];

const ClosedLoopAI = () => {
  const frameRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % loopStages.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const handleMouseLeave = () => {
    const element = frameRef.current;
    if (!element) return;
    gsap.to(element, {
      duration: 0.3,
      rotateX: 0,
      rotateY: 0,
      ease: 'power1.inOut',
    });
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: 'power1.inOut',
    });
  };

  return (
    <section id="closed-loop" className="min-h-dvh w-screen bg-black text-blue-50 py-20 relative overflow-hidden">
      {/* Background Radar */}
      <div className="absolute inset-0 radar-grid opacity-20 pointer-events-none"></div>

      <div className="flex size-full flex-col items-center py-10 pb-24 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/60 border border-violet-500/40 text-violet-300 text-xs font-mono tracking-widest uppercase mb-4">
          <HiArrowPath className="text-amber-400 animate-spin" />
          SELF-CALIBRATING REINFORCEMENT INTELLIGENCE
        </div>

        {/* Section Heading */}
        <div className="relative size-full text-center">
          <AnimatedTitle
            title="THE MINE TE<b>A</b>CHES <br/> THE M<b>O</b>DEL."
            containerClass="mt-2 pointer-events-none mix-blend-difference relative z-10"
          />

          <p className="mt-4 max-w-2xl mx-auto font-circular-web text-base sm:text-lg text-blue-50/80 leading-relaxed px-4">
            Actual drilling and production outcomes feed back into ORENEXUS to improve future predictions and recommendations.
          </p>

          {/* Interactive 3D Frame & Circular Loop Container */}
          <div className="story-img-container mt-8">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  ref={frameRef}
                  onMouseLeave={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                  src="/img/Photo 3.jpg"
                  alt="OreNexus Closed-Loop Mine Portal - Underground Extraction Haulage"
                  className="size-full object-cover rounded-3xl"
                />
              </div>
            </div>
            <RoundedCorners />
          </div>
        </div>

        {/* Circular Feedback Loop Stages Display */}
        <div className="-mt-72 sm:-mt-64 md:-mt-52 w-full max-w-5xl px-4 relative z-20">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {loopStages.map((stage, index) => {
              const isActive = activeStep === index;
              return (
                <div
                  key={stage.step}
                  onClick={() => setActiveStep(index)}
                  className={`p-4 rounded-2xl border transition-all duration-500 cursor-pointer backdrop-blur-md ${
                    isActive
                      ? 'bg-gradient-to-b from-violet-900/60 to-black border-amber-400 shadow-xl shadow-amber-500/20 scale-105'
                      : 'bg-black/60 border-white/10 hover:bg-black/80'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-white/50">
                      PHASE {stage.step}
                    </span>
                    {isActive && (
                      <span className="size-2 rounded-full bg-amber-400 animate-ping"></span>
                    )}
                  </div>
                  <h4 className="font-zentry text-lg uppercase text-white font-bold tracking-wider">
                    {stage.title}
                  </h4>
                  <p className="mt-1 text-xs font-circular-web text-white/70 leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-amber-300">
              <HiArrowPath className="animate-spin text-amber-400 text-base" />
              <span>CONTINUOUS CYCLE: PREDICT → ACT → MEASURE → LEARN → IMPROVE → ↺</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClosedLoopAI;
