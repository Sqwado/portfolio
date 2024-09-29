import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importation des fichiers de traduction principaux
import translationEN from './locales/en/translation.json';
import translationFR from './locales/fr/translation.json';

const initialresources = {
    en: {
        translation: translationEN,
    },
    fr: {
        translation: translationFR,
    },
};

const addResourcesFromFiles = (resources, files) => {
    for (const path in files) {
        const lang = path.includes('/fr.json') ? 'fr' : 'en';
        const ns = path.split('/')[2];

        if (!resources[lang]) {
            resources[lang] = {};
        }

        if (!resources[lang][ns]) {
            resources[lang][ns] = {};
        }

        resources[lang][ns] = files[path];
    }

    return resources;
};

// Fonction pour charger tous les fichiers de traduction des entreprises
const loadEnterpriseTranslations = async (resources = {}) => {
    const translationFiles = import.meta.glob('./entreprises/**/+(fr|en).json', { eager: true });

    resources = addResourcesFromFiles(resources, translationFiles);

    return resources;
};

// Fonction pour charger tous les fichiers de traduction des articles
const laodArticlesTranslations = async (resources = {}) => {
    const translationFiles = import.meta.glob('./articles/**/+(fr|en).json', { eager: true });

    resources = addResourcesFromFiles(resources, translationFiles);

    return resources;
};

// Charger les traductions et initialiser i18next
const initI18n = async () => {
    const resources = await loadEnterpriseTranslations(await laodArticlesTranslations(initialresources));


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
};

initI18n();

export default i18n;
