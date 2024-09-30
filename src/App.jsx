import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Layout from './components/Layout';
import CompanyList from './pages/CompanyList';
import CompanyDetails from './pages/CompanyDetails';
import ArticleList from './pages/ArticleList';
import ArticleDetails from './pages/ArticleDetails';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const supportedLanguages = ['fr', 'en'];

const App = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const lang = window.location.pathname.split('/')[1];
    if (lang && supportedLanguages.includes(lang)) {
      i18n.changeLanguage(lang);
    } else {
      window.location.pathname = '/fr';
    }
  }, [i18n]);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/fr" replace />} />
          <Route path="/:lang" element={<Home />} />
          <Route path="/:lang/contact" element={<Contact />} />
          <Route path="/:lang/enterprises" element={<CompanyList />} /> {/* Company List */}
          <Route path="/:lang/enterprises/:companySlug" element={<CompanyDetails />} /> {/* Company Details */}
          <Route path="/:lang/articles" element={<ArticleList />} /> {/* Article List */}
          <Route path="/:lang/articles/:articleSlug" element={<ArticleDetails />} /> {/* Article Details */}
          <Route path="*" element={<Navigate to="/fr" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
