import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { Newsletter } from "@/components/site/Newsletter";
import productSerum from "@/assets/product-serum.jpg";
import productShampoo from "@/assets/product-shampoo.jpg";
import productBrush from "@/assets/product-brush.jpg";
import productCream from "@/assets/product-cream.jpg";
import ritualFlatlay from "@/assets/ritual-flatlay.jpg";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — Aura & Essence" },
      {
        name: "description",
        content:
          "Professional-grade haircare, scalp care, skincare, and beauty tools. Curated bundles, subscriptions, and digital guides.",
      },
      { property: "og:title", content: "Shop — Aura & Essence" },
      { property: "og:image", content: productSerum },
    ],
  }),
  component: ShopPage,
});

const categories = [
  "All",
  "Haircare",
  "Scalp Care",
  "Skincare",
  "Tools",
  "Bundles",
  "Digital Guides",
];

const products = [
  { name: "Revitalizing Root Serum", category: "Scalp Care", price: "$64", rating: 4.9, reviews: 128, img: productSerum },
  { name: "Botanical Fusion Wash", category: "Haircare", price: "$48", rating: 4.8, reviews: 96, img: productShampoo },
  { name: "Scalp Stimulating Brush", category: "Tools", price: "$32", rating: 4.9, reviews: 211, img: productBrush },
  { name: "Whipped Dew Barrier Cream", category: "Skincare", price: "$72", rating: 5.0, reviews: 84, img: productCream },
  { name: "The Ritual Set", category: "Bundles", price: "$148", rating: 5.0, reviews: 42, img: ritualFlatlay },
  { name: "Scalp Care Conditioner", category: "Haircare", price: "$44", rating: 4.7, reviews: 67, img: productShampoo },
  { name: "Radiance Facial Oil", category: "Skincare", price: "$86", rating: 4.9, reviews: 53, img: productSerum },
  { name: "Healthy Hair Guide (PDF)", category: "Digital Guides", price: "$18", rating: 4.8, reviews: 312, img: productCream },
];

function ShopPage() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? products : products.filter((p) => p.category === filter);

  return (
    <>
      <PageHeader
        eyebrow="The Shop"
        title="Elevated essentials."
        description="A curated edit of professional-grade products designed to extend your salon ritual at home."
      />

      <section className="px-6 lg:px-8 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-5 py-2 text-[11px] uppercase tracking-luxe border transition-colors ${
                  filter === c
                    ? "border-foreground bg-foreground text-background"
                    : "border-foreground/15 hover:bg-beige/50"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {filtered.map((p) => (
              <article key={p.name} className="group">
                <div className="aspect-[4/5] bg-beige/40 overflow-hidden">
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
                  <p className="text-[10px] uppercase tracking-luxe text-foreground/50">{p.category}</p>
                  <h3 className="font-serif text-lg mt-1">{p.name}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-sm">{p.price}</p>
                    <p className="text-[10px] text-foreground/50">★ {p.rating} ({p.reviews})</p>
                  </div>
                  <button className="mt-3 w-full py-3 border border-foreground/15 text-[10px] uppercase tracking-luxe hover:bg-foreground hover:text-background transition-colors">
                    Add to Bag
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 px-6 lg:px-8 bg-foreground text-background text-center">
        <span className="text-[11px] uppercase tracking-luxe text-accent block mb-4">Subscribe & Save</span>
        <h2 className="font-serif italic text-4xl md:text-5xl mb-4">Your ritual, replenished.</h2>
        <p className="text-background/70 max-w-xl mx-auto mb-8">
          Save 15% on every order, free shipping, and a complimentary gift every third delivery.
        </p>
        <button className="bg-background text-foreground px-10 py-4 text-[11px] uppercase tracking-luxe hover:bg-accent hover:text-background transition-colors">
          Explore Subscriptions
        </button>
      </section>

      <Newsletter />
    </>
  );
}
