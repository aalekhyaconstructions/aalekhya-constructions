import { getAllProjects } from '@/lib/projects';
import ProjectsGallery from '@/components/ProjectsGallery';

export const metadata = {
  title: 'Our Projects',
  description: 'Explore our delivered and ongoing construction projects across residential, commercial, landscaping, resort and park categories.',
};

export default function ProjectsPage() {
  const projects = getAllProjects();
  return <ProjectsGallery projects={projects} />;
}
