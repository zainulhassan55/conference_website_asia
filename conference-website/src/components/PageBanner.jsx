import { Link } from "react-router-dom";

export default function PageBanner({ title, subtitle, badge }) {
  return (
    <section className="relative pt-28 pb-16 lg:pt-32 lg:pb-20 bg-gradient-to-br from-slate-950 via-ieee-dark to-slate-950 overflow-hidden">
      <div className="absolute inset-0 hero-grid opacity-40" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-ieee-light/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="mb-6 text-sm text-slate-400" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-300">{title}</span>
        </nav>

        {badge && (
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4 bg-white/10 text-ieee-light border border-white/20">
            {badge}
          </span>
        )}

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-display)] text-white">
          {title}
        </h1>

        {subtitle && (
          <p className="mt-4 text-lg text-slate-300 max-w-3xl leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
