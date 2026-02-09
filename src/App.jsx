import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import LanguageLoader from './components/LanguageLoader';
import Layout from './components/Layout';

const Home = lazy(() => import('./pages/Home'));
const Contact = lazy(() => import('./pages/Contact'));
const CompanyList = lazy(() => import('./pages/CompanyList'));
const CompanyDetails = lazy(() => import('./pages/CompanyDetails'));
const ArticleList = lazy(() => import('./pages/ArticleList'));
const ArticleDetails = lazy(() => import('./pages/ArticleDetails'));
const NotFound = lazy(() => import('./pages/NotFound'));

const App = () => {
  return (
    <Router>
      <Layout>
        <LanguageLoader>
          <Routes>
            <Route path="/" element={<Navigate to="/fr" replace />} />
            <Route path="/:lang" element={<Home />} />
            <Route path="/:lang/contact" element={<Contact />} />
            <Route path="/:lang/enterprises" element={<CompanyList />} /> {/* Company List */}
            <Route path="/:lang/enterprises/:companySlug" element={<CompanyDetails />} /> {/* Company Details */}
            <Route path="/:lang/articles" element={<ArticleList />} /> {/* Article List */}
            <Route path="/:lang/articles/:articleSlug" element={<ArticleDetails />} /> {/* Article Details */}
            <Route path="/:lang/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </LanguageLoader>
      </Layout>
    </Router>
  );
};

export default App;
