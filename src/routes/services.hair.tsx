import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { VAGARO_BOOKING_URL } from "@/lib/booking";
import { hairAppointments } from "@/lib/services-data";

export const Route = createFileRoute("/services/hair")({
  head: () => ({
    meta: [
      { title: "Hair Services — Julia Marks Beauty" },
      {
        name: "description",
        content:
          "Hair color, blonding, brunette dimension, gloss, and transformation services in Spring Hill, TN. Book based on your hair goals.",
      },
      { property: "og:title", content: "Hair Services — Julia Marks Beauty" },
      {
        property: "og:description",
        content:
          "Root refresh, blonding, brunette dimension, gloss, and color corrections.",
      },
    ],
  }),
  component: HairServicesPage,
});

function HairServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Hair Services"
        title="Hair Services & Custom Color"
        description="​Don't worry about selecting perfectly — we'll customize everything during your consultation."
      />

      <section className="px-6 lg:px-8 pb-24 md:pb-32">
        <div className="max-w-4xl mx-auto space-y-16 md:space-y-20">
          {hairAppointments.map((a) => (
            <article
              key={a.title}
              className="border border-foreground/10 bg-beige/20 p-8 md:p-12 space-y-6"
            >
              <header className="space-y-3 border-b border-foreground/10 pb-6">
                <p className="eyebrow flex items-center gap-2">
                  <span aria-hidden>{a.icon}</span>
                  <span>{a.timing}</span>
                </p>
                <h2 className="font-serif italic text-3xl md:text-4xl leading-tight">
                  {a.title}
                </h2>
                <div className="flex items-baseline gap-3 flex-wrap">
                  <p className="text-2xl md:text-3xl font-serif">{a.price}</p>
                  {"priceNote" in a && a.priceNote && (
                    <span className="text-[10px] uppercase tracking-luxe text-foreground/50">
                      {a.priceNote}
                    </span>
                  )}
                </div>
                <p className="text-foreground/70 leading-relaxed pt-2">{a.intro}</p>
              </header>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="eyebrow mb-3">Best for</p>
                  <ul className="space-y-2 text-sm text-foreground/70">
                    {a.bestFor.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="text-accent">—</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {a.includes.length > 0 && (
                  <div>
                    <p className="eyebrow mb-3">Includes</p>
                    <ul className="space-y-2 text-sm text-foreground/70">
                      {a.includes.map((i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-accent">—</span>
                          <span>{i}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between gap-4 flex-wrap pt-4 border-t border-foreground/10">
                {"note" in a && a.note ? (
                  <p className="text-[11px] uppercase tracking-luxe text-foreground/50">
                    👉 {a.note}
                  </p>
                ) : (
                  <span />
                )}
                <a
                  href={VAGARO_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] uppercase tracking-luxe border-b border-accent text-accent hover:text-foreground hover:border-foreground transition-colors"
                >
                  Book this appointment →
                </a>
              </div>
            </article>
          ))}

          <aside className="border-l-2 border-accent pl-6 py-4 bg-beige/30">
            <p className="eyebrow mb-2">🧠 A small note</p>
            <p className="text-sm text-foreground/70 leading-relaxed italic">
              All services are fully customized based on your hair density, length, and
              overall goal. If you're unsure what to book, choose the closest option —
              everything can be adjusted at your appointment.
            </p>
          </aside>

          <div className="flex justify-center gap-6 flex-wrap pt-8">
            <Link
              to="/services/scalp"
              className="text-[11px] uppercase tracking-luxe border-b border-foreground/30 hover:border-accent hover:text-accent transition-colors pb-1"
            >
              Scalp Add-Ons →
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
