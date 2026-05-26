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
    title: "How to Take Care of Your Hair in the Summer",
    description:
      "Sun, salt, chlorine, and heat can wreak havoc on your color and strands. A Spring Hill stylist's guide to keeping your hair healthy, hydrated, and tonally beautiful all summer long.",
    category: "Hair Care",
    readingMinutes: 6,
    publishedAt: "2026-05-26",
    image: heroBlonde,
    imageAlt: "Summer hair care tips from a luxury hair salon in Spring Hill TN",
    body: [
      { text: "Summer is hard on hair. Between UV rays, pool chemicals, ocean salt, and humidity, your color can fade and your strands can feel dry, brittle, and dull. The good news? A few intentional habits go a long way. Here's the summer hair care ritual I recommend to every client." },
      { h2: "1. Protect Your Hair From UV Rays", text: "Just like your skin, your hair burns. UV exposure oxidizes color (hello, brassy blonde) and weakens the cuticle. Use a leave-in spray with UV protection daily, and wear a hat on long sun days." },
      { h2: "2. Rinse Before You Swim", text: "Saturate your hair with clean water before getting in the pool or ocean. Hair that's already full of fresh water absorbs far less chlorine or salt — which means less damage and less color shift." },
      { h2: "3. Use a Weekly Clarifying or Chelating Treatment", text: "Chlorine, minerals, and salt build up over the season and can turn blondes green or make brunettes look muddy. A gentle clarifying or chelating treatment once a week resets your strands without stripping color." },
      { h2: "4. Deep Condition Twice a Week", text: "Summer calls for extra moisture. Swap one of your regular conditioners for a deep hydrating mask or bond-building treatment to keep hair soft, strong, and shiny." },
      { h2: "5. Lower the Heat (Or Skip It)", text: "Summer is the perfect time to embrace air-drying, soft waves, slicked-back buns, and silk scarves. Less heat means less damage — and these effortless styles look beautiful in the season." },
      { h2: "6. Book a Gloss + Treatment Mid-Summer", text: "A mid-summer gloss appointment refreshes tone, neutralizes any brassiness from the sun, and adds the shine that humidity tends to steal. Pair it with a bond-building treatment for the ultimate reset." },
      { h2: "7. Don't Forget Your Scalp", text: "Your scalp gets sunburned too. Part your hair differently throughout the week, apply a scalp-safe SPF along your part on long outdoor days, and book a scalp treatment to rinse away sunscreen, sweat, and SPF buildup." },
    ],
  },
];

export function getPostBySlug(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
