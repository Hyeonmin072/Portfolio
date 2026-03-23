import { useTranslation } from 'react-i18next';

const LANGUAGES = [
  { code: 'ko', label: '한국어' },
  { code: 'ja', label: '日本語' },
];

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div className="flex gap-1">
      {LANGUAGES.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => i18n.changeLanguage(code)}
          aria-label={`Switch to ${label}`}
          className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
            i18n.language === code
              ? 'bg-violet-500 text-white'
              : 'text-gray-600 dark:text-white/67 hover:bg-gray-100 dark:hover:bg-navy-700'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default LanguageSwitcher;
