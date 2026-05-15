import type { CssColorVar } from "@/types";
export type ColorMode = 'light' | 'dark';

export type ColorThemePreset = {
  id: string;
  name: string;
  mode: ColorMode;
  description: string;   // one short phrase e.g. "Clean SaaS neutrals"
  colors: Record<CssColorVar, string>;
  translations?: Record<string, {
    name: string;
    description: string;
  }>;
}

export const COLOR_THEME_PRESETS: ColorThemePreset[] = [
  {
    id: 'clean-slate-light',
    name: 'Clean Slate',
    mode: 'light',
    description: 'Pure white with classic blue',
    colors: {
      '--color-bg': '#ffffff',
      '--color-surface': '#f8f9fa',
      '--color-primary': '#2563eb',
      '--color-primary-fg': '#ffffff',
      '--color-text': '#111827',
      '--color-text-muted': '#6b7280',
      '--color-border': '#e5e7eb',
      '--color-secondary': '#3b82f6',
      '--color-secondary-fg': '#ffffff',
      '--color-tertiary': '#60a5fa',
      '--color-tertiary-fg': '#ffffff',
    },
    translations: {
      ar: {
        name: 'صفحة نظيفة',
        description: 'صفحة نظيفة',
      }
    }
  },
  {
    id: 'clean-slate-dark',
    name: 'Clean Slate',
    mode: 'dark',
    description: 'Deep blue with crisp white secondarys',
    colors: {
      '--color-bg': '#111827',
      '--color-surface': '#1f2937',
      '--color-primary': '#2563eb',
      '--color-primary-fg': '#ffffff',
      '--color-text': '#e5e7eb',
      '--color-text-muted': '#9ca3af',
      '--color-border': '#374151',
      '--color-secondary': '#3b82f6',
      '--color-secondary-fg': '#ffffff',
      '--color-tertiary': '#60a5fa',
      '--color-tertiary-fg': '#ffffff',
    },
    translations: {
      ar: {
        name: 'صفحة نظيفة',
        description: 'خلفية زرقاء داكنة مع لمسات بيضاء نقية',
      }
    }
  },
  {
    id: 'cyberpunk-neon',
    name: 'Cyberpunk Neon',
    mode: 'dark',
    description: 'High-contrast triadic neon vibe',
    colors: {
      '--color-bg': '#050505',
      '--color-surface': '#121212',
      '--color-primary': '#f472b6',
      '--color-primary-fg': '#050505',
      '--color-text': '#e0e0e0',
      '--color-text-muted': '#71717a',
      '--color-border': '#27272a',
      '--color-secondary': '#2dd4bf',
      '--color-secondary-fg': '#050505',
      '--color-tertiary': '#fbbf24',
      '--color-tertiary-fg': '#050505',
    },
    translations: {
      ar: {
        name: 'سايبربانك نيون',
        description: 'ألوان نيون متباينة بتناغم ثلاثي',
      }
    }
  },
  {
    id: 'warm-paper',
    name: 'Warm Paper',
    mode: 'light',
    description: 'Cream tones with terracotta',
    colors: {
      '--color-bg': '#faf7f2',
      '--color-surface': '#f5f0e8',
      '--color-primary': '#c2410c',
      '--color-primary-fg': '#faf7f2',
      '--color-text': '#292524',
      '--color-text-muted': '#78716c',
      '--color-border': '#e7e0d5',
      '--color-secondary': '#ea580c',
      '--color-secondary-fg': '#faf7f2',
      '--color-tertiary': '#fd9845',
      '--color-tertiary-fg': '#faf7f2',
    },
    translations: {
      ar: {
        name: 'ورق دافئ',
        description: 'لون أبيض مائل للصفرة مع لمسات برتقالية داكنة',
      }
    }
  },
  {
    id: 'midnight-purple',
    name: 'Midnight Purple',
    mode: 'dark',
    description: 'Deep space with electric violet',
    colors: {
      '--color-bg': '#0d0d14',
      '--color-surface': '#16161f',
      '--color-primary': '#7c3aed',
      '--color-primary-fg': '#ffffff',
      '--color-text': '#f0f0ff',
      '--color-text-muted': '#8888aa',
      '--color-border': '#2a2a3d',
      '--color-secondary': '#a78bfa',
      '--color-secondary-fg': '#0d0d14',
      '--color-tertiary': '#c084fc',
      '--color-tertiary-fg': '#ffffff',
    },
    translations: {
      ar: {
        name: 'منتصف الليل الأرجواني',
        description: 'فضاء عميق مع لمسات بنفسجية كهربائية',
      }
    }
  },
  {
    id: 'oceanic-peach',
    name: 'Oceanic Peach',
    mode: 'light',
    description: 'Cyan depths with soft coral',
    colors: {
      '--color-bg': '#f0f9ff',
      '--color-surface': '#e0f2fe',
      '--color-primary': '#0ea5e9',
      '--color-primary-fg': '#ffffff',
      '--color-text': '#0c4a6e',
      '--color-text-muted': '#64748b',
      '--color-border': '#bae6fd',
      '--color-secondary': '#fb7185',
      '--color-secondary-fg': '#ffffff',
      '--color-tertiary': '#2dd4bf',
      '--color-tertiary-fg': '#ffffff',
    },
    translations: {
      ar: {
        name: 'خوخ المحيط',
        description: 'أزرق محيطي مع لمسات مرجانية مكملة',
      }
    }
  },
  {
    id: 'obsidian-amber',
    name: 'Obsidian Amber',
    mode: 'dark',
    description: 'Carbon black with warm amber',
    colors: {
      '--color-bg': '#0f0e0b',
      '--color-surface': '#1a1914',
      '--color-primary': '#f59e0b',
      '--color-primary-fg': '#0f0e0b',
      '--color-text': '#faf7f0',
      '--color-text-muted': '#9b9282',
      '--color-border': '#2e2b22',
      '--color-secondary': '#fcd34d',
      '--color-secondary-fg': '#0f0e0b',
      '--color-tertiary': '#fbbf24',
      '--color-tertiary-fg': '#0f0e0b',
    },
    translations: {
      ar: {
        name: 'الفحم والكهرمان',
        description: 'أسود فاحم مع لمسات برتقالية دافئة',
      }
    }
  },
  {
    id: 'citrus-burst',
    name: 'Citrus Burst',
    mode: 'light',
    description: 'Fresh orange, purple and green',
    colors: {
      '--color-bg': '#fffaf0',
      '--color-surface': '#fff3e0',
      '--color-primary': '#f97316',
      '--color-primary-fg': '#ffffff',
      '--color-text': '#431407',
      '--color-text-muted': '#9a3412',
      '--color-border': '#fed7aa',
      '--color-secondary': '#a855f7',
      '--color-secondary-fg': '#ffffff',
      '--color-tertiary': '#22c55e',
      '--color-tertiary-fg': '#ffffff',
    },
    translations: {
      ar: {
        name: 'انفجار الحمضيات',
        description: 'برتقالي طازج مع تناغم ثلاثي',
      }
    }
  },
  {
    id: 'deep-ocean',
    name: 'Deep Ocean',
    mode: 'dark',
    description: 'Navy depths with cyan highlights',
    colors: {
      '--color-bg': '#040d1a',
      '--color-surface': '#071628',
      '--color-primary': '#06b6d4',
      '--color-primary-fg': '#040d1a',
      '--color-text': '#e0f4ff',
      '--color-text-muted': '#4d7a99',
      '--color-border': '#0d2640',
      '--color-secondary': '#67e8f9',
      '--color-secondary-fg': '#040d1a',
      '--color-tertiary': '#38bdf8',
      '--color-tertiary-fg': '#040d1a',
    },
    translations: {
      ar: {
        name: 'المحيط العميق',
        description: 'أزرق داكن مع لمسات زرقاء سماوية',
      }
    }
  },
  {
    id: 'royal-velvet',
    name: 'Royal Velvet',
    mode: 'light',
    description: 'Elegant purple with gold accents',
    colors: {
      '--color-bg': '#f5f3ff',
      '--color-surface': '#ede9fe',
      '--color-primary': '#7c3aed',
      '--color-primary-fg': '#ffffff',
      '--color-text': '#2e1065',
      '--color-text-muted': '#6d28d9',
      '--color-border': '#ddd6fe',
      '--color-secondary': '#eab308',
      '--color-secondary-fg': '#422006',
      '--color-tertiary': '#10b981',
      '--color-tertiary-fg': '#ffffff',
    },
    translations: {
      ar: {
        name: 'المخمل الملكي',
        description: 'أرجواني أنيق مع لمسات ذهبية ثلاثية',
      }
    }
  },
  {
    id: 'charcoal-rose',
    name: 'Charcoal Rose',
    mode: 'dark',
    description: 'Muted charcoal with dusty rose',
    colors: {
      '--color-bg': '#121212',
      '--color-surface': '#1e1e1e',
      '--color-primary': '#e879a0',
      '--color-primary-fg': '#121212',
      '--color-text': '#f5f5f5',
      '--color-text-muted': '#888888',
      '--color-border': '#2e2e2e',
      '--color-secondary': '#fda4af',
      '--color-secondary-fg': '#121212',
      '--color-tertiary': '#f472b6',
      '--color-tertiary-fg': '#121212',
    },
    translations: {
      ar: {
        name: 'الفحم والورد',
        description: 'رمادي داكن مع لمسات وردية دافئة',
      }
    }
  },
  {
    id: 'spring-blossom',
    name: 'Spring Blossom',
    mode: 'light',
    description: 'Fresh green with vibrant pink',
    colors: {
      '--color-bg': '#f0fdf4',
      '--color-surface': '#dcfce7',
      '--color-primary': '#16a34a',
      '--color-primary-fg': '#ffffff',
      '--color-text': '#052e16',
      '--color-text-muted': '#15803d',
      '--color-border': '#bbf7d0',
      '--color-secondary': '#db2777',
      '--color-secondary-fg': '#ffffff',
      '--color-tertiary': '#2563eb',
      '--color-tertiary-fg': '#ffffff',
    },
    translations: {
      ar: {
        name: 'زهرة الربيع',
        description: 'أخضر طازج مع لمسات وردية مكملة',
      }
    }
  },
  {
    id: 'forest-terminal',
    name: 'Forest Terminal',
    mode: 'dark',
    description: 'Dark green terminal aesthetic',
    colors: {
      '--color-bg': '#0a0f0a',
      '--color-surface': '#111911',
      '--color-primary': '#22c55e',
      '--color-primary-fg': '#0a0f0a',
      '--color-text': '#d4f5d4',
      '--color-text-muted': '#4d7a4d',
      '--color-border': '#1a2e1a',
      '--color-secondary': '#86efac',
      '--color-secondary-fg': '#0a0f0a',
      '--color-tertiary': '#4ade80',
      '--color-tertiary-fg': '#0a0f0a',
    },
    translations: {
      ar: {
        name: 'الغابة الطرفية',
        description: 'لون أخضر داكن يعطي إحساسًا بالخلفيات الطرفية',
      }
    }
  },
  {
    id: 'golden-hour',
    name: 'Golden Hour',
    mode: 'light',
    description: 'Warm gold with royal blue',
    colors: {
      '--color-bg': '#fffbeb',
      '--color-surface': '#fef3c7',
      '--color-primary': '#eab308',
      '--color-primary-fg': '#422006',
      '--color-text': '#451a03',
      '--color-text-muted': '#92400e',
      '--color-border': '#fde68a',
      '--color-secondary': '#2563eb',
      '--color-secondary-fg': '#ffffff',
      '--color-tertiary': '#dc2626',
      '--color-tertiary-fg': '#ffffff',
    },
    translations: {
      ar: {
        name: 'الساعة الذهبية',
        description: 'ذهب دافئ مع أزرق ملكي ثلاثي',
      }
    }
  },
  {
    id: 'volcanic-ash',
    name: 'Volcanic Ash',
    mode: 'dark',
    description: 'Deep red with complementary emerald',
    colors: {
      '--color-bg': '#110c0c',
      '--color-surface': '#1c1414',
      '--color-primary': '#ef4444',
      '--color-primary-fg': '#ffffff',
      '--color-text': '#fce8e8',
      '--color-text-muted': '#a8a2a2',
      '--color-border': '#3d2b2b',
      '--color-secondary': '#10b981',
      '--color-secondary-fg': '#ffffff',
      '--color-tertiary': '#f59e0b',
      '--color-tertiary-fg': '#110c0c',
    },
    translations: {
      ar: {
        name: 'الرماد البركاني',
        description: 'أحمر داكن مع لون أخضر زمردي مكمل',
      }
    }
  },
  {
    id: 'lavender-mist',
    name: 'Lavender Mist',
    mode: 'light',
    description: 'Soft purple tones, airy UI feel',
    colors: {
      '--color-bg': '#faf5ff',
      '--color-surface': '#f3e8ff',
      '--color-primary': '#7c3aed',
      '--color-primary-fg': '#ffffff',
      '--color-text': '#1e1033',
      '--color-text-muted': '#7c6fa0',
      '--color-border': '#e9d5ff',
      '--color-secondary': '#a78bfa',
      '--color-secondary-fg': '#ffffff',
      '--color-tertiary': '#c084fc',
      '--color-tertiary-fg': '#ffffff',
    },
    translations: {
      ar: {
        name: 'ضباب الخزامى',
        description: 'لون أرجواني فاتح مع لمسات أرجوانية داكنة',
      }
    }
  },
  {
    id: 'midnight-jungle',
    name: 'Midnight Jungle',
    mode: 'dark',
    description: 'Lush green with purple accents',
    colors: {
      '--color-bg': '#050a05',
      '--color-surface': '#0e1a0e',
      '--color-primary': '#22c55e',
      '--color-primary-fg': '#050a05',
      '--color-text': '#e6f4e6',
      '--color-text-muted': '#6b8a6b',
      '--color-border': '#1a2e1a',
      '--color-secondary': '#a855f7',
      '--color-secondary-fg': '#ffffff',
      '--color-tertiary': '#f97316',
      '--color-tertiary-fg': '#ffffff',
    },
    translations: {
      ar: {
        name: 'غابة منتصف الليل',
        description: 'أخضر غني مع لمسات أرجوانية ثلاثية',
      }
    }
  },
  {
    id: 'nordic-fog',
    name: 'Nordic Fog',
    mode: 'light',
    description: 'Muted greens and stone grays',
    colors: {
      '--color-bg': '#f4f4f0',
      '--color-surface': '#eaeae4',
      '--color-primary': '#4a7c59',
      '--color-primary-fg': '#f4f4f0',
      '--color-text': '#1c1c18',
      '--color-text-muted': '#6b6b5f',
      '--color-border': '#d4d4c8',
      '--color-secondary': '#6aa87a',
      '--color-secondary-fg': '#f4f4f0',
      '--color-tertiary': '#8fcc9d',
      '--color-tertiary-fg': '#f4f4f0',
    },
    translations: {
      ar: {
        name: 'ضباب نوردي',
        description: 'ألوان خضراء ناعمة مع لمسات رمادية حجرية',
      }
    }
  },
  {
    id: 'electric-indigo',
    name: 'Electric Indigo',
    mode: 'dark',
    description: 'Indigo primary with yellow secondary',
    colors: {
      '--color-bg': '#0a0a0f',
      '--color-surface': '#15151f',
      '--color-primary': '#6366f1',
      '--color-primary-fg': '#ffffff',
      '--color-text': '#eef2ff',
      '--color-text-muted': '#94a3b8',
      '--color-border': '#2d3748',
      '--color-secondary': '#facc15',
      '--color-secondary-fg': '#0a0a0f',
      '--color-tertiary': '#ec4899',
      '--color-tertiary-fg': '#ffffff',
    },
    translations: {
      ar: {
        name: 'إنديغو كهربائي',
        description: 'نيلي أساسي مع أصفر مكمل',
      }
    }
  },
  {
    id: 'solar-sand',
    name: 'Solar Sand',
    mode: 'light',
    description: 'Bright sand with indigo secondarys',
    colors: {
      '--color-bg': '#fffbeb',
      '--color-surface': '#fef3c7',
      '--color-primary': '#4f46e5',
      '--color-primary-fg': '#ffffff',
      '--color-text': '#1c1917',
      '--color-text-muted': '#78716c',
      '--color-border': '#fde68a',
      '--color-secondary': '#6366f1',
      '--color-secondary-fg': '#ffffff',
      '--color-tertiary': '#818cf8',
      '--color-tertiary-fg': '#ffffff',
    },
    translations: {
      ar: {
        name: 'رمال مشمشة',
        description: 'ألوان زاهية مع لمسات زرقاء داكنة',
      }
    }
  }
];
