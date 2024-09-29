import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RedirectWithLang from '../components/RedirectWithLang';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import DocumentTitle from '../utils/DocumentTitle';

const textStyles = "text-gray-700 dark:text-stone-300";

const CompanyList = () => {
    const { lang } = useParams(); // Récupération de la langue depuis les paramètres de l'URL
    const { t } = useTranslation(); // Use i18n for translations
    const [companies, setCompanies] = useState([]);
    DocumentTitle('SP - ' + t('nav.enterprises'));

    useEffect(() => {
        const companiesContext = import.meta.glob('../entreprises/**/*.json');

        const loadCompanies = async () => {
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
        };

        loadCompanies();
    }, [lang]);

    return (
        <div className="p-4 sm:p-6 md:p-8 flex flex-col items-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                {t('companyList.title')}
            </h2>
            <p className={`${textStyles} mb-4 text-center`}>
                {t('companyList.description')}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-4xl">
                {companies.length > 0 ? (
                    companies.map((company, index) => (
                        <RedirectWithLang key={index} to={`/enterprises/${company.url}`}>
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 bg-white dark:bg-gray-800"                            >
                                <img
                                    src={company.image}
                                    alt={company.name}
                                    className="w-full h-48 object-cover blur-sm"
                                />
                                <div className="bg-white/50 dark:bg-black/50 p-4 text-white absolute bottom-0 w-full h-full flex flex-col justify-end">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{company.name}</h3>
                                    <p className="mt-2 text-sm text-gray-900 dark:text-white">{company.shortDescription}</p>
                                </div>
                            </motion.div>
                        </RedirectWithLang>

                    ))
                ) : (
                    <p className="text-center text-gray-600 dark:text-stone-400">
                        {t('companyList.noCompanies')}
                    </p>
                )}
            </div>
        </div>
    );
};

export default CompanyList;
