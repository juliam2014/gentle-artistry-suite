import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import galleryBlonde from "/3d35bc30-57b1-48e7-a442-9c9c4da3aee3.jpg";
import galleryBrunette from "/bc63465d-24a1-4f63-9cc4-6ee86ab3fed7.jpg";
import gallerySkin from "/d676a793-910d-47af-979f-ca8ff288b83e.jpg";
import galleryScalp from "/7d38846f-5dd7-4cbf-9577-7561fb56fefb.jpg";
import ritualFlatlay from "/cb2bfcd9-394d-448e-a2fe-a3eacba0089c.jpg";
import productBrush from "/bdd11721-e3e1-4409-99f5-0f511046f7c9.jpg";
import juliaEditorial1 from "@/assets/julia-editorial-1.jpg";
import juliaEditorial2 from "@/assets/julia-editorial-2.jpg";

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

const items = [
  { img: juliaEditorial1, label: "Editorial — Julia" },
  { img: juliaEditorial2, label: "Behind the Chair" },
  { img: galleryBlonde, label: "money piece with teasy highlights" },
  { img: galleryBrunette, label: "Dimensional Brunette" },
  { img: galleryScalp, label: "heavy blonding" },
  { img: gallerySkin, label: "Blonding and tonal refresh" },
  { img: productBrush, label: "Finishing Touch" },
  { img: ritualFlatlay, label: "After Care Ritual" },
];

function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Quiet, radiant results."
        description="A curated archive of transformations — every shade, treatment, and finishing touch."
      />

      <section className="px-6 lg:px-8 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {items.map((i, idx) => (
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
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
