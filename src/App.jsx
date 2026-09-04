import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TheProblem from './components/TheProblem';
import MeetOreNexus from './components/MeetOreNexus';
import HowItThinks from './components/HowItThinks';
import ReserveIntelligence from './components/ReserveIntelligence';
import NextBestDrill from './components/NextBestDrill';
import ProductionIntelligence from './components/ProductionIntelligence';
import TheShortfall from './components/TheShortfall';
import WhatIfEngine from './components/WhatIfEngine';
import ClosedLoopAI from './components/ClosedLoopAI';
import OreNexusSystem from './components/OreNexusSystem';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden bg-ore-dark text-white selection:bg-amber-400 selection:text-black font-general">
      {/* Navigation */}
      <Navbar />

      {/* 1. HERO — Powerful First 5 Seconds */}
      <Hero />

      {/* 2. THE PROBLEM — Mines Don't Run On Reserves */}
      <TheProblem />

      {/* 3. INTRODUCE ORENEXUS — Meet OreNexus (Explore, Predict, Optimize, Learn) */}
      <MeetOreNexus />

      {/* 4. HOW ORENEXUS THINKS — Space, Geology, Drilling, Operations, Weather */}
      <HowItThinks />

      {/* 5. RESERVE INTELLIGENCE — See Beneath (Prospectivity Map & Zone D7) */}
      <ReserveIntelligence />

      {/* 6. NEXT-BEST-DRILL — Signature Innovation (Zone A, B, C, D 91%) */}
      <NextBestDrill />

      {/* 7. PRODUCTION INTELLIGENCE — Know What You Can Deliver (100K vs 87K vs -13K) */}
      <ProductionIntelligence />

      {/* 8. THE SHORTFALL — Dramatic 13,000 T AT RISK Alert */}
      <TheShortfall />

      {/* 9. WHAT-IF AI ENGINE — Interactive Scenario Simulator */}
      <WhatIfEngine />

      {/* 10. CLOSED-LOOP AI — The Mine Teaches The Model (Predict -> Act -> Measure -> Learn -> Improve) */}
      <ClosedLoopAI />

      {/* 11. THE ORENEXUS SYSTEM — Full Unified Schematic Diagram */}
      <OreNexusSystem />

      {/* 12. FINAL CTA — From Rock to Reserve. From Reserve to Decision. */}
      <FinalCTA />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
