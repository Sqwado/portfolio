import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

import PropTypes from 'prop-types';

const ExpLine = ({ exp }) => {
    const { title, description, done } = exp;

    const doneClass = done ? 'bg-green-500' : 'bg-orange-500';
    const iconPath = done
        ? "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-11.707a1 1 0 00-1.414-1.414L9 8.586 7.707 7.293a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        : "M10 2a8 8 0 100 16 8 8 0 000-16zm1 8a1 1 0 01-1 1H7a1 1 0 110-2h2V5a1 1 0 112 0v5z";

    // Use inView to detect when the component is in view
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <motion.div
            ref={ref} // Set the ref to the motion div
            // Animation d'apparition
            initial={{ opacity: 0, y: 50, scale: 0.95 }} // Initially hidden
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50, scale: inView ? 1 : 0.95 }} // Fade in when in view
            transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}

            // Style pour alignement et espacement
            className="relative mb-12 sm:pl-20 bg-white/30 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-center"
        >
            {/* Cercle avec icône - Desktop: absolute à gauche */}
            <div className={`hidden sm:flex absolute items-center justify-center ml-4 w-12 h-12 ${doneClass} rounded-full top-1/2 transform -translate-y-1/2 left-0 ring-4 ring-white/50 dark:ring-white/10 shadow-lg`}>
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d={iconPath} clipRule="evenodd" />
                </svg>
            </div>

            {/* Conteneur pour icône et titre sur mobile */}
            <div className="flex sm:block items-center gap-3 mb-0 sm:mb-0">
                {/* Cercle avec icône - Mobile: inline avec titre */}
                <div className={`flex sm:hidden items-center justify-center w-12 h-12 ${doneClass} rounded-full ring-4 ring-white/50 dark:ring-white/10 shadow-lg flex-shrink-0`}>
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d={iconPath} clipRule="evenodd" />
                    </svg>
                </div>

                {/* Titre avec effet de fade-in */}
                <motion.h3
                    className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white flex-1 sm:flex-none"
                    initial={{ opacity: 0, x: -20 }} // Initially hidden
                    animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }} // Fade in when in view
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    {title}
                </motion.h3>
            </div>

            {/* Description avec effet similaire */}
            <motion.p
                className="mt-2 text-gray-600 dark:text-stone-300 text-sm sm:text-base"
                initial={{ opacity: 0, x: -20 }} // Initially hidden
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }} // Fade in when in view
                transition={{ delay: 0.4, duration: 0.5 }}
            >
                {description}
            </motion.p>
        </motion.div>
    );
};

ExpLine.propTypes = {
    exp: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        done: PropTypes.bool.isRequired,
    }).isRequired,
};

export default ExpLine;
