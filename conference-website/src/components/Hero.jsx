import { conference, stats } from "../data/conferenceData";
import { IconCalendar, IconLocation, IconChevronDown } from "./Icons";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0 hero-grid" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-ieee-blue/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-pulse" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-28 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <div className="animate-fade-in-up opacity-0 flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-sm font-semibold">
                <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                IEEE Approved Conference
              </span>
              <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm">
                {conference.edition}
              </span>
            </div>

            <h1 className="animate-fade-in-up opacity-0 animation-delay-200 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold font-[family-name:var(--font-display)] leading-tight">
              <span className="gradient-text">{conference.name} {conference.edition}</span>
            </h1>

            <p className="animate-fade-in-up opacity-0 animation-delay-400 mt-5 text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed">
              {conference.fullName}
            </p>

            <p className="animate-fade-in-up opacity-0 animation-delay-400 mt-3 text-ieee-light font-medium text-base sm:text-lg italic">
              &ldquo;{conference.tagline}&rdquo;
            </p>

            <div className="animate-fade-in-up opacity-0 animation-delay-600 mt-8 flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-3 glass rounded-xl px-5 py-3">
                <IconCalendar className="w-5 h-5 text-ieee-light shrink-0" />
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider">Dates</p>
                  <p className="text-white font-semibold text-sm sm:text-base">{conference.dates.display}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 glass rounded-xl px-5 py-3">
                <IconLocation className="w-5 h-5 text-gold shrink-0" />
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider">Venue</p>
                  <p className="text-white font-semibold text-sm sm:text-base">{conference.location.display}</p>
                </div>
              </div>
            </div>

            <div className="animate-fade-in-up opacity-0 animation-delay-600 mt-10 flex flex-wrap gap-4">
              <a
                href="#submission"
                className="px-6 sm:px-8 py-3.5 bg-gradient-to-r from-ieee-blue to-ieee-light text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-ieee-blue/30 hover:scale-105 transition-all text-sm sm:text-base"
              >
                Submit Paper
              </a>
              <a
                href="#register"
                className="px-6 sm:px-8 py-3.5 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 hover:border-white/40 transition-all text-sm sm:text-base"
              >
                Register
              </a>
            </div>

            <div className="animate-fade-in-up opacity-0 animation-delay-600 mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3 lg:hidden">
              {stats.map((stat) => (
                <div key={stat.label} className="glass rounded-xl p-3 text-center">
                  <p className="text-xl sm:text-2xl font-bold gradient-text">{stat.value}</p>
                  <p className="mt-1 text-[10px] sm:text-xs text-slate-400 leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-in-up opacity-0 animation-delay-400">
            <HeroVisual />
            <div className="hidden lg:grid grid-cols-4 gap-3 mt-8">
              {stats.map((stat) => (
                <div key={stat.label} className="glass rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                  <p className="mt-1 text-xs text-slate-400 leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 text-slate-400 hover:text-white transition-colors animate-float hidden sm:block"
        aria-label="Scroll to about section"
      >
        <IconChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
}
