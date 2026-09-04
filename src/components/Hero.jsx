import { useRef, useState, useEffect } from 'react';
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti';
import { HiArrowDownRight, HiCpuChip } from 'react-icons/hi2';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const totalVideo = 6;
  const nextVideoRef = useRef(null);
  const miniVideoRef = useRef(null);

  const videoLayerTitles = [
    "SATELLITE MULTISPECTRAL SCAN",
    "OPEN BENCH STRATA EXCAVATION",
    "CORE DRILLING & SUBSURFACE LOG",
    "UNDERGROUND MANGANESE ORE",
    "HAULAGE FLEET DISPATCH",
    "PRIMARY CRUSHER BENEFICIATION"
  ];

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  const handleMiniVideoClick = () => {
    setHasClicked(true);
    setCurrentIndex((prev) => (prev % totalVideo) + 1);
  };

  useEffect(() => {
    if (loadedVideos === totalVideo - 1) {
      setIsLoading(false);
    }
  }, [loadedVideos]);

  useGSAP(() => {
    if (hasClicked) {
      gsap.set('#next-video', { visibility: 'visible' });

      gsap.to('#next-video', {
        transformOrigin: 'center center',
        scale: 1,
        width: '100%',
        height: '100%',
        duration: 1,
        ease: 'power1.inOut',
        onStart: () => nextVideoRef.current?.play(),
      });

      gsap.from('#current-video', {
        transformOrigin: 'center center',
        scale: 0,
        duration: 1.5,
        ease: 'power1.inOut',
      });
    }
  }, {
    dependencies: [currentIndex],
    revertOnUpdate: true,
  });

  useGSAP(() => {
    gsap.set('#video-frame', {
      clipPath: 'polygon(14% 0, 72% 0, 88% 90%, 0 95%)',
      borderRadius: '0 0 40% 10%',
    });

    gsap.from('#video-frame', {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      borderRadius: '0 0 0 0',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#video-frame',
        start: 'center center',
        end: 'bottom center',
        scrub: true,
      },
    });
  });

  const getVideoSrc = (index) => `/videos/Video ${index}.mp4`;

  return (
    <div id="hero" className="relative h-dvh w-screen overflow-x-hidden bg-black">
      {isLoading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-black">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}

      {/* Main Video Viewport with Polygon Clip Scroll Effect */}
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-black/90"
      >
        {/* Interactive Video Switcher with Scanner Grid */}
        <div className="relative size-full">
          {/* Mini Interactive Video Thumbnail */}
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-2xl border border-violet-400/30 shadow-2xl backdrop-blur-sm">
            <div
              onClick={handleMiniVideoClick}
              className="relative size-full origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100 group"
            >
              <video
                ref={miniVideoRef}
                loop
                autoPlay
                muted
                id="current-video"
                className="size-64 origin-center object-cover scale-150 object-center"
                src={getVideoSrc((currentIndex % totalVideo) + 1)}
                onLoadedData={handleVideoLoad}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-4">
                <span className="text-[10px] font-mono tracking-widest text-amber-300 uppercase flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-amber-400 animate-ping"></span>
                  SCAN LAYER {((currentIndex % totalVideo) + 1)}/6
                </span>
                <span className="text-xs font-general text-white font-medium truncate">
                  {videoLayerTitles[(currentIndex % totalVideo)]}
                </span>
                <span className="text-[10px] font-mono text-white/50 mt-0.5">Click to switch scan feed ↗</span>
              </div>
            </div>
          </div>

          <video
            ref={nextVideoRef}
            loop
            muted
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
            src={getVideoSrc(currentIndex)}
          />

          <video
            loop
            muted
            autoPlay
            id="background-video"
            className="absolute left-0 top-0 size-full object-cover object-center opacity-80"
            src={getVideoSrc(currentIndex === totalVideo - 1 ? 1 : currentIndex)}
          />

          {/* Sci-Fi Geological HUD Overlay Grid */}
          <div className="absolute inset-0 z-20 pointer-events-none radar-grid opacity-30"></div>
          <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-b from-black/60 via-transparent to-black/90"></div>
        </div>

        {/* Ambient Big Background Typography (Layer 1) */}
        <h1 className="special-font hero-heading z-40 absolute bottom-5 right-5 text-white/10 select-none pointer-events-none">
          OR<b>E</b>NEXUS
        </h1>

        {/* Hero Foreground Content */}
        <div className="absolute left-0 top-0 z-40 size-full flex flex-col justify-between p-6 sm:p-12 pt-32 sm:pt-36">
          <div className="max-w-4xl">
            {/* Statement 26009 HUD Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-black/70 border border-violet-400/40 backdrop-blur-md mb-6 shadow-lg shadow-violet-500/10">
              <HiCpuChip className="text-amber-400 text-sm animate-pulse" />
              <span className="font-mono text-xs tracking-widest uppercase text-violet-200">
                STATEMENT ID: 26009 • MOIL LTD. • MINISTRY OF STEEL
              </span>
              <span className="size-1.5 rounded-full bg-emerald-400 animate-ping ml-0.5" />
            </div>

            {/* Main Headline */}
            <h1 className="special-font hero-heading text-white tracking-tight leading-[0.85] uppercase">
              THE EARTH HAS <span className="text-amber-400">DATA</span>.<br />
              WE GIVE IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-purple-300 to-amber-300">INTELLIGENCE</span>.
            </h1>

            {/* Subheading */}
            <p className="mt-6 max-w-xl font-circular-web text-base sm:text-lg text-blue-50/90 leading-relaxed">
              AI-powered manganese reserve intelligence that connects geological potential, production forecasting and corrective action.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#what-if">
                <Button
                  id="explore-orenexus"
                  title="EXPLORE ORENEXUS ↗"
                  leftIcon={<TiLocationArrow className="text-black text-lg" />}
                  containerClass="!bg-gradient-to-r from-amber-400 to-amber-300 !text-black font-bold flex-center gap-2 shadow-xl shadow-amber-500/20 hover:scale-105 transition-transform"
                />
              </a>

              <a href="#system">
                <Button
                  id="view-system"
                  title="VIEW SYSTEM ↓"
                  rightIcon={<HiArrowDownRight className="text-white text-lg" />}
                  containerClass="!bg-white/10 backdrop-blur-md border border-white/20 !text-white font-semibold flex-center gap-2 hover:!bg-white/20 transition-all"
                />
              </a>
            </div>
          </div>

          {/* Telemetry Corner Badges */}
          <div className="hidden sm:flex items-center justify-between text-xs font-mono text-white/50 border-t border-white/10 pt-4">
            <div className="flex items-center gap-6">
              <span>SCAN DEPTH: 0-450M</span>
              <span>LITHOLOGY: MANGANESE SEDIMENTARY</span>
              <span>RESOLUTION: 0.5M GEO-GRID</span>
            </div>
            <div className="flex items-center gap-2 text-amber-300">
              <span className="size-2 rounded-full bg-amber-400 animate-ping"></span>
              CORE SATELLITE TO DRILL PIPELINE SYNCED
            </div>
          </div>
        </div>
      </div>

      {/* Layer 2 Background Typography for Parallax */}
      <h1 className="special-font hero-heading absolute bottom-5 right-5 text-white/5 select-none pointer-events-none">
        OR<b>E</b>NEXUS
      </h1>
    </div>
  );
};

export default Hero;
