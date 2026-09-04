import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import Button from "./Button";
import OreNexusLogo from "./OreNexusLogo";
import { useWindowScroll } from "react-use";
import gsap from "gsap";

const navItems = [
  { name: "Overview", href: "#hero" },
  { name: "The Problem", href: "#problem" },
  { name: "Intelligence", href: "#reserve-intelligence" },
  { name: "What-If AI", href: "#what-if" },
  { name: "System", href: "#system" }
];

const Navbar = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navContainerRef = useRef(null);
  const audioElementRef = useRef(null);
  const { y: currentScrollY } = useWindowScroll();

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true);
      navContainerRef.current?.classList.remove('floating-nav');
    } else if (lastScrollY > currentScrollY) {
      setIsNavVisible(true);
      navContainerRef.current?.classList.add('floating-nav');
    } else if (lastScrollY < currentScrollY) {
      setIsNavVisible(false);
      navContainerRef.current?.classList.add('floating-nav');
    }
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    if (navContainerRef.current) {
      gsap.to(navContainerRef.current, {
        y: isNavVisible ? 0 : -100,
        opacity: isNavVisible ? 1 : 0,
        duration: 0.2,
      });
    }
  }, [isNavVisible]);

  useEffect(() => {
    if (audioElementRef.current) {
      if (isAudioPlaying) {
        audioElementRef.current.play().catch(() => {});
      } else {
        audioElementRef.current.pause();
      }
    }
  }, [isAudioPlaying]);

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between px-4 py-2 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl">
          {/* Brand Logo with Space-Manganese Animations & Statement 26009 Telemetry */}
          <div className="flex items-center gap-3">
            <OreNexusLogo variant="navbar" />

            <div className="hidden xl:flex items-center gap-2 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              TELEMETRY ACTIVE
            </div>
          </div>

          {/* Navigation Links and Audio Controller */}
          <div className="flex h-full items-center gap-2">
            <div className="hidden md:flex items-center">
              {navItems.map((item, index) => (
                <a
                  className="nav-hover-btn font-general text-xs uppercase text-blue-50/80 hover:text-amber-300 transition-colors"
                  key={index}
                  href={item.href}
                >
                  {item.name}
                </a>
              ))}
            </div>

            <a href="#what-if">
              <Button
                id="cta-nav"
                title="Explore System"
                rightIcon={<TiLocationArrow className="text-black" />}
                containerClass="!bg-gradient-to-r from-amber-400 to-amber-300 !text-black font-semibold text-xs ml-6 hidden sm:flex items-center justify-center gap-1 shadow-md shadow-amber-500/20 hover:scale-105 transition-transform"
              />
            </a>

            <button
              className="ml-4 flex items-center space-x-0.5 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
              onClick={toggleAudioIndicator}
              title={isAudioPlaying ? "Mute Ambient Sound" : "Play Ambient Sound"}
            >
              <audio
                className="hidden"
                src="/audio/loop.mp3"
                ref={audioElementRef}
                loop
              />
              {[1, 2, 3, 4].map((bar) => (
                <div
                  key={bar}
                  className={`indicator-line ${isIndicatorActive ? 'active' : ''}`}
                  style={{ animationDelay: `${bar * 0.1}s` }}
                />
              ))}
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
