import React, { useState, useEffect, useRef } from 'react';
import { X, Edit2, Wand2 } from 'lucide-react';
import { useTranslation } from '@/i18n';
import type { CssColorVar } from '@/types';

interface ColorPickerProps {
  label: string;
  variable: CssColorVar;
  value: string;
  isDerived?: boolean;
  onPromote?: (variable: CssColorVar) => void;
  showAutoButton?: boolean;
  onAutoClick?: () => void;
  onChange: (variable: CssColorVar, value: string) => void;
  onClear: (variable: CssColorVar) => void;
}

export function ColorPicker({ 
  label, variable, value, isDerived, onPromote, 
  showAutoButton, onAutoClick, 
  onChange, onClear 
}: ColorPickerProps) {
  const { t } = useTranslation();
  const [internalValue, setInternalValue] = useState(value);
  // const debounceTimer = useRef<NodeJS.Timeout | null>(null);
  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);


  useEffect(() => {
    // Only update internal value from props if we are not currently debouncing
    // or if the value is significantly different (e.g. from a preset or undo)
    if (!debounceTimer.current || value !== internalValue) {
      setInternalValue(value);
    }
  }, [value]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
    };
  }, []);

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const newVal = e.target.value;
    setInternalValue(newVal);
    
    if (/^#[0-9A-F]{6}$/i.test(newVal) || /^#[0-9A-F]{3}$/i.test(newVal)) {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
      debounceTimer.current = setTimeout(() => {
        onChange(variable, newVal);
        debounceTimer.current = null;
      }, 50);
    }
  };

  const handleColorChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const newVal = e.target.value;
    setInternalValue(newVal);

    if (isDerived && onPromote) {
      onPromote(variable);
    }
    
    if (debounceTimer.current) clearTimeout(debounceTimer.current);
    debounceTimer.current = setTimeout(() => {
      onChange(variable, newVal);
      debounceTimer.current = null;
    }, 50);
  };

  const isEmpty = !value || value === '';

  return (
    <div className={`flex items-center justify-between gap-4 group ${isDerived ? 'opacity-80 hover:opacity-100 transition-opacity' : ''}`}>
      <div className="flex flex-col items-start">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-text">{label}</span>
          {isDerived && (
            <span className="px-1.5 py-0.5 rounded-sm bg-primary/10 text-primary text-[8px] font-bold uppercase tracking-wider" title={t('panel.auto_derived', 'Auto Derived')} ><Wand2 className="h-3 w-3" /></span>
          )}
        </div>
        <span dir='ltr' className={`text-[10px] font-mono h-3 ${isEmpty || isDerived ? 'text-text-muted/60' : 'text-text-muted'}`}>
          {isEmpty ? 'auto' : value.toUpperCase()}
        </span>
      </div>
      
      <div className="flex items-center gap-2">
        {showAutoButton && (
          <button
            onClick={onAutoClick}
            className="flex items-center gap-1 px-2 py-1 bg-surface hover:bg-border border border-border rounded text-[10px] font-bold text-text-muted hover:text-text transition-colors"
            title={t('panel.auto_derive_color', 'Auto Derive Color')}
          >
            <Wand2 className="h-3 w-3" />
          </button>
        )}
        <div className="relative flex items-center group/input"
            dir="ltr"
        >
          <input
            type="text"
            value={internalValue}
            readOnly={isDerived}
            onClick={() => {
              if (isDerived && onPromote) onPromote(variable);
            }}
            onChange={isDerived ? undefined : handleInputChange}
            placeholder="auto"
            className={`w-24 rounded border ${isDerived ? 'border-transparent bg-transparent ps-0 focus:border-border cursor-pointer' : 'border-border bg-bg ps-2'} py-1 pe-7 text-xs font-mono focus:border-primary focus:outline-none transition-all ${isEmpty ? 'placeholder:text-text-muted/40' : ''}`}
          />
          {!isEmpty && !isDerived && (
            <button
              onClick={() => onClear(variable)}
              className="absolute inset-e-1.5 opacity-0 group-hover/input:opacity-100 p-1 text-text-muted hover:text-danger transition-all rounded-md hover:bg-surface"
              title={t('panel.clear_field', 'Clear field')}
            >
              <X className="h-3 w-3" />
            </button>
          )}
          {isDerived && onPromote && (
            <button
              onClick={() => onPromote(variable)}
              className="absolute inset-e-1.5 opacity-0 group-hover/input:opacity-100 p-1 text-text-muted hover:text-primary transition-all rounded-md hover:bg-surface"
              title={t('panel.edit_manual', 'Edit manual value')}
            >
              <Edit2 className="h-3 w-3" />
            </button>
          )}
        </div>
        <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-lg border border-border">
          {isEmpty && (
            <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-px bg-text-muted/30 rotate-45"></div>
            </div>
          )}
          {isDerived && (
            <div className="absolute inset-0 z-10 pointer-events-none bg-bg/20"></div>
          )}
          <input
            type="color"
            dir="ltr"
            value={internalValue || '#000000'}
            onChange={handleColorChange}
            className="absolute -inset-2 h-12 w-12 cursor-pointer border-none bg-transparent"
          />
        </div>
      </div>
    </div>
  );
}
