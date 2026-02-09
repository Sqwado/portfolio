import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        // Mettre à jour l'état pour que le prochain rendu affiche l'UI de repli
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // Enregistrer l'erreur dans un service de reporting
        console.error('ErrorBoundary caught an error:', error, errorInfo);
        this.setState({
            error,
            errorInfo
        });
    }

    render() {
        if (this.state.hasError) {
            return <ErrorFallback error={this.state.error} />;
        }

        return this.props.children;
    }
}

const ErrorFallback = ({ error }) => {
    const { t, i18n } = useTranslation();
    const lang = i18n.language || 'fr';

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
                        ⚠️
                    </motion.div>
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 font-heading">
                        {t('error.title', { defaultValue: 'Une erreur est survenue' })}
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                        {t('error.description', { defaultValue: 'Désolé, quelque chose s\'est mal passé. Veuillez réessayer.' })}
                    </p>
                    {process.env.NODE_ENV === 'development' && error && (
                        <details className="mb-6 text-left bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                            <summary className="cursor-pointer font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                Détails de l'erreur (mode développement)
                            </summary>
                            <pre className="text-xs text-red-600 dark:text-red-400 overflow-auto">
                                {error.toString()}
                            </pre>
                        </details>
                    )}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to={`/${lang}`}
                            className="px-8 py-3 rounded-full bg-indigo-600 text-white font-semibold shadow-lg hover:bg-indigo-700 hover:-translate-y-1 transition-all"
                        >
                            {t('error.backHome', { defaultValue: 'Retour à l\'accueil' })}
                        </Link>
                        <button
                            onClick={() => window.location.reload()}
                            className="px-8 py-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white font-semibold shadow-lg hover:bg-gray-300 dark:hover:bg-gray-600 hover:-translate-y-1 transition-all"
                        >
                            {t('error.reload', { defaultValue: 'Recharger la page' })}
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ErrorBoundary;
