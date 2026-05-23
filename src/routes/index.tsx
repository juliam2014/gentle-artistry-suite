import { createFileRoute, Link } from "@tanstack/react-router";
import { Newsletter } from "@/components/site/Newsletter";
import { VAGARO_BOOKING_URL } from "@/lib/booking";
import ritualFlatlay from "/c5d59189-5d6f-42dc-9c22-50637e67019f.jpg";
import juliaEditorial1 from "/7e0fe5a7-9a54-4e9a-89fa-683b4a18d3ed.jpg";
import salonSpace1 from "@/assets/salon-space-1.jpg";
import salonSpace2 from "@/assets/salon-space-2.jpg";
import salonSpace3 from "@/assets/salon-space-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Luxury Hair Salon & Scalp Wellness in Spring Hill, TN | Julia Marks Beauty",
      },
      {
        name: "description",
        content:
          "Boutique luxury hair salon, balayage & blonding specialist, and scalp wellness studio in Spring Hill, TN. Serving Franklin, Columbia & Nashville with custom dimensional color, scalp facials, and luxury esthetic services.",
      },
      {
        property: "og:title",
        content: "Luxury Hair Salon & Scalp Wellness | Spring Hill, TN",
      },
      {
        property: "og:description",
        content:
          "Custom balayage, blonding, scalp facials, and beauty services in Spring Hill, TN.",
      },
      { property: "og:image", content: juliaEditorial1 },
      { property: "og:url", content: "/" },
      { name: "twitter:image", content: juliaEditorial1 },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});


