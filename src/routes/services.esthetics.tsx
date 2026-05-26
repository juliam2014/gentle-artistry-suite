import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { VAGARO_BOOKING_URL } from "@/lib/booking";
import { estheticGoals, estheticPackages } from "@/lib/services-data";

export const Route = createFileRoute("/services/esthetics")({
  head: () => ({
    meta: [
      { title: "Esthetic Services — Julia Marks Beauty" },
      {
        name: "description",
        content:
          "Brow shaping & tint, lash lift & tint, express dermaplane, and curated beauty packages in Spring Hill, TN.",
      },
      { property: "og:title", content: "Esthetic Services — Julia Marks Beauty" },
      {
        property: "og:description",
        content: "Beauty add-ons, perfectly paired. Brows, lashes, and skin glow.",
      },
    ],
  }),
  component: EstheticServicesPage,
});

function EstheticServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Esthetic Services"
        title="Beauty add-ons, perfectly paired."
        description="Quick, high-impact beauty services designed to fit seamlessly into your visit. Focused on maintenance, glow, and effortless beauty."
      />

      <section className="px-6 lg:px-8 pb-24 md:pb-32">
        <div className="max-w-4xl mx-auto">
          <div className="border border-foreground/10 bg-beige/20 p-8 md:p-10 mb-12">
            <p className="eyebrow mb-4">Step 1 — Select your beauty goal</p>
            <p className="text-foreground/70 mb-6">Choose what you want to enhance today:</p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {estheticGoals.map((g) => (
                <li
                  key={g}
                  className="flex gap-3 items-start text-foreground/80 border-l border-accent pl-4 py-1"
                >
                  <span className="text-accent">—</span>
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="eyebrow mb-8 text-center">Step 2 — Select your package</p>
          <div className="space-y-10">
            {estheticPackages.map((p) => (
              <article
                key={p.title}
                className="border border-foreground/10 bg-beige/20 p-8 md:p-10 space-y-5"
              >
                <header className="space-y-2 border-b border-foreground/10 pb-5">
                  <p className="eyebrow flex items-center gap-2">
                    <span aria-hidden>{p.icon}</span>
                    <span>{p.tagline}</span>
                  </p>
                  <h3 className="font-serif italic text-3xl md:text-4xl leading-tight">
                    {p.title}
                  </h3>
                  <p className="text-2xl md:text-3xl font-serif">{p.price}</p>
                </header>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <p className="eyebrow mb-3">Includes</p>
                    <ul className="space-y-2 text-sm text-foreground/70">
                      {p.includes.map((i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-accent">—</span>
                          <span>{i}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="eyebrow mb-3">Best for</p>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      {p.bestFor}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-foreground/10 flex justify-end">
                  <a
                    href={VAGARO_BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] uppercase tracking-luxe border-b border-accent text-accent hover:text-foreground hover:border-foreground transition-colors"
                  >
                    Book this package →
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="flex justify-center gap-6 flex-wrap pt-12">
            <Link
              to="/services/hair"
              className="text-[11px] uppercase tracking-luxe border-b border-foreground/30 hover:border-accent hover:text-accent transition-colors pb-1"
            >
              Hair Services →
            </Link>
            <Link
              to="/services/scalp"
              className="text-[11px] uppercase tracking-luxe border-b border-foreground/30 hover:border-accent hover:text-accent transition-colors pb-1"
            >
              Scalp Add-Ons →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
