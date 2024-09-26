import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Layout from './components/Layout'; // Importer le Layout
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const supportedLanguages = ['fr', 'en']; // Langues supportées

const App = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = window.location.pathname.split('/')[1];
    if (lang && supportedLanguages.includes(lang)) {
      i18n.changeLanguage(lang);
    } else {
      // Rediriger vers la langue par défaut si la langue n'est pas supportée
      window.location.pathname = '/fr';
    }
  }, [i18n]);

  return (
    <Router>
      <Layout> {/* Utiliser le composant Layout */}
        <Routes>
          {/* Redirection si aucune langue n'est spécifiée */}
          <Route path="/" element={<Navigate to="/fr" replace />} />
          <Route path="/:lang" element={<Home />} />
          <Route path="/:lang/contact" element={<Contact />} />
          {/* Redirection vers le français pour les chemins non valides */}
          <Route path="*" element={<Navigate to="/fr" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
