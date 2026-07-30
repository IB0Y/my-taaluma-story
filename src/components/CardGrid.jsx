import {
  Compass,
  Ear,
  Flame,
  MessageSquare,
  Share2,
  Shuffle,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const ICONS = { Compass, Ear, Flame, MessageSquare, Share2, Shuffle };

/**
 * Three-up card layout, used for the superpower and the asks of the team.
 */
export function CardGrid({ section, items, tone = "plain" }) {
  const tinted = tone === "tinted";

  return (
    <section
      id={section.id}
      className={`relative scroll-mt-20 px-6 py-24 print-tight sm:px-10 lg:px-16 lg:py-32 ${
        tinted ? "bg-ink-2 print-panel" : ""
      }`}
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          num={section.num}
          kicker={section.kicker}
          title={section.title}
          lead={section.lead}
          align="center"
        />

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {items.map((item, i) => {
            const Icon = ICONS[item.icon] ?? Flame;

            return (
              <article
                key={item.title}
                className="reveal group relative overflow-hidden rounded-2xl border border-line bg-ink-3/50 p-8 transition-colors duration-500 hover:border-ember/50 print-panel print-break"
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                <div
                  aria-hidden
                  className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-ember/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 no-print"
                />

                <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-ink text-ember print-panel">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="relative mt-6 font-heading text-2xl font-bold tracking-[-0.01em] text-sand print-ink">
                  {item.title}
                </h3>

                <p className="relative mt-3 leading-relaxed text-sand/65 print-muted">
                  {item.body}
                </p>

                <span className="relative mt-6 block font-mono text-xs text-muted/60 print-muted">
                  0{i + 1}
                </span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
