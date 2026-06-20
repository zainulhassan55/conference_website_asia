import { TrackIcon } from "./Icons";

const floatingBadges = [
  { label: "AI", icon: "brain", delay: "0s", position: "top-4 -left-4 sm:-left-8" },
  { label: "Security", icon: "shield", delay: "1s", position: "top-1/4 -right-2 sm:-right-6" },
  { label: "Computing", icon: "cloud", delay: "2s", position: "bottom-1/3 -left-2 sm:-left-6" },
  { label: "Networking", icon: "network", delay: "1.5s", position: "bottom-8 -right-4 sm:-right-8" },
];

export default function HeroVisual() {
  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
      {/* Outer glow ring */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-ieee-blue/40 via-ieee-light/20 to-gold/30 blur-2xl animate-pulse-glow" />

      {/* Rotating orbit ring */}
      <div className="absolute inset-[-12px] sm:inset-[-20px] rounded-[2rem] border border-ieee-light/20 animate-spin-slow" />
      <div className="absolute inset-[-24px] sm:inset-[-36px] rounded-[2.5rem] border border-dashed border-gold/15 animate-spin-reverse" />

      {/* Main image container */}
      <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl shadow-ieee-blue/30 animate-hero-float">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent z-10" />
        <img
          src="/hero-aiscn.jpg"
          alt="AISCN 2027 - AI, Security, Computing, and Networking Conference"
          className="w-full aspect-[4/3] object-cover animate-ken-burns"
        />

        {/* Scan line overlay */}
        <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden">
          <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-ieee-light/60 to-transparent animate-scan-line" />
        </div>

        {/* Bottom label */}
        <div className="absolute bottom-0 inset-x-0 z-30 p-5 sm:p-6">
          <div className="glass rounded-2xl px-4 py-3 sm:px-5 sm:py-4">
            <p className="text-ieee-light text-xs sm:text-sm font-semibold uppercase tracking-widest">AISCN 2027</p>
            <p className="text-white font-medium text-sm sm:text-base mt-0.5">
              AI · Security · Computing · Networking
            </p>
          </div>
        </div>
      </div>

      {/* Floating badges */}
      {floatingBadges.map((badge) => (
        <div
          key={badge.label}
          className={`absolute ${badge.position} z-40 animate-float-badge`}
          style={{ animationDelay: badge.delay }}
        >
          <div className="glass rounded-xl px-3 py-2 sm:px-4 sm:py-2.5 flex items-center gap-2 shadow-lg shadow-black/20">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-ieee-blue to-ieee-light flex items-center justify-center text-white">
              <TrackIcon name={badge.icon} className="w-4 h-4" />
            </div>
            <span className="text-white text-xs sm:text-sm font-semibold whitespace-nowrap">{badge.label}</span>
          </div>
        </div>
      ))}

      {/* Corner accent dots */}
      <div className="absolute -top-2 left-1/2 w-3 h-3 rounded-full bg-ieee-light animate-ping opacity-75" />
      <div className="absolute top-1/2 -right-1 w-2 h-2 rounded-full bg-gold animate-ping opacity-60" style={{ animationDelay: "1s" }} />
    </div>
  );
}
