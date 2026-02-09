import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';
import AnimatedBackground from './AnimatedBackground';
import { SCROLL_THRESHOLD } from '../constants';

const Layout = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();

    const toggleVisibility = useCallback(() => {
        if (window.pageYOffset > SCROLL_THRESHOLD) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, []);

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location.pathname]);

    const scrollToTop = useCallback(() => {
        // Fonction de scroll fluide avec easing
        const startPosition = window.pageYOffset;
        const startTime = performance.now();
        const duration = 600; // Durée en millisecondes
        
        const easeInOutCubic = (t) => {
            return t < 0.5 
                ? 4 * t * t * t 
                : 1 - Math.pow(-2 * t + 2, 3) / 2;
        };
        
        const animateScroll = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easeInOutCubic(progress);
            
            window.scrollTo(0, startPosition * (1 - easedProgress));
            
            if (progress < 1) {
                window.requestAnimationFrame(animateScroll);
            }
        };
        
        window.requestAnimationFrame(animateScroll);
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility, { passive: true });
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, [toggleVisibility]);

    return (
        <main className="App min-h-screen bg-slate-50 dark:bg-[#050505] text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
            {/* Skip link for accessibility */}
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-indigo-600 focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
                Aller au contenu principal
            </a>
            
            <AnimatedBackground />

            <div id="main-content" className="relative z-10 flex flex-col min-h-screen">
                <Navbar />
                <div className="flex-grow pt-20 sm:pt-24">
                    <Outlet />
                    {children}
                </div>
                <Footer />
            </div>

            {isVisible && (
                <motion.button
                    onClick={scrollToTop}
                    aria-label="Retour en haut de la page"
                    className="fixed bottom-8 right-8 p-4 bg-indigo-600/80 backdrop-blur-md text-white rounded-full shadow-2xl hover:bg-indigo-500 hover:scale-110 active:scale-95 transition-all z-50 border border-indigo-400/30 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    initial={{ opacity: 0, scale: 0, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0, y: 20 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                </motion.button>
            )}
        </main>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
