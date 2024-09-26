
import { useTranslation } from 'react-i18next';
import profilePic from '../assets/profile.jpg'; // Assure-toi d'importer une image pour ton profil

const Home = () => {
    const { t } = useTranslation();

    return (
        <div className="p-6 bg-white dark:bg-stone-900 min-h-screen"> {/* Utilisation de stone-900 en mode sombre */}
            {/* Section présentation */}
            <section className="flex flex-col items-center text-center">
                <img
                    src={profilePic}
                    alt="Profile"
                    className="w-32 h-32 rounded-full shadow-lg mb-4 object-cover"
                />
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    {t('name')}
                </h1>
                <h2 className="text-lg text-gray-700 dark:text-stone-200 mb-4">
                    {t('profession')}
                </h2>
                <p className="text-gray-600 dark:text-stone-300 max-w-3xl mb-6">
                    {t('intro')}
                </p>

            </section>

            {/* Section parcours */}
            <section className="mt-12">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    {t('experience')}
                </h2>
                <p className="text-gray-700 dark:text-stone-300">
                    {t('experience_description')}
                </p>
            </section>

            {/* Section compétences */}
            <section className="mt-12">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    {t('skills')}
                </h2>
                <ul className="text-gray-700 dark:text-stone-300 list-disc list-inside">
                    <li>{t('skill1')}</li>
                    <li>{t('skill2')}</li>
                    <li>{t('skill3')}</li>
                </ul>
            </section>

            {/* Section à propos du blog */}
            <section className="mt-12">
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    {t('blog_overview')}
                </h2>
                <p className="text-gray-700 dark:text-stone-300">
                    {t('blog_overview_description')}
                </p>
            </section>
        </div>
    );
};

export default Home;
