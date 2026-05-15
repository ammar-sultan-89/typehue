export const DOCS_NAV_IDS = [
  'getting-started',
  'layouts',
  'typography',
  'colors',
  'how-it-works',
  'contributing',
  'planned-improvements',
] as const;

export type DocsNavId = typeof DOCS_NAV_IDS[number];
