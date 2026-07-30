import { Quote } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

/**
 * A narrative beat: heading, paragraphs, and a pull quote in the margin.
 */
export function StorySection({ section, tone = "plain" }) {
  const tinted = tone === "tinted";

  return (
    <section
      id={section.id}
      className={`relative scroll-mt-20 px-6 py-24 print-tight sm:px-10 lg:px-16 lg:py-32 ${
        tinted ? "bg-ink-2 print-panel" : ""
      }`}
    >
      {tinted && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-line to-transparent no-print"
        />
      )}

      <div className="mx-auto max-w-6xl">
        <SectionHeading
          num={section.num}
          kicker={section.kicker}
          title={section.title}
          lead={section.lead}
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,20rem)] lg:gap-16">
          <div className="reveal space-y-6 print-break">
            {section.body.map((para, i) => (
              <p
                key={i}
                className={`text-lg leading-[1.75] print-ink ${
                  i === 0 ? "text-sand/90" : "text-sand/70"
                }`}
              >
                {para}
              </p>
            ))}
          </div>

          {section.pull && (
            <aside className="reveal print-break lg:pt-2">
              <div className="relative rounded-2xl border border-line bg-ink-3/60 p-7 print-panel">
                <Quote className="h-5 w-5 text-ember" />
                <p className="mt-4 font-heading text-2xl font-semibold leading-snug tracking-[-0.015em] text-sand print-ink">
                  {section.pull}
                </p>
              </div>
            </aside>
          )}
        </div>
      </div>
    </section>
  );
}
