import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import tr from "../public/locales/tr/translation.json";
import en from "../public/locales/en/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    tr: { translation: tr },
    en: { translation: en },
  },
  lng: "tr",
  fallbackLng: "en",
  supportedLngs: ["tr", "en"],
  interpolation: {
    escapeValue: false,
  },
  debug: false,
});

export default i18n;
