import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "";

import { BLOG_POSTS } from "@/lib/blog-posts";

const staticEntries = [
  { path: "/", priority: "1.0", changefreq: "weekly" as const },
  { path: "/about", priority: "0.8", changefreq: "monthly" as const },
  { path: "/services", priority: "0.9", changefreq: "monthly" as const },
  { path: "/booking", priority: "0.9", changefreq: "weekly" as const },
  { path: "/shop", priority: "0.9", changefreq: "weekly" as const },
  { path: "/education", priority: "0.7", changefreq: "weekly" as const },
  { path: "/gallery", priority: "0.7", changefreq: "monthly" as const },
  { path: "/contact", priority: "0.6", changefreq: "monthly" as const },
  { path: "/blog", priority: "0.9", changefreq: "weekly" as const },
  { path: "/balayage-spring-hill-tn", priority: "0.9", changefreq: "monthly" as const },
  { path: "/blonding-specialist-spring-hill-tn", priority: "0.9", changefreq: "monthly" as const },
  { path: "/scalp-facial-spring-hill-tn", priority: "0.9", changefreq: "monthly" as const },
  { path: "/luxury-hair-salon-spring-hill-tn", priority: "0.9", changefreq: "monthly" as const },
  { path: "/hair-and-esthetic-services-spring-hill-tn", priority: "0.9", changefreq: "monthly" as const },
];

const blogEntries = BLOG_POSTS.map((p) => ({
  path: `/blog/${p.slug}`,
  priority: "0.7",
  changefreq: "monthly" as const,
}));

const entries = [...staticEntries, ...blogEntries];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = entries
          .map(
            (e) =>
              `  <url><loc>${BASE_URL}${e.path}</loc><changefreq>${e.changefreq}</changefreq><priority>${e.priority}</priority></url>`
          )
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