const testimonials = [
  {
    quote:
      "I left feeling like the most radiant version of myself. The scalp facial was unlike anything I've experienced — pure ritual, pure care.",
    name: "Olivia M.",
    detail: "Scalp Facial + Blonding",
  },
  {
    quote:
      "Every appointment feels like a quiet pause from the world. The artistry, the warmth, the intentionality — this is luxury done right.",
    name: "Hannah R.",
    detail: "Dimensional Color Client",
  },
  {
    quote:
      "I finally feel confident in my hair and skin again. The education and care here is unmatched.",
    name: "Sienna T.",
    detail: "Member, The Sanctuary",
  },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="pt-40 md:pt-44 pb-20 md:pb-24 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src="/0f629afe-5500-44f1-a354-8ed52f0f7f31.jpg"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
        </div>
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <span className="eyebrow mb-6 animate-fade-in">The Ritual of Being</span>
          <h1 className="font-serif font-light text-6xl md:text-8xl leading-[1.05] text-balance animate-fade-up max-w-[15ch]">
            Radiate from <em className="italic text-accent">within</em>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-foreground/70 font-light leading-relaxed animate-fade-up [animation-delay:200ms]">
            A boutique sanctuary for intentional beauty. We blend advanced scalp
            health, customized hair artistry, and holistic skincare to elevate your
            natural confidence.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4 animate-fade-up [animation-delay:400ms]">
            <a
              href={VAGARO_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-foreground text-background text-[11px] uppercase tracking-luxe hover:bg-accent transition-colors"
            >
              Book Appointment
            </a>
            <Link
              to="/services"
              className="px-10 py-4 border border-foreground/20 text-[11px] uppercase tracking-luxe hover:bg-beige transition-colors"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT JULIA */}
      <section className="py-24 md:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Photo — large, editorial crop */}
            <div className="lg:col-span-5">
              <div className="relative">
                <img
                  src={juliaEditorial1}
                  alt="Julia Marks — owner and lead artist at Julia Marks Beauty"
                  width={800}
                  height={1000}
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-24 h-24 md:w-32 md:h-32 border border-foreground/10 bg-background/80 backdrop-blur-sm flex items-center justify-center">
                  <span className="font-serif italic text-lg md:text-xl text-accent">JM</span>
                </div>
              </div>
            </div>

            {/* Text — warm and personal */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <span className="eyebrow block">Meet Julia</span>
                <h2 className="font-serif text-4xl md:text-6xl leading-[1.1]">
                  The heart behind <em className="italic text-accent">every detail</em>
                </h2>
              </div>

              <div className="space-y-6 text-foreground/70 leading-relaxed max-w-xl">
                <p>
                  Hi, I'm Julia — a beauty artist, scalp wellness enthusiast, and the founder of this studio.
                  My journey started with a simple belief: that every person who sits in my chair deserves
                  to feel seen, cared for, and genuinely radiant.
                </p>
                <p>
                  Over the years, I've trained in advanced color techniques, therapeutic scalp care,
                  and holistic esthetics — but the real magic happens in the connection. I listen.
                  I customize. I treat your hair and skin like the living, breathing expressions of you that they are.
                </p>
                <p>
                  When you book with me, you're not just getting a service. You're stepping into a space
                  where your comfort matters, your time is respected, and your natural beauty is honored.
                  Let's create something beautiful together.
                </p>
              </div>

              <div className="pt-4 flex items-center gap-8">
                <div>
                  <p className="font-serif text-3xl text-accent">10+</p>
                  <p className="text-[10px] uppercase tracking-luxe text-foreground/50 mt-1">Years of Experience</p>
                </div>
                <div className="w-px h-10 bg-foreground/10" />
                <div>
                  <p className="font-serif text-3xl text-accent">500+</p>
                  <p className="text-[10px] uppercase tracking-luxe text-foreground/50 mt-1">Happy Clients</p>
                </div>
                <div className="w-px h-10 bg-foreground/10" />
                <div>
                  <p className="font-serif text-3xl text-accent">1</p>
                  <p className="text-[10px] uppercase tracking-luxe text-foreground/50 mt-1">Quiet Sanctuary</p>
                </div>
              </div>

              <a
                href={VAGARO_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-foreground text-background text-[11px] uppercase tracking-luxe hover:bg-accent transition-colors mt-2"
              >
                Book With Julia
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY / PILLARS */}
      <section className="py-24 md:py-32 px-6 lg:px-8 bg-beige/40">
        <div className="max-w-5xl mx-auto text-center">
          <span className="eyebrow block mb-6">Our Philosophy</span>
          <blockquote className="font-serif italic text-3xl md:text-5xl leading-tight text-balance">
            “Beauty is an act of self-reverence. When we care for our scalp, skin,
            and spirit, we invite a deeper sense of presence.”
          </blockquote>
        </div>

        <div className="max-w-6xl mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {[
            {
              n: "01",
              title: "Hair Artistry",
              text: "Lived-in blonding, dimensional brunettes, and sculpted cuts tailored to your natural movement.",
            },
            {
              n: "02",
              title: "Scalp Wellness",
              text: "Therapeutic scalp facials and treatments that build the foundation of long-term hair health.",
            },
            {
              n: "03",
              title: "Skin Radiance",
              text: "Focused esthetic services and brow & lash artistry that restore your natural glow.",
            },
            {
              n: "04",
              title: "Education",
              text: "Curated guides, workshops, and membership content to master your beauty ritual at home.",
            },
          ].map((p) => (
            <div key={p.n} className="space-y-4">
              <p className="text-[10px] font-medium uppercase tracking-luxe text-accent">
                {p.n}
              </p>
              <h3 className="font-serif text-2xl md:text-3xl">{p.title}</h3>
              <p className="text-sm leading-relaxed text-foreground/60">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* THE STUDIO */}
      <section className="py-24 md:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="eyebrow block mb-6">The Studio</span>
            <h2 className="font-serif italic text-4xl md:text-5xl">A space to exhale</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <figure className="space-y-4">
              <img
                src={salonSpace1}
                alt="The waiting lounge with soft cream chairs and natural light"
                width={800}
                height={1000}
                loading="lazy"
                className="w-full aspect-[3/4] object-cover"
              />
              <figcaption className="text-[10px] uppercase tracking-luxe text-foreground/50 text-center">
                The Lounge
              </figcaption>
            </figure>
            <figure className="space-y-4">
              <img
                src={salonSpace2}
                alt="A floral arrangement on a marble table in natural light"
                width={800}
                height={1000}
                loading="lazy"
                className="w-full aspect-[3/4] object-cover"
              />
              <figcaption className="text-[10px] uppercase tracking-luxe text-foreground/50 text-center">
                The Details
              </figcaption>
            </figure>
            <figure className="space-y-4">
              <img
                src={salonSpace3}
                alt="The shampoo and wash station"
                width={800}
                height={1000}
                loading="lazy"
                className="w-full aspect-[3/4] object-cover"
              />
              <figcaption className="text-[10px] uppercase tracking-luxe text-foreground/50 text-center">
                The Wash
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* BOOKING TEASER */}
      <section className="py-24 md:py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          <img
            src={ritualFlatlay}
            alt="Glass hair oil bottle and marble comb on natural linen"
            width={900}
            height={1100}
            loading="lazy"
            className="w-full aspect-[4/5] object-cover"
          />
          <div className="space-y-8">
            <span className="eyebrow block">Reserve Your Experience</span>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Begin your journey to radiant confidence.
            </h2>
            <div className="space-y-6 pt-2">
              {[
                { name: "The Signature Scalp Facial", meta: "75 Minutes • From $145" },
                { name: "Lived-in Dimensional Color", meta: "180 Minutes • From $325" },
                { name: "Essential Esthetic Refresh", meta: "45 Minutes • From $95" },
              ].map((s) => (
                <a
                  key={s.name}
                  href={VAGARO_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border-b border-foreground/10 pb-6 flex justify-between items-center"
                >
                  <div>
                    <p className="font-serif text-xl">{s.name}</p>
                    <p className="text-[10px] text-foreground/50 uppercase tracking-luxe mt-1">
                      {s.meta}
                    </p>
                  </div>
                  <span className="text-[11px] uppercase tracking-luxe group-hover:translate-x-2 transition-transform">
                    Book →
                  </span>
                </a>
              ))}
            </div>
            <Link
              to="/services"
              className="inline-block border-b border-foreground py-1 text-[11px] uppercase tracking-luxe font-medium"
            >
              View Full Service Menu
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32 px-6 lg:px-8 bg-beige/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="eyebrow block mb-6">In Her Words</span>
            <h2 className="font-serif italic text-4xl md:text-5xl">Quiet praise</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {testimonials.map((t) => (
              <figure key={t.name} className="space-y-6 text-center md:text-left">
                <blockquote className="font-serif italic text-xl leading-relaxed text-foreground/80">
                  “{t.quote}”
                </blockquote>
                <figcaption>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-[10px] uppercase tracking-luxe text-foreground/50 mt-1">
                    {t.detail}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL */}
      <section className="py-24 px-6 lg:px-8 bg-beige/40 text-center">
        <span className="eyebrow block mb-6">Follow Along</span>
        <h2 className="font-serif italic text-4xl md:text-5xl mb-6">@juliamarksbeauty</h2>
        <p className="text-foreground/60 max-w-xl mx-auto mb-8">
          Daily inspiration from the studio — rituals, transformations, and quiet moments of beauty.
        </p>
        <div className="flex justify-center gap-6 text-[11px] uppercase tracking-luxe">
          <a href="#" className="border-b border-foreground/20 hover:border-foreground pb-1">Instagram</a>
          <a href="#" className="border-b border-foreground/20 hover:border-foreground pb-1">TikTok</a>
          <a href="#" className="border-b border-foreground/20 hover:border-foreground pb-1">Pinterest</a>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
