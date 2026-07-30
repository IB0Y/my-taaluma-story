import { ArrowDown } from "lucide-react";
import { profile, meta } from "../content";
import { Portrait } from "./Portrait";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh items-center px-6 py-20 print-tight sm:px-10 lg:px-16"
    >
      {/* ambient light */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden no-print"
      >
        <div className="absolute -top-40 left-1/4 h-[34rem] w-[34rem] rounded-full bg-ember/8 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-moss/6 blur-[120px]" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1fr_minmax(0,22rem)] lg:gap-20">
        <div>
          <div className="reveal flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-ember" />
            <span className="text-xs tracking-[0.28em] text-ember uppercase">
              {profile.eyebrow}
            </span>
          </div>

          <h1 className="reveal mt-7 font-heading text-6xl font-extrabold leading-[0.95] tracking-[-0.03em] text-sand sm:text-7xl lg:text-8xl print-ink">
            {profile.name}
          </h1>

          <p className="reveal mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm tracking-[0.2em] text-muted uppercase print-muted">
            <span>{profile.role}</span>
            <span className="h-px w-8 bg-line" />
            <span>{meta.event}</span>
          </p>

          <p className="reveal mt-9 max-w-xl border-l-2 border-ember/60 pl-5 text-xl leading-relaxed text-sand/85 sm:text-2xl print-ink">
            {profile.tagline}
          </p>

          <a
            href="#photo"
            className="reveal no-print group mt-12 inline-flex items-center gap-3 text-sm tracking-[0.18em] text-muted uppercase transition-colors hover:text-ember"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line transition-colors group-hover:border-ember">
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </span>
            Read the story
          </a>
        </div>

        <Portrait className="reveal order-first lg:order-last" />
      </div>
    </section>
  );
}
