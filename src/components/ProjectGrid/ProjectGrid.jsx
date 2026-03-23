import { useTranslation } from 'react-i18next';
import ProjectCard from '../ProjectCard/ProjectCard';
import './ProjectGrid.css';

/**
 * ProjectGrid
 *
 * Props:
 *   projects {Array} - Array of project objects to display.
 *                      Each object may contain: id, title, description,
 *                      tags, demoUrl, codeUrl, thumbnail.
 */
function ProjectGrid({ projects = [] }) {
  const { t } = useTranslation();

  return (
    <section id="projects" className="project-grid-section">
      <h2 className="project-grid__heading">{t('projects.title')}</h2>

      {projects.length === 0 ? (
        <p className="project-grid__empty">{t('projects.noProjects')}</p>
      ) : (
        <div className="project-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      )}
    </section>
  );
}

export default ProjectGrid;
