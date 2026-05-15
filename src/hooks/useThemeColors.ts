import { useState, useEffect, useRef } from 'react';
import { getAllColors } from '@/utils/colors';

/**
 * A custom hook that reads theme colors from CSS variables on the document root.
 * It uses a MutationObserver to stay reactive to changes in the DOM style attribute.
 * This ensures that components like charts re-render when theme colors change.
 */
export function useThemeColors() {
  const [colors, setColors] = useState(() => getAllColors());
  const lastColorsRef = useRef(colors);

  useEffect(() => {
    const updateColors = () => {
      const nextColors = getAllColors();
      
      // Shallow comparison to avoid unnecessary re-renders
      const keys = Object.keys(nextColors) as (keyof typeof nextColors)[];
      const hasChanged = keys.some(key => nextColors[key] !== lastColorsRef.current[key]);

      if (hasChanged) {
        lastColorsRef.current = nextColors;
        setColors(nextColors);
      }
    };

    // Initial check in case they changed between mount and effect
    updateColors();

    const observer = new MutationObserver(updateColors);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['style'],
    });

    return () => observer.disconnect();
  }, []);

  return colors;
}
