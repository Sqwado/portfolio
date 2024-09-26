// src/ThemeContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('theme') === 'dark');

    useEffect(() => {
        // Set the initial theme based on localStorage
        document.documentElement.classList.toggle('dark', isDarkMode);
    }, [isDarkMode]); // Add isDarkMode to dependency array to run when it changes

    const toggleTheme = () => {
        const newTheme = isDarkMode ? 'light' : 'dark';
        setIsDarkMode(prev => !prev); // Update state
        localStorage.setItem('theme', newTheme); // Update localStorage
        document.documentElement.classList.toggle('dark', newTheme === 'dark'); // Update class on document
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
