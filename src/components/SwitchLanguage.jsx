import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Select, MenuItem } from '@mui/material';
import { useTheme } from '../context/ThemeContext'; // Importer le contexte
import 'flag-icons/css/flag-icons.min.css';
import { useEffect } from 'react';

const SwitchLanguage = () => {
    const { i18n } = useTranslation();
    const navigate = useNavigate();
    const { isDarkMode } = useTheme(); // Utiliser le contexte

    const currentLang = window.location.pathname.split('/')[1] || 'en';

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        const currentPath = window.location.pathname.split('/').slice(2).join('/'); // Conserver le reste du chemin
        window.location.pathname = `/${lang}/${currentPath}`; // Mettre à jour l'URL avec la nouvelle langue
    };

    return (
        <Select
            onChange={(e) => changeLanguage(e.target.value)}
            value={currentLang}
            variant="outlined"
            MenuProps={{
                PaperProps: {
                    sx: {
                        bgcolor: isDarkMode ? 'rgb(28 25 23)' : 'white', // Couleur de fond
                    },
                },
            }}
            sx={{
                minWidth: 60,
                height: 40,
                borderRadius: '4px',
                padding: 0,
                backgroundColor: isDarkMode ? 'gray.800' : 'white', // Couleur de fond
                color: isDarkMode ? 'white' : 'gray.800', // Couleur du texte
                '& .MuiSelect-select': {
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 8px',
                },
                '&:focus': {
                    borderColor: '#646cff',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'text.secondary',
                },
                '& .MuiSelect-icon': {
                    color: isDarkMode ? 'white' : 'gray.800', // Couleur de l'icône
                },
            }}>
            <MenuItem value="en" className="flex items-center"
                sx={{
                    color: isDarkMode ? 'white' : 'gray.800', // Couleur du texte
                }}>
                <span className="fi fi-us mr-1"></span> {/* Drapeau américain */}
                EN
            </MenuItem>
            <MenuItem value="fr" className="flex items-center"
                sx={{
                    color: isDarkMode ? 'white' : 'gray.800', // Couleur du texte
                }}>
                <span className="fi fi-fr mr-1"></span> {/* Drapeau français */}
                FR
            </MenuItem>
        </Select >
    );
};

export default SwitchLanguage;
