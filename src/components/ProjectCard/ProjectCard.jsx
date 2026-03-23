import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Github, Code, ExternalLink, Users, User, Calendar } from 'lucide-react';

export const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

function ProjectCard({ title, titleKey, description, descriptionKey, tags = [], demoUrl, codeUrl, backendUrl, thumbnail, isTeam, role, roleKey, period }) {
  const { t } = useTranslation();
  const displayTitle = titleKey ? t(titleKey, title) : title;
  const displayDescription = descriptionKey ? t(descriptionKey, description) : description;
  const displayRole = roleKey ? t(roleKey, role) : role;

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="group glass rounded-2xl overflow-hidden flex flex-col relative cursor-default"
      style={{ transition: 'border-color 0.3s, box-shadow 0.3s' }}
    >
      {/* 호버 시 상단 그래디언트 라인 */}
      <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {thumbnail && (
        <div className="w-full aspect-video overflow-hidden bg-space-700">
          <img src={thumbnail} alt={title} loading="lazy" className="w-full h-full object-cover" />
        </div>
      )}

      <div className="p-6 flex-1">
        {/* 배지 행: 팀/개인 + 기간 */}
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          {isTeam ? (
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-violet-100 dark:bg-violet-500/15 text-violet-600 dark:text-violet-300 border border-violet-200 dark:border-violet-500/25">
              <Users size={10} />
              {t('projects.teamProject')}
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/25">
              <User size={10} />
              {t('projects.personalProject')}
            </span>
          )}
          {period && (
            <span className="inline-flex items-center gap-1 text-[11px] text-slate-400 dark:text-slate-500">
              <Calendar size={10} />
              {period}
            </span>
          )}
        </div>

        <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
          {displayTitle}
        </h3>

        {displayRole && (
          <p className="text-xs text-indigo-500 dark:text-indigo-400 font-medium mb-2">
            {t('projects.role')}: {displayRole}
          </p>
        )}

        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-5">
          {displayDescription}
        </p>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-500/20 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {(demoUrl || codeUrl || backendUrl) && (
        <div className="px-6 pb-6 pt-4 border-t border-slate-100 dark:border-white/5 flex flex-wrap gap-2">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[90px] inline-flex items-center justify-center gap-1.5 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-400 hover:to-violet-400 text-white transition-all"
            >
              <ExternalLink size={13} />
              {t('projects.viewDemo')}
            </a>
          )}
          {codeUrl && (
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[90px] inline-flex items-center justify-center gap-1.5 py-2 text-sm font-medium rounded-lg border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-all"
            >
              <Github size={13} />
              {backendUrl ? t('projects.viewCode') : 'GitHub'}
            </a>
          )}
          {backendUrl && (
            <a
              href={backendUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[90px] inline-flex items-center justify-center gap-1.5 py-2 text-sm font-medium rounded-lg border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-all"
            >
              <Code size={13} />
              {t('projects.viewBackend')}
            </a>
          )}
        </div>
      )}
    </motion.article>
  );
}

export default ProjectCard;
