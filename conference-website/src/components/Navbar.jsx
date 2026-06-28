import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navItems, conference } from "../data/conferenceData";
import { IconMenu, IconClose, IconChevronDown } from "./Icons";

function NavLinkItem({ to, children, className, onClick, end = false }) {
  return (
    <NavLink
      to={to}
      end={end}
      onClick={onClick}
      className={({ isActive }) =>
        `${className}${isActive ? " text-white bg-white/10" : ""}`
      }
    >
      {children}
    </NavLink>
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
            <NavLinkItem
              key={child.href}
              to={child.href}
              className={itemClassName}
            >
              {child.label}
            </NavLinkItem>
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
            <NavLinkItem
              key={child.href}
              to={child.href}
              onClick={onNavigate}
              className="block px-4 py-2.5 text-base text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            >
              {child.label}
            </NavLinkItem>
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
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    setOpenMobileDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
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

  const navBackgroundClass =
    scrolled || isOpen
      ? "bg-slate-950/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/5"
      : "max-lg:bg-slate-950/95 max-lg:backdrop-blur-md max-lg:border-b max-lg:border-white/5 lg:bg-transparent lg:border-transparent";

  const mobileMenu =
    isOpen &&
    createPortal(
      <>
        <button
          type="button"
          className="lg:hidden fixed inset-0 top-16 z-[9998] bg-black/50"
          onClick={closeMobileMenu}
          aria-label="Close navigation menu"
        />
        <div className="lg:hidden fixed left-0 right-0 top-16 bottom-0 z-[9999] bg-slate-950/98 backdrop-blur-lg overflow-y-auto overscroll-contain">
          <div className="px-4 py-6 space-y-1 pb-10">
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
                <NavLinkItem
                  key={item.href}
                  to={item.href}
                  end={item.href === "/"}
                  onClick={closeMobileMenu}
                  className="block px-4 py-3.5 text-lg font-medium text-slate-200 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                >
                  {item.label}
                </NavLinkItem>
              )
            )}
          </div>
        </div>
      </>,
      document.body
    );

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[9990] transition-all duration-300 ${navBackgroundClass}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[5rem] gap-4">
            <Link to="/" className="flex items-center gap-2 sm:gap-3 group shrink-0 min-w-0 min-h-0">
              <img
                src={conference.logo}
                alt={`${conference.name} ${conference.edition} logo`}
                className="h-9 sm:h-10 lg:h-11 w-auto max-w-[3.5rem] sm:max-w-none object-contain drop-shadow-md group-hover:scale-[1.02] transition-transform"
              />
              <div className="hidden md:block min-w-0">
                <p className="text-white font-bold text-sm lg:text-base leading-tight truncate">
                  {conference.name} {conference.edition}
                </p>
              </div>
            </Link>

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
                  <NavLinkItem
                    key={item.href}
                    to={item.href}
                    end={item.href === "/"}
                    className={linkClassName}
                  >
                    {item.label}
                  </NavLinkItem>
                )
              )}
            </div>

            <button
              type="button"
              onClick={() => setIsOpen((open) => !open)}
              className="lg:hidden relative z-[9991] p-2.5 text-white rounded-lg hover:bg-white/10 transition-colors shrink-0 touch-manipulation"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <IconClose /> : <IconMenu />}
            </button>
          </div>
        </div>
      </nav>

      {mobileMenu}
    </>
  );
}
