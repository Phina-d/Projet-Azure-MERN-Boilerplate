// 📦 Importation du module Express
var express = require('express');

// 📁 Création d'un routeur (router) pour gérer les routes séparément
var router = express.Router();

// 🏠 Route GET pour la racine "/"
// Ici on renvoie une réponse JSON simple au lieu de rendre une vue Pug
router.get('/', function(req, res, next) {
  res.json({ message: 'Bienvenue sur l\'API Express' });
});

// 🚪 Exportation du routeur pour qu'il puisse être utilisé dans server.js
module.exports = router;
