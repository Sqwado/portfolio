
import { useTranslation } from 'react-i18next';
import RedirectWithLang from './RedirectWithLang';
import SwitchTheme from './SwitchTheme';
import SwitchLanguage from './SwitchLanguage';

const Navbar = () => {
    const { t } = useTranslation();

    return (
        <nav className="bg-white dark:bg-stone-900 p-4 shadow-md w-full">
            <div className="flex justify-between items-center">
                <div className="flex space-x-4">
                    <RedirectWithLang to="/" className="text-gray-900 dark:text-white hover:underline">{t('nav.home')}</RedirectWithLang>
                    <RedirectWithLang to="/contact" className="text-gray-900 dark:text-white hover:underline">{t('nav.contact')}</RedirectWithLang>
                    <RedirectWithLang to="/enterprises" className="text-gray-900 dark:text-white hover:underline">{t('nav.enterprises')}</RedirectWithLang>
                </div>
                <div className="flex items-center space-x-2">
                    <SwitchTheme />
                    <SwitchLanguage />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
