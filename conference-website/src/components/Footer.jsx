import { navLinks, conference } from "../data/conferenceData";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-ieee-blue to-ieee-light flex items-center justify-center">
                <span className="text-white font-bold text-sm">IEEE</span>
              </div>
              <div>
                <p className="text-white font-bold">{conference.name} {conference.edition}</p>
                <p className="text-xs">IEEE Approved</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed">
              {conference.fullName}. Advancing research in AI, security, computing, and networking.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.slice(0, 6).map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm hover:text-ieee-light transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#cfp" className="hover:text-ieee-light transition-colors">Call for Papers</a></li>
              <li><a href="#submission" className="hover:text-ieee-light transition-colors">Paper Submission</a></li>
              <li><a href="#awards" className="hover:text-ieee-light transition-colors">Awards</a></li>
              <li><a href="#sponsorship" className="hover:text-ieee-light transition-colors">Sponsorship</a></li>
              <li><a href="#venue" className="hover:text-ieee-light transition-colors">Venue</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Conference Info</h4>
            <ul className="space-y-2 text-sm">
              <li>{conference.dates.display}</li>
              <li>{conference.location.display}</li>
              <li>
                <a href={`mailto:${conference.contact.email}`} className="hover:text-ieee-light transition-colors break-all">
                  {conference.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} {conference.name} {conference.edition}. All rights reserved.
          </p>
          <p className="text-xs text-slate-500 text-center sm:text-right">
            IEEE is a registered trademark of The Institute of Electrical and Electronics Engineers, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
