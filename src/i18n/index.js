import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ko from './locales/ko/translation.json';
import ja from './locales/ja/translation.json';

const resources = {
  ko: { translation: ko },
  ja: { translation: ja },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ko',
    fallbackLng: 'ko',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
