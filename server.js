// 📦 Importer Express pour créer le serveur
const express = require('express');

// 🗂️ Importer path pour gérer les chemins de fichiers (utile pour servir React build)
const path = require('path');

// 🔐 Charger les variables d'environnement depuis le fichier .env
require('dotenv').config();

// 🚀 Créer une instance de l'application Express
const app = express();

// 🧩 Middleware pour parser le corps des requêtes en JSON
app.use(express.json());

// 🔁 Définir la route API qui utilise le routeur défini dans ./routes/new-index.js
app.use('/api/data', require('./routes/new-index')); // exemple : http://localhost:5000/api/data

// 🧱 Servir les fichiers statiques générés par React après build (dans client/build)
const buildPath = path.join(__dirname); // car maintenant les fichiers sont à la racine
app.use(express.static(buildPath));

// ⚠️ Pour toute autre requête (non-API), renvoyer index.html (permet le routage côté client avec React Router)
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

// 🌐 Définir le port d'écoute (soit via la variable d'environnement PORT, soit 5000 par défaut)
const PORT = process.env.PORT || 5000;

// 🎉 Lancer le serveur Express
app.listen(PORT, () => {
  console.log(`✅ Serveur lancé sur le port ${PORT}`);
});