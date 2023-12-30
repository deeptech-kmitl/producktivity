import { component$, Slot, type QwikIntrinsicElements } from "@builder.io/qwik";

export const Typography = component$<TypographyProps>((props) => {
  const { bold = false, variant = "base", ...rest } = props;

  const Variants = {
    title: "text-4xl",
    h1: "text-3xl",
    h2: "text-2xl",
    h3: "text-xl",
    h4: "text-lg",
    base: "text-base",
  } satisfies { [K in TypographyVariant]: string };

  return (
    <p {...rest} class={[{ "font-bold": bold }, Variants[variant]]}>
      <Slot />
    </p>
  );
});

export type TypographyVariant = "title" | "h1" | "h2" | "h3" | "h4" | "base";

type NativeParagraph = QwikIntrinsicElements["p"];

export interface TypographyProps extends NativeParagraph {
  bold?: boolean;
  variant?: TypographyVariant;
}
