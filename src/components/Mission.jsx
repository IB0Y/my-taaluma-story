import { mission } from "../content";
import { SectionHeading } from "./SectionHeading";

export function Mission() {
  return (
    <section
      id={mission.id}
      className="relative scroll-mt-20 overflow-hidden px-6 py-24 print-tight sm:px-10 lg:px-16 lg:py-36"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 no-print"
      >
        <div className="absolute left-1/2 top-1/2 size-144 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember/7 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-4xl">
        <SectionHeading
          num={mission.num}
          kicker={mission.kicker}
          title={mission.title}
          lead={mission.lead}
          align="center"
        />

        <div className="reveal mx-auto mt-14 max-w-2xl space-y-6 text-center print-break">
          {mission.body.map((para, i) => (
            <p
              key={i}
              className="text-lg leading-[1.75] text-sand/75 print-ink"
            >
              {para}
            </p>
          ))}
        </div>

        <p className="reveal mx-auto mt-14 max-w-2xl border-t border-line pt-10 text-center font-heading text-3xl font-bold leading-snug tracking-[-0.02em] text-ember sm:text-4xl print-break">
          {mission.pull}
        </p>
      </div>
    </section>
  );
}
