import { useState, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, useTheme } from '@/components/ThemeProvider';
import { LocaleProvider } from '@/contexts/LocaleContext';
import { SettingsPanel } from '@/components/panel/SettingsPanel';
import { LAYOUT_COMPONENTS } from '@/components/layouts';
import { RouteManager } from '@/components/RouteManager';
import SEOHead from '@/components/shared/SEOHead';
import { LayoutLoader } from '@/components/shared/LayoutLoader';

const PreviewArea = ({ isPanelOpen }: { isPanelOpen: boolean }) => {
  const { activeLayout } = useTheme();
  const ActiveLayout = LAYOUT_COMPONENTS[activeLayout];

  const seoLayout = activeLayout || 'homepage';

  return (
    <>
      <SEOHead layout={seoLayout} />
      <div className={`relative flex flex-1 flex-col overflow-hidden transition-all duration-300 ${isPanelOpen ? 'lg:me-[380px]' : ''}`}>
      {/* Main Preview Container */}
      <main className="flex-1 overflow-y-auto overflow-x-hidden scroll-smooth">
        <Suspense fallback={<LayoutLoader />}>
          <ActiveLayout />
        </Suspense>
      </main>
    </div>
    </>
  );
};

export default function App() {
  const [isPanelOpen, setIsPanelOpen] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth >= 768;
    }
    return true;
  });
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    // <HelmetProvider>
      <LocaleProvider>
        <ThemeProvider>
          <div className="flex h-screen w-full overflow-hidden bg-bg relative">
            <Routes>
              <Route path="/:lang/:layoutId?" element={
                <>
                  <RouteManager />
                  <PreviewArea isPanelOpen={isPanelOpen} />
                </>
              } />
              <Route path="/" element={<Navigate to="/en" replace />} />
              <Route path="*" element={<Navigate to="/en" replace />} />
            </Routes>
            
            <SettingsPanel 
              isMobileOpen={isMobileOpen} 
              setIsMobileOpen={setIsMobileOpen}
              isOpen={isPanelOpen}
              setIsOpen={setIsPanelOpen}
            />
          </div>
        </ThemeProvider>
      </LocaleProvider>
    // </HelmetProvider>
  );
}
