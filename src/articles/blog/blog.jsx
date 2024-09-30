import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import introImage from './blog.jpg'; // Image d'introduction
import middleImage from './middleImage.svg'; // Image au milieu du contenu
import DocumentTitle from '../../utils/DocumentTitle';

const Blog = () => {
    const { t } = useTranslation('blog');
    const navigate = useNavigate();
    DocumentTitle('Portfolio - ' + t('title'));

    const { ref: introRef, inView: introInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: impressionsRef, inView: impressionsInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: experienceRef, inView: experienceInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: improvementsRef, inView: improvementsInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: suggestionsRef, inView: suggestionsInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: conclusionRef, inView: conclusionInView } = useInView({ triggerOnce: true, threshold: 0.1 });

    const handleBackClick = () => {
        navigate(-1); // Retour à la page précédente
    };

    return (
        <div className="p-6">
            <div className="max-w-4xl mx-auto">
                {/* Bouton retour avec icône */}
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
                    alt={t('introImageAlt')}
                    className="mt-6 rounded-lg shadow-lg object-cover w-full max-h-[460px]"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                />

                {/* Introduction */}
                <motion.div
                    ref={introRef}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: introInView ? 1 : 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-6">
                        Introduction
                    </h2>
                    <p className="text-gray-700 dark:text-stone-300">
                        {t('intro')}
                    </p>
                </motion.div>

                {/* Impressions générales */}
                <motion.div
                    ref={impressionsRef}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: impressionsInView ? 1 : 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-6">
                        {t('sections.impressions.title')}
                    </h2>
                    <p className="text-gray-700 dark:text-stone-300">
                        {t('sections.impressions.details')}
                    </p>
                </motion.div>

                {/* Expérience acquise */}
                <motion.div
                    ref={experienceRef}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: experienceInView ? 1 : 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-6">
                        {t('sections.experience.title')}
                    </h2>
                    <p className="text-gray-700 dark:text-stone-300">
                        {t('sections.experience.details')}
                    </p>
                </motion.div>

                {/* Image pour la section d'expérience acquise */}
                <motion.img
                    src={middleImage}
                    alt={t('middleImageAlt')}
                    className="mt-6 rounded-lg shadow-lg object-cover w-full max-h-[460px]"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                />

                {/* Points d'amélioration */}
                <motion.div
                    ref={improvementsRef}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: improvementsInView ? 1 : 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-6">
                        {t('sections.improvements.title')}
                    </h2>
                    <p className="text-gray-700 dark:text-stone-300">
                        {t('sections.improvements.details')}
                    </p>
                </motion.div>

                {/* Suggestions pour l'avenir */}
                <motion.div
                    ref={suggestionsRef}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: suggestionsInView ? 1 : 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-6">
                        {t('sections.suggestions.title')}
                    </h2>
                    <p className="text-gray-700 dark:text-stone-300">
                        {t('sections.suggestions.details')}
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

export default Blog;
