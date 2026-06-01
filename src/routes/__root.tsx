import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6 text-center">
      <div className="max-w-md">
        <p className="eyebrow mb-6">404</p>
        <h1 className="font-serif italic text-5xl mb-4">Page not found</h1>
        <p className="text-foreground/60 mb-8">
          The page you're looking for has drifted away.
        </p>
        <Link
          to="/"
          className="inline-block bg-foreground text-background px-8 py-3 text-[11px] uppercase tracking-luxe hover:bg-accent transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6 text-center">
      <div className="max-w-md">
        <p className="eyebrow mb-6">Something paused</p>
        <h1 className="font-serif italic text-4xl mb-4">A gentle moment</h1>
        <p className="text-foreground/60 mb-8">
          This page didn't load. Please try again.
        </p>
        <div className="flex justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="bg-foreground text-background px-6 py-3 text-[11px] uppercase tracking-luxe hover:bg-accent transition-colors"
          >
            Try again
          </button>
          <a
            href="/"
            className="border border-foreground/20 px-6 py-3 text-[11px] uppercase tracking-luxe hover:bg-beige transition-colors"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const LOCAL_BUSINESS_JSONLD = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: "Julia Marks Beauty",
  image: "/og-image.jpg",
  description:
    "Luxury hair, scalp wellness treatments, and esthetic studio in Spring Hill, TN — serving Franklin, Columbia, and Nashville. Balayage, blonding, scalp wellness treatments, and beauty + skincare services.",
  telephone: "",
  email: "juliamarksbeauty@gmail.com",
  priceRange: "$$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1010 Crossings Blvd, Suite 200",
    addressLocality: "Spring Hill",
    addressRegion: "TN",
    postalCode: "37174",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 35.7512, longitude: -86.93 },
  areaServed: [
    { "@type": "City", name: "Spring Hill, TN" },
    { "@type": "City", name: "Franklin, TN" },
    { "@type": "City", name: "Columbia, TN" },
    { "@type": "City", name: "Nashville, TN" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "15:30",
    },
  ],
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Balayage" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Blonding" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Scalp Wellness Treatments" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dermaplane Facial" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brow & Lash Tint" } },
  ],
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "google-site-verification", content: "Ur5Ka7jXUZ2-1gnstOXcVrrhlVQxPggOk3y9LltyfL8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title:
          "Julia Marks Beauty | Luxury Hair Salon & Scalp Wellness Treatments in Spring Hill, TN",
      },
      {
        name: "description",
        content:
          "Luxury hair salon, balayage and blonding specialist, and scalp wellness treatments studio in Spring Hill, TN — serving Franklin, Columbia, and Nashville.",
      },
      { name: "author", content: "Julia Marks Beauty" },
      {
        name: "keywords",
        content:
          "luxury hair salon Spring Hill TN, balayage specialist, blonding specialist, scalp wellness treatments, dimensional color, lived-in blonde hair, brunette balayage, healthy hair salon, hair color specialist, dermaplane facial, brow tint, lash tint, Franklin TN, Columbia TN, Nashville TN",
      },
      {
        property: "og:title",
        content: "Julia Marks Beauty | Luxury Hair & Scalp Wellness Treatments in Spring Hill, TN",
      },
      {
        property: "og:description",
        content:
          "Hair artistry, scalp wellness, and esthetic services in a boutique sanctuary serving Spring Hill, Franklin, Columbia, and Nashville, TN.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_US" },
      { property: "og:site_name", content: "Julia Marks Beauty" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { name: "geo.region", content: "US-TN" },
      { name: "geo.placename", content: "Spring Hill, Tennessee" },
      { title: "Lovable App" },
      { property: "og:title", content: "Lovable App" },
      { name: "twitter:title", content: "Lovable App" },
      { name: "description", content: "Julia Marks Beauty offers luxury hair, scalp, and skincare services, plus curated beauty products." },
      { property: "og:description", content: "Julia Marks Beauty offers luxury hair, scalp, and skincare services, plus curated beauty products." },
      { name: "twitter:description", content: "Julia Marks Beauty offers luxury hair, scalp, and skincare services, plus curated beauty products." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/98b0fe44-f713-49f8-a01c-56ce5b5ca848/id-preview-89911ec5--142da213-44bc-4025-b8d9-4d89965e28ad.lovable.app-1780276958902.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/98b0fe44-f713-49f8-a01c-56ce5b5ca848/id-preview-89911ec5--142da213-44bc-4025-b8d9-4d89965e28ad.lovable.app-1780276958902.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(LOCAL_BUSINESS_JSONLD),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SiteNav />
      <main id="main">
        <Outlet />
      </main>
      <SiteFooter />
    </QueryClientProvider>
  );
}
