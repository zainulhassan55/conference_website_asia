import { conference, stats } from "../data/conferenceData";
import { IconCalendar, IconLocation, IconChevronDown } from "./Icons";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0 hero-grid" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-ieee-blue/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-ieee-light/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 lg:pt-32 lg:pb-28 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="animate-fade-in-up opacity-0 flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/30 text-gold text-sm font-semibold">
                <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                IEEE Approved Conference
              </span>
              <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm">
                {conference.edition} Edition
              </span>
            </div>

            <h1 className="animate-fade-in-up opacity-0 animation-delay-200 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-[family-name:var(--font-display)] leading-tight">
              <span className="gradient-text">{conference.name}</span>
              <span className="block text-white mt-2 text-3xl sm:text-4xl lg:text-5xl">
                {conference.edition}
              </span>
            </h1>

            <p className="animate-fade-in-up opacity-0 animation-delay-400 mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed max-w-xl">
              {conference.fullName}
            </p>

            <p className="animate-fade-in-up opacity-0 animation-delay-400 mt-3 text-ieee-light font-medium text-lg italic">
              &ldquo;{conference.tagline}&rdquo;
            </p>

            <div className="animate-fade-in-up opacity-0 animation-delay-600 mt-8 flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-3 glass rounded-xl px-5 py-3">
                <IconCalendar className="w-5 h-5 text-ieee-light shrink-0" />
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider">Dates</p>
                  <p className="text-white font-semibold">{conference.dates.display}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 glass rounded-xl px-5 py-3">
                <IconLocation className="w-5 h-5 text-gold shrink-0" />
                <div>
                  <p className="text-xs text-slate-400 uppercase tracking-wider">Location</p>
                  <p className="text-white font-semibold">{conference.location.display}</p>
                </div>
              </div>
            </div>

            <div className="animate-fade-in-up opacity-0 animation-delay-600 mt-10 flex flex-wrap gap-4">
              <a
                href="#cfp"
                className="px-8 py-3.5 bg-gradient-to-r from-ieee-blue to-ieee-light text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-ieee-blue/30 hover:scale-105 transition-all"
              >
                Submit Paper
              </a>
              <a
                href="#register"
                className="px-8 py-3.5 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 hover:border-white/40 transition-all"
              >
                Register Now
              </a>
            </div>
          </div>

          <div className="animate-fade-in-up opacity-0 animation-delay-400 hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-ieee-blue/30 to-gold/20 rounded-3xl blur-2xl" />
              <div className="relative glass rounded-3xl p-8 border border-white/10">
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, i) => (
                    <div
                      key={stat.label}
                      className="bg-white/5 rounded-2xl p-6 text-center border border-white/5 hover:border-ieee-light/30 transition-colors"
                      style={{ animationDelay: `${0.8 + i * 0.1}s` }}
                    >
                      <p className="text-3xl xl:text-4xl font-bold gradient-text">{stat.value}</p>
                      <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-5 rounded-2xl bg-gradient-to-r from-ieee-dark/50 to-ieee-blue/30 border border-ieee-light/20">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center shrink-0">
                      <span className="text-ieee-blue font-bold text-lg">IEEE</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">Officially IEEE Approved</p>
                      <p className="text-slate-400 text-sm mt-0.5">
                        Papers published in IEEE Xplore Digital Library
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:hidden mt-12 grid grid-cols-2 gap-3">
          {stats.map((stat) => (
            <div key={stat.label} className="glass rounded-xl p-4 text-center">
              <p className="text-2xl font-bold gradient-text">{stat.value}</p>
              <p className="mt-1 text-xs text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-400 hover:text-white transition-colors animate-float"
        aria-label="Scroll to about section"
      >
        <IconChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
}
