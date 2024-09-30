import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import challengesImage from './challenges.jpg'; // Image d'introduction
import solutionImage from './solution.jpg'; // Image du milieu
import DocumentTitle from '../../utils/DocumentTitle';

const Challenges = () => {
    const { t } = useTranslation('challenges');
    const navigate = useNavigate();
    DocumentTitle('SP - ' + t('title'));

    const { ref: stockSystemRef, inView: stockSystemInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: solution1Ref, inView: solution1InView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: deploymentRef, inView: deploymentInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: solution2Ref, inView: solution2InView } = useInView({ triggerOnce: true, threshold: 0.1 });
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
                    src={challengesImage}
                    alt={t('title')}
                    className="mt-6 rounded-lg shadow-lg object-cover w-full max-h-[460px]"
                    style={{ objectPosition: 'top', top: '-50px' }} // Crop 20px from the top of the image
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                />

                {/* Difficulté : Mise en place du système de gestion de stock */}
                <motion.div
                    ref={stockSystemRef}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: stockSystemInView ? 1 : 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-6">
                        {t('sections.stockSystem.title')}
                    </h2>
                    <p className="text-gray-700 dark:text-stone-300">
                        {t('sections.stockSystem.details')}
                    </p>
                </motion.div>

                {/* Solution : Structurer le développement en étapes */}
                <motion.div
                    ref={solution1Ref}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: solution1InView ? 1 : 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-6">
                        {t('sections.solution1.title')}
                    </h2>
                    <p className="text-gray-700 dark:text-stone-300">
                        {t('sections.solution1.details')}
                    </p>
                </motion.div>

                {/* Image du milieu */}
                <motion.img
                    src={solutionImage}
                    alt={t('sections.solution1.title')}
                    className="mt-6 rounded-lg shadow-lg object-cover w-full max-h-[460px]"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                />

                {/* Difficulté : Déploiement sur un serveur local */}
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

                {/* Solution : Automatisation et suivi des logs */}
                <motion.div
                    ref={solution2Ref}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: solution2InView ? 1 : 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-6">
                        {t('sections.solution2.title')}
                    </h2>
                    <p className="text-gray-700 dark:text-stone-300">
                        {t('sections.solution2.details')}
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

export default Challenges;
