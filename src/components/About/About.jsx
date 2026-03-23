import { useTranslation } from 'react-i18next';
import { PROFILE } from '../../data/profile';

function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="max-w-6xl mx-auto py-12 px-4 sm:px-8">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white/87 mb-7 pl-3 border-l-4 border-violet-500">
        {t('about.title')}
      </h2>
      <div className="bg-white dark:bg-navy-900 border border-violet-500/20 rounded-xl p-6 sm:p-8">
        <p className="text-gray-600 dark:text-white/67 leading-relaxed mb-8">
          {t('about.bio')}
        </p>
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/87 mb-4">
          {t('about.skillsTitle')}
        </h3>
        <div className="flex flex-wrap gap-2">
          {PROFILE.skills.map((skill) => (
            <span
              key={skill}
              className="bg-violet-500/10 text-violet-500 border border-violet-500/30 rounded-md px-3 py-1 text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
