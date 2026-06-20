import { useState, useEffect } from "react";
import { navLinks, conference } from "../data/conferenceData";
import { IconMenu, IconClose } from "./Icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-slate-950/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-ieee-blue to-ieee-light flex items-center justify-center shadow-lg shadow-ieee-blue/30 group-hover:scale-105 transition-transform">
              <span className="text-white font-bold text-sm">IEEE</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-white font-bold text-lg leading-tight">{conference.name} {conference.edition}</p>
              <p className="text-slate-400 text-xs">IEEE Approved Conference</p>
            </div>
          </a>

          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-slate-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#register"
              className="ml-3 px-5 py-2.5 bg-gradient-to-r from-ieee-blue to-ieee-light text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-ieee-blue/30 transition-all"
            >
              Register Now
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-2 text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="xl:hidden fixed inset-0 top-16 bg-slate-950/98 backdrop-blur-lg z-40 overflow-y-auto">
          <div className="px-4 py-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-lg text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#register"
              onClick={() => setIsOpen(false)}
              className="block mt-4 px-4 py-3 text-center bg-gradient-to-r from-ieee-blue to-ieee-light text-white font-semibold rounded-xl"
            >
              Register Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
