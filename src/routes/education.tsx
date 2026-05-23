import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Newsletter } from "@/components/site/Newsletter";
import ritualFlatlay from "@/assets/ritual-flatlay.jpg";
import gallerySkin from "@/assets/gallery-skin.jpg";
import galleryScalp from "@/assets/gallery-scalp.jpg";
import productSerum from "@/assets/product-serum.jpg";
import productCream from "@/assets/product-cream.jpg";
import productBrush from "@/assets/product-brush.jpg";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Journal & Education — Julia Marks Beauty" },
      {
        name: "description",
        content:
          "A library of beauty education — scalp health, hair growth, styling tutorials, skincare routines, and self-care wisdom.",
      },
      { property: "og:title", content: "The Journal — Julia Marks Beauty" },
    ],
  }),
  component: EducationPage,
});

const articles = [
  { title: "The Foundation of Hair Growth Starts at the Scalp", category: "Scalp Health", read: "6 min read", img: galleryScalp },
  { title: "Building a Slow, Intentional Morning Beauty Ritual", category: "Self-Care", read: "5 min read", img: ritualFlatlay },
  { title: "How to Style Soft, Lived-in Waves at Home", category: "Hair Styling", read: "8 min read", img: productBrush },
  { title: "Reading Your Skin: A Gentle Guide to Barrier Health", category: "Skincare", read: "7 min read", img: gallerySkin },
  { title: "The Quiet Confidence of Showing Up for Yourself", category: "Wellness", read: "4 min read", img: productCream },
  { title: "Why Your Scalp Needs a Facial Too", category: "Scalp Health", read: "6 min read", img: productSerum },
];

const products = [
  { title: "The Scalp Health Masterclass", type: "Mini Course", price: "$48", img: galleryScalp },
  { title: "Lived-in Color: At-Home Care Guide", type: "Digital PDF", price: "$24", img: ritualFlatlay },
  { title: "The Confidence Reset Workbook", type: "Workbook", price: "$32", img: productCream },
];

function EducationPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Journal"
        title="Beauty, slowly explained."
        description="Educational reads, tutorials, and rituals to help you understand and care for your hair, skin, and spirit."
      />

      <section className="px-6 lg:px-8 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {articles.map((a) => (
            <article key={a.title} className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden bg-beige/40">
                <img
                  src={a.img}
                  alt={a.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="mt-5 space-y-2">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-luxe text-foreground/50">
                  <span>{a.category}</span>
                  <span>{a.read}</span>
                </div>
                <h3 className="font-serif text-2xl leading-snug">{a.title}</h3>
                <p className="text-[11px] uppercase tracking-luxe text-accent pt-2">Read →</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32 px-6 lg:px-8 bg-beige/40">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="eyebrow block mb-6">The Sanctuary Membership</span>
            <h2 className="font-serif italic text-4xl md:text-5xl mb-4">
              Digital guides & mini courses
            </h2>
            <p className="text-foreground/60 max-w-xl mx-auto">
              Beautifully produced video tutorials, downloadable guides, and a private library
              for women who want to invest in lifelong beauty rituals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((p) => (
              <div key={p.title} className="bg-background border border-foreground/5">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="p-6 space-y-3">
                  <p className="text-[10px] uppercase tracking-luxe text-accent">{p.type}</p>
                  <h3 className="font-serif text-xl leading-snug">{p.title}</h3>
                  <div className="flex items-center justify-between pt-2">
                    <p className="text-sm font-medium">{p.price}</p>
                    <button className="text-[11px] uppercase tracking-luxe border-b border-foreground pb-0.5">
                      Get Access
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Newsletter />
    </>
  );
}
