import { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Composant d'image avec fallback en cas d'erreur de chargement
 * @param {string} src - URL de l'image principale
 * @param {string} fallbackSrc - URL de l'image de secours (optionnel)
 * @param {string} alt - Texte alternatif pour l'image
 * @param {string} className - Classes CSS à appliquer
 * @param {object} ...props - Autres props à passer à l'élément img
 */
const ImageWithFallback = ({ src, fallbackSrc = null, alt, className = '', ...props }) => {
    const [imgSrc, setImgSrc] = useState(src);
    const [hasError, setHasError] = useState(false);

    const handleError = () => {
        if (!hasError && fallbackSrc) {
            setImgSrc(fallbackSrc);
            setHasError(true);
        } else if (!hasError) {
            // Utiliser une image placeholder si aucun fallback n'est fourni
            setImgSrc('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23ddd" width="400" height="300"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="18" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EImage non disponible%3C/text%3E%3C/svg%3E');
            setHasError(true);
        }
    };

    return (
        <img
            src={imgSrc}
            alt={alt}
            className={className}
            onError={handleError}
            loading="lazy"
            {...props}
        />
    );
};

ImageWithFallback.propTypes = {
    src: PropTypes.string.isRequired,
    fallbackSrc: PropTypes.string,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default ImageWithFallback;
