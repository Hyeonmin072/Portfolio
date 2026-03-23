import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import ProjectCard, { cardVariants } from '../ProjectCard/ProjectCard';

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

function SectionHeading({ number, children }) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-4 mb-3">
        <div className="h-px flex-1 bg-gradient-to-r from-indigo-500/40 to-transparent" />
        <span className="text-xs font-semibold text-indigo-500 dark:text-indigo-400 uppercase tracking-[0.2em]">
          {number}
        </span>
        <div className="h-px w-8 bg-indigo-500/40" />
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">{children}</h2>
    </div>
  );
}

function ProjectGrid({ projects = [] }) {
  const { t } = useTranslation();
  const [activeTag, setActiveTag] = useState(null);

  const allTags = [...new Set(projects.flatMap((p) => p.tags))].sort();
  const filtered = activeTag ? projects.filter((p) => p.tags.includes(activeTag)) : projects;

  return (
    <section id="projects" className="max-w-6xl mx-auto py-24 px-4 sm:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={sectionVariants}
      >
        <SectionHeading number="01. Projects">{t('projects.title')}</SectionHeading>

        {/* 태그 필터 */}
        {allTags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setActiveTag(null)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                activeTag === null
                  ? 'bg-indigo-500 text-white shadow-md shadow-indigo-500/25'
                  : 'border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300'
              }`}
            >
              {t('projects.allTags')}
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag === activeTag ? null : tag)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  activeTag === tag
                    ? 'bg-indigo-500 text-white shadow-md shadow-indigo-500/25'
                    : 'border border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        )}

        {filtered.length === 0 ? (
          <p className="text-center text-slate-400 dark:text-slate-500 py-16">
            {t('projects.noProjects')}
          </p>
        ) : (
          <motion.div
            variants={gridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}

export default ProjectGrid;
