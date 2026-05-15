import { useState, useRef, useEffect, useMemo } from 'react';
import type { FontOption, CssFontVar, Locale } from '@/types';
import { FONT_OPTIONS, FONT_OPTIONS_BY_SUBSET } from '@/data/fonts';
import { useTranslation } from '@/i18n';

interface FontPickerProps {
  label: string;
  value: FontOption;
  onChange: (font: FontOption) => void;
  fontVar: CssFontVar;
  locale?: Locale;
}

const CATEGORIES = ['All', 'Sans-serif', 'Serif', 'Display', 'Monospace'] as const;
type Category = (typeof CATEGORIES)[number];

const ITEM_HEIGHT = 40;
const BUFFER = 10;

export function FontPicker({ label, value, onChange, locale = 'en' }: FontPickerProps) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<Category>('All');
  const [scrollTop, setScrollTop] = useState(0);
  
  const dropdownRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const baseFonts = useMemo(() => {
    if (locale === 'ar') {
      return (FONT_OPTIONS_BY_SUBSET['arabic'] || []).filter(f => f.subsets.includes('arabic'));
    }
    return FONT_OPTIONS;
  }, [locale]);

  const filteredFonts = useMemo(() => {
    return baseFonts.filter(f => {
      const matchesSearch = f.family.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === 'All' || f.category.toLowerCase() === category.toLowerCase();
      return matchesSearch && matchesCategory;
    });
  }, [baseFonts, search, category]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    const handleEsc = (e: KeyboardEvent) => { 
      if (e.key === 'Escape') setIsOpen(false); 
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setSearch('');
      setCategory('All');
      setScrollTop(0);
    }
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  };

  const totalHeight = filteredFonts.length * ITEM_HEIGHT;
  const startIndex = Math.max(0, Math.floor(scrollTop / ITEM_HEIGHT) - BUFFER);
  const endIndex = Math.min(filteredFonts.length, Math.ceil((scrollTop + 320) / ITEM_HEIGHT) + BUFFER);
  
  const visibleItems = filteredFonts.slice(startIndex, endIndex);
  const offsetY = startIndex * ITEM_HEIGHT;

  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-bold uppercase tracking-wider text-text-muted">{label}</label>
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={handleToggle}
          type="button"
          className="flex w-full items-center justify-between rounded-lg border border-border bg-bg px-4 py-2.5 text-sm font-medium hover:border-primary transition-colors"
        >
          <span className="truncate">{value.family}</span>
          <svg className={`h-4 w-4 shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute left-0 right-0 z-[60] mt-2 overflow-hidden rounded-xl border border-border bg-bg shadow-xl animate-in fade-in zoom-in duration-150">
            {/* Search and Tabs */}
            <div className="border-b border-border bg-surface/50 p-3 space-y-3">
              <div className="relative">
                <svg className="absolute inset-s-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  autoFocus
                  type="text"
                  placeholder={t('picker.search_placeholder')}
                  className="w-full rounded-md border border-border bg-bg ps-9 pe-3 py-2 text-sm focus:border-primary focus:outline-none transition-colors"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setScrollTop(0);
                    if (scrollContainerRef.current) scrollContainerRef.current.scrollTop = 0;
                  }}
                />
              </div>
              
              {locale !== 'ar' && (
                <div className="flex flex-wrap gap-1">
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat}
                      onClick={() => {
                        setCategory(cat);
                        setScrollTop(0);
                        if (scrollContainerRef.current) scrollContainerRef.current.scrollTop = 0;
                      }}
                      className={`px-2 py-1 text-[10px] font-bold uppercase rounded-md transition-colors ${
                        category === cat ? 'bg-primary text-primary-fg' : 'bg-bg text-text-muted hover:text-text'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Virtualized List */}
            <div 
              ref={scrollContainerRef}
              className="max-h-80 overflow-y-auto" 
              onScroll={handleScroll}
            >
              {filteredFonts.length > 0 ? (
                <div style={{ height: totalHeight, position: 'relative' }}>
                  <div style={{ transform: `translateY(${offsetY}px)`, position: 'absolute', top: 0, left: 0, right: 0 }}>
                    {visibleItems.map((font) => (
                      <button
                        key={font.family}
                        type="button"
                        style={{ height: ITEM_HEIGHT }}
                        onClick={() => {
                          onChange(font);
                          setIsOpen(false);
                        }}
                        className={`flex w-full items-center justify-between px-4 text-start text-sm hover:bg-primary/10 transition-colors ${
                          value.family === font.family ? 'bg-primary/10 text-primary font-bold' : 'text-text'
                        }`}
                      >
                        <span className="truncate">{font.family}</span>
                        <span className="text-[10px] uppercase text-text-muted shrink-0">{font.category}</span>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="px-4 py-12 text-center text-sm text-text-muted">
                  {t('picker.no_fonts')}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      
      {/* Live Preview String */}
      <div className="mt-1 rounded-md border border-border/50 bg-surface/50 p-3">
        <div style={{ fontFamily: `"${value.family}", sans-serif`, fontSize: '18px' }} className="truncate font-[var(--body-weight,400)]">
          {t('picker.preview_text', { family: value.family })}
        </div>
      </div>
    </div>
  );
}
