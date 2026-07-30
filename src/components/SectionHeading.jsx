/**
 * Shared section header: index numeral, kicker, display title.
 */
export function SectionHeading({ num, kicker, title, lead, align = "left" }) {
  const centered = align === "center";

  return (
    <header
      className={`reveal print-break ${centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}
    >
      <div
        className={`flex items-center gap-3 ${centered ? "justify-center" : ""}`}
      >
        <span className="font-mono text-xs tracking-[0.3em] text-ember">
          {num}
        </span>
        <span className="h-px w-10 bg-line" />
        <span className="text-xs tracking-[0.22em] text-muted uppercase print-muted">
          {kicker}
        </span>
      </div>

      <h2 className="mt-5 font-heading text-4xl font-extrabold leading-[1.05] tracking-[-0.025em] text-sand sm:text-5xl lg:text-6xl print-ink">
        {title}
      </h2>

      {lead && (
        <p className="mt-4 text-lg text-muted print-muted sm:text-xl">{lead}</p>
      )}
    </header>
  );
}
