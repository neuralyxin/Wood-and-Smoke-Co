import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-11 shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-md px-5 text-sm font-bold transition-[background-color,color,border-color,transform] duration-180 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] disabled:pointer-events-none disabled:opacity-45 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--accent)] text-[var(--text-dark)] hover:bg-[var(--focus)]",
        secondary:
          "border border-white/25 bg-transparent text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)]",
        ghost:
          "bg-transparent text-[var(--text-primary)] hover:bg-white/8 hover:text-[var(--accent)]",
        cream:
          "bg-[var(--cream)] text-[var(--text-dark)] hover:bg-[var(--accent)]",
      },
      size: {
        default: "h-12 px-5",
        sm: "h-11 px-4 text-xs",
        lg: "h-14 px-7 text-base",
        icon: "size-11 px-0",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

function Button({
  className,
  variant,
  size,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
