import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { PROFILE } from '../../data/profile';

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="max-w-6xl mx-auto py-24 px-4 sm:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={sectionVariants}
      >
        {/* 섹션 헤딩 */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-3">
            <div className="h-px flex-1 bg-gradient-to-r from-indigo-500/40 to-transparent" />
            <span className="text-xs font-semibold text-indigo-500 dark:text-indigo-400 uppercase tracking-[0.2em]">
              02. About
            </span>
            <div className="h-px w-8 bg-indigo-500/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            {t('about.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* 바이오 */}
          <div className="glass rounded-2xl p-7 sm:p-8">
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              {t('about.bio')}
            </p>
          </div>

          {/* 기술 스택 */}
          <div className="glass rounded-2xl p-7 sm:p-8">
            <h3 className="text-xs font-semibold text-indigo-500 dark:text-indigo-400 uppercase tracking-[0.15em] mb-5">
              {t('about.skillsTitle')}
            </h3>
            <div className="flex flex-wrap gap-2">
              {PROFILE.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-lg text-sm font-medium bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-500/20 hover:bg-indigo-100 dark:hover:bg-indigo-500/20 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
