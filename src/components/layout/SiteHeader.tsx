import { useState, useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import { SITE_CONFIG, PRIMARY_NAV } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 w-full transition-all duration-500",
        scrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-sm py-4"
          : "bg-background/0 border-b border-transparent py-6",
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="group relative flex items-center gap-3 transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 rounded-sm"
          >
            <div className="grid h-8 w-8 place-items-center overflow-hidden rounded-md bg-brand shadow-sm transition-transform duration-300 group-hover:scale-105">
              <img
                src={SITE_CONFIG.logo}
                alt={`${SITE_CONFIG.name} Logo`}
                className="h-5 w-auto object-contain brightness-0 invert"
                loading="eager"
              />
            </div>
            <span className="font-display text-xl font-bold tracking-tight text-foreground">
              {SITE_CONFIG.name}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {PRIMARY_NAV.map((item) => {
              const isActive =
                pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "group relative px-1 py-2 text-[11px] font-bold uppercase tracking-[0.1em] transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 rounded-sm",
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="desktop-nav-underline"
                      className="absolute -bottom-1 left-0 h-0.5 w-full bg-brand"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  {!isActive && (
                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-brand/30 transition-all duration-300 group-hover:w-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="inline-flex h-10 items-center justify-center rounded-full bg-brand px-6 text-xs font-bold uppercase tracking-wider text-brand-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-deep hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Get in touch
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-11 w-11 place-items-center rounded-full bg-transparent text-foreground transition-colors hover:bg-secondary md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 active:scale-95"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="md:hidden overflow-hidden border-t border-border/50 bg-background/98 backdrop-blur-xl shadow-xl"
          >
            <nav className="container mx-auto flex flex-col gap-2 px-4 py-6">
              <Link
                to="/"
                className="group flex flex-col py-3 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 rounded-md px-3 hover:bg-secondary/50 active:bg-secondary"
              >
                <span
                  className={cn(
                    "text-sm font-semibold uppercase tracking-wide transition-colors",
                    pathname === "/"
                      ? "text-brand"
                      : "text-foreground/80 group-hover:text-foreground",
                  )}
                >
                  Home
                </span>
                <span className="mt-1 text-xs text-muted-foreground/70">
                  Return to the main homepage
                </span>
              </Link>
              {PRIMARY_NAV.map((item) => {
                const isActive =
                  pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="group flex flex-col py-3 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 rounded-md px-3 hover:bg-secondary/50 active:bg-secondary"
                  >
                    <span
                      className={cn(
                        "text-sm font-semibold uppercase tracking-wide transition-colors",
                        isActive ? "text-brand" : "text-foreground/80 group-hover:text-foreground",
                      )}
                    >
                      {item.label}
                    </span>
                    {item.description && (
                      <span className="mt-1 text-xs text-muted-foreground/70">
                        {item.description}
                      </span>
                    )}
                  </Link>
                );
              })}
              <div className="mt-6 px-3">
                <Link
                  to="/contact"
                  className="flex h-12 w-full items-center justify-center rounded-full bg-brand text-[13px] font-bold uppercase tracking-wider text-brand-foreground shadow-sm transition-all hover:bg-brand-deep hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 active:scale-95"
                >
                  Get in touch
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
