import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay },
  },
});

const TECH_STACK = ['React', 'Spring Boot', 'Python', 'TypeScript', 'Docker'];

function Hero() {
  const { i18n } = useTranslation();
  const isKo = i18n.language === 'ko';

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* 그리드 패턴 */}
      <div className="absolute inset-0 dark:bg-grid bg-grid-light opacity-70 pointer-events-none" />

      {/* 글로우 오브 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-56 -left-56 w-[700px] h-[700px] bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -translate-y-1/2 -right-56 w-[600px] h-[600px] bg-purple-500/8 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] bg-violet-500/8 rounded-full blur-3xl" />
      </div>

      {/* 메인 콘텐츠 */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 pt-24 pb-32">
        <motion.div initial="hidden" animate="visible" className="max-w-4xl">
          {/* 레이블 */}
          <motion.p
            variants={fadeUp(0)}
            className="text-indigo-500 dark:text-indigo-400 text-xs font-semibold tracking-[0.25em] uppercase mb-6"
          >
            Portfolio
          </motion.p>

          {/* 이름 */}
          <motion.h1
            variants={fadeUp(0.1)}
            className="text-5xl sm:text-7xl lg:text-8xl font-extrabold leading-[1.1] mb-6 tracking-tight"
          >
            {isKo ? (
              <>
                <span className="text-slate-900 dark:text-white">안녕하세요,</span>
                <br />
                <span className="gradient-text">김현민</span>
                <span className="text-slate-900 dark:text-white">입니다.</span>
              </>
            ) : (
              <>
                <span className="text-slate-900 dark:text-white">こんにちは,</span>
                <br />
                <span className="gradient-text">金炫敃</span>
                <span className="text-slate-900 dark:text-white">です.</span>
              </>
            )}
          </motion.h1>

          {/* 직함 */}
          <motion.p
            variants={fadeUp(0.2)}
            className="text-xl sm:text-2xl text-slate-500 dark:text-slate-400 mb-6 font-light"
          >
            {isKo ? '풀스택 개발자' : 'フルスタックエンジニア'}
          </motion.p>

          {/* 기술 스택 필 */}
          <motion.div variants={fadeUp(0.3)} className="flex flex-wrap gap-2 mb-10">
            {TECH_STACK.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border border-indigo-500/20"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* CTA 버튼 */}
          <motion.div variants={fadeUp(0.4)} className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-500 to-violet-500 hover:from-indigo-400 hover:to-violet-400 transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
            >
              {isKo ? '프로젝트 보기' : 'プロジェクトを見る'}
            </a>
            <a
              href="#contact"
              className="px-7 py-3.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-white/15 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300 transition-all duration-200 hover:-translate-y-0.5"
            >
              {isKo ? '연락하기' : 'お問い合わせ'}
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* 스크롤 인디케이터 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 dark:text-slate-600"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
