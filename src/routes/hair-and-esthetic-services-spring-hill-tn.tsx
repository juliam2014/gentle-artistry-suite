import { createFileRoute } from "@tanstack/react-router";
import { LocalServicePage } from "@/components/site/LocalServicePage";
import heroImage from "@/assets/gallery-skin.jpg";

const TITLE = "Hair & Esthetic Services in Spring Hill, TN | Beauty & Skincare";
const DESCRIPTION =
  "Luxury hair and esthetic services in Spring Hill, TN — color, balayage, scalp facials, brow tint, lash tint, dermaplane, and express facials for women across Middle Tennessee.";

export const Route = createFileRoute("/hair-and-esthetic-services-spring-hill-tn")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:image", content: heroImage },
      { name: "twitter:image", content: heroImage },
      { property: "og:url", content: "/hair-and-esthetic-services-spring-hill-tn" },
    ],
    links: [{ rel: "canonical", href: "/hair-and-esthetic-services-spring-hill-tn" }],
  }),
  component: () => (
    <LocalServicePage
      pathname="/hair-and-esthetic-services-spring-hill-tn"
      eyebrow="Hair + Esthetic Services • Spring Hill, TN"
      h1="Hair & Esthetic Services in Spring Hill, TN"
      intro="A complete luxury beauty and wellness studio in Spring Hill, TN — offering hair color, scalp facials, brow tint, lash tint, dermaplane, and express facials under one elevated roof."
      heroImage={heroImage}
      heroAlt="Luxury esthetic and skincare services at a Spring Hill TN beauty studio"
      cta="Book Hair + Esthetic Services"
      sections={[
        {
          h2: "Hair, Skin & Scalp — All in One Place",
          body:
            "Why book three appointments when you can pair them all in one sanctuary? From custom color and scalp facials to brow tint, lash tint, and dermaplane facials — every service is built around your beauty rhythm.",
        },
        {
          h2: "Luxury Esthetic Services",
          body:
            "Our luxury esthetic services include the Express Facial, Dermaplane Facial, Brow Tint, Lash Tint, and seasonal enhancement treatments. Each service is performed in a calm, dedicated space with premium skincare lines.",
        },
        {
          h2: "Beauty + Skincare Bundles",
          body:
            "Combine balayage with a brow + lash tint, or pair a scalp facial with a dermaplane for the ultimate self-care reset. Our beauty bundles are designed to maximize your time and your glow.",
        },
      ]}
      benefits={[
        "Full menu of hair, scalp, and esthetic services in one studio",
        "Spring Hill, TN's destination for elevated self-care",
        "Customized service bundles to honor your time and budget",
        "Premium, clean skincare lines and color formulations",
        "Warm, feminine, sanctuary-style environment",
        "Trusted by women across Franklin, Columbia, and Nashville",
      ]}
      faqs={[
        {
          q: "What esthetic services do you offer?",
          a: "We offer express facials, dermaplane facials, brow tint, lash tint, and seasonal skincare add-ons — all designed to complement our hair and scalp wellness services.",
        },
        {
          q: "Can I bundle hair and esthetic services?",
          a: "Yes — many clients pair a color appointment with a brow and lash tint, or a scalp facial with a dermaplane. Our online booking lets you build a bundle in one visit.",
        },
        {
          q: "Are your skincare products clean and luxury-grade?",
          a: "Always. We curate clean, professional-grade skincare lines that align with our healthy-hair, healthy-skin philosophy.",
        },
        {
          q: "Do you serve clients beyond Spring Hill?",
          a: "Yes — clients regularly visit from Franklin, Columbia, Nashville, and throughout Middle Tennessee for our luxury hair and esthetic services.",
        },
      ]}
      relatedLinks={[
        { to: "/luxury-hair-salon-spring-hill-tn", label: "Luxury Hair Salon" },
        { to: "/scalp-facial-spring-hill-tn", label: "Scalp Facials" },
        { to: "/balayage-spring-hill-tn", label: "Balayage" },
        { to: "/blonding-specialist-spring-hill-tn", label: "Blonding Specialist" },
      ]}
    />
  ),
});
