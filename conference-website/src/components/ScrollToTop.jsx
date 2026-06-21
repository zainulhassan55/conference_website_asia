import { useState, useEffect } from "react";
import { IconChevronUp } from "./Icons";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-50 group transition-all duration-500 ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <span className="absolute inset-0 rounded-full bg-ieee-light/30 animate-ping opacity-60 group-hover:opacity-0 transition-opacity" />
      <span className="relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-gradient-to-br from-ieee-blue to-ieee-light text-white shadow-xl shadow-ieee-blue/40 border border-white/20 hover:scale-110 hover:shadow-2xl hover:shadow-ieee-blue/50 active:scale-95 transition-all duration-300">
        <IconChevronUp className="w-6 h-6 sm:w-7 sm:h-7" />
      </span>
    </button>
  );
}
