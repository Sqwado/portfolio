
import { motion } from 'framer-motion';

const LoadingSpinner = () => {
    return (
        <div className="flex justify-center items-center py-20">
            <motion.div
                className="relative w-20 h-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                {/* Outer Ring */}
                <motion.div
                    className="absolute inset-0 border-4 border-indigo-200 dark:border-indigo-900 rounded-full"
                    style={{ borderTopColor: 'transparent' }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />

                {/* Middle Ring */}
                <motion.div
                    className="absolute inset-2 border-4 border-purple-400 dark:border-purple-600 rounded-full"
                    style={{ borderTopColor: 'transparent' }}
                    animate={{ rotate: -360 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />

                {/* Inner Dot */}
                <motion.div
                    className="absolute inset-8 bg-indigo-600 dark:bg-indigo-400 rounded-full"
                    animate={{ scale: [0.8, 1.2, 0.8] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                />
            </motion.div>
        </div>
    );
};

export default LoadingSpinner;
