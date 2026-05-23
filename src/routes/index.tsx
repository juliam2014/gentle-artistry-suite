import { createFileRoute, Link } from "@tanstack/react-router";
import { Newsletter } from "@/components/site/Newsletter";
import { VAGARO_BOOKING_URL } from "@/lib/booking";
import heroSalon from "@/assets/hero-salon.jpg";
import heroPortrait from "@/assets/hero-portrait.jpg";
import ritualFlatlay from "@/assets/ritual-flatlay.jpg";
import productSerum from "@/assets/product-serum.jpg";
import productShampoo from "@/assets/product-shampoo.jpg";
import productBrush from "@/assets/product-brush.jpg";
import productCream from "@/assets/product-cream.jpg";
import juliaEditorial1 from "@/assets/julia-editorial-1.jpg";
import juliaEditorial2 from "@/assets/julia-editorial-2.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Julia Marks Beauty — Luxury Beauty, Hair & Scalp Wellness" },
      {
        name: "description",
        content:
          "Boutique luxury salon and wellness studio for hair, scalp health, skincare, and intentional self-care.",
      },
      { property: "og:title", content: "Julia Marks Beauty — Luxury Beauty Studio" },
      { property: "og:image", content: heroSalon },
      { name: "twitter:image", content: heroSalon },
    ],
  }),
  component: Index,
});

const featuredProducts = [
  { name: "Revitalizing Root Serum", category: "Scalp Care", price: "$64", img: productSerum },
  { name: "Botanical Fusion Wash", category: "Cleanse", price: "$48", img: productShampoo },
  { name: "Scalp Stimulating Brush", category: "Tool", price: "$32", img: productBrush },
  { name: "Whipped Dew Barrier Cream", category: "Radiance", price: "$72", img: productCream },
];

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
      <section className="pt-40 md:pt-44 pb-20 md:pb-24 px-6 lg:px-8">
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
              to="/shop"
              className="px-10 py-4 border border-foreground/20 text-[11px] uppercase tracking-luxe hover:bg-beige transition-colors"
            >
              Shop Products
            </Link>
            <Link
              to="/services"
              className="px-10 py-4 border border-foreground/20 text-[11px] uppercase tracking-luxe hover:bg-beige transition-colors"
            >
              Explore Services
            </Link>
          </div>

          <div className="mt-20 md:mt-24 w-full grid grid-cols-12 gap-4 md:gap-6 animate-fade-up [animation-delay:600ms]">
            <div className="col-span-12 md:col-span-8">
              <img
                src={heroSalon}
                alt="Sun-drenched luxury salon interior with cream linen and organic textures"
                width={1600}
                height={900}
                className="w-full aspect-[16/9] object-cover"
              />
            </div>
            <div className="col-span-12 md:col-span-4 flex flex-col justify-end">
              <img
                src={heroPortrait}
                alt="Soft still life of fresh flowers and linen on a marble surface"
                width={800}
                height={1100}
                loading="lazy"
                className="w-full aspect-[3/4] object-cover"
              />
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

      {/* SHOP TEASER */}
      <section className="py-24 md:py-32 px-6 lg:px-8 bg-foreground text-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-md">
              <span className="text-[11px] uppercase tracking-luxe text-accent block mb-4">
                The Collection
              </span>
              <h2 className="font-serif text-4xl md:text-5xl mb-4">Elevated Essentials</h2>
              <p className="text-background/60 text-sm leading-relaxed">
                Professional-grade scalp and hair care, curated for your home ritual.
              </p>
            </div>
            <Link
              to="/shop"
              className="text-[11px] uppercase tracking-luxe border-b border-background/30 pb-1 hover:border-background"
            >
              Visit the Shop
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {featuredProducts.map((p) => (
              <Link to="/shop" key={p.name} className="group block">
                <div className="aspect-[4/5] bg-white/5 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    width={700}
                    height={900}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="mt-4">
                  <p className="text-[10px] uppercase tracking-luxe text-background/40">
                    {p.category}
                  </p>
                  <p className="font-serif text-lg mt-1">{p.name}</p>
                  <p className="text-sm mt-1 text-background/70">{p.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE/AFTER GALLERY TEASER */}
      <section className="py-24 md:py-32 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="eyebrow block mb-6">Transformations</span>
            <h2 className="font-serif italic text-4xl md:text-5xl">Real radiance</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <figure className="space-y-4">
              <img
                src={galleryBlonde}
                alt="Lived-in honey blonde balayage transformation"
                width={800}
                height={1000}
                loading="lazy"
                className="w-full aspect-[4/5] object-cover"
              />
              <figcaption className="text-[10px] uppercase tracking-luxe text-foreground/50">
                Blonding & Scalp Therapy
              </figcaption>
            </figure>
            <figure className="space-y-4">
              <img
                src={galleryBrunette}
                alt="Dimensional brunette with glossy waves"
                width={800}
                height={1000}
                loading="lazy"
                className="w-full aspect-[4/5] object-cover"
              />
              <figcaption className="text-[10px] uppercase tracking-luxe text-foreground/50">
                Dimensional Brunette
              </figcaption>
            </figure>
          </div>
          <div className="text-center mt-12">
            <Link
              to="/gallery"
              className="inline-block border-b border-foreground py-1 text-[11px] uppercase tracking-luxe font-medium"
            >
              View the Full Gallery
            </Link>
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
