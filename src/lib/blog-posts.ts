import heroBlonde from "@/assets/gallery-blonde.jpg";

export type BlogCategory =
  | "Hair Care"
  | "Scalp Health"
  | "Hair Growth"
  | "Blonding Education"
  | "Beauty Routines"
  | "Self-Care & Confidence"
  | "Styling Tutorials";

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: BlogCategory;
  readingMinutes: number;
  publishedAt: string;
  image: string;
  imageAlt: string;
  body: { h2?: string; text: string }[];
}

export const BLOG_CATEGORIES: BlogCategory[] = [
  "Hair Care",
  "Scalp Health",
  "Hair Growth",
  "Blonding Education",
  "Beauty Routines",
  "Self-Care & Confidence",
  "Styling Tutorials",
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "summer-hair-care-guide",
    title: "Summer Hair Care: How to Protect Your Hair From Pools, Chlorine & Green Tones",
    description: "Summer means pool days, vacations, and fun in the sun but it can also be tough on your hair, especially if you’re spending time in chlorine or salt water.",
    category: "Hair Care",
    readingMinutes: 6,
    publishedAt: "2026-05-26",
    image: heroBlonde,
    imageAlt: "Summer hair care tips from a luxury hair salon in Spring Hill TN",
    body: [
      { text: "Summer means pool days, vacations, and fun in the sun but it can also be tough on your hair, especially if you’re spending time in chlorine or salt water." },
      { text: "If you’ve ever noticed your hair feeling dry, turning brassy, or even taking on a green tint after swimming, you’re not alone. This is extremely common specially for blondes and color-treated hair." },
      { text: "Here’s how to protect your hair all summer long." },
      { h2: "Why Pools Turn Hair Dry or Green", text: "Chlorine is designed to clean pools, but it also strips your hair of its natural oils. This leaves hair dry, rough, and more porous." },
      { text: "When hair is porous (especially blonde or lightened hair), it can absorb minerals like copper from pool water. This is what can cause that unwanted greenish tint." },
      { h2: "How to Prevent Chlorine Damage", text: "The best protection starts before you get in the pool:\n\n* Wet your hair with clean water first (this reduces how much chlorine it absorbs)\n* Apply a leave-in conditioner or lightweight oil as a barrier\n* Braid your hair or keep it up to limit exposure\n\nThink of it like prepping your hair before it hits the water." },
      { h2: "After Swimming Care Routine", text: "What you do after the pool matters just as much:\n\n* Rinse your hair immediately with fresh water\n* Use a gentle, clarifying shampoo 1–2 times a week (not daily)\n* Follow with a deep conditioning treatment to restore moisture\n\nIf your hair feels dry or tangly after swimming, don’t ignore it; rehydration is key." },
      { h2: "How to Fix Green or Brassy Pool Hair", text: "If your hair already has a green tint:\n\n* Use a clarifying shampoo first\n* Follow with a professional toner or purple shampoo (for blondes)\n* In more stubborn cases, a salon treatment may be needed to fully correct it\n\nPrevention is always easier than correction but it is fixable." },
    ],
  },
];

export function getPostBySlug(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
