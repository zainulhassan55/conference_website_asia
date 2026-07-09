export default function SectionHeading({ badge, title, subtitle, light = false }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 px-1">
      {badge && (
        <span
          className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4 ${
            light
              ? "bg-white/10 text-ieee-light border border-white/20"
              : "bg-ieee-blue/10 text-ieee-blue border border-ieee-blue/20"
          }`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`text-2xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-display)] ${
          light ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg leading-relaxed text-center ${light ? "text-slate-300" : "text-slate-600"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
