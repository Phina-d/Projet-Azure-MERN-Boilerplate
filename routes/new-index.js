// 📦 Importation d'Express pour créer un routeur
const express = require('express');
const router = express.Router();

// 📦 Importation du client MongoDB natif
const { MongoClient } = require('mongodb');

// 🔒 Récupération de l'URL de connexion MongoDB depuis la variable d'environnement
const url = process.env.MONGODB_URI;


// 🔁 Route GET pour récupérer toutes les données de la collection "collection1"
router.get('/', async (req, res, next) => {
  let client;

  try {
    // 🔌 Connexion à MongoDB (async/await)
    client = await MongoClient.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


    // 🔍 Sélection de la base de données (extraite depuis l'URL ou définie explicitement)
    const dbName = process.env.DB_NAME || 'mernapp'; // adapte selon ton .env
    const dbo = client.db(dbName);

    // 📄 Récupération de tous les documents dans la collection "collection1"
    const result = await dbo.collection('collection1').find({}).toArray();

    // ✅ Log des données récupérées pour debug
    console.log('Données MongoDB récupérées :', result);  // Ajouté

    // 📤 Envoi des données au client en JSON
    res.json(result);

  } catch (error) {
    // ❌ Gestion d'erreur : affiche l'erreur dans la console et envoie une réponse 500
    console.error('Erreur lors de la récupération des données:', error);
    res.status(500).json({ message: 'Erreur serveur lors de la récupération des données' });
  } finally {
    // 🔐 Fermeture de la connexion si elle existe
    if (client) {
      await client.close();
    }
  }
});

// 🚪 Export du routeur
module.exports = router;
