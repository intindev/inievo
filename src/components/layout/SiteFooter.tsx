import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Github, Twitter, Linkedin, Mail, MapPin } from "lucide-react";
import { SITE_CONFIG, COMPANY_LINKS, SERVICE_LINKS } from "@/lib/constants";

const FOOTER_LINKS = {
  socials: [
    { icon: Twitter, href: SITE_CONFIG.social.twitter, label: "Twitter" },
    { icon: Github, href: SITE_CONFIG.social.github, label: "GitHub" },
    { icon: Linkedin, href: SITE_CONFIG.social.linkedin, label: "LinkedIn" },
  ],
};

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-background pt-24 pb-12 text-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand & Intro */}
          <div className="flex flex-col gap-6 lg:col-span-1">
            <Link
              to="/"
              className="group flex items-center gap-3 transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 rounded-sm"
            >
              <div className="grid h-8 w-8 place-items-center overflow-hidden rounded-md bg-brand shadow-sm transition-transform duration-300 group-hover:scale-105">
                <img
                  src={SITE_CONFIG.logo}
                  alt={`${SITE_CONFIG.name} Logo`}
                  className="h-5 w-auto object-contain brightness-0 invert"
                  loading="lazy"
                />
              </div>
              <span className="font-display text-xl font-bold tracking-tight text-foreground">
                {SITE_CONFIG.name}
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground pr-4">
              {SITE_CONFIG.description}
            </p>
            <div className="flex items-center gap-3 mt-2">
              {FOOTER_LINKS.socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-border/80 bg-background text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/40 hover:bg-secondary hover:text-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 active:scale-95"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Services & Company Links */}
          <div className="flex flex-col gap-6 lg:pl-8">
            <div>
              <h3 className="font-display text-xs font-semibold tracking-wider uppercase text-foreground mb-4">
                Services
              </h3>
              <ul className="flex flex-col gap-4">
                {SERVICE_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 rounded-sm"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 group-hover:text-brand" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-2">
              <h3 className="font-display text-xs font-semibold tracking-wider uppercase text-foreground mb-4">
                Company
              </h3>
              <ul className="flex flex-col gap-4">
                {COMPANY_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 rounded-sm"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 group-hover:text-brand" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-6">
            <h3 className="font-display text-xs font-semibold tracking-wider uppercase text-foreground">
              Contact
            </h3>
            <ul className="flex flex-col gap-6">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="group flex items-start gap-4 text-sm text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 rounded-sm"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-secondary/80 text-muted-foreground transition-colors group-hover:bg-brand/10 group-hover:text-brand">
                    <Mail className="h-4 w-4" />
                  </span>
                  <div className="flex flex-col pt-0.5">
                    <span className="font-semibold text-foreground tracking-tight">Email us</span>
                    <span className="text-xs mt-1">{SITE_CONFIG.email}</span>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-4 text-sm text-muted-foreground">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-secondary/80 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div className="flex flex-col pt-0.5">
                    <span className="font-semibold text-foreground tracking-tight">Location</span>
                    <span className="text-xs mt-1">{SITE_CONFIG.address}</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* CTA Box */}
          <div className="flex flex-col gap-4 lg:col-span-1">
            <div className="rounded-3xl border border-border/60 bg-secondary/30 p-8 shadow-sm transition-colors hover:border-border">
              <h3 className="font-display text-base font-semibold tracking-tight text-foreground">
                Start a project
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Ready to build something extraordinary? Let's discuss your next digital platform.
              </p>
              <Link
                to="/contact"
                className="mt-6 flex h-11 w-full items-center justify-center rounded-full bg-foreground text-[11px] font-bold uppercase tracking-wider text-background transition-all hover:bg-brand hover:text-brand-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 active:scale-95 shadow-sm hover:shadow-md"
              >
                Reach out
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 flex flex-col items-center justify-center gap-6 border-t border-border/60 pt-8 text-xs font-medium text-muted-foreground md:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
