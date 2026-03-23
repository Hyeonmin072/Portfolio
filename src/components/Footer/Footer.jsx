import { useTranslation } from 'react-i18next';
import { Github } from 'lucide-react';
import { PROFILE } from '../../data/profile';

function Footer() {
  const { t, i18n } = useTranslation();
  const year = new Date().getFullYear();
  const name = i18n.language === 'ko' ? '김현민' : '金炫敃';

  return (
    <footer className="border-t border-slate-200/50 dark:border-white/5 mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-400 dark:text-slate-500">
          © {year} <span className="gradient-text font-medium">{name}</span> — {t('footer.rights')}
        </p>

        <div className="flex items-center gap-4">
          <p className="text-xs text-slate-400 dark:text-slate-600">
            React {t('footer.madeWith')} ❤️
          </p>
          {PROFILE.github && (
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
