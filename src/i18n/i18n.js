import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import translationsEN from './en/en.json'
import translationsFA from './fa/fa.json'

const resources = {
  en: {
    translation: translationsEN
  },
  fa: {
    defaultLanguage: true,
    translation: translationsFA
  }
};

const I18n = i18n.createInstance();

I18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: 'en', // default language
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  })

export default I18n;