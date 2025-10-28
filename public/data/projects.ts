
// data/projects.ts
// This file defines the canonical Project type structure for the entire application.
// Data should be fetched via API routes, not from static arrays.

export interface Project {
  id: string;
  title: string;
  developer: string;
  location?: string;
  price?: string;
  image?: string;
  images?: string[];
  gallery?: string[];
  link?: string;
  description?: string;
  tags?: string[];
  type?: string;
  status?: string;
  rooms?: string[] | string;
  slug?: string;
  coords?: [number, number];
  features?: string[];
  map_url?: string;
  contact_info?: {
    phone?: string;
    email?: string;
    whatsapp?: string;
  };
  completionDate?: string;
}

/**
 * @deprecated The static PROJECTS array is deprecated. Components should fetch data from the API.
 */
export const PROJECTS: Project[] = [];
