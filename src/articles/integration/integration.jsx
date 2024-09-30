import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import integrationImage from './integration.jpg'; // Image d'introduction
import onboardingImage from './onboarding.jpg'; // Image du milieu
import DocumentTitle from '../../utils/DocumentTitle';

const Integration = () => {
    const { t } = useTranslation('integration');
    const navigate = useNavigate();
    DocumentTitle('SP - ' + t('title'));

    const { ref: descriptionRef, inView: descriptionInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: cultureRef, inView: cultureInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: relationshipsRef, inView: relationshipsInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: processRef, inView: processInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: conclusionRef, inView: conclusionInView } = useInView({ triggerOnce: true, threshold: 0.1 });

    // Fonction pour gérer le retour
    const handleBackClick = () => {
        navigate(-1); // Retour à la page précédente
    };

    return (
        <div className="p-6">
            <div className="max-w-4xl mx-auto">
                {/* Bouton de retour avec icône */}
                <motion.button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-6 flex items-center"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    onClick={handleBackClick}
                >
                    <FaArrowLeft className="mr-2" />
                </motion.button>

                {/* Titre principal avec animation */}
                <motion.h1
                    className="text-4xl font-bold text-gray-900 dark:text-white"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {t('title')}
                </motion.h1>

                <motion.p
                    className="mt-4 text-gray-700 dark:text-stone-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {t('shortDescription')}
                </motion.p>

                <motion.p
                    className="mt-2 text-gray-500 dark:text-stone-400 italic"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {t('publicationDate')}
                </motion.p>

                {/* Image d'introduction */}
                <motion.img
                    src={integrationImage}
                    alt={t('title')}
                    className="mt-6 rounded-lg shadow-lg object-cover w-full max-h-[460px]"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                />

                {/* Vue d'ensemble */}
                <motion.div
                    ref={descriptionRef}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: descriptionInView ? 1 : 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-6">
                        {t('sections.description.title')}
                    </h2>
                    <p className="text-gray-700 dark:text-stone-300">
                        {t('sections.description.details')}
                    </p>
                </motion.div>

                {/* Compréhension de la culture d’entreprise */}
                <motion.div
                    ref={cultureRef}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: cultureInView ? 1 : 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-6">
                        {t('sections.culture.title')}
                    </h2>
                    <p className="text-gray-700 dark:text-stone-300">
                        {t('sections.culture.details')}
                    </p>
                </motion.div>

                {/* Établir des relations solides */}
                <motion.div
                    ref={relationshipsRef}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: relationshipsInView ? 1 : 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-6">
                        {t('sections.relationships.title')}
                    </h2>
                    <p className="text-gray-700 dark:text-stone-300">
                        {t('sections.relationships.details')}
                    </p>
                </motion.div>

                {/* Image du milieu */}
                <motion.img
                    src={onboardingImage}
                    alt={t('sections.culture.title')}
                    className="mt-6 rounded-lg shadow-lg object-cover w-full max-h-[460px]"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                />

                {/* Apprentissage des processus internes */}
                <motion.div
                    ref={processRef}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: processInView ? 1 : 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-6">
                        {t('sections.process.title')}
                    </h2>
                    <p className="text-gray-700 dark:text-stone-300">
                        {t('sections.process.details')}
                    </p>
                </motion.div>

                {/* Conclusion */}
                <motion.div
                    ref={conclusionRef}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: conclusionInView ? 1 : 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-6">
                        {t('sections.conclusion.title')}
                    </h2>
                    <p className="text-gray-700 dark:text-stone-300">
                        {t('sections.conclusion.details')}
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default Integration;
