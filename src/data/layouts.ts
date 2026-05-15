import type { LayoutConfig } from '@/types';

export const LAYOUTS: LayoutConfig[] = [
  {
    id: 'homepage',
    label: 'HomePage',
    requiredOptionalVars: [],
    usesMono: false,
  },
  {
    id: 'dashboard',
    label: 'Dashboard',
    requiredOptionalVars: [],
    usesMono: true,
  },
  {
    id: 'docs',
    label: 'Docs Layout',
    requiredOptionalVars: [],
    usesMono: true,
  },
];
