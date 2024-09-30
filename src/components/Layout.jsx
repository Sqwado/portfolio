import { Outlet } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';

const Layout = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <main className="App bg-gradient-to-br from-gray-100 to-stone-300 dark:bg-gradient-to-br dark:from-stone-800 dark:to-black">
            <div>
                <Navbar />
                <Outlet />
                {children}
            </div>
            <Footer />
            {isVisible && (
                <motion.button
                    onClick={scrollToTop}
                    className="fixed bottom-5 right-5 p-3 bg-blue-500 text-white rounded-full shadow-lg"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    ↑
                </motion.button>
            )}
        </main>
    );
};

export default Layout;
