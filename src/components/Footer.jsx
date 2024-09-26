import React from 'react';
import { useTranslation } from 'react-i18next'; // Pour la gestion de la traduction

const Footer = () => {
    const { t } = useTranslation(); // Hook pour accéder aux traductions

    return (
        <footer className="bg-white dark:bg-stone-900 p-4 text-center">
            <p className="text-gray-600 dark:text-stone-300">
                &copy; {new Date().getFullYear()} {t('footer_text', { defaultValue: 'Mon Blog. Tous droits réservés.' })}
            </p>
        </footer>
    );
};

export default Footer;
