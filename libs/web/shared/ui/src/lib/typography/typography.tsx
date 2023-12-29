import { component$, Slot, type HTMLAttributes } from "@builder.io/qwik";
import { clsx } from "clsx";

export const Typography = component$(
  ({ bold = false, variant = "base", ...props }: TypographyProps) => {
    return (
      <p
        class={clsx(
          "font-sans",
          bold && "font-bold",
          TypographyVariants[variant]
        )}
        {...props}
      >
        <Slot />
      </p>
    );
  }
);

export const TypographyVariants = {
  title: "text-4xl",
  h1: "text-3xl",
  h2: "text-2xl",
  h3: "text-xl",
  h4: "text-lg",
  base: "text-base",
};

export type TypographyVariant = keyof typeof TypographyVariants;

export interface TypographyProps extends HTMLAttributes<HTMLParagraphElement> {
  bold?: boolean;
  variant?: TypographyVariant;
}
