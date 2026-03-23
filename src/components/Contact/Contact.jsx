import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Mail, Github } from 'lucide-react';
import { PROFILE } from '../../data/profile';

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="max-w-6xl mx-auto py-24 px-4 sm:px-8">
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
              03. Contact
            </span>
            <div className="h-px w-8 bg-indigo-500/40" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            {t('contact.title')}
          </h2>
        </div>

        <div className="max-w-2xl">
          <div className="glass rounded-2xl p-8 sm:p-10">
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-8 text-base">
              {t('contact.subtitle')}
            </p>

            <div className="flex flex-wrap gap-4">
              {PROFILE.email && (
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-400 hover:to-violet-400 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Mail size={16} />
                  {t('contact.emailLabel')}
                </a>
              )}
              {PROFILE.github && (
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-white/15 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Github size={16} />
                  {t('contact.githubLabel')}
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
