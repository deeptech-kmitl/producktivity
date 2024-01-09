export const fragments = ['landing', 'menu'] as const;

export type Fragment = (typeof fragments)[number];
