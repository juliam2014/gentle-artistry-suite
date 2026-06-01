export const hairAppointments = [
  {
    icon: "✨",
    timing: "6–8 weeks since your last visit",
    title: "Root Refresh + Grey Coverage",
    price: "$140",
    intro:
      "​This service is perfect for retouching new growth only and a refresh gloss for the ends. This service is ideal for clients who have been within the last 6-9 weeks.",
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
    icon: "🎨",
    timing: "6–8 weeks since your last visit",
    title: "All-Over Color",
    price: "$195",
    intro:
      "An All-Over Color service is a single-process color designed to enhance, deepen, or shift your natural shade from roots to ends for a rich, consistent result. Whether you're going darker, refreshing faded color, covering grays, or enhancing your natural brunette, this service creates a polished, glossy finish with even saturation and shine throughout the hair.",
    bestFor: [
      "Want one solid, even color from root to ends",
      "Prefer a deeper, richer brunette or soft tonal shift",
      "Are refreshing faded or uneven existing color",
      "Prefer a polished, glossy, one-tone finish",
      "Are going darker or enhancing their natural base",
    ],
    includes: [
      "Full application of permanent or demi-permanent color",
      "Customized formulation for tone, depth, and coverage",
      "Gray coverage or blending (if needed)",
      "Gloss-like finish for shine and richness",
      "K18 treatment for strength and integrity",
      "Luxury shampoo experience with scalp massage",
      "Professional blowout and finish",
    ],
    note: "Complete color transformation",
  },
  {
    icon: "🤍",
    timing: "8–12 weeks since your last visit",
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
    note: "​",
  },
  {
    icon: "✨",
    timing: "​",
    title: "Full Highlight",
    price: "$285",
    intro:
      "​For maximum brightness through out the entire head vs partial focuses around your face and the top of your head. Typically a full is only needed once or twice a year.",
    bestFor: [
      "​You want maximum brightness",
      "​Its been a long time since your last highlight",
      "​Youre new to highlights",
      "​Your blonde feels dark, heavy, or grown out",
    ],
    includes: [
      "Customized blonding (balayage / foils / dimension) throughout",
      "Gloss / toner",
      "Treatment for hair health",
      "​Blowout finish",
    ],
    note: "Complete blonding transformation",
  },
  {
    icon: "🌾",
    timing: "Done 2-3 times a year",
    title: "Lived-In Blonde",
    price: "Starts at $250",
    intro:
      "A soft, sun-kissed blonde designed to grow out beautifully with low maintenance. Perfect for clients who want a natural, effortless look that blends seamlessly as it grows. Instead of all over bright blonde, this service builds contrast and softness in the right places .",
    bestFor: [
      "Low-maintenance blonde lovers",
      "Soft, natural-looking dimension",
      "Seamless grow-out with no harsh lines",
      "Clients who stretch appointments longer",
    ],
    includes: [
      "Hand-painted balayage placement",
      "Gloss / toner",
      "Treatment for hair health",
      "Blowout finish",
    ],
    note: "most booked service",
  },
  {
    icon: "🤎",
    timing: "8–14 weeks (brunettes)",
    title: "Bronding  (Brunette Dimension + Gloss)",
    price: "$250",
    intro: "Perfect if youre a brunette  wanting  some dimension through your hair. Customizing your appointment to find the perfect bronde color for you. Think goldne, caramel or beige tones to enhance your natural color. This service typically takes 3 hours.",
    bestFor: [
      "Refreshing faded brunette tones",
      "Adding shine + richness",
      "Subtle dimension or tonal change",
      "Maintaining healthy-looking color",
    ],
    includes: [
      "Custom color placement or gloss refresh",
      "Conditioning treatment",
      "Blowout finish",
    ],
  },
  {
    icon: "🌟",
    timing: "4–6 weeks since your last visit",
    title: "Mini Blonding / Bronding Refresh",
    price: "$150",
    intro:
      "A Mini Blonding or Bronding Refresh is a quick maintenance service designed to brighten the face and revive tone without a full highlight or color appointment. This service focuses on face-framing brightness and a gloss/toner to restore shine, dimension, and freshness.",
    bestFor: [
      "Want a quick refresh between full services",
      "Need brightness around the face only",
      "Are maintaining lived-in blonde or bronde",
      "Notice brassiness or dullness",
      "Want a low-maintenance maintenance appointment",
    ],
    includes: [
      "Face-framing blonding or subtle touch-up",
      "Gloss/toner to refresh tone and shine",
      "K18 treatment",
      "Luxury shampoo experience with scalp massage",
      "Blowout and finish",
    ],
    note: "Great in-between maintenance service",
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
