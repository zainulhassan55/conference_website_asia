import { Link } from "react-router-dom";
import { navLinks, conference } from "../data/conferenceData";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img
                src={conference.logo}
                alt={`${conference.name} ${conference.edition} logo`}
                className="h-11 w-auto object-contain"
              />
              <div>
                <p className="text-white font-bold">{conference.name} {conference.edition}</p>
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
                  <Link to={link.href} className="text-sm hover:text-ieee-light transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/submission" className="hover:text-ieee-light transition-colors">Paper Submission</Link></li>
              <li><Link to="/tracks" className="hover:text-ieee-light transition-colors">Conference Topics</Link></li>
              <li><Link to="/awards" className="hover:text-ieee-light transition-colors">Awards</Link></li>
              <li><Link to="/sponsorship" className="hover:text-ieee-light transition-colors">Sponsorship</Link></li>
              <li><Link to="/venue" className="hover:text-ieee-light transition-colors">Venue</Link></li>
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

        <div className="mt-12 pt-8 border-t border-white/5 flex justify-center items-center">
          <div className="max-w-3xl space-y-3 text-sm text-center text-slate-400">
            <p>
              &copy; 2027 AIEI Conference. All rights reserved. | International Conference on AI Engineering and Innovation
            </p>
            <p>
              &copy; Accepted and presented papers will be submitted for inclusion into IEEE Xplore, subject to meeting IEEE Xplore&apos;s scope and quality requirements.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
