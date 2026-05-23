import { Link } from "@tanstack/react-router";
import { VAGARO_BOOKING_URL } from "@/lib/booking";
import { BUSINESS, NEARBY_CITIES } from "@/lib/local-seo";

export interface FAQ {
  q: string;
  a: string;
}

export interface LocalServicePageProps {
  eyebrow: string;
  h1: string;
  intro: string;
  heroImage: string;
  heroAlt: string;
  sections: { h2: string; body: string }[];
  benefits: string[];
  faqs: FAQ[];
  relatedLinks: { to: string; label: string }[];
  cta: string;
  pathname: string;
}

export function LocalServicePage(props: LocalServicePageProps) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: props.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: props.h1,
    provider: {
      "@type": "HairSalon",
      name: BUSINESS.name,
      address: {
        "@type": "PostalAddress",
        streetAddress: BUSINESS.street,
        addressLocality: BUSINESS.city,
        addressRegion: BUSINESS.regionShort,
        postalCode: BUSINESS.postalCode,
        addressCountry: "US",
      },
      telephone: BUSINESS.phone,
    },
    areaServed: NEARBY_CITIES,
    description: props.intro,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />

      <section className="pt-36 md:pt-44 pb-16 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <span className="eyebrow mb-6 block">{props.eyebrow}</span>
          <h1 className="font-serif font-light text-5xl md:text-7xl leading-[1.05] text-balance">
            {props.h1}
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-lg text-foreground/70 leading-relaxed">
            {props.intro}
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={VAGARO_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-foreground text-background text-[11px] uppercase tracking-luxe hover:bg-accent transition-colors"
            >
              {props.cta}
            </a>
            <a
              href={`tel:${BUSINESS.phone.replace(/[^\d+]/g, "")}`}
              className="px-10 py-4 border border-foreground/20 text-[11px] uppercase tracking-luxe hover:bg-beige transition-colors"
            >
              Call {BUSINESS.phone}
            </a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-16">
          <img
            src={props.heroImage}
            alt={props.heroAlt}
            className="w-full aspect-[16/9] object-cover"
            loading="eager"
          />
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-14">
          {props.sections.map((s) => (
            <div key={s.h2}>
              <h2 className="font-serif text-3xl md:text-4xl mb-5">{s.h2}</h2>
              <p className="text-foreground/70 leading-relaxed text-lg whitespace-pre-line">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 bg-beige/40">
        <div className="max-w-5xl mx-auto">
          <span className="eyebrow block mb-6 text-center">Why Clients Choose Us</span>
          <h2 className="font-serif italic text-3xl md:text-5xl text-center mb-12">
            The {BUSINESS.name} difference
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {props.benefits.map((b) => (
              <li
                key={b}
                className="border-l border-accent pl-5 py-2 text-foreground/75 leading-relaxed"
              >
                {b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <span className="eyebrow block mb-6">Serving Middle Tennessee</span>
          <h2 className="font-serif text-3xl md:text-4xl mb-5">
            Conveniently located near Franklin, Columbia & Nashville
          </h2>
          <p className="text-foreground/70 leading-relaxed text-lg">
            Based in {BUSINESS.city}, {BUSINESS.regionShort}, our boutique studio welcomes
            clients from across Middle Tennessee — including {NEARBY_CITIES.join(", ")} —
            seeking a luxury hair, scalp, and skincare experience rooted in artistry,
            education, and intentional self-care.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8 bg-beige/30">
        <div className="max-w-3xl mx-auto">
          <span className="eyebrow block mb-6 text-center">Frequently Asked</span>
          <h2 className="font-serif italic text-3xl md:text-5xl text-center mb-12">
            Questions, answered
          </h2>
          <div className="space-y-8">
            {props.faqs.map((f) => (
              <details key={f.q} className="border-b border-foreground/10 pb-6 group">
                <summary className="cursor-pointer list-none flex justify-between items-start gap-6">
                  <h3 className="font-serif text-xl md:text-2xl">{f.q}</h3>
                  <span className="text-2xl font-light text-accent group-open:rotate-45 transition-transform">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-foreground/70 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <span className="eyebrow block mb-6">Continue Exploring</span>
          <h2 className="font-serif italic text-3xl md:text-4xl mb-10">
            Discover related services & education
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {props.relatedLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="px-6 py-3 border border-foreground/20 text-[11px] uppercase tracking-luxe hover:bg-beige transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-8 bg-foreground text-background text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl mb-6">
            Ready to begin your transformation?
          </h2>
          <p className="text-background/70 mb-10 leading-relaxed">
            Reserve your appointment with {BUSINESS.name} — luxury hair, scalp wellness,
            and skincare in {BUSINESS.city}, {BUSINESS.regionShort}.
          </p>
          <a
            href={VAGARO_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-background text-foreground text-[11px] uppercase tracking-luxe hover:bg-accent hover:text-background transition-colors"
          >
            {props.cta}
          </a>
        </div>
      </section>
    </>
  );
}
