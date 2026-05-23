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

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Julia Marks Beauty — Luxury Beauty, Hair & Scalp Wellness Studio" },
      {
        name: "description",
        content:
          "A boutique sanctuary for hair, scalp health, and skincare — helping women feel confident, feminine, and radiantly cared for.",
      },
      { name: "author", content: "Julia Marks Beauty" },
      { property: "og:title", content: "Julia Marks Beauty — Luxury Beauty Studio" },
      {
        property: "og:description",
        content:
          "Hair artistry, scalp wellness, skincare, and self-care education in a boutique sanctuary.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
