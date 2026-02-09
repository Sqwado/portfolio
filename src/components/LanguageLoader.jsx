import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LoadingSpinner from './LoadingSpinner';
import { SUPPORTED_LANGUAGES, LANGUAGE_SWITCH_DELAY } from '../constants';

const LanguageLoader = ({ children }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const { i18n } = useTranslation();

    // Determine initial loading state
    const [isLoading, setIsLoading] = useState(() => {
        const urlLang = window.location.pathname.split('/')[1];
        // If URL lang exists, is supported, and differs from current i18n lang, start loading
        return urlLang && SUPPORTED_LANGUAGES.includes(urlLang) && i18n.language !== urlLang;
    });

    useEffect(() => {
        const lang = location.pathname.split('/')[1];

        if (!lang) {
            navigate('/fr' + location.pathname, { replace: true });
            return;
        }

        if (!SUPPORTED_LANGUAGES.includes(lang)) {
            // Check if it's the root path or invalid lang
            navigate('/fr', { replace: true });
            return;
        }

        if (i18n.language !== lang) {
            setIsLoading(true);
            i18n.changeLanguage(lang).then(() => {
                // Optimized timeout for language switch animation
                setTimeout(() => setIsLoading(false), LANGUAGE_SWITCH_DELAY);
            }).catch(() => {
                // Handle error gracefully
                setIsLoading(false);
            });
        } else {
            // If languages match, ensure loading is off
            setIsLoading(false);
        }
    }, [location.pathname, i18n, navigate]);

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-full min-h-[50vh]">
                <LoadingSpinner />
            </div>
        );
    }

    return children;
};

LanguageLoader.propTypes = {
    children: PropTypes.node.isRequired,
};

export default LanguageLoader;
