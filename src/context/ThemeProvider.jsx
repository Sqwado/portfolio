import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from './ThemeContext';

export const ThemeProvider = ({ children }) => {
    const getDefaultTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme === 'dark';
        }
        // Check the system's theme preference
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    };

    const [isDarkMode, setIsDarkMode] = useState(getDefaultTheme);

    useEffect(() => {
        // Listen for system theme changes and update accordingly
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleSystemThemeChange = (e) => {
            setIsDarkMode(e.matches);
        };

        mediaQuery.addListener(handleSystemThemeChange);

        return () => {
            mediaQuery.removeListener(handleSystemThemeChange);
        };
    }, []);

    useEffect(() => {
        // Apply the theme based on isDarkMode state
        document.documentElement.classList.toggle('dark', isDarkMode);
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode((prev) => !prev);
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
