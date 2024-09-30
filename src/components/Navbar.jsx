import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import RedirectWithLang from './RedirectWithLang';
import SwitchTheme from './SwitchTheme';
import SwitchLanguage from './SwitchLanguage';
import { motion } from 'framer-motion';
import { Button, useMediaQuery } from '@mui/material';
import { SwipeableDrawer, IconButton, List, ListItem, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
    const { t } = useTranslation();
    const [drawerOpen, setDrawerOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width:960px)');

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    const closeDrawer = () => {
        setDrawerOpen(false); // Close the drawer
    };

    const menuItems = [
        { to: "/", text: t('nav.home') },
        { to: "/enterprises", text: t('nav.enterprises') },
        { to: "/articles", text: t('nav.articles') },
        { to: "/contact", text: t('nav.contact') },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.5, 0, 0.5, 1] }}>
            <div className="bg-white dark:bg-stone-900 shadow-lg">
                <div className="flex justify-between items-center p-4 md:p-6 gap-4">
                    {/* Logo */}
                    <RedirectWithLang to="/" className="flex items-center space-x-2">
                        <img src="/sqwado_2.0_black_slim.png" alt="Logo" className="h-10 rounded-lg transition-transform transform hover:scale-105" />
                    </RedirectWithLang>

                    {/* Desktop Menu */}
                    {!isMobile && (
                        <div className="flex-grow flex items-center space-x-6">
                            <div className="flex space-x-4">
                                {menuItems.map((item, index) => (
                                    <RedirectWithLang key={index} to={item.to}>
                                        {item.text}
                                    </RedirectWithLang>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Theme and Language Switchers */}
                    <div className="flex items-center space-x-2">
                        {!isMobile && (
                            <>
                                <SwitchTheme />
                                <SwitchLanguage />
                            </>
                        )}

                        {/* Mobile Menu Toggle Button */}
                        {isMobile && (
                            <IconButton
                                edge="end"
                                color="inherit"
                                aria-label="menu"
                                onClick={toggleDrawer(true)}>
                                <MenuIcon className="text-gray-900 dark:text-white" />
                            </IconButton>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Drawer */}
            <SwipeableDrawer
                anchor="right"
                open={drawerOpen}
                onOpen={toggleDrawer(true)}
                onClose={toggleDrawer(false)}
                sx={{
                    '& .MuiDrawer-paper': {
                        backgroundColor: 'white',
                        dark: 'dark:bg-stone-900',
                    },
                }}>
                <div
                    role="presentation"
                    className="bg-white dark:bg-stone-900 p-4 w-screen max-w-sm h-full flex flex-col items-start">
                    <div className="flex justify-between w-full mb-4">
                        {/* Drawer Logo */}
                        <RedirectWithLang to="/" className="flex items-center space-x-2">
                            <img src="/sqwado_2.0_black_slim.png" alt="Logo" className="h-10 rounded-lg transition-transform transform hover:scale-105" />
                        </RedirectWithLang>
                        {/* Close Drawer Button */}
                        <Button onClick={toggleDrawer(false)} className="p-0">
                            <CloseIcon className="text-gray-900 dark:text-white" />
                        </Button>
                    </div>

                    {/* Switchers inside Drawer */}
                    <div className="flex justify-around space-x-4 mb-4 w-full">
                        <SwitchTheme />
                        <SwitchLanguage />
                    </div>

                    {/* Drawer Menu Items */}
                    <div className="flex flex-col items-center w-full">
                        <List>
                            {menuItems.map((item, index) => (
                                <ListItem key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <RedirectWithLang to={item.to} onClick={closeDrawer}>
                                        {item.text}
                                    </RedirectWithLang>
                                </ListItem>
                            ))}
                        </List>
                        <Divider className="my-2" />
                    </div>
                </div>
            </SwipeableDrawer>
        </motion.div>
    );
};

export default Navbar;
