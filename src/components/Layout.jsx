
import { Outlet } from "react-router-dom"
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <main className="App">
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

