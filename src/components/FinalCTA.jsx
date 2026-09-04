import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { HiSparkles } from "react-icons/hi2";

const ImageClipBox = ({ src, clipClass }) => {
  return (
    <div className={clipClass}>
      <img src={src} alt="OreNexus Graphic" className="size-full object-cover" />
    </div>
  );
};

const FinalCTA = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-4 sm:px-10">
      <div className="relative rounded-3xl bg-black py-24 text-blue-50 overflow-hidden border border-white/10 shadow-2xl">
        {/* Left Side Clipped Imagery */}
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96 pointer-events-none opacity-60">
          <ImageClipBox
            src="/img/Photo 4.jpg"
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
            src="/img/Photo 2.jpg"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </div>

        {/* Right Side Clipped Imagery */}
        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto lg:right-20 lg:w-80 pointer-events-none opacity-60">
          <ImageClipBox
            src="/img/Photo 5.jpg"
            clipClass="absolute md:scale-125"
          />
          <ImageClipBox
            src="/img/Future Mining.jpg"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        {/* Radar Background Grid */}
        <div className="absolute inset-0 radar-grid opacity-20 pointer-events-none"></div>

        {/* Central Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-950/80 border border-violet-500/40 text-violet-300 text-xs font-mono tracking-widest uppercase mb-6">
            <HiSparkles className="text-amber-400" />
            DECISION-GRADE MINE INTELLIGENCE
          </div>

          {/* Headline */}
          <h1 className="special-font font-zentry text-5xl sm:text-6xl md:text-8xl uppercase tracking-tight leading-[0.9] text-white font-black">
            FROM ROCK <br />
            TO RESERVE. <br />
            FROM RESERVE <br />
            TO DECISION.
          </h1>

          {/* Brand & Subtitle */}
          <div className="mt-8 flex flex-col items-center">
            <span className="font-zentry text-3xl uppercase tracking-wider text-amber-400 font-bold">
              ORENEXUS
            </span>
            <p className="mt-2 max-w-lg font-circular-web text-base sm:text-lg text-blue-50/80">
              AI-Powered Manganese Reserve-to-Production Intelligence
            </p>
          </div>

          {/* Action Button */}
          <div className="mt-10">
            <a href="#hero">
              <Button
                id="cta-final-button"
                title="EXPLORE THE SYSTEM ↗"
                leftIcon={<TiLocationArrow className="text-black text-lg" />}
                containerClass="!bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-300 !text-black font-bold px-10 py-4 text-sm flex-center gap-2 shadow-2xl shadow-amber-500/30 hover:scale-105 transition-transform"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalCTA;
