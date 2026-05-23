import { zodResolver } from "@hookform/resolvers/zod";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { buildHead } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";

export const Route = createFileRoute("/contact")({
  head: () => buildHead("Contact"),
  component: ContactPage,
});

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  project: z.string().min(10, "Please provide a few more details about your project"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    // Simulate network request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", data);
    setIsSubmitting(false);
    setIsSuccess(true);
    reset();

    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <main className="min-h-screen bg-background pt-32 pb-24 text-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col lg:col-span-5 lg:pr-12"
          >
            <h1 className="font-display text-5xl font-semibold tracking-tight md:text-6xl">
              Let's build.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Whether you are scaling a mature platform or initiating a new brand identity, we are
              ready to partner with you. Fill out the form, and our lead engineer will be in touch
              directly.
            </p>

            <div className="mt-16 flex flex-col gap-10">
              <div>
                <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
                  Direct Line
                </h3>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="mt-3 inline-block text-lg font-medium text-muted-foreground transition-colors hover:text-brand"
                >
                  {SITE_CONFIG.email}
                </a>
              </div>

              <div>
                <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
                  HQ
                </h3>
                <p className="mt-3 text-lg font-medium text-muted-foreground">
                  {SITE_CONFIG.address}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl border border-border/60 bg-secondary/30 p-8 shadow-sm md:p-12">
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand mb-6">
                    <ArrowRight className="h-8 w-8" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-foreground">
                    Inquiry Received
                  </h3>
                  <p className="mt-4 text-muted-foreground max-w-sm">
                    Thank you for reaching out. We will review your project details and respond
                    shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="name"
                        className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                      >
                        Full Name
                      </label>
                      <input
                        {...register("name")}
                        id="name"
                        type="text"
                        disabled={isSubmitting}
                        className="h-12 border-b border-border bg-transparent text-foreground placeholder:text-muted-foreground/50 focus:border-brand focus:outline-none focus:ring-0 transition-colors disabled:opacity-50"
                        placeholder="Jane Doe"
                      />
                      {errors.name && (
                        <span className="text-xs text-destructive mt-1">{errors.name.message}</span>
                      )}
                    </div>
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="email"
                        className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                      >
                        Email Address
                      </label>
                      <input
                        {...register("email")}
                        id="email"
                        type="email"
                        disabled={isSubmitting}
                        className="h-12 border-b border-border bg-transparent text-foreground placeholder:text-muted-foreground/50 focus:border-brand focus:outline-none focus:ring-0 transition-colors disabled:opacity-50"
                        placeholder="jane@company.com"
                      />
                      {errors.email && (
                        <span className="text-xs text-destructive mt-1">
                          {errors.email.message}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="project"
                      className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                    >
                      Project Details
                    </label>
                    <textarea
                      {...register("project")}
                      id="project"
                      rows={4}
                      disabled={isSubmitting}
                      className="resize-none border-b border-border bg-transparent pt-3 text-foreground placeholder:text-muted-foreground/50 focus:border-brand focus:outline-none focus:ring-0 transition-colors disabled:opacity-50"
                      placeholder="Tell us about your objectives, timeline, and scope..."
                    />
                    {errors.project && (
                      <span className="text-xs text-destructive mt-1">
                        {errors.project.message}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group mt-4 inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-foreground text-[13px] font-bold uppercase tracking-wider text-background shadow-sm transition-all hover:-translate-y-0.5 hover:bg-brand hover:text-brand-foreground hover:shadow-md focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-70 md:w-auto md:px-12 md:self-end"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Inquiry
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
