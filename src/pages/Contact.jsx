import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    const { t } = useTranslation();

    // Define email and phone number as constants
    const email = "mateoluque@aol.com";
    const phoneNumber = "+33609604750";

    return (
        <div className="p-4 sm:p-6 md:p-8 flex flex-col items-center">
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

            {/* Contact Information */}
            <section className="mt-8 sm:mt-12 lg:mt-16 w-full max-w-4xl">
                <h2 className="text-4xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                    {t('contact.info.title')}
                </h2>
                <motion.p className="text-gray-700 dark:text-stone-300 text-lg text-center mb-4">
                    {t('contact.info.details')}
                </motion.p>
                <div className="bg-white dark:bg-stone-800 shadow-lg rounded-lg p-8 text-center">
                    <motion.p
                        className="text-gray-700 dark:text-stone-300 mb-4 text-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <strong>{t('contact.info.email')}</strong>:
                        <a
                            href={`mailto:${email}`}
                            className="text-gray-800 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-400 transition duration-200 ml-1 underline"
                        >
                            {email}
                        </a>
                    </motion.p>
                    <motion.p
                        className="text-gray-700 dark:text-stone-300 mb-4 text-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <strong>{t('contact.info.phone')}</strong>:
                        <a
                            href={`tel:${phoneNumber}`}
                            className="text-gray-800 dark:text-gray-300 hover:text-gray-600 dark:hover:text-gray-400 transition duration-200 ml-1 underline"
                        >
                            {phoneNumber}
                        </a>
                    </motion.p>
                </div>
            </section>

            {/* Social Links */}
            <section className="mt-8 sm:mt-12 lg:mt-16 w-full max-w-4xl">
                <h2 className="text-4xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                    {t('contact.social')}
                </h2>
                <div className="flex justify-center space-x-6">
                    <a
                        href="https://github.com/Sqwado"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 dark:text-stone-300 hover:text-gray-600 dark:hover:text-gray-400 transition duration-200"
                    >
                        <FaGithub size={32} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/mateo-luque/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 dark:text-stone-300 hover:text-gray-600 dark:hover:text-gray-400 transition duration-200"
                    >
                        <FaLinkedin size={32} />
                    </a>
                </div>
            </section>
        </div>
    );
};

export default Contact;
