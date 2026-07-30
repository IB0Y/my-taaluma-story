import { meta, profile } from "../content";

export function Footer() {
  return (
    <footer className="border-t border-line px-6 py-14 print-tight sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-heading text-3xl font-bold tracking-[-0.02em] text-sand print-ink">
            {profile.name}
          </p>
          <p className="mt-2 text-sm tracking-[0.18em] text-muted uppercase print-muted">
            {profile.role}
          </p>
        </div>

        <p className="max-w-xs text-sm leading-relaxed text-muted/70 print-muted sm:text-right">
          {meta.footerNote}
        </p>
      </div>
    </footer>
  );
}
