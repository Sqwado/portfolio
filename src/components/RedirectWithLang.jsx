import { useLocation, Link } from 'react-router-dom';

const RedirectWithLang = ({ to, ...props }) => {
    const location = useLocation();
    const lang = location.pathname.split('/')[1]; // Extract the language from the URL
    const newPath = `/${lang}${to}`; // Create the new path with the language

    // Check if the current path matches the new path
    const isActive = location.pathname.split('/')[2] === to.split('/')[1];

    // Define styles for active and inactive links
    const activeStyle = 'text-gray-900 dark:text-white font-bold';
    const inactiveStyle = 'text-gray-600 dark:text-stone-300';
    return (
        <Link to={newPath} className={`${isActive ? activeStyle : inactiveStyle} text-xl hover:text-gray-900 dark:hover:text-white transition duration-200 hover:bg-gray-200 dark:hover:bg-stone-800 rounded-lg px-2 py-1`} {...props} />
    );
};

export default RedirectWithLang;
