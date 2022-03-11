import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "./assets/locales/en/translations.json";
import translationCH from "./assets/locales/ch/translations.json";
import translationFR from "./assets/locales/fr/translations.json";
import translationDE from "./assets/locales/de/translations.json";

const resources = {
  en: {
    translation: translationEN,
  },
  de: {
    translation: translationDE,
  },
  fr: {
    translation: translationFR,
  },
  ch: {
    translation: translationCH,
  },
};

const availableLanguages = ["en", "ch", "de", "fr"];

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "fr",
    fallbackLng: "en",
    debug: true,

    backend: {
      loadPath: "./assets/locales/{{lng}}/translation.json",
    },
    react: {
      useSuspense: false,
    },

    detection: {
      checkWhitelist: true,
    },

    debug: false,

    whitelist: availableLanguages,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
