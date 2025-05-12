export interface ProjectType {
  id: number;
  title: string;
  category: 'Feature Film' | 'Short Film' | 'Commercial' | 'Documentary' | 'Music Video' | 'Science Fiction Film';
  description: string;
  image: string;
  year: number;
  director: string;
  cinematographer: string;
  producer: string;
  cast: string[];
  awards?: string[];
  moreImages?: string[];
}