import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
i18n.use(HttpBackend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en-US',
        debug: true,
        ns: ['category', 'navbar',"upload"], // list your namespaces
        defaultNS: 'common',        // default namespace if none is specified
        backend: {
            loadPath: 'locale/{{lng}}/{{ns}}.json',
        },
        interpolation: {
            escapeValue: false,
        },

    });
export default i18n;