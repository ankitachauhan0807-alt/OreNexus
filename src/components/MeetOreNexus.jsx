import { useRef, useState } from 'react';
import AnimatedTitle from './AnimatedTitle';

const BentoTilt = ({ children, className = '' }) => {
  const [transformStyle, setTransformStyle] = useState('');
  const itemRef = useRef();

  const handleMouseMove = (e) => {
    if (!itemRef.current) return;
    const { left, top, width, height } = itemRef.current.getBoundingClientRect();
    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;
    const tiltX = (relativeY - 0.5) * 8;
    const tiltY = (relativeX - 0.5) * -8;
    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.99, 0.99, 0.99)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle('perspective(700px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  };

  return (
    <div
      className={className}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle, transition: 'transform 0.2s ease-out' }}
    >
      {children}
    </div>
  );
};

const BentoCard = ({ src, tag, title, description, badge }) => {
  return (
    <div className="relative size-full overflow-hidden rounded-2xl border border-white/10 bg-ore-card group">
      {src && (
        <video
          src={src}
          loop
          muted
          autoPlay
          playsInline
          className="absolute left-0 top-0 size-full object-cover object-center opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
      
      <div className="relative z-10 flex size-full flex-col justify-between p-6 sm:p-8 text-blue-50">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded bg-white/10 border border-white/10 text-amber-300">
            {tag}
          </span>
          {badge && (
            <span className="text-[10px] font-mono tracking-wider px-2 py-0.5 rounded bg-violet-500/30 text-violet-200 border border-violet-500/40">
              {badge}
            </span>
          )}
        </div>

        <div>
          <h3 className="bento-title special-font text-white">{title}</h3>
          {description && (
            <p className="mt-3 max-w-64 text-xs font-circular-web text-blue-50/80 leading-relaxed">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const MeetOreNexus = () => {
  return (
    <section id="features" className="bg-ore-dark pb-52 text-white relative">
      {/* Background Radar Grid Pattern */}
      <div className="absolute inset-0 radar-grid opacity-30 pointer-events-none"></div>

      <div className="container mx-auto px-3 md:px-10 relative z-10">
        {/* Full Screen Transition Header */}
        <div className="text-center flex flex-col items-center mb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-amber-400 mb-2">
            CLOSED-LOOP MINE REVOLUTION
          </p>
          <AnimatedTitle
            title="MEET <b>O</b>RENEXUS."
            containerClass="!text-white text-center"
          />
          <p className="mt-6 max-w-2xl font-circular-web text-lg text-blue-50/80 leading-relaxed">
            A closed-loop AI system connecting reserve intelligence with production planning to predict and prevent ore shortfalls.
          </p>
        </div>

        {/* Feature 1 Large Highlight Card */}
        <div className="border border-white/10 relative mb-8 h-96 w-full overflow-hidden rounded-3xl md:h-[60vh] shadow-2xl">
          <BentoCard
            src="/videos/Video 1.mp4"
            tag="PILLAR 01 // RESERVE DISCOVERY"
            badge="HYPERSPECTRAL + DRILL ASSAYS"
            title={<>EXP<b>L</b>ORE</>}
            description="Deep subsurface intelligence combining satellite hyperspectral imagery, structural geophysics, and historical drilling to map high-grade manganese veins with 94% spatial precision."
          />
        </div>

        {/* 4-Grid Core Pillars Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* PREDICT */}
          <BentoTilt className="h-96 rounded-2xl">
            <BentoCard
              src="/videos/Video 2.mp4"
              tag="PILLAR 02 // RISK MITIGATION"
              badge="7-30 DAY PROACTIVE FORECAST"
              title={<>PRE<b>D</b>ICT</>}
              description="Forecasts mill delivery tonnage and grade variations up to 30 days ahead by factoring in pit weather, maintenance schedules, and bench geometry."
            />
          </BentoTilt>

          {/* OPTIMIZE */}
          <BentoTilt className="h-96 rounded-2xl">
            <BentoCard
              src="/videos/Video 3.mp4"
              tag="PILLAR 03 // WHAT-IF AI"
              badge="DYNAMIC RESEQUENCING"
              title={<>OPT<b>I</b>MIZE</>}
              description="Real-time multi-variable scenario modeling that generates optimal mine resequencing and equipment redeployment vectors to avert production gaps."
            />
          </BentoTilt>

          {/* LEARN */}
          <BentoTilt className="h-96 rounded-2xl md:col-span-2 lg:col-span-1">
            <BentoCard
              src="/videos/Video 4.mp4"
              tag="PILLAR 04 // REINFORCEMENT LOOP"
              badge="AUTO-CALIBRATING"
              title={<>LE<b>A</b>RN</>}
              description="Continuous feedback calibration: mill intake assay telemetry and actual dig rates feed back into the block model to eliminate systemic forecasting errors."
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default MeetOreNexus;
