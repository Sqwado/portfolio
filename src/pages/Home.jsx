import { useTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router-dom';
import profilePic from '../assets/profile.jpg';
import splitStringUsingRegex from '../utils/splitStringUsingRegex';
import { motion } from 'framer-motion';
import ExpLine from '../components/ExpLine';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import SEO from '../components/SEO';
import ImageWithFallback from '../components/ImageWithFallback';



const Home = () => {
    const { lang } = useParams();
    const { t } = useTranslation();
    useDocumentTitle('SP - ' + t('nav.home', { defaultValue: 'Home' }));
    
    const pageTitle = t('nav.home', { defaultValue: 'Home' });
    const pageDescription = t('home.main.intro', { defaultValue: 'Portfolio personnel' });
    
    const experiences = t('home.experience.xps', { returnObjects: true });

    // Create refs for each section to manage in-view state
    const { ref: titleRef, inView: titleInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: introRef, inView: introInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: experienceRef, inView: experienceInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: skillsRef, inView: skillsInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: blogRef, inView: blogInView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <>
            <SEO 
                title={`SP - ${pageTitle}`}
                description={pageDescription}
                lang={lang || 'fr'}
                image={profilePic}
            />
            <div className="p-4 sm:p-6 md:p-8 flex flex-col items-center">
            {/* Section présentation */}
            {/* Section présentation */}
            <section ref={titleRef} className="flex flex-col items-center text-center mt-8 sm:mt-12 lg:mt-16 max-w-4xl px-4">
                <motion.div
                    className="relative mb-8"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="absolute inset-0 bg-indigo-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                    <ImageWithFallback
                        src={profilePic}
                        alt={t('home.main.name', { defaultValue: 'Profile picture' })}
                        className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full shadow-2xl object-cover ring-4 ring-white/50 dark:ring-white/10"
                    />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: titleInView ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 mb-4 tracking-tight"
                >
                    {splitStringUsingRegex(t('home.main.name')).map((char, index) => (
                        <motion.span key={index} initial={{ opacity: 0 }} animate={{ opacity: titleInView ? 1 : 0 }} transition={{ duration: 0.5 }}>
                            {char}
                        </motion.span>
                    ))}
                </motion.h1>

                <h2 className="text-2xl sm:text-3xl font-medium text-indigo-600 dark:text-indigo-400 mb-8 font-heading">
                    {t('home.main.profession')}
                </h2>

                <motion.p
                    ref={introRef}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: introInView ? 1 : 0, y: introInView ? 0 : 20 }}
                    transition={{ duration: 0.5 }}
                    className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed mb-8"
                >
                    {splitStringUsingRegex(t('home.main.intro')).map((char, index) => (
                        <motion.span key={index} initial={{ opacity: 0 }} animate={{ opacity: introInView ? 1 : 0 }} transition={{ duration: 0.35 }}>
                            {char}
                        </motion.span>
                    ))}
                </motion.p>

                {/* Social Links and CV Button */}
                <div className="flex flex-wrap justify-center gap-4">
                    <motion.a
                        href="https://github.com/Sqwado"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Profile"
                        className="flex items-center justify-center p-4 rounded-full bg-white/80 dark:bg-white/5 backdrop-blur-md shadow-lg border border-white/20 dark:border-white/10 text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 hover:scale-110 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        whileHover={{ scale: 1.1 }}>
                        <FaGithub size={24} aria-hidden="true" />
                    </motion.a>
                    <motion.a
                        href="https://www.linkedin.com/in/mateo-luque/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn Profile"
                        className="flex items-center justify-center p-4 rounded-full bg-white/80 dark:bg-white/5 backdrop-blur-md shadow-lg border border-white/20 dark:border-white/10 text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 hover:scale-110 transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        whileHover={{ scale: 1.1 }}>
                        <FaLinkedin size={24} aria-hidden="true" />
                    </motion.a>
                    <motion.a
                        href="/CV_Mateo_Luque.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-8 py-3 rounded-full bg-indigo-600 text-white font-semibold shadow-lg shadow-indigo-500/30 hover:bg-indigo-700 hover:shadow-indigo-500/50 hover:-translate-y-1 transition-all"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}>
                        {t('download_cv')}
                    </motion.a>
                </div>
            </section>

            {/* Section parcours */}
            <section ref={experienceRef} className="mt-20 sm:mt-32 w-full max-w-4xl px-4">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center font-heading">
                    {t('home.experience.title')}
                </h2>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: experienceInView ? 1 : 0 }}
                    transition={{ duration: 0.5 }}>
                    <div className="relative">
                        {/* Barre verticale */}
                        <div className="absolute top-0 left-4 sm:left-8 w-1 h-full bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent rounded-full opacity-30"></div>

                        {/* Conteneur pour les expériences avec un padding gauche responsive */}
                        <div className="pl-12 sm:pl-20">
                            {experiences.map((exp, index) => (
                                <ExpLine key={index} exp={exp} />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Section compétences */}
            <section ref={skillsRef} className="mt-20 sm:mt-32 w-full max-w-5xl px-4">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center font-heading">
                    {t('home.skills.title')}
                </h2>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: skillsInView ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3].map((skill, index) => (
                        <motion.div key={index}
                            className="bg-white/70 dark:bg-white/5 backdrop-blur-md shadow-xl border border-white/20 dark:border-white/10 rounded-2xl p-8 hover:shadow-2xl hover:border-indigo-500/30 transition-all duration-300 group"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: skillsInView ? 1 : 0, y: skillsInView ? 0 : 20 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}>
                            <p className="text-lg font-medium text-gray-700 dark:text-gray-200 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                {t(`home.skills.skill${skill}`)}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Section blog */}
            {/* Section blog */}
            <section ref={blogRef} className="mt-20 sm:mt-32 w-full max-w-5xl px-4 mb-20">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center font-heading">
                    {t('home.blog_overview.title')}
                </h2>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: blogInView ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 dark:from-indigo-900/20 dark:to-purple-900/20 backdrop-blur-md shadow-xl border border-indigo-500/10 rounded-3xl p-8 text-center"
                >
                    <p className="text-xl text-gray-700 dark:text-gray-200 mb-8 max-w-3xl mx-auto">
                        {t('home.blog_overview.description')}
                    </p>
                    <Link
                        to={`/${lang}/articles`}
                        className="inline-block"
                    >
                        <motion.div
                            className="px-8 py-3 rounded-full bg-white dark:bg-white/10 text-indigo-600 dark:text-white font-semibold shadow-lg hover:bg-indigo-50 dark:hover:bg-white/20 transition-all"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {t('nav.articles')}
                        </motion.div>
                    </Link>
                </motion.div>
            </section>
        </div>
        </>
    );
};

export default Home;
