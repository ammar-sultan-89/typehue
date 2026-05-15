import type { FontPair } from "../types";
import { findFont } from "./fonts";

export type FontPairPreset = FontPair & {
  id: string;
  name: string;       // e.g. "Editorial Authority"
  mood: string[];     // e.g. ["professional", "trustworthy"]
  locales: ('en' | 'ar')[]   // which locales this pair is appropriate for
}

export const FONT_PAIR_PRESETS: FontPairPreset[] = [
  { 
    id: 'editorial-authority',
    name: 'Editorial Authority',
    mood: ["editorial", "premium", "trustworthy"],
    locales: ['en'],
    display: findFont('Playfair Display'), 
    body: findFont('Inter') 
  },
  { 
    id: 'tech-clarity',
    name: 'Tech Clarity',
    mood: ["tech", "modern", "clean"],
    locales: ['en'],
    display: findFont('Space Grotesk'), 
    body: findFont('DM Sans') 
  },
  {
    id:'warm-humanist',
    name:'Warm Humanist',
    mood:["warm","humanist","friendly"],
    locales:['en'],
    display: findFont('Fraunces'), 
    body: findFont('Nunito') 
  },
  {
    id:'sharp-minimal',
    name:'Sharp Minimal',
    mood:["minimal", "bold", "startup"],
    locales:['en'],
    display: findFont('Syne'), 
    body: findFont('Manrope') 
  },
  {
    id:'classic-editorial',
    name:'Classic Editorial',
    mood:["classic", "readable", "editorial"],
    locales:['en'],
    display: findFont('Merriweather'), 
    body: findFont('Source Sans 3') 
  },
  {
    id:'geometric-modern',
    name:'Geometric Modern',
    mood:["modern", "geometric", "saas"],
    locales:['en'],
    display: findFont('Outfit'), 
    body: findFont('Plus Jakarta Sans') 
  },
  {
    id:'expressive-branding',
    name:'Expressive Branding',
    mood:["expressive", "bold", "creative"],
    locales:['en'],
    display: findFont('Bricolage Grotesque'), 
    body: findFont('Inter') 
  },
  {
    id:'elegant-contrast',
    name:'Elegant Contrast',
    mood:["elegant", "luxury", "contrast"],
    locales:['en'],
    display: findFont('Cormorant Garamond'), 
    body: findFont('Jost') 
  },
  {
    id:'brutalist-clean',
    name:'Brutalist Clean',
    mood:["bold", "impact", "brutalist"],
    locales:['en'],
    display: findFont('Bebas Neue'), 
    body: findFont('Barlow') 
  },
  {
    id:'soft-product',
    name:'Soft Product',
    mood:["soft", "product", "accessible"],
    locales:['en'],
    display: findFont('Nunito'), 
    body: findFont('Lato') 
  },
  {
    id:'editorial-ar',
    name:'تحرير',
    mood:["editorial", "formal", "readable"],
    locales:['ar'],
    display: findFont('Noto Naskh Arabic'), 
    body: findFont('Cairo') 
  },
  {
    id:'modern-clean-ar',
    name:'حديث ونظيف',
    mood:["modern", "clean", "ui"],
    locales:['ar'],
    display: findFont('Tajawal'), 
    body: findFont('Almarai') 
  },
  {
    id:'expressive-ar',
    name:'معبّر',
    mood:["expressive", "brand", "bold"],
    locales:['ar'],
    display: findFont('Reem Kufi'), 
    body: findFont('IBM Plex Sans Arabic') 
  },
  {
    id:'warm-ar',
    name:'دافئ',
    mood:["warm", "approachable", "content"],
    locales:['ar'],
    display: findFont('Amiri'), 
    body: findFont('Mada') 
  },
  {
    id:'minimal-ar',
    name:'بسيط',
    mood:["minimal", "sans", "modern"],
    locales:['ar'],
    display: findFont('Cairo'), 
    body: findFont('Tajawal') 
  },
  {
    id:'publishing-ar',
    name:'نشر',
    mood:["publishing", "trust", "elegant"],
    locales:['ar'],
    display: findFont('Lemonada'), 
    body: findFont('Noto Sans Arabic') 
  },
  {
    id:'tech-ar',
    name:'تقني',
    mood:["tech", "startup", "clean"],
    locales:['ar'],
    display: findFont('IBM Plex Sans Arabic'), 
    body: findFont('Almarai') 
  },
  {
    id:'contrast-ar',
    name:'تباين',
    mood:["contrast", "decorative", "editorial"],
    locales:['ar'],
    display: findFont('Mirza'), 
    body: findFont('Cairo') 
  },
  {
    id:'bold-brand-ar',
    name:'علامة تجارية',
    mood:["bold", "brand", "energetic"],
    locales:['ar'],
    display: findFont('Reem Kufi Fun'), 
    body: findFont('Mada') 
  },
  {
    id:'classic-ar',
    name:'كلاسيك',
    mood:["classic", "traditional", "heritage"],
    locales:['ar'],
    display: findFont('Scheherazade New'), 
    body: findFont('Noto Kufi Arabic') 
  } 
];
