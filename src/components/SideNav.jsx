import { useActiveSection } from "../hooks/useActiveSection";

/**
 * Vertical progress rail. Desktop only — it's chrome, not content.
 */
export function SideNav({ items }) {
  const ids = items.map((i) => i.id);
  const active = useActiveSection(ids);

  return (
    <nav
      aria-label="Story sections"
      className="no-print fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 xl:block"
    >
      <ul className="space-y-4">
        {items.map((item) => {
          const isActive = active === item.id;

          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={isActive ? "true" : undefined}
                className="group flex items-center gap-3"
              >
                <span
                  className={`h-px transition-all duration-300 ${
                    isActive
                      ? "w-8 bg-ember"
                      : "w-4 bg-line group-hover:w-6 group-hover:bg-muted"
                  }`}
                />
                <span
                  className={`text-[0.7rem] tracking-[0.18em] uppercase transition-colors duration-300 ${
                    isActive
                      ? "text-ember"
                      : "text-muted/50 group-hover:text-muted"
                  }`}
                >
                  {item.nav}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
