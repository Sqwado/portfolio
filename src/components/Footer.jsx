import { useTranslation } from 'react-i18next'; // Pour la gestion de la traduction
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Footer = () => {
    const { t } = useTranslation(); // Hook pour accéder aux traductions

    // Use inView to detect when the component is in view
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <motion.footer
            ref={ref} // Set the ref to the motion footer
            initial={{ opacity: 0, y: 20 }} // Initially hidden (slightly above)
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 10 }} // Fade in and slide up
            transition={{ duration: 0.6, ease: [0.5, 0, 0.5, 1] }} // Animation duration with easing
            className="bg-white/50 dark:bg-black/50 backdrop-blur-sm border-t border-gray-200 dark:border-gray-800 p-8 text-center mt-auto"
        >
            <p className="text-gray-600 dark:text-stone-300">
                &copy; {new Date().getFullYear()} {t('footer.text', { defaultValue: 'Mon Blog. Tous droits réservés.' })}
            </p>
        </motion.footer>
    );
};

export default Footer;
