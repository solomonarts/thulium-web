import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface Project {
  id: string;
  title: string;
  description: string | null;
  url: string;
  preview_image_url: string | null;
  category: string;
  display_order: number;
  is_featured: boolean;
  created_at: string;
  updated_at: string;
}

export const useProjects = (category?: string) => {
  return useQuery({
    queryKey: ['projects', category],
    queryFn: async () => {
      let query = supabase
        .from('projects')
        .select('*')
        .order('display_order', { ascending: true });

      if (category && category !== 'all') {
        query = query.eq('category', category);
      }

      const { data, error } = await query;

      if (error) {
        throw error;
      }

      return data as Project[];
    },
  });
};

export const useCategories = () => {
  return useQuery({
    queryKey: ['project-categories'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('projects')
        .select('category')
        .order('category');

      if (error) {
        throw error;
      }

      const uniqueCategories = [...new Set(data.map((p) => p.category))];
      return uniqueCategories;
    },
  });
};
