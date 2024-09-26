import { useLocation, Link } from 'react-router-dom';

const RedirectWithLang = ({ to, ...props }) => {
    const location = useLocation();
    const lang = location.pathname.split('/')[1]; // Extraire la langue de l'URL
    const newPath = `/${lang}${to}`; // Créer le nouveau chemin avec la langue

    return <Link to={newPath} {...props} />;
};

export default RedirectWithLang;
