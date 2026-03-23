import { useTranslation } from 'react-i18next';
import { PROFILE } from '../../data/profile';

function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="max-w-6xl mx-auto py-12 px-4 sm:px-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white/87 mb-7 pl-3 border-l-4 border-violet-500">
        {t('contact.title')}
      </h2>
      <div className="bg-white dark:bg-navy-900 border border-violet-500/20 rounded-xl p-6 sm:p-8">
        <p className="text-gray-600 dark:text-white/67 leading-relaxed mb-8">
          {t('contact.subtitle')}
        </p>
        <div className="flex flex-wrap gap-4">
          {PROFILE.email && (
            <a
              href={`mailto:${PROFILE.email}`}
              className="inline-flex items-center gap-2 bg-violet-500 hover:bg-violet-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
            >
              ✉ {t('contact.emailLabel')}
            </a>
          )}
          {PROFILE.github && (
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-violet-500 text-violet-500 hover:bg-violet-500/10 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
            >
              {t('contact.githubLabel')}
            </a>
          )}
          {PROFILE.linkedin && (
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-violet-500 text-violet-500 hover:bg-violet-500/10 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
            >
              {t('contact.linkedinLabel')}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
