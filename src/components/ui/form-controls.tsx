import * as React from "react";
import { cn } from "@/lib/utils";

const controlClass =
  "min-h-12 w-full rounded-md border border-white/15 bg-[var(--surface)] px-4 text-base text-[var(--text-primary)] outline-none transition-[border-color,box-shadow] placeholder:text-[var(--text-muted)]/75 focus:border-[var(--focus)] focus:ring-2 focus:ring-[var(--focus)]/25 disabled:cursor-not-allowed disabled:opacity-50";

export function Input({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(controlClass, className)} {...props} />;
}

export function Textarea({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(controlClass, "min-h-32 resize-y py-3", className)}
      {...props}
    />
  );
}

export function FieldLabel({
  className,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn("text-sm font-bold text-[var(--text-primary)]", className)}
      {...props}
    />
  );
}
