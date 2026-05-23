import { createFileRoute } from "@tanstack/react-router";
import { LocalServicePage } from "@/components/site/LocalServicePage";
import heroImage from "@/assets/hero-salon.jpg";

const TITLE = "Luxury Hair Salon in Spring Hill, TN | Julia Marks Beauty";
const DESCRIPTION =
  "A luxury hair salon in Spring Hill, TN offering custom color, blonding, balayage, and scalp wellness. Modern, feminine, intentional beauty for women across Middle Tennessee.";

export const Route = createFileRoute("/luxury-hair-salon-spring-hill-tn")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:image", content: heroImage },
      { name: "twitter:image", content: heroImage },
      { property: "og:url", content: "/luxury-hair-salon-spring-hill-tn" },
    ],
    links: [{ rel: "canonical", href: "/luxury-hair-salon-spring-hill-tn" }],
  }),
  component: () => (
    <LocalServicePage
      pathname="/luxury-hair-salon-spring-hill-tn"
      eyebrow="Luxury Hair Salon • Spring Hill, TN"
      h1="The Luxury Hair Salon Experience in Spring Hill, TN"
      intro="A boutique, modern hair salon in Spring Hill, TN — where custom color, healthy hair philosophy, and feminine self-care meet. We craft elevated, intentional beauty experiences for women across Spring Hill, Franklin, Columbia, and Nashville."
      heroImage={heroImage}
      heroAlt="Interior of a luxury hair salon in Spring Hill TN with cream linen and natural light"
      cta="Book Your Luxury Hair Experience"
      sections={[
        {
          h2: "Modern Hair Salon, Old-World Hospitality",
          body:
            "From the moment you walk in, every detail is intentional — the music, the lighting, the warmth, the ritual. We don't believe in rushed chairs or overlapping clients. Your appointment is yours alone, in a sanctuary designed for you to exhale.",
        },
        {
          h2: "Custom Hair Color & Transformations",
          body:
            "From dimensional color and lived-in blondes to brunette balayage and full hair transformations — every service is custom-formulated for your unique tone, texture, and lifestyle. We specialize in low maintenance hair color that flatters and grows out beautifully.",
        },
        {
          h2: "Scalp & Hair Health Integrated",
          body:
            "Luxury isn't just aesthetic — it's intention. Every service is rooted in scalp and hair health, with bond-building, scalp wellness, and personalized care built in.",
        },
      ]}
      benefits={[
        "Spring Hill, TN's most-loved boutique luxury hair salon",
        "1-on-1 appointments — no overlapping clients, ever",
        "Custom hair color crafted by a dedicated color specialist",
        "Healthy hair, scalp wellness, and skin radiance all under one roof",
        "Warm, modern interior designed for feminine self-care",
        "Trusted by women across Franklin, Columbia, and Nashville",
      ]}
      faqs={[
        {
          q: "What makes a salon a luxury hair salon?",
          a: "It's the entire experience — boutique 1-on-1 appointments, custom formulations, premium product lines, intentional design, and unhurried care. At Julia Marks Beauty, luxury means you are seen, heard, and prioritized.",
        },
        {
          q: "What hair services do you offer?",
          a: "Balayage, blonding, dimensional color, lived-in color, custom cuts and shaping, gloss treatments, bond-building, scalp facials, and a full menu of esthetic services including brow tint, lash tint, dermaplane, and express facials.",
        },
        {
          q: "Do you accept new clients?",
          a: "Yes — we welcome new clients with a complimentary consultation to make sure your hair goals are the right fit for our specialty and approach.",
        },
        {
          q: "Where is the salon located?",
          a: "Our luxury hair salon is located in Spring Hill, TN — a short drive from Franklin, Columbia, and Nashville. Full directions and parking details are available on our contact page.",
        },
      ]}
      relatedLinks={[
        { to: "/balayage-spring-hill-tn", label: "Balayage" },
        { to: "/blonding-specialist-spring-hill-tn", label: "Blonding Specialist" },
        { to: "/scalp-facial-spring-hill-tn", label: "Scalp Facials" },
        { to: "/hair-and-esthetic-services-spring-hill-tn", label: "Hair + Esthetic Services" },
      ]}
    />
  ),
});
