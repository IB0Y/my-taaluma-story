import { useEffect, useState } from "react";
import { Printer } from "lucide-react";
import { profile } from "../content";

export function TopBar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.body.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 80);
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`no-print fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled
          ? "border-b border-line bg-ink/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
        <a
          href="#top"
          className={`text-sm tracking-[0.2em] uppercase transition-all duration-500 ${
            scrolled
              ? "translate-y-0 text-sand opacity-100"
              : "-translate-y-1 opacity-0"
          }`}
        >
          {profile.name}
        </a>

        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-xs tracking-[0.16em] text-muted uppercase transition-colors hover:border-ember hover:text-ember"
        >
          <Printer className="h-3.5 w-3.5" />
          Save as page
        </button>
      </div>

      <div
        className="h-px origin-left bg-ember transition-transform duration-150"
        style={{ transform: `scaleX(${progress})` }}
      />
    </header>
  );
}
