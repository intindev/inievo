/**
 * SiteHeader — sticky, scroll-aware navigation for Inievo Technologies.
 *
 * Desktop: wordmark, animated underline nav, primary CTA.
 * Mobile (<768px): hamburger trigger that opens a full-screen slide-down
 * menu with staggered Framer Motion entrance.
 */

import { Link, useLocation } from "@tanstack/react-router";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { CTA, PRIMARY_NAV, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

const LOGO_SRC =
  "https://res.cloudinary.com/dp5ap39r6/image/upload/v1777712331/Inievo_v3ow3t.png";

function Wordmark() {
  return (
    <Link to="/" className="group flex items-center" aria-label={SITE_CONFIG.name}>
      <img
        src={LOGO_SRC}
        alt={SITE_CONFIG.name}
        className="block h-8 w-auto transition-transform group-hover:scale-[1.03]"
      />
    </Link>
  );
}

function DesktopNavLink({ href, label }: { href: string; label: string }) {
  const { pathname } = useLocation();
  const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
  return (
    <Link
      to={href}
      className={cn(
        "group relative px-1 py-2 text-sm font-medium transition-colors",
        isActive ? "text-neutral-900" : "text-neutral-600 hover:text-neutral-900",
      )}
    >
      {label}
      <span
        className={cn(
          "pointer-events-none absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-brand transition-transform duration-300 group-hover:scale-x-100",
          isActive && "scale-x-100",
        )}
      />
    </Link>
  );
}

export function SiteHeader() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 50));

  // Close mobile menu on route change
  const { pathname } = useLocation();
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full bg-white transition-shadow duration-300",
        scrolled
          ? "border-b border-black/10 shadow-[0_8px_30px_-20px_rgba(0,0,0,0.25)]"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Wordmark />

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {PRIMARY_NAV.map((item) => (
            <DesktopNavLink key={item.href} href={item.href} label={item.label} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            size="sm"
            className="hidden bg-brand text-brand-foreground shadow-sm hover:bg-brand-deep md:inline-flex"
          >
            <Link to={CTA.primary.href}>{CTA.primary.label}</Link>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-8 w-8 place-items-center rounded-none bg-[#137ECE] text-white shadow-sm transition-colors hover:bg-[#0f5fa3] md:hidden"
          >
            {open ? <X className="h-4 w-4 text-white" /> : <Menu className="h-4 w-4 text-white" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden"
          >
            <div className="border-t border-border/60 bg-background/95 backdrop-blur-xl">
              <nav
                className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-4 py-6 sm:px-6"
                aria-label="Mobile"
              >
                {PRIMARY_NAV.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.25, ease: "easeOut" }}
                  >
                    <Link
                      to={item.href}
                      className="flex flex-col rounded-lg px-3 py-3 transition-colors hover:bg-accent"
                    >
                      <span className="text-base font-medium text-foreground">{item.label}</span>
                      {item.description && (
                        <span className="text-xs text-muted-foreground">{item.description}</span>
                      )}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: PRIMARY_NAV.length * 0.05, duration: 0.25 }}
                  className="mt-3"
                >
                  <Button
                    asChild
                    className="w-full bg-brand text-brand-foreground hover:bg-brand-deep"
                  >
                    <Link to={CTA.primary.href}>{CTA.primary.label}</Link>
                  </Button>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
