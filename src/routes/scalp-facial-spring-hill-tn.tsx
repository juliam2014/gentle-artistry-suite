import { createFileRoute } from "@tanstack/react-router";
import { LocalServicePage } from "@/components/site/LocalServicePage";
import heroImage from "@/assets/gallery-scalp.jpg";

const TITLE = "Scalp Facials in Spring Hill, TN | Luxury Scalp Treatments";
const DESCRIPTION =
  "Luxury scalp facials in Spring Hill, TN. Detoxifying scalp treatments for hair growth, dry scalp, and overall scalp wellness — serving Franklin, Columbia & Nashville.";

export const Route = createFileRoute("/scalp-facial-spring-hill-tn")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:image", content: heroImage },
      { name: "twitter:image", content: heroImage },
      { property: "og:url", content: "/scalp-facial-spring-hill-tn" },
    ],
    links: [{ rel: "canonical", href: "/scalp-facial-spring-hill-tn" }],
  }),
  component: () => (
    <LocalServicePage
      pathname="/scalp-facial-spring-hill-tn"
      eyebrow="Scalp Facial • Spring Hill, TN"
      h1="Luxury Scalp Facials in Spring Hill, TN"
      intro="A therapeutic scalp facial detoxes buildup, soothes dryness, and supports healthy hair growth. Spring Hill's signature scalp wellness ritual — designed by a certified scalp care specialist serving Franklin, Columbia & Nashville."
      heroImage={heroImage}
      heroAlt="Luxury scalp facial treatment in a Spring Hill TN scalp wellness studio"
      cta="Reserve Your Scalp Facial"
      sections={[
        {
          h2: "Healthy Scalp, Healthy Hair",
          body:
            "Your scalp is skin — and like skin, it benefits from regular, intentional care. A scalp facial cleanses pores, removes product and oil buildup, balances the microbiome, and stimulates circulation to support a healthier hair growth environment.",
        },
        {
          h2: "What's Included in Your Scalp Facial",
          body:
            "Each scalp facial includes a thorough consultation, scalp analysis, gentle exfoliation, customized scalp serums, a relaxing scalp and neck massage, lymphatic stimulation, steam therapy, and a finishing blow-dry. It is equal parts therapeutic and indulgent.",
        },
        {
          h2: "Targeted Scalp Treatments",
          body:
            "From scalp detox to dry scalp treatment, hair growth support, and post-color soothing — we customize every facial to your specific scalp concerns. Add-ons include LED therapy, growth tonics, and at-home scalp wellness kits.",
        },
      ]}
      benefits={[
        "Certified scalp care specialist serving Middle Tennessee",
        "Visibly cleaner, calmer scalp after one session",
        "Supports stronger, shinier, faster-growing hair",
        "Relieves itch, flaking, oiliness, and product buildup",
        "Includes a custom take-home scalp wellness plan",
        "Pairs beautifully with color and blonding services",
      ]}
      faqs={[
        {
          q: "What is a scalp facial?",
          a: "A scalp facial is a multi-step treatment that combines scalp analysis, exfoliation, deep cleansing, customized serums, and massage to support scalp health and hair growth. Think of it as skincare for the foundation of your hair.",
        },
        {
          q: "How often should I get a scalp facial?",
          a: "Most clients benefit from a scalp facial every 4–6 weeks, especially when paired with color services or if you experience dryness, oiliness, or thinning.",
        },
        {
          q: "Will a scalp facial help with hair growth?",
          a: "Yes — by improving circulation, removing buildup, and balancing the scalp microbiome, scalp facials create the ideal environment for healthier, fuller hair growth over time.",
        },
        {
          q: "Do you offer scalp treatments near Franklin or Nashville?",
          a: "Yes. Our Spring Hill, TN studio is a short drive from Franklin, Columbia, and Nashville — making us a convenient choice for scalp wellness across Middle Tennessee.",
        },
      ]}
      relatedLinks={[
        { to: "/luxury-hair-salon-spring-hill-tn", label: "Luxury Hair Salon" },
        { to: "/balayage-spring-hill-tn", label: "Balayage" },
        { to: "/hair-and-esthetic-services-spring-hill-tn", label: "Hair + Esthetic Services" },
      ]}
    />
  ),
});
