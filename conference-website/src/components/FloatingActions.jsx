import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IconChevronUp, IconDocument } from "./Icons";

const visibleClass =
  "translate-y-0 opacity-100 pointer-events-auto";
const hiddenClass =
  "translate-y-4 opacity-0 pointer-events-none";

const actionButtonClass =
  "cursor-pointer rounded-full bg-gradient-to-br from-ieee-blue to-ieee-light text-white shadow-lg shadow-ieee-blue/30 border border-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-ieee-blue/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-ieee-light focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";

export default function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed bottom-6 right-4 sm:right-6 z-[9980] flex flex-col items-end gap-3 transition-all duration-300 ${
        visible ? visibleClass : hiddenClass
      }`}
    >
      <Link
        to="/submission"
        className={`group flex items-center gap-2.5 px-4 sm:px-5 py-3 font-semibold text-sm ${actionButtonClass}`}
      >
        <IconDocument className="w-4 h-4 shrink-0" />
        <span>Submit Paper</span>
      </Link>

      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`flex h-11 w-11 items-center justify-center ${actionButtonClass}`}
      >
        <IconChevronUp className="w-5 h-5" />
      </button>
    </div>
  );
}
