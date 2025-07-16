Azure MERN Boilerplate

## Description
Projet boilerplate MERN (MongoDB, Express, React, Node.js) configuré pour être déployé facilement sur Microsoft Azure.
Ce projet contient un backend Express connecté à une base de données MongoDB Atlas et un frontend React compilé pour la production.

📌 ASTUCE :
Lancer 2 terminaux séparés :
- Terminal 1 : npm start (serveur Express sur :5000)
- Terminal 2 : cd client && npm start (React sur :3000)

## Prérequis
Node.js et npm installés

Compte Microsoft Azure (pour déploiement)

Compte MongoDB Atlas avec un cluster configuré

Variables d’environnement dans un fichier .env à la racine :

.env
MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority
PORT=5000

## Installation locale
Cloner le dépôt :
git clone https://github.com/Sogutt/Azure-MERN-Boilerplate.git
cd Azure-MERN-Boilerplate
Installer les dépendances backend :


npm install
Installer les dépendances frontend :

cd client
yarn install
Compiler le frontend React pour la production :

npm run build
Revenir à la racine et lancer le serveur :
node server.js

## 📌 Fonctionnalités

- 🔎 Affichage de séries TV depuis une base MongoDB
- ➕ Ajout de nouvelles séries via un formulaire
- 🌐 API REST avec Express.js
- 🎨 Interface utilisateur avec React
- 📦 Déploiement possible sur Azure App Service

Variables d’environnement
MONGODB_URI : chaîne de connexion MongoDB Atlas (incluant username, password, cluster, database)

## Structure du projet

Azure-MERN-Boilerplate/
├── client/            # Frontend React
│   ├── build/         # Build production React
│   └── src/           # Code source React
│   │    ├── components/ # Navbar, Footer, Form
│   │    └── App.js
│   └── package.json
├── routes/
│   └── new-index.js # API GET pour récupérer les données
├── server.js # Backend Express
├── .env # Variables d'environnement
├── package.json
└── README.md

## ⚙️ Technologies

- **Frontend** : React, Axios
- **Backend** : Node.js, Express
- **Database** : MongoDB Atlas
- **Déploiement** : Microsoft Azure

## 🧪 Démarrage local

1. **Installation des dépendances** :
   ```bash
   npm install
   cd client
   npm install

   Lancer le backend (port 5000) :
   node server.js
   
   Lancer le frontend (port 3000) :
   cd client
   npm start

Auteur
Phina Diouf / Gomycode

