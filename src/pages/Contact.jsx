import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import SEO from '../components/SEO';

const Contact = () => {
    const { lang } = useParams();
    const { t } = useTranslation();
    useDocumentTitle('SP - ' + t('nav.contact', { defaultValue: 'Contact' }));
    
    const email = "mateoluque@aol.com";

    return (
        <>
            <SEO
                title={`SP - ${t('nav.contact', { defaultValue: 'Contact' })}`}
                description={t('contact.description', { defaultValue: 'Contactez-moi' })}
                lang={lang || 'fr'}
            />
            <div className="p-2 sm:p-4 md:p-6 flex flex-col items-center">
            <section className="flex flex-col items-center text-center mt-4 sm:mt-6 lg:mt-8 max-w-3xl">
                <motion.h1
                    className="text-5xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-tight"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    {t('contact.title')}
                </motion.h1>
                <motion.p
                    className="text-lg text-gray-600 dark:text-stone-400 leading-relaxed mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {t('contact.description')}
                </motion.p>
            </section>

            <section className="mt-12 sm:mt-16 w-full max-w-4xl px-4">
                <motion.div
                    className="bg-white/70 dark:bg-white/5 backdrop-blur-md shadow-2xl border border-white/20 dark:border-white/10 rounded-3xl p-8 sm:p-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8 font-heading">
                        {t('contact.info.title')}
                    </h2>
                    <p className="text-xl text-gray-700 dark:text-gray-200 mb-8 font-medium">
                        {t('contact.info.details')}
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-12">
                        <a
                            href={`mailto:${email}`}
                            className="px-8 py-3 rounded-full bg-indigo-600 text-white font-semibold shadow-lg hover:bg-indigo-700 hover:-translate-y-1 transition-all"
                        >
                            {t('contact.send_email', { defaultValue: 'Send Email' })}
                        </a>
                    </div>

                    <div className="mt-16 pt-8 border-t border-gray-200 dark:border-white/10">
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 font-heading">
                            {t('contact.social')}
                        </h3>
                        <div className="flex justify-center gap-6">
                            <a
                                href="https://github.com/Sqwado"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub Profile"
                                className="p-4 rounded-full bg-white dark:bg-black/20 text-gray-700 dark:text-stone-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:scale-110 shadow-sm hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                <FaGithub size={32} aria-hidden="true" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/mateo-luque/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn Profile"
                                className="p-4 rounded-full bg-white dark:bg-black/20 text-gray-700 dark:text-stone-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:scale-110 shadow-sm hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                <FaLinkedin size={32} aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
        </>
    );
};

export default Contact;
