import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import viLang from './locales/vi';
import krLang from './locales/kr';
import zhLang from './locales/zh';

const resources = {
  vi: {
    translation: viLang
  },
  kr: {
    translation: krLang
  },
  zh: {
    translation: zhLang
  }
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: 'vi',
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
