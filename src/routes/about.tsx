import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import aboutPortrait from "@/assets/about-portrait.jpg";
import heroSalon from "@/assets/hero-salon.jpg";
import ritualFlatlay from "@/assets/ritual-flatlay.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Julia Marks Beauty" },
      {
        name: "description",
        content:
          "Meet the founder of Julia Marks Beauty — a beauty professional and mother passionate about helping women feel confident, radiant, and cared for.",
      },
      { property: "og:title", content: "About — Julia Marks Beauty" },
      { property: "og:image", content: aboutPortrait },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title="Beauty rooted in intention."
        description="A boutique studio born from a lifelong love of helping women feel seen, soft, and confident in their own skin."
      />

      <section className="py-12 md:py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          <img
            src={aboutPortrait}
            alt="Founder Julia Marks in her boutique studio"
            width={900}
            height={1200}
            loading="lazy"
            className="w-full aspect-[3/4] object-cover"
          />
          <div className="space-y-6">
            <span className="eyebrow block">The Founder</span>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Hi, I'm <em className="italic text-accent">Julia.</em>
            </h2>
            <p className="text-foreground/70 leading-relaxed">
              I'm a licensed beauty professional, a mother, and a quiet
              perfectionist who believes that real luxury is feeling fully cared for.
              Julia Marks Beauty began in a small corner of my home, where friends would
              come for color, conversation, and the kind of confidence boost only a
              good hair day can give.
            </p>
            <p className="text-foreground/70 leading-relaxed">
              Over the years, my work has expanded — from balayage to scalp facials,
              brow design to skin therapy — but the philosophy hasn't changed:
              beauty is a form of self-reverence. It's a way of saying,
              <em className="italic"> "I'm worth the time."</em>
            </p>
            <p className="text-foreground/70 leading-relaxed">
              Whether you're booking your first scalp facial, refreshing your color,
              or building a new at-home ritual, you'll always be met with intention,
              warmth, and education here.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6 lg:px-8 bg-beige/40">
        <div className="max-w-4xl mx-auto text-center">
          <span className="eyebrow block mb-6">Our Values</span>
          <h2 className="font-serif italic text-4xl md:text-5xl mb-16">
            What guides every visit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            {[
              { title: "Intentional", text: "Every product, treatment, and conversation is chosen with care." },
              { title: "Educational", text: "We teach you the why — so beauty becomes a lifelong ritual, not a trend." },
              { title: "Elevated", text: "A boutique standard of warmth, hygiene, and craft in every detail." },
            ].map((v) => (
              <div key={v.title} className="space-y-3">
                <h3 className="font-serif text-2xl">{v.title}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <img src={heroSalon} alt="Studio interior" loading="lazy" className="w-full aspect-square object-cover" />
          <img src={ritualFlatlay} alt="Studio ritual flatlay" loading="lazy" className="w-full aspect-square object-cover" />
        </div>
      </section>

      <section className="py-24 px-6 lg:px-8 text-center bg-foreground text-background">
        <h2 className="font-serif italic text-4xl md:text-5xl mb-8 max-w-2xl mx-auto leading-tight">
          Ready to feel beautifully cared for?
        </h2>
        <Link
          to="/booking"
          className="inline-block bg-background text-foreground px-10 py-4 text-[11px] uppercase tracking-luxe hover:bg-accent hover:text-background transition-colors"
        >
          Book Your Visit
        </Link>
      </section>
    </>
  );
}
