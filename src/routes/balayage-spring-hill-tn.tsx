import { createFileRoute } from "@tanstack/react-router";
import { LocalServicePage } from "@/components/site/LocalServicePage";
import heroImage from "@/assets/gallery-blonde.jpg";

const TITLE = "Balayage in Spring Hill, TN | Lived-In Blonde & Brunette";
const DESCRIPTION =
  "Luxury balayage in Spring Hill, TN. Hand-painted, lived-in color for blondes and brunettes — serving Franklin, Columbia & Nashville.";

export const Route = createFileRoute("/balayage-spring-hill-tn")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:image", content: heroImage },
      { name: "twitter:image", content: heroImage },
      { property: "og:url", content: "/balayage-spring-hill-tn" },
    ],
    links: [{ rel: "canonical", href: "/balayage-spring-hill-tn" }],
  }),
  component: () => (
    <LocalServicePage
      pathname="/balayage-spring-hill-tn"
      eyebrow="Balayage Specialist • Spring Hill, TN"
      h1="Balayage in Spring Hill, Tennessee"
      intro="Custom, hand-painted balayage for soft lived-in blondes and dimensional brunettes — designed to grow out beautifully and feel effortlessly you. Serving Spring Hill, Franklin, Columbia & Nashville."
      heroImage={heroImage}
      heroAlt="Lived-in balayage blonde hair by a Spring Hill TN hair color specialist"
      cta="Book Your Balayage"
      sections={[
        {
          h2: "Hand-Painted, Lived-In Balayage",
          body:
            "Balayage is a freehand color technique that creates soft, sun-kissed dimension without harsh lines. Our balayage specialist customizes every placement to your face shape, lifestyle, and natural base — for a low maintenance hair color you can wear with confidence between visits.",
        },
        {
          h2: "Brunette Balayage & Lived-In Blondes",
          body:
            "From rich brunette balayage with caramel and honey ribbons to creamy, buttery, lived-in blonde hair — every formula is mixed in-house and adjusted to your tone, texture, and goals. We specialize in dimensional color that feels modern, feminine, and unmistakably luxurious.",
        },
        {
          h2: "A Healthy-Hair First Approach",
          body:
            "Beautiful color starts with a healthy scalp and hair. Every balayage appointment includes a scalp and strand consultation, bond-building treatment, and styling — so you leave glowing inside and out.",
        },
      ]}
      benefits={[
        "Custom dimensional color tailored to your skin tone and lifestyle",
        "Lived-in placement that grows out softly — 4–6 month maintenance window",
        "Bond-building and Olaplex-style treatments included in every visit",
        "Healthy-hair first formulations and gentle developers",
        "Boutique 1-on-1 experience — no rushed chairs, no chemical smells",
        "Conveniently located for clients across Middle Tennessee",
      ]}
      faqs={[
        {
          q: "How much does balayage cost in Spring Hill, TN?",
          a: "Custom balayage starts at $250 and varies based on hair length, density, and desired lift. A complimentary consultation lets us provide an exact quote tailored to your goals.",
        },
        {
          q: "How long does a balayage appointment take?",
          a: "Most balayage appointments take 3–4 hours from consultation to blowout, depending on density and lift required for your custom formula.",
        },
        {
          q: "How often do I need to come in for balayage?",
          a: "One of the joys of balayage is its low-maintenance grow-out. Most clients return every 12–20 weeks for a refresh, with optional gloss appointments between for tone.",
        },
        {
          q: "Do you serve clients outside of Spring Hill?",
          a: "Yes — our studio welcomes clients from Franklin, Columbia, Nashville and across Middle Tennessee for balayage, blonding, and scalp wellness services.",
        },
      ]}
      relatedLinks={[
        { to: "/blonding-specialist-spring-hill-tn", label: "Blonding Specialist" },
        { to: "/luxury-hair-salon-spring-hill-tn", label: "Luxury Hair Salon" },
        { to: "/scalp-facial-spring-hill-tn", label: "Scalp Facials" },
        { to: "/blog", label: "Hair Education Blog" },
      ]}
    />
  ),
});
