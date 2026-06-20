import { useState, useEffect } from "react";
import { navItems, conference } from "../data/conferenceData";
import { IconMenu, IconClose, IconChevronDown } from "./Icons";

function NavLink({ href, children, className, onClick }) {
  return (
    <a href={href} onClick={onClick} className={className}>
      {children}
    </a>
  );
}

function DesktopDropdown({ item, triggerClassName, itemClassName }) {
  return (
    <div className="relative group">
      <button
        type="button"
        className={triggerClassName}
        aria-haspopup="true"
      >
        {item.label}
        <IconChevronDown className="w-4 h-4 opacity-70 transition-transform group-hover:rotate-180" />
      </button>

      <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200">
        <div className="min-w-[12.5rem] rounded-xl bg-slate-900/95 backdrop-blur-md border border-white/10 shadow-xl shadow-black/30 py-2">
          {item.children.map((child) => (
            <NavLink
              key={child.href}
              href={child.href}
              className={itemClassName}
            >
              {child.label}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileDropdown({ item, isOpen, onToggle, onNavigate }) {
  return (
    <div className="rounded-xl overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between px-4 py-3.5 text-lg font-medium text-slate-200 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
        aria-expanded={isOpen}
      >
        {item.label}
        <IconChevronDown
          className={`w-5 h-5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="ml-3 mt-1 space-y-1 border-l border-white/10 pl-3 pb-1">
          {item.children.map((child) => (
            <NavLink
              key={child.href}
              href={child.href}
              onClick={onNavigate}
              className="block px-4 py-2.5 text-base text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            >
              {child.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMobileMenu = () => {
    setIsOpen(false);
    setOpenMobileDropdown(null);
  };

  const linkClassName =
    "px-3 py-2.5 text-sm font-medium text-slate-200 hover:text-white rounded-lg hover:bg-white/5 transition-colors whitespace-nowrap";

  const dropdownTriggerClassName =
    "flex items-center gap-1.5 px-3 py-2.5 text-sm font-medium text-slate-200 hover:text-white rounded-lg hover:bg-white/5 transition-colors whitespace-nowrap";

  const dropdownItemClassName =
    "block px-4 py-2.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? "bg-slate-950/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-[5rem]">
          <a href="#" className="flex items-center gap-3 group shrink-0 min-w-0">
            <img
              src={conference.logo}
              alt={`${conference.name} ${conference.edition} logo`}
              className="h-10 sm:h-11 lg:h-12 w-auto object-contain drop-shadow-md group-hover:scale-[1.02] transition-transform"
            />
            <div className="hidden md:block min-w-0">
              <p className="text-white font-bold text-base lg:text-lg leading-tight truncate">
                {conference.name} {conference.edition}
              </p>
              <p className="text-slate-400 text-xs lg:text-sm">IEEE Approved Conference</p>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.children ? (
                <DesktopDropdown
                  key={item.label}
                  item={item}
                  triggerClassName={dropdownTriggerClassName}
                  itemClassName={dropdownItemClassName}
                />
              ) : (
                <NavLink key={item.href} href={item.href} className={linkClassName}>
                  {item.label}
                </NavLink>
              )
            )}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2.5 text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-16 bg-slate-950/98 backdrop-blur-lg z-40 overflow-y-auto">
          <div className="px-4 py-6 space-y-1">
            {navItems.map((item) =>
              item.children ? (
                <MobileDropdown
                  key={item.label}
                  item={item}
                  isOpen={openMobileDropdown === item.label}
                  onToggle={() =>
                    setOpenMobileDropdown((current) =>
                      current === item.label ? null : item.label
                    )
                  }
                  onNavigate={closeMobileMenu}
                />
              ) : (
                <NavLink
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="block px-4 py-3.5 text-lg font-medium text-slate-200 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                >
                  {item.label}
                </NavLink>
              )
            )}
            <NavLink
              href="#register"
              onClick={closeMobileMenu}
              className="block mt-4 px-4 py-3.5 text-center bg-gradient-to-r from-ieee-blue to-ieee-light text-white font-semibold rounded-xl text-base"
            >
              Register
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
