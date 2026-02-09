/**
 * Formate une date selon la langue spécifiée
 * @param {string} dateString - La date au format ISO (ex: "2024-09-30")
 * @param {string} lang - La langue ('fr' ou 'en')
 * @returns {string} La date formatée selon la locale
 */
export const formatDate = (dateString, lang = 'fr') => {
    const date = new Date(dateString);
    const locale = lang === 'fr' ? 'fr-FR' : 'en-US';
    return date.toLocaleDateString(locale, { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
};
