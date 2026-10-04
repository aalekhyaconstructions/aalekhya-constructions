export type CMSProject = {
  slug: string;
  title: string;
  projectType: string;
  location: string;
  state: string;
  budget: string;
  status: string;
  featured: boolean;
  completionYear: string;
  coverImage: string;
  galleryImages: string[];
  keyFeatures: string[];
  shortDescription: string;
  description: string;
};

export const PROJECT_FILTERS = ['All', 'Residential', 'Commercial', 'Landscaping', 'Resorts', 'Parks'] as const;
export type ProjectFilter = (typeof PROJECT_FILTERS)[number];
