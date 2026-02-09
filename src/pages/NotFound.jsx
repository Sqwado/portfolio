import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const NotFound = () => {
    const { lang } = useParams();
    const { t } = useTranslation();
    useDocumentTitle('SP - 404');

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-[#050505] p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-2xl w-full text-center"
            >
                <div className="bg-white/70 dark:bg-white/5 backdrop-blur-md shadow-2xl border border-white/20 dark:border-white/10 rounded-3xl p-8 sm:p-12">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        className="text-6xl mb-6"
                    >
                        404
                    </motion.div>
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 font-heading">
                        {t('notFound.title', { defaultValue: 'Page non trouvée' })}
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                        {t('notFound.description', { defaultValue: 'La page que vous recherchez n\'existe pas ou a été déplacée.' })}
                    </p>
                    <Link
                        to={`/${lang || 'fr'}`}
                        className="inline-block px-8 py-3 rounded-full bg-indigo-600 text-white font-semibold shadow-lg hover:bg-indigo-700 hover:-translate-y-1 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        {t('notFound.backHome', { defaultValue: 'Retour à l\'accueil' })}
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default NotFound;
