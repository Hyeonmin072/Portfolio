import { useTranslation } from 'react-i18next';
import './ProjectCard.css';

/**
 * ProjectCard
 *
 * Props:
 *   title       {string}   - Project name
 *   description {string}   - Short description
 *   tags        {string[]} - Technology tags
 *   demoUrl     {string}   - Live demo URL (optional)
 *   codeUrl     {string}   - Source code URL (optional)
 *   thumbnail   {string}   - Thumbnail image URL (optional)
 */
function ProjectCard({ title, description, tags = [], demoUrl, codeUrl, thumbnail }) {
  const { t } = useTranslation();

  return (
    <article className="project-card">
      {thumbnail && (
        <div className="project-card__thumbnail">
          <img src={thumbnail} alt={title} loading="lazy" />
        </div>
      )}

      <div className="project-card__body">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__description">{description}</p>

        {tags.length > 0 && (
          <ul className="project-card__tags" aria-label={t('projects.tags')}>
            {tags.map((tag) => (
              <li key={tag} className="project-card__tag">{tag}</li>
            ))}
          </ul>
        )}
      </div>

      <div className="project-card__footer">
        {demoUrl && (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__btn project-card__btn--primary"
          >
            {t('projects.viewDemo')}
          </a>
        )}
        {codeUrl && (
          <a
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__btn project-card__btn--secondary"
          >
            {t('projects.viewCode')}
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
