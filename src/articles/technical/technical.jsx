import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import introImage from './technical.jpg'; // Image d'introduction
import deploymentImage from './deployment.jpg'; // Image du milieu
import DocumentTitle from '../../utils/DocumentTitle';

const Technical = () => {
    const { t } = useTranslation('technical');
    const navigate = useNavigate();
    DocumentTitle('SP - ' + t('title'));

    const { ref: developmentRef, inView: developmentInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: databaseRef, inView: databaseInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: psdkRef, inView: psdkInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: deploymentRef, inView: deploymentInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: conclusionRef, inView: conclusionInView } = useInView({ triggerOnce: true, threshold: 0.1 });

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
                    src={introImage}
                    alt={t('title')}
                    className="mt-6 rounded-lg shadow-lg object-cover w-full max-h-[460px]"
                    style={{ objectPosition: 'top', top: '-50px' }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                />

                {/* Introduction */}
                <motion.div
                    ref={developmentRef}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: developmentInView ? 1 : 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-6">
                        {t('sections.development.title')}
                    </h2>
                    <p className="text-gray-700 dark:text-stone-300">
                        {t('sections.development.details')}
                    </p>
                </motion.div>

                {/* Gestion des bases de données */}
                <motion.div
                    ref={databaseRef}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: databaseInView ? 1 : 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-6">
                        {t('sections.database.title')}
                    </h2>
                    <p className="text-gray-700 dark:text-stone-300">
                        {t('sections.database.details')}
                    </p>
                </motion.div>

                {/* Développement avec DJI PSDK */}
                <motion.div
                    ref={psdkRef}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: psdkInView ? 1 : 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-6">
                        {t('sections.psdk.title')}
                    </h2>
                    <p className="text-gray-700 dark:text-stone-300">
                        {t('sections.psdk.details')}
                    </p>
                </motion.div>

                {/* Image du milieu */}
                <motion.img
                    src={deploymentImage}
                    alt={t('sections.deployment.title')}
                    className="mt-6 rounded-lg shadow-lg object-cover w-full max-h-[460px]"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                />

                {/* Déploiement avec PM2 et Nginx */}
                <motion.div
                    ref={deploymentRef}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: deploymentInView ? 1 : 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-6">
                        {t('sections.deployment.title')}
                    </h2>
                    <p className="text-gray-700 dark:text-stone-300">
                        {t('sections.deployment.details')}
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

export default Technical;
