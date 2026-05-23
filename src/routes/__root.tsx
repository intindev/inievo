import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import { PageTransitionProvider } from "@/components/providers/PageTransitionProvider";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SITE_CONFIG } from "@/lib/constants";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center bg-background px-6">
      <div className="mx-auto max-w-md text-center">
        <h1 className="font-display text-8xl font-bold tracking-tighter text-brand">404</h1>
        <h2 className="mt-4 font-display text-2xl font-medium tracking-tight text-foreground">
          Page not found
        </h2>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          The page you are looking for does not exist, has been moved, or is temporarily
          unavailable.
        </p>
        <div className="mt-10">
          <Link
            to="/"
            className="inline-flex h-12 items-center justify-center rounded-full bg-brand px-8 text-[13px] font-semibold uppercase tracking-wider text-brand-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-deep hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center bg-background px-6">
      <div className="mx-auto max-w-md text-center">
        <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground">
          System Error
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          We encountered an unexpected issue while loading this page. Our team has been notified.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex h-12 items-center justify-center rounded-full bg-brand px-8 text-[13px] font-semibold uppercase tracking-wider text-brand-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-deep hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            Try Again
          </button>
          <a
            href="/"
            className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-transparent px-8 text-[13px] font-semibold uppercase tracking-wider text-foreground transition-all duration-300 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border focus-visible:ring-offset-2"
          >
            Go Home
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
      { title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}` },
      { name: "description", content: SITE_CONFIG.description },
      { name: "author", content: SITE_CONFIG.founder },
      { name: "theme-color", content: "#137ece" },
      { property: "og:site_name", content: SITE_CONFIG.name },
      { property: "og:title", content: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}` },
      { property: "og:description", content: SITE_CONFIG.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}` },
      { name: "twitter:description", content: SITE_CONFIG.description },
      {
        property: "og:image",
        content:
          "https://storage.googleapis.com/gpt-engineer-file-uploads/0WJzauOOQ7Vikyw10zUMQM3KPR93/social-images/social-1778916850484-ChatGPT_Image_May_16,_2026,_01_25_18_PM.webp",
      },
      {
        name: "twitter:image",
        content:
          "https://storage.googleapis.com/gpt-engineer-file-uploads/0WJzauOOQ7Vikyw10zUMQM3KPR93/social-images/social-1778916850484-ChatGPT_Image_May_16,_2026,_01_25_18_PM.webp",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@500;600;700&display=swap",
      },
      {
        rel: "icon",
        type: "image/png",
        href: "https://res.cloudinary.com/dp5ap39r6/image/upload/v1777712162/6_ot5ui5.png",
      },
      { rel: "manifest", href: "/manifest.webmanifest" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="light">
      <head>
        <HeadContent />
      </head>
      <body className="flex min-h-screen flex-col bg-background text-foreground antialiased selection:bg-brand selection:text-brand-foreground">
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
      <ThemeProvider>
        <SiteHeader />
        <main className="flex-1">
          <PageTransitionProvider>
            <Outlet />
          </PageTransitionProvider>
        </main>
        <SiteFooter />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
