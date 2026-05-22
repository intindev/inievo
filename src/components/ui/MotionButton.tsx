/**
 * Button — animation-ready, fully typed primary button for Inievo.
 *
 * Variants: primary (shimmer sweep on hover), secondary (border brighten +
 * brand tint fill), ghost (underline draws from left), danger.
 * All variants press to scale(0.97) for a tactile feel.
 *
 * This is intentionally separate from the shadcn `button.tsx` primitive,
 * which remains in use by lower-level UI components.
 */
import { Slot } from "@radix-ui/react-slot";
import { motion, type HTMLMotionProps } from "framer-motion";
import { Loader2 } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "danger";
type Size = "sm" | "md" | "lg";

export interface MotionButtonProps
  extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  asChild?: boolean;
  children?: React.ReactNode;
}

const sizeClasses: Record<Size, string> = {
  sm: "h-9 px-4 text-xs",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-7 text-sm",
};

const baseClasses =
  "group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-semibold tracking-tight transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-60";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-brand text-brand-foreground shadow-[0_12px_40px_-16px_rgba(19,126,206,0.7)] hover:bg-brand-deep",
  secondary:
    "border border-border bg-card text-foreground hover:border-brand/60 hover:bg-brand/5",
  ghost: "bg-transparent text-foreground hover:text-brand",
  danger: "bg-destructive text-destructive-foreground hover:opacity-90",
};

export const MotionButton = React.forwardRef<HTMLButtonElement, MotionButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      loading = false,
      icon,
      iconPosition = "left",
      fullWidth = false,
      asChild = false,
      disabled,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp: React.ElementType = asChild ? Slot : motion.button;
    const isDisabled = disabled || loading;

    return (
      <Comp
        ref={ref}
        whileTap={isDisabled ? undefined : { scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 22 }}
        aria-busy={loading || undefined}
        disabled={isDisabled}
        className={cn(
          baseClasses,
          sizeClasses[size],
          variantClasses[variant],
          fullWidth && "w-full",
          className,
        )}
        {...props}
      >
        {/* Primary: shimmer sweep */}
        {variant === "primary" && (
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 -translate-x-full bg-[linear-gradient(110deg,transparent_30%,rgba(255,255,255,0.4)_50%,transparent_70%)] bg-[length:200%_100%] transition-transform duration-700 ease-out group-hover/btn:translate-x-full"
          />
        )}
        {/* Ghost: underline draws from left */}
        {variant === "ghost" && (
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-4 bottom-2 h-px origin-left scale-x-0 bg-brand transition-transform duration-300 ease-out group-hover/btn:scale-x-100"
          />
        )}

        <span className="relative z-10 inline-flex items-center gap-2">
          {loading ? (
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
          ) : icon && iconPosition === "left" ? (
            <span className="inline-flex">{icon}</span>
          ) : null}
          {children}
          {!loading && icon && iconPosition === "right" && (
            <span className="inline-flex">{icon}</span>
          )}
        </span>
      </Comp>
    );
  },
);
MotionButton.displayName = "MotionButton";
