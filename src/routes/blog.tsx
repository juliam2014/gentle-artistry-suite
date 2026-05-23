import { createFileRoute, Link } from "@tanstack/react-router";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/lib/blog-posts";

const TITLE = "Beauty, Hair & Scalp Wellness Blog | Julia Marks Beauty";
const DESCRIPTION =
  "Education from a luxury hair, scalp, and esthetic studio in Spring Hill, TN — covering hair care, scalp health, blonding, beauty routines, and feminine self-care.";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <>
      <section className="pt-36 md:pt-44 pb-16 px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <span className="eyebrow mb-6 block">The Journal</span>
          <h1 className="font-serif font-light text-5xl md:text-7xl leading-[1.05]">
            Beauty, hair & <em className="italic text-accent">scalp wellness</em>{" "}
            education
          </h1>
          <p className="mt-8 max-w-2xl mx-auto text-lg text-foreground/70 leading-relaxed">
            Thoughtful articles, tutorials, and rituals from a luxury beauty studio in
            Spring Hill, TN — written to help you care for your hair, scalp, and skin
            with intention.
          </p>
        </div>
      </section>

      <section className="py-10 px-6 lg:px-8 border-y border-foreground/10">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-3 justify-center">
          {BLOG_CATEGORIES.map((c) => (
            <span
              key={c}
              className="px-4 py-2 text-[10px] uppercase tracking-luxe border border-foreground/15 rounded-full text-foreground/70"
            >
              {c}
            </span>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="group block"
            >
              <div className="overflow-hidden aspect-[4/5] bg-beige/40">
                <img
                  src={post.image}
                  alt={post.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="mt-6 space-y-3">
                <p className="text-[10px] uppercase tracking-luxe text-accent">
                  {post.category} • {post.readingMinutes} min read
                </p>
                <h2 className="font-serif text-2xl leading-snug group-hover:text-accent transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  {post.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
