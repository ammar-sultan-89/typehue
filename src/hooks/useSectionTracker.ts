import { useState, useEffect, useCallback } from 'react';

interface UseSectionTrackerOptions {
  sectionIds: string[];
  rootMargin?: string;
  defaultActiveId?: string;
}

export function useSectionTracker({ 
  sectionIds, 
  rootMargin = '-10% 0% -80% 0%',
  defaultActiveId = ''
}: UseSectionTrackerOptions) {
  const [activeId, setActiveId] = useState(defaultActiveId || sectionIds[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds, rootMargin]);

  const scrollToSection = useCallback((id: string, onAfterScroll?: () => void) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      if (onAfterScroll) onAfterScroll();
    }
  }, []);

  return {
    activeId,
    setActiveId,
    scrollToSection
  };
}
