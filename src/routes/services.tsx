import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { VAGARO_BOOKING_URL } from "@/lib/booking";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Choose Your Appointment — Julia Marks Beauty" },
      {
        name: "description",
        content:
          "Choose your appointment based on how long it's been since your last color visit. Root refresh, blonding, brunette dimension, gloss, and transformations.",
      },
      { property: "og:title", content: "Choose Your Appointment — Julia Marks Beauty" },
    ],
  }),
  component: ServicesPage,
});

const appointments = [
  {
    icon: "✨",
    timing: "6–8 weeks since your last visit",
    title: "Root Refresh + Grey Coverage",
    price: "$150–$175",
    intro:
      "Perfect if you're keeping up with your color and just need a maintenance touch-up.",
    bestFor: [
      "Grey coverage at the root",
      "Blending new growth",
      "Refreshing your tone",
      "Keeping your color polished between bigger appointments",
    ],
    includes: ["Root color application", "Gloss for tone + shine", "Blowout finish"],
    note: "Best for regular maintenance guests",
  },
  {
    icon: "🤍",
    timing: "8–14 weeks since your last visit",
    title: "Blonding Experience",
    price: "$250–$300",
    intro:
      "Perfect if your color has grown out and you're ready to feel brighter and refreshed again.",
    bestFor: [
      "Lived-in blonde maintenance",
      "Balayage or foils",
      "Face frame brightness",
      "Dimensional refresh or full blonde upkeep",
    ],
    includes: [
      "Customized blonding (balayage / foils / dimension)",
      "Gloss / toner",
      "Treatment for hair health",
      "Haircut + blowout finish",
    ],
    note: "Most booked blonding service",
  },
  {
    icon: "🤎",
    timing: "8–14 weeks (brunettes)",
    title: "Brunette Dimension + Gloss",
    price: "$225–$275",
    intro: "Perfect if you want rich, glossy, dimensional brunette color.",
    bestFor: [
      "Refreshing faded brunette tones",
      "Adding shine + richness",
      "Subtle dimension or tonal change",
      "Maintaining healthy-looking color",
    ],
    includes: [
      "Custom color placement or gloss refresh",
      "Conditioning treatment",
      "Haircut + blowout finish",
    ],
  },
  {
    icon: "💎",
    timing: "4–10 weeks",
    title: "Gloss + Refresh + Blowout",
    price: "$95–$125",
    intro: "Perfect if you just want your hair to feel fresh, shiny, and styled again.",
    bestFor: [
      "Toning blonde or brunette",
      "Removing brassiness",
      "Boosting shine between color visits",
      "A quick confidence refresh",
    ],
    includes: ["Gloss or toner", "Shine treatment", "Blowout style"],
  },
  {
    icon: "⚠️",
    timing: "14+ weeks or major change",
    title: "Transformation / Correction",
    price: "Starting at $350+",
    priceNote: "Consult required",
    intro:
      "Perfect if you're making a big change or it's been a while since your last appointment.",
    bestFor: [
      "Major color changes",
      "Corrective color work",
      "Dark-to-light transformations",
      "Full refresh after long gaps",
    ],
    includes: [],
    note: "Consultation required before booking",
  },
];

const scalpAddons = [
  {
    icon: "✨",
    title: "Fresh Start Scalp Reset",
    price: "$45–$55",
    tagline: "For a clean, light, refreshed scalp feeling",
    removes: ["dry shampoo", "oils", "styling products"],
    includes: [],
    benefits: [
      "Hair feels lighter at the root",
      "Scalp feels clean + refreshed",
      "Best before color or blonding services",
    ],
  },
  {
    icon: "💆‍♀️",
    title: "Luxury Shampoo Experience",
    price: "$15–$25",
    tagline: "Extra time to relax during your wash",
    removes: [],
    includes: ["extended scalp massage", "slow, relaxing shampoo service", "tension relief + stress release"],
    benefits: [
      "Instant client favorite",
      "\n\n​",
      "Turns a shampoo into a mini spa moment",
    ],
  },
  {
    icon: "🌱",
    title: "Healthy Hair Growth Boost",
    price: "$25–$35",
    tagline: "For stronger, fuller-looking hair over time",
    removes: [],
    includes: ["stimulating scalp treatment", "circulation-focused massage", "nourishing application"],
    benefits: [
      "Supports healthy growth",
      "Great for postpartum, stress shedding, or thinning concerns",
      "Feels like “hair care investment” not a service",
    ],
  },
];

const estheticGoals = [
  "Define my brows",
  "Enhance my lashes",
  "Refresh my skin glow",
  "Full face refresh (brows + lashes + skin)",
];

const estheticPackages = [
  {
    icon: "👁️",
    title: "Brow Polish Package",
    price: "$45",
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
    bestFor: "Clients wanting long-lasting curl and eye definition without makeup.",
  },
  {
    icon: "✨",
    title: "Full Face Refresh Package",
    price: "Lash tint + lift",
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

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Choose Your Appointment"
        title="Book based on your last visit."
        description="Choose based on how long it's been since your last color visit. If you're unsure, select the closest option — I'll adjust your service at your appointment."
      />

      <section className="px-6 lg:px-8 pb-24 md:pb-32">
        <div className="max-w-4xl mx-auto space-y-16 md:space-y-20">
          {appointments.map((a) => (
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
                  {a.priceNote && (
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
                {a.note ? (
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
        </div>
      </section>

      <section className="px-6 lg:px-8 pb-24 md:pb-32 bg-beige/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 pt-20">
            <span className="eyebrow block mb-4">Scalp + Shampoo Upgrades</span>
            <h2 className="font-serif italic text-4xl md:text-5xl leading-tight mb-5">
              Elevate your wash experience.
            </h2>
          </div>

          <div className="space-y-10">
            {scalpAddons.map((s) => (
              <article
                key={s.title}
                className="border border-foreground/10 bg-background p-8 md:p-10 space-y-5"
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
                          <span>✔</span>
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
          </div>
        </div>
      </section>



      <section className="px-6 lg:px-8 pb-24 md:pb-32 bg-beige/20">
        <div className="max-w-4xl mx-auto pt-20">
          <div className="text-center mb-12">
            <span className="eyebrow block mb-4">Esthetic Add-Ons</span>
            <h2 className="font-serif italic text-4xl md:text-5xl leading-tight mb-5">
              Beauty add-ons, perfectly paired.
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              Enhance your hair appointment with quick, high-impact beauty add-ons
              designed to fit seamlessly into your visit. Focused on maintenance, glow,
              and effortless beauty.
            </p>
          </div>

          <div className="border border-foreground/10 bg-background p-8 md:p-10 mb-12">
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
                className="border border-foreground/10 bg-background p-8 md:p-10 space-y-5"
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
        </div>
      </section>

      <section className="py-24 px-6 lg:px-8 text-center bg-beige/40">
        <h2 className="font-serif italic text-4xl md:text-5xl mb-6 max-w-2xl mx-auto leading-tight">
          Still not sure where to begin?
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
