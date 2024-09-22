import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationUZ from '../public/locales/uz/translation.json';
import translationRU from '../public/locales/ru/translation.json';

const resources = {
  uzb: {
    translation: translationUZ
  },
  rus: {
    translation: translationRU
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'uzb', // boshlang'ich til
  fallbackLng: 'uzb',
  interpolation: {
    escapeValue: false // React uchun xavfsiz bo'lishi uchun
  }
});

export default i18n;
