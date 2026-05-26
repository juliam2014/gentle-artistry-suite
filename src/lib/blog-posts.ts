import heroBlonde from "@/assets/gallery-blonde.jpg";
import heroScalp from "@/assets/gallery-scalp.jpg";
import heroBrunette from "@/assets/gallery-brunette.jpg";
import heroSkin from "@/assets/gallery-skin.jpg";
import heroRitual from "@/assets/ritual-flatlay.jpg";
import heroSalon from "@/assets/hero-salon.jpg";

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
  {
    slug: "how-to-maintain-healthy-blonde-hair",
    title: "How to Maintain Healthy Blonde Hair Between Appointments",
    description:
      "A blonding specialist's guide to keeping your lived-in blonde hair shiny, soft, and tonally beautiful — at home, between salon visits.",
    category: "Blonding Education",
    readingMinutes: 6,
    publishedAt: "2026-03-12",
    image: heroBlonde,
    imageAlt: "Healthy lived-in blonde hair by a Spring Hill TN blonding specialist",
    body: [
      { text: "Healthy blonde hair is a daily practice — not just a salon service. Here is the at-home ritual we recommend to every blonding client in Spring Hill, Franklin, and Nashville." },
      { h2: "1. Use Sulfate-Free, Color-Safe Shampoo", text: "Sulfates strip tone and dry out the cuticle. Switch to a gentle, color-safe shampoo and shampoo only when truly needed — usually 2–3 times per week." },
      { h2: "2. Tone Weekly With a Purple Mask", text: "A purple toning mask neutralizes brassy yellow tones and keeps your blonde looking cool and luminous. Apply for 5–10 minutes once a week, more often for icier tones." },
      { h2: "3. Bond-Build Religiously", text: "Bond-building treatments rebuild internal hair structure compromised by lift. Use a professional bond-builder once a week — your strands will feel resilient and shiny." },
      { h2: "4. Protect From Heat and UV", text: "Always use a heat protectant before styling, and a UV protectant during summer or extended sun exposure. Both protect your tone and integrity." },
      { h2: "5. Book a Gloss Refresh Every 8–12 Weeks", text: "Gloss appointments are the secret weapon for long-lasting, dimensional blondes. A quick toning visit between full blonding sessions keeps your color expensive-looking year-round." },
    ],
  },
  {
    slug: "signs-you-need-a-scalp-facial",
    title: "10 Signs You Need a Scalp Facial",
    description:
      "Itch, oil, dullness, slow growth — your scalp tells you when it needs care. A certified scalp care specialist explains the signals to watch for.",
    category: "Scalp Health",
    readingMinutes: 5,
    publishedAt: "2026-03-05",
    image: heroScalp,
    imageAlt: "Luxury scalp facial treatment for scalp wellness in Spring Hill TN",
    body: [
      { text: "Your scalp is the foundation of your hair — and like skin, it benefits from regular care. Here are the most common signs it is time to book a scalp facial." },
      { h2: "1. Persistent Itch or Tightness", text: "Itch is your scalp asking for hydration and balance. A scalp facial gently exfoliates and restores moisture." },
      { h2: "2. Oily Roots, Dry Ends", text: "An oily scalp paired with dry ends signals buildup and imbalance. A scalp detox resets your scalp's microbiome." },
      { h2: "3. Visible Flaking or Dry Patches", text: "Dry scalp treatment with soothing serums and gentle exfoliation relieves visible flaking and itchiness." },
      { h2: "4. Slowed Hair Growth", text: "Circulation matters. Scalp massage and stimulating treatments support a healthier hair growth environment." },
      { h2: "5. Dull, Lifeless Hair", text: "Buildup on the scalp dulls your roots and weighs hair down. A scalp facial reveals shine you forgot you had." },
      { h2: "6. Post-Color Sensitivity", text: "After color or blonding, a soothing scalp facial calms the skin barrier and supports recovery." },
      { h2: "7. You Wear Dry Shampoo Daily", text: "Dry shampoo is wonderful — until residue accumulates. A scalp detox lifts it gently." },
      { h2: "8. Tightness After Workouts", text: "Sweat and product can clog scalp pores. Regular scalp facials prevent the dreaded scalp acne." },
      { h2: "9. You Haven't Had One in 6+ Weeks", text: "Like skincare, consistency matters. Most clients book a scalp facial every 4–6 weeks." },
      { h2: "10. You Just Want to Be Cared For", text: "And that, beautiful one, is reason enough." },
    ],
  },
  {
    slug: "healthy-scalp-equals-healthy-hair",
    title: "Healthy Scalp = Healthy Hair: Why Scalp Wellness Matters",
    description:
      "The healthiest, shiniest, fullest hair begins at the scalp. A scalp care specialist explains why scalp wellness is the foundation of every beauty routine.",
    category: "Scalp Health",
    readingMinutes: 5,
    publishedAt: "2026-02-26",
    image: heroScalp,
    imageAlt: "Healthy scalp healthy hair philosophy at a Spring Hill TN luxury salon",
    body: [
      { text: "We focus so much energy on the lengths of our hair that we forget where it all begins — the scalp. Healthy scalp equals healthy hair. It really is that simple." },
      { h2: "Your Scalp Is Skin", text: "Your scalp has a microbiome, oil glands, and a delicate barrier — just like the skin on your face. When that ecosystem is balanced, hair grows stronger, shinier, and faster." },
      { h2: "Buildup Suffocates the Follicle", text: "Product, oil, sweat, hard water, and dry shampoo can clog follicles and slow growth. A regular scalp facial gently lifts buildup and restores function." },
      { h2: "Circulation Supports Growth", text: "Massage and stimulation increase microcirculation, delivering nutrients to the follicle and supporting hair growth over time." },
      { h2: "Scalp Health and Color Last Longer", text: "Clients who prioritize scalp wellness see brighter, longer-lasting color, less breakage, and a faster bounce-back from chemical services." },
    ],
  },
  {
    slug: "best-low-maintenance-hair-color-ideas",
    title: "The Best Low Maintenance Hair Color Ideas for 2026",
    description:
      "From lived-in blondes to brunette balayage and root-shadowed dimensional color — modern, low maintenance hair color you can wear with confidence.",
    category: "Blonding Education",
    readingMinutes: 6,
    publishedAt: "2026-02-18",
    image: heroBrunette,
    imageAlt: "Low maintenance brunette balayage hair color at a Spring Hill TN salon",
    body: [
      { text: "Low maintenance hair color is having a moment — and for good reason. Today's most beautiful color is also the most livable." },
      { h2: "Lived-In Blonde Hair", text: "Soft, root-shadowed, hand-painted blonde that grows out beautifully. A 4–6 month maintenance window is realistic." },
      { h2: "Brunette Balayage", text: "Dimensional brunettes with hand-placed caramel and honey ribbons feel warm, modern, and effortlessly chic." },
      { h2: "Root Smudge + Gloss", text: "If you love your natural root but want depth and tone — a root smudge with a custom gloss is the ultimate refresh." },
      { h2: "Dimensional Color Refresh", text: "Layered placement that catches the light from every angle, with grow-out built in." },
      { h2: "Babylights for Brightness Without Lines", text: "Ultra-fine highlights deliver brightness around the face without the dreaded line of demarcation." },
    ],
  },
  {
    slug: "how-often-should-you-wash-your-hair",
    title: "How Often Should You Wash Your Hair?",
    description:
      "A balanced answer from your luxury hair stylist — based on scalp type, color, lifestyle, and the health of your hair.",
    category: "Hair Care",
    readingMinutes: 4,
    publishedAt: "2026-02-10",
    image: heroRitual,
    imageAlt: "Luxury haircare ritual and shampoo by a Spring Hill TN healthy hair salon",
    body: [
      { text: "Short answer? Less often than you think — but with intention. Here is how to figure out your ideal wash schedule." },
      { h2: "Fine, Oily Scalp", text: "Aim for every other day with a gentle clarifying or balancing shampoo, and use dry shampoo sparingly between." },
      { h2: "Color-Treated Hair", text: "Stretch washes to 2–3 times per week with sulfate-free, color-safe shampoo to preserve tone and shine." },
      { h2: "Thick, Dry, or Curly Hair", text: "1–2 times per week is often plenty. Co-washing or scalp-only cleansing can help on in-between days." },
      { h2: "Always Massage While Cleansing", text: "Cleansing is a great time to massage the scalp — it boosts circulation and supports healthy hair growth." },
    ],
  },
  {
    slug: "why-scalp-health-matters",
    title: "Why Scalp Health Matters More Than You Think",
    description:
      "Scalp wellness isn't a trend — it is the foundation of healthy hair, lasting color, and overall confidence. Here's why we treat scalp first.",
    category: "Scalp Health",
    readingMinutes: 5,
    publishedAt: "2026-02-02",
    image: heroScalp,
    imageAlt: "Scalp wellness specialist offering luxury scalp facial in Spring Hill TN",
    body: [
      { text: "We have spent decades obsessing over the lengths of our hair. The scalp — the actual soil our hair grows from — has been an afterthought. That is changing, and rightly so." },
      { h2: "Scalp Health Affects Everything", text: "Growth rate, shine, color performance, even how your hair feels — all of it begins at the scalp." },
      { h2: "Modern Lives Stress Our Scalps", text: "Heat tools, hard water, dry shampoo, product buildup, stress, and hormone shifts all leave their mark." },
      { h2: "Scalp Wellness Is Self-Care", text: "A scalp facial is one of the most relaxing services we offer. You will leave with a calmer mind and a healthier scalp." },
    ],
  },
  {
    slug: "easy-hair-routines-for-busy-moms",
    title: "Easy Hair Routines for Busy Moms",
    description:
      "Realistic, beautiful hair routines for the women juggling everything. From wash day to a 5-minute styling reset.",
    category: "Beauty Routines",
    readingMinutes: 5,
    publishedAt: "2026-01-24",
    image: heroRitual,
    imageAlt: "Easy luxury hair routine flatlay with serum and brush",
    body: [
      { text: "You don't need an hour. You need a plan. Here is a simple, beautiful hair routine designed for the woman with very little time and very high standards." },
      { h2: "Wash Day (10 Minutes)", text: "Sulfate-free shampoo, conditioner, scalp massage in the shower, leave-in spray, microfiber wrap." },
      { h2: "Air-Dry With Intention", text: "Apply a smoothing cream and a heat protectant. Let hair air-dry 80% before a quick blow-dry finish." },
      { h2: "Day 2 Refresh (3 Minutes)", text: "Dry shampoo at the roots, a low silk bow, and a smoothing oil on ends." },
      { h2: "Day 3 Reset (5 Minutes)", text: "A claw clip, a brushed-back style, and a swipe of texture spray. Done." },
    ],
  },
  {
    slug: "how-to-make-your-hair-color-last-longer",
    title: "How to Make Your Hair Color Last Longer",
    description:
      "Pro tips from a hair color specialist on extending tone, shine, and vibrancy between balayage and blonding appointments.",
    category: "Hair Care",
    readingMinutes: 5,
    publishedAt: "2026-01-15",
    image: heroBlonde,
    imageAlt: "Long-lasting custom hair color at a luxury Spring Hill TN salon",
    body: [
      { text: "You invested in your color. Let's protect it." },
      { h2: "Wait 72 Hours to Wash", text: "Allow color to fully set in the cuticle before your first wash." },
      { h2: "Lukewarm Water Only", text: "Hot water lifts the cuticle and fades tone faster than anything else." },
      { h2: "Color-Safe, Sulfate-Free Shampoo", text: "A non-negotiable. Choose a brand recommended by your colorist." },
      { h2: "Weekly Gloss or Toning Mask", text: "Refresh tone at home with a custom gloss or toning mask, recommended for your shade." },
      { h2: "Heat Protectant Always", text: "Every blow-dry, curling iron, and flat iron pass needs heat protection." },
    ],
  },
  {
    slug: "what-causes-hair-breakage",
    title: "What Causes Hair Breakage (And How to Stop It)",
    description:
      "Common culprits behind breakage — and the science-backed habits that restore strength, length, and shine.",
    category: "Hair Care",
    readingMinutes: 5,
    publishedAt: "2026-01-08",
    image: heroBrunette,
    imageAlt: "Healthy brunette hair after breakage repair at a Spring Hill TN salon",
    body: [
      { text: "Breakage is rarely caused by one thing — it's usually a combination. Let's break it down." },
      { h2: "Over-Processing", text: "Stacked chemical services without bond-building deplete internal hair structure. A consult helps map a healthier timeline." },
      { h2: "Heat Without Protection", text: "Always use a heat protectant — every time, every tool." },
      { h2: "Aggressive Brushing", text: "Detangle with a wet-brush, working from ends to roots." },
      { h2: "Tight Hair Ties", text: "Switch to soft silk scrunchies and avoid sleeping in tight ponytails." },
      { h2: "Skipping Trims", text: "A trim every 10–12 weeks keeps ends strong and grow-out beautiful." },
    ],
  },
  {
    slug: "luxury-self-care-habits-for-women",
    title: "Luxury Self-Care Habits Every Woman Deserves",
    description:
      "Intentional, feminine self-care rituals that elevate the everyday — from morning skincare to scalp wellness to evening wind-down.",
    category: "Self-Care & Confidence",
    readingMinutes: 6,
    publishedAt: "2026-01-02",
    image: heroSalon,
    imageAlt: "Luxury feminine self-care ritual at a Spring Hill TN beauty studio",
    body: [
      { text: "Self-care is not selfish. It is the foundation of how we show up — for ourselves, our families, and our work. Here are the rituals we believe in." },
      { h2: "Morning Skincare With Presence", text: "Two minutes of intentional skincare. No phone, no rush — just you, your reflection, and your routine." },
      { h2: "Weekly Scalp Massage", text: "Whether at home or with a scalp facial, weekly scalp care reduces stress and supports hair health." },
      { h2: "A Standing Beauty Appointment", text: "Don't wait for hair to feel desperate. A standing appointment is an act of self-respect." },
      { h2: "Evening Wind-Down Ritual", text: "Silk pillowcase, a calming hair oil, dim lights, and a moment of stillness before sleep." },
      { h2: "Beauty Education", text: "Curiosity about your own beauty is feminine power. Read, learn, and ask questions at every appointment." },
    ],
  },
];

export function getPostBySlug(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
