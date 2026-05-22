/**
 * Contact — two-column layout with validated react-hook-form contact form,
 * WhatsApp quick-connect, and an embedded map placeholder.
 */
import { zodResolver } from "@hookform/resolvers/zod";
import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { ServicePageHero } from "@/components/ui/ServicePageHero";
import {
  BUDGET_OPTIONS,
  SERVICE_INTEREST_OPTIONS,
  SITE_CONFIG,
  WHATSAPP_NUMBER,
} from "@/lib/constants";
import { cn } from "@/lib/utils";

import { breadcrumbSchema, jsonLdScript } from "@/components/seo/JsonLd";
import { SEO_CONFIG, buildHead } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    buildHead("contact", {
      scripts: [jsonLdScript(breadcrumbSchema(SEO_CONFIG.contact.path))],
    }),
  component: Page,
});

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(100),
  email: z.string().trim().email("Enter a valid email address.").max(255),
  phone: z
    .string()
    .trim()
    .max(40)
    .regex(/^[+\d\s\-()]*$/u, "Phone can only contain digits and + - ( ).")
    .optional()
    .or(z.literal("")),
  service: z.enum(SERVICE_INTEREST_OPTIONS),
  budget: z.enum(BUDGET_OPTIONS),
  message: z
    .string()
    .trim()
    .min(10, "Tell us a little more — at least 10 characters.")
    .max(2000),
});
type ContactValues = z.infer<typeof contactSchema>;

const REASONS = [
  "Senior team — no junior hand-offs",
  "Research-led, evidence over opinion",
  "Transparent pricing and timelines",
  "Small portfolio. Long partnerships.",
] as const;

function Page() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      service: SERVICE_INTEREST_OPTIONS[0],
      budget: BUDGET_OPTIONS[1],
    },
  });

  const onSubmit = handleSubmit(async () => {
    setSubmitError(null);
    try {
      // Placeholder — wire to a server function or email service later.
      await new Promise((r) => setTimeout(r, 600));
      setSubmitted(true);
      reset();
    } catch {
      setSubmitError("Something went wrong. Please try again or use WhatsApp.");
    }
  });

  const waHref = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}`;

  return (
    <main>
      <ServicePageHero
        tag="Say hello"
        title="Tell us about your project."
        subtitle="We read every message. Expect a thoughtful reply within one business day."
      />

      <section className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          {/* Left — info */}
          <aside className="space-y-10">
            <div className="space-y-4 text-sm">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center gap-3 text-foreground hover:text-brand"
              >
                <Mail className="h-4 w-4 text-brand" /> {SITE_CONFIG.email}
              </a>
              <a
                href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-foreground hover:text-brand"
              >
                <Phone className="h-4 w-4 text-brand" /> {SITE_CONFIG.phone}
              </a>
              <p className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-brand" /> {SITE_CONFIG.address}
              </p>
            </div>

            <a
              href={waHref}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Chat with us on WhatsApp"
              className="inline-flex items-center gap-3 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_-12px_rgba(37,211,102,0.7)] transition-transform hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" /> Quick chat on WhatsApp
            </a>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.24em] text-brand">
                Why work with Inievo
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {REASONS.map((r) => (
                  <li key={r} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Inievo office location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=91.78%2C22.30%2C91.86%2C22.38&layer=mapnik"
                loading="lazy"
                className="h-56 w-full border-0"
              />
            </div>
          </aside>

          {/* Right — form */}
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-10">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                  className="flex flex-col items-start gap-4 py-8"
                >
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-brand/10 text-brand ring-1 ring-brand/30">
                    <CheckCircle2 className="h-6 w-6" />
                  </span>
                  <h2 className="font-display text-2xl font-semibold text-foreground">
                    Message received.
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    Thank you. We'll be in touch within one business day.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-sm font-semibold text-brand hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={onSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 gap-5 sm:grid-cols-2"
                  noValidate
                >
                  <Field label="Name" error={errors.name?.message}>
                    <input
                      {...register("name")}
                      autoComplete="name"
                      className={inputClass(!!errors.name)}
                    />
                  </Field>
                  <Field label="Email" error={errors.email?.message}>
                    <input
                      {...register("email")}
                      type="email"
                      autoComplete="email"
                      className={inputClass(!!errors.email)}
                    />
                  </Field>
                  <Field label="Phone (optional)" error={errors.phone?.message}>
                    <input
                      {...register("phone")}
                      type="tel"
                      autoComplete="tel"
                      className={inputClass(!!errors.phone)}
                    />
                  </Field>
                  <Field label="Budget" error={errors.budget?.message}>
                    <select {...register("budget")} className={inputClass(!!errors.budget)}>
                      {BUDGET_OPTIONS.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field
                    label="Service interest"
                    error={errors.service?.message}
                    className="sm:col-span-2"
                  >
                    <select {...register("service")} className={inputClass(!!errors.service)}>
                      {SERVICE_INTEREST_OPTIONS.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field
                    label="Project description"
                    error={errors.message?.message}
                    className="sm:col-span-2"
                  >
                    <textarea
                      {...register("message")}
                      rows={5}
                      className={inputClass(!!errors.message)}
                    />
                  </Field>

                  {submitError && (
                    <p
                      role="alert"
                      className="sm:col-span-2 rounded-md bg-destructive/10 p-3 text-sm text-destructive"
                    >
                      {submitError}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="sm:col-span-2 mt-2 inline-flex h-12 items-center justify-center rounded-full bg-brand px-7 text-sm font-semibold text-brand-foreground shadow-[0_12px_40px_-12px_rgba(19,126,206,0.8)] transition-colors hover:bg-brand-deep disabled:opacity-60"
                  >
                    {isSubmitting ? "Sending…" : "Send message"}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </main>
  );
}

function inputClass(hasError: boolean) {
  return cn(
    "w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40",
    hasError ? "border-destructive" : "border-border focus:border-brand/60",
  );
}

function Field({
  label,
  error,
  children,
  className,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={cn("flex flex-col gap-2 text-sm", className)}>
      <span className="font-medium text-foreground">{label}</span>
      {children}
      {error && (
        <span role="alert" className="text-xs text-destructive">
          {error}
        </span>
      )}
    </label>
  );
}
