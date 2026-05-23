import { createFileRoute } from "@tanstack/react-router";
import { LocalServicePage } from "@/components/site/LocalServicePage";
import heroImage from "@/assets/gallery-blonde.jpg";

const TITLE = "Blonding Specialist in Spring Hill, TN | Healthy Blonde Hair";
const DESCRIPTION =
  "Spring Hill, TN blonding specialist for lived-in blondes, baby lights, and full blonding transformations. Healthy-hair color for women across Franklin, Columbia & Nashville.";

export const Route = createFileRoute("/blonding-specialist-spring-hill-tn")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:image", content: heroImage },
      { name: "twitter:image", content: heroImage },
      { property: "og:url", content: "/blonding-specialist-spring-hill-tn" },
    ],
    links: [{ rel: "canonical", href: "/blonding-specialist-spring-hill-tn" }],
  }),
  component: () => (
    <LocalServicePage
      pathname="/blonding-specialist-spring-hill-tn"
      eyebrow="Blonding Specialist • Spring Hill, TN"
      h1="Blonding Specialist in Spring Hill, Tennessee"
      intro="Bright, buttery, lived-in blondes done the healthy way. As a dedicated blonding specialist in Spring Hill, TN, we craft custom formulas that protect hair integrity while creating the luminous, dimensional blonde you've been dreaming of."
      heroImage={heroImage}
      heroAlt="Healthy buttery blonde hair created by a Spring Hill TN blonding specialist"
      cta="Book Your Blonding Service"
      sections={[
        {
          h2: "Custom Blonding for Every Woman",
          body:
            "Whether you're refreshing a lived-in blonde, transitioning from brunette, or maintaining a bright baby light — we customize every blonding service to your hair history, integrity, and lifestyle. Sessions can include baby lights, traditional foiling, balayage, root shadow, and toning gloss.",
        },
        {
          h2: "Healthy Hair, First and Always",
          body:
            "Lift without integrity isn't luxury. Every blonding service uses bond-building technology, gentle developers, and strand testing so your hair leaves softer, shinier, and more nourished — not compromised.",
        },
        {
          h2: "Scalp Wellness for Better Color",
          body:
            "A healthy scalp = healthy hair = better-performing color. We weave scalp care into your blonding routine to support shine, growth, and longevity of every appointment.",
        },
      ]}
      benefits={[
        "Spring Hill's go-to blonding specialist for healthy, lived-in blondes",
        "Custom toners and glosses that flatter your unique skin tone",
        "Bond-building integrated into every lift for resilient, shiny hair",
        "Low-maintenance placements that grow out softly and luxuriously",
        "Boutique, unhurried experience — your appointment is yours alone",
        "Trusted by women across Franklin, Columbia, and Nashville",
      ]}
      faqs={[
        {
          q: "What makes a true blonding specialist different?",
          a: "A blonding specialist focuses exclusively on the science of lift, tone, and hair integrity. That means a deeper understanding of formulation, placement, and aftercare — so your blonde looks brighter, lasts longer, and feels healthier.",
        },
        {
          q: "How do I keep my blonde hair healthy between visits?",
          a: "Use sulfate-free shampoo, weekly bond-builders, a purple toning mask every 7–10 days, and book a gloss refresh every 8–12 weeks. We'll send you home with a custom at-home plan.",
        },
        {
          q: "Can I go from brunette to blonde in one session?",
          a: "Most healthy transitions are done over 2–3 sessions to protect hair integrity. Your consultation maps out a realistic, beautiful timeline tailored to your hair.",
        },
        {
          q: "Do you offer blonding services for clients near Franklin or Nashville?",
          a: "Absolutely. Our Spring Hill, TN studio is a short drive from Franklin, Columbia, and Nashville — many of our blonding clients travel from across Middle Tennessee.",
        },
      ]}
      relatedLinks={[
        { to: "/balayage-spring-hill-tn", label: "Balayage in Spring Hill" },
        { to: "/luxury-hair-salon-spring-hill-tn", label: "Luxury Hair Salon" },
        { to: "/scalp-facial-spring-hill-tn", label: "Scalp Facials" },
      ]}
    />
  ),
});
