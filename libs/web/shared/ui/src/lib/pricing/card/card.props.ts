export interface PricingCard {
  type: 'Hobby' | 'Professional' | 'Enterprise';
  price: string;
  desc: string;
  features: string[];
  cta: string;
}

export const PackageVariants = ['Hobby', 'Professional', 'Enterprise'] as const;
export type PackageVariant = (typeof PackageVariants)[number];
