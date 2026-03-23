import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { GraduationCap, Award, BookOpen, Activity } from 'lucide-react';
import { PROFILE } from '../../data/profile';

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const staggerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

function SectionBlock({ icon: Icon, title, children }) {
  return (
    <motion.div
      variants={itemVariants}
      className="glass rounded-2xl p-6 sm:p-7"
    >
      <div className="flex items-center gap-2 mb-5">
        <Icon size={16} className="text-indigo-500 dark:text-indigo-400" />
        <h3 className="text-xs font-semibold text-indigo-500 dark:text-indigo-400 uppercase tracking-[0.15em]">
          {title}
        </h3>
      </div>
      {children}
    </motion.div>
  );
}

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

        <motion.div
          variants={staggerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* 바이오 */}
          <motion.div variants={itemVariants} className="glass rounded-2xl p-6 sm:p-7 md:col-span-2">
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-base">
              {t('about.bio')}
            </p>
          </motion.div>

          {/* 기술 스택 */}
          <SectionBlock icon={BookOpen} title={t('about.skillsTitle')}>
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
          </SectionBlock>

          {/* 학력 */}
          <SectionBlock icon={GraduationCap} title={t('about.educationTitle')}>
            <ul className="space-y-4">
              {PROFILE.education.map((edu, i) => (
                <li key={i} className="flex flex-col gap-0.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-semibold text-slate-800 dark:text-white text-sm">
                      {t(`profileData.education.${i}.school`, edu.school)}
                    </span>
                    <span className="text-xs text-slate-400 dark:text-slate-500 shrink-0">
                      {t(`profileData.education.${i}.status`, edu.status)}
                    </span>
                  </div>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    {t(`profileData.education.${i}.major`, edu.major)}
                  </span>
                  <div className="flex items-center gap-3 mt-0.5">
                    {edu.period && (
                      <span className="text-xs text-slate-400 dark:text-slate-500">{edu.period}</span>
                    )}
                    {edu.gpa && (
                      <span className="text-xs font-medium text-indigo-500 dark:text-indigo-400">
                        GPA {edu.gpa}
                      </span>
                    )}
                  </div>
                  {i < PROFILE.education.length - 1 && (
                    <div className="mt-3 h-px bg-slate-100 dark:bg-white/5" />
                  )}
                </li>
              ))}
            </ul>
          </SectionBlock>

          {/* 자격/어학 */}
          <SectionBlock icon={Award} title={t('about.certificationsTitle')}>
            <ul className="space-y-3">
              {PROFILE.certifications.map((cert, i) => (
                <li key={i} className="flex items-start justify-between gap-2">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm font-semibold text-slate-800 dark:text-white">
                      {t(`profileData.certifications.${i}.name`, cert.name)}
                    </span>
                    <span className="text-xs text-slate-400 dark:text-slate-500">
                      {t(`profileData.certifications.${i}.org`, cert.org)}
                    </span>
                  </div>
                  <div className="flex flex-col items-end gap-0.5 shrink-0">
                    <span className="text-xs text-slate-400 dark:text-slate-500">{cert.year}</span>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                      cert.type === '자격증'
                        ? 'bg-indigo-100 dark:bg-indigo-500/15 text-indigo-600 dark:text-indigo-300'
                        : 'bg-violet-100 dark:bg-violet-500/15 text-violet-600 dark:text-violet-300'
                    }`}>
                      {cert.type}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </SectionBlock>

          {/* 경험/활동/교육 */}
          <SectionBlock icon={Activity} title={t('about.activitiesTitle')}>
            <ul className="space-y-4">
              {PROFILE.activities.map((act, i) => (
                <li key={i} className="flex flex-col gap-0.5">
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-sm font-semibold text-slate-800 dark:text-white leading-snug">
                      {t(`profileData.activities.${i}.name`, act.name)}
                    </span>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full shrink-0 ${
                      act.type === '교육'
                        ? 'bg-emerald-100 dark:bg-emerald-500/15 text-emerald-600 dark:text-emerald-300'
                        : 'bg-amber-100 dark:bg-amber-500/15 text-amber-600 dark:text-amber-300'
                    }`}>
                      {act.type}
                    </span>
                  </div>
                  <span className="text-xs text-indigo-500 dark:text-indigo-400">
                    {t(`profileData.activities.${i}.org`, act.org)}
                  </span>
                  <span className="text-xs text-slate-400 dark:text-slate-500">{act.period}</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    {t(`profileData.activities.${i}.description`, act.description)}
                  </span>
                  {i < PROFILE.activities.length - 1 && (
                    <div className="mt-2 h-px bg-slate-100 dark:bg-white/5" />
                  )}
                </li>
              ))}
            </ul>
          </SectionBlock>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;
