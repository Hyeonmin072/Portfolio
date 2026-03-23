import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  const [activeTab, setActiveTab] = useState('team');

  const teamProjects = projects.filter((p) => p.isTeam);
  const personalProjects = projects.filter((p) => !p.isTeam);
  const filtered = activeTab === 'team' ? teamProjects : personalProjects;

  const tabs = [
    { key: 'team', label: t('projects.teamProject'), count: teamProjects.length },
    { key: 'personal', label: t('projects.personalProject'), count: personalProjects.length },
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto py-24 px-4 sm:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={sectionVariants}
      >
        <SectionHeading number="01. Projects">{t('projects.title')}</SectionHeading>

        {/* 탭 */}
        <div className="flex gap-1 p-1 mb-10 rounded-xl bg-slate-100 dark:bg-white/5 w-fit border border-slate-200 dark:border-white/10">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`relative px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeTab === tab.key
                  ? 'bg-white dark:bg-indigo-500/90 text-indigo-600 dark:text-white shadow-sm'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
              }`}
            >
              {tab.label}
              <span
                className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${
                  activeTab === tab.key
                    ? 'bg-indigo-100 dark:bg-white/20 text-indigo-600 dark:text-white'
                    : 'bg-slate-200 dark:bg-white/10 text-slate-500 dark:text-slate-400'
                }`}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={gridVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 8, transition: { duration: 0.15 } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

export default ProjectGrid;
