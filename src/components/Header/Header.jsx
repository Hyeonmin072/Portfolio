import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import './Header.css';

function Header() {
  const { t } = useTranslation();

  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-brand">
          <h1 className="header-title">{t('header.title')}</h1>
          <p className="header-subtitle">{t('header.subtitle')}</p>
        </div>

        <nav className="header-nav" aria-label="Main navigation">
          <a href="#projects">{t('nav.projects')}</a>
          <a href="#about">{t('nav.about')}</a>
          <a href="#contact">{t('nav.contact')}</a>
        </nav>

        <LanguageSwitcher />
      </div>
    </header>
  );
}

export default Header;
