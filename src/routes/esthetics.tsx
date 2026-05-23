import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { VAGARO_BOOKING_URL } from "@/lib/booking";

export const Route = createFileRoute("/esthetics")({
  head: () => ({
    meta: [
      { title: "Esthetic Add-Ons — Julia Marks Beauty" },
      {
        name: "description",
        content:
          "Quick, high-impact beauty add-ons to enhance your hair appointment — brow shaping, lash lifts, tints, and express dermaplane in Spring Hill, TN.",
      },
      { property: "og:title", content: "Esthetic Add-Ons — Julia Marks Beauty" },
    ],
  }),
  component: EstheticsPage,
});

const goals = [
  "Define my brows",
  "Enhance my lashes",
  "Refresh my skin glow",
  "Full face refresh (brows + lashes + skin)",
];

const packages = [
  {
    icon: "👁️",
    title: "Brow Polish Package",
    price: "$45–$60",
    tagline: "Defined, natural brows with soft structure",
    includes: ["Brow shaping", "Brow tint"],
    bestFor: "Clients wanting fuller, more polished brows with minimal maintenance.",
  },
  {
    icon: "👁️",
    title: "Lifted Eyes Package",
    price: "$90–$125",
    tagline: "Mascara-free, lifted, and darker lashes",
    includes: ["Lash lift", "Lash tint"],
    bestFor:
      "Clients wanting long-lasting curl and eye definition without makeup.",
  },
  {
    icon: "✨",
    title: "Full Face Refresh Package",
    price: "$125–$165",
    tagline: "Complete eye + brow enhancement in one visit",
    includes: ["Brow shaping", "Brow tint", "Lash lift", "Lash tint"],
    bestFor:
      "Clients wanting a full polished look with maximum impact and low daily effort.",
  },
  {
    icon: "🌿",
    title: "Glow Tone Package",
    price: "$45–$75",
    tagline: "Instant skin smoothing and brightness boost",
    includes: ["Express dermaplane", "Hydration finish"],
    bestFor:
      "Dull skin, texture, makeup prep, or a quick glow before events or hair appointments.",
  },
  {
    icon: "💖",
    title: "Signature Maintenance Stack",
    price: "$95–$145",
    tagline: "Your routine maintenance beauty reset",
    includes: ["Brow shaping + tint", "Lash tint", "Express dermaplane"],
    bestFor:
      "Regular clients maintaining a consistently polished, glowing look every 4–6 weeks.",
  },
];

function EstheticsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Esthetic Add-Ons"
        title="Beauty add-ons, perfectly paired."
        description="Enhance your hair appointment with quick, high-impact beauty add-ons designed to fit seamlessly into your visit. Focused on maintenance, glow, and effortless beauty — not long spa facials."
      />

      <section className="px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="border border-foreground/10 bg-beige/30 p-8 md:p-10">
            <p className="eyebrow mb-4">Step 1 — Select your beauty goal</p>
            <p className="text-foreground/70 mb-6">Choose what you want to enhance today:</p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {goals.map((g) => (
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
        </div>
      </section>

      <section className="px-6 lg:px-8 pb-24 md:pb-32">
        <div className="max-w-4xl mx-auto">
          <p className="eyebrow mb-8 text-center">Step 2 — Select your package</p>
          <div className="space-y-10">
            {packages.map((p) => (
              <article
                key={p.title}
                className="border border-foreground/10 bg-beige/20 p-8 md:p-10 space-y-5"
              >
                <header className="space-y-2 border-b border-foreground/10 pb-5">
                  <p className="eyebrow flex items-center gap-2">
                    <span aria-hidden>{p.icon}</span>
                    <span>{p.tagline}</span>
                  </p>
                  <h2 className="font-serif italic text-3xl md:text-4xl leading-tight">
                    {p.title}
                  </h2>
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
        </div>
      </section>

      <section className="py-24 px-6 lg:px-8 text-center bg-beige/40">
        <h2 className="font-serif italic text-4xl md:text-5xl mb-6 max-w-2xl mx-auto leading-tight">
          Add it on at your next visit.
        </h2>
        <p className="text-foreground/60 max-w-xl mx-auto mb-8">
          Pair any beauty package with your hair appointment for an effortless,
          all-in-one refresh.
        </p>
        <a
          href={VAGARO_BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-foreground text-background px-10 py-4 text-[11px] uppercase tracking-luxe hover:bg-accent transition-colors"
        >
          Book an Appointment
        </a>
      </section>
    </>
  );
}
