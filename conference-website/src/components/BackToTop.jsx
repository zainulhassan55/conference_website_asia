import { useEffect, useState } from "react";
import { IconChevronUp } from "./Icons";

export default function BackToTop() {
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
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-[9980] flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-ieee-blue to-ieee-light text-white shadow-lg shadow-ieee-blue/30 border border-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-ieee-blue/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-ieee-light focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
        visible
          ? "translate-y-0 opacity-100 pointer-events-auto"
          : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      <IconChevronUp className="w-5 h-5" />
    </button>
  );
}
