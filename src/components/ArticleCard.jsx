import { memo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { formatDate } from '../utils/formatDate';
import ImageWithFallback from './ImageWithFallback';

/**
 * Composant de carte d'article mémorisé pour optimiser les performances
 */
const ArticleCard = memo(({ article, lang, index }) => {
    const { t } = useTranslation();

    return (
        <Link to={`/${lang}/articles/${article.url}`} className="block h-full group">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white dark:bg-stone-900 border border-gray-100 dark:border-stone-800 h-full flex flex-col"
            >
                <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>
                    <ImageWithFallback
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute bottom-3 left-4 z-20">
                        <p className="text-xs font-semibold text-indigo-200 bg-black/30 backdrop-blur-sm px-2 py-1 rounded-md border border-white/10">
                            {formatDate(article.publicationDate, lang)}
                        </p>
                    </div>
                </div>
                <div className="p-6 flex flex-col flex-grow relative z-20 bg-white dark:bg-stone-900 group-hover:bg-gray-50 dark:group-hover:bg-stone-800 transition-colors">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors font-heading">
                        {article.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 mb-4 flex-grow">
                        {article.shortDescription}
                    </p>
                    <div className="flex items-center text-indigo-600 dark:text-indigo-400 text-sm font-semibold group/link">
                        {t('read_more')}
                        <span className="ml-1 transform group-hover/link:translate-x-1 transition-transform">→</span>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
});

ArticleCard.displayName = 'ArticleCard';

export default ArticleCard;
