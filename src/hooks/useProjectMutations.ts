import { useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface ProjectInput {
  title: string;
  description?: string | null;
  url: string;
  preview_image_url?: string | null;
  category: string;
  display_order?: number;
  is_featured?: boolean;
}

export const useCreateProject = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (project: ProjectInput) => {
      const { data, error } = await supabase
        .from('projects')
        .insert(project)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      queryClient.invalidateQueries({ queryKey: ['project-categories'] });
      toast({ title: 'Project created successfully' });
    },
    onError: (error: Error) => {
      toast({ title: 'Error creating project', description: error.message, variant: 'destructive' });
    },
  });
};

export const useUpdateProject = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async ({ id, ...updates }: ProjectInput & { id: string }) => {
      const { data, error } = await supabase
        .from('projects')
        .update(updates)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      queryClient.invalidateQueries({ queryKey: ['project-categories'] });
      toast({ title: 'Project updated successfully' });
    },
    onError: (error: Error) => {
      toast({ title: 'Error updating project', description: error.message, variant: 'destructive' });
    },
  });
};

export const useDeleteProject = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['projects'] });
      queryClient.invalidateQueries({ queryKey: ['project-categories'] });
      toast({ title: 'Project deleted successfully' });
    },
    onError: (error: Error) => {
      toast({ title: 'Error deleting project', description: error.message, variant: 'destructive' });
    },
  });
};
