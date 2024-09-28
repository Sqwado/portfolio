import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

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
            className="relative mb-12 pl-12 bg-white dark:bg-stone-800 rounded-lg p-4 shadow-lg"
        >
            {/* Cercle avec icône */}
            <div className={`absolute flex items-center justify-center w-10 h-10 ${doneClass} rounded-full top-1/2 transform -translate-y-1/2 left-0 ring-8 ring-white dark:ring-stone-800`}>
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d={iconPath} clipRule="evenodd" />
                </svg>
            </div>

            {/* Titre avec effet de fade-in */}
            <motion.h3
                className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white"
                initial={{ opacity: 0, x: -20 }} // Initially hidden
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -20 }} // Fade in when in view
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                {title}
            </motion.h3>

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

export default ExpLine;
