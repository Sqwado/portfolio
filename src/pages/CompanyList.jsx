import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import LoadingSpinner from '../components/LoadingSpinner';
import SkeletonCard from '../components/SkeletonCard';
import ImageWithFallback from '../components/ImageWithFallback';
import SEO from '../components/SEO';



const CompanyList = () => {
    const { lang } = useParams(); // Récupération de la langue depuis les paramètres de l'URL
    const { t } = useTranslation(); // Use i18n for translations
    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(true);
    useDocumentTitle('SP - ' + t('nav.enterprises'));
    
    const pageTitle = t('nav.enterprises', { defaultValue: 'Entreprises' });
    const pageDescription = t('companyList.description', { defaultValue: 'Découvrez les entreprises' });

    useEffect(() => {
        const companiesContext = import.meta.glob('../entreprises/**/*.json');

        const loadCompanies = async () => {
            setLoading(true);
            const loadedCompanies = [];

            for (const path in companiesContext) {
                const module = await companiesContext[path]();

                // Vérifiez que les données de la langue demandée existent
                if (path.split('/').pop().split('.')[0] === lang) {
                    const langData = module.default;

                    // Construct the full image path using dynamic import
                    const companyFolder = path.split('/')[2]; // Get the company folder name
                    const imageModule = await import(`../entreprises/${companyFolder}/${companyFolder}.jpg`);

                    // Access the image URL from the imported module
                    langData.image = imageModule.default;
                    langData.url = companyFolder; // Use the company folder name as the URL
                    loadedCompanies.push(langData);
                }
            }

            setCompanies(loadedCompanies);
            setLoading(false);
        };

        loadCompanies();
    }, [lang]);

    return (
        <>
            <SEO
                title={`SP - ${pageTitle}`}
                description={pageDescription}
                lang={lang || 'fr'}
            />
            <div className="p-4 sm:p-6 md:p-8 flex flex-col items-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6 text-center font-heading">
                {t('companyList.title')}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 text-center max-w-2xl">
                {t('companyList.description')}
            </p>

            {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-4">
                    {[...Array(6)].map((_, index) => (
                        <SkeletonCard key={index} />
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-4">
                    {companies.length > 0 ? (
                        companies.map((company, index) => (
                            <Link key={index} to={`/${lang}/enterprises/${company.url}`} className="block h-full group">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-white dark:bg-stone-900 border border-gray-100 dark:border-stone-800 h-full flex flex-col"
                                >
                                    <div className="relative h-48 overflow-hidden bg-white dark:bg-stone-800 flex items-center justify-center p-4">
                                        {/* Overlay gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent dark:from-black/40 z-10 transition-opacity"></div>
                                        <ImageWithFallback
                                            src={company.image}
                                            alt={company.name}
                                            className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700 p-2"
                                        />
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow relative z-20 bg-white dark:bg-stone-900 group-hover:bg-gray-50 dark:group-hover:bg-stone-800 transition-colors">
                                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors font-heading">{company.name}</h3>
                                        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 mb-4 flex-grow">{company.shortDescription}</p>
                                        <div className="flex items-center text-indigo-600 dark:text-indigo-400 text-sm font-semibold group/link">
                                            {t('view_details')}
                                            <span className="ml-1 transform group-hover/link:translate-x-1 transition-transform">→</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>

                        ))
                    ) : (
                        <div className="col-span-full text-center py-20">
                            <p className="text-xl text-gray-500 dark:text-stone-500 font-medium">
                                {t('companyList.noCompanies')}
                            </p>
                        </div>
                    )}
                </div>
            )}
        </div>
        </>
    );
};

export default CompanyList;
