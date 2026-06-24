import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { VAGARO_BOOKING_URL } from "@/lib/booking";
import { scalpAddons } from "@/lib/services-data";

export const Route = createFileRoute("/services/scalp")({
  head: () => ({
    meta: [
      { title: "Scalp Wellness Treatments — Julia Marks Beauty" },
      {
        name: "description",
        content:
          "Scalp + shampoo upgrades: scalp reset, luxury shampoo experience, and healthy hair growth boost. Add to any hair appointment in Spring Hill, TN.",
      },
      { property: "og:title", content: "Scalp Wellness Treatments — Julia Marks Beauty" },
      {
        property: "og:description",
        content: "Elevate your wash experience with therapeutic scalp upgrades.",
      },
    ],
  }),
  component: ScalpServicesPage,
});

function ScalpServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Scalp + Shampoo Upgrades"
        title="Elevate your wash experience."
        description="Add a therapeutic scalp upgrade to any hair appointment for a deeper, more restorative visit."
      />

      <section className="px-6 lg:px-8 pb-24 md:pb-32">
        <div className="max-w-4xl mx-auto space-y-10">
          {scalpAddons.map((s) => (
            <article
              key={s.title}
              className="border border-foreground/10 bg-beige/20 p-8 md:p-10 space-y-5"
            >
              <header className="space-y-2 border-b border-foreground/10 pb-5">
                <p className="eyebrow flex items-center gap-2">
                  <span aria-hidden>{s.icon}</span>
                  <span>{s.tagline}</span>
                </p>
                <h3 className="font-serif italic text-3xl md:text-4xl leading-tight">
                  {s.title}
                </h3>
                <p className="text-2xl md:text-3xl font-serif">{s.price}</p>
              </header>

              <div className="grid md:grid-cols-2 gap-8">
                {s.removes.length > 1 && (
                  <div>
                    <p className="eyebrow mb-3">Removes buildup from</p>
                    <ul className="space-y-2 text-sm text-foreground/70">
                      {s.removes.map((r) => (
                        <li key={r} className="flex gap-2">
                          <span className="text-accent">—</span>
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {s.includes.length > 0 && (
                  <div>
                    <p className="eyebrow mb-3">Includes</p>
                    <ul className="space-y-2 text-sm text-foreground/70">
                      {s.includes.map((i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-accent">—</span>
                          <span>{i}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div>
                  <p className="eyebrow mb-3">Benefits</p>
                  <ul className="space-y-2 text-sm text-foreground/70">
                    {s.benefits.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span>​</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-foreground/10 flex justify-end">
                <a
                  href={VAGARO_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] uppercase tracking-luxe border-b border-accent text-accent hover:text-foreground hover:border-foreground transition-colors"
                >
                  Add to your appointment →
                </a>
              </div>
            </article>
          ))}

          <div className="flex justify-center gap-6 flex-wrap pt-8">
            <Link
              to="/nervous-system-reset-spring-hill-tn"
              className="text-[11px] uppercase tracking-luxe border-b border-accent text-accent hover:text-foreground hover:border-foreground transition-colors pb-1"
            >
              Nervous System Reset (45 min · $120) →
            </Link>
            <Link
              to="/services/hair"
              className="text-[11px] uppercase tracking-luxe border-b border-foreground/30 hover:border-accent hover:text-accent transition-colors pb-1"
            >
              Hair Services →
            </Link>
            <Link
              to="/services/esthetics"
              className="text-[11px] uppercase tracking-luxe border-b border-foreground/30 hover:border-accent hover:text-accent transition-colors pb-1"
            >
              Esthetic Services →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
