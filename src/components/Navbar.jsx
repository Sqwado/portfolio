import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import RedirectWithLang from './RedirectWithLang';
import SwitchTheme from './SwitchTheme';
import SwitchLanguage from './SwitchLanguage';
import { motion, AnimatePresence } from 'framer-motion';
import { MdMenu, MdClose } from 'react-icons/md';

const Navbar = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const closeDrawer = useCallback(() => {
        setDrawerOpen(false);
    }, []);

    // Handler pour fermer le drawer et naviguer
    const handleNavClick = useCallback((path) => {
        const lang = location.pathname.split('/')[1];
        const newPath = `/${lang}${path}`;
        closeDrawer();
        // Utiliser setTimeout pour s'assurer que le drawer se ferme avant la navigation
        setTimeout(() => {
            navigate(newPath);
        }, 100);
    }, [location.pathname, navigate, closeDrawer]);

    const toggleDrawer = useCallback(() => {
        setDrawerOpen(prev => !prev);
    }, []);

    // Initialiser isMobile au montage
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 960);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Fermer le drawer si on passe en mode desktop
    useEffect(() => {
        if (!isMobile && drawerOpen) {
            closeDrawer();
        }
    }, [isMobile, drawerOpen, closeDrawer]);

    // Gérer le scroll du body quand le drawer est ouvert
    useEffect(() => {
        if (drawerOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [drawerOpen]);

    // Forcer la fermeture du drawer au chargement initial et à chaque changement de route
    useEffect(() => {
        if (drawerOpen) {
            setDrawerOpen(false);
        }
    }, [location.pathname, location.key]);

    // Fonction pour déterminer si un lien est actif
    const isActive = (path) => {
        const pathSegments = location.pathname.split('/').filter(Boolean);
        const targetSegments = path.split('/').filter(Boolean);
        
        // Pour la page d'accueil "/"
        if (path === '/') {
            // La route actuelle est juste la langue (ex: "/fr" ou "/en")
            return pathSegments.length === 1;
        }
        
        // Pour les autres pages, comparer le segment après la langue
        // Ex: "/fr/enterprises" -> pathSegments = ["fr", "enterprises"]
        //     "/enterprises" -> targetSegments = ["enterprises"]
        if (pathSegments.length >= 2) {
            return pathSegments[1] === targetSegments[0];
        }
        
        return false;
    };

    const menuItems = [
        { to: "/", text: t('nav.home') },
        { to: "/enterprises", text: t('nav.enterprises') },
        { to: "/articles", text: t('nav.articles') },
        { to: "/contact", text: t('nav.contact') },
    ];

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.5, 0, 0.5, 1] }}>
                <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isMobile ? 'bg-white/90 dark:bg-stone-900/90 backdrop-blur-md' : 'bg-white/70 dark:bg-[#050505]/70 backdrop-blur-md border-b border-white/20 dark:border-white/5'}`}>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-20">
                            {/* Logo */}
                            <RedirectWithLang to="/" className="flex items-center space-x-2 group">
                                <img src="/sqwado_2.0_black_slim.png" alt="Logo" className="h-10 rounded-lg transition-transform transform group-hover:scale-105 shadow-sm" />
                            </RedirectWithLang>

                            {/* Desktop Menu */}
                            {!isMobile && (
                                <div className="flex-grow flex justify-center items-center">
                                    <div className="flex space-x-8">
                                        {menuItems.map((item, index) => {
                                            const active = isActive(item.to);
                                            const isHovered = hoveredIndex === index;
                                            const showActive = active && hoveredIndex === null;
                                            return (
                                                <RedirectWithLang 
                                                    key={index} 
                                                    to={item.to}
                                                    onMouseEnter={() => setHoveredIndex(index)}
                                                    onMouseLeave={() => setHoveredIndex(null)}
                                                    className={`relative px-3 py-2 text-sm font-medium transition-colors group focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded ${
                                                        showActive || isHovered
                                                            ? 'text-indigo-600 dark:text-indigo-400 font-semibold' 
                                                            : 'text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400'
                                                    }`}
                                                >
                                                    {item.text}
                                                    <span className={`absolute inset-x-0 bottom-0 h-0.5 bg-indigo-600 dark:bg-indigo-400 transition-transform origin-left ${
                                                        showActive || isHovered ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                                                    }`}></span>
                                                </RedirectWithLang>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}

                            {/* Theme and Language Switchers */}
                            <div className="flex items-center space-x-4">
                                {!isMobile && (
                                    <>
                                        <SwitchTheme />
                                        <SwitchLanguage />
                                    </>
                                )}

                                {/* Mobile Menu Toggle Button */}
                                {isMobile && (
                                    <button
                                        onClick={toggleDrawer}
                                        className="p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-white/20"
                                        aria-label={drawerOpen ? "Fermer le menu" : "Ouvrir le menu"}
                                        aria-expanded={drawerOpen}
                                    >
                                        {drawerOpen ? (
                                            <MdClose size={28} aria-hidden="true" />
                                        ) : (
                                            <MdMenu size={28} aria-hidden="true" />
                                        )}
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Mobile Drawer - Rendu en dehors du motion.div pour éviter les problèmes de z-index */}
            <AnimatePresence mode="wait">
                {drawerOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            key="backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            onClick={closeDrawer}
                            className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm"
                        />
                        {/* Drawer Panel */}
                        <motion.div
                            key="drawer"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed inset-0 z-[70] w-full h-full bg-white dark:bg-stone-900 shadow-2xl flex flex-col"
                            role="dialog"
                            aria-modal="true"
                            aria-label="Menu de navigation"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Header aligné avec la navbar */}
                            <div className={`h-20 flex items-center justify-between px-4 sm:px-6 lg:px-8 border-b border-gray-200 dark:border-white/10 flex-shrink-0 bg-white/90 dark:bg-stone-900/90 backdrop-blur-md`}>
                                <button onClick={() => handleNavClick("/")} className="flex items-center space-x-2 group bg-white dark:bg-stone-900/90 p-2 rounded-lg transition-all group-hover:scale-105">
                                    <img src="/sqwado_2.0_black_slim.png" alt="Logo" className="h-10 rounded-lg transition-transform transform group-hover:scale-105 shadow-sm" />
                                </button>
                                <button
                                    onClick={closeDrawer}
                                    aria-label="Fermer le menu"
                                    className="p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-white/20"
                                >
                                    <MdClose size={28} aria-hidden="true" />
                                </button>
                            </div>
                            
                            <div className="px-6 pb-6 pt-6 flex-1 overflow-y-auto">
                                <div className="flex justify-between gap-4 mb-8">
                                    <div className="flex-1 flex justify-center"><SwitchTheme /></div>
                                    <div className="flex-1 flex justify-center"><SwitchLanguage /></div>
                                </div>

                                <nav className="flex flex-col space-y-4">
                                    {menuItems.map((item, index) => {
                                        const active = isActive(item.to);
                                        const isHovered = hoveredIndex === index;
                                        const showActive = active && hoveredIndex === null;
                                        return (
                                            <div key={index} className="w-full">
                                                <button
                                                    onClick={() => handleNavClick(item.to)}
                                                    onMouseEnter={() => setHoveredIndex(index)}
                                                    onMouseLeave={() => setHoveredIndex(null)}
                                                    className={`block w-full py-3 text-center text-lg font-medium rounded-xl transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
                                                        showActive || isHovered
                                                            ? 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/30 font-semibold'
                                                            : 'text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-stone-800/50 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50/50 dark:hover:bg-indigo-900/20'
                                                    }`}
                                                >
                                                    {item.text}
                                                </button>
                                                {index < menuItems.length - 1 && (
                                                    <div className="h-px bg-gray-200 dark:bg-white/10 mx-4 mt-2" />
                                                )}
                                            </div>
                                        );
                                    })}
                                </nav>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
