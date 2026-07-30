import { useState } from "react";
import { ImageIcon } from "lucide-react";
import { profile } from "../content";

/**
 * The photo. Falls back to a monogram card if public/me.jpg isn't there yet.
 */
export function Portrait({ className = "" }) {
  const [failed, setFailed] = useState(false);

  return (
    <figure className={`relative print-break print-portrait ${className}`}>
      <div className="relative">
        {/* offset frame, drawn around the image only */}
        <div
          aria-hidden
          className="absolute -inset-3 rounded-4xl border border-line/80 no-print"
        />
        <div
          aria-hidden
          className="absolute -bottom-6 -right-6 h-40 w-40 rounded-full bg-ember/20 blur-3xl no-print"
        />

        <div className="relative overflow-hidden rounded-[1.6rem] border border-line bg-ink-2 print-panel">
          {failed ? (
            <div className="flex aspect-4/5 flex-col items-center justify-center gap-4 bg-linear-to-br from-ink-3 via-ink-2 to-ink px-6 text-center print-panel">
              <span className="font-heading text-6xl font-extrabold tracking-tight text-ember">
                {profile.initials}
              </span>
              <span className="text-xs leading-relaxed tracking-wide text-muted print-muted">
                <ImageIcon className="mr-1.5 inline h-3.5 w-3.5 align-[-0.15em]" />
                add your photo at{" "}
                <code className="text-sand/80 print-ink">public/me.jpg</code>
              </span>
            </div>
          ) : (
            <img
              src={profile.photo}
              alt={`${profile.name}, at the desk where the work started`}
              onError={() => setFailed(true)}
              className="aspect-4/5 w-full object-cover object-center"
            />
          )}

          {/* warm wash so the photo sits inside the palette instead of fighting it */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-linear-to-t from-ink via-ink/10 to-transparent no-print"
          />
        </div>
      </div>

      <figcaption className="mt-7 flex items-center gap-3 text-xs tracking-[0.18em] text-muted uppercase print-muted">
        <span className="h-px w-8 bg-ember" />
        Campus. PHP. The beginning.
      </figcaption>
    </figure>
  );
}
