import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { VAGARO_BOOKING_URL } from "@/lib/booking";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Julia Marks Beauty" },
      {
        name: "description",
        content:
          "Hair color, balayage, blonding, haircuts, scalp facials, brow & lash, esthetic services and finishing styling.",
      },
      { property: "og:title", content: "The Service Menu — Julia Marks Beauty" },
    ],
  }),
  component: ServicesPage,
});

const categories = [
  {
    name: "Hair Color",
    services: [
      { title: "Single Process Color", desc: "Refreshing root coverage in your custom tone.", price: "From $115", time: "90 min" },
      { title: "Gloss & Refresh", desc: "Shine-boosting gloss to extend life between visits.", price: "From $75", time: "45 min" },
    ],
  },
  {
    name: "Balayage & Blonding",
    services: [
      { title: "Signature Balayage", desc: "Hand-painted dimension for a soft, lived-in finish.", price: "From $285", time: "3 hr" },
      { title: "Full Blonding Session", desc: "Foil work for brighter, brighter, beautifully even results.", price: "From $325", time: "3.5 hr" },
      { title: "Brunette Dimensional", desc: "Rich tonal weaving for depth and movement.", price: "From $245", time: "2.5 hr" },
    ],
  },
  {
    name: "Haircuts & Styling",
    services: [
      { title: "Structural Haircut", desc: "A shape designed for your texture and bone structure.", price: "From $95", time: "75 min" },
      { title: "Finishing Touch Styling", desc: "Polished blowout or soft waves for the occasion.", price: "From $75", time: "60 min" },
    ],
  },
  {
    name: "Scalp Health",
    services: [
      { title: "Signature Scalp Facial", desc: "Deep cleansing, ultrasonic exfoliation, steam therapy.", price: "From $145", time: "75 min" },
      { title: "Scalp Detox Treatment", desc: "Targeted treatment to reset and rebalance.", price: "From $95", time: "45 min" },
    ],
  },
  {
    name: "Skincare & Esthetics",
    services: [
      { title: "Express Glow Facial", desc: "A 45-minute reset for radiant, hydrated skin.", price: "From $95", time: "45 min" },
      { title: "Signature Radiance Facial", desc: "Custom actives, gentle exfoliation, lifting massage.", price: "From $165", time: "75 min" },
    ],
  },
  {
    name: "Brow & Lash",
    services: [
      { title: "Brow Shaping & Tint", desc: "Custom mapping, shaping, and softening tint.", price: "From $65", time: "45 min" },
      { title: "Lash Lift & Tint", desc: "Lifted, defined natural lashes — no extensions needed.", price: "From $95", time: "60 min" },
    ],
  },
];

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Menu"
        title="Treatments crafted with care."
        description="Every service is designed to support your hair, skin, and confidence — never rushed, always intentional."
      />

      <section className="px-6 lg:px-8 pb-24 md:pb-32">
        <div className="max-w-5xl mx-auto space-y-24 md:space-y-32">
          {categories.map((cat) => (
            <div key={cat.name}>
              <div className="flex items-end justify-between mb-10 border-b border-foreground/10 pb-4">
                <h2 className="font-serif italic text-3xl md:text-4xl">{cat.name}</h2>
                <span className="text-[10px] uppercase tracking-luxe text-foreground/40">
                  {cat.services.length} services
                </span>
              </div>
              <div className="space-y-8">
                {cat.services.map((s) => (
                  <div
                    key={s.title}
                    className="grid grid-cols-12 gap-6 items-baseline border-b border-foreground/10 pb-8"
                  >
                    <div className="col-span-12 md:col-span-7">
                      <h3 className="font-serif text-xl md:text-2xl">{s.title}</h3>
                      <p className="text-sm text-foreground/60 mt-2 leading-relaxed">{s.desc}</p>
                      <p className="text-[10px] uppercase tracking-luxe text-foreground/40 mt-3">{s.time}</p>
                    </div>
                    <div className="col-span-6 md:col-span-3">
                      <p className="text-sm font-medium">{s.price}</p>
                    </div>
                    <div className="col-span-6 md:col-span-2 text-right">
                      <Link
                        to="/booking"
                        className="text-[11px] uppercase tracking-luxe border-b border-accent text-accent hover:text-foreground hover:border-foreground transition-colors"
                      >
                        Book →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 lg:px-8 text-center bg-beige/40">
        <h2 className="font-serif italic text-4xl md:text-5xl mb-6 max-w-2xl mx-auto leading-tight">
          Not sure where to begin?
        </h2>
        <p className="text-foreground/60 max-w-xl mx-auto mb-8">
          Book a complimentary 15-minute consultation and we'll design your ritual together.
        </p>
        <Link
          to="/contact"
          className="inline-block border border-foreground/20 px-10 py-4 text-[11px] uppercase tracking-luxe hover:bg-foreground hover:text-background transition-colors"
        >
          Request a Consultation
        </Link>
      </section>
    </>
  );
}
