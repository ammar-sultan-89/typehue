import type { LayoutId } from '@/types';
import { lazy, type ComponentType } from 'react';
import HomePageLayout from './homepage/HomePageLayout';

// Dashboard and Docs are the heaviest parts (Recharts + Long documentation content)
// We lazy-load them so they are only downloaded when the user actually navigates to them.
const DashboardLayout = lazy(() => import('./dashboard/DashboardLayout'));
const DocsLayout = lazy(() => import('./docs/DocsLayout'));

export const LAYOUT_COMPONENTS: Record<LayoutId, ComponentType<any>> = {
  'homepage': HomePageLayout, // Keep landing page eager for instant first-paint
  'dashboard': DashboardLayout,
  'docs': DocsLayout,
};
