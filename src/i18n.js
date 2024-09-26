import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importation des fichiers de traduction
import translationEN from './locales/en/translation.json';
import translationFR from './locales/fr/translation.json';

const resources = {
    en: {
        translation: translationEN
    },
    fr: {
        translation: translationFR
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'fr', // langue par défaut
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false // React se charge de la protection contre les failles XSS
        }
    });

export default i18n;
