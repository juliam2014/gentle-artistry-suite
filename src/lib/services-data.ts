export const hairAppointments = [
  {
    icon: "✨",
    timing: "6–8 weeks since your last visit",
    title: "Root Refresh + Grey Coverage",
    price: "$150–$175",
    intro:
      "Perfect if you're keeping up with your color and just need a maintenance touch-up.",
    bestFor: [
      "Grey coverage at the root",
      "Blending new growth",
      "Refreshing your tone",
      "Keeping your color polished between bigger appointments",
    ],
    includes: ["Root color application", "Gloss for tone + shine", "Blowout finish"],
    note: "Best for regular maintenance guests",
  },
  {
    icon: "🤍",
    timing: "8–14 weeks since your last visit",
    title: "​Partial Highlight",
    price: "$230",
    intro:
      "​For maintenance blonding around the face, crown, and areas most visible when wearing your hair down.",
    bestFor: [
      "​Love a bright blonde around the face",
      "​Want to refresh their blonde without a full transfomation",
      "​Need maintenance on previous highlighted hair",
      "​",
    ],
    includes: [
      "Customized blonding (balayage / foils / dimension)",
      "Gloss / toner",
      "Treatment for hair health",
      "Blowout finish",
    ],
    note: "Most booked blonding service",
  },
  {
    icon: "🤎",
    timing: "8–14 weeks (brunettes)",
    title: "Brunette Dimension + Gloss",
    price: "$225–$275",
    intro: "Perfect if you want rich, glossy, dimensional brunette color.",
    bestFor: [
      "Refreshing faded brunette tones",
      "Adding shine + richness",
      "Subtle dimension or tonal change",
      "Maintaining healthy-looking color",
    ],
    includes: [
      "Custom color placement or gloss refresh",
      "Conditioning treatment",
      "Haircut + blowout finish",
    ],
  },
  {
    icon: "💎",
    timing: "4–10 weeks",
    title: "Gloss + Refresh + Blowout",
    price: "$95–$125",
    intro: "Perfect if you just want your hair to feel fresh, shiny, and styled again.",
    bestFor: [
      "Toning blonde or brunette",
      "Removing brassiness",
      "Boosting shine between color visits",
      "A quick confidence refresh",
    ],
    includes: ["Gloss or toner", "Shine treatment", "Blowout style"],
  },
  {
    icon: "⚠️",
    timing: "14+ weeks or major change",
    title: "Transformation / Correction",
    price: "Starting at $350+",
    priceNote: "Consult required",
    intro:
      "Perfect if you're making a big change or it's been a while since your last appointment.",
    bestFor: [
      "Major color changes",
      "Corrective color work",
      "Dark-to-light transformations",
      "Full refresh after long gaps",
    ],
    includes: [],
    note: "Consultation required before booking",
  },
] as const;

export const scalpAddons = [
  {
    icon: "✨",
    title: "Fresh Start Scalp Reset",
    price: "$45–$55",
    tagline: "For a clean, light, refreshed scalp feeling",
    removes: ["dry shampoo", "oils", "styling products"],
    includes: [] as string[],
    benefits: [
      "Hair feels lighter at the root",
      "Scalp feels clean + refreshed",
      "Best before color or blonding services",
    ],
  },
  {
    icon: "💆‍♀️",
    title: "Luxury Shampoo Experience",
    price: "$15–$25",
    tagline: "Extra time to relax during your wash",
    removes: [] as string[],
    includes: ["extended scalp massage", "slow, relaxing shampoo service", "tension relief + stress release"],
    benefits: [
      "Instant client favorite",
      "\n\n​",
      "Turns a shampoo into a mini spa moment",
    ],
  },
  {
    icon: "🌱",
    title: "Healthy Hair Growth Boost",
    price: "$25–$35",
    tagline: "For stronger, fuller-looking hair over time",
    removes: [] as string[],
    includes: ["stimulating scalp treatment", "circulation-focused massage", "nourishing application"],
    benefits: [
      "Supports healthy growth",
      "Great for postpartum, stress shedding, or thinning concerns",
      "​",
    ],
  },
] as const;

export const estheticGoals = [
  "Define my brows",
  "Enhance my lashes",
  "Refresh my skin glow",
  "Full face refresh (brows + lashes + skin)",
] as const;

export const estheticPackages = [
  {
    icon: "👁️",
    title: "Brow Polish Package",
    price: "$45",
    tagline: "Defined, natural brows with soft structure",
    includes: ["Brow shaping", "Brow tint"],
    bestFor: "Clients wanting fuller, more polished brows with minimal maintenance.",
  },
  {
    icon: "👁️",
    title: "Lifted Eyes Package",
    price: "$115",
    tagline: "Mascara-free, lifted, and darker lashes",
    includes: ["Lash lift", "Lash tint"],
    bestFor: "Clients wanting long-lasting curl and eye definition without makeup.",
  },
  {
    icon: "✨",
    title: "Full Face Refresh Package",
    price: "$145",
    tagline: "Complete eye + brow enhancement in one visit",
    includes: ["Brow shaping", "Brow tint", "Lash lift", "Lash tint"],
    bestFor:
      "Clients wanting a full polished look with maximum impact and low daily effort.",
  },
  {
    icon: "🌿",
    title: "Glow Tone Package",
    price: "$60",
    tagline: "Instant skin smoothing and brightness boost",
    includes: ["Express dermaplane", "Hydration finish"],
    bestFor:
      "Dull skin, texture, makeup prep, or a quick glow before events or hair appointments.",
  },
  {
    icon: "💖",
    title: "Signature Maintenance Stack",
    price: "$197",
    tagline: "Your routine maintenance beauty reset",
    includes: ["Brow shaping + tint", "Lash tint", "Express dermaplane"],
    bestFor:
      "Regular clients maintaining a consistently polished, glowing look every 4–6 weeks.",
  },
] as const;
