import { useTranslation } from 'react-i18next';

function ProjectCard({ title, description, tags = [], demoUrl, codeUrl, backendUrl, thumbnail }) {
  const { t } = useTranslation();

  return (
    <article className="bg-white dark:bg-navy-900 border border-violet-500/20 rounded-xl overflow-hidden flex flex-col transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-violet-500/20">
      {thumbnail && (
        <div className="w-full aspect-video overflow-hidden bg-navy-700">
          <img src={thumbnail} alt={title} loading="lazy" className="w-full h-full object-cover" />
        </div>
      )}

      <div className="p-5 flex-1">
        <h3 className="text-base font-semibold text-violet-500 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-white/67 leading-relaxed mb-4">{description}</p>

        {tags.length > 0 && (
          <ul className="flex flex-wrap gap-1.5 list-none m-0 p-0" aria-label={t('projects.tags')}>
            {tags.map((tag) => (
              <li
                key={tag}
                className="bg-violet-500/10 text-violet-500 border border-violet-500/30 rounded px-2 py-0.5 text-xs font-medium"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>

      {(demoUrl || codeUrl || backendUrl) && (
        <div className="px-5 pb-5 pt-3 flex gap-3 border-t border-violet-500/20 flex-wrap">
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[80px] text-center py-2 px-4 rounded-md text-sm font-medium bg-violet-500 hover:bg-violet-600 text-white transition-colors"
            >
              {t('projects.viewDemo')}
            </a>
          )}
          {codeUrl && (
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[80px] text-center py-2 px-4 rounded-md text-sm font-medium border border-violet-500 text-violet-500 hover:bg-violet-500/10 transition-colors"
            >
              {backendUrl ? t('projects.viewCode') : 'GitHub'}
            </a>
          )}
          {backendUrl && (
            <a
              href={backendUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[80px] text-center py-2 px-4 rounded-md text-sm font-medium border border-violet-500/60 text-violet-500/80 hover:bg-violet-500/10 transition-colors"
            >
              {t('projects.viewBackend')}
            </a>
          )}
        </div>
      )}
    </article>
  );
}

export default ProjectCard;
