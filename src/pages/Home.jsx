import { useTranslation } from 'react-i18next';
import profilePic from '../assets/profile.jpg';
import splitStringUsingRegex from '../utils/splitStringUsingRegex';
import { motion } from 'framer-motion';
import ExpLine from '../components/ExpLine';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

const textStyles = "text-gray-700 dark:text-stone-300";

const Home = () => {
    const { t } = useTranslation();
    const experiences = t('home.experience.xps', { returnObjects: true });

    // Create refs for each section to manage in-view state
    const { ref: titleRef, inView: titleInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: introRef, inView: introInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: experienceRef, inView: experienceInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: skillsRef, inView: skillsInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: blogRef, inView: blogInView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <div className="p-4 sm:p-6 md:p-8 flex flex-col items-center">
            {/* Section présentation */}
            <section ref={titleRef} className="flex flex-col items-center text-center mt-4 sm:mt-6 lg:mt-8 max-w-3xl">
                <motion.img
                    src={profilePic}
                    alt="Profile"
                    className="w-36 h-36 rounded-3xl shadow-xl mb-6 object-cover ring-4 ring-white dark:ring-stone-700"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }} />

                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: titleInView ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-5xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-tight">
                    {splitStringUsingRegex(t('home.main.name')).map((char, index) => (
                        <motion.span key={index} initial={{ opacity: 0 }} animate={{ opacity: titleInView ? 1 : 0 }} transition={{ duration: 0.5 }}>
                            {char}
                        </motion.span>
                    ))}
                </motion.h1>

                <h2 className="text-xl font-medium text-gray-700 dark:text-stone-300 mb-6">
                    {t('home.main.profession')}
                </h2>

                <motion.p
                    ref={introRef}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: introInView ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-lg text-gray-600 dark:text-stone-400 max-w-2xl leading-relaxed mb-4">
                    {splitStringUsingRegex(t('home.main.intro')).map((char, index) => (
                        <motion.span key={index} initial={{ opacity: 0 }} animate={{ opacity: introInView ? 1 : 0 }} transition={{ duration: 0.35 }}>
                            {char}
                        </motion.span>
                    ))}
                </motion.p>

                {/* Center Align Social Links and CV Button */}
                <div className="flex flex-col sm:flex-row justify-center space-x-4 mt-4">
                    <motion.a
                        href="https://github.com/Sqwado"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center ${textStyles} rounded-lg p-3 transition duration-200 
                        bg-white dark:bg-stone-800 shadow-md hover:shadow-lg hover:scale-105 
                        transform`}
                        whileHover={{ scale: 1.1 }}
                    >
                        <FaGithub size={24} />
                    </motion.a>
                    <motion.a
                        href="https://www.linkedin.com/in/mateo-luque/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center ${textStyles} rounded-lg p-3 transition duration-200 
                        bg-white dark:bg-stone-800 shadow-md hover:shadow-lg hover:scale-105 
                        transform`}
                        whileHover={{ scale: 1.1 }}
                    >
                        <FaLinkedin size={24} />
                    </motion.a>
                    {/* CV Button */}
                    <motion.a
                        href="/CV_Mateo_Luque.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center ${textStyles} rounded-lg p-3 transition duration-200 
                        bg-white dark:bg-stone-800 shadow-md hover:shadow-lg hover:scale-105 
                        transform`}
                        initial={{ opacity: 0, scale: 0 }} // Set to hidden
                        animate={{ opacity: 1, scale: 1 }} // Fade in when in view
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.05, boxShadow: "0 8px 25px rgba(0, 0, 0, 0.3)" }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {t('download_cv')}
                    </motion.a>
                </div>
            </section>

            {/* Section parcours */}
            <section ref={experienceRef} className="mt-8 sm:mt-12 lg:mt-16 w-full max-w-4xl">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                    {t('home.experience.title')}
                </h2>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: experienceInView ? 1 : 0 }}
                    transition={{ duration: 0.5 }}>
                    <div className="relative">
                        {/* Barre verticale */}
                        <div className="absolute top-0 left-5 w-2 h-full bg-gray-300 dark:bg-stone-700 rounded-full shadow-md"></div>

                        {/* Conteneur pour les expériences avec un padding gauche responsive */}
                        <div className="pl-8 sm:pl-12 md:pl-16 lg:pl-20">
                            {experiences.map((exp, index) => (
                                <ExpLine key={index} exp={exp} />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Section compétences */}
            <section ref={skillsRef} className="mt-8 sm:mt-12 lg:mt-16 w-full max-w-4xl">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                    {t('home.skills.title')}
                </h2>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: skillsInView ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3].map((skill, index) => (
                        <motion.div key={index} className="bg-white dark:bg-stone-800 shadow-lg rounded-lg p-6 text-center transform transition-transform duration-300 hover:scale-105"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: skillsInView ? 1 : 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}>
                            <p className={textStyles}>
                                {t(`home.skills.skill${skill}`)}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Section blog */}
            <section ref={blogRef} className="mt-8 sm:mt-12 lg:mt-16 w-full max-w-4xl">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                    {t('home.blog_overview.title')}
                </h2>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: blogInView ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white dark:bg-stone-800 shadow-lg rounded-lg p-6">
                    <p className={textStyles}>
                        {t('home.blog_overview.description')}
                    </p>
                </motion.div>
            </section>
        </div>
    );
};

export default Home;
