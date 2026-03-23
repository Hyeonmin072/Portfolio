import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ProjectCard from '../ProjectCard/ProjectCard';

function ProjectGrid({ projects = [] }) {
  const { t } = useTranslation();
  const [activeTag, setActiveTag] = useState(null);

  const allTags = [...new Set(projects.flatMap((p) => p.tags))].sort();
  const filtered = activeTag ? projects.filter((p) => p.tags.includes(activeTag)) : projects;

  return (
    <section id="projects" className="max-w-6xl mx-auto py-12 px-4 sm:px-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white/87 mb-6 pl-3 border-l-4 border-violet-500">
        {t('projects.title')}
      </h2>

      {/* 태그 필터 */}
      {allTags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-7">
          <button
            onClick={() => setActiveTag(null)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
              activeTag === null
                ? 'bg-violet-500 text-white'
                : 'border border-violet-500/40 text-gray-600 dark:text-white/67 hover:border-violet-500 hover:text-violet-500'
            }`}
          >
            {t('projects.allTags')}
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag === activeTag ? null : tag)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                activeTag === tag
                  ? 'bg-violet-500 text-white'
                  : 'border border-violet-500/40 text-gray-600 dark:text-white/67 hover:border-violet-500 hover:text-violet-500'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      )}

      {filtered.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-white/67 py-12">
          {t('projects.noProjects')}
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      )}
    </section>
  );
}

export default ProjectGrid;
