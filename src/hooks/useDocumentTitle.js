import { useEffect } from 'react';

/**
 * Hook personnalisé pour mettre à jour le titre du document
 * @param {string} title - Le titre à afficher dans l'onglet du navigateur
 */
export const useDocumentTitle = (title) => {
    useEffect(() => {
        const previousTitle = document.title;
        document.title = title;
        
        // Nettoyage : restaurer le titre précédent si le composant est démonté
        return () => {
            document.title = previousTitle;
        };
    }, [title]);
};
