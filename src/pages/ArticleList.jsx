import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RedirectWithLang from '../components/RedirectWithLang';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import DocumentTitle from '../utils/DocumentTitle';
import { normalizeString } from '../utils/normalizeString'; // Assuming you create this utility

const textStyles = "text-gray-700 dark:text-stone-300";

const ArticleList = () => {
    const { lang } = useParams();
    const { t } = useTranslation();
    const [companies, setArticles] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('desc');
    DocumentTitle('SP - ' + t('nav.articles'));

    useEffect(() => {
        const companiesContext = import.meta.glob('../articles/**/*.json');

        const loadArticles = async () => {
            const loadedArticles = [];

            for (const path in companiesContext) {
                const module = await companiesContext[path]();
                if (path.split('/').pop().split('.')[0] === lang) {
                    const langData = module.default;
                    const articleFolder = path.split('/')[2];
                    const imageModule = await import(`../articles/${articleFolder}/${articleFolder}.jpg`);
                    langData.image = imageModule.default;
                    langData.url = articleFolder;
                    loadedArticles.push(langData);
                }
            }

            loadedArticles.sort((a, b) => {
                const dateA = new Date(a.publicationDate);
                const dateB = new Date(b.publicationDate);
                return sortOrder === 'desc' ? dateB - dateA : dateA - dateB;
            });

            setArticles(loadedArticles);
        };

        loadArticles();
    }, [lang, sortOrder]);

    // Function to handle search filtering
    const filteredArticles = companies.filter(article =>
        normalizeString(article.title).includes(normalizeString(searchTerm))
    );

    return (
        <div className="p-4 sm:p-6 md:p-8 flex flex-col items-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                {t('articleList.title')}
            </h2>
            <p className={`${textStyles} mb-4 text-center`}>
                {t('articleList.description')}
            </p>

            {/* Search Bar */}
            <div className="mb-4 w-full max-w-md">
                <input
                    type="text"
                    placeholder={t('articleList.searchPlaceholder')}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                />
            </div>

            {/* Sort Dropdown */}
            <div className="mb-4">
                <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="p-2 border border-gray-300 dark:border-gray-700 rounded shadow-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                >
                    <option value="desc">{t('articleList.sortByLatest')}</option>
                    <option value="asc">{t('articleList.sortByOldest')}</option>
                </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-4xl">
                {filteredArticles.length > 0 ? (
                    filteredArticles.map((article, index) => (
                        <RedirectWithLang key={index} to={`/articles/${article.url}`}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 bg-white dark:bg-gray-800"
                            >
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-48 object-cover blur-sm"
                                />
                                <div className="bg-white/50 dark:bg-black/50 p-4 text-white absolute bottom-0 w-full h-full flex flex-col justify-end">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{article.title}</h3>
                                    <p className="mt-2 text-sm text-gray-900 dark:text-white">{article.shortDescription}</p>
                                    <p className="mt-2 text-sm text-gray-500 dark:text-stone-300">{article.publicationDate}</p>
                                </div>
                            </motion.div>
                        </RedirectWithLang>
                    ))
                ) : (
                    <p className="text-center text-gray-600 dark:text-stone-400">
                        {t('articleList.noArticles')}
                    </p>
                )}
            </div>
        </div>
    );
};

export default ArticleList;
