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
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-brand px-4 py-2 text-sm font-medium text-brand-foreground transition-colors hover:bg-brand-deep"
          >
            Go home
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
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-brand px-4 py-2 text-sm font-medium text-brand-foreground transition-colors hover:bg-brand-deep"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
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
      { title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}` },
      { name: "description", content: SITE_CONFIG.description },
      { name: "author", content: SITE_CONFIG.founder },
      { name: "theme-color", content: "#137ece" },
      { property: "og:site_name", content: SITE_CONFIG.name },
      { property: "og:title", content: SITE_CONFIG.name },
      { property: "og:description", content: SITE_CONFIG.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE_CONFIG.name },
      { name: "twitter:description", content: SITE_CONFIG.description },
      { title: "Inievo Technologies | Premium Digital Solutions" },
      { property: "og:title", content: "Inievo Technologies | Premium Digital Solutions" },
      { name: "twitter:title", content: "Inievo Technologies | Premium Digital Solutions" },
      { name: "description", content: "We architect scalable custom software, web applications, and premium digital identities. World-class technology solutions built for your brand's growth." },
      { property: "og:description", content: "We architect scalable custom software, web applications, and premium digital identities. World-class technology solutions built for your brand's growth." },
      { name: "twitter:description", content: "We architect scalable custom software, web applications, and premium digital identities. World-class technology solutions built for your brand's growth." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/0WJzauOOQ7Vikyw10zUMQM3KPR93/social-images/social-1778916850484-ChatGPT_Image_May_16,_2026,_01_25_18_PM.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/0WJzauOOQ7Vikyw10zUMQM3KPR93/social-images/social-1778916850484-ChatGPT_Image_May_16,_2026,_01_25_18_PM.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
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
        <PageTransitionProvider>
          <Outlet />
        </PageTransitionProvider>
        <SiteFooter />
        
      </ThemeProvider>
    </QueryClientProvider>
  );
}
