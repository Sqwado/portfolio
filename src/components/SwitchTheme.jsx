import { FiSun, FiMoon } from 'react-icons/fi'; // Import des icônes
import { useTheme } from '../context/ThemeContext'; // Import du contexte
import { motion } from 'framer-motion'; // Importer motion de Framer Motion

const SwitchTheme = () => {
    const { isDarkMode, toggleTheme } = useTheme(); // Utiliser le contexte

    // Animation variants
    const buttonVariants = {
        initial: { rotate: 0, scale: 1 },
        hover: { scale: 1.1, rotate: 15 },
        tap: { scale: 0.95, rotate: -15, backgroundColor: '#f3f4f6' }, // Slightly scale down on tap
        transition: { type: 'spring', stiffness: 300 },
    };

    return (
        <motion.button
            onClick={toggleTheme}
            aria-label="Toggle Dark Mode"
            className="relative p-2 transition-all rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500"
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            transition={buttonVariants.transition}
        >
            {isDarkMode ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }} // Smooth transition for icon change
                >
                    <FiMoon className="w-6 h-6 text-yellow-300" /> {/* Icône pour le mode sombre */}
                </motion.div>
            ) : (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }} // Smooth transition for icon change
                >
                    <FiSun className="w-6 h-6 text-gray-900" /> {/* Icône pour le mode clair */}
                </motion.div>
            )}

            {/* Click feedback animation */}
            <motion.div
                className="absolute inset-0 rounded-full bg-opacity-50"
                initial={{ scale: 0 }}
                animate={isDarkMode ? { scale: isDarkMode ? 1 : 0 } : { scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.3 }}
            />
        </motion.button>
    );
};

export default SwitchTheme;
