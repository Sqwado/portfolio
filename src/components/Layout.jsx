
import { Outlet } from "react-router-dom"
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <main className="App bg-gradient-to-br from-gray-100 to-stone-300 dark:bg-gradient-to-br dark:from-stone-800 dark:to-black">
            <div>
                <Navbar />
                <Outlet />
                {children}
            </div>
            <Footer />
        </main>
    );
};

export default Layout;

