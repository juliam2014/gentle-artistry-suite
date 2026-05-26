import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Julia Marks Beauty" },
      {
        name: "description",
        content:
          "Hair services, scalp + shampoo add-ons, and esthetic services in Spring Hill, TN. Choose the experience that fits your visit.",
      },
      { property: "og:title", content: "Services — Julia Marks Beauty" },
      {
        property: "og:description",
        content:
          "Three curated menus: Hair Services, Scalp Add-Ons, and Esthetic Services.",
      },
    ],
  }),
  component: ServicesPage,
});

const categories = [
  {
    to: "/services/hair" as const,
    eyebrow: "Hair",
    title: "Hair Services",
    description:
      "Color, blonding, brunette dimension, gloss, and transformations — booked based on how long it's been since your last visit.",
    cta: "Explore Hair Services",
  },
  {
    to: "/services/scalp" as const,
    eyebrow: "Scalp",
    title: "Scalp Add-Ons",
    description:
      "Therapeutic scalp + shampoo upgrades. Reset buildup, melt tension, and support healthier hair from the root.",
    cta: "Explore Scalp Add-Ons",
  },
  {
    to: "/services/esthetics" as const,
    eyebrow: "Esthetica",
    title: "Esthetic Services",
    description:
      "Brows, lashes, and skin glow — beauty add-ons curated into focused packages for an effortless polished look.",
    cta: "Explore Esthetic Services",
  },
];

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Service Menu"
        title="Choose your experience."
        description="Three curated menus — pick the space that fits your visit. Each can be booked on its own or layered into one luxurious appointment."
      />

      <section className="px-6 lg:px-8 pb-24 md:pb-32">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {categories.map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="group border border-foreground/10 bg-beige/20 p-8 md:p-10 flex flex-col gap-6 hover:bg-beige/40 hover:border-accent/40 transition-colors"
            >
              <span className="eyebrow text-accent">{c.eyebrow}</span>
              <h2 className="font-serif italic text-3xl md:text-4xl leading-tight">
                {c.title}
              </h2>
              <p className="text-sm text-foreground/70 leading-relaxed flex-1">
                {c.description}
              </p>
              <span className="text-[11px] uppercase tracking-luxe border-b border-accent text-accent self-start pb-1 group-hover:text-foreground group-hover:border-foreground transition-colors">
                {c.cta} →
              </span>
            </Link>
          ))}
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
