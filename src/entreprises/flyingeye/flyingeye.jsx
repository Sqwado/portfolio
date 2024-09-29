import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import companyImage from './flyingeye.jpg';
import innovationImage from './innovation.jpg';
import droneUsageImage from './droneUsage.jpg';
import DocumentTitle from '../../utils/DocumentTitle';

const FlyingEye = () => {
    const { t, i18n } = useTranslation('flyingeye');
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    DocumentTitle('SP - ' + t('name'));

    const { ref: descRef, inView: descInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: workEnvRef, inView: workEnvInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: activityRef, inView: activityInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: internshipRef, inView: internshipInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: innovationsRef, inView: innovationsInView } = useInView({ triggerOnce: true, threshold: 0.1 });

    useEffect(() => {
        const loadTranslations = async () => {
            await i18n.loadNamespaces('flyingeye');
            setLoading(false);
        };

        loadTranslations();
    }, [i18n]);

    if (loading) {
        return <div>Loading translations...</div>;
    }

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
                    {t('name')}
                </motion.h1>

                <motion.p
                    className="mt-4 text-gray-700 dark:text-stone-300"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {t('shortDescription')}
                </motion.p>

                <motion.img
                    src={companyImage}
                    alt={t('name')}
                    className="mt-6 rounded-lg shadow-lg"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                />

                {/* Vue d'ensemble */}
                <motion.div
                    ref={descRef}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: descInView ? 1 : 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-6">
                        {t('description.title')}
                    </h2>
                    <p className="text-gray-700 dark:text-stone-300">
                        {t('description.details')}
                    </p>
                    <motion.img
                        src={innovationImage}
                        alt="Innovation chez Flying Eye"
                        className="mt-4 rounded-lg shadow-lg"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: descInView ? 1 : 0.8, opacity: descInView ? 1 : 0 }}
                        transition={{ duration: 0.6 }}
                    />
                </motion.div>

                {/* Environnement de travail */}
                <motion.div
                    ref={workEnvRef}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: workEnvInView ? 1 : 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-6">
                        {t('workEnvironment.title')}
                    </h2>
                    <p className="text-gray-700 dark:text-stone-300">
                        {t('workEnvironment.details')}
                    </p>
                </motion.div>

                {/* Activité de l'entreprise */}
                <motion.div
                    ref={activityRef}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: activityInView ? 1 : 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-6">
                        {t('activity.title')}
                    </h2>
                    <p className="text-gray-700 dark:text-stone-300">
                        {t('activity.details')}
                    </p>
                    <motion.img
                        src={droneUsageImage}
                        alt="Utilisation des drones"
                        className="mt-4 rounded-lg shadow-lg"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: activityInView ? 1 : 0.8, opacity: activityInView ? 1 : 0 }}
                        transition={{ duration: 0.6 }}
                    />
                </motion.div>

                {/* Expérience de stage */}
                <motion.div
                    ref={internshipRef}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: internshipInView ? 1 : 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6">
                        {t('internshipExperience.title')}
                    </h3>
                    <p className="text-gray-700 dark:text-stone-300">
                        {t('internshipExperience.details')}
                    </p>
                </motion.div>

                {/* Dernières innovations */}
                <motion.div
                    ref={innovationsRef}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: innovationsInView ? 1 : 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6">
                        {t('latestInnovations.title')}
                    </h3>
                    <p className="text-gray-700 dark:text-stone-300">
                        {t('latestInnovations.details')}
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default FlyingEye;
