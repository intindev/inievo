/**
 * SiteFooter — 4-column responsive footer for Inievo Technologies.
 *
 * Columns: brand + socials, services, company, contact.
 * Bottom bar: copyright, "Built with passion in Bangladesh", legal links.
 *
 * Each column animates in via Framer Motion `whileInView` with a staggered
 * delay; viewport={{ once: true, margin: "-100px" }} keeps it cheap.
 */

import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import type { ComponentType, SVGProps } from "react";

import { Button } from "@/components/ui/button";
import {
  COMPANY_LINKS,
  CTA,
  
  SERVICE_LINKS,
  SITE_CONFIG,
  SOCIAL_LINKS,
} from "@/lib/constants";
import type { IconName, NavLink } from "@/lib/types";

type IconCmp = ComponentType<SVGProps<SVGSVGElement>>;
const SOCIAL_ICONS: Partial<Record<IconName, IconCmp>> = {
  linkedin: Linkedin,
  github: Github,
  twitter: Twitter,
};

function Column({
  title,
  links,
  delay,
}: {
  title: string;
  links: readonly NavLink[];
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
        {title}
      </h3>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              to={l.href}
              className="text-sm text-white/85 transition-colors hover:text-white"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-[#137ECE] text-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Link to="/" className="flex items-center">
              <img
                src="https://res.cloudinary.com/dp5ap39r6/image/upload/v1777712181/inievo_full_logo_png_dydmze.png"
                alt={SITE_CONFIG.name}
                className="block h-9 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/80">
              {SITE_CONFIG.tagline}
              <br />
              <span className="text-white/70">A studio for ambitious teams.</span>
            </p>
            <ul className="mt-5 flex items-center gap-2">
              {SOCIAL_LINKS.map((s) => {
                const Icon = SOCIAL_ICONS[s.icon];
                if (!Icon) return null;
                return (
                  <li key={s.href}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.label}
                      className="grid h-9 w-9 place-items-center rounded-full border border-white/30 text-white/80 transition-colors hover:border-white hover:bg-white/10 hover:text-white"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          <Column title="Services" links={SERVICE_LINKS} delay={0.08} />
          <Column title="Company" links={COMPANY_LINKS} delay={0.16} />

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.24, ease: "easeOut" }}
          >
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
              Get in touch
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="inline-flex items-center gap-2 text-white/85 hover:text-white"
                >
                  <Mail className="h-4 w-4" />
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 text-white/85 hover:text-white"
                >
                  <Phone className="h-4 w-4" />
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="inline-flex items-center gap-2 text-white/85">
                <MapPin className="h-4 w-4" />
                {SITE_CONFIG.address}
              </li>
            </ul>
            <Button
              asChild
              size="sm"
              className="mt-5 bg-white text-[#137ECE] hover:bg-white/90"
            >
              <Link to={CTA.primary.href}>{CTA.primary.label}</Link>
            </Button>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/20 pt-6 text-xs text-white/70 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4">
            <Link to="/" className="hover:text-white">
              Privacy Policy
            </Link>
            <span aria-hidden>·</span>
            <Link to="/" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
