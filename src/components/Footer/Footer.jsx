import { useTranslation } from 'react-i18next';
import './Footer.css';

function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        © {year} {t('header.title')} — {t('footer.rights')}
      </p>
      <p className="footer__made">
        React {t('footer.madeWith')} ❤️
      </p>
    </footer>
  );
}

export default Footer;
