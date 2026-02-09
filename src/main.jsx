import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Composant principal de l'application
import './index.css'; // Fichier de styles globaux (avec TailwindCSS)
import './i18n'; // Configuration i18n pour la gestion des langues
import { ThemeProvider } from './context/ThemeProvider'; // Importer le ThemeProvider
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';

// Point d'entrée principal de l'application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <ThemeProvider>
        <Suspense fallback={<div className="flex h-screen w-full items-center justify-center bg-[#050505]"><LoadingSpinner /></div>}>
          <App />
        </Suspense>
      </ThemeProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
