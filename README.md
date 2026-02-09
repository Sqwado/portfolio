# Portfolio

Ce projet est un portfolio personnel développé avec React et Vite.

## 🛠 Technologies utilisées

- **Framework:** React + Vite
- **Langages:** JavaScript (ESModules)
- **Styles:** Tailwind CSS, Material UI (@mui/material), Emotion
- **Internationalisation:** i18next
- **Animations:** Framer Motion
- **Routing:** React Router

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir installé :
- [Node.js](https://nodejs.org/) (version recommandée : LTS)
- npm ou yarn

## 🚀 Installation

1. Clonez ce dépôt :
   ```bash
   git clone <votre-url-de-repo>
   cd portfolio
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```

## 💻 Lancer le projet

Pour démarrer le serveur de développement :

```bash
npm run dev
```

L'application sera accessible généralement sur `http://localhost:5173`.

## 🏗 Structure du projet

Voici un aperçu de l'organisation des fichiers dans `src/` :

```
src/
├── articles/       # Contenu des articles/projets
├── assets/         # Images, polices et autres fichiers statiques
├── components/     # Composants réutilisables (Boutons, Cards, etc.)
├── context/        # Contextes React (états globaux)
├── entreprises/    # Données ou composants relatifs aux entreprises
├── locales/        # Fichiers de traduction (JSON pour i18n)
├── pages/          # Pages principales de l'application (Home, About, etc.)
├── utils/          # Fonctions utilitaires et helpers
├── App.jsx         # Composant racine de l'application
├── main.jsx        # Point d'entrée JS (montage de React)
└── i18n.js         # Configuration de l'internationalisation
```

## 📦 Build pour la production

Pour construire l'application pour la production (fichiers optimisés dans `dist/`) :

```bash
npm run build
```

Pour prévisualiser la version construite localement :

```bash
npm run preview
```

## 🔍 Linting

Pour vérifier la qualité du code et les erreurs potentielles :

```bash
npm run lint
```
