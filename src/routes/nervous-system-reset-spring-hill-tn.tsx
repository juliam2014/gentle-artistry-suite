import { createFileRoute } from "@tanstack/react-router";
import { LocalServicePage } from "@/components/site/LocalServicePage";
import heroImage from "@/assets/gallery-scalp.jpg";

const TITLE =
  "Nervous System Reset | Scalp & Sensory Relaxation Treatment in Spring Hill, TN";
const DESCRIPTION =
  "A 60-minute private scalp and sensory relaxation treatment in Spring Hill, TN. $120. Designed for nervous system regulation, stress relief, and deep relaxation.";
const KEYWORDS =
  "nervous system reset, scalp massage Spring Hill TN, relaxation treatment Tennessee, sensory scalp treatment, stress relief beauty service, private beauty studio Spring Hill";

export const Route = createFileRoute("/nervous-system-reset-spring-hill-tn")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "keywords", content: KEYWORDS },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:image", content: heroImage },
      { name: "twitter:image", content: heroImage },
      { property: "og:url", content: "/nervous-system-reset-spring-hill-tn" },
    ],
    links: [{ rel: "canonical", href: "/nervous-system-reset-spring-hill-tn" }],
  }),
  component: () => (
    <LocalServicePage
      pathname="/nervous-system-reset-spring-hill-tn"
      eyebrow="Nervous System Reset • Spring Hill, TN"
      h1="Nervous System Reset | Scalp & Sensory Relaxation Treatment"
      intro="A calming, sensory-based scalp and relaxation treatment in Spring Hill, Tennessee designed to support nervous system regulation, stress relief, and deep relaxation. 60 minutes • $120\u00a0"
      heroImage={heroImage}
      heroAlt="Calming scalp and sensory relaxation treatment in a private Spring Hill TN studio"
      cta="Book Your Nervous System Reset"
      sections={[
        {
          h2: "A private sensory reset, not a salon service",
          body:
            "This private one-on-one experience combines gentle scalp stimulation, hair play techniques, light pressure point work, and soothing touch-based rituals to help release tension and promote a grounded, relaxed state.\n\nUnlike a traditional facial or salon service, this experience is focused on nervous system reset, relaxation, and sensory comfort — making it ideal for clients seeking stress relief and a restorative beauty experience.",
        },
        {
          h2: "What's included in your 60-minute treatment",
          body:
            "• Scalp massage and sensory hair play techniques\n• Gentle touch relaxation for scalp, neck, and temple areas\n• Soft brushing and calming rhythmic movements\n• Warm towel grounding moment\n• Calming eye mask\n• Fingertip touch techniques\n• Quiet, low-stimulation environment (optional silence or soft music)\n• Slow integration time before ending the service",
        },
      ]}
      benefits={[
        "Stress relief and nervous system regulation",
        "Supportive for anxiety, burnout, or overstimulation",
        "Scalp massage and relaxation treatment in Spring Hill, TN",
        "A calming alternative to traditional facials or salon services",
        "Private, low-stimulation studio environment",
        "60 minutes of slow, intentional sensory care",
      ]}
      faqs={[
        {
          q: "What is a nervous system reset treatment?",
          a: "It's a sensory-based scalp and relaxation experience designed to calm the nervous system through gentle touch, scalp massage, hair play, and rhythmic movement — rather than skincare or hair styling.",
        },
        {
          q: "How is this different from a facial or scalp facial?",
          a: "A scalp facial focuses on scalp health and hair growth. The Nervous System Reset is focused on relaxation, stress relief, and sensory comfort. There are no harsh exfoliants, no styling, and no expectation to talk — just a quiet, grounding 60 minutes.",
        },
        {
          q: "How long does it take and how much is it?",
          a: "The treatment is 60 minutes and $120, performed in a private Spring Hill, TN studio by appointment only.",
        },
        {
          q: "Who is this best for?",
          a: "Anyone navigating stress, anxiety, burnout, or overstimulation, and clients in Spring Hill, Franklin, Columbia, or Nashville looking for a calming alternative to a traditional facial or salon visit.",
        },
      ]}
      relatedLinks={[
        { to: "/scalp-facial-spring-hill-tn", label: "Scalp Facials" },
        { to: "/services/scalp", label: "Scalp Add-Ons" },
        { to: "/services/esthetics", label: "Esthetic Services" },
        { to: "/booking", label: "Booking" },
      ]}
    />
  ),
});