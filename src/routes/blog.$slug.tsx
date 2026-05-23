import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { BLOG_POSTS, getPostBySlug } from "@/lib/blog-posts";
import { VAGARO_BOOKING_URL } from "@/lib/booking";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) {
      return { meta: [{ title: "Article not found" }] };
    }
    const url = `/blog/${post.slug}`;
    return {
      meta: [
        { title: `${post.title} | Julia Marks Beauty` },
        { name: "description", content: post.description },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.description },
        { property: "og:type", content: "article" },
        { property: "og:image", content: post.image },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: post.image },
        { property: "article:published_time", content: post.publishedAt },
        { property: "article:section", content: post.category },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.description,
            image: [post.image],
            datePublished: post.publishedAt,
            articleSection: post.category,
            author: { "@type": "Person", name: "Julia Marks" },
            publisher: {
              "@type": "Organization",
              name: "Julia Marks Beauty",
            },
          }),
        },
      ],
    };
  },
  component: BlogArticle,
  notFoundComponent: () => (
    <div className="pt-40 pb-20 text-center px-6">
      <h1 className="font-serif text-4xl mb-4">Article not found</h1>
      <Link to="/blog" className="underline">
        Back to the blog
      </Link>
    </div>
  ),
});

function BlogArticle() {
  const { post } = Route.useLoaderData();
  const related = BLOG_POSTS.filter(
    (p) => p.slug !== post.slug && p.category === post.category,
  ).slice(0, 3);

  return (
    <>
      <article>
        <section className="pt-36 md:pt-44 pb-12 px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="eyebrow mb-6">
              {post.category} • {post.readingMinutes} min read
            </p>
            <h1 className="font-serif font-light text-4xl md:text-6xl leading-[1.1] text-balance">
              {post.title}
            </h1>
            <p className="mt-8 text-lg text-foreground/70 leading-relaxed">
              {post.description}
            </p>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <img
            src={post.image}
            alt={post.imageAlt}
            className="w-full aspect-[16/9] object-cover"
          />
        </div>

        <section className="py-16 px-6 lg:px-8">
          <div className="max-w-2xl mx-auto space-y-10">
            {post.body.map((b, i) => (
              <div key={i}>
                {b.h2 && (
                  <h2 className="font-serif text-2xl md:text-3xl mb-4">{b.h2}</h2>
                )}
                <p className="text-foreground/75 leading-relaxed text-lg">{b.text}</p>
              </div>
            ))}
          </div>
        </section>
      </article>

      <section className="py-16 px-6 lg:px-8 bg-foreground text-background text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl mb-4">
            Ready to experience it for yourself?
          </h2>
          <p className="text-background/70 mb-8 leading-relaxed">
            Book your luxury hair, scalp, or esthetic service at Julia Marks Beauty in
            Spring Hill, TN.
          </p>
          <a
            href={VAGARO_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-background text-foreground text-[11px] uppercase tracking-luxe hover:bg-accent hover:text-background transition-colors"
          >
            Book Your Appointment
          </a>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-20 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <span className="eyebrow block text-center mb-6">Continue Reading</span>
            <h2 className="font-serif italic text-3xl md:text-4xl text-center mb-12">
              More from {post.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="group"
                >
                  <div className="aspect-[4/5] overflow-hidden bg-beige/40">
                    <img
                      src={p.image}
                      alt={p.imageAlt}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <h3 className="font-serif text-xl mt-5 group-hover:text-accent transition-colors">
                    {p.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
