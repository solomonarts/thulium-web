import { motion } from 'framer-motion';
import { ExternalLink, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import type { Project } from '@/hooks/useProjects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const handleClick = () => {
    window.open(project.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.03, y: -5 }}
      className="cursor-pointer"
      onClick={handleClick}
    >
      <Card className="h-full border-2 hover:border-primary hover:shadow-glow transition-smooth overflow-hidden group">
        <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
          {project.preview_image_url ? (
            <img
              src={project.preview_image_url}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <Globe className="w-12 h-12 sm:w-16 sm:h-16 text-primary/50" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
            <div className="flex items-center gap-2 text-primary font-medium">
              <span className="text-sm sm:text-base">View Project</span>
              <ExternalLink className="w-4 h-4" />
            </div>
          </div>
        </div>
        <CardContent className="p-4 sm:p-6">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-base sm:text-lg md:text-xl font-bold line-clamp-1">
              {project.title}
            </h3>
            <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary capitalize whitespace-nowrap">
              {project.category}
            </span>
          </div>
          {project.description && (
            <p className="text-sm text-muted-foreground line-clamp-2">
              {project.description}
            </p>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
