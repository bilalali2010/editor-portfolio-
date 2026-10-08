export type ProjectCategory =
  | 'ALL'
  | 'REELS'
  | 'SHORT-FORM'
  | 'SOCIAL MEDIA'
  | 'CINEMATIC'
  | 'BRAND CONTENT'
  | 'PROMOTIONAL';

export type AspectRatio = '9:16' | '16:9' | '1:1';

export interface PortfolioProject {
  id: string;
  projectNumber: string; // e.g. "01", "02", "03"
  title: string;
  category: ProjectCategory;
  projectType: string; // e.g. "Personal Edit", "Spec Project", "Concept Project"
  description: string;
  duration: string;
  aspectRatio: AspectRatio;
  /** MP4/H.264 source (universal fallback) */
  videoUrl: string;
  /** Optional smaller VP9 WebM source, tried first by supporting browsers */
  videoWebmUrl?: string;
  posterUrl?: string;
  featured?: boolean;
  tools: string[];
  techniques: string[];
  tags: string[];
  metricsOrHighlight?: string;
  quote?: string;
}

export interface SpecialtyService {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tools: string[];
  deliverables: string[];
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  details: string[];
}

export interface TimelineTrack {
  id: string;
  name: string;
  type: 'video' | 'audio' | 'effect';
  color: string;
  clips: {
    id: string;
    name: string;
    start: number; // percentage
    duration: number; // percentage
    cuts?: number[];
  }[];
}

export type CursorMode = 'default' | 'watch' | 'view' | 'drag' | 'open' | 'play';
