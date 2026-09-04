import { FaLinkedin, FaTwitter, FaGithub, FaYoutube } from "react-icons/fa";
import OreNexusLogo from "./OreNexusLogo";

const socialLinks = [
  { href: "https://linkedin.com", icon: <FaLinkedin /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://github.com", icon: <FaGithub /> },
  { href: "https://youtube.com", icon: <FaYoutube /> },
];

const Footer = () => {
  return (
    <footer className="w-screen bg-black border-t border-white/10 py-10 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-6">
        <div className="flex flex-col items-center md:items-start gap-2">
          <OreNexusLogo variant="footer" />
          <p className="text-xs font-circular-web text-white/50 mt-1">
            &copy; {new Date().getFullYear()} OreNexus • MOIL Limited & Ministry of Steel (PS-26009). All rights reserved.
          </p>
        </div>

        {/* Live Metrics */}
        <div className="flex items-center gap-6 text-xs font-mono text-white/60">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>PREDICTION ACCURACY: 98.6%</span>
          </div>
          <div className="hidden sm:block">
            <span>UPTIME: 99.99%</span>
          </div>
        </div>

        {/* Social Icons & Links */}
        <div className="flex items-center gap-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/70 hover:text-amber-300 transition-colors"
              href={link.href}
            >
              {link.icon}
            </a>
          ))}
          <a
            href="#privacy-policy"
            className="text-xs font-mono text-white/50 hover:text-white transition-colors ml-4"
          >
            Privacy & Terms
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
