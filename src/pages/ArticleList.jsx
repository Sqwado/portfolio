import { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import { normalizeString } from '../utils/normalizeString';
import SkeletonCard from '../components/SkeletonCard';
import ArticleCard from '../components/ArticleCard';
import SEO from '../components/SEO';



const ArticleList = () => {
    const { lang } = useParams();
    const { t } = useTranslation();
    const [articles, setArticles] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('desc');
    const [loading, setLoading] = useState(true);
    useDocumentTitle('SP - ' + t('nav.articles'));
    
    const pageTitle = t('nav.articles', { defaultValue: 'Articles' });
    const pageDescription = t('articleList.description', { defaultValue: 'Découvrez mes articles' });

    useEffect(() => {
        const articlesContext = import.meta.glob('../articles/**/*.json');

        const loadArticles = async () => {
            setLoading(true);
            const loadedArticles = [];

            try {
                for (const path in articlesContext) {
                    const module = await articlesContext[path]();
                    if (path.split('/').pop().split('.')[0] === lang) {
                        const langData = module.default;
                        const articleFolder = path.split('/')[2];
                        try {
                            const imageModule = await import(`../articles/${articleFolder}/${articleFolder}.jpg`);
                            langData.image = imageModule.default;
                        } catch (error) {
                            console.warn(`Image not found for article: ${articleFolder}`, error);
                            // Continue without image
                        }
                        langData.url = articleFolder;
                        loadedArticles.push(langData);
                    }
                }
            } catch (error) {
                console.error('Error loading articles:', error);
            }

            loadedArticles.sort((a, b) => {
                const dateA = new Date(a.publicationDate);
                const dateB = new Date(b.publicationDate);
                return sortOrder === 'desc' ? dateB - dateA : dateA - dateB;
            });

            setArticles(loadedArticles);
            setLoading(false);
        };

        loadArticles();
    }, [lang, sortOrder]);

    // Function to handle search filtering with memoization
    const filteredArticles = useMemo(() => 
        articles.filter(article =>
            normalizeString(article.title).includes(normalizeString(searchTerm))
        ),
        [articles, searchTerm]
    );

    return (
        <>
            <SEO
                title={`SP - ${pageTitle}`}
                description={pageDescription}
                lang={lang || 'fr'}
            />
            <div className="p-4 sm:p-6 md:p-8 flex flex-col items-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center font-heading">
                {t('articleList.title')}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 text-center max-w-2xl">
                {t('articleList.description')}
            </p>

            {/* Search Bar */}
            <div className="mb-8 w-full max-w-lg relative group">
                <div className="absolute inset-0 bg-indigo-500 rounded-full blur opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <input
                    type="text"
                    placeholder={t('articleList.searchPlaceholder')}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="relative w-full px-6 py-4 bg-white/80 dark:bg-stone-900/80 backdrop-blur-md border border-gray-200 dark:border-stone-700 rounded-full shadow-lg text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all font-medium"
                />
            </div>

            {/* Sort Dropdown */}
            <div className="mb-12">
                <div className="relative inline-block">
                    <select
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                        className="appearance-none pl-6 pr-12 py-3 bg-white/80 dark:bg-stone-900/80 backdrop-blur-md border border-gray-200 dark:border-stone-700 rounded-full shadow-md text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 cursor-pointer font-medium hover:bg-white dark:hover:bg-stone-800 transition-colors"
                    >
                        <option value="desc">{t('articleList.sortByLatest')}</option>
                        <option value="asc">{t('articleList.sortByOldest')}</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500 dark:text-gray-400">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                </div>
            </div>

            {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-4">
                    {[...Array(6)].map((_, index) => (
                        <SkeletonCard key={index} />
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-4">
                    {filteredArticles.length > 0 ? (
                        filteredArticles.map((article, index) => (
                            <ArticleCard
                                key={article.url || index}
                                article={article}
                                lang={lang}
                                index={index}
                            />
                        ))
                    ) : (
                        <div className="col-span-full text-center py-20">
                            <p className="text-xl text-gray-500 dark:text-stone-500 font-medium">
                                {t('articleList.noArticles')}
                            </p>
                        </div>
                    )}
                </div>
            )}
        </div>
        </>
    );
};

export default ArticleList;
