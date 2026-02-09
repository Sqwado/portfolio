import { useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * Composant SEO pour gérer les meta tags dynamiques
 * Note: Pour une solution plus complète, utiliser react-helmet-async
 */
const SEO = ({ title = '', description = '', lang = 'fr', image = '', type = 'website' }) => {
    useEffect(() => {
        // Mettre à jour le titre
        if (title) {
            document.title = title;
        }

        // Mettre à jour ou créer les meta tags
        const updateMetaTag = (name, content, attribute = 'name') => {
            if (!content) return;
            
            let element = document.querySelector(`meta[${attribute}="${name}"]`);
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute(attribute, name);
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        };

        // Meta description
        updateMetaTag('description', description);

        // Open Graph
        updateMetaTag('og:title', title, 'property');
        updateMetaTag('og:description', description, 'property');
        updateMetaTag('og:image', image, 'property');
        updateMetaTag('og:type', type, 'property');

        // Twitter Card
        updateMetaTag('twitter:card', 'summary_large_image');
        updateMetaTag('twitter:title', title);
        updateMetaTag('twitter:description', description);
        updateMetaTag('twitter:image', image);

        // Langue HTML
        if (lang) {
            document.documentElement.lang = lang;
        }
    }, [title, description, lang, image, type]);

    return null;
};

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    lang: PropTypes.string,
    image: PropTypes.string,
    type: PropTypes.string,
};

export default SEO;
