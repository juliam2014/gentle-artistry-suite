import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import galleryBlonde from "@/assets/gallery-blonde.jpg";
import galleryBrunette from "@/assets/gallery-brunette.jpg";
import gallerySkin from "@/assets/gallery-skin.jpg";
import galleryScalp from "@/assets/gallery-scalp.jpg";
import ritualFlatlay from "@/assets/ritual-flatlay.jpg";
import productBrush from "@/assets/product-brush.jpg";
import juliaEditorial1 from "@/assets/julia-editorial-1.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Julia Marks Beauty" },
      {
        name: "description",
        content:
          "Before & after portfolio of blonding, brunettes, scalp transformations, styling and skin services.",
      },
      { property: "og:title", content: "Gallery — Julia Marks Beauty" },
      { property: "og:image", content: galleryBlonde },
    ],
  }),
  component: GalleryPage,
});

const categories = ["All", "Blonding", "Brunettes", "Scalp", "Styling", "Skin"];

const items = [
  { cat: "Blonding", img: galleryBlonde, label: "Honey Balayage" },
  { cat: "Brunettes", img: galleryBrunette, label: "Dimensional Brunette" },
  { cat: "Scalp", img: galleryScalp, label: "Scalp Detox" },
  { cat: "Skin", img: gallerySkin, label: "Glow Facial" },
  { cat: "Styling", img: productBrush, label: "Finishing Touch" },
  { cat: "Blonding", img: ritualFlatlay, label: "After Care Ritual" },
  { cat: "Brunettes", img: galleryBrunette, label: "Soft Mocha" },
  { cat: "Scalp", img: galleryScalp, label: "Hydration Therapy" },
  { cat: "Skin", img: gallerySkin, label: "Express Radiance" },
];

function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? items : items.filter((i) => i.cat === filter);

  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Quiet, radiant results."
        description="A curated archive of transformations — every shade, treatment, and finishing touch."
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

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filtered.map((i, idx) => (
              <figure key={idx} className="break-inside-avoid">
                <div className="overflow-hidden bg-beige/40">
                  <img
                    src={i.img}
                    alt={i.label}
                    loading="lazy"
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <figcaption className="mt-3 flex items-center justify-between text-[10px] uppercase tracking-luxe text-foreground/50">
                  <span>{i.label}</span>
                  <span>{i.cat}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
