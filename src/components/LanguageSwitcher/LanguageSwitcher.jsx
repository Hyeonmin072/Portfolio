import { useTranslation } from 'react-i18next';

const LANGUAGES = [
  { code: 'ko', label: '한국어' },
  { code: 'ja', label: '日本語' },
];

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div className="flex gap-1 p-0.5 rounded-lg bg-slate-100 dark:bg-white/5">
      {LANGUAGES.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => i18n.changeLanguage(code)}
          aria-label={`Switch to ${label}`}
          className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all duration-200 ${
            i18n.language === code
              ? 'bg-white dark:bg-indigo-500 text-indigo-600 dark:text-white shadow-sm'
              : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default LanguageSwitcher;
