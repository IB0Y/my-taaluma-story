import { CardGrid } from "./components/CardGrid";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Mission } from "./components/Mission";
import { SideNav } from "./components/SideNav";
import { StorySection } from "./components/StorySection";
import { TopBar } from "./components/TopBar";
import { mission, needs, sections, superpower } from "./content";
import { useReveal } from "./hooks/useReveal";

const navItems = [...sections, superpower, mission, needs].map((s) => ({
  id: s.id,
  nav: s.nav,
}));

export default function App() {
  useReveal();

  return (
    <div className="relative min-h-svh bg-ink">
      <div
        aria-hidden
        className="grain-overlay pointer-events-none fixed inset-0 z-50 opacity-[0.035] mix-blend-overlay no-print"
      />

      <TopBar />
      <SideNav items={navItems} />

      <main>
        <Hero />

        {sections.map((section, i) => (
          <StorySection
            key={section.id}
            section={section}
            tone={i % 2 === 0 ? "tinted" : "plain"}
          />
        ))}

        <CardGrid section={superpower} items={superpower.traits} tone="tinted" />
        <Mission />
        <CardGrid section={needs} items={needs.items} tone="tinted" />
      </main>

      <Footer />
    </div>
  );
}
