import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-violet-500/20 bg-white dark:bg-navy-800 py-6 px-4 text-center text-sm text-gray-500 dark:text-white/67 transition-colors duration-200">
      <p>
        © {year} {t('header.title')} — {t('footer.rights')}
      </p>
      <p className="mt-1">
        React {t('footer.madeWith')} ❤️
      </p>
    </footer>
  );
}

export default Footer;
