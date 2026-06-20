import SectionHeading from "./SectionHeading";
import { registrationTiers } from "../data/conferenceData";

export default function Registration() {
  return (
    <section id="register" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Registration"
          title="Join the Conference"
          subtitle="Choose the registration category that best fits your profile. Early bird discounts available until September 1, 2026."
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {registrationTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative card-hover rounded-2xl p-8 ${
                tier.popular
                  ? "bg-gradient-to-br from-ieee-dark to-ieee-blue text-white shadow-xl shadow-ieee-blue/20 scale-105 border-2 border-ieee-light/30"
                  : "bg-slate-50 border border-slate-100"
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-slate-900 text-xs font-bold rounded-full uppercase tracking-wider">
                  Most Popular
                </span>
              )}

              <h3 className={`text-xl font-bold ${tier.popular ? "text-white" : "text-slate-900"}`}>
                {tier.name}
              </h3>

              <div className="mt-6">
                <p className={`text-sm ${tier.popular ? "text-slate-300" : "text-slate-500"}`}>Early Bird</p>
                <p className={`text-3xl font-bold ${tier.popular ? "text-gold-light" : "text-ieee-blue"}`}>
                  {tier.early}
                </p>
              </div>

              <div className="mt-4">
                <p className={`text-sm ${tier.popular ? "text-slate-300" : "text-slate-500"}`}>Regular</p>
                <p className={`text-xl font-semibold ${tier.popular ? "text-white" : "text-slate-700"}`}>
                  {tier.regular}
                </p>
              </div>

              <ul className="mt-8 space-y-3">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-start gap-2 text-sm ${
                      tier.popular ? "text-slate-200" : "text-slate-600"
                    }`}
                  >
                    <svg className={`w-5 h-5 shrink-0 ${tier.popular ? "text-gold-light" : "text-ieee-blue"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 block w-full py-3 rounded-xl text-center font-semibold transition-all ${
                  tier.popular
                    ? "bg-gold text-slate-900 hover:bg-gold-light"
                    : "bg-ieee-blue text-white hover:bg-ieee-dark"
                }`}
              >
                Register Now
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-slate-500 text-sm mt-10 max-w-2xl mx-auto">
          Registration fees include applicable taxes. IEEE members receive a 10% discount on all categories.
          Cancellation policy applies — please refer to the registration portal for details.
        </p>
      </div>
    </section>
  );
}
